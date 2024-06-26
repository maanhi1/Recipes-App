const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

// Thiết lập kết nối với MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipesapp",
});

//Get all dish join table users
app.get("/datadish", (req, res) => {
  let sql = `SELECT * FROM users join dish on users.userId = dish.userId`;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
//Get dish by dishId
app.get("/datadish/:dishId", (req, res) => {
  let sql = `SELECT * FROM dish where dishId = ${req.params.dishId}`;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
//Get all dish where category
app.get("/filterDishByCategoryId/:categoryId", (req, res) => {
  let sql = `SELECT * FROM dish 
  join users on users.userId = dish.userId 
  join categories on dish.categoryId = categories.categoryId
  where categoryId = ${req.params.categoryId}
  `;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
//Get all categories
app.get("/categories", (req, res) => {
  let sql = `SELECT * FROM categories`;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
//Get all complexity
app.get("/difficultylevel", (req, res) => {
  let sql = `SELECT * FROM difficultylevel`;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(3000, () => {
  console.log(`Connected !!!`);
});
