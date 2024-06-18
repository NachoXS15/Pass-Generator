const lengthEl = document.getElementById("length");
const lowerEl = document.getElementById("lowerCheck");
const upperEl = document.getElementById("capsCheck");
const numsEl = document.getElementById("numCheck");
const symbolsEl = document.getElementById("charCheck")
const copyButton = document.getElementById("copyBtnOption")
const copyText = document.getElementById("passGen")
const generateBtn = document.getElementById("generateBtn")
const copySvg = document.getElementById("copy")
const clearBtn = document.getElementById("clear");
const listGroup = document.getElementById("list")
const noneText = document.getElementById("noneText")
const switchTheme = document.getElementById("toggle-theme")
const body = document.body;


//click para activar modo oscuro
switchTheme.addEventListener("click", function(){
    console.log('modo oscuro');
    body.classList.toggle("dark-mode")
    if (body.classList.contains("dark-mode")) {
        generateBtn.classList.remove("btn-success")
        generateBtn.classList.toggle("btn-light")
    }else{
        generateBtn.classList.add("btn-success")
        generateBtn.classList.remove("btn-light")
    }

})

//definicion de funciones
const functions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    nums: getRandomNumber,
    symbols: getRandomSymbol
}

function getRandomLower(){
    const lowers = "abcdefghijklmnopqrstuvwxyz"
    return lowers[Math.floor(Math.random() * lowers.length)]
}

function getRandomUpper(){
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWYXZ"
    return caps[Math.floor(Math.random() * caps.length)]
}

function getRandomNumber(){
    const numbers = "0123456789"
    return numbers[Math.floor(Math.random() * numbers.length)]
    
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

//revisa cuales estan marcados y muestra el valor final
generateBtn.addEventListener("click", () => {
    generateBtn.innerText = "Re-generate"
    const length = lengthEl.value
    const hasLower = lowerEl.checked
    const hasUpper = upperEl.checked
    const hasNumber = numsEl.checked
    const hasSymbol = symbolsEl.checked
    copyText.innerHTML = passwordGenerator(hasLower, hasUpper, hasNumber, hasSymbol, length)
})


const passwordGenerator = (lower, upper, nums, symbols, length) => {
    let password = "";
    const typesCount = lower + upper + nums + symbols;
    const types = [{lower}, {upper}, {nums}, {symbols}].filter(item => Object.values(item)[0]);
    
    if (typesCount === 0) {
        copyText.style.color = "red"
        copyText.style.cursor = "pointer"
        return "Please check options";
    }else{
        for (let i = 0; i < length; i += typesCount) {
            types.forEach(type => {
                const func = Object.keys(type)[0];
                password += functions[func]();
            });
        }
        const newPass = password.slice(0, length);
        copyText.style.color = "white"
        return newPass;
    }
}

//limpia el campo de contraseña
clearBtn.addEventListener("click", () => {
    copyText.innerText = "Password will apear here"
    copyText.style.color = "lightgray"
    copySvg.setAttribute('fill', 'white');
    generateBtn.innerText = "Generate"
})


//copia el campo de contraseña
copyButton.addEventListener("click", () => {
    const newPass = copyText.innerHTML
    console.log(newPass)
    if (!newPass || newPass == "Password will apear here") {
        copySvg.setAttribute('fill', 'red');
    }else{
        navigator.clipboard.writeText(newPass);
        console.log(newPass);
        copySvg.setAttribute('fill', 'green');
    } 
})



