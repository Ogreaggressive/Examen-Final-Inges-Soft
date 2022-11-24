
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
    let lista = {}
    const splitArr = frase.split(" "); 
    for (let i=0; i<splitArr.length; i++) {

        if (!lista[splitArr[i]]) {
            lista[splitArr[i]] = [];
            lista[splitArr[i]] = 0
        }
        lista[splitArr[i]] = 1 + parseInt(lista[splitArr[i]])
    }
    return lista
}



export {anadirString, returnSet, getFrase};