<?php
require_once __DIR__ . '/../includes/db.php';
session_unset();
session_destroy();
echo "<script>localStorage.removeItem('pinkAuraUser'); window.location.href='../index.html';</script>";
exit();
