import { modalOpen } from "./modal";

function displayTasks(task_array) {

    let task_div_array = [];

    task_array.forEach((task) => {

        //Create a div for each task
        let task_div = document.createElement('div');
        task_div.classList.add('task_container');
        //Check if complete or not
        if (task.complete == true) {
            task_div.classList.add('task_finished');
        }
        else {
            task_div.classList.remove('task_finished');
        }
        task_div.dataset.name = task.name;

        //Fill in details
        let task_name = document.createElement('h3');
        task_name.classList.add('name');
        task_name.textContent = task.name;

        let task_description = document.createElement('p');
        task_description.classList.add('description');
        task_description.textContent = task.description;

        let task_date = document.createElement('p');
        task_date.classList.add('date');
        task_date.textContent = task.date;

        let task_priority = document.createElement('p');
        task_priority.classList.add('priority');
        task_priority.textContent = task.priority;

        let task_tags = document.createElement('p');
        task_tags.classList.add('tags');
        let i = 0; //This counter is for counting whether it is the last tag, if yes, don't append the comma
        task.tags.forEach((tag) => {
            if (i < task.tags.length - 1) {
            task_tags.textContent += tag + ", ";
            i++;
            }
            else {
                task_tags.textContent += tag;
            }
        }) 

        let task_complete_button = document.createElement('button');
        task_complete_button.classList.add('complete_button');
        task_complete_button.textContent = "✔";

        let task_delete_button = document.createElement('button');
        task_delete_button.classList.add('delete_button');
        task_delete_button.textContent = "X";

        let task_edit_button = document.createElement('button');
        task_edit_button.classList.add('edit_button');
        task_edit_button.textContent = "✏️";

        [task_complete_button, task_delete_button, task_edit_button].forEach((button) => {
            button.classList.add('task_buttons');
        })

        //Append all details into the div
        let task_info = [task_name, task_description, task_date, task_priority, task_tags, task_complete_button, task_delete_button, task_edit_button];
        task_info.forEach((element) => {
            task_div.appendChild(element);
        })

        //Append div into array
        task_div_array.push(task_div);

    })

    const task_container = document.createElement('div');
    task_container.classList.add("all_tasks_container");

    task_div_array.forEach((element) => {
        task_container.appendChild(element);
    
    })

    return task_container;
    
}

function deleteButtons(task_array_class) {
    let all_delete_buttons = document.querySelectorAll(".delete_button");

    all_delete_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let selected_task = button.parentElement.dataset.name;
            let task = task_array_class.findTask(selected_task);
            task_array_class.removeTask(task);
            //Removes the div from the DOM
            button.parentElement.remove();
        })
    })
}

function checkButtons(task_array_class) {
    let all_check_buttons = document.querySelectorAll(".complete_button");

    all_check_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let selected_task = button.parentElement.dataset.name;
            let parent_element = button.parentElement;
            let result = task_array_class.findTask(selected_task);
            if (result.complete == false) {
                //Add class that modifies style of button
                parent_element.classList.add("task_finished");
                result.setCompleted();
            }
            else if (result.complete == true) {
                //Removes that class to mark that it is not complete
                parent_element.classList.remove("task_finished");
                result.setIncomplete();
            }            
            console.log(button.parentElement);
        })
    })
}

function editButtons(task_array_class) {
    let all_edit_buttons = document.querySelectorAll(".edit_button");

    all_edit_buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let selected_task_name = button.parentElement.dataset.name; //Stores the task that the button belongs to
            let result = task_array_class.findTask(selected_task_name); //Result in the actual task itself (the object)
            console.log(result);

            //Opens modal
            document.querySelector("#edit_task_modal").showModal();
            //Pre-fills the modal with the selected task's details
            document.querySelector("#edit_task_name").value = result.name;
            document.querySelector("#edit_task_description").value = result.description;
            document.querySelector("#edit_task_due_date").value = result.date;
            document.querySelector("#edit_tags").value = result.tags;
            //witch statement to prefill radio buttons
            switch (result.priority) {
                case "Urgent and Important":
                    document.querySelector("#edit_UandI").checked = true;
                    break;
                case "Urgent but Not Important":
                    document.querySelector("#edit_UnotI").checked = true;
                    break;
                case "Not Urgent, but Important":
                    document.querySelector("#edit_notUI").checked = true;
                    break;
                case "Not Urgent, Not Important":
                    document.querySelector("#edit_nUnI").checked = true;
                    break;
            }

            //Submit button
            document.querySelector("#edit_modal_submit_button").addEventListener("click", (event) => {
                event.preventDefault();
                //Check radio button
                let edited_priority = "Urgent and Important"; //Just a default value for debugging purposes
                [...document.querySelectorAll('input[name="edit_priority"]')].forEach((radio) => {
                    if (radio.checked) {
                        edited_priority = radio.value;
                    }
                })
                //Tags handling
                let edited_tags = [];
                if (document.querySelector("#edit_tags").value == "") {
                    edited_tags = []; //Unchanged
                }
                else {
                    let tags_array = document.querySelector("#edit_tags").value.split(",");
                    edited_tags = tags_array;
                }

                //Collects data from fields
                let edits_array = [
                    document.querySelector("#edit_task_name").value, 
                    document.querySelector("#edit_task_description").value, 
                    document.querySelector("#edit_task_due_date").value, 
                    edited_priority,
                    edited_tags
                ];
                //Calls editTask function
                task_array_class.editTask(result, edits_array);
                //Closes modal
                document.querySelector("#edit_task_modal").close();
                //Rerender all tasks
                let param = task_array_class["tasks"];
                console.log(param);
                let new_divs_from_tasks = displayTasks(param);
                document.querySelector(".all_tasks_container").replaceWith(new_divs_from_tasks);
                //Reattach event listeners to new buttons after re-rendering
                deleteButtons(task_array_class);
                checkButtons(task_array_class);
                editButtons(task_array_class);

            })
        })
    })
}

export { displayTasks, deleteButtons, checkButtons, editButtons };