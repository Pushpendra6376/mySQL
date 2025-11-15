require('dotenv').config();
const StudentsRoutes = require('./routes/StudentsRoutes')
const express = require('express')
const db = require('./utils/db-collection')
const app = express();

app.use(express.json());

app.use('/students', StudentsRoutes);

app.listen(3000,()=>{
    console.log("server is running")
});