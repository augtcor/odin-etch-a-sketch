let container = document.getElementById('grid');

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