const Database=require("../database/database");


class Reserva{
    constructor(data_hora_reservada, id_client, id_restaurante, id_mesa, data_hora){
        this.data_hora_reservada=data_hora_reservada;
        this.id_client=id_client;
        this.id_restaurante=id_restaurante;
        this.id_mesa=id_mesa;
        this.data_hora=data_hora;
        this.confirmacao=false;
        this.presenca=false;
    }

    static create(data_hora_reservada, id_client, id_restaurante, id_mesa, data_hora){
        data_hora_reservada=Dabase.escape(data_hora_reservada);
        id_client=Dabase.escape(id_client);
        id_restaurante=Dabase.escape(id_restaurante);
        id_mesa=Dabase.escape(id_mesa);
        data_hora=Dabase.escape(data_hora);
        const sql = "INSERT INTO reserva (data_hora_reservada, id_client, id_restaurante, id_mesa, data_hora, confirmacao, presenca) VALUES (?,?,?,false,false);";
        
        return Reserva.find(data_hora_reservada, id_restaurante, id_mesa).then(reserva=>{ 
            //verificar se existe reserva confirmada para  
            //mesma data_hora_reservada e mesa

            if(reserva===undefined){//se uma reserva confirmada nao existir criar pedido
                return Database.query(sql,[data_hora_reservada, id_client, id_restaurante, id_mesa, data_hora]);
            }else{ // nao cria pedido
                return "Error! This table is unavailable you should not be able to book it.";
            }
        });
    }

    static find(data_hora_reservada, id_restaurante, id_mesa){
        data_hora_reservada=Database.escape(data_hora_reservada);
        id_restaurante=Database.escape(id_restaurante);
        id_mesa=Database.escape(id_mesa);

        const sql = "SELECT * FROM utilizador WHERE data_hora_reservada = ? AND id_restaurante = ? AND id_mesa = ?";
        return Database.query(sql, [data_hora_reservada, id_restaurante, id_mesa]).then(res=>{
            const reserva=res[0];
            return reserva;
        });
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