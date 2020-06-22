const Router=require("express").Router;
const RestauranteTagControllers=require("../controllers/restaurante_tag.controller")
var router=Router();

router.get("/restaurantes/:id_restaurante/tags", RestauranteTagControllers.get);
router.post("/restaurantes/:id_restaurante/tags", RestauranteTagControllers.post);
router.put("/restaurantes/:id_restaurante/tags/:id_tag", RestauranteTagControllers.put);
router.delete("/restaurantes/:id_restaurante/tags/:id_tag", RestauranteTagControllers.delete);

module.exports=router;
