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

function cuentaNumeros(frase) {
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
    if (user.nombre.length <= 0 ||  !parseInt(user.edad) || user.correo.length <= 0) {
        return "El usuario tiene algún campo inválido";
    }
    var result = "El usuario " + user.nombre + " ";
    if (parseInt(user.edad) >= 18) {
        result += "es mayor de edad.";
        result += "\nPor lo tanto, le he creado el usuario con el correo " + user.correo;
    } else {
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
/**
 * Implementa la función ejercicio05 para que devuelva alguna de las siguientes frases dependiendo de los datos de la persona introducida: 
 * "La persona introducida no es Yunior" 
 * "La persona introducida es Yunior" 
 * "La persona introducida pudiera ser Yunior. Ya que tiene [el mismo correo / la misma edad / el mismo nombre]"
 * @param {Object} user 
 */
function ejercicio05(user) {
    if (user.nombre.length <= 0 ||  !parseInt(user.edad) || user.correo.length <= 0) {
        return "El usuario tiene algún campo inválido";
    }
    if (user.nombre.toLowerCase() === 'yunior' && parseInt(user.edad) === 24 && user.correo.toLowerCase() === 'yunior@getinko.com') {
        return "La persona introducida es Yunior";
    } else if (user.nombre.toLowerCase() != 'yunior' && parseInt(user.edad) != 24 && user.correo.toLowerCase() != 'yunior@getinko.com') {
        return "La persona introducida no es Yunior";
    } else {
        if (user.nombre.toLowerCase() === 'yunior') {
            return "La persona introducida podría ser Yunior. Ya que tiene el mismo nombre";
        }
        if (parseInt(user.edad) === 24) {
            return "La persona introducida podría ser Yunior. Ya que tiene la misma edad";
        }
        if (user.correo.toLowerCase() === 'yunior@getinko.com') {
            return "La persona introducida podría ser Yunior. Ya que tiene el mismo correo";
        }
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////



////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////
function ejercicio06(user) {
    return validarUsuario(user);
}


var posiblesErrores = {};

posiblesErrores['invalid_name'] = { code: 'invalid_name', text: 'Nombre inválido, solo se admiten letras y espacios' };
posiblesErrores['invalid_name_empty'] = { code: 'invalid_name_empty', text: 'Nombre inválido, parece estar vacío' };

posiblesErrores['invalid_email_min_length'] = { code: 'invalid_email_min_length', text: 'Email inválido, debe contener mínimo 7 letras' };
posiblesErrores['invalid_email_max_length'] = { code: 'invalid_email_max_length', text: 'Email inválido, debe contener máximo 60 letras' };
posiblesErrores['invalid_email_format'] = { code: 'invalid_email_format', text: 'Email inválido, el formato parece ser incorrecto' };

posiblesErrores['invalid_age_min'] = { code: 'invalid_age_min', text: 'Edad incorrecta, debe ser mayor de 5 años.' };
posiblesErrores['invalid_age_max'] = { code: 'invalid_age_max', text: 'Edad incorrecta, debe ser menor de 150 años.' };
posiblesErrores['invalid_age_format'] = { code: 'invalid_age_format', text: 'Edad incorrecta, parece que no has introducido un número' };


/**
 * Esta función validará que un usuario es válido según estas reglas : 
 *  - Valida que su nombre solo contiene letras o espacios.
 *  - Valida que su email tiene mínimo 7 caracteres y máximo 60.
 *  - Valida que su email contiene un @ y contenido a la izquierda y a la derecha.
 *  - Valida que edad es superior a los 5 años y menor de 150. 
 * @param usuario. El usuario a validar. Ha de poseer age, name y email

 */
function validarUsuario(usuario) {
    var userErrors = [];
    userErrors = userErrors.concat(erroresEnNombre(usuario.nombre));
    userErrors = userErrors.concat(erroresEnEmail(usuario.correo));
    userErrors = userErrors.concat(erroresEnEdad(usuario.edad));
    return {
        valid: userErrors.length === 0,
        errors: userErrors
    }
}

/**
 * Valida que el nombre esta correcto
 * @param {string} nombre Nombre del usuario a validar
 */
function erroresEnNombre(nombre) {
    var copia = nombre.toLowerCase();
    var erroresEnNombre = [];
    if (copia.length === 0) {
        erroresEnNombre.push(posiblesErrores['invalid_name_empty']);
    }
    if ( /^[a-zA-Z\s]*$/.test(copia)  === false )  {
        erroresEnNombre.push(posiblesErrores['invalid_name']);
    }
    return erroresEnNombre;
}

/**
 * Valida que su email esta correcto.
 * @param {string} email Email del usuario a validar
 */
function erroresEnEmail(email) {
    var copia = email.toLowerCase();
    var erroresEnEmail = [];

    // if (copia.length === 0 || copia.indexOf('@') <= 1 etc etc ) {
    if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(copia)) {
        erroresEnEmail.push(posiblesErrores['invalid_email_format']);
    }
    if (copia.length < 7) {
        erroresEnEmail.push(posiblesErrores['invalid_email_min_length']);
    }
    else if (copia.length > 60) {
        erroresEnEmail.push(posiblesErrores['invalid_email_max_length']);
    }
    return erroresEnEmail;
}

/**
 * Valida que su edad es correcta
 * @param {number} edad Edad del usuario a validar
 */
function erroresEnEdad(edad) {
    var erroresEnEdad = [];
    if (!parseInt(edad)) {
        erroresEnEdad.push(posiblesErrores['invalid_age_format']);
        return erroresEnEdad;
    }
    if (parseInt(edad) <= 5) {
        erroresEnEdad.push(posiblesErrores['invalid_age_min']);
    }else if (parseInt(edad) > 150) {
        erroresEnEdad.push(posiblesErrores['invalid_age_max']);
    }
    return erroresEnEdad;
}


////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////
function ejercicio07(user) {
    return user;
}