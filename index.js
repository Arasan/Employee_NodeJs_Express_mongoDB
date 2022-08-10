const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); // We expect data coming as JSON,Content-Type: application/json,so needed this.
const routes = require('./routes/router');
app.use('/api', routes) // base api url /api

mongoose.connect("mongodb://localhost:27017/Mean_Employee_Details", {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => {
      console.log("Connected to the database! (databaseName = Mean_Student_Details)");
   })
   .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
   });
//database end

// Setup server port
const port = process.env.PORT || 3000; 
app.set('port',port);

// Launch app to listen to specified port
app.listen(port, () => {
   console.log(`Server Started at ${port}`)
})