// Assignment code here
var groups = ["abcdefghijklmnopqrstuvwxy","ABCDEFGHIJKLMNOPQRSTUVWXYZ","1234567890","!#$%&'()*,-./:;<=>?@[/]^_{|}~`"]

var generatePassword = function() {
  var totalElements = "";
  var finalPassword = "";
  var check = {
    lower: false,
    upper: false,
    num: false,
    special: false
  }
  passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("how long would you like your password? between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a value between 8 and 128!");
    }
  }
  while (check.lower === false && check.upper === false && check.num === false && check.special === false) {
    check.lower = window.confirm("Would you like Lowerase letters included?");
    check.upper = window.confirm("Would you like Uppercase letters included?");
    check.num = window.confirm("Would you like numbers included?")
    check.special = window.confirm("Would you like special characters included?");
  }
  var i = 0;
  for (key in check) {
    if (check[key]) {
      totalElements = totalElements + groups[i];
    }
    i = i +1;
  }
  for (var x = 0, n = totalElements.length; x < passwordLength; x++) {
    finalPassword = finalPassword + totalElements.charAt(Math.floor(Math.random()* n));
  }
  window.alert(finalPassword);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
