let container = document.getElementById('grid');

let gridSize = document.getElementById('grid-size');
gridSize.addEventListener('click', changeGridSize);

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
        let divId = this.id;
        let color = document.getElementById(divId);
        color.style.backgroundColor = 'black';
}

function changeGridSize() {
    let gridInput = prompt('Choose your grid size:');
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
}