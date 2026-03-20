<?php
require_once __DIR__ . '/includes/db.php';
require_once __DIR__ . '/includes/functions.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isAjax()) {
    jsonResponse(['success' => false, 'message' => 'Invalid request.']);
}

$firstName = trim($_POST['firstName'] ?? '');
$lastName  = trim($_POST['lastName']  ?? '');
$email     = trim($_POST['email']     ?? '');
$subject   = trim($_POST['subject']   ?? '');
$message   = trim($_POST['message']   ?? '');

$name = $firstName . ' ' . $lastName;

// Server-side validation
if (!$firstName || !$lastName) {
    jsonResponse(['success' => false, 'message' => 'Please enter your full name.']);
}
if (!validateEmail($email)) {
    jsonResponse(['success' => false, 'message' => 'Please enter a valid email address.']);
}
if (!$subject) {
    jsonResponse(['success' => false, 'message' => 'Please select a subject.']);
}
if (strlen($message) < 10) {
    jsonResponse(['success' => false, 'message' => 'Message must be at least 10 characters.']);
}

$stmt = $conn->prepare("INSERT INTO `Messages` (`Name`, `Email`, `Subject`, `Message`) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    jsonResponse(['success' => false, 'message' => 'Prepare failed: ' . $conn->error]);
}

$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    jsonResponse(['success' => true]);
} else {
    jsonResponse(['success' => false, 'message' => 'Save failed: ' . $stmt->error]);
}
