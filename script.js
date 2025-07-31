let contect1 = document.querySelector('#con-btn');
let show1 = document.querySelector('.content-info');
let cIcon = document.getElementById('close-btn');


contect1.addEventListener('click', () => {
    show1.style.display = 'flex';
})

cIcon.addEventListener('click', () => {
    show1.style.display = 'none';
})
