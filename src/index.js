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

app.post("/", (req, res) => {
 new Form({
   Name: req.body.Name,
   Email: req.body.Email,
   Age: req.body.Age,
 });
newForm.save(); 
res.redirect("/");
})

app.listen(8000, () => {
  console.log("Listening to port 8000");
});