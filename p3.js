/*!
Project Euler
http://projecteuler.net/


Problem 3: Largest prime factor
"The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
"

Solution by: A.Woroniuk 

Completed? No

 *
 */

var number = 600851475143
var largestprimefactor

 for (var i = 0; i < number; i++) {
 	if (number % i == 0) {
 		for (var j = 2; j < i; j++)	 {
 			if (i % j != 0) {
 				largestprimefactor = i;
 			}
 		}
 	}

 }
