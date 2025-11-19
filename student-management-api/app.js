require('dotenv').config();
const express = require('express');
const db = require('./utils/db-collection')
const StudentsRoutes = require('./routes/studentRoute')
const courseRoutes = require('./routes/courseRoutes');

//models
require('./models');

const app = express();
app.use(express.json());

app.use('/students', StudentsRoutes);
app.use('/courses', courseRoutes);

db.sync({ alter: true }).then(()=>{
    app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

}).catch((error)=>{
    console.log(error);
})

