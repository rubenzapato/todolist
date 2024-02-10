export const taskDone = (id, tasks) => {
    const newTasks = tasks.map(item => {
        // Creamos una copia profunda de la tarea actual
        const task = { ...item };
        // Comparamos los IDs como cadenas para asegurarnos de que sean del mismo tipo
        if (String(id) === String(item.id)) {
            // Invertimos el estado de 'done'
            task.done = !task.done;
        }
        return task;
    });
    return newTasks;
};