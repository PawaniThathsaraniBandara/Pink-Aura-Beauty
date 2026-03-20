<?php
session_start();

$host   = "localhost";
$user   = "root";
$pass   = "";
$dbname = "pink_aura_beauty";

$conn = new mysqli($host, $user, $pass);

if ($conn->connect_error) {
    // Return JSON error if API context, otherwise die
    if (isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
        exit();
    }
    die("Database connection failed: " . $conn->connect_error);
}

// Auto-create database and tables so setup is zero-config
if (!$conn->query("CREATE DATABASE IF NOT EXISTS `$dbname` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci")) {
    die("Database creation failed: " . $conn->error);
}

if (!$conn->select_db($dbname)) {
    die("Database selection failed: " . $conn->error);
}

// Table for Users
$conn->query("CREATE TABLE IF NOT EXISTS `Users` (
    `ID`         INT(11)      AUTO_INCREMENT PRIMARY KEY,
    `Full_name`  VARCHAR(255) NOT NULL,
    `Email`      VARCHAR(255) NOT NULL,
    `Phone`      VARCHAR(20)  NOT NULL,
    `Address`    TEXT         NOT NULL,
    `Password`   VARCHAR(255) NOT NULL,
    `Created_at` TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `uq_email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

// Table for Orders
$conn->query("CREATE TABLE IF NOT EXISTS `Orders` (
    `ID`           INT(11)       AUTO_INCREMENT PRIMARY KEY,
    `User_ID`      INT(11)       NOT NULL,
    `Total_Amount` DECIMAL(10,2) NOT NULL,
    `Status`       VARCHAR(50)   DEFAULT 'Pending',
    `Created_at`   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`User_ID`) REFERENCES `Users`(`ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

// Table for Messages
$conn->query("CREATE TABLE IF NOT EXISTS `Messages` (
    `ID`         INT(11)      AUTO_INCREMENT PRIMARY KEY,
    `Name`       VARCHAR(255) NOT NULL,
    `Email`      VARCHAR(255) NOT NULL,
    `Subject`    VARCHAR(255) NOT NULL,
    `Message`    TEXT         NOT NULL,
    `Created_at` TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

