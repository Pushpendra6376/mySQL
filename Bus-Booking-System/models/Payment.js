const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-collection');

const Payment = sequelize.define("Payment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Payment;