const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

(async ()=>{ try {
    await sequelize.authenticate();
    console.log("connection to the database has been created");
} catch (error) {
    console.log(error);     
}})();

module.exports = sequelize;