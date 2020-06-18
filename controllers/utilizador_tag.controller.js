//Controller para os tags de um utilizador, é preciso adicionar tags a um utilizador, remover tags a um utilizador e receber todas as tags de um utilizador.
//É preciso ir buscar a descrição de cada tag à tabela "tag".
const Database = require("../database/database");


exports.get = (req, res, next) => {
    getUtilizadorTags(req.params.id_utilizador).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

exports.post = (req, res, next) => {
    createTag(req.params.id_utilizador, req.params.id_tag).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

exports.delete = (req, res, next) => {
    deleteTag(req.params.id_utilizador, req.params.id_tag).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

function createTag(id_utilizador, id_tag){ //Adicionar tags a um determinado utilizador

    const sql = `INSERT INTO utilizador_tag (id_utilizador, id_tag) VALUES (?,?);`
    return Database.query(sql, [id_utilizador, id_tag]).then(suc=>{
        if (suc !== undefined){
            return "Preferencia Adicionada com Sucesso!"
        }
        else{return `Erro: ` + suc}
    });
}

function getUtilizadorTags(id_utilizador){ //Receber todas as tags de um determinado utilizador e a sua descrição

    const sql = "SELECT tag.id_tag, tag.desc_tag FROM tag INNER JOIN utilizador_tag ON tag.id_tag=utilizador_tag.id_tag WHERE utilizador_tag.id_utilizador = ?";
    return Database.query(sql, [id_utilizador]).then(res=>{
        return res
    })
}

function deleteTag(id_utilizador, id_tag){

    const sql = "DELETE FROM utilizador_tag WHERE id_utilizador = ? AND id_tag = ?;"
    return Database.query(sql, [id_utilizador, id_tag]).then(res=>{
        if (res.affectedRows > 0){
            return "Preferencia Removida com Sucesso";
        }
        else{
            return "Preferencia Não Existente";
        }
    })
}

