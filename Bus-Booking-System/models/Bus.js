const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-collection');

const Bus = sequelize.define("Bus", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    busNumber: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER,
    availableSeats: DataTypes.INTEGER
});

module.exports = Bus;
