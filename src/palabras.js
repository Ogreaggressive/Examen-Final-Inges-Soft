
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

        let word =splitArr[i].toLowerCase()
        if (!lista[word]) {
            lista[word] = [];
            lista[word] = 0
        }
        lista[word] = 1 + parseInt(lista[word])
    }
    return lista
}



export {anadirString, returnSet, getFrase};