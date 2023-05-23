//ARRAY
let images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
];

//VARIABILI
let imgGroup = document.querySelector('.group-img');
let avanti = document.querySelector('.avanti');
let indietro = document.querySelector('.indietro');
let img = '';
let img1 = '';
let slides = document.getElementsByClassName('slide')
let indietroButton = document.querySelector('#indietro')
let avantiButton = document.querySelector('#avanti')
let elemento = 0;
//CICLO
for(i = 0; i < images.length; i++){
    img += `<img class='slide' src='${images[i]}'>`
}

imgGroup.innerHTML = img;

slides[0].classList.add('d-block');

//EVENTO
avantiButton.addEventListener('click', function(){

    slides[elemento].classList.remove('d-block');
    elemento = (elemento + 1) % slides.length;
    slides[elemento].classList.add('d-block');

})

indietroButton.addEventListener('click', function(){

    slides[elemento].classList.remove('d-block');
    elemento = (elemento - 1 + slides.length) % slides.length;
    slides[elemento].classList.add('d-block');
        
})

//THUMBNAILS

