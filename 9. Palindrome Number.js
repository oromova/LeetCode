// 9. Palindrome Number

var isPalindrome = function(x) {
  return x < 0 ? false : (x === +x.toString().split("").reverse().join(""))
}