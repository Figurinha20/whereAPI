const Router=require("express").Router;
const RestauranteControllers=require("../controllers/restaurante.controller")
var router=Router();

router.get("/restaurante", RestauranteControllers.get);
router.post("/restaurante", RestauranteControllers.post);
router.put("/restaurante", RestauranteControllers.put);
router.delete("/restaurante", RestauranteControllers.delete);

module.exports=router;

//email, username, password, adress, postal-code, locality ---------------- Restaurante
//email, username, password ---------------------- Cliente