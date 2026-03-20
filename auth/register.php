<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Invalid request.']);
}

$name     = trim($_POST['regName']    ?? '');
$email    = strtolower(trim($_POST['regEmail']   ?? ''));
$phone    = trim($_POST['regPhone']   ?? '');
$address  = trim($_POST['regAddress'] ?? '');
$password = $_POST['regPassword'] ?? '';

// Validate inputs
if (!$name || !$email || !$phone || !$address || !$password) {
    jsonResponse(['success' => false, 'message' => 'Please fill in all fields.']);
}
if (!validateEmail($email)) {
    jsonResponse(['success' => false, 'message' => 'Please enter a valid email address.']);
}
if (strlen($password) < 6) {
    jsonResponse(['success' => false, 'message' => 'Password must be at least 6 characters.']);
}

// Check if email already exists (case-insensitive via LOWER())
$stmt = $conn->prepare("SELECT ID FROM Users WHERE LOWER(Email) = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    jsonResponse(['success' => false, 'message' => 'This email is already registered!']);
}
$stmt->close();

// Hash password and insert user
$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $conn->prepare("INSERT INTO Users (Full_name, Email, Phone, Address, Password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $phone, $address, $hash);

if ($stmt->execute()) {
    $new_id = $conn->insert_id;
    $_SESSION['user_id']   = $new_id;
    $_SESSION['user_name'] = $name;
    jsonResponse([
        'success' => true,
        'user'    => ['id' => $new_id, 'name' => $name, 'email' => $email]
    ]);
} else {
    jsonResponse(['success' => false, 'message' => 'Registration failed. Please try again.']);
}
