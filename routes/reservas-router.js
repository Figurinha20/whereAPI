const Reserva=require("../classes/Reserva");
const Router=require("express").Router;
var router=Router();

router.get("/nonAvailableTablesIds", (req, res) => {
    Reserva.findNonAvailableTablesIds(req.body.data_hora_reservada, req.body.id_restaurante).then(tableIds =>{
        res.json(tableIds)
    });
    
});

router.get("/testUser", (req, res) => {
    Utilizador.getAllUtilizadores().then(results=>res.json(results));
});

module.exports=router;