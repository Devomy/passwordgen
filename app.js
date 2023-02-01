// Get DOM Elements
const passwordLength = document.getElementById("passwordLength");
const lengthDisplay = document.getElementById("lengthDisplay");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSpecial = document.getElementById("includeSpecial");
const passwordOutput = document.getElementById("passwordOutput");
const generateButton = document.getElementById("generateButton");

// Get Character Sets
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*";

// Variables to store character sets
let charSet = "";

// Set the lengthDisplay value to match passwordLength
lengthDisplay.value = passwordLength.value;

// Update passwordLength when lengthDisplay is changed
lengthDisplay.addEventListener("input", function () {
  passwordLength.value = lengthDisplay.value;
});

// Update lengthDisplay when passwordLength is changed
passwordLength.addEventListener("input", function () {
  lengthDisplay.value = passwordLength.value;
});

// Add event listener for generate button
generateButton.addEventListener("click", function () {
  // Reset charSet
  charSet = "";

  // Add selected character sets to charSet
  if (includeUppercase.checked) {
    charSet += uppercase;
  }
  if (includeLowercase.checked) {
    charSet += lowercase;
  }
  if (includeNumbers.checked) {
    charSet += numbers;
  }
  if (includeSpecial.checked) {
    charSet += special;
  }

  // Generate password
  let password = "";
  for (let i = 0; i < passwordLength.value; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  // Display password in passwordOutput
  passwordOutput.value = password;
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  // Reset password length
  const passwordLength = document.getElementById("passwordLength");
  passwordLength.value = 8;

  // Reset range display
  const lengthDisplay = document.getElementById("lengthDisplay");
  lengthDisplay.value = 8;

  // Reset checkboxes
  const includeUppercase = document.getElementById("includeUppercase");
  includeUppercase.checked = false;

  const includeLowercase = document.getElementById("includeLowercase");
  includeLowercase.checked = false;

  const includeNumbers = document.getElementById("includeNumbers");
  includeNumbers.checked = false;

  const includeSpecial = document.getElementById("includeSpecial");
  includeSpecial.checked = false;

  // Reset password output
  const passwordOutput = document.getElementById("passwordOutput");
  passwordOutput.value = "";
});

const copyButton = document.querySelector("#copyButton");

function copyPassword() {
  passwordOutput.select();
  document.execCommand("copy");
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
