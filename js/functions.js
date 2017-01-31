var delivery = "";
var handler = "php/functions.php";
var signal = true;

//alert('now')inde
/*
//Second Semester Calendar
var _cal = {
	size: 6,
	months:["july","august","september","october","november","december"],
	days:["Sun","Mon","Tues","Wed","Thu","Fri","Sat"],
	fullnames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
	space:[5,1,4,6,2,4],
	range:[31,31,30,31,30,31],
	index:[7,8,9,10,11,12]
	
}


var _time = {
	start:7,
	end:17,
	gap:10
}
*/

function insert(_TABLE, _LIST)
{
//	alert('then');
    var query = "INSERT INTO "+_TABLE+" VALUES ("+_LIST+")";
    return query;
}

function update(_TABLE, _LIST, _CONDITION) {
    var query = "UPDATE "+_TABLE+" SET "+_LIST+" "+_CONDITION;
    return query;
}

function delete_row(_TABLE,_CONDITION) {
    var query  = "DELETE FROM "+_TABLE+" "+_CONDITION;
    query = {"instruction":"update","query":query};
    return query;
}

function get_table(_TABLE, _CONDITION)
{
    var query = "SELECT* FROM "+_TABLE+" "+_CONDITION;
    return query;
}

//ajax function call
function ajax_call(sample,_async)
{
	//alert('start');
	    $.ajax({
		    url:handler,
		    type:"post",
		    dataType:"json",
		    async:_async,
		    data:sample,
		    success:function(response){
			    delivery = response;
			    if(signal)
				alert(delivery);
		    },
		    error:function(jqXHR, textStatus, errorThrown){
			    //alert(textStatus);
			    console.log(textStatus);
			    console.log(errorThrown);
		    }
	    });
	    //alert("now");
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

function _format(_raw)
{
	var _tg = ""+_raw;
	if(_tg.length == 1)
		return "0"+_tg;
		
	return _tg;
}

function format_date(_raw)
{
	
	alert(_raw);
	var dd = _raw.split('-').pop();
	var mm = _raw.split('-')[1];
	var yy = _raw.split('-')[0];
	var _formatted = yy+"-"+dd+"-"+mm;
	return _formatted;
}

function validDates(d1,d2)
{
	var dd = parseInt(d1.split('-').pop());
	var mm = parseInt(d1.split('-')[1]);
	var yy = parseInt(d1.split('-')[0]);
	
	var dd2 = parseInt(d2.split('-').pop()); 
	var mm2 = parseInt(d2.split('-')[1]);
	var yy2 = parseInt(d2.split('-')[0]);
	
	if(yy == yy2)
	{
		if(mm <= mm2)
		{
			if(dd <= dd2)
				return true;
		}
	}
	
	return false;
	
}

function verify()
{
    
   if (getCookie("log") != 'in') {
      window.location= 'index.html';
   }
   else
   {
      $("#loginLogo").children().html("logout");
   }
}



function valid_slot(x_start, x_end, y_start, y_end)
{
	/*var xs = 10*parseFloat(x_start.split(':')[0])+10*parseFloat(x_start.split(':')[1]/60) ;
	var xe = 10*parseFloat(x_end.split(':')[0])+10*parseFloat(x_end.split(':')[1]/60) ;
	var ys = 10*parseFloat(y_start.split(':')[0])+10*parseFloat(y_start.split(':')[1]/60) ;
	var ye = 10*parseFloat(y_end.split(':')[0])+10*parseFloat(y_end.split(':')[1]/60) ;
	alert(xs+" "+xe+" ");*/
}

function floatValue(x_start)
{
	var xs = 10*parseFloat(x_start.split(':')[0])+10*parseFloat(x_start.split(':')[1]/60) ;
	return xs;
}

function _initialise()
{
	var _job = {'instruction':'current-user'};
	ajax_call(_job,false);
	var usn = delivery;
	$('#current_user').html(usn);
	
	if(usn == 'guest')
	{
		$('#logout').hide();
	}
	else
	{
		$('#loginlink').hide();
		$('#registerlink').hide();
	}
}


