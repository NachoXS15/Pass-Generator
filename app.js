const lengthEl = document.getElementById("length");
const caps = document.getElementById("capsCheck");
const nums = document.getElementById("numCheck");
const symbols = document.getElementById("charCheck")
const copyButton = document.getElementById("btnCopy")
const copyText = document.getElementById("passGen")
const generateBtn = document.getElementById("generateBtn")
const functions = {
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateBtn.addEventListener("click", () => {
    const length = + lengthEl.value
    const hasUpper = caps.checked
    const hasNumber = nums.checked
    const hasSymbol = symbols.checked

    copyButton.innerHTML = passwordGenerator(hasNumber, hasUpper, hasSymbol)
})


const passwordGenerator = () => {
    
}


const generatePassword = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz123456789$#.-_"
    const length = 12;
    let password = "";
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length);
        password += characters.charAt(index);
    }
    document.getElementById("passGen").innerText = password;
    copyButton.style.display = "block"
    document.getElementById("generateBtn").innerText = "Generate Again"
    copyBtn.innerText = "Copy"
}


copyButton.addEventListener("click", () => {
    if (!password) {
        return;
    }else{
        navigator.clipboard.writeText(password);
        copyBtn.innerText = "Copied!",
        copyBtn.className = "btn btn-outline-light btn-lg mt-2"
    }
})