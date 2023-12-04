import './styles.css';

import { TaskHandler, Task } from './components/task.js';
import * as tasksPanel from './DOM/tasksPanel.js';

const Task1 = new Task("Task 1", "This is a task", "2021-10-10", "High");
const Task2 = new Task("Task 2", "This is task 2", "2023-9-12", "High");
const Task3 = new Task("Task 3", "This is task 3", "2021-10-10", "High");
const Task4 = new Task("Task 4", "This is task 4", "2021-10-10", "High");

const allTasks = new TaskHandler();

allTasks.addTask(Task1);
allTasks.addTask(Task2);
allTasks.addTask(Task3);
allTasks.addTask(Task4);

console.log(allTasks);

allTasks.removeTask(Task2);



console.log(allTasks);

//DOM
let task_list = tasksPanel.displayTasks(allTasks.tasks);
console.log(task_list);
task_list.forEach((task) => {
    document.querySelector(".content").appendChild(task);
})
// document.querySelector(".content").appendChild(task_list);