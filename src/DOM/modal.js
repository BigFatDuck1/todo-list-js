
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

export {modalOpen, keyModalOpen, closeOnOutsideClick};