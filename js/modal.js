(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        images: document.querySelectorAll("img"),
        modalDiv: document.querySelector("[image-modal-open]"),
        body: document.querySelector("body"),
        imgWrapperModal: document.querySelector(".img-wrapper-modal"),
        closeImageModalBtn: document.querySelector("[image-modal-close]")
  };
  

      for (let i = 0; i < refs.images.length; i++) {
        refs.images[i].addEventListener("click", () => {
            refs.body.classList.add("scrolllock");

            refs.imgWrapperModal.innerHTML = "";

            let newImg = document.createElement("img");
            newImg.classList.add("image-modal-clicked");
            newImg.src = refs.images[i].src;
            newImg.alt = refs.images[i].alt;

            refs.imgWrapperModal.appendChild(newImg);

            fadeIn(refs.modalDiv);
        });
    }

    function fadeIn(element, duration = 10) {
        element.style.opacity = 0;
        element.classList.remove("is-hidden");
        let opacity = 0;
        const interval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, duration);
    }

    function fadeOut(element, duration = 10, callback) {
        let opacity = 1;
        const interval = setInterval(() => {
            if (opacity > 0) {
                opacity -= 0.1;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
                element.classList.add("is-hidden");
                if (callback) callback();
            }
        }, duration);
    }

    refs.openModalBtn.addEventListener("click", () => {
      fadeIn(refs.modal);
      refs.body.classList.add("scrolllock");
    });

    refs.closeModalBtn.addEventListener("click", () => {
        fadeOut(refs.modal, 10, () => {
            refs.body.classList.remove("scrolllock");
        });
    });

    refs.closeImageModalBtn.addEventListener("click", () => {
        fadeOut(refs.modalDiv, 10, () => {
            refs.body.classList.remove("scrolllock");
        });
    });
})();
