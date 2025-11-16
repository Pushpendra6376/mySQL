require('dotenv').config();
const userRoutes = require('./routes/userRoute')
const busesRoutes = require('./routes/busesRoute')
const express = require('express');
const db = require('./utils/db-collection')
const app = express();


app.use(express.json());
app.use('/users', userRoutes);
app.use('/buses', busesRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
}); 

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
