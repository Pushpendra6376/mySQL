const Bus = require('../models/Bus');
const { Op } = require('sequelize');
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
            error
        });
    }
};

const getAllBuses = async (req, res) => {
    try {
        const buses = await Bus.findAll();
        return res.status(200).json(buses);

    } catch (error) {
        return res.status(500).json({
            message: "Error fetching buses",
            error
        });
    }
};

const getAvailableSeats = async (req, res) => {
    try {
        const seats = req.params.seats;

        const buses = await Bus.findAll({
            where: {
                availableSeats: { [Op.gt]: seats }
            }
        });

        return res.status(200).json(buses);

    } catch (error) {
        return res.status(500).json({
            message: "Error fetching available buses",
            error
        });
    }
};

module.exports = {
    addBus,
    getAllBuses,
    getAvailableSeats
};
