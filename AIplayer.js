

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

function checkwin(x)
{	
	var k1 = document.getElementById("m1").src;
	var k2 = document.getElementById("m2").src;
	var k3 = document.getElementById("m3").src;
	var k4 = document.getElementById("m4").src;
	var k5 = document.getElementById("m5").src;
	var k6 = document.getElementById("m6").src;
	var k7 = document.getElementById("m7").src;
	var k8 = document.getElementById("m8").src;
	var k9 = document.getElementById("m9").src;
	

	
	if(k1==k2 && k2==k3 && k1==x)
	{
		printwin(x);
	}

	else if(k4==k5 && k5==k6 && k4==x)
	{
		printwin(x);
	}

	else if(k7==k8 && k8==k9 && k7==x)
	{
		printwin(x);
	}

	else if(k1==k4 && k4==k7 && k1==x) 
	{
		printwin(x);
	}

	else if(k2==k5 && k5==k8 && k2==x)
	{
		printwin(x);
	}
	else if(k3==k6 && k6==k9 && k3==x)
	{
		printwin(x);
	}
	else if(k1==k5 && k5==k9 && k1==x) 
	{
		printwin(x);
	}
	else if(k3==k5 && k5==k7 && k3==x)
	{
		printwin(x);
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
		
	}
	else
	{
		randomclick();
	}

}


function aiplay()
{	
	var y;
	var clickid;

	if( player <= 2)
	{
		randomclick();
		return;
	}	

	tbrd = [3,0,0,0,0,0,0,0,0,0];

	for(y=1;y<10;y++)
	{
			switch(y)
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
			if(document.getElementById(clickid).src.indexOf("o.jpg") > -1)
			{
				tbrd[y] = 1;
			}
			if(document.getElementById(clickid).src.indexOf("x.jpg") > -1)
			{
				tbrd[y] = 2;
			}
	}

var flag = 0;

for(y=1;(y<10)&&(tbrd[y]==0);y++)
{

	if( tbrd[1]==tbrd[2] && tbrd[2]==1 && y==3 )
		{
			flag = y;
			
		}
	if( tbrd[1]==tbrd[3] && tbrd[3]==1 && y==2 ) //123
		{
			flag = y;
			
		}
	if( tbrd[3]==tbrd[2] && tbrd[3]==1 && y==1 )
		{
			flag = y;
			
		}


	if( tbrd[5]==tbrd[6] && tbrd[5]==1 && y==4 )
		{
			flag = y;
			
		}
	if( tbrd[4]==tbrd[6] && tbrd[4]==1 && y==5 ) //456
			{
			flag = y;
			
		}
	if( tbrd[4]==tbrd[5] && tbrd[4]==1 && y==6 )
		{
			flag = y;
			
		}


	if( tbrd[8]==tbrd[9] && tbrd[8]==1 && y==7 )
		{
			flag = y;
			
		}
	if( tbrd[7]==tbrd[9] && tbrd[7]==1 && y==8 )	//789
		{
			flag = y;
			
		}
	if( tbrd[7]==tbrd[8] && tbrd[7]==1 && y==9 )
		{
			flag = y;
			
		}


	if( tbrd[4]==tbrd[7] && tbrd[4]==1 && y==1 )
		{
			flag = y;
			
		}
	if( tbrd[1]==tbrd[7] && tbrd[1]==1 && y==4 )  //147
		{
			flag = y;
			
		}
	if( tbrd[1]==tbrd[4] && tbrd[1]==1 && y==7 )
		{
			flag = y;
			
		}


	if( tbrd[5]==tbrd[8] && tbrd[5]==1 && y==2 )
		{
			flag = y;
			
		}
	if( tbrd[2]==tbrd[8] && tbrd[2]==1 && y==5 ) //258
		{
			flag = y;
			
		}
	if( tbrd[2]==tbrd[5] && tbrd[2]==1 && y==8 )
		{
			flag = y;
			
		}


	if( tbrd[6]==tbrd[9] && tbrd[6]==1 && y==3 )
		{
			flag = y;
			
		}
	if( tbrd[3]==tbrd[9] && tbrd[3]==1 && y==6 ) //369
		{
			flag = y;
			
		}
	if( tbrd[3]==tbrd[6] && tbrd[3]==1 && y==9 )
		{
			flag = y;
			
		}
	

	if( tbrd[5]==tbrd[1] && tbrd[5]==1 && y==1 )
		{
			flag = y;
			
		}
	if( tbrd[1]==tbrd[9] && tbrd[1]==1 && y==5 ) //159
		{
			flag = y;
			
		}
	if( tbrd[1]==tbrd[5] && tbrd[1]==1 && y==9 )
		{
			flag = y;
			
		}
	

	if( tbrd[3]==tbrd[7] && tbrd[7]==1 && y==3 )
		{
			flag = y;
			
		}
	if( tbrd[3]==tbrd[7] && tbrd[7]==1 && y==5 ) //357
		{
			flag = y;
			
		}
	if( tbrd[3]==tbrd[5] && tbrd[5]==1 && y==7 )
		{
			flag = y;
			
		}
		
		if(flag!= 0 )
			break;
}

if(y==10) 
{
	randomclick();
		return;
}

switch(flag)
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

player = player +1;
document.getElementById(clickid).click();
alert("End of aiplay");

}


function theworks(x)
{	
	if(player%2!=0)
	{
		aiplay();
	}
	
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

	
	player = player + 1 ;
	
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

