<?php
	require('function.php');
	$pd = 'jj';
	if($_POST['instruction'] == 'add-product')
	{
		addProduct($_POST['name'], $_POST['type'], $_POST['desc'], $_POST['image'], $_POST['price']);
	}
	
	function addProduct($pname, $ptype, $pdesc,$pimage, $price)
	{
		$qry = "INSERT INTO `product` "
			." (`pname`, `ptype`, `pdesc`, `pimage`, `price`)"
			." VALUES ('".$pname."', '".$ptype."', '".$pdesc."' , '".$pimage."', '".$price."' ) ";
			update($qry);
			update_closer();
	}
	if($_POST['instruction'] == 'get-product')
	{
		$qry = "SELECT `pid`, `pname`,`price`, `pdesc`, `pimage` "
			." FROM `product`";
		get_table($qry);
		
		$copy = "";
		
		if($pd != "")
		{
			for($k = 0; $k < sizeof($pd); $k++)
			{
				$copy[$k] = array(
				"id"=>$pd[$k][0],
				"description"=>$pd[$k][3],
				"price"=>$pd[$k][2],
				"name"=>$pd[$k][1],
				"image"=>$pd[$k][4]
				);
			}
			$pd = $copy;
		}
		package();
	}
	
	//$pd = array('success'=>true, "data"=>"none");
	echo json_encode($pd);
?>