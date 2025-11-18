const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-collection');

const Identitycard = sequelize.define('identitycard', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    cardNo:{
        type: DataTypes.INTEGER,
        unique:true,
        allowNull: false
    }
})

module.exports = Identitycard;