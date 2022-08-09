const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
const routes = require('./routes/router');
app.use('/api', routes)


mongoose.connect("mongodb://localhost:27017/Mean_Employee_Details", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database! Mean_Student_Details");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
//database end

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})