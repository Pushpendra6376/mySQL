const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-collection');

const Booking = sequelize.define("Booking", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seatNumber: {
        type: DataTypes.STRING
    },
    userId: {              
        type: DataTypes.INTEGER,
        allowNull: false
    },
    busId: {               
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Booking;
