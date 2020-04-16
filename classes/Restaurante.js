

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

    static getAllRestaurantesCardInfo(){
    }

}



module.exports =Restaurante;