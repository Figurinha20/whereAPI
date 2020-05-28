const Router=require("express").Router;
const ReservaControllers=require("../controllers/reserva.controller")
var router=Router();

router.get("/reservas/getAllRestauranteReservas/:id_restaurante", ReservaControllers.getAllRestauranteReservas);
router.get("/reservas/getAllUtilizadorReservas/:id_utilizador", ReservaControllers.getAllUtilizadorReservas);
router.post("/reservas", ReservaControllers.post);
router.put("/reservas/restaurantes/:id_restaurante/utilizadores/:id_utilizador/:data_hora_reservada/:data_hora", ReservaControllers.put)
router.delete("/reservas/restaurantes/:id_restaurante/utilizadores/:id_utilizador/:data_hora_reservada/:data_hora", ReservaControllers.delete);
router.get("/reservas/nonAvailableTablesIds/:id_restaurante/:data_hora_reservada", ReservaControllers.getNonAvailabeTablesIds);

module.exports=router;