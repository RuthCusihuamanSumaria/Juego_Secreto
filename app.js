/*let titulo = document.querySelector('h1');
titulo.innerHTML="....Juego del numero secreto....";

let parrafo=document.querySelector('p');
parrafo.innerHTML="Indica un numero del 1 al 10 ";
*/ 
//let numeroSecreto=generarNumeroSecreto();
//let intentos =1;
let numeroSecreto=0;
let intentos=0; 
let listaNumerosSorteados=[] ;//almacenar los numeros si ya fueron sorteados
let numeroMaximo=10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value) ; //obtengo el valor
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario); 
    console.log(numeroDeUsuario === numeroSecreto)
    */
   console.log(intentos);
   if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    //el usuario no acerto.
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero es menor');

    }else{
        asignarTextoElemento('p','El numero es mayor');
    }
    intentos++;
    limpiarCaja();
   }
   return;

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value ='';
    //valorCaja.value ='';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista
    
    console.log("nuevo numero generado:" + numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya se sortearin todos los elementos
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles :( ');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            //guaedar en una lista, lo numeros que ya se genero.
            listaNumerosSorteados.push(numeroGenerado); 
            return numeroGenerado;
        }

    }   

}

function condicionessIniciales(){
    asignarTextoElemento('h1' , '¡Juego del nùmero secreto !');
    asignarTextoElemento('p' , `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionessIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}

//asignarTextoElemento('h1' , '¡Juego del nùmero secreto !');
//asignarTextoElemento('p' , 'Indica un numero del 1 al 10');
condicionessIniciales();