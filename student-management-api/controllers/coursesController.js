const db = require('../utils/db-collection');

const Courses = require('../models/Courses');
const Students = require('../models/students')

const addCourse = async (req,res) =>{
    try {
        const {name} = req.body;
        const course = await Courses.create({'courseName':name})

        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
}

const addStudentToCourses = async (req, res) =>{
    try {
        const {studentId} = req.body;
        const student = await Students.findByPk(studentId);
        const course = await Courses.findAll({
            where:{
                id:courseId
            }
        })
        await Students.addCourse(course);
        const updatedStudent = await Students.findByPk(student,{include:course});
        res.status(201).json(updatedStudent);
        
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
}

module.exports = {
    addCourse,
    addStudentToCourses
}