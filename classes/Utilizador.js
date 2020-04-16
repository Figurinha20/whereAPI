const Database=require("../database/database");

class Utilizador{
    constructor(id, user_name, email, password, administrador, foto, numero_tel){
        this.id = id;
        this.user_name = user_name;
        this.email = email;
        this.password = password;
        this.administrador = administrador;
        this.foto = foto;
        this.numero_tel = numero_tel;
    }

    static getAllUtilizadores(){
        const sql = "SELECT * FROM utilizador";
        return Database.query(sql);
    }
}
module.exports = Utilizador;