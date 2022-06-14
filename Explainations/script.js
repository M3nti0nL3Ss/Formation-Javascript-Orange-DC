function demenderNombre() {
    let nombre1 = prompt("Entrez un nombre 1 :")

    nombre1 = parseInt(nombre1)
    nombre2 = parseInt(nombre2)

    window.document.write(soustraction(nombre1, nombre2))
}

const demendaerNombre1 = function(){
    let nombre1 = prompt("Entrez un nombre 1 :")
    let nombre2 = prompt("Entrez un nombre 2 :")

    nombre1 = parseInt(nombre1)
    nombre2 = parseInt(nombre2)

    window.document.write(nombre1 + nombre2)
}

const demendaerNombre2 = () => {
    let nombre1 = prompt("Entrez un nombre 1 :")
    let nombre2 = prompt("Entrez un nombre 2 :")

    nombre1 = parseInt(nombre1)
    nombre2 = parseInt(nombre2)

    window.document.write(nombre1 + nombre2)
}

//demenderNombre()

//demendaerNombre1()
//demendaerNombre2()


function afficherNombre(a){
    window.document.write(a);
}

const afficherNombre1 = function(a) {
    window.document.write(a + " afficherNombre1")
}

const afficherNombre2 = (a) => {
    window.document.write(a + " afficherNombre2");
}

//afficherNombre2("0000")


function addition(a,b){
    return a + b;
}

function soustraction(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function division(a,b){
    return a/b;
}

demenderNombre();

