function encriptar (){
    var texto = document.querySelector("#input-texto").value;

    var textoParaEncriptar = "";
                           //hola hoberlai
        for (var i = 0; i < texto.length; i++) {
         
            if (texto[i] == "a") {
                textoParaEncriptar = textoParaEncriptar + "ai";
            } else if (texto[i] == "e") {
                textoParaEncriptar = textoParaEncriptar + "enter";
            } else if (texto[i] == "i") {
                textoParaEncriptar = textoParaEncriptar + "imes";
            } else if (texto[i] == "o") {
                textoParaEncriptar = textoParaEncriptar + "ober";
            } else if (texto[i] == "u") {
                textoParaEncriptar = textoParaEncriptar + "ufat";
            }else {
                textoParaEncriptar = textoParaEncriptar + texto[i];
            }
            document.querySelector("#msg").value = textoParaEncriptar;
        }    
    
    document.querySelector("#input-texto").value = "";
}

function desencriptar (){
    var texto = document.querySelector("#input-texto").value;

    var textoParaEncriptar = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.querySelector("#msg").value = textoParaEncriptar;

    document.querySelector("#input-texto").value = "";

}

function copy(){
    var copyText = document.querySelector("#msg");
    copyText.select();    
     document.execCommand("Copy");
      document.querySelector("#msg").value=" ";

}


var texto = document.querySelector("#input-texto");
texto.focus();

var button1 = document.getElementById("btn-encriptar");
button1.onclick = encriptar;

var button2 = document.getElementById("btn-desencriptar");
button2.onclick = desencriptar;




