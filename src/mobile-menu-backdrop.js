(() => {
    const refs = {
        openModalBtn: document.querySelector('[backdrop-open]'),
        closeModalBtn: document.querySelector('[backdrop-close]'),
        backdrop: document.querySelector('[backdrop]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.backdrop.classList.toggle('is-hidden');
    }
})();