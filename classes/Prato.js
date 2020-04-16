class Prato{
    constructor(id,id_restaurante,preco,desc,id_categoria){
        this.id_prato=id;
        this.id_restaurante=id_restaurante;
        this.desc=desc;
        this.id_categoria=id_categoria;
        this.preco=preco
        
    }
}

module.exports =Prato;