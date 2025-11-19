const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
);

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("Database connected with Sequelize!");
    } catch (error) {
        console.error("Unable to connect to DB:", error);
    }
}

connectDB();

const User = require('./User')(sequelize, DataTypes);
const Bus = require('./Bus')(sequelize, DataTypes);
const Booking = require('./Booking')(sequelize, DataTypes);
const Payment = require('./Payment')(sequelize, DataTypes);

// One User -> Many Bookings
User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

// One Bus -> Many Bookings
Bus.hasMany(Booking, { foreignKey: 'busId' });
Booking.belongsTo(Bus, { foreignKey: 'busId' });

module.exports = { sequelize, User, Bus, Booking, Payment };
