import * as variables from './variables.js'

export function ValidarNombre() {
    if (variables.answer == "s") {
        return alert(variables.nombreMaestro + ' es momento de escoger que quieres hacer.');
    } else {
        variables.nombreMaestro = prompt('Escribe tu nombre de maestro pokemon:');
        variables.answer = prompt(`Tu nombre de maestro pokemon elegido para esta aventura es: ` + variables.nombreMaestro + ' ¿Estás de acuerdo? s/n');
        ValidarNombre();
    }
}