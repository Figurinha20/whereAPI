const Router=require("express").Router;
const TagControllers=require("../controllers/tag.controller")
var router=Router();

router.get("/tags", TagControllers.get);

module.exports=router;

