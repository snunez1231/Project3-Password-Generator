// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password based on user criteria
function generatePassword() {
  // Prompt for password criteria
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Checks and vaildates length 
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  
  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
    alert("Please select at least one character type.");
    return "";
  }

  // Define character sets based on user criteria
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

  // Generate password based on criteria
  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

// Event listener for button click
generateBtn.addEventListener("click", writePassword);


// Hello Stephanie, Thank you for submitting this assignment. 
//I was able to view your application in the browser but it seems the functionality of the program has not been completed. 
//To start the application will not function correctly based on the check you are doing when you check to see how long the password 
//the person entered is. The typeof Number returns a function and will immediately exit the program. 
//Instead if you use isNaN(length) this will check to see if the length is not a number and than proceed to check the length statements.
// Even with that fix you did not add code to prompt the user for the character types they would like to include. 
//You will need to create a separate prompt for each character type. 
//Your GitHub repo has a kind of unique name but I encourage you to leave out words like module, project or challenge. 
//These are assignments from class but they are now your projects and should be named accordingly. 
//Your file structure needs to be adjusted as you should have an assets folder that you store the style/script and images in. 
//It would also be a good idea to put each into their own folder inside the assets folder. 
//This will make a lot more sense when your programs begin to scale and you have many files of each type. 
//You have a readme with a description and link to your repo but you need to include a screen shot of the application as well as the link 
//to the live web page. You will also need to add comments to the program. 
//This is not only required but it is also a good idea as it will help to improve your understanding of the code as well as 
//assist in traversing the code in the need to locate something. You have a very low number of commits. 
//You need to push early and often. If you create variables to hold the character types than push that code 
//and have the commit message read something like "created variables to store character choices". 
//This helps give other developers an idea to what was pushed. 