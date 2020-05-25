const Router=require("express").Router;
const ReservaControllers=require("../controllers/reserva.controller")
var router=Router();

router.get("/getAllRestauranteReservas", ReservaControllers.getAllRestauranteReservas);
router.get("/getAllUtilizadorReservas", ReservaControllers.getAllUtilizadorReservas);
router.post("/reserva", ReservaControllers.post);
router.put("/reserva", ReservaControllers.put)
router.delete("/reserva", ReservaControllers.delete);
router.get("/nonAvailableTablesIds", ReservaControllers.getNonAvailabeTablesIds);

module.exports=router;