const express = require('express');
const userRouter = require('./routes/userRoutes');
const dbConnection = require('./config/db');
const dotenv = require('dotenv').config();
const app = express();

dbConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


app.use('/user', userRouter)

app.listen(3000, ()=>{
    console.log(`server is running on port 3000`);
})