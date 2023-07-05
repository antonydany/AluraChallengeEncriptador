// Mapeo de letras encriptadas y desencriptadas
var mapaEncriptacion = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

function encriptar() {
  var value = document.getElementById("desencriptar-texto");
  var input = value.value;
  var output = "";
  for (var i = 0; i < input.length; i++) {
    var letra = input.charAt(i);
    //comprueba si la letra es una propiedad en el mapa
    if (mapaEncriptacion.hasOwnProperty(letra)) {
      output += mapaEncriptacion[letra];
    } else {
      output += letra;
    }
  }
  console.log(output);
  document.getElementById("mensaje-encriptado").innerHTML = output;
}

function desencriptar() {
  var value = document.getElementById("desencriptar-texto");
  var input = value.value;
  var output = input;
  //compruebo si la letra está en el mapa
  for (var key in mapaEncriptacion) {
    if (mapaEncriptacion.hasOwnProperty(key)) {
      //se buscan TODAS las coincidencias 
      var expresionRegular = new RegExp(mapaEncriptacion[key], "g");
      output = output.replace(expresionRegular, key);
    }
  }
  console.log(output);
  //escribo el resultado en id inner
  document.getElementById("mensaje-encriptado").innerHTML = output;
}


