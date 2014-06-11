
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

function comparray(arrone,arrtwo)
{
	var i;

	for(i=0;i<3;i++)
	{
		if(arrone[i]!=arrtwo[i])
		{
			return false;
		}
	}

	return true;
}


function aicheckwin(a,b,c)
{	
	var arr0 = [a,b,c];
	
	//123
	if(comparray(arr0,[1,2,3])) return true;
	if(comparray(arr0,[2,1,3])) return true;
	if(comparray(arr0,[2,3,1])) return true;
	if(comparray(arr0,[3,2,1])) return true;
	if(comparray(arr0,[1,3,2])) return true;
	if(comparray(arr0,[3,1,2])) return true;

	//456
	if(comparray(arr0,[5,6,4])) return true;
	if(comparray(arr0,[6,5,4])) return true;
	if(comparray(arr0,[4,6,5])) return true;
	if(comparray(arr0,[6,4,5])) return true;
	if(comparray(arr0,[4,5,6])) return true;
	if(comparray(arr0,[5,4,6])) return true;
	
	//789
	if(comparray(arr0,[8,9,7])) return true;
	if(comparray(arr0,[9,8,7])) return true;
	if(comparray(arr0,[7,9,8])) return true;
	if(comparray(arr0,[9,7,8])) return true;
	if(comparray(arr0,[7,8,9])) return true;
	if(comparray(arr0,[8,7,9])) return true;
	
	//147
	if(comparray(arr0,[4,7,1])) return true;
	if(comparray(arr0,[7,4,1])) return true;
	if(comparray(arr0,[1,7,4])) return true;
	if(comparray(arr0,[7,1,4])) return true;
	if(comparray(arr0,[1,4,7])) return true;
	if(comparray(arr0,[4,1,7])) return true;
	
	//258
	if(comparray(arr0,[5,8,2])) return true;
	if(comparray(arr0,[8,5,2])) return true;
	if(comparray(arr0,[2,8,5])) return true;
	if(comparray(arr0,[8,2,5])) return true;
	if(comparray(arr0,[2,5,8])) return true;
	if(comparray(arr0,[5,2,8])) return true;
	
	//369
	if(comparray(arr0,[6,9,3])) return true;
	if(comparray(arr0,[9,6,3])) return true;
	if(comparray(arr0,[3,9,6])) return true;
	if(comparray(arr0,[9,3,6])) return true;
	if(comparray(arr0,[3,6,9])) return true;
	if(comparray(arr0,[6,3,9])) return true;
	
	//159
	if(comparray(arr0,[5,9,1])) return true;
	if(comparray(arr0,[9,5,1])) return true;
	if(comparray(arr0,[1,9,5])) return true;
	if(comparray(arr0,[9,1,5])) return true;
	if(comparray(arr0,[1,5,9])) return true;
	if(comparray(arr0,[5,1,9])) return true;
	
	//357
	if(comparray(arr0,[5,7,3])) return true;
	if(comparray(arr0,[7,5,3])) return true;
	if(comparray(arr0,[3,7,5])) return true;
	if(comparray(arr0,[7,3,5])) return true;
	if(comparray(arr0,[3,5,7])) return true;
	if(comparray(arr0,[5,3,7])) return true;
	

	return false;
}


function isclickable(a,b,c)
{	var asrc,bsrc,csrc;
	switch(a)
		{
			case 1: asrc = "m1"; break;
			case 2: asrc = "m2"; break;
			case 3: asrc = "m3"; break;
			case 4: asrc = "m4"; break;
			case 5: asrc = "m5"; break; 
			case 6: asrc = "m6"; break;
			case 7: asrc = "m7"; break;
			case 8: asrc = "m8"; break;
			case 9: asrc = "m9"; break;
		}
	switch(b)
		{
			case 1: bsrc = "m1"; break;
			case 2: bsrc = "m2"; break;
			case 3: bsrc = "m3"; break;
			case 4: bsrc = "m4"; break;
			case 5: bsrc = "m5"; break; 
			case 6: bsrc = "m6"; break;
			case 7: bsrc = "m7"; break;
			case 8: bsrc = "m8"; break;
			case 9: bsrc = "m9"; break;
		}
	switch(c)
		{
			case 1: csrc = "m1"; break;
			case 2: csrc = "m2"; break;
			case 3: csrc = "m3"; break;
			case 4: csrc = "m4"; break;
			case 5: csrc = "m5"; break; 
			case 6: csrc = "m6"; break;
			case 7: csrc = "m7"; break;
			case 8: csrc = "m8"; break;
			case 9: csrc = "m9"; break;
		}

	if(document.getElementById(asrc).src == document.getElementById(bsrc).src)
	{
		if(document.getElementById(asrc).src.indexOf("o.jpg")>-1)
		{
			if(document.getElementById(csrc).src.indexOf("b.jpg")>-1)
			{	
				if(aicheckwin(a,b,c))
				{
					return true;
				}
				
			}
		}
	}
	
	return false;
}

function randomclick()
{
	var i,j,k;
	var flg=0;
	var clickid;
	if(player<=2)
	{		
		var a = Math.floor(Math.random() * 9) + 1;
		

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
	

	else
	{	
		
		flg==0;

		for(i=1;i<10;i++)
		{	
			for(j=1;j<10;j++)
			{	if(j==i)
				{
					j++;
					if(j>9)
					{
						break;
					}
				}
				for(k=1;k<10;k++)
				{	
					if(k==i||k==j)
					{
						k++;
						if(k>9)
						{
							break;
						}
					}
					if(isclickable(i,j,k))
					{	
						switch(k)
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
						flg=1;
					
						document.getElementById(clickid).click();
						break;
					}
				}

				if(flg==1) break;

			}

			if(flg==1) break;
		}	

		if(flg==0)
		{
			player = player-2;
			
			randomclick();
		}
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