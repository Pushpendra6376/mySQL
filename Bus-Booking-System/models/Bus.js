const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Bus = sequelize.define("Bus", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    busNumber: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER,
    availableSeats: DataTypes.INTEGER
}, {
    tableName: 'buses',
    timestamps: false
});

module.exports = Bus;
