var express = require('express');
var app = express();
var PORT = 3000;

const cors  = require("cors");

//ruteo dispositivo
var router_Dispositivo = require('./routes/dispositivo');
//ruteo dispositivo
var router_Medicion = require('./routes/medicion');
var router_Logs = require('./routes/logs');
app.use(express.json());

let corsOptions = {
	origin: "*",
	optionsSucessStatus: 200
};
app.use(cors(corsOptions));


app.use('/main/api/dispositivo', router_Dispositivo);

app.use('/main/api/medicion', router_Medicion);
app.use('/main/api/logs', router_Logs);

app.use(express.static('/main/node/app/static/'));

app.listen(PORT, function(req, res) {
    console.log("API Funcionando ");
});