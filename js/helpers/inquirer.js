const { green } = require('colors');
const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: `$('1', green) Crear tarea`
            },
            {
                value: '2',
                name: `$('2', green) Listar tarea`
            },
            {
                value: '3',
                name: `$('3', green) Listar tareas completas`
            },
            {
                value: '4',
                name: `$('4', green) Listar tareas pendientes`
            },
            {
                value: '5',
                name: `$('5', green) Completar tarea(s)`
            },
            {
                value: '6',
                name: `$('6', green) Borrar tarea`
            },
            {
                value: '0',
                name: `$('0', green) Exit`
            },
        ]
    }
];

const menu = async () => {
    console.clear();
    console.log('=====================================', green);
    console.log('         Seleciona una Opcion', green);
    console.log('=====================================', green);

    const { opcion } = await inquirer.prompt(preguntas);
    return (opcion);
}

const leerInput = async (menssage) => {
    const question = [
        type: 'input',
        name: 'desc',
        menssage,
        validate(value){
            if(value.length === 0){
            return 'Ingresa un numero papa';
        }
            return true;
}
    ]
const { desc } = await inquirer.prompt(question);
return desc;
}

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            menssage: `prosione $('enter', green) pra continuar`
        }
    ];
    console.log('\n')
}

module.exports = {
    menu,
    leerInput
}