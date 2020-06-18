const Database = require("../database/database");

exports.get = (req, res, next) => {
    getAllTags().then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}


function getAllTags(){ //Receber todas as tags existentes no site

    const sql = "SELECT id_tag, desc_tag FROM tag";
    return Database.query(sql).then(res=>{
        return res
    })
}


function create(desc_tag) {
    desc_tag = Database.escape(desc_tag);
    const sql = `INSERT INTO tag (desc_tag) VALUES (?)`;
    const sql1 = `SELECT id_tag FROM tag WHERE desc_tag = ?`; //para descobrir o id da tag que foi criada
    return existsTag(desc_tag).then(exists=>{ //verificar se a tag já está na base de dados
        if(exists===false){ //se o a tag não existir, criar
            return Database.query(sql, [desc_tag]).then(suc=>{
                return Database.query(sql1,[desc_tag]).then(suc=>{
                    return [true, res[0]] 
                    //se a tag foi criada, enviar true e enviar o id da tag
                }) 
            })
        }
        else{
            return Database.query(sql1,[desc_tag]).then(suc=>{
                return [false, res[0]] 
                //se a tag não foi criada, enviar false e o id da tag 
            }) 
        }
    })
    
}

function existsTag(desc_tag) {
    const sql = "SELECT * FROM tag WHERE desc_tag = ?";
    return Database.query(sql, [desc_tag]).then(res => {
        return res.length > 0 || res.length === undefined;
    });
}

module.exports.create = create;