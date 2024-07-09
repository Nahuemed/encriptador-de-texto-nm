//Capturo todos los elementos que van a interactuar con el usuario dentro de la pag//
const inputText = document.querySelector('textarea');
const botonEncriptador = document.getElementById('encrip-btn');
const botonDesencriptador = document.getElementById('desencrip-btn');
const textoDeRetorno = document.getElementById('texto-retorno');
const botonDeCopiar = document.getElementById('copiar-btn');
const imagenEncriptador = document.getElementById('imagen-encriptador');
const tituloDescartable = document.querySelector('.titulo-descartable');
const parrafoDescartable = document.querySelector('.parrafo-descartable');

//Nuevos valores para cada letra del abecedario
//Cada letra vale la letra que esta a dos letras de la misma
const valoresDeEncriptado = {
    "a" : "c",
    "b" : "d",
    "c" : "e",
    "d" : "f",
    "e" : "g",
    "f" : "h",
    "g" : "i",
    "h" : "j",
    "i" : "k",
    "j" : "l",
    "k" : "m",
    "l" : "n",
    "m" : "ñ",
    "n" : "o",
    "ñ" : "p",
    "o" : "q",
    "p" : "r",
    "q" : "s",
    "r" : "t",
    "s" : "u",
    "t" : "v",
    "u" : "w",
    "v" : "x",
    "w" : "y",
    "x" : "z",
    "y" : "a",
    "z" : "b",
    " " : " ",
    "," : ",",
    "." : "."
}

const keys = Object.keys(valoresDeEncriptado);
console.log(keys);

const values = Object.values(valoresDeEncriptado);
console.log(values);

//Función para encriptar con los nuevos valores
function encriptar(){
    //Paso el texto a minúscula
    const texto = inputText.value.toLowerCase();
    //Limpio el texto de caracteres
    const regex = texto.replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    //Mensaje de alerta ante la falta de texto
    if(!texto || texto === ''){
        alert('Debes ingresar un texto para encriptar o desencriptar');
    }else{
        //el string se convierte en un array y se imprime por consola para corroborar
    const strArray = [...regex];
    console.log(strArray);

    const txtEncriptado = strArray.map((element) => {
        return values[keys.indexOf(element)];
    });

    const textoFinalEncriptado = `${txtEncriptado.join('')}`; 
    console.log(textoFinalEncriptado);

    textoDeRetorno.innerText = textoFinalEncriptado;
    textoDeRetorno.classList.remove('hidden');
    botonDeCopiar.classList.remove('hidden');
    
    imagenEncriptador.classList.add('hidden');
    tituloDescartable.classList.add('hidden');
    parrafoDescartable.classList.add('hidden');

    inputText.value = '';
    }   
}

function desencriptar(){
    //Paso el texto a minúscula
    const texto = inputText.value.toLowerCase();
    //Limpio el texto de caracteres
    const regex = texto.replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    //Mensaje de alerta ante la falta de texto
    if(!texto || texto === ''){
        alert('Debes ingresar un texto para encriptar o desencriptar');
    }else{
    //el string se convierte en un array y se imprime por consola para corroborar
    const strArrayD = [...regex];
    console.log(strArrayD);

    const txtDesencriptado = strArrayD.map((element) => {
        return keys[values.indexOf(element)];
    })
    console.log(txtDesencriptado.join(''));

    const textoFinalDesencriptado = `${txtDesencriptado.join('')}`; 
    console.log(textoFinalDesencriptado);

    textoDeRetorno.innerText = textoFinalDesencriptado;
    textoDeRetorno.classList.remove('hidden');
    botonDeCopiar.classList.remove('hidden');
    
    imagenEncriptador.classList.add('hidden');
    tituloDescartable.classList.add('hidden');
    parrafoDescartable.classList.add('hidden');

    inputText.value = '';
    }
    
}



botonEncriptador.addEventListener("click", encriptar);
botonDesencriptador.addEventListener("click", desencriptar);
botonDeCopiar.addEventListener("click", (e) => {
    textoDeRetorno.select();
    document.execCommand('copy');
})