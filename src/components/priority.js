
function priorityFilter(links, all_tasks_array) {
    document.querySelectorAll(links).forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            let priority = event.target.dataset.priority;
            console.log(priority);
            console.log(all_tasks_array);
        })
    })
}

export { priorityFilter };