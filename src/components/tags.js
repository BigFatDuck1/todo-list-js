
class Tags {
    constructor() {
        this.tags = [];
    }

    addTag(tag) {
        if (this.tags.includes(tag)) {
            return "Tag already exists";
        }

        this.tags.push(tag);
    }

    removeTag(tag) {
        if (tag == undefined) {
            return "Tag not found";
        }

        this.tags.splice(this.tags.indexOf(tag), 1);
    }

    checkDuplicate(tag) {
        return this.tags.includes(tag);
        //If true, duplicate exists
        //If false, duplicate does not exist, can create new tag
    }
}

function renderTag(tag_field, tag_array_class) {
    let new_tag = document.createElement("a");
    new_tag.dataset.tag = tag_field;
    new_tag.classList.add("tag_link");
    new_tag.textContent = tag_field;
    // Delete button next to tag
    let delete_button = document.createElement("button");
    delete_button.classList.add("delete_tag_button");
    delete_button.textContent = "X";
    delete_button.addEventListener("click", (event) => {
        let tag_to_remove = event.target.parentElement.dataset.tag;
        tag_array_class.removeTag(tag_to_remove);
        event.target.parentElement.remove();
    })
    new_tag.appendChild(delete_button);

    return new_tag;
}

export { Tags, renderTag };