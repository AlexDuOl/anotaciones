//***** Obteniendo valores de array y reemplazandolos *****//

const xs = [1,2,3,4,5]

//console.log(xs)
const z = {
    r1: {
        valorInicial: 2,
        valorReemplazo: 7
    },
    r2: {
        valorInicial: 5,
        valorReemplazo: 8
    },
    r3: {
        valorInicial: 4,
        valorReemplazo: 9
    }
}

let tmp = []
let idxs = []
let reemplazos = []

for (let key in z) {
    if (z.hasOwnProperty(key)) {
        console.log(z[key]) // r1, r2, r3 <- JSON Object

        // Obtener el indice menor
        idxs = idxs.concat(xs.indexOf(z[key]['valorInicial']))

        // Obtener el arreglo contiguo de datos = reemplazos
        reemplazos = reemplazos.concat(z[key]['valorReemplazo'])
    }
}

// Obtener el indice mayor y menor
const minimo = Math.min(...idxs)
const maximo = Math.max(...idxs)

// Aplicar concat
const head = xs.slice(0, minimo)
const insert = reemplazos
const tail = xs.slice(maximo+1)

const finales = [].concat(head, insert, tail)

const ys = [1,7,8,9,5]
}