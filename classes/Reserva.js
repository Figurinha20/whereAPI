const Database=require("../database/database");


class Reserva{
    constructor(data_hora_reservada, id_client, id_restaurante, id_mesa, data_hora){
        this.data_hora_reservada=data_hora_reservada;
        this.id_client=id_client;
        this.id_restaurante=id_restaurante;
        this.id_mesa=id_mesa;
        this.data_hora=data_hora;
        this.confirmacao=false;
        this.presence=false;
    }

    static findNonAvailableTablesIds(data_hora_reservada, id_restaurante){
        data_hora_reservada=Database.escape(data_hora_reservada);
        id_restaurante=Database.escape(id_restaurante);

        //se a data_hora_reservada for igual E id_restaurante igual E a reserva está confirmada, o id_mesa dessa
        //reserva está ocupado

        const sql = "SELECT id_mesa FROM reserva WHERE data_hora_reservada = ? AND id_restaurante = ? AND confirmacao = true";
        return Database.query(sql, [data_hora_reservada, id_restaurante] ).then(res=>{
            const nonAvailableTables=res;
            return nonAvailableTables;
        });
    }

}

module.exports =Reserva;