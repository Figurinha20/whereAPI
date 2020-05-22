const express = require("express");
//middlewares
const bodyParser = require("body-parser");
const cors = require("cors");
const validator = require('express-validator');
const sanitas = require("./middlewares/sanitas.js");

const config = require("./config.json");
//routes
const UtilizadorRouter = require("./routes/utilizador.router");
const RestauranteRouter = require("./routes/restaurante.router")

const app=express();

// ############# MIDDLEWARES ##################
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()); //parse ao body para json
app.use(cors()); //cors para Cross Origin Resource Sharinng entre o API e o front-end
// app.use(validator); //express-validator para disponiblizar as funções de sanitize
// app.use(sanitas.sanitas); //sanitizer para não deixar código passar nos inputs

// ################ ROUTES ##############################
app.use(UtilizadorRouter)
app.use(RestauranteRouter)


app.listen(config.port, () => console.log(config.serverStartMessage, config.host, config.port));