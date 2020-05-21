const Database=require("../database/database");
const bcrypt=require("bcrypt");

const SALT_ROUNDS = 10;

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

    static create(user_name, email, password){
        user_name=Database.escape(user_name);
        email=Database.escape(email);
        password=bcrypt.hashSync(Database.escape(password),SALT_ROUNDS);
        const sql = "INSERT INTO utilizador (user_name, email, password, administrador, foto) VALUES (?,?,?,?,?);";
        return Utilizador.existsWithEmail(email).then(exists=>{ //verificar se existe utilizador para esse email
            if(exists===false){//se o user com o email nao existir criar conta
                return Database.query(sql,[user_name, email, password, false, "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"]);
            }else{ // nao cria conta
                return "Conta já Existente";
            }
        });
    }   

    static existsWithEmail(email){
        const sql = "SELECT * FROM utilizador WHERE email = ?";
        return Database.query(sql, [email]).then(res=>{
            return res.length>0 || res.length===undefined;
        });
    }

    static login(email, password){
        email=Database.escape(email);
        password=Database.escape(password);

        const sql = "SELECT * FROM utilizador WHERE email = ?";
        return Database.query(sql, [email]).then(res=>{
            const user=res[0];
            if(user){
                if(bcrypt.compareSync(password, user.password)){//comparar pass encryptada com a escrita pelo utilizador
                    return user;//true if credentials match
                }else{
                    return undefined;//false if credentials no match
                };
            }else{
                console.error("CANT FIND USER FOR THAT EMAIL & PASS");
                return undefined;
            }
        });
    }

    static update(id_utilizador, user_name, email, foto, numero_tel){
        id_utilizador=Database.escape(id_utilizador);
        user_name=Database.escape(user_name);
        email=Database.escape(email);
        foto=Database.escape(foto);
        numero_tel=Database.escape(numero_tel);
        
        if (numero_tel == "NULL") numero_tel = undefined

        const sql = "UPDATE utilizador SET user_name = ?, email = ?, foto = ?, numero_tel = ? WHERE id_utilizador = ?";
        return Database.query(sql, [user_name, email, foto, numero_tel, id_utilizador]).then(res=>{
            if(res.affectedRows > 0){
                return "Mudanças Salvas"
            }
            else{return "Sem Mudanças"}
        })
    }

    static delete(id_utilizador){
        id_utilizador=Database.escape(id_utilizador);

        const sql = "DELETE FROM utilizador WHERE id_utilizador = ?";
        return Database.query(sql, [id_utilizador]).then(res=>{
            if (res.affectedRows > 0){
                return "Utilizador Removido"
            }
            else{return "Utilizador Não Existente"}
        })
    }

    
    static getAllUtilizadores(){
        const sql = "SELECT * FROM utilizador";
        return Database.query(sql);
    }

}
module.exports = Utilizador;

// var sql = "SELECT * FROM users WHERE user = $1 AND pass = $2";
// db.query(sql, [user, pass], function (err, results)