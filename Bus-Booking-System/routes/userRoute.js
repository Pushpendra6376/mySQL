const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.addUser);
router.get('/:id/bookings', userController.getUserBookings);

module.exports = router;
