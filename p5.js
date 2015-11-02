/*!
Project Euler
http://projecteuler.net/


Problem 5: Smallest Multiple
"2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"

Solution by: A.Woroniuk 

Completed? Yes

Notes&Thoughts: A missing paranthesis had me stumped for a while. 

*/

var counter = 0 
var divisible20 = false

while (divisible20 == false) {
	counter++;
	
	for (var i = 1; i < 21; i++) {
		
		if (counter % i == 0) {
			divisible20 = true;
		}
		
		else {
			divisible20 = false;
			break;
		}
	}
	
}


alert("The smallest positive number that is evenly divisible by 1-20 is " + counter);