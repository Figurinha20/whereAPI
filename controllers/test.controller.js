const Utilizador=require("../classes/Utilizador");
const Restaurante=require("../classes/Restaurante");
const Router=require("express").Router;
var router=Router();

router.get("/test", (req, res) => {
    res.json("tá a dar")
});

router.get("/testUser", (req, res) => {
    Utilizador.getAllUtilizadores().then(results=>res.json(results));
});

module.exports=router;