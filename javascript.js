let container = document.getElementById('grid');

let gridSize = document.getElementById('grid-size');
gridSize.addEventListener('click', changeGridSize);

let rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', changeToRainbow);

let clear = document.getElementById('clear');
clear.addEventListener('click', clearGrid);

let divId;
let color;

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('squares');
    div.id = i;
    container.appendChild(div);
}

let squares = document.querySelectorAll('.squares');
squares.forEach(div => {
    div.addEventListener('mouseenter', changeBackground);
});

function changeBackground() {
        divId = this.id;
        color = document.getElementById(divId);
        color.style.backgroundColor = 'black';
}

function changeGridSize() {
    let gridInput = prompt('Choose your grid size:');
    
    if (gridInput > 64 || gridInput < 2) {
        alert('Not a valid number.');
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        for (let i = 0; i < gridInput * gridInput; i++) {
            let div = document.createElement('div');
            div.classList.add('squares');
            div.id = i;
            container.appendChild(div);
        
            let newGrid = container.querySelectorAll('.squares');
            newGrid.forEach(div => {
                div.style.flexBasis = String(100 / gridInput) + '%';
            });
        }
        
        squares = document.querySelectorAll('.squares');
        squares.forEach(div => {
            div.addEventListener('mouseenter', changeBackground);
        });    
    }
}

function changeToRainbow() {
    let coloredSquares = document.querySelectorAll('.squares');
    coloredSquares.forEach(div => {
        div.addEventListener('mouseenter', changeBackgroundRainbow);
    });
}

function changeBackgroundRainbow() {
    divId = this.id;
    color = document.getElementById(divId);
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    color.style.backgroundColor = "#" + randomColor;
}

function clearGrid() {
    squares.forEach(div => {
        div.style.backgroundColor = '';
    });
}