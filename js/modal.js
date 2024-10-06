(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", () => {
      toggleModal();
      let opacity = 0;
        const interval = setInterval(() => {
          if (opacity < 1) {
                opacity += 0.1;
                refs.modal.style.opacity = opacity;
            }
            else {
              clearInterval(interval);
            }
        }, 10);
  });
    refs.closeModalBtn.addEventListener("click", () => {
        let opacity = 1;
        const interval = setInterval(() => {
            if (opacity > 0) {
                opacity -= 0.1;
                refs.modal.style.opacity = opacity;
            }
            else {
                clearInterval(interval);
                toggleModal();
            }
        }, 10);
    });
    
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }

})();