const special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  let userPassword = [];
  // Edited prompt to mentions the parameters of 8 and 128 characters
  const length = window.prompt("What is the length of the password you want(Between 8 and 128 characters)?");

  console.log(length);

  if (!length) {
    return
  }

  if (isNaN(length)) {
    window.alert("Not a number!");
    return;
  }

  if (length < 8 || length > 128) {
    window.alert("Passwords must be between 8 and 128 characters.");
    return;
  }

  const isUppercase = window.confirm("Would you like to include uppercase?");
  console.log(isUppercase);
  const isLowercase = window.confirm("Would you like to include lowercase?");
  console.log(isLowercase);
  const isSpecial = window.confirm("Would you like to include special characters?");
  console.log(isSpecial);
  const isNumbers = window.confirm("Would you like to include numbers?");
  console.log(isNumbers);

let possChar = [];

    if (isUppercase) {
      possChar = possChar.concat(uppercase);
    }
    if (isLowercase) {
      possChar = possChar.concat(lowercase);
    }
    if (isSpecial) {
      possChar = possChar.concat(special);
    }
    if (isNumbers) {
      possChar = possChar.concat(numbers);
    }
    console.log(possChar, "possChar");

    // Added an if statement to return an alert if the user does not include any type of character.
    // Changed , to &&; resolved the issue whenever something other than isUppercase is selected
    if (isNumbers && isSpecial && isLowercase && isUppercase === false) {
      window.alert("Please select at least one type of character to include.");

      return;
    }

  let numChar = possChar.length;
  const randomIndex = Math.floor(Math.random() * numChar);

  for (let i = 0; i <= length - 1; i++) {
    userPassword = userPassword.concat(possChar[Math.floor(Math.random() * numChar)]);
  }

  console.log(userPassword)
  return userPassword.join('');
}
// I added an if statement so that if the value returns as undefined, it would return to the original state and keep the placeholder.
function writePassword() {
  var password = generatePassword();
  if (password === undefined) {
    return;
  } else {
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);
