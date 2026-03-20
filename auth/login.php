<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Invalid request.']);
}

$email    = strtolower(trim($_POST['loginEmail']    ?? ''));
$password = $_POST['loginPassword'] ?? '';

if (!$email || !$password) {
    jsonResponse(['success' => false, 'message' => 'Please enter your email and password.']);
}

$stmt = $conn->prepare("SELECT ID, Full_name, Password FROM Users WHERE LOWER(Email) = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$res = $stmt->get_result();

if ($res->num_rows === 0) {
    jsonResponse(['success' => false, 'message' => 'Invalid email or password.']);
}

$user = $res->fetch_assoc();

if (!password_verify($password, $user['Password'])) {
    jsonResponse(['success' => false, 'message' => 'Invalid email or password.']);
}

// Set PHP session
$_SESSION['user_id']   = $user['ID'];
$_SESSION['user_name'] = $user['Full_name'];

jsonResponse([
    'success' => true,
    'user'    => [
        'id'    => $user['ID'],
        'name'  => $user['Full_name'],
        'email' => $email
    ]
]);
