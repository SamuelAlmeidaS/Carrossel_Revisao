let photo_perfil = document.querySelector('.perfil-photo img');
let nameCard = document.querySelector('.name');
let profile = document.querySelector('.profile');
let desc = document.querySelector('.description');
let nextBnt = document.querySelector('.nextBnt');
let backBnt = document.querySelector('.backBnt');
let randomBnt = document.querySelector('.randomBnt');
let initial = 0;

window.addEventListener("DOMContentLoaded",()=>{showPerson(initial)});

function showPerson(person){
    let item = lista[person];
    photo_perfil.src = item.img;
    nameCard.innerHTML = item.nome;
    profile.textContent = item.job;
    desc.textContent = item.description;
}

// Next
nextBnt.addEventListener('click', ()=>{
    initial++;
    showPerson(initial);
});

// Prevent
backBnt.addEventListener('click', ()=>{
    initial--;
    showPerson(initial);
});

// Random
randomBnt.addEventListener('click', ()=>{
    initial = Math.floor(Math.random() * lista.length);
    showPerson(initial);
});

