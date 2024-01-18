function isPalindrome(str) {
  // function to check if string is palindrom


/* 
 convert input to lowercase
 reverse the string
 compare string to the reversed string
*/
let tmp = str.toLowerCase();
let str1 = tmp.split("");
str1 = str1.reverse();
let str2 = str1.join("")
if (tmp===str2){

  return true;
}
else{
  return false;
}
}
  
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
