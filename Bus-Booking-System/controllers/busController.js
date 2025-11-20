//importing models
const User = require('../models/User');
const Bus = require('../models/Bus');
const Booking = require('../models/Booking');

require('../models/index');

// creating buses
const addBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;

        const bus = await Bus.create({ busNumber, totalSeats, availableSeats });

        return res.status(201).json({
            message: "Bus added successfully",
            busId: bus.id
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error adding bus",
            error: error.message 
        });
    }
};

const getBusBookings = async (req, res) => {
    try {
        const busId = req.params.id;

        const bookings = await Booking.findAll({
            where: { busId },
            include: {
                model: User,
                attributes: ['name', 'email']
            }
        });

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addBus,
    getBusBookings
};