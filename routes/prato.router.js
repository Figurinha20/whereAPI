const Router=require("express").Router;
const PratoControllers=require("../controllers/prato.controller")
var router=Router();

router.get("/prato", PratoControllers.get);
router.post("/prato", PratoControllers.post);
router.delete("/prato", PratoControllers.delete);

module.exports=router;

