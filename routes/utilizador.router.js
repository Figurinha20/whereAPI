const Router=require("express").Router;
const UtilizadorController=require("../controllers/utilizador.controller")
var router=Router();

router.get("/utilizador", UtilizadorController.get);
router.post("/utilizador", UtilizadorController.post);
router.put("/utilizador", UtilizadorController.put);
router.delete("/utilizador", UtilizadorController.delete);

module.exports=router;

//email, username, password, adress, postal-code, locality ---------------- Restaurante
//email, username, password ---------------------- Cliente
