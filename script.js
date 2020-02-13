// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  // Stores password length input
  let pwLength = passwordLength();

  // Make user pick lower or uppercase options
  let isLowerCase = confirm("Would you like to include lowercase letters in your password?");
  let isUpperCase = confirm("Would you like to include uppercase letters in your password?");
  let isNumber = confirm("Would you like to include numbers in your password?");

  // If user picks no to both lowercase AND uppercase
  // An alert along with more prompts will appear
  while (isLowerCase === false && isUpperCase === false && isNumber === false) {
    alert("Please pick one or both of the options.")
    isLowerCase = confirm("Would you like to use lowercase?");
    isUpperCase = confirm("Would you like to use uppercase?");
    isNumber = confirm("Would you like to use numbers?");
  }

  // Stores generaged password into the variable password
  var password = generatePassword(pwLength, isLowerCase, isUpperCase, isNumber);

  // Sets the password within the HTML file
  passwordText.value = password;
}

// Create generatePassword function below
function generatePassword(length, lower, upper, number) {
  // Array to store a-z
  const numbers = "0123456789";
  const lowerOnly = "abcdefghigklmnopqrstuvwxyz";
  const upperOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerUpper = "aAbBcCdDeEfFgGhHiIgJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
  const lowUpNum = "aAbBcCdDeEfFgGhHiIgJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
  let password = '';
  // Randomize Math.random, Math.floor
  // .charAt()
  if (lower === true && upper === false) {
    for (let i = 0; i < length; i++) {
      password += lowerOnly.charAt(Math.floor(Math.random() * 27));
    }
  } else if (lower === false && upper === true) {
    for (let i = 0; i < length; i++) {
      password += upperOnly.charAt(Math.floor(Math.random() * 27));
    }
  } else if (lower === false && upper === false && number === true) {
    for (let i = 0; i < length; i++) {
      password += numbers.charAt(Math.floor(Math.random() * 27));
    }
  } else if (lower === true && upper === true && number === true) {
      for (let i = 0; i < length; i++) {
        password += lowUpNum.charAt(Math.floor(Math.random() * 63));
    }
  } else if (lower === true && upper === true) {
      for (let i = 0; i < length; i++) {
        password += lowerUpper.charAt(Math.floor(Math.random() * 53));
      }
    }

  return password;
}

// Function to ask for length of password
function passwordLength() {
  let result = prompt("How long do you want your password to be?");
  // Convert result to number
  while (result === null || result === "") {
    alert("Please pick a length.");
    result = prompt("How long do you want your password to be?");
  }

  let newResult = parseInt(result);

  // newResult must be between 8-128
  while (newResult < 8 || newResult > 128) {
    newResult = prompt("Please enter a number between 8 and 128.")
  }
  return newResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
