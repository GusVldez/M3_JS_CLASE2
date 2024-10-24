// VAR , LET ,  CONST

//
let nombre = "Carlos"

nombre="Gustavo Valdez"

// const se va a ocupar cuando l valor d la variabl no cambie en tiempo
// ejeucion del programa
const fecha="16/10/84"
console.log(nombre)
const frutas=" Uva, Melon, Sandia, Mango"


// var direccion = "durazno verde"
// var direccion = "Durazno CAFE"
console.log(typeof nombre)
console.log(typeof frutas)

const suma = 4 + 4

/// operacion mantematicas

console.log(suma)

const suma2 = 10 % 3

/// cambiando a operadora especial

console.log(suma)

// venta de ticket

let ticket = 10

console.log(ticket, 'antes ')

ticket = ticket + 1
console.log(ticket, "despues ")

// volver a incrementar
ticket++
console.log(ticket, 'antes 2 sumado 1 mas')

ticket--
console.log(ticket, "despues restando el 1")

/// operadores de generacion 

console.log("---------- op igual ---------")
//// dos ==== igualdad debil => error 
console.log(1 == "1","debil")
//// igualdad estricta es mejor usarla, esta por las nuevas reglas

console.log(1 === "1", "estricta")
/// desigualdad debil
/// desigualdad fuerte

console.log("Perro" !== "gato")
// cuando en un captura en un pagina , un usuario no captura una dato importante 
/// y ese dato necesitamos exigir que los capture
const username=""

console.log(username !== "")

/// comentarios de valores importantes
/// logica de programacion n paginas
/// >  maayor que 
console.log(4 > 6, "4 es mayor que 6")
console.log(5 < 7, "5 es mayor que 7")

/// de de condiciones para programacion 

// AND  SE USA CON &&
// OR   SE USA CON ||

const saldo = 10 || "no tiene suficiente saldo n su tarjeta"
console.log(Boolean(10), "CERO")

/// EL VALOR NOT 

const israin =true

console.log(!israin, "esta lloviendo")

// CASO DE USO con el IF , else ...

if (israin) {
    // si se cumple la condicion
    console.log("esta lloviendo se cumplio")
} else  { 
    //sino se cumple la condicion
    console.log ("no llueve porque esta ** soleado")
}


 