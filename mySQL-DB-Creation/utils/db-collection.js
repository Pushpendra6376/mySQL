const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
//creating a connection on the database
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("Connection has been created");


    //interacting with database
    const creationQuery = `create table IF NOT EXISTS Students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50)
    )`

    //executing the sql query for table creation
    connection.execute(creationQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Table is Created");
    });
})


module.exports = connection;