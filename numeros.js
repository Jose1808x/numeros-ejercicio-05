// - Una variable que contenga tu altura en centímetros (entero)

let alturaEnt = 168;
console.log("Mi altura es de: " + alturaEnt + " cm.")

// - Una variable que contenga tu altura en metros (número de coma flotante)

let alturaFlot = 1.68;
console.log("Mi altura es de: " + alturaFlot + " cm.")

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let pesoFlot = 92.4
console.log("Mi peso es de: " + pesoFlot + " kg.")

// - Una variable que contenga tu altura en metros redondeada hacia arriba

let alturaRedon = alturaFlot.toFixed(1);
console.log("Mi altura redondeada es de: " + parseFloat(alturaRedon));

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let pesoRedon = pesoFlot.toFixed(0);
console.log("Mi peso redondeado es de: " + parseInt(pesoRedon));

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let maximoValor = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
console.log(maximoValor);