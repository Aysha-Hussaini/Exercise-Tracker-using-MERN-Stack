const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//App config 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middlewares 
app.use(cors());
app.use(express.json());

//DB Config 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser : true,
    useCreateIndex : true,
});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully")
})

//for API Endpoints
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

//Listener
app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});