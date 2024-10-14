const container = document.querySelector(".container");

newGrid(16);

function newGrid(num) {
    if (num > 100) {
        alert('Too big! Maximum size: 100x100');
        return;
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < num; j++) {
            let smallDiv = document.createElement('div');
            smallDiv.className = "square";
            row.appendChild(smallDiv);
        }
        container.appendChild(row);
    }
    
    const squares = document.querySelectorAll('.square');
    
    squares.forEach( (sqr) => {
    sqr.addEventListener('mouseover', () => {
        sqr.style.backgroundColor = getRandomRGBA();
        sqr.style.opacity = sqr.style.opacity + 0.1; 
    })
})
}

function getRandomRGBA() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgba(${r}, ${g}, ${b}, 1)`
}

const newDraw = document.querySelector('#newDrawing');
newDraw.addEventListener('click', () => {
    newGrid(prompt('How many squares per side?', 16));
})
