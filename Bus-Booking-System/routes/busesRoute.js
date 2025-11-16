const express = require('express');
const busController = require('../controllers/busController');

const router = express.Router();

router.get('/', busController.getAllBuses);
router.post('/', busController.addBus);
router.get('/available/:seats', busController.getAvailableSeats);

module.exports = router;
