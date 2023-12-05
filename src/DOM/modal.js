
function modalOpen(button, modal) {
    button.addEventListener('click', () => {
        modal.showModal();
    });
}

function keyModalOpen(modal) {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'a' || event.key === "A") {
            modal.showModal();
        }
    });
}

export {modalOpen, keyModalOpen};