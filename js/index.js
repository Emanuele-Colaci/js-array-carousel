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
let thumbnails = document.querySelector('.thumbnails');
let img = '';
let thumbnailsImg = '';
let elemento = 0;
let avanti = document.getElementById('avanti')
let indietro = document.getElementById('indietro')
//CICLO
for(i = 0; i < images.length; i++){
    img += `<img class='slide' src='${images[i]}'>`
    thumbnailsImg += `<img class='active' src='${images[i]}'>`
}

imgGroup.innerHTML = img;
thumbnails.innerHTML = thumbnailsImg;

document.getElementsByClassName('slide')[elemento].classList.add('d-block');
document.getElementsByClassName('active')[elemento].classList.add('border');

//EVENTO
avanti.addEventListener('click', function(){
    if(elemento === images.length -1){
        elemento = 0;
    }else{
        elemento++;
    }
    document.querySelector('.slide.d-block').classList.remove('d-block')
    document.getElementsByClassName('slide')[elemento].classList.add('d-block')
    document.querySelector('.border.active').classList.remove('border')
    document.getElementsByClassName('active')[elemento].classList.add('border')
    
})

indietro.addEventListener('click', function(){
    if(elemento === 0){
        elemento = images.length -1;
    }else{
        elemento--;
    }
    document.querySelector('.slide.d-block').classList.remove('d-block')
    document.getElementsByClassName('slide')[elemento].classList.add('d-block')
    document.querySelector('.border.active').classList.remove('border')
    document.getElementsByClassName('active')[elemento].classList.add('border')

})