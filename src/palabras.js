
let palabras = new Set()

function anadirString(texto)
{
    palabras.add(texto)
}

function returnSet()
{
    return palabras
}

function getFrase(frase)
{
    //let regex = "/\b(\w+)\b/g"
    const splitArr = frase.split(" "); 
    return splitArr
}



export {anadirString, returnSet, getFrase};