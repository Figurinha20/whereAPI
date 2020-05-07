const Database=require("../database/database");

class Codigopostal{
    constructor(cod_postal,localidade){
        this.cod_postal=cod_postal;
        this.localidade=localidade;
    }

    static create(cod_postal, localidade){
        cod_postal=Database.escape(cod_postal);
        localidade=Database.escape(localidade);
        const sql = `INSERT INTO codigo_postal (cod_postal, localidade) VALUES (?,?)`;
        return Database.query(sql, [cod_postal, localidade]);
    }
}

module.exports=Codigopostal;