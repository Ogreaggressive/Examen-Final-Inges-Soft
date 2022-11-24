
let palabras = new Set()

function anadirString(texto)
{
    palabras.add(texto)
}

function returnSet()
{
    return palabras
}



export {anadirString, returnSet};