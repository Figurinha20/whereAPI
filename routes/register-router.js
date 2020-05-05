const Router=require("express").Router;
const bcrypt=require("bcrypt");
const Database=require("../database/database");
const Utilizador=require("../classes/Utilizador");
var router=Router();

router.post("/register", (req, res) => {
    console.log(req.body);
    Utilizador.create(req.body.user_name, req.body.email, req.body.password).then(result=>{
        res.json(result);
    });
});

router.post("/registerRestaurant", (req, res) => {
   
});

router.get("/testUser", (req, res) => {
    Utilizador.getAllUtilizadores().then(results=>res.json(results));
});

module.exports=router;

//email, username, password, adress, postal-code, locality ---------------- Restaurante
//email, username, password ---------------------- Cliente