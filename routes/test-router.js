const Utilizador=require("../classes/Utilizador");
const Router=require("express").Router;
var router=Router();
router.get("/test", (req, res) => {
    res.json("tá a dar")
});

router.get("/testUser", (req, res) => {
    const newUser = new Utilizador(0, "Rui","fig@merda.pt","chato", false, "www.link.org", "96966969");
    res.json(newUser)
});


module.exports=router;

