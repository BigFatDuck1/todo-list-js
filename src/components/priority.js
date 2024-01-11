import * as tasksDOM from '../DOM/tasksDOM.js';

function priorityFilter(links, all_tasks_array) {
    document.querySelectorAll(links).forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            let priority = event.target.dataset.priority;
            console.log(priority);
            if (priority == "All") {
                console.log(all_tasks_array);
                reRender(all_tasks_array);
                return all_tasks_array;
            }
            //Don't modify original array
            let filtered_array = newArrayFitsCriteria(all_tasks_array, priority);
            console.log(filtered_array);
            reRender(filtered_array);

            return filtered_array;
        })
    })
}

function newArrayFitsCriteria(array, priority) {
    let new_array = [];
    array.forEach((element) => {
        if (element.priority == priority) {
            new_array.push(element);
        }
    })
    return new_array;
}

function reRender(array) {
    let new_divs_from_tasks = tasksDOM.displayTasks(array);
    document.querySelector(".all_tasks_container").replaceWith(new_divs_from_tasks);
}

export { priorityFilter };