const Router=require("express").Router;
const ComentarioControllers=require("../controllers/comentario.controller")
var router=Router();

router.get("/comentario", ComentarioControllers.get);
router.post("/comentario", ComentarioControllers.post);

module.exports=router;