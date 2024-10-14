const container = document.querySelector(".container");

newGrid(16);

function newGrid(num) {
    // If grid is too big performance is bad
    if (num > 100) {
        alert('Too big! Maximum size: 100x100');
        return;
    }
  
    // removes previous grid and drawing
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    drawGrid(num)
    
    const squares = document.querySelectorAll('.square');
    squares.forEach( (sqr) => {
      sqr.addEventListener('mouseover', eventHandlerDarkenAlpha)
    })
}

function drawGrid(num) {
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
}


let currentEventHandler = null;
function switchEventHandler(newEventHandler) {
  const squares = document.querySelectorAll('.square');
 
  if (currentEventHandler) {
     squares.forEach( (sqr) => {
        sqr.removeEventListener('mouseover', currentEventHandler)
     })
  }
  
  squares.forEach( (sqr) => {
      sqr.addEventListener('mouseover', newEventHandler)
   })
  
  currentEventHandler = newEventHandler;
}

// ** EVENT HANDLERS **

function eventHandlerDrawColors(event) {
  event.target.style.backgroundColor = getRandomRGBA();
}

function eventHandlerDarkenOpacity(event) {
  if (!event.target.style.opacity) {
    event.target.style.opacity = 0
  }
  event.target.style.backgroundColor = 'black';
  event.target.style.opacity = Number(event.target.style.opacity) + 0.1
}

function eventHandlerDarkenAlpha(event) {
  let alpha = parseFloat(event.target.dataset.alpha) || 0;
  alpha = Math.min(alpha + 0.1, 1);
  event.target.dataset.alpha = alpha;
  event.target.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
}

/* refactor to above
function eventHandlerDarkenAlpha(event) {
  if (!event.target.dataset.alpha) {
    event.target.dataset.alpha = 0;
  }
  event.target.dataset.alpha = Math.min(parseFloat(event.target.dataset.alpha) + 0.1, 1)
  event.target.style.backgroundColor = `rgba(0, 0, 0, ${event.target.dataset.alpha})`;
}
*/

function eventHandlerBlack(event) {
  event.target.style.backgroundColor = 'black';
}

// ** BUTTONS ** 

// New drawing button
const newDrawBtn = document.querySelector('#newDrawing');
newDrawBtn.addEventListener('click', () => {
    newGrid(prompt('How many squares per side?', 16));
})

// Darken mode button
const darkenBtn = document.querySelector('#modeDarken');
darkenBtn.addEventListener('click', () => {
  switchEventHandler(eventHandlerDarkenAlpha);
})

// Random RGB mode button
const randomRGBBtn = document.querySelector('#modeRandomRGB');
randomRGBBtn.addEventListener('click', () => {
  switchEventHandler(eventHandlerDrawColors);
})

// Black mode button
const blackBtn = document.querySelector('#modeBlack')
blackBtn.addEventListener('click', () => {
  switchEventHandler(eventHandlerBlack);
});

// ** AUXILIARY FUNCTIONS **

function getRandomRGBA() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 1)`
}


