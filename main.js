const board= document.querySelector('#board');
const SQUARES_NUMBER = 500;   // set the number of cells
const colors = ['#E635CB','#E6B363','#E64CD0','#60E635','#4099E6'];  // arry randoms colors

for(let i = 0; i < SQUARES_NUMBER; i++){
const square = document.createElement('div');
square.classList.add('square');

square.addEventListener('mouseover',() => setColor(square))
square.addEventListener('mouseleave',() => removeColor(square))


board.append(square);

}

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element){                                       // a function that returns the initial color
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`;
}
function getRandomColor(){
   const index = Math.floor(Math.random() * colors.length)
   return colors[index];
}
