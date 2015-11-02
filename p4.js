/*!
Project Euler
http://projecteuler.net/


Problem 4: Largest palindrome product
"A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers."

Solution by: A.Woroniuk 

Completed? Yes 

Notes&Thoughts: I'm fairly sure I could have used better JS functions to clean up my palindromeCheck function. Ah well.



 *
 */
var highestpalindrome = 0

for (var i = 100; i < 1000; i++) {  /* Starting with 2 digit numbers until I can match the example*/
	for (var j = 100; j < 1000; j++) {
		if ((palindromeCheck(i * j) == true) && ((i*j) > highestpalindrome)) {
			highestpalindrome = (i*j);
		}
	}
}

function palindromeCheck(checknum) {
	var product = (checknum).toString();
	var reverseproduct = ""
	for (var k = product.length; k > 0; k--) {
		
		reverseproduct = reverseproduct + product.charAt(k-1);
	}
	if (product == Number(reverseproduct)) {
		return true;
	}
}

document.write("Largest palindrome made from the product of two 3-digit numbers: " + highestpalindrome);