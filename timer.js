
var x = 10;

function timer()
{	
	
	if(x == 0)
	{
		randomclick();
		return true;
	}

	else
	{
		document.getElementById("tnumber").innerHTML = x;
		x = x-1;
		return true;	
	}
	
}

function randomclick()
{
	
	var a = Math.floor(Math.random() * 8) + 1;
	var clickid;

	switch(a)
	{
		case 1: clickid = "m1"; break;
		case 2: clickid = "m2"; break;
		case 3: clickid = "m3"; break;
		case 4: clickid = "m4"; break;
		case 5: clickid = "m5"; break; 
		case 6: clickid = "m6"; break;
		case 7: clickid = "m7"; break;
		case 8: clickid = "m8"; break;
		case 9: clickid = "m9"; break;
	}


	if (document.getElementById(clickid).src.indexOf("b.jpg")>-1)
	{
		
		document.getElementById(clickid).click();
		resettimer(); 
		
	}
	else
	{
		randomclick();
	}

}

function resettimer()
{
	x = 10;
	
}

function starttimer()
{	
	var x = timer();
	if(x)
	{	
		clearTimeout();
		setTimeout(function(){starttimer();},1000);
	}

}