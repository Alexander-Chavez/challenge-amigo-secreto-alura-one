// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigo = [];
let sorteo = false;

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    if (nombre === ""){
        alert('Por favor, inserte un nombre');
        return;
    }
    amigo.push(nombre);
    actualizarLista();
    input.value = '';
}

function actualizarLista(){
    let listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = "";
    for (let i=0; i<amigo.length; i++){
        let li = document.createElement('li');
        li.textContent = amigo[i];
        listaElemento.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert('No hay amigos para realizar el sorteo');
        return;
    }
    if(sorteo){
        amigo = [];
        sorteo = false;
        document.getElementById('listaAmigos').innerHTML = "";
        document.getElementById('resultado').innerHTML = "";
        alert("Reinicio del juego");
        return;
    }
    let nombreAleatorio = Math.floor(Math.random() * amigo.length);
    let amigoSorteado = amigo[nombreAleatorio];

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    sorteo = true;
}

