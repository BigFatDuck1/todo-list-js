
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

    editTask(task, array_of_edited_fields) {
        //for task parameter, pass in allTasks.findTask(task_name)
        //array_of_edited_fields is an array of strings
        //e.g. ["Task 6", "description", "2001-01-01", "Urgent and Important", ["tag1", "tag2"]]
        [task.name, task.description, task.date, task.priority, task.tags] = array_of_edited_fields;
        return task;
    }
}

class Task { //An individual task
    constructor(name, description, date, priority, tags) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.tags = tags; //Provide an array
        this.complete = false;
    }

    addTags(tag) {
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