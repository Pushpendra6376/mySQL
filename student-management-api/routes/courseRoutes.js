const express = require('express');
const coursesController = require('../controllers/coursesController');

const router = express.Router();

router.post('/addcourses', coursesController.addCourse);
router.get('/addStudentToCourse', coursesController.addStudentToCourses);

module.exports = router;