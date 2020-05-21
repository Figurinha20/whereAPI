const Utilizador=require("../models/utilizador.model");

exports.get = (req, res, next) => {
    Utilizador.login(req.body.email, req.body.password).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

exports.post = (req, res, next) => {
    console.log(req.body);
    Utilizador.create(req.body.user_name, req.body.email, req.body.password).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

exports.put = (req, res, next) => {
    Utilizador.update(req.body.id_utilizador, req.body.user_name, req.body.email, req.body.foto, req.body.numero_tel).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

exports.delete = (req, res, next) => {
    Utilizador.delete(req.body.id_utilizador).then(result=>{
        res.json(result);
    }).catch(err=>res.json(err));
}

//email, username, password, adress, postal-code, locality ---------------- Restaurante
//email, username, password ---------------------- Cliente