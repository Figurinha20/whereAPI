const Reserva=require("../classes/Reserva");
const Router=require("express").Router;
var router=Router();
//obrigado Rui és lindo :)
//o meu PC é uma porcaria
router.get("/nonAvailableTablesIds", (req, res) => {
    Reserva.findNonAvailableTablesIds(req.body.data_hora_reservada, req.body.id_restaurante).then(tableIds =>{
        res.json(tableIds)
    }).catch(err => res.json(err));
    
});

//CREATE
router.post("/reserva", (req, res) => {
    Reserva.create(req.body.data_hora_reservada, req.body.id_utilizador, req.body.id_restaurante, req.body.id_mesa,
         req.body.data_hora).then(serverAnswer =>{  
         console.log(req.body);
             
         res.json(serverAnswer);
    }).catch(err => res.json(err));
});

//READ
router.get("/reserva", (req, res) => {
    Reserva.getAllReservas().then(bookingHistory =>{ res.json(bookingHistory)}).catch(err => res.json(err));
});

//UPDATE
router.put("/reserva", (req, res) => {
    Reserva.update(data_hora_reservada, id_utilizador, id_restaurante, id_mesa, data_hora, newConfirmacao, newPresenca)
    .then(update =>{ res.json(update)})
    .catch(err => res.json(err));
    
});
//DELETE
router.delete("/reserva", (req, res) => {
    Reserva.deleteReserva(data_hora_reservada, id_utilizador, id_restaurante, id_mesa, data_hora)
    .then(deleteLog =>{ res.json(deleteLog)})
    .catch(err => res.json(err));
    
});

module.exports=router;