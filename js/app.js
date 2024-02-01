console.log('chipilin');

require('colors');
const {menu, pausa,leerInput} = require('./helpers/inquirer');
const {guardarArchivo} = require('./helpers/guardarinfo');
const Tareas = require('./models/tareas');

const main= async() =>{
    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await menu();
        switch(opt){
            case '1';
                const desc = await leerInput("Descripcion");
                tareas.crearTarea(desc);
            break;
        }
        guardarArchivo(tareas.listadoArr);
        await pausa();
    } while (opt !== 0);
}

main();