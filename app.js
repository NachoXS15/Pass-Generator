const copyButton = document.getElementById("btnCopy")

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
}

const copyPass = () => {
    const copyText = document.getElementById("passGen")
    const clipboard = navigator.clipboard;
    clipboard.writeText(copyText.innerText)
        .then(function() {
            alert("copiado")
        })
        .catch(function(error){
            console.error("no se copió", error)
        })
}