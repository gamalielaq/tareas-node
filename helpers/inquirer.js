const inquirer = require('inquirer');
require('colors');

const preguntas = {
    type: 'list',
    name: 'option',
    message: '¿Que desea Hacer?',
    choices: [
        {
            value: 1,
            name: `${'1.'.green} Crear Tarea`
        },
        {
            value: 2,
            name: `${'2.'.green} Listar Tareas`
        },
        {
            value: 3,
            name: `${'3.'.green} Listar Tareas Completadas`
        },
        {
            value: 4,
            name: `${'4.'.green} Listar Tareas Pendientes`
        },
        {
            value: 5,
            name: `${'5.'.green} Completar Tarea(s)`
        },
        {
            value: 6,
            name: `${'6.'.green} Borrar Tarea`
        },
        {
            value: 0,
            name: `${'0.'.green} Salir`
        },
    ]
};

const inquirerMenu = async () => {
    console.clear();
    console.log('-----------------------'.green);
    console.log('Seleccione una Opción'.green);
    console.log('----------------------\n'.green);

   const { option } =  await inquirer.prompt(preguntas);

   return option;
};

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green}`
        }
    ]
    await inquirer.prompt(question);
}


const leerImput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if(value.length === 0) {
                    return 'Por fabor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;
}

module.exports = {
    inquirerMenu, pausa, leerImput
}