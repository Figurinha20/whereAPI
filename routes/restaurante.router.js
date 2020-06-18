const Router=require("express").Router;
const RestauranteControllers=require("../controllers/restaurante.controller")
var router=Router();

router.post("/restaurantes", RestauranteControllers.get);
router.post("/criarRestaurantes", RestauranteControllers.post);
router.put("/restaurantes/:id_restaurante", RestauranteControllers.put);
router.delete("/restaurantes/:id_restaurante", RestauranteControllers.delete);
router.get("/restaurantes/:id_restaurante", RestauranteControllers.getRestauranteById);

module.exports=router;

//email, username, password, adress, postal-code, locality ---------------- Restaurante
//email, username, password ---------------------- Cliente
