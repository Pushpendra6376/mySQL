module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("Payment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // bookingId is handled by association, but keeping it explicit here is okay too if you prefer
        bookingId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        paymentStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'payments', // Added tableName for consistency
        timestamps: false
    });

    return Payment;
};