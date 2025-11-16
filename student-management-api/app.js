require('dotenv').config();
const express = require('express');
const StudentsRoutes = require('./routes/studentRoute')

const app = express();
app.use(express.json());

app.use('/students', StudentsRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
