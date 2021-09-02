import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogsService } from '../services/logs.service';
import { Logs } from '../model/Logs';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  idElectrovalvula;
  logs : Logs[];

  constructor(
    private router:ActivatedRoute,
    private logService:LogsService
  ) { 

  }

  ngOnInit() {
    console.log("Entro a página de Logs");
    /* obtengo la identificación de la electrovalvula recibida en la url del router */
    this.idElectrovalvula = this.router.snapshot.paramMap.get('electrovalvulaId');
    /* Traigo la medición más reciente desde la db */
    console.log("electrovalvulaId: "+this.idElectrovalvula);
    this.logService.getLogsByElectrovalvulaId(this.idElectrovalvula).then(res => {
      this.logs = res;
      console.log("Logs:"+this.logs);
      
    } );
  }

}
