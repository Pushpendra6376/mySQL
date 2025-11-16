//connecting to the server with sequelize

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

(async ()=>{ try {
    await sequelize.authenticate();
    console.log("connection to the database has been created");
} catch (error) {
    console.log(error);     
}})();

module.exports = sequelize;
















// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

// // create connection
// connection.connect((err) => {
//     if (err) {
//         console.log("Database connection error:", err);
//         return;
//     }

//     console.log("MySQL Connected Successfully");

//     // Create students table
//     const creationQuery = `
//         CREATE TABLE IF NOT EXISTS students(
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(50),
//             email VARCHAR(50) UNIQUE,
//             age INT
//         )
//     `;

//     connection.execute(creationQuery, (err) => {
//         if (err) {
//             console.log("Table creation error:", err);
//             connection.end();
//             return;
//         }
//         console.log("Students table ready");
//     });
// });

// module.exports = connection;
