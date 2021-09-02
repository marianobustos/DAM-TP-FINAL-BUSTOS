import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  listadoSensores;

  constructor(
    private listadoServ: DispositivoService
    ) {
    this.listadoServ.getListadoDispositivos().then(res => {
      console.log(res);
      this.listadoSensores = res;
    });
  }



  ngOnInit() {
  }

}
