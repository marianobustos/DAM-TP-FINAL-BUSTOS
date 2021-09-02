var express = require('express');
var routerMedicion = express.Router();
var pool = require('../../mysql');

//Espera recibir por parámetro un id de dispositivo y devuelve su última medición
routerMedicion.get('/:idDispositivo', function(req, res) {
    console.log("GET /medicion/:"+req.params.idDispositivo);
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        console.log("Dispositivo:" + result[0].dispositivoId);
        console.log("Medicion:" + result[0].medicionId);
        console.log("Valor:" + result[0].valor);
        console.log("Fecha:" + result[0].fecha);
        
        res.send(result[0]);
    });
});

//Espera recibir por parámetro un id de dispositivo y devuelve todas sus mediciones
routerMedicion.get('/:idDispositivo/todas', function(req, res) {
    console.log("GET /medicion/:"+req.params.idDispositivo + "/todas");
    pool.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        console.log("result: " + result);
        res.send(result);
    });
});

//Espera recibir por parámetro un id de dispositivo y un valor de medición y lo inserta en base de datos.
routerMedicion.post('/agregar', function(req, res) {
    pool.query('Insert into Mediciones (fecha,valor,dispositivoId) values (?,?,?)', [new Date(), req.body.valor, req.body.dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerMedicion;