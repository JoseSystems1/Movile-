// Variables y constantes
const tasks = [];
const MAX_TASKS = 5; // Constante

// Función para agregar una tarea
function addTask(task) {
    if (tasks.length >= MAX_TASKS) {
        console.log("No puedes agregar más tareas. Límite alcanzado.");
        return;
    }

    const trimmedTask = task.trim();
    if (trimmedTask === "") {
        console.log("No puedes agregar una tarea vacía.");
        return;
    }

    tasks.push(trimmedTask);
    console.log(`Tarea "${trimmedTask}" agregada.`);
}

// Función para listar todas las tareas
function listTasks() {
    console.log("Lista de tareas:");
    if (tasks.length === 0) {
        console.log("No hay tareas.");
    } else {
        let i = 1;
        for (const task of tasks) {
            console.log(`${i}. ${task}`);
            i++;
        }
    }
}

// Función para eliminar una tarea por su índice
function removeTask(index) {
    if (index < 0) {
        console.log("El índice no puede ser negativo.");
        return;
    }
    if (index >= tasks.length) {
        console.log(`El índice es demasiado grande.  Debe ser menor que ${tasks.length}.`);
        return;
    }
    const removed = tasks.splice(index, 1);
    console.log(`Tarea "${removed[0]}" eliminada.`);
}

// Función para actualizar una tarea
function updateTask(index, newTask) {
    if (index < 0) {
        console.log("El índice no puede ser negativo.");
        return;
    }
    if (index >= tasks.length) {
        console.log(`El índice es demasiado grande.  Debe ser menor que ${tasks.length}.`);
        return;
    }

    const trimmedNewTask = newTask.trim();
    if (trimmedNewTask === "") {
        console.log("La nueva tarea no puede estar vacía.");
        return;
    }

    tasks[index] = trimmedNewTask;  // Actualiza la tarea
    console.log(`Tarea en el índice ${index} actualizada a "${trimmedNewTask}".`);
}

// Exportaciones de funciones
module.exports = { addTask, listTasks, removeTask, updateTask };