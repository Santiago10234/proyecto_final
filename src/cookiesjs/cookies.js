/**
 * Función para crear una cookie con un nombre, valor y un tiempo de expiración opcional en días.
 *
 * parametro {string} nombre - El nombre de la cookie.
 * parametro {string} valor - El valor a almacenar en la cookie.
 * parametro {number} [dias] - Opcional. Número de días hasta que la cookie expire. Si no se especifica, la cookie será de sesión.
 */
const crearCookie = (nombre, valor, dias) => {
    // Inicializamos la variable expira para almacenar la fecha de expiración en caso de que se especifique.
    let expira = "";

    // Si se define un número de días, calculamos la fecha de expiración en función de esos días.
    if (dias) {
        let date = new Date();
        // Añadimos los días especificados al tiempo actual en milisegundos.
        date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));
        // Convertimos la fecha a UTC y formateamos para añadirla a la cookie.
        expira = "; expires=" + date.toUTCString();
    }

    // Creamos la cookie con nombre, valor y fecha de expiración, y establecemos el path en "/".
    document.cookie = nombre + "=" + (valor || "") + expira + "; path=/";
}

export { crearCookie };

/**
 * Función para obtener el valor de una cookie almacenada por su nombre.
 *
 * parametro {string} nombre - El nombre de la cookie a obtener.
 * returns {string|null} - Devuelve el valor de la cookie si se encuentra, o null si no existe.
 */
const traerCookie = (nombre) => {
    // Creamos una variable para representar el nombre de la cookie seguido por el signo "=".
    let nameEQ = nombre + "=";
    // Obtenemos todas las cookies en un array dividiendo por el carácter ";".
    let cookies = document.cookie.split(';');

    // Recorremos cada elemento en el array de cookies.
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        // Eliminamos cualquier espacio inicial en la cadena.
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);

        // Si la cookie comienza con el nombre buscado, devolvemos su valor.
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    // Si no se encuentra la cookie, devolvemos null.
    return null;
}

export { traerCookie };
