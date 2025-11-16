const express = require('express');
const StudentController = require('../controllers/studentController');

const router = express.Router();

router.post('/', StudentController.addStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getStudentById);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

module.exports = router;
