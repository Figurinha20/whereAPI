const Router=require("express").Router;
const bcrypt=require("bcrypt");
const Database=require("../database/database");
const Utilizador=require("../classes/Utilizador");
const Restaurante=require("../classes/Restaurante")
var router=Router();

router.post("/register", (req, res) => {
    console.log(req.body);
    Utilizador.create(req.body.user_name, req.body.email, req.body.password).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
});

router.post("/registerRestaurant", (req, res) => {
    console.log(req.body)
    Restaurante.create(req.body.nome, req.body.password, req.body.morada, req.body.cod_postal, req.body.localidade, req.body.email).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
});

router.get("/testUser", (req, res) => {
    Utilizador.getAllUtilizadores().then(results=>res.json(results));
});

module.exports=router;

//email, username, password, adress, postal-code, locality ---------------- Restaurante
//email, username, password ---------------------- Cliente