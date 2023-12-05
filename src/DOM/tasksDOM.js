
function displayTasks(task_array) {

    let task_div_array = [];

    task_array.forEach((task) => {

        //Create a div for each task
        let task_div = document.createElement('div');
        task_div.classList.add('task_container');

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
        task.tags.forEach((tag) => {
            task_tags.textContent += tag + " ";
        })

        //Append all details into the div
        let task_info = [task_name, task_description, task_date, task_priority, task_tags];
        task_info.forEach((element) => {
            task_div.appendChild(element);
        })

        //Append div into array
        task_div_array.push(task_div);

    })

    const task_container = document.createElement('div');
    task_container.classList.add("task_container");

    task_div_array.forEach((element) => {
        task_container.appendChild(element);
    
    })

    return task_container;
    
}


export { displayTasks };