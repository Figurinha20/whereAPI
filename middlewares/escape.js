//função que permite dar escape a tudo o que o back-end recebe
function escapadela(options, req, res, next){
    for (const key in req.body) {
        req.body[key] = Database.escape(req.body[key])
    }
    for (const key in req.params) {
        req.params[key] = Database.escape(req.params[key])
    }
    for (const key in req.query) {
        req.query[key] = Database.escape(req.query[key])
    }
    next()
}

module.exports.escapadela =escapadela;