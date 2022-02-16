var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "_"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordOption = "";
  var randomcharacter = [];
  var passwordLength = window.prompt("Choose between 8-128 characters");
  //This while loop will repeat itself until user enters a number between 8 and 128
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    var passwordLength = window.prompt(
      "Please enter a number between 8 and 128"
    );

    while (randomcharacter.length === 0) {
      //asking what the user wants to generate a proper password 
      if (window.confirm("do you want lowercase")) {
        randomcharacter = randomcharacter.concat(lowercase);
      }
      if (window.confirm("do you want uppercase")) {
        randomcharacter = randomcharacter.concat(uppercase);
      }
      if (window.confirm("do you want numbers")) {
        randomcharacter = randomcharacter.concat(numbers);
      }
      if (window.confirm("do you want symbols")) {
        randomcharacter = randomcharacter.concat(symbols);
      }
      if (randomcharacter.length === false) {
      }
    }
//for loop counting and adding
    for (var i = 0; i < passwordLength; i++) {
      finalPassword +=
        randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
    }
    //
    return finalPassword;
  }
//make a password 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
//listen to button
  generateBtn.addEventListener("click", writePassword);
}
