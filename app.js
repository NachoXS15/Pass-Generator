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

clearBtn.addEventListener("click", () => {
    copyText.innerText = "Password will apear here"
    copyText.style.color = "lightgray"
})

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


// const historyCanva = () => {
    //     historyArr.push(password)
    //     if (!historyArr) {
        //         document.getElementById("noneText").style.display = "none"
        //     }else{
            //         localStorage.setItem('contraseñas', historyArr)
            //         historyArr.forEach(pass => {
//             historyArr.find == pass;
//             console.log(historyArr)
//             const listItem = document.createElement("li")
//             listItem.setAttribute("class", "list-group-item")
//             listItem.innerText = pass
//             listGroup.appendChild(listItem)
//         })
//     }
// }
