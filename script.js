
var num;
function digit_count(a) {
	var c = 0;
	while (a!==0) {
		a=Math.floor(a/10);
		c=c+1;
	}
	return c;
}
function check(n) {
	var count_digits = digit_count(n);
	//console.log(count_digits);
	// Compute sum of terms like digit multiplied by 
	// power of position 
	var sum = 0; // Initialize sum of terms 
	var x = n;
	while (x!== 0) {
		// Get the rightmost digit 
		var r = Math.floor(x % 10);
	console.log(r);
		// Sum the digits by powering according to 
		// the positions 
		sum = Math.floor((sum + Math.pow(r, count_digits--)));
		
		x = Math.floor(x / 10);
	}
	return (sum == n); 
}
function maincall()
{
	var num=document.getElementById("inputid").value;
	var result=check(num) ? "Disarium Number" : "Not a Disarium Number";
	document.getElementById("resultdiv").innerHTML="The "+num+" is "+result;
	
}

function reset()
{
	document.getElementById("inputid").value="";
	document.getElementById("resultdiv").innerHTML="";
}