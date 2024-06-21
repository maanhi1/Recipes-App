const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware để parse JSON body

// Thiết lập kết nối với MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recipesapp", // Tên cơ sở dữ liệu trong phpMyAdmin
});

// Kết nối đến MySQL
db.connect((err) => {
  if (err) {
    console.error("Không thể kết nối đến MySQL:", err);
    return;
  }
  console.log("Đã kết nối đến MySQL");
});

// Định nghĩa route POST để thêm người dùng mới
app.post("/datauser", (req, res) => {
  const { userName, accountName, email, password } = req.body;
  if (!userName || !accountName || !email || !password) {
    return res.status(400).json({ error: "Vui lòng điền đầy đủ thông tin" });
  }

  const sql =
    "INSERT INTO users (userName, accountName, email, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [userName, accountName, email, password], (err, result) => {
    if (err) {
      console.error("Có lỗi xảy ra khi thêm người dùng:", err);
      return res
        .status(500)
        .json({ error: "Có lỗi xảy ra khi thêm người dùng" });
    }
    res
      .status(201)
      .json({ id: result.insertId, userName, accountName, email, password });
  });
});

// Lắng nghe trên cổng 3000
app.listen(3000, () => {
  console.log("Máy chủ đang chạy trên cổng 3000");
});
