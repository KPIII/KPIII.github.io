function hello()
{
	var tmpval = window.location.href.split('/').pop();
	var mainjob = {'instruction':'check-in', 'page':tmpval}
	ajax_call(mainjob, false);
	handle(delivery);
}

function handle(shuttle)
{
	if(typeof shuttle.success !== 'undefined')
	{
		if(shuttle.success)
		{
			
		}
		else
		{
			alert(shuttle.text);
		}
		if(shuttle.relocate)
		{
			window.location = shuttle.view;
		}
	}
	else
	{
		window.location = 'error.html';
		//alert('done');
	}
}