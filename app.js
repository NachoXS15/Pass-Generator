const copyButton = document.getElementById("btnCopy")
const copyBtn = document.getElementById("btnCopy")
const copyText = document.getElementById("passGen")

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

const copyPass = () => {
    const clipboard = navigator.clipboard;
    clipboard.writeText(copyText.innerText)
        .then(
            copyBtn.innerText = "Copied!",
            copyBtn.className = "btn btn-outline-light btn-lg mt-2"
        )
        .catch(function(error){
            console.error("no se copió", error)
        })
}