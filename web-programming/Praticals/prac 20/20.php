<?php
// connect to database
$db = mysqli_connect("localhost", "root", "", "db01");
if (!$db) {
    echo "Database connection failed. " . mysqli_connect_error();;
}
else {
    echo "<p>-> Database connection successful.</p>";
}

// Insertion
echo "<p><strong> Insert </strong></p>";
mysqli_query($db, "INSERT INTO `test20`(`ERP`, `Name`, `Class`) VALUES (003,'Sai','5sem');");


// add more values
mysqli_query($db,
    "INSERT INTO `test20`(`ERP`, `Name`, `Class`) VALUES (192,'Suman Srinivas','5sem');");
mysqli_query($db, 
    "INSERT INTO `test20`(`ERP`, `Name`, `Class`) VALUES (255,'saiKiran','5sem');");

$select ="SELECT * FROM `test20`;";;
$result = mysqli_query($db, $select);
while($row2 = $result->fetch_assoc()) {
    echo "ERP: " . $row2["ERP"]. " - Name: " . $row2["Name"]. " " . $row2["Class"]. "<br>";
}

echo "<p><strong> Deletion </strong>/<p>";
// delete values
mysqli_query($db, "DELETE FROM `test20` WHERE `ERP`=003;");

$result = mysqli_query($db, "SELECT * FROM `test20`;" );
while($row2 = $result->fetch_assoc()) {
    echo "ERP: " . $row2["ERP"]. " - Name: " . $row2["Name"]. " " . $row2["Class"]. "<br>";
}

?>
