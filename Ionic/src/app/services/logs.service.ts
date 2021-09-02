import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logs } from '../model/Logs';

@Injectable(
    {providedIn: 'root'}
)
export class LogsService {
    urlApi = "http://localhost:8000/main/api";
    constructor(private _http: HttpClient) { }

    getLogsByElectrovalvulaId(electrovalvulaId) :Promise<Logs[]>{
        return this._http.get(this.urlApi+"/logs/"+electrovalvulaId+"/todas").toPromise().then((Logs: Logs[]) => {
            console.log(Logs);
            return Logs;
      })
    };

    agregarLog(log: Logs) {
        return this._http.post(this.urlApi+"/logs/agregar",
        {logRiegoId:log.LogRiegoId, electrovalvulaId:log.ElectrovalvulaId, apertura:log.Apertura, fecha:log.Fecha})
        .toPromise()
        .then((result)=>{
            console.log(Logs);
            return result;
        })
    };
}