
var lowercase = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  var uppercase = [
  "A","B",
  "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
  var numbers = ["0", "1", "2", "3", "4",  "5", "6", "7", "8", "9"];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-","_"];
  
  function generatePassword(){
    var passwordOptions = "";
  
    var lower = validateInput(window.prompt("Include Lowercase?)"));
    var upper = validateInput(window.prompt("Include Uppercase?"));
    var numbers = validateInput(window.prompt("Include Numbers?"));
    var symbols = validateInput(window.prompt("Include symbols?"));
  
    if (lower) passwordOptions += lowercase;
    if (upper) passwordOptions += upperCase;
    if (numbers) passwordOptions += numbers;
    if (symbols) passwordOptions += symbols;
  
    if (passwordOptions.length == 0) {
      window.alert("Please select at least 1 type of character next time.");
      location.reload();
      
      return;
    }
  
    var passwordLength = window.prompt("Password must be 8-128 character long");
    if (isNaN(passwordLength)) {
      window.alert("Please enter a number next time.");
      location.reload();
    } else if (passwordLength<8 || passwordLength>128) {
      window.alert("Please enter a password that is between 8-128 characters long.");
      location.reload();
    }
  
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
    }
  
    return password;
  }
  
  function validateInput(response) {
    if (response == "y" || response == "y") {
      return true;
    } else if (response == "N" || response == "n") {
      return false;
    } else {
      window.alert("Please type either 'Y' or 'N' next time");
      location.reload();
      throw "Invalid User Input";
    }
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