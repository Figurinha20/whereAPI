const Database=require("../database/database");
const bcrypt=require("bcrypt");
const Codigopostal=require("./codigopostal.model")

const SALT_ROUNDS = 10;

class Restaurante{
    constructor(id,nome,password,foto_perfil,informacao,morada,aprovacao,cod_postal,disponibilidade,email){
        this.id = id;
        this.nome = nome;
        this.password=password;
        this.foto_perfil =foto_perfil;
        this.informacao=informacao;
        this.morada=morada;
        this.aprovacao=aprovacao;
        this.cod_postal=cod_postal;
        this.disponibilidade=disponibilidade;
        this.email=email;
    }

    static create(nome, password, morada, cod_postal, localidade, email){
        const cod_postalSave=cod_postal;
        nome=Database.escape(nome);
        password=bcrypt.hashSync(Database.escape(password),SALT_ROUNDS);
        morada=Database.escape(morada)
        cod_postal=Database.escape(cod_postal)
        email=Database.escape(email);
        const sql = `INSERT INTO restaurante (nome, password, foto_perfil, informacao, morada, aprovacao, cod_postal, disponibilidade, email) VALUES (?,?,?,?,?,?,?,?,?);`
        return Restaurante.find(email).then(restaurante=>{ //verificar se existe utilizador para esse email
            if(restaurante===undefined){//se o user com o email nao existir criar conta
                return Database.query(sql,[nome, password, "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png", "Adicionar Informações Relevantes", "morada", false, cod_postal, true, email])
                .then(suc=>{
                    if (suc !== undefined){
                        return Codigopostal.create(cod_postalSave, localidade)
                    }
                });
            }else{ // nao cria conta
                return "Conta já Existente";
            }
        });
    }   

    static existsWithEmail(email){
        const sql = "SELECT * FROM restaurante WHERE email = ?";
        return Database.query(sql, [email]).then(res=>{
            return res.length>0 || res.length===undefined;
        });
    }


    static getAllRestaurantes(){
        const sql = "SELECT * FROM restaurante";
        return Database.query(sql);
    }

}
module.exports = Restaurante;