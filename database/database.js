const mysql = require("mysql");
let dbConfig;
let Database;
if(process.env.NODE_ENV === "production" || process.env.NODE_ENV === "PROD" ){
    dbConfig = {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT,
        connectTimeout  : 15000,
        acquireTimeout  : 15000,
        timeout         : 15000,
        debug:true,
        multipleStatements: true      
    }
    Database=mysql.createPool(process.env.DATABASE_URL);
}else{
    dbConfig = require("./db-config.json");
    Database=mysql.createPool(dbConfig);
}
 //Importar configuração da base de dados
 //bilbioteca de mysql https://www.npmjs.com/package/mysql
const util = require("util");
console.log(process.env.HOST,process.env.USER,process.env.PASSWORD,process.env.DATABASE,process.env.PORT,process.env.NODE_ENV)

 //criar a ligação a base de dados usando o config importado e guardar na variavel Database
Database.getConnection((err)=>{err ? console.log(err) : console.log("Connection established to database");}); //ligar a base de dados e fazer log se a conection foi sucedida
Database.on("error",(error)=>{
    if(error.code === 'PROTOCOL_CONNECTION_LOST' || error.code ==='PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
        Database.destroy();
        Database = mysql.createPool(dbConfig);
        // Database.connect((err)=>{err ? console.log(err) : console.log("Connection established to database");});
    }
});
Database.query=util.promisify(Database.query);  //transformar callback para promise para faclitar o uso





module.exports = Database;  //Exportar a variavel Database que tem a connection criada