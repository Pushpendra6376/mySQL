// IMPORT from the central models file
const { User, Booking, Bus } = require('../models');

// creating user
const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.status(201).json({
            message: "User added successfully",
            userId: user.id
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error adding user",
            error: error.message
        });
    }
};

const getUserBookings = async (req, res) => {
    try {
        const userId = req.params.id;

        const bookings = await Booking.findAll({
            where: { userId },
            include: {
                model: Bus,
                attributes: ['busNumber']
            }
        });

        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addUser,
    getUserBookings
};