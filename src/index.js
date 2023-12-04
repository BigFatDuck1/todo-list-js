

const startUp = () => {
    const test = document.createElement('div');
    test.textContent = 'Hello World';
    document.querySelector(".container").appendChild(test);
}

startUp();