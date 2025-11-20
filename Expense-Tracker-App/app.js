require('dotenv').config();
const express = require('express');
const sequelize = require('./utils/db-collection');

const expenseRoutes = require('./routes/ExpenseRoute');

const app = express();

app.use(express.json());
app.use(express.static('views'));


// Routes
app.use('/expenses', expenseRoutes);

sequelize.sync()
    .then(() => {
        console.log("Database synced successfully");
        app.listen(4000, () => {
            console.log("Server running on port 4000");
        });
    })
    .catch(err => {
        console.log("Error syncing database:", err);
    });
