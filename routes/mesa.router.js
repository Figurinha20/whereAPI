const Router=require("express").Router;
const MesaControllers=require("../controllers/mesa.controller")
var router=Router();

router.get("/mesa", MesaControllers.get);
router.post("/mesa", MesaControllers.post);
router.delete("/mesa", MesaControllers.delete);

module.exports=router;

