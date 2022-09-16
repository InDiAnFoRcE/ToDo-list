//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = new express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');
var list=["Wake Up", "Brush", "Bath"];

app.get("/", function(req,res){

var today = new Date();
var day = today.getDay();
if (today.getDay() === 6){
  day = "Saturday"
}else if(today.getDay() === 0){
  day = "Sunday"
} else if(today.getDay() === 1){
  day = "Monday"
}
else if(today.getDay() === 2){
  day = "Tuesday"
}
else if(today.getDay() === 3){
  day = "Wednesday"
}
else if(today.getDay() === 4){
  day = "Thursday"
}
else if(today.getDay() === 5){
  day = "Friday"
}
res.render("index", {kindOfDay: day, list: list});

  })

app.post("/", function(req,res){
  var item = req.body.listItem;
  list.push(item);
  res.redirect("/");

  })

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000")
  })
