const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db-collection');

const StudentCourses = sequelize.define('StudentCourses', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = StudentCourses;