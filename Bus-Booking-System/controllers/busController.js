const db = require('../utils/db-collection')

const addbus = (req,res)=>{
    const { busNumber, totalSeats, availableSeats } = req.body;

    const query = `
        INSERT INTO buses (busNumber, totalSeats, availableSeats)
        VALUES (?, ?, ?)
    `;

    db.execute(query, [busNumber, totalSeats, availableSeats], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error adding bus", error: err });
        }

        return res.status(201).json({
            message: "Bus added successfully",
            busId: result.insertId
        });
    });
    
}

const getAllBuses = (req, res) =>{
    const query = `SELECT * FROM buses`;

    db.execute(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching buses", error: err });
        }

        return res.status(200).json(results);
    });

}

const getAvailableSeats =(req,res)=>{
    const seats = req.params.seats;

    const query = `
        SELECT * FROM buses
        WHERE availableSeats > ?
    `;

    db.execute(query, [seats], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching buses", error: err });
        }

        return res.status(200).json(results);
    });

}

module.exports = {
    addbus,
    getAllBuses,
    getAvailableSeats
}