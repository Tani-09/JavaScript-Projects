const passwordBox = document.getElementById("password");
const lengt = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = ".,><?/':;[]{}()+=*&^%$#@!~";

const allChars = upperCase + lowerCase + symbol + number;

function createPassword(){
    let password = "" ;
    password +=  upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=  lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password +=  number[Math.floor(Math.random() * number.length)];
    password +=  symbol[Math.floor(Math.random() * symbol.length)];


while(password.length < lengt){
    password += allChars[Math.floor(Math.random() * allChars.length)];
}

passwordBox.value = password;

}

// const generateBtn = document.getElementById("generate-btn");
// generateBtn.addEventListener('click', createPassword());

function copyPassword(){
    passwordBox.select();
   document.execCommand("copy");
}