
function modalOpen(button, modal) {
    button.addEventListener('click', () => {
        modal.showModal();
    });
}

function keyModalOpen(modal) {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'a' || event.key === "A") {
            if (modal.open == false) {
                modal.showModal();
                // Prevents the "a" from showing up in the input field
                event.preventDefault();
            }
        }
    });
}

function closeOnOutsideClick(modal) {
    modal.addEventListener("click", (event) => {
        const dialogDimensions = modal.getBoundingClientRect()
        if (
          event.clientX < dialogDimensions.left ||
          event.clientX > dialogDimensions.right ||
          event.clientY < dialogDimensions.top ||
          event.clientY > dialogDimensions.bottom
        ) {
          modal.close()
        }
      })
}

function submitForm(name_field, description_field, date_field, priority_field, tags_field) {
    let result_object = {
        name: name_field.value,
        description: description_field.value,
        date: date_field.value,
        priority: priority_field.value,
        tags: tags_field.value,
    }

    return result_object;
}

function collectFieldsData(class_name) {
    let fields = document.querySelectorAll(class_name);
    let value_array = [];
    fields.forEach((field) => {
        //Handle radio
        if (field.type == "radio") {
            //Only push if value is checked
            if (field.checked == true) {
                value_array.push(field.value);
            }
        }
        //Handles tags
        else if (field.name == "tags") {
            let tags_array = field.value.split(",");
            value_array.push(tags_array);
        }
        //Handles everything else
        else if (field.type != "radio") {
            value_array.push(field.value);
        }
    })

    //Clears everything after pressing submit
    clearFields(...fields);
    
    return value_array;
}

function clearFields(...fields) {
    //fields is the array containing all fields to be cleared
    fields.forEach((field) => {
        if (field.type != "radio") {
            field.value = "";
        }
    })
}

function tagSubmit(tag_field) {
    let tag = tag_field.value;
    if (tag == "") {
        console.log("Error: Empty tag");
        return false;
    }
    //Clears field
    tag_field.value = "";
    return tag;
}

export {modalOpen, keyModalOpen, closeOnOutsideClick, submitForm, clearFields, collectFieldsData, tagSubmit};