const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

// Thiết lập kết nối với MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipesapp", //name trong phpmyadmin
});

//Ví dụ:
app.get("/datadish", (req, res) => {
  let sql = "SELECT * FROM dish";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
//Get detail dish
app.get("/detail_dish", (req, res) => {
  let sql = "SELECT * FROM dish";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log(`Connected !!!`);
});
