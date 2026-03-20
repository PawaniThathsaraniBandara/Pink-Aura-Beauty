<?php
function sanitize(string $v): string {
    return htmlspecialchars(trim($v), ENT_QUOTES, 'UTF-8');
}
function validateEmail(string $e): bool {
    return (bool) filter_var($e, FILTER_VALIDATE_EMAIL);
}
function isAjax(): bool {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH'])
        && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
}
function jsonResponse(array $data): void {
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}
function redirect(string $url): void {
    header("Location: $url");
    exit();
}
function isLoggedIn(): bool {
    return isset($_SESSION['user_id']);
}
