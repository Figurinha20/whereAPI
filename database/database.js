const dbConfig = require("./db-config.json");   //Importar configuração da base de dados
const mysql = require("mysql"); //bilbioteca de mysql https://www.npmjs.com/package/mysql

var connection = mysql.createConnection(dbConfig);

selectAllUsers();

// function createUserTable(){
//     connection.connect();
//     const sql = "CREATE TABLE app_user (username varchar(20), password varchar(20))";
//     connection.query(sql, function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
//     });
//     connection.end();
// }

// function insertIntoAppUserTable(username, password){
//     connection.connect();
//     const sql = `INSERT INTO app_user (username,password) VALUES ("${username}","${password}")`;
//     connection.query(sql, function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
//     });
//     connection.end();
// }

function selectAllUsers(){
    connection.connect();
    const sql = "SELECT * FROM utilizador";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    });
    connection.end();
}
