const Router=require("express").Router;
const UtilizadorTagControllers=require("../controllers/utilizador_tag.controller")
var router=Router();

router.get("/utilizadores/:id_utilizador/tags", UtilizadorTagControllers.get);
router.post("/utilizadores/:id_utilizador/tags/:id_tag", UtilizadorTagControllers.post);
router.delete("/utilizadores/:id_utilizador/tags/:id_tag", UtilizadorTagControllers.delete);

module.exports=router;