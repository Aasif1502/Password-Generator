const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const symbols = "!@#$%^&*()"

const passwordBox= document.querySelector(".password")
const passLengthInput = document.querySelector(".passLengthInput")
const upperInput = document.querySelector("#upper-case")
const lowerInput = document.querySelector("#lower-case")
const numberInput = document.querySelector("#numbers")
const symbolInput = document.querySelector("#symbols")
const btn = document.querySelector("button")

function getRandomData(dataset) {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

function getPassword(password = "") {
    if(upperInput.checked) {
        password += getRandomData(upperCase)
    } 
    if(lowerInput.checked) {
        password += getRandomData(lowerCase)
    } 
    if(numberInput.checked) {
        password += getRandomData(numbers)
    } 
    if(symbolInput.checked) {
        password += getRandomData(symbols)
    } 
    if(password.length < passLengthInput.value ) {
        return getPassword(password)
    }
     if(password.length > passLengthInput.value) {  
       password = password.substring(0, passLengthInput.value);
     } 
    passwordBox.value = password;
    
}
   btn.addEventListener("click", () => {
       getPassword();
   })