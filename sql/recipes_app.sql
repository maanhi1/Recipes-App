CREATE DATABASE RECIPES

USE RECIPES

USe master

drop database RECIPES

CREATE TABLE USERS(
	userId int PRIMARY KEY IDENTITY(1,1),
	userName nvarchar(50) NOT NULL UNIQUE,
	accountName nvarchar(50) NOT NULL,
	password nvarchar(255) NOT NULL,
	email nvarchar(100) NOT NULL UNIQUE,
)

CREATE TABLE DISH(
	dishId int PRIMARY KEY IDENTITY(1,1),
	dishName nvarchar(100) NOT NULL,
	images nvarchar(255),
	calo int,
	protein int,
	cookingTime int,
	dificultyLevel NVARCHAR(10) CHECK (dificultyLevel IN ('Easy', 'Moderate', 'Hard')),
	userId int FOREIGN KEY REFERENCES USERS (userId),
)

CREATE TABLE RECIPES(
	recipeId int PRIMARY KEY IDENTITY(1,1),
	description NVARCHAR(MAX) NOT NULL,
	dishId int FOREIGN KEY REFERENCES DISH (dishId) 
)

CREATE TABLE RECIPESTES (
    recipeStepsId INT PRIMARY KEY IDENTITY(1,1),
	stepNumber INT,
    Description NVARCHAR(MAX),
	recipeId int FOREIGN KEY REFERENCES RECIPES (recipeId) 
);

CREATE TABLE INGREDIENTS(
	ingredientId int PRIMARY KEY IDENTITY(1,1),
	ingredientName nvarchar(100) NOT NULL,
)

CREATE TABLE DISHINGREDIENTS (
    dishIngredientsId INT PRIMARY KEY IDENTITY(1,1),
    dishId int FOREIGN KEY REFERENCES DISH (dishId),
	ingredientId int FOREIGN KEY REFERENCES INGREDIENTS (ingredientId),

);

CREATE TABLE FAVORITES(
	favoriteId int PRIMARY KEY IDENTITY(1,1),
	dishId int FOREIGN KEY REFERENCES DISH (dishId),
	userId int FOREIGN KEY REFERENCES USERS (userId)
)

CREATE TABLE REVIEWS(
	reviewId int PRIMARY KEY IDENTITY(1,1),
	comment NVARCHAR(MAX) NOT NULL,
	rating int CHECK (rating >= 1 AND Rating <= 5),
	dishId int FOREIGN KEY REFERENCES DISH (dishId),
	userId int FOREIGN KEY REFERENCES USERS (userId)
)
