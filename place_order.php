<?php
require_once __DIR__ . '/includes/db.php';
require_once __DIR__ . '/includes/functions.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isAjax()) {
    jsonResponse(['success' => false, 'message' => 'Invalid request.']);
}

// Accept user_id from PHP session OR from POST body (JS-only login fallback)
$user_id = $_SESSION['user_id'] ?? intval($_POST['user_id'] ?? 0);

if (!$user_id) {
    jsonResponse(['success' => false, 'message' => 'Please login to place an order.']);
}

$total_amount = floatval($_POST['total_amount'] ?? 0);
if ($total_amount <= 0) {
    jsonResponse(['success' => false, 'message' => 'Invalid order amount.']);
}

$stmt = $conn->prepare("INSERT INTO Orders (User_ID, Total_Amount, Status) VALUES (?, ?, 'Pending')");
$stmt->bind_param("id", $user_id, $total_amount);

if ($stmt->execute()) {
    jsonResponse(['success' => true, 'order_id' => $conn->insert_id]);
} else {
    jsonResponse(['success' => false, 'message' => 'Could not save order: ' . $conn->error]);
}
