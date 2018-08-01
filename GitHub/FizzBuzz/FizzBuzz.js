//FIZZBUZZ CODE
//Count from 1 to 20. Notify user if number is divisible by 3, 5 or both!
function myFunction(){
for (i=1; i <= 20; i++)
{
	if (i % 3 === 0) {
		if (i % 5 === 0) {

			alert('FIZZBUZZ!')
		}
		else {
			alert('FIZZ');
		}
	}
	else if (i % 5 === 0)
	{
		alert('BUZZ');
	}
	else
	{
		alert(i + ' is neither FIZZ nor BUZZ. Sorry!');
	}
	}
}
}

