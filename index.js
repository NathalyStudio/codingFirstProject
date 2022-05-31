/* import { ValidarNombre } from "./modules/maestropokemon.js" */
/* import { ModoAventura, EvaluarPokemonEscogido, EscogerModoDeJuego } from "./modules/modoDeJuego.js"*/
/* import {pikachu, Squirtle, Charmander, Bulbasaur} from "./functionalModules/habilidadespokemon"*/


alert('Ha llegado la hora de comenzar tu aventura pokemon');
let nombreMaestro = prompt('Pero antes, dinos tu nombre de maestro pokemon:');
let answer = prompt(`Tu nombre de maestro pokemon elegido para esta aventura es: ` + nombreMaestro + ' ¿Estás de acuerdo? s/n');
ValidarNombre();
let opciones = prompt(nombreMaestro + ' puedes escoger modo aventura y ganar experiencia capturando pokemones, o puedes escoger arena de batalla para luchar con grandes maestros de gimnasio pokemon. Escribe "1" para aventura o "2" para batalla.');
EscogerModoDeJuego();
let decision = prompt('Has escogido modo aventura, ¿Seguro que deseas continuar? s/n');
if (decision == "s" || decision == "S") {
    alert("¡Estás iniciando la aventura! Y lo primero es escoger tu pokemón inicial.")
} else if (decision == "n" || decision == "N") {
    EscogerModoDeJuego();
} else {
    prompt("No has escogido una opcion valida. Vuelve a escoger")
    EscogerModoDeJuego();
}


/* ZONA DE FUNCIONES */
function ValidarNombre() {
    if (answer === "s" || decision === "S") {
        return alert(nombreMaestro + ' es momento de escoger que quieres hacer.');
    } else if (answer === "n" || decision === "N") {
        nombreMaestro = prompt('Escribe tu nombre de maestro pokemon:');
        answer = prompt(`Tu nombre de maestro pokemon elegido para esta aventura es: ` + nombreMaestro + ' ¿Estás de acuerdo? s/n');
        return ValidarNombre();
    } else {
        alert('Has escrito una opcion no valida.')
        ValidarNombre();
    }
}

function EscogerModoDeJuego() {
    if (opciones === "1") {
        alert('Haz escogido modo de aventura.')
        ModoAventura();
    } else if (opciones === "2") {
        return alert("Has escogido modo batalla.")
    } else {
        alert("No has escogido una opcion valida. Elige de nuevo.")
        opciones = prompt('Puedes escoger modo aventura y ganar experiencia capturando pokemones, o puedes escoger arena de batalla para luchar con grandes maestros de gimnasio pokemon. Escribe "1" para aventura o "2" para batalla.')
        EscogerModoDeJuego();
    }
}

function ModoAventura() {
    let initialPokemon = prompt("Tienes tres opciones a escoger: 1. Bulbasaur, 2. Charmander, 3. Squirtle. Escoge el número que corresponda al pokemón que deseas.")
    EvaluarPokemonEscogido();

}