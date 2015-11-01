/*!
Project Euler
http://projecteuler.net/

"
Problem 1: Multiples of 3 and 5
"If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
"

Solution by: A.Woroniuk 

Completed? Yes

 *
 */

var number = 1000;
var multsum = 0;

for (var i = 0; i < number; i++) {

	if (i % 3 == 0 || i % 5 == 0) {
		multsum = multsum + i;
	}
	
}


document.write(multsum);

