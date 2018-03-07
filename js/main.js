////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////

/**
 * Implementa la función ejercicio01 para que devuelva true ó false en el caso de que el email introducido en el input sea o no alguno de los siguientes: yunior.developer@hotmail.com, miguel@mrbug.es ó imanol@mercadona.com.
 * @param {*} email 
 */
function ejercicio01(email) {


    if (email ===  'yunior.developer@hotmail.com' ||  email === 'miguel@mrbug.es' ||  email === 'imanol@mercadona') {
        return true
    } else {
        return false;
    }

    // Otra posible solución
    // return (email ===  'yunior.developer@hotmail.com' || email === 'miguel@mrbug.es' || email === 'imanol@mercadona');
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////



////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////

/**
 * Implementa la función ejercicio02 para que devuelva la siguiente frase dependiendo del correo introducido: 
 * "El correo [correo] tiene [24] caracteres y en mayúsculas se quedaría así [CORREO]. Además [no] contiene [ninguna/2] letras M"
 * @param {string} email 
 */
function ejercicio02(email) {
    var minus = email.toLowerCase();
    var numeroDeMs = 0;
    for (var indice = 0; indice < email.length; indice++) {
        if (minus[indice] === 'm') {
            numeroDeMs++;
        }
    }
    if (numeroDeMs === 0) {
        return "El correo " + email + " tiene " + email.length + " caracteres y " +
            "  en mayúsculas se quedaría así " + email.toUpperCase() + ". " +
            "Además no contiene ninguna letras M";
    } else {
        return "El correo " + email + " tiene " + email.length + " caracteres y " +
            "  en mayúsculas se quedaría así " + email.toUpperCase() + ". " +
            "Además contiene " + numeroDeMs + " letras M";
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////



////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////

/**
 * Implementa la función ejercicio03 para que devuelva la siguiente frase dependiendo del correo introducido: 
 * "El correo [correo] pertenece al dominio [gmail.com] y tiene [X] caracteres sin contar el dominio ni el @. Además, el correo [no] contiene [ningún/X] número[s]"
 * @param {string} email 
 */
function ejercicio03(email) {
    /*
    var posicionArroba = email.lastIndexOf('@');
    var dominio = email.substring(posicionArroba+1);
    var parteIzquierda = email.substring(0, posicionArroba );
    */

    // Otra forma, pero primero hay que validar si el correo está bien formado 
    var dominio = email.split('@')[1];
    var parteIzquierda = email.split('@')[0];
    var cuantosNumeros = cuentaNumeros(parteIzquierda);
    var result = "El correo " + email + " pertenece al dominio " + dominio + " y tiene " + parteIzquierda.length + " caracteres sin contar el dominio ni el @.\n";
    if (cuantosNumeros === 0) {
        result += "Además, el correo no contiene ningún número";
    } else if (cuantosNumeros === 1) {
        result += "Además, el correo contiene un único número";
    } else {
        result += "Además, el correo contiene " + cuantosNumeros + " números";
    }
    return result;
}

function cuentaNumeros(frase){
    if (!/\d/g.test(frase)) return 0
    else return frase.match(/\d/g).length;

    //Otra opcion MAS "FÁCIL"
    /*
    var cuenta = 0;
    for (let i = 0; i < array.length; i++) {
        const letra = frase[i];
        if ("0123456789".includes(letra)) cuenta++
    }
    return cuenta;
    */
}


////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////



////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////
/**
 * Implementa la función ejercicio04 para que devuelva la siguiente frase dependiendo de los datos de la persona introducida: 

 * "El usuario [nombre] [no] es mayor de edad" 

 * En caso de ser mayor de edad Añade al final de la frase lo siguiente : 

 * "Por lo tanto, le he creado un usuario con el correo[correo]"
 * @param {Object} user 
 */
function ejercicio04(user) {
    if (user.nombre.length <= 0 || !parseInt(user.edad) || user.correo.length <= 0){
        return "El usuario tiene algún campo inválido";
    }
    var result = "El usuario " + user.nombre + " ";
    if (parseInt(user.edad) >= 18){
        result += "es mayor de edad.";
        result += "\nPor lo tanto, le he creado el usuario con el correo " + user.correo;
    }else{
        result += "no es mayor de edad";
    }
    return result;
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////



////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////
function ejercicio05(user) {
    console.log(user);
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////



////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////
function ejercicio06(user) {
    return user;
}


////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////
function ejercicio06(user) {
    return user;
}
