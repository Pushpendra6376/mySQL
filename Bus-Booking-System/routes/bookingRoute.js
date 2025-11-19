const express = require('express');
const bookingController = require('../controllers/BookingController'); // Renamed for clarity

const router = express.Router();

router.post('/', bookingController.createBooking);

module.exports = router;