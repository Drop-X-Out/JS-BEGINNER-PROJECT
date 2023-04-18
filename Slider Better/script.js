const threeDots = document.querySelector('.three-dots');
const container = document.querySelector('.container');

threeDots.addEventListener('click', () => {
    container.style.width = '50vw';
    threeDots.classList.toggle("hidden");
});

const cut = document.querySelector('.cut');

cut.addEventListener('click', () => {
    container.style.width = '0';
    threeDots.classList.remove("hidden");
});
