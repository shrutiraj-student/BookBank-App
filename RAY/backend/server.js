// ARJ
const express = require('express');   // importing express 
const app = express(); // servier init
require('dotenv').config();
const cookieParser = require('cookie-parser')
const cors = require('cors')

const PORT = process.env.PORT || 8000;

// ADD MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: '*',
  credentials: true
}));


// Import Routes
const bookRoutes = require('./routes/bookRoutes');

app.use('/api/v1/books', bookRoutes);



//defining user Router
const userRoutes = require('./routes/userRoutes');
app.use('/api/v1/users', userRoutes);



// CONNECT TO MONGODB
const dbConnection = require('./config/database');
dbConnection();




// default routes
app.get('/', (req, res) => {
  res.send(`<h1 style="text-align:center;">Namaste Duniyaa</h1>`);
})




app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});