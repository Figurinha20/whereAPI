const Router=require("express").Router;
const FotoControllers=require("../controllers/foto.controller")
var router=Router();

router.get("/foto", FotoControllers.get);
router.post("/foto", FotoControllers.post);
router.delete("/foto", FotoControllers.delete);

module.exports=router;