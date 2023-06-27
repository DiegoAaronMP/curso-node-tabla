// Esto no deberia estar en app.js
// importamos yargs
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    // obligar a mandar el argumento base
                    demandOption: true,
                    describe: 'Es la base de la tabla de mutliplicar'
                })
                // Tarea option listar
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                // Tarea tabla hasta el X
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta que numero se va a hacer la tabla'
                })
                // Para hacer validaciones
                .check((argv, options) => {
                    // console.log('yargs', argv)
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    } else if (isNaN(argv.h)){
                        throw 'El tope tiene que ser un numero'
                    }
                    // si no hay error retorna true
                    return true;
                })
                .argv; 
// Exportamos
module.exports = argv;