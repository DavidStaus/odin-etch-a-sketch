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
        sqr.style.backgroundColor = 'black';
        console.log('fired!')
    })
})
}



const newDraw = document.querySelector('#newDrawing');
newDraw.addEventListener('click', () => {
    newGrid(prompt('How many squares per side?', 16));
})
