/*!
Project Euler
http://projecteuler.net/


Problem 7: 10001s prime
"By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?"

Solution by: A.Woroniuk 

Completed? Yes

Notes&Thoughts: A few items are clunky, but it works

*/

var primecounter = 0
var i = 2
while (primecounter != 10001) {
	var isPrime = true
	for (var j = 2; j < i; j++) {
		if (i % j == 0) {
			isPrime = false;
			break
		}
		else {
			isPrime = true;
			
		}

	}
	i++
	if (isPrime == true) {
		primecounter ++;
	}

	
}

alert("The 6th prime is: " + (i-1));