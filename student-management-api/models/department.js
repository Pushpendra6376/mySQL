const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-collection');

const Department = sequelize.define('department',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        types:DataTypes.STRING

    }
})

module.exports = Department;