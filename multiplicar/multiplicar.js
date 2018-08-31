// Requireds
const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let tabla = '';

        if (!Number(base)) {
            reject('La base debe ser un número');
        }

        if (limite <= 0) {
            reject('El límite debe ser mayor a 0');
        }

        if (!Number(limite)) {
            reject('El limite debe ser un número');
        }


        tabla += '-------------------\n'.green;
        tabla += `Tabla del ${ base }\n`.green;
        tabla += '-------------------\n'.green;

        for (let i = 1; i <= limite; i++) {
            tabla += `${ base } * ${ i } = ${ base * i }\n`;
        }
        resolve(tabla);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`"${base}" no es un número`);
        }

        if (limite <= 0) {
            reject('El límite debe ser mayor a 0');
        }

        if (!Number(limite)) {
            reject(`"${limite}" no es un número`);
        }



        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`.yellow);
            }

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}