let body = document.querySelector("body");
let colorSpan = document.querySelector("#color");
let bnt = document.querySelector("#bnt");

const colors = [
    {"color":"Red",  changeColor: function(){ document.body.style.backgroundColor = "red"}},
    {"color":"Blue", changeColor: function(){ document.body.style.backgroundColor = "blue"}},
    {"color":"Gray", changeColor: function(){ document.body.style.backgroundColor = "gray"}},
    {"color":"Pink", changeColor: function(){ document.body.style.backgroundColor = "pink"}}
];

function change() {
    let newColor = colors[Math.floor(Math.random() * colors.length)]; // Pega o elemento em si, não só o index
    colorSpan.textContent = newColor.color;
    body = newColor.changeColor();
};

bnt.addEventListener('click', change);