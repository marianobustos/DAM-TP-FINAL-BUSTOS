var express = require('express');
var routerLogs = express.Router();
var pool = require('../../mysql');

//Espera recibir por parámetro un id de electrovalvula y devuelve todos sus logs
routerLogs.get('/:idElectrovalvula/todas', function (req, res) {
    console.log("LOG GET-> /:" + req.params.idElectrovalvula + "/todas");
    pool.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha desc', [req.params.idElectrovalvula], function (err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        if (result.length != 0) {
            console.log("Log ID:" + result[0].id);
            console.log("Log electrovalvulaId:" + result[0].electrovalvulaId);
            console.log("Log fecha:" + result[0].fecha);
            console.log("Apertura:" + result[0].apertura);
        }
        else console.log(result);
        res.send(result);
    });
});
routerLogs.post('/agregar', function (req, res) {
    console.log("Nuevo metodo post para insertar un log, se recibió:")
    console.log(req.body);
    pool.query('insert into Log_Riegos(apertura, fecha, electrovalvulaId) values( ?, ?, ?)', [req.body.apertura, new Date(), req.body.electrovalvulaId], function (err, result, fields) {
        if (err) {
            res.send(err).status(400);
            console.log(err);
            return;
        }
        res.send(result);
        console.log(result);
    });
});

module.exports = routerLogs;