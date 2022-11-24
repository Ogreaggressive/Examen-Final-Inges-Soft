
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
    const splitArr = frase.split(" "); 
    for(let i=0; i<splitArr.length; i++)
    {
        palabras.add(splitArr[i])
    }
}



export {anadirString, returnSet, getFrase};