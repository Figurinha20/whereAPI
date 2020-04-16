class Comentario{
    constructor(id_restaurante,id_utilizador,txt,rating,data){
        this.id_restaurante=id_restaurante;
        this.id_utilizador=id_utilizador;
        this.txt=txt;
        this.rating=rating;
        this.data=data;
        
    }
}

module.exports =Comentario;