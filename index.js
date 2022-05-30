alert('Ha llegado la hora de comenzar tu aventura pokemon');
let nombreMaestro = prompt('Pero antes, dinos tu nombre de maestro pokemon:');
let answer = prompt(`Tu nombre de maestro pokemon elegido para esta aventura es: ` + nombreMaestro + ' ¿Estás de acuerdo? s/n');
ValidarNombre(answer);
let opciones = prompt('Puedes escoger modo aventura y ganar experiencia capturando pokemones, o puedes escoger arena de batalla para luchar con grandes maestros de gimnasio pokemon. Escribe "1" para aventura o "2" para batalla.')
EscogerModoDeJuego(opciones);


function ValidarNombre() {
    if (answer == "s") {
        return alert (nombreMaestro + ' es momento de escoger que quieres hacer.');
    } else if(answer=="n"){
        nombreMaestro = prompt('Escribe tu nombre de maestro pokemon:');
        answer = prompt(`Tu nombre de maestro pokemon elegido para esta aventura es: ` + nombreMaestro + ' ¿Estás de acuerdo? s/n');
        ValidarNombre();
    }else{
        alert('Has escrito una opcion no valida.')
        ValidarNombre();
    }
        
    
}

function EscogerModoDeJuego() {
    if (opciones == "1") {
        return alert('Haz escogido modo de aventura.')
    } else if (opciones == "2") {
        return alert("Has escogido modo batalla.")
    } else {
        alert("No has escogido una opcion valida. Elige de nuevo.")
        opciones = prompt('Puedes escoger modo aventura y ganar experiencia capturando pokemones, o puedes escoger arena de batalla para luchar con grandes maestros de gimnasio pokemon. Escribe "1" para aventura o "2" para batalla.')
        EscogerModoDeJuego();
    }
}