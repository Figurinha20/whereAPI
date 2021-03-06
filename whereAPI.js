const express = require("express");
//middlewares
const bodyParser = require("body-parser");
const cors = require("cors");
const validator = require('express-validator');
const sanitas = require("./middlewares/sanitas.js");

const config = require("./config.json");
const PORT = process.env.PORT || 5000
//routes
const UtilizadorRouter = require("./routes/utilizador.router");
const RestauranteRouter = require("./routes/restaurante.router");
const FotoRouter = require("./routes/foto.router");
const MesaRouter = require("./routes/mesa.router");
const PratoRouter = require ("./routes/prato.router");
const ReservaRouter = require("./routes/reserva.router");
const ComentarioRouter = require("./routes/comentario.router");
const UtilizadorTagRouter = require("./routes/utilizador_tag.router");
const RestauranteTagRouter = require("./routes/restaurante_tag.router");
const TagRouter = require("./routes/tag.router");
const {escapadela} = require("./middlewares/escape.js");

const app=express();

// ############# MIDDLEWARES ##################
app.use(bodyParser.urlencoded({extended : true}));
app.use(escapadela);
app.use(bodyParser.json()); //parse ao body para json
app.use(cors());
 //cors para Cross Origin Resource Sharinng entre o API e o front-end
// app.use(validator); //express-validator para disponiblizar as funções de sanitize
// app.use(sanitas.sanitas); //sanitizer para não deixar código passar nos inputs

// ################ ROUTES ##############################
app.use(UtilizadorRouter)
app.use(RestauranteRouter)
app.use(FotoRouter)
app.use(MesaRouter)
app.use(PratoRouter)
app.use(ReservaRouter)
app.use(ComentarioRouter)
app.use(UtilizadorTagRouter)
app.use(RestauranteTagRouter)
app.use(TagRouter)
app.get("/",function(req,res,next){
    res.json("ok")
})
app.listen(PORT, () => console.log(config.serverStartMessage,PORT));