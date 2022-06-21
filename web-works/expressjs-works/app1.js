const express = require("express");

const app = express();

//PORT
const PORT = 3000;

//we can create the routes

app.get("/", (req, res) => {
  res.send(`Welcome to Express JS`);
});

app.get("/example", (req, res) => {
  res.send(`Example`);
});

//Path params
app.get("/example/:empid/:empname", (req, res) => {
  res.send(req.params);

  let empObj = {
    empID: req.params.empid,
    empName: req.params.empname,
  };

  console.log(empObj);
});

app.get("/he**o", (req, res) => {
  res.send(`Hello or Hippo _ _ CHANGED`);
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
