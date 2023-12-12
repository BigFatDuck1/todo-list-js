import './styles.css';

import { TaskHandler, Task } from './components/task.js';
import * as tasksDOM from './DOM/tasksDOM.js';
import {modalOpen, keyModalOpen, closeOnOutsideClick, collectFieldsData, tagSubmit} from './DOM/modal.js';

const Task1 = new Task("Task 1", "This is a task", "2021-10-10", "High");
const Task2 = new Task("Task 2", "This is task 2", "2023-9-12", "High");
const Task3 = new Task("Task 3", "This is task 3", "2021-10-10", "High");
const Task4 = new Task("Task 4", "This is task 4", "2021-10-10", "High");

const allTasks = new TaskHandler();

allTasks.addTask(Task1);
allTasks.addTask(Task2);
allTasks.addTask(Task3);
allTasks.addTask(Task4);

allTasks.removeTask(Task2);

//DOM
let div_of_all_tasks = tasksDOM.displayTasks(allTasks.tasks);
document.querySelector(".content").appendChild(div_of_all_tasks);

//Tasks
tasksDOM.deleteButtons(allTasks);
tasksDOM.checkButtons(allTasks);

//Modal
const add_task_button = document.querySelector(".add_button");
const modal_window = document.querySelector("#add_task_modal");

function modalFunctions() {
    modalOpen(add_task_button, modal_window);
    // keyModalOpen(modal_window);
    closeOnOutsideClick(modal_window);
}
modalFunctions();

//Modal submit
const submit_button = document.querySelector("#submit_button");

function submit() {
    let value_array = collectFieldsData(".modal_field");
    let new_task = new Task(...value_array);
    allTasks.addTask(new_task);
    console.log(allTasks);
}

submit_button.addEventListener(("click"), () => {
    submit();

})
document.addEventListener("keydown", (event) => {
    if (document.querySelector("#add_task_modal").open == true) {
        if (event.key == "Enter") {
            submit();
        }
    }
})

// Tags modal
const add_tag_button = document.querySelector("#add_tag_button");
const tags_modal = document.querySelector("#tags_modal");

function tagModalFunctions() {
    modalOpen(add_tag_button, tags_modal);
    closeOnOutsideClick(tags_modal);
}
tagModalFunctions();

tags_modal.addEventListener("keydown", ((event) => {
    if (tags_modal.open == true) {
        if (event.key == "Enter") {
            let tag_field = tagSubmit(document.querySelector("#tag_input"));
            console.log(tag_field);
        }
    }
}))