// Importaciones de funciones
const { addTask, listTasks, removeTask, updateTask } = require("./tasks");

// Agregar algunas tareas
addTask("Estudiar Node.js");
addTask("Practicar JavaScript");
addTask("Hacer ejercicio");

// Listar tareas
listTasks();

// Eliminar una tarea
removeTask(1);

// Listar nuevamente para verificar
listTasks();

updateTask(1, "Jugar pelota");

listTasks();
