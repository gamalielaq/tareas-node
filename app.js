require('colors');

const { inquirerMenu, pausa, leerImput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async () => {
    console.log('Hola Mundo');
    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();
        // const tarea = new Tarea('Comprar comida');
        switch (opt) {
            case 1:
                //crear option
                const desc = await leerImput('Descripción');
                tareas.crearTarea(desc);
                break;
            case 2:
                console.log(tareas._listado);
                break;
            default:
                break;
        };
        
        await pausa();

    } while (opt !== 0);

}

main();