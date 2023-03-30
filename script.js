


var textoArea = document.getElementById("texto");

var botaoCodificar = document.getElementById("cod");
botaoCodificar.onclick = criptografar;

var botaoDescriptografar = document.getElementById("dec");
botaoDescriptografar.onclick = descriptografar;


function criptografar(){
	var inpute = document.getElementById("inpute__entrada").value.toLowerCase();
 

  var resultCripto = inpute.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  textoArea.innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var inpute = document.getElementById("inpute__entrada").value.toLowerCase();

    var resultDescripto = inpute.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    textoArea.innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}