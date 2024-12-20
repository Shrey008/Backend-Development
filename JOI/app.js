const express = require("express");
const app = express();
const { validateModel } = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("server running");
});

app.post("/create", async function (req, res) {
  let { username, name, age, contact, email } = req.body;
  
  let error = validateModel({ username, name, age, contact, email });
  
  if (error) {
    console.log(error); // Log the error for debugging
    res.status(400).json({ message: error.details[0].message }); // Send the specific validation error message
  } else {
    res.send("everything worked");
  }
});

app.listen(3000);
