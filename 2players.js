

var player = 0;

var h1 = 0;
var h2 = 0;
var h3 = 0;
var h4 = 0;
var h5 = 0;
var h6 = 0;
var h7 = 0;
var h8 = 0;
var h9 = 0;


function changeimg(x)
{
	var i = document.getElementById(x);
	
	switch(parseInt(x[1]))
	{
		case 1: if (h1 != 0) return; break;
		case 2: if (h2 != 0) return; break;
		case 3: if (h3 != 0) return; break;
		case 4: if (h4 != 0) return; break;
		case 5: if (h5 != 0) return; break;
		case 6: if (h6 != 0) return; break;
		case 7: if (h7 != 0) return; break;
		case 8: if (h8 != 0) return; break;
		case 9: if (h9 != 0) return; break;
	}

	if(player%2==0) 
	{
		i.src = "./img/o.jpg";
		i.style.opacity = 1;
	}
	else 
	{
		i.src = "./img/x.jpg";
		i.style.opacity = 1;
	}
}

function resetimg(x)
{
	var i = document.getElementById(x);
	
	var f = true;

	switch(parseInt(x[1]))
	{
		case 1: if (h1 != 0) f = false; break;
		case 2: if (h2 != 0) f = false; break;
		case 3: if (h3 != 0) f = false; break;
		case 4: if (h4 != 0) f = false; break;
		case 5: if (h5 != 0) f = false; break; 
		case 6: if (h6 != 0) f = false; break;
		case 7: if (h7 != 0) f = false; break;
		case 8: if (h8 != 0) f = false; break;
		case 9: if (h9 != 0) f = false; break;
	}
		
	if(f)
	{
		i.src = "./img/b.jpg";	
		i.style.opacity = 0.2;
	}
}

function printwin(x)
{   
	
	
	if(x.indexOf("o.jpg")>-1)
	{
		
		 document.getElementById("win1").click();
		 return;
	}

	if(x.indexOf("x.jpg")>-1)
	{
		 document.getElementById("win2").click();
		 return;
	}

	return;
}

function checkwin(x,num)
{	
	var h1 = document.getElementById("m1").src;
	var h2 = document.getElementById("m2").src;
	var h3 = document.getElementById("m3").src;
	var h4 = document.getElementById("m4").src;
	var h5 = document.getElementById("m5").src;
	var h6 = document.getElementById("m6").src;
	var h7 = document.getElementById("m7").src;
	var h8 = document.getElementById("m8").src;
	var h9 = document.getElementById("m9").src;
	

	
	if(h1==h2 && h2==h3 && h1==x)
	{
		printwin(x);
	}

	else if(h4==h5 && h5==h6 && h4==x)
	{
		printwin(x);
	}

	else if(h7==h8 && h8==h9 && h7==x)
	{
		printwin(x);
	}

	else if(h1==h4 && h4==h7 && h1==x) 
	{
		printwin(x);
	}

	else if(h2==h5 && h5==h8 && h2==x)
	{
		printwin(x);
	}
	else if(h3==h6 && h6==h9 && h3==x)
	{
		printwin(x);
	}
	else if(h1==h5 && h5==h9 && h1==x) 
	{
		printwin(x);
	}
	else if(h3==h5 && h5==h7 && h3==x)
	{
		printwin(x);
	}	
	
}

function changeplayer(x)
{
	if(x%2==0) 
	{
		document.getElementById("p1").style.opacity = 1;
		document.getElementById("p2").style.opacity = 0.3;
	}
	else
	{
		document.getElementById("p2").style.opacity = 1;
		document.getElementById("p1").style.opacity = 0.3;
	}
}

function theworks(x)
{	
	
	switch(parseInt(x[1]))
	{
		case 1: if (h1 != 0) return; break;
		case 2: if (h2 != 0) return; break;
		case 3: if (h3 != 0) return; break;
		case 4: if (h4 != 0) return; break;
		case 5: if (h5 != 0) return; break;
		case 6: if (h6 != 0) return; break;
		case 7: if (h7 != 0) return; break;
		case 8: if (h8 != 0) return; break;
		case 9: if (h9 != 0) return; break;
	}

	changeimg(x);
	player = player + 1 ;
	changeplayer(player);
	var y;
	switch(parseInt(x[1]))
	{
		case 1: h1 += 1; break;
		case 2: h2 += 1; break;
		case 3: h3 += 1; break;
		case 4: h4 += 1; break;
		case 5: h5 += 1; break;
		case 6: h6 += 1; break;
		case 7: h7 += 1; break;
		case 8: h8 += 1; break;
		case 9: h9 += 1; break;
	}

	switch(parseInt(x[1]))
	{
		case 1: if (h1 != 0) y = document.getElementById("m1").src; break;
		case 2: if (h2 != 0) y = document.getElementById("m2").src; break;
		case 3: if (h3 != 0) y = document.getElementById("m3").src; break;
		case 4: if (h4 != 0) y = document.getElementById("m4").src; break;
		case 5: if (h5 != 0) y = document.getElementById("m5").src; break; 
		case 6: if (h6 != 0) y = document.getElementById("m6").src; break;
		case 7: if (h7 != 0) y = document.getElementById("m7").src; break;
		case 8: if (h8 != 0) y = document.getElementById("m8").src; break;
		case 9: if (h9 != 0) y = document.getElementById("m9").src; break;
	}

	checkwin(y);

}
