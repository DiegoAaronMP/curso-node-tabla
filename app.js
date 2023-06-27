const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')
console.clear();



// Comprarar resultados con node app.js --base 5
// console.log(process.argv);
// console.log(argv);


// console.log('base: yargs', argv.base);
// con yarg tambien podemos usar --help en la consola de comandos

// Tarea de listar
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow.underline, 'creado'.bgGreen))
    .catch(err => console.log(colors.bgRed(err)));


// Descomentar
// const base = 5;

// Esto desde aqui 
// en consola node app.js --base=9 (puede ser cualquier numero)
// console.log(process.argv);
// Vamos a ponerle un valor por defecto para evitar undefined
// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// Hasta aqui no es recomendable

//npm init
// en la parte de scripts del json hicimos un script de nombre base3
// para ejecutarlo seria npm run base3

// instalar dependencia 
// npm i colors

// instalar solo para desarrollo
// npm install nodemon --save-dev

// para desinstalar es uninstall

// Si queremos una version especifica seria
// npm i colors@1.0.0

// Para actualizar es
// npm update

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));
