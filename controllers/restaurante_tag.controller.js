const Database=require("../database/database");
const Tag=require("./tag.controller")

exports.get = (req, res, next) => {
    getRestauranteTags(req.params.id_restaurante).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

exports.post = (req, res, next) => {
    createTag(req.params.id_restaurante, req.body.desc_tag).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

exports.put = (req, res, next) => {
    changeMainTag(req.params.id_restaurante, req.params.id_tag).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

exports.delete = (req, res, next) => {
    deleteTag(req.params.id_restaurante, req.params.id_tag).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

function createTag(id_restaurante, desc_tag){ //Adicionar tags a um restaurante, cria também a tag na tabela APENAS se não existir!
    desc_tag=Database.escape(desc_tag)

    const sql = `INSERT INTO restaurante_tag (id_restaurante, id_tag, tag_principal) VALUES (?,?,?);`
    return Tag.create(desc_tag).then(created=>{
        if (created[0] === false){
            return Database.query(sql,[id_restaurante, created[1], false]).then(suc=>{
                return "Categoria Adicionada"
            })
        }
        else{
            return Database.query(sql,[id_restaurante, created[1], false]).then(suc=>{
                return "Categoria Criada"
            })
        }
    });
}

function getRestauranteTags(id_restaurante){ //Receber todas as tags de um determinado restaurante e a sua descrição

    const sql = "SELECT tag.id_tag, tag.desc_tag, restaurante_tag.tag_principal FROM tag INNER JOIN restaurante_tag ON tag.id_tag=restaurante_tag.id_tag WHERE restaurante_tag.id_restaurante = ?";
    return Database.query(sql, [id_restaurante]).then(res=>{
        return res
    })
}

function changeMainTag(id_restaurante, id_tag){ //Trocar a tag principal

    const sql = "UPDATE restaurante_tag SET tag_principal = ? WHERE id_restaurante = ?";
    const sql1 = "UPDATE restaurante_tag SET tag_principal = ? WHERE id_restaurante = ? AND id_tag = ?";
     //colocar tudo a false
    return Database.query(sql, [false, id_restaurante]).then(res=>{
       //colocar a tag escolhida a true
        return Database.query(sql1, [true, id_restaurante, id_tag]).then(res=>{
            return res
        })
    })
}

function deleteTag(id_restaurante, id_tag){

    const sql = "DELETE FROM restaurante_tag WHERE id_restaurante = ? AND id_tag = ?;"
    return Database.query(sql, [id_restaurante, id_tag]).then(res=>{
        if (res.affectedRows > 0){
            return "Categoria Removida com Sucesso";
        }
        else{
            return "Categoria Não Existente";
        }
    })
}

