const tarea = require('./tarea');

class Tareas{
    _listado= {
        'abs': 123
    }

    get listadoArr(){
        const listado = [];
                //ids
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado={}
    }

    crearTarea(desc ='chipilin'){
        const tarea = new Tarea(desc);
        this._listado[tarea.id]= tarea;
    }
}

module.exports = Tareas;