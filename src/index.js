const path = require("path");
const express = require("express");
const app = express(); 
const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost:27017/Doc", { useNewUrlParser: true, useUnifiedTopology: true})
.then ( () => console.log("Connection successful...."))
.catch((err) => console.log(err));

const formSchema = {
  Name: String,
  Email: String,
  Age: Number,
 

}

const Form = mongoose.model("Form", formSchema);



const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));



app.get("/", (req, res) => {
  res.send("login.html");
});

app.post('/post-feedback', function (req, res) {
  mongoose.connect.then(function(db) {
      delete req.body._id; // for safety reasons
      db.collection('feedbacks').insertOne(req.body);
  });    
  res.send('Data received:\n' + JSON.stringify(req.body));
});
app.get('/view-feedbacks',  function(req, res) {
  mongoose.connect.then(function(db) {
      db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
          res.status(200).json(feedbacks);
      });
  });
});
app.listen(8000, () => {
  console.log("Listening to port 8000");
});