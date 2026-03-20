<?php
require_once __DIR__ . '/includes/db.php';

echo "Database: $dbname<br>";
$res = $conn->query("SHOW TABLES LIKE 'Messages'");
if ($res->num_rows > 0) {
    echo "Table 'Messages' exists.<br>";
    $columns = $conn->query("SHOW COLUMNS FROM Messages");
    while ($row = $columns->fetch_assoc()) {
        echo "- " . $row['Field'] . " (" . $row['Type'] . ")<br>";
    }
} else {
    echo "Table 'Messages' does NOT exist!<br>";
}
echo "<br>Testing insert...<br>";
$name = "Test User";
$email = "test@example.com";
$subject = "Test Subject";
$message = "Test message content";
$stmt = $conn->prepare("INSERT INTO Messages (Name, Email, Subject, Message) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    echo "Prepare failed: " . $conn->error;
} else {
    $stmt->bind_param("ssss", $name, $email, $subject, $message);
    if ($stmt->execute()) {
        echo "Insert successful! ID: " . $conn->insert_id;
    } else {
        echo "Insert failed: " . $stmt->error;
    }
}
