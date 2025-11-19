const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-collection');

const Courses = sequelize.define('Courses',{
    courseId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    courseName:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Courses;