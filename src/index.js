import './styles.css';

import { TaskHandler, Task } from './components/task.js';
import * as tasksDOM from './DOM/tasksDOM.js';
import {modalOpen, keyModalOpen, closeOnOutsideClick, collectFieldsData, tagSubmit} from './DOM/modal.js';
import { Tags, renderTag, filterTasksByTag } from './components/tags.js';
import { priorityFilter } from './components/priority.js';

// const Task1 = new Task("Task 1", "This is task 1", "2021-10-10", "Urgent and Important", ["Project", "Work"]);
// const Task2 = new Task("Task 2", "This is task 2", "2023-09-12", "Urgent and Important", ["Project", "School"]);
// const Task3 = new Task("Task 3", "This is task 3", "2022-10-01", "Urgent but Not Important", ["Work", "School"]);
// const Task4 = new Task("Task 4", "This is task 4", "2024-12-10", "Not Urgent, Not Important", ["Project"]);
// const Task5 = new Task("Task 5", "This is task 5", "2025-07-08", "Not Urgent, but Important", ["Work", "School"]);

// allTasks.addTask(Task1);
// allTasks.addTask(Task2);
// allTasks.addTask(Task3);
// allTasks.addTask(Task4);
// allTasks.addTask(Task5);

const allTasks = new TaskHandler();

const allTags = new Tags();
allTags.addTag("Project");
allTags.addTag("Work");
allTags.addTag("School");



//On startup
let tasks_array = [];
let tags_array = [];
function startUpLocalStorage() {
    if (localStorage.tasks == undefined) {
        tags_array = ["Project", "Work", "School"]; //? Some default tags
        return "Local storage cleared";
    }
    else {
        tasks_array = JSON.parse(localStorage.tasks);
        tags_array = JSON.parse(localStorage.tags);
    }
}
startUpLocalStorage();
//Returns an array of values from an object so it can be used to create a new Task class
function arrayFromObject(object) {
    let array = [];
    for (let key in object) {
        array.push(object[key]);
    }

    return array;
}

//Generate new task class from each task object
let task_class_array = [];
tasks_array.forEach((task) => {
    task_class_array.push(new Task(...arrayFromObject(task)));
})

tags_array.forEach((tag) => {
   allTags.addTag(tag);
})

//Reassign allTasks and allTags to the saved tasks and tags
allTasks.tasks = task_class_array;

//Tags
allTags.tags.forEach((tag) => {
    let new_tag = renderTag(tag, allTags);
    document.querySelector(".tags").appendChild(new_tag);
})

filterTasksByTag(".tag_link", allTasks.tasks);

//DOM
let div_of_all_tasks = tasksDOM.displayTasks(allTasks.tasks);
document.querySelector(".content").appendChild(div_of_all_tasks);

//Tasks
tasksDOM.deleteButtons(allTasks);
tasksDOM.checkButtons(allTasks);
tasksDOM.editButtons(allTasks);

//Tags sidebar
document.querySelector("#unfiltered").addEventListener("click", (event) => {
    event.preventDefault();
    let new_divs_from_tasks = tasksDOM.displayTasks(allTasks.tasks);
    document.querySelector(".all_tasks_container").replaceWith(new_divs_from_tasks);
})

//Reattach event listeners to new buttons after re-rendering
document.addEventListener("click", () => {
    tasksDOM.deleteButtons(allTasks);
    tasksDOM.checkButtons(allTasks);
    tasksDOM.editButtons(allTasks);
})

//Modal
const add_task_button = document.querySelector(".add_button");
const modal_window = document.querySelector("#add_task_modal");

function modalFunctions() {
    modalOpen(add_task_button, modal_window);
    //keyModalOpen(modal_window);
    closeOnOutsideClick(modal_window);
}
modalFunctions();
//Also closes edit task modal on outside click
closeOnOutsideClick(document.querySelector("#edit_task_modal"));

//Modal submit
const submit_button = document.querySelector("#submit_button");

function submit() {
    if (document.querySelector("#task_name").value == "" || document.querySelector("#task_description").value == "" || document.querySelector("#task_due_date").value == "") {
        console.log("Incomplete fields");
        return "Please fill in all fields";
    }
    let value_array = collectFieldsData(".modal_field");
    let new_task = new Task(...value_array);
    allTasks.addTask(new_task);
    //TODO: add a check that only displays the task added if it matches the tag
    // console.log(allTasks.tasks[allTasks.tasks.length - 1])
    while (document.querySelector(".content").firstChild) {
        document.querySelector(".content").removeChild(document.querySelector(".content").firstChild);
    }
    document.querySelector(".content").appendChild(tasksDOM.displayTasks(allTasks.tasks));
    document.querySelector("#add_task_modal").close();
}

submit_button.addEventListener(("click"), (event) => {
    event.preventDefault();
    submit();

})
document.addEventListener("keydown", (event) => {
    if (document.querySelector("#add_task_modal").open == true) {
        if (event.key == "Enter") {
            event.preventDefault();
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

function tagSubmitButton() {
    let tag_field = tagSubmit(document.querySelector("#tag_input"));
    if (tag_field != false) { //if tag isn't empty
        if (allTags.checkDuplicate(tag_field) == true) {
            console.log("Tag already exists");
            document.querySelector("#tag_input").classList.add("tag_duplicate");
            setTimeout(() => { //Removes error class after 1 second
                document.querySelector("#tag_input").classList.remove("tag_duplicate");
            }, 1000)
            return "Tag already exists";
        }
        // Add this tag into the tags array
        allTags.addTag(tag_field);
        // Rerender tags panel
        let new_tag = renderTag(tag_field, allTags);
        document.querySelector(".tags").appendChild(new_tag);
        // Debug
        console.log(allTags);
        //Close modal
        tags_modal.close();
    }
}

tags_modal.addEventListener("keydown", ((event) => {
    if (tags_modal.open == true) {
        if (event.key == "Enter") {
            event.preventDefault();
            tagSubmitButton();
        }
    }
}))
document.querySelector("#tag_submit_button").addEventListener("click", (event) => {
    event.preventDefault();
    tagSubmitButton();
})

// Filter priority
priorityFilter(".priority_links", allTasks.tasks);

//localStorage
let all_buttons = document.querySelectorAll("button");

all_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        localStorage.setItem("tasks", JSON.stringify(allTasks.tasks));
        localStorage.setItem("tags", JSON.stringify(allTags.tags));
    })
})

