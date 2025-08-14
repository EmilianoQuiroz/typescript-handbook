// las funciones en Typescrip son lo mismo que en JavaScript, solo que en este caso tenemos que especificar el tipo de dato que va a retornar

// Ejemplo

function sumar (numero1:number, numero2:number): number {
    return numero1 + numero2;
}

let result = sumar(5, 10);

// Funciones flecha
// Recibir un string como parametro y devolverlo en mayusculas
const convertirAMayusculas = (texto:string):string => {
    return texto.toUpperCase();
}

// Funciones que no devuelven "nada" (void)
const mostrarMensaje = (mensaje:string):void => {
    console.log(mensaje);
}

mostrarMensaje("Hola, TypeScript!");