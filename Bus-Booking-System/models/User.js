const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;
