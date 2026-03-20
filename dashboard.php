<?php
require_once __DIR__ . '/includes/db.php';
require_once __DIR__ . '/includes/functions.php';

// Protection for dashboard
// (Optional: add password protection here)

$res = $conn->query("SELECT * FROM `Messages` ORDER BY `Created_at` DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard | Pink Aura Beauty</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        body { background: #fdf5f8; font-family: sans-serif; }
        .dashboard-container { max-width: 1000px; margin: 50px auto; background: #fff; padding: 30px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
        h2 { color: #c2185b; font-weight: 700; margin-bottom: 30px; }
        .table thead { background: #c2185b; color: #fff; }
        .badge-subject { background: #fce4ec; color: #c2185b; font-weight: 600; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem; }
    </style>
</head>
<body>
    <div class="container">
        <div class="dashboard-container">
            <h2>📬 Customer Messages</h2>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if($res && $res->num_rows > 0): ?>
                            <?php while($row = $res->fetch_assoc()): ?>
                                <tr>
                                    <td class="small text-muted"><?php echo date('Y-m-d H:i', strtotime($row['Created_at'])); ?></td>
                                    <td><strong><?php echo htmlspecialchars($row['Name']); ?></strong></td>
                                    <td><a href="mailto:<?php echo htmlspecialchars($row['Email']); ?>"><?php echo htmlspecialchars($row['Email']); ?></a></td>
                                    <td><span class="badge-subject"><?php echo strtoupper(htmlspecialchars($row['Subject'])); ?></span></td>
                                    <td><div style="max-width: 300px; font-size: 0.9rem;"><?php echo nl2br(htmlspecialchars($row['Message'])); ?></div></td>
                                </tr>
                            <?php endwhile; ?>
                        <?php else: ?>
                            <tr>
                                <td colspan="5" class="text-center py-4 text-muted">No messages found in the database.</td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
            <div class="mt-4">
                <a href="index.html" class="btn btn-outline-secondary">Back to Site</a>
            </div>
        </div>
    </div>
</body>
</html>
