require('dotenv').config();
const express = require('express');

const app = express();

// Import Routes
const userRoutes = require('./routes/userRoute');
const busesRoutes = require('./routes/busesRoute');
const bookingRoutes = require('./routes/bookingRoute');

// Import Sequelize Connection
const sequelize = require('./models/index');

// Load Models So Sequelize Knows Them
require('./models/User');
require('./models/Bus');
require('./models/Booking');
require('./models/Payment');

app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/buses', busesRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Sync Sequelize Models
sequelize.sync()
    .then(() => {
        console.log("All tables synced successfully!");
    })
    .catch(err => {
        console.log("Error syncing tables:", err);
    });

// Start Server
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
