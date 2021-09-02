import { Component, OnInit } from '@angular/core';
import { MedicionService } from '../services/medicion.service';
import { Medicion } from '../model/Medicion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  
  sensorId: string;
  
  mediciones: Medicion[];
  

  

  constructor(
    private router:ActivatedRoute,
    private medicionServ : MedicionService) {
    
   }

  ngOnInit() {
    console.log("Entro a página Mediciones");
    /* obtengo la identificación del sensor recibida en la url del router */
    this.sensorId = this.router.snapshot.paramMap.get('sensorId');
    /* Traigo la medición más reciente desde la db */
    console.log("sensorId: "+this.sensorId);
    this.medicionServ.getMedicionesByIdDispositivo(this.sensorId).then(res => {
      this.mediciones = res;
      console.log("Mediciones:"+this.mediciones);
      
    } );
  }

}
