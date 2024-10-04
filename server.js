const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')

// create an express app
const app = express();


//dot env config
dotenv.config()


app.use(cors());
app.use(express.json());  

// db Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected');
});

// import the game routes
const gameRoutes = require('./routes/gameRoutes');

// use the routes
app.use('/api', gameRoutes);

// start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
