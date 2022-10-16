// Assignment code here

const special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const length = window.prompt("What is the length of the password you want?");
  console.log(length);

  if (isNaN(length)) {
    window.alert("Not a number!");
    return
  }

  if (length < 8 || length > 128) {
    window.alert("Wrong size!");
    return
  }

  const possChar = [];
    if (isUppercase) {
      possChar.push(uppercase);
    }
    if (isLowercase) {
      possChar.push(lowercase);
    }
    if (isSpecial) {
      possChar.push(special);
    }
    if (isNumbers) {
      possChar.push(numbers);
    }


  const isUppercase = window.confirm("Would you like to include uppercase?");
  console.log(isUppercase);
  const isLowercase = window.confirm("Would you like to include lowercase?");
  console.log(isLowercase);
  const isSpecial = window.confirm("Would you like to include special characters?");
  console.log(isSpecial);
  const isNumbers = window.confirm("Would you like to include numbers?");
  console.log(isNumbers);
  return
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (x >= 8 && x <= 128) {

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
