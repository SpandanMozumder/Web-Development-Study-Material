// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1> Hello World!! </h1>");
})

app.get("/contact", function(req, res) {
    res.send("Contact me at: spandanmozumder@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("My name is Spandan Mozumder and im dead.");
})

app.listen(3000, function() {   
    console.log("Server started at node 3000");
});