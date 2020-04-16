const Utilizador=require("../classes/Utilizador");
const Router=require("express").Router;
var router=Router();
router.get("/test", (req, res) => {
    res.json("tá a dar")
});

router.get("/testUser", (req, res) => {
   Utilizador.getAllUtilizadores();
   res.json("Esta na consola");
});


module.exports=router;

