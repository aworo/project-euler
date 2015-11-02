/*!
Project Euler
http://projecteuler.net/


Problem 6: Sum square difference
"The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."

Solution by: A.Woroniuk 

Completed? Yes

Notes&Thoughts: Seemed Easy

*/

var squaresum = 0
var sumsquare = 0

for (i = 1; i < 101; i++) {
	sumsquare = sumsquare + (i*i);
	squaresum = squaresum + i;
}
squaresum = squaresum * squaresum;

alert("Answer: "+ (squaresum - sumsquare));