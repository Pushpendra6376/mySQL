require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// creating connection
connection.connect(err => {
    if (err) {
        console.log("DB Connection Error:", err);
        return;
    }

    console.log("Database connected successfully!");
    //user table
    const usersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
        )
    `;
    //buses table
    const busesTable = `
        CREATE TABLE IF NOT EXISTS buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(255),
            totalSeats INT,
            availableSeats INT
        )
    `;
    //booking table
    const bookingsTable = `
        CREATE TABLE IF NOT EXISTS bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber VARCHAR(50)
        )
    `;
    //payments table
    const paymentsTable = `
        CREATE TABLE IF NOT EXISTS payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid INT,
            paymentStatus VARCHAR(255)
        )
    `;

    // Execute tables
    connection.execute(usersTable, err => {
        if (err) console.log(err);
        else console.log("Users table created.");
    });

    connection.execute(busesTable, err => {
        if (err) console.log(err);
        else console.log("Buses table created.");
    });

    connection.execute(bookingsTable, err => {
        if (err) console.log(err);
        else console.log("Bookings table created.");
    });

    connection.execute(paymentsTable, err => {
        if (err) console.log(err);
        else console.log("Payments table created.");
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
