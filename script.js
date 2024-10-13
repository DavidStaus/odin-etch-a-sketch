const container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++) {
    let smallDiv = document.createElement('div');
    smallDiv.className = "square";
    container.appendChild(smallDiv);
}

const squares = document.querySelectorAll('.square');

squares.forEach( (sqr) => {
    sqr.addEventListener('mouseover', () => {
        sqr.style.backgroundColor = 'black';
        console.log('fired!')
    })
})
    
