/*!
Project Euler
http://projecteuler.net/


Problem 3: Largest prime factor
"The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
"

Solution by: A.Woroniuk 

Completed? Yes* (*Browser/JS not the best way to handle a number this large!) 
I'm leaving it listed as unsolved on ProjectEuler.net for now, I tested it with various numbers and it does work correctly as expected.



 *
 */

var number = 600851475
var largestprimefactor = 0

 for (var i = 2; i < (number / 2); i++) {
 	if (number % i == 0) {  /* if a factor then...*/
 		var primefactor = true;
 		for (var j = 2; j < i; j++)	 {
 			if (i % j == 0) {
 				primefactor = false;
 				break;
 			}
 		}	
 		if (primefactor == true) {
 			largestprimefactor = i;
 		document.write(largestprimefactor + "\n");

 		}
 			
 	 		
 	}

 }
document.write(largestprimefactor)