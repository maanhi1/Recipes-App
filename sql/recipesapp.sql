-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2024 at 07:56 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipesapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `dish`
--

CREATE TABLE `dish` (
  `dishId` int(11) NOT NULL,
  `dishName` varchar(100) NOT NULL,
  `images` varchar(255) DEFAULT NULL,
  `calo` int(11) DEFAULT NULL,
  `protein` int(11) DEFAULT NULL,
  `cookingTime` int(11) DEFAULT NULL,
  `dificultyLevel` varchar(10) DEFAULT NULL CHECK (`dificultyLevel` in ('Easy','Moderate','Hard')),
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dishingredients`
--

CREATE TABLE `dishingredients` (
  `dishIngredientsId` int(11) NOT NULL,
  `ingredientId` int(11) NOT NULL,
  `dishId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `favoriteId` int(11) NOT NULL,
  `dishId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `ingredientId` int(11) NOT NULL,
  `ingredientName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `recipeId` int(11) NOT NULL,
  `description` text NOT NULL,
  `dishId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recipestes`
--

CREATE TABLE `recipestes` (
  `recipeStepsId` int(11) NOT NULL,
  `stepNumber` int(11) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `recipeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `reviewId` int(11) NOT NULL,
  `comment` text NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `dishId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `accountName` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dish`
--
ALTER TABLE `dish`
  ADD PRIMARY KEY (`dishId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `dishingredients`
--
ALTER TABLE `dishingredients`
  ADD PRIMARY KEY (`dishIngredientsId`),
  ADD KEY `dishId` (`dishId`),
  ADD KEY `ingredientId` (`ingredientId`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`favoriteId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `dishId` (`dishId`);

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`ingredientId`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`recipeId`),
  ADD KEY `dishId` (`dishId`);

--
-- Indexes for table `recipestes`
--
ALTER TABLE `recipestes`
  ADD PRIMARY KEY (`recipeStepsId`),
  ADD KEY `recipeId` (`recipeId`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`reviewId`),
  ADD KEY `dishId` (`dishId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `userName` (`userName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dish`
--
ALTER TABLE `dish`
  MODIFY `dishId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dishingredients`
--
ALTER TABLE `dishingredients`
  MODIFY `dishIngredientsId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `favoriteId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `ingredientId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `recipeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recipestes`
--
ALTER TABLE `recipestes`
  MODIFY `recipeStepsId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `reviewId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dish`
--
ALTER TABLE `dish`
  ADD CONSTRAINT `dish_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `dishingredients`
--
ALTER TABLE `dishingredients`
  ADD CONSTRAINT `dishingredients_ibfk_1` FOREIGN KEY (`dishId`) REFERENCES `dish` (`dishId`),
  ADD CONSTRAINT `dishingredients_ibfk_2` FOREIGN KEY (`ingredientId`) REFERENCES `ingredients` (`ingredientId`);

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `favorites_ibfk_2` FOREIGN KEY (`dishId`) REFERENCES `dish` (`dishId`);

--
-- Constraints for table `recipes`
--
ALTER TABLE `recipes`
  ADD CONSTRAINT `recipes_ibfk_1` FOREIGN KEY (`dishId`) REFERENCES `dish` (`dishId`);

--
-- Constraints for table `recipestes`
--
ALTER TABLE `recipestes`
  ADD CONSTRAINT `recipestes_ibfk_1` FOREIGN KEY (`recipeId`) REFERENCES `recipes` (`recipeId`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`dishId`) REFERENCES `dish` (`dishId`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
