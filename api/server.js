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

const bcrypt = require("bcrypt");
// Định nghĩa route POST để thêm người dùng mới (SIGNUP)
app.post("/datauser", (req, res) => {
  const { userName, email, password } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!userName || !email || !password) {
    return res.status(400).json({ error: "Vui lòng điền đầy đủ thông tin" });
  }

  // Kiểm tra email phải có định dạng @gmail.com
  if (!email.includes("@gmail.com")) {
    return res
      .status(400)
      .json({ error: "Email phải có định dạng @gmail.com" });
  }

  // Kiểm tra mật khẩu và xác nhận mật khẩu
  if (password !== req.body.confirmPassword) {
    return res
      .status(400)
      .json({ error: "Mật khẩu và xác nhận mật khẩu không khớp" });
  }

  // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Lỗi khi mã hóa mật khẩu:", err);
      return res
        .status(500)
        .json({ error: "Có lỗi xảy ra khi mã hóa mật khẩu" });
    }

    const sql =
      "INSERT INTO users (userName, email, password) VALUES (?, ?, ?)";
    db.query(sql, [userName, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Có lỗi xảy ra khi thêm người dùng:", err);
        return res
          .status(500)
          .json({ error: "Có lỗi xảy ra khi thêm người dùng" });
      }
      res.status(201).json({ id: result.insertId, userName, email });
    });
  });
});
// Endpoint Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Vui lòng điền đầy đủ thông tin đăng nhập" });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Có lỗi xảy ra khi đăng nhập:", err);
      return res.status(500).json({ error: "Có lỗi xảy ra khi đăng nhập" });
    }

    if (results.length > 0) {
      res
        .status(200)
        .json({ message: "Đăng nhập thành công", user: results[0] });
    } else {
      res.status(401).json({ error: "Email hoặc mật khẩu không đúng" });
    }
  });
});

// Lắng nghe trên cổng 3000
app.listen(3000, () => {
  console.log("Máy chủ đang chạy trên cổng 3000");
});
