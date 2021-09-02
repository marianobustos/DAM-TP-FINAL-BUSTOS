export class Logs {
    /* Respeto la estructura de la base de datos */
    private _LogRiegoId: number;
    private _fecha: Date;
    private _apertura: number;
    private _electrovalvulaId: number;

    constructor(LogRiegoId: number, fecha: Date, apertura: number, electrovalvulaId: number) {
        this._LogRiegoId = LogRiegoId;
        this._fecha = fecha;
        this._apertura = apertura;
        this._electrovalvulaId = electrovalvulaId;
    }

    /* Getters */
    
    public get LogRiegoId(): number {
        return this._LogRiegoId;
    }

    public get Fecha(): Date {
        return this._fecha;
    }

    public get Apertura(): number {
        return this._apertura;
    }

    public get ElectrovalvulaId(): number {
        return this._electrovalvulaId;
    }

    /* Setters */

    public set LogRiegoId(LogRiegoId: number) {
        this._LogRiegoId = LogRiegoId;
    }

    public set Fecha(fecha: Date) {
        this._fecha = fecha;
    }
    
    public set Apertura(apertura: number) {
        this._apertura = apertura;
    }

    public set ElectrovalvulaId(electrovalvulaId: number) {
        this._electrovalvulaId = electrovalvulaId;
    }



}