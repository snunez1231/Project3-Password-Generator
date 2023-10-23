// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  if (typeof length !== Number || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var specialChars = '!@#$%^&*()_-+=<>?/';

  var allowedChars = '';
  
  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }

  if (includeNumbers) {
    allowedChars += numberChars;
  }

  if (includeSpecialChars) {
    allowedChars += specialChars;
  }

  
  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}