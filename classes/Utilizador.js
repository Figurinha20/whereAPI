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
}

module.exports = Utilizador;