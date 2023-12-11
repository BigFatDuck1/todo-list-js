
class TaskHandler { //An array containing all of the tasks and associated methods to handle the "library"
    constructor() {
        this.tasks = []; //the array itself
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
        let results_array = this.tasks.find((element) => {
            return element.name == name;
        })

        return results_array;
    }

    removeTaskById(id) {
        this.tasks.splice(id, 1);
    }

    removeTask(task) {
        //Otherwise, splice would just treat undefined as  0 and remove the first task from array
        if (task == undefined) {
            return "Task not found";
        }
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}

class Task { //An individual task
    constructor(name, description, date, priority) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.tags = [];
        this.complete = false;
    }

    setCategory(tag) {
        this.tags.push(tag);
    }

    setCompleted() {
        this.complete = true;
    }

    setIncomplete() {
        this.complete = false;
    }
}

export { TaskHandler, Task }