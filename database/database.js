console.log(process.env.TEST) 
const dbConfig = require("./db-config.json");   //Importar configuração da base de dados
const mysql = require("mysql"); //bilbioteca de mysql https://www.npmjs.com/package/mysql
const util = require("util");

let Database=mysql.createPool(dbConfig);
process.env.PORT = dbConfig.port  
process.env.HOST = dbConfig.host 
process.env.USER = dbConfig.user
process.env.PASSWORD = dbConfig.password
process.env.DATABASE = dbConfig.database
process.env.MULTIPLESTATEMENTS = dbConfig.multipleStatements    //criar a ligação a base de dados usando o config importado e guardar na variavel Database
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