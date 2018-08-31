// Requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(`Ha ocurrido un error: ${ err }`);
        });
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`Archivo creado ${archivo}`);
        }).catch((err) => {
            console.log(`Ha habido un error: ${err}`);
        });
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log();