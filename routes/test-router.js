const Router=require("express").Router;
var router=Router();
router.get("/test", (req, res) => {
    res.json("tá a dar")
});

module.exports=router;

