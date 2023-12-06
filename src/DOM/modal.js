
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
        //Handles everything else
        else if (field.value != "radio") {
            value_array.push(field.value);
        }
    })

    return value_array;
}

function clearFields(...fields) {
    //fields is the array tcontaining all fields to be cleared
    fields.forEach((field) => {
        field.value = "";
    })
}

export {modalOpen, keyModalOpen, closeOnOutsideClick, submitForm, clearFields, collectFieldsData};