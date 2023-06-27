const fs = require('fs');
const colors = require('colors');

//  Base por defecto 5
// const crearArchivo = (base = 5) => {


//     console.log('===============================');
//     console.log('          Tabla del: ', base);
//     console.log('===============================');

//     let salida = '';

//     for (let index = 1; index <= 10; index++) {
//         salida += `${base} x ${index} = ${base * index}\n`;
//     }

//     console.log(salida);

//     // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     //     // Si hay error
//     //     if (err) throw err;
//     //     // Sino
//     //     console.log('Archivo creado');
//     // })

//     // Aqui tendriamos que usar try y catch para el error
//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     console.log('Archivo creado');
// }

// Tarea. Convertir en promesa
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    // Intenta hacer todo esto
    try {
        
        let salida = '';
        let consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            // salida += `${base} x ${index} = ${base * index}\n`;

            salida += `${base} x ${index} = ${base * index}\n`;
            // Arreglar el error de los colores
            consola += `${base} ${'x'.cyan} ${index} ${'='.cyan} ${colors.blue(base * index)}\n`;
        }
        
        // si listar es true
        if(listar){
            console.log('==============================='.magenta);
            console.log('          Tabla del: '.cyan, colors.cyan.underline(base));
            console.log('==============================='.magenta);
            console.log(consola);
        }
            

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

}

// Exportamos un objeto con la funcion crearArchivo
module.exports = {
    crearArchivo: crearArchivo
    // Prodriamos simplificarlo asi
    // crearArchivo
}






