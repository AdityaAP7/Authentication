const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

// Parse JSON request bodies
app.use(bodyParser.json());


// API routes for user authentication
app.use('/auth', authRoutes);

mongoose
  .connect("mongodb+srv://aditya:aditya123@firstcode.qjcubsn.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
