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

const addStudentToCourses = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;  
        const student = await Students.findByPk(studentId);
        if (!student) return res.status(404).json({ error: "Student not found" });

        const courses = await Courses.findAll({
            where: {
                courseId: courseId  
            }
        });

        await student.addCourses(courses);

        const updatedStudent = await Students.findByPk(studentId, {
            include: Courses
        });

        res.status(201).json(updatedStudent);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    addCourse,
    addStudentToCourses
}