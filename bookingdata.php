<?php

    $cname = $_POST['cname'];
	$phone = $_POST['phone'];
	$unumber = $_POST['unumber'];
	$snumber = $_POST['snumber'];
	$stname = $_POST['stname'];
	$sbname = $_POST['sbname'];
	$dsbname = $_POST['dsbname'];
	$date = $_POST['date'];
	$time = $_POST['time'];
	
	sleep(10);
	
   	require_once('../../conf/booking_settings.php');
		
	$conn = @mysqli_connect($sql_host,
		$sql_user,
		$sql_pass,
		$sql_db
	);
	
	if(!$conn){
		// if it fails it will display an error message
		echo "<p>Database connection failure</p>";
	} else {     
	
			//$sql = "INSERT INTO `CabsOnline`(`cname`, `phone`, `unumber`, `snumber`, `stname`, `sbname`, `dsbname`, `date`, `time`) VALUES ('$cname', '$phone', '$unumber', '$snumber', '$stname', '$sbname', '$dsbname', '$date', '$time')";
			
			$sql = "INSERT INTO CabsOnline(cname, phone) VALUES ('cname', 'phone')";
			
			$result = mysqli_query($conn,$sql);
			
			if(!$result){
				
				echo "<p>", $sql, "has some problems </p>";
				
			} else{
				
				echo "Booking has been recorded";
				
			}
		}
		
		mysqli_free_result($result);
		mysqli_close($conn);
		
?>