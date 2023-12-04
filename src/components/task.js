
class TaskHandler {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    taskSize() {
        return this.tasks.length;
    }

    findTask(name) {
        let results_array = this.tasks.filter((element) => {
            return element.name == name;
        })
    }

    removeTask(id) {
        this.tasks.splice(id, 1);
    }
}

class Task {
    constructor(name, description, date, priority) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.id;
    }

    setId(id) {
        this.id = id; //Set this when creating a new Task
    }
}

export { TaskHandler, Task }