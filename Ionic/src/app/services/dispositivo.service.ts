import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
 urlApi="http://localhost:8000/main/api";
  
  constructor(private _http: HttpClient ) {
   }
 

   getListadoDispositivos():Promise<Dispositivo[]>{
    return this._http.get(this.urlApi+ "/dispositivo/").toPromise().then((listado:Dispositivo[])=>{
      return listado;
    });
  }

  getDispositivo(id):Promise<Dispositivo>{     
    return this._http.get(this.urlApi+"/dispositivo/"+id).toPromise().then((dispositivo:Dispositivo)=>{
      return dispositivo;
    });
  };
  
}
