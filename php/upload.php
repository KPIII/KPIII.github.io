<?php
	//session_start();
	//$_SESSION['save_directory'] = 'tmp';
	if(isset($_GET['files']))
	{  
		$error = false;
		$files = array();
		$pd = 'loop';
		///$pd = $_SESSION['save_directory'];
		
		
		//$uploaddir = '../images/'.$_SESSION['save_directory'].'/';
		/*
		if(!realpath('../images/'.$_SESSION['save_directory']))
			mkdir('../images/'.$_SESSION['save_directory'],0700);
		*/
		$uploaddir = '../images/';
		
		foreach($_FILES as $file)
		{
		
		    $base = basename($file['name']);
		    $pd = $uploaddir.$base;
		    if(move_uploaded_file($file['tmp_name'], $uploaddir.$base))
		    {
			$pd = 'success';
		    }
		    else
		    {
			$error = 'failed';
		    }
		}
		echo json_encode($pd);
	}  
	
?>