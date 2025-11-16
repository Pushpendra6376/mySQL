const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Booking = sequelize.define("Booking", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seatNumber: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'bookings',
    timestamps: false
});

module.exports = Booking;
