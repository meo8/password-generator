// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Array to store a-z
let letters = "abcdefghigklmnopqrstuvwxyz";
let alphabetArray = letters.split("");

// Write password to the #password input
function writePassword() {
    // Stores password length input
    let pwLength = passwordLength();
    // Make user pick lower or uppercase options
    let isLowerCase = confirm("Would you like to include lowercase letters in your password?");
    let isUpperCase = confirm("Would you like to include uppercase letters in your password?");
    // If user picks no to both lowercase AND uppercase
    // An alert along with more prompts will appear
    while (isLowerCase === false && isUpperCase === false) {
        alert("Please pick one or both of the options.")
        isLowerCase = confirm("Would you like to use lowercase?");
        isUpperCase = confirm("Would you like to use uppercase?");
    }

    // Stores generaged password into the variable password
    // Var password = generatePassword();

    // Sets the password within the HTML file
    passwordText.value = password;
}

// Create generatePassword function below
function generatePassword(length) {
    console.log(alphabetArray[0].toUpperCase());
    // toUpperCase, toLowerCase
    // Randomize Math.random, Math.floor
    // .charAt()
}

// Function to ask for length of password
function passwordLength() {
    let result = prompt("How long do you want your password to be?");
    // Convert result to number
    let newResult = parseInt(result);

    // newResult must be between 8-128
    while (newResult < 8 || newResult > 128) {
        newResult = prompt("Please enter a number between 8 and 128.")
    }
    return newResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
