const textArea = document.querySelector(".text_area");
const mensagem = document.querySelector(".text_resultado");

function btnEncrypt() {
    const textoEncriptado = encrypt(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encrypt(stringEncrypt) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrypt.includes(matrizCodigo[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncrypt;
}

function btnDecrypt() {
    const textoDesencriptado = decrypt(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function decrypt(stringDecrypt) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase(); 

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDecrypt.includes(matrizCodigo[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDecrypt;
}

function copyText() {
    const textResultado = document.querySelector(".text_resultado");
    textResultado.select();
    document.execCommand("copy");
    textResultado.value = "";
}