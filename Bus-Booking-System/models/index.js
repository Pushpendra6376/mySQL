const Sequelize = require('../utils/db-collection');
const User = require('../models/User');
const Bus = require('../models/Bus');
const Booking = require('../models/Booking');

// ONE to MANY association between USER & BOOKING
User.hasMany(Booking, { foreignKey: 'userId' })
Booking.belongsTo(User, { foreignKey: 'userId' })

// ONE to MANY association between BUS & BOOKING
Bus.hasMany(Booking, { foreignKey: 'busId' })
Booking.belongsTo(Bus, { foreignKey: 'busId' })


module.exports = {
    Sequelize,
    User,
    Bus,
    Booking
}

