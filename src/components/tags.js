
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
}