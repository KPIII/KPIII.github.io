<?php
	$con = mysqli_connect("localhost","root","");
	$db_selected = mysqli_select_db($con,'onestop');
	$dbmsg ="";
	$error = false;

	function update($query)
	{
		global $con; global $dbmsg;
		global $pd; global $error;
		if(!mysqli_query($con,$query))
		{
		    $pd = mysqli_error($con);
		    $dbmsg = $pd;
		    $error = true;
		}
		else
		{
		    $pd = "success";
		    $error = false;
		}
	}
	    
	function noError($query)
	{
		global $con; global $dbmsg;
		global $pd; global $error;
		
		if(!mysqli_query($con,$query))
		{
		    $pd = mysqli_error($con);
		    //$error = true;
		    return false;
		}
		else
		{
		    $pd = "success";
		    //$error = false;
		}
		return true;
	}
	    
	function get_table($query)
	{
		global $con; global $dbmsg;
		global $pd; global $error;

		if(!mysqli_query($con,$query))
		{
		    $pd = mysqli_error($con);
		    $dbmsg = $pd;
		    $error = true;
		}
		else
		{
		    $table = mysqli_query($con,$query);
		    
		    $rows =  mysqli_num_rows($table);
		    $list = array();
		    for($row = 0; $row < $rows; $row++)
		    {
			mysqli_data_seek($table, $row);
			$tmp = mysqli_fetch_row($table);
			$list[$row] = $tmp;
		    }
		    
		    if($rows > 0)
			$pd = $list;
		    else
			$pd = "";
			
			$error = false;
		}
	}

	function mysqli_result($res, $row_=0,$col_=0)
	{
		if($row_ >= 0 && mysqli_num_rows($res) > $row_)
		{
		    mysqli_data_seek($res, $row_);
		    $resrow = mysqli_fetch_row($res);
		    if(isset($resrow[$col_]))
		    {
			return $resrow[$col_];
		    }
		}
		return "empty";
	}
   
	function package()
	{
		global $con; global $dbmsg;
		global $pd; global $error;
        
		if($error)
		{
			$pd = array("success" => false,
				"text"=>$dbmsg
				);
		}
		else
		{
			$tmp = $pd;
			$pd= array("success"=>true,
				"text"=>"loading",
				"data"=>$tmp
				);
		}
		return $pd;
	}
	
	function update_closer()
	{
		global $con; global $dbmsg;
		global $pd; global $error;
        
		if($error)
		{
			$pd = array("success" => false,
				"text"=>$dbmsg
				);
		}
		else
		{
			$pd = array("success"=>true,
				"text"=>"updated successfully");
		}
		return $pd;
	}
?>