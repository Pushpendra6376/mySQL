//importing models
const User = require('../models/User');
const Bus = require('../models/Bus');
const Booking = require('../models/Booking');
require('../models/index');

const createBooking = async (req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;

        // 1. Check if User exists
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        // 2. Check if Bus exists
        const bus = await Bus.findByPk(busId);
        if (!bus) return res.status(404).json({ message: "Bus not found" });

        // 3. Create Booking
        const booking = await Booking.create({ userId, busId, seatNumber });

        res.status(201).json({
            message: "Booking created successfully",
            booking
        });

    } catch (error) {
        console.error(error); // Log the full error to console for debugging
        res.status(500).json({
            message: "Error creating booking",
            error: error.message
        });
    }
};

module.exports = { createBooking };