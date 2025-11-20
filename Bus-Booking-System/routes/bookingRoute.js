const express = require('express');
const bookingController = require('../controllers/BookingController'); 

const router = express.Router();

router.post('/', bookingController.createBooking);

module.exports = router;