//correr antes npm install --save highcharts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import { Medicion } from '../model/Medicion';
import { MedicionService } from '../services/medicion.service';
import { LogsService } from '../services/logs.service';
import { Logs } from '../model/Logs';


declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  private valorObtenido:number=0;
  public myChart;
  private chartOptions;
  
  public sensorId: string;
  public electrovalvulaId: number;
  public ultimaMedicion: number;  /* medición más reciente para utilizar en el indicador */
  public mediciones : Medicion[]; /* listado de mediciones para utilizar en la pagina con la tabla de mediciones */
  public logs: Logs[];            /* listado de logs para utilizar en la pagina con la tabla de logs */
  public electrovalvulaAbierta: number = 0;

  constructor(
    private router:ActivatedRoute,
    private medicionServ : MedicionService,
    private LogsServ: LogsService

  ) { 
    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
      /* this.valorObtenido=60; */
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.ultimaMedicion],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },500);
  }

  abrirElectroValvula(){
    console.log("abrir electrovalvula");
    let nvolog: Logs = new Logs(1234,new(Date),1,this.electrovalvulaId);
    console.log("NvoLog: "+nvolog);
    this.LogsServ.agregarLog(nvolog).then(()=>{
      console.log("Nuevo Log enviado");
      });
    console.log("Compruebo el update del log");
    this.LogsServ.getLogsByElectrovalvulaId(this.electrovalvulaId).then(res => {
        this.logs = res;
        console.log("Logs.Apertura:" +this.logs[0].Apertura);
        this.electrovalvulaAbierta=this.logs[0].Apertura;  /* Actualizo la variable para mostrar el texto del boton */
        console.log("ElectrovalvulaAbierta: "+this.electrovalvulaAbierta);
        /* No se porque no me toma bien el valor de la key Apertura */
        this.electrovalvulaAbierta=1;
      } );
  }

  cerrarElectroValvula(){
    console.log("cerrar electrovalvula");
    let nvoLog: Logs = new Logs(4321,new(Date),0,this.electrovalvulaId);
    console.log("NvoLog: "+nvoLog);
    this.LogsServ.agregarLog(nvoLog).then(()=>{
      console.log("Nuevo Log enviado");
      }
    );
    console.log("Compruebo el update del log");
    this.LogsServ.getLogsByElectrovalvulaId(this.electrovalvulaId).then(res => {
        this.logs = res;
        console.log("Logs.Apertura:" +this.logs[0].Apertura);
        this.electrovalvulaAbierta=this.logs[0].Apertura;  /* Actualizo la variable para mostrar el texto del boton */
        console.log("ElectrovalvulaAbierta: "+this.electrovalvulaAbierta);
        /* No se porque no me toma bien el valor de la key Apertura */
        this.electrovalvulaAbierta=0;
      } );
  }




  ngOnInit() {
    console.log("Entro a pagina Dispositivo");
    /* obtengo la identificación del sensor recibida en la url del router */
    this.sensorId = this.router.snapshot.paramMap.get('sensorId');
    this.electrovalvulaId=  parseInt(this.router.snapshot.paramMap.get('electrovalvulaId'),10);
    /* Traigo la medición más reciente desde la db */
    console.log("sensorId: "+this.sensorId);
    this.medicionServ.getMedicionByIdDispositivo(this.sensorId).then(res => {
      this.ultimaMedicion = res.valor;
      console.log("Ultima medicion: "+this.ultimaMedicion);
      
    } );
    
    
    /* Traigo los logs del sensor desde la db */
    this.LogsServ.getLogsByElectrovalvulaId(this.electrovalvulaId).then(res => {
      this.logs = res;
      console.log("Logs.Apertura:" +this.logs[0].Apertura);
      this.electrovalvulaAbierta=this.logs[0].Apertura;  /* Actualizo la variable para mostrar el texto del boton */
      console.log("ElectrovalvulaAbierta: "+this.electrovalvulaAbierta);
      /* No se porque no me toma bien el valor de la key Apertura */
    } );
  }

  ionViewDidEnter() {
    this.generarChart();
  }
  

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N° ' +this.sensorId
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.ultimaMedicion],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }





}

/* Modelo del sensor propuesto por la catedra */


