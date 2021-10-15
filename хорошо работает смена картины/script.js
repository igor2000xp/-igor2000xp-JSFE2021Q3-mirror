const buyTicketButton = document.querySelector('.buy-btn');
const closeButton = document.querySelector('.booking-form__close-button');
const buyTicketForm = document.querySelector('.booking-form');
const overlay = document.querySelector('.overlay');

buyTicketButton.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    buyTicketForm.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    buyTicketForm.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    buyTicketForm.classList.add('hidden');
});


const ticketButton = document.querySelector('.buy-ticket_button');

ticketButton.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = (yInside - 90) + 'px'
    circle.style.left = (xInside - 220) + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
});


const burgerMenuBtn = document.querySelector('.burger-menu');
const adaptiveMenu = document.querySelector('.adaptive-menu');

burgerMenuBtn.addEventListener('click', () => {
    adaptiveMenu.classList.toggle('open');
    burgerMenuBtn.classList.toggle('open-btn');
});