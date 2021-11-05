const fs = require('fs');
let colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try { 

    let salida =  ''; 

    for(let i=0; i<hasta; i++) {
        resultado = base * (i+1);
        salida += `${base} x ${(i+1)} = ${resultado}\n`;
       }

    if (listar) {
        console.log('================='.green);
        console.log('Tabla del', colors.red(base));
        console.log('=================='.green);
        console.log(salida);

       }
       
    
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    return `tabla-${base}.txt`;
    
    } catch (err)  {
        
        throw (err);

    }

            
    };


module.exports = {
        crearArchivo
    }







