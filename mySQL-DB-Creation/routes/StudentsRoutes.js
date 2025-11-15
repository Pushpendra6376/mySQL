const express = require('express')
const StudentController = require('../controllers/StudentsController')
const router = express.Router();

router.get('/get-student/:id', StudentController.getstudentsDataById)
router.get('/get-students', StudentController.getstudentsData)
router.post('/add',StudentController.addEntries);
router.put('/update/:id', StudentController.updatingEntries);
router.delete('/delete/:id', StudentController.deleteStudentById);

module.exports = router;