
class TaskHandler {
    constructor() {
        this.tasks = [];
    }

    returnTaskArray() {
        return this.tasks;
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

    removeTaskById(id) {
        this.tasks.splice(id, 1);
    }

    removeTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}

class Task {
    constructor(name, description, date, priority) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.tags = [];
    }

    setCategory(tag) {
        this.tags.push(tag);
    }
}

export { TaskHandler, Task }