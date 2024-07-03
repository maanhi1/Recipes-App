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
//Get dish by dishId where userId is 1 (vd)
app.get("/datadish/:dishId", (req, res) => {
  let sql = `SELECT * FROM users 
  join dish on users.userId = dish.userId where dishId = ${req.params.dishId}`;
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
//Get ingredients by dishId
app.get("/ingredients/:dishId", (req, res) => {
  let sql = `SELECT * FROM ingredients where dishId = ${req.params.dishId}`;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
//Get steps by dishId
app.get("/steps/:dishId", (req, res) => {
  let sql = `SELECT * FROM recipestes where dishId = ${req.params.dishId}
  `;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
//Get reviews by dishId
app.get("/reviews/:dishId", (req, res) => {
  let sql = `SELECT * FROM reviews
  join users on users.userId = reviews.userId  
  where dishId = ${req.params.dishId}
  `;
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//Insert recipe of dish
// app.post("/dishinsert", async (req, res) => {
//   try {
//     const token = req.headers.authorization; //Chua can
//     if (!token) {
//       //Chua can
//       return res.status(401).json({ message: "Unauthorized: Missing token" }); //Chua can
//     }
//     const decoded = await jwt.verify(token, SECRET_KEY); //Chua can

//     const userId = decoded.name.UserID; //Lay userId

//     const {
//       dishName,
//       description,
//       imagesDish,
//       calo,
//       protein,
//       cookingTime,
//       postingDate,
//     } = req.body;
//     const typeroomStyleString = typeroomStyle.join(", ");

//     const hotelId = await insertDish(
//       partnerId,
//       hotelCategory,
//       hotelName,
//       hotelLocation,
//       hotelImage[0],
//       hotelDescription
//     );

//     await insertIngredients(dishId, ingredientName);
//     await insertRecipeSteps(typeRoomId, typeroomInterior);
//     res.json({ message: "Successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// async function insertDish(
//   userId,
//   categoryId,
//   dificultyLevelId,
//   dishName,
//   description,
//   imagesDish,
//   calo,
//   protein,
//   cookingTime,
//   postingDate
// ) {
//   const sql =
//     "INSERT INTO dish (userId, categoryId, dificultyLevelId, dishName, description, imagesDish, calo, protein, cookingTime, postingDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//   const values = [
//     userId,
//     categoryId,
//     dificultyLevelId,
//     dishName,
//     description,
//     imagesDish,
//     calo,
//     protein,
//     cookingTime,
//     postingDate,
//   ];
//   const dishResult = await queryDatabase(sql, values);
//   return dishResult.insertId;
// }

// async function insertIngredients(dishId, ingredientName) {
//   const sql = "INSERT INTO ingredients (dishId, ingredientName) VALUES (?, ?)";
//   for (const ingredients of ingredientName) {
//     await queryDatabase(sql, [dishId, ingredients]);
//   }
// }

// async function insertRecipeSteps(typeRoomId, roomInterior) {
//   const sql =
//     "INSERT INTO recipestes (stepNumber, description, dishId) VALUES (?, ?, ?)";
//   const values = stepNumber;
//   for (const interiorName of roomInterior) {
//     await queryDatabase(sql, values, [interiorName, typeRoomId]);
//   }
// }

// async function queryDatabase(sql, values) {
//   return new Promise((resolve, reject) => {
//     db.query(sql, values, (error, result) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// }

app.listen(3000, () => {
  console.log(`Connected !!!`);
});
