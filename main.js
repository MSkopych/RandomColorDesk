const board= document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = [#];

for(let i = 0; i < SQUARES_NUMBER; i++){
const square = document.createElement('div');
square.classList.add('square');

square.addEventListener('mouseover',() => setColor(square))
square.addEventListener('mouseleave',() => removeColor(square))


board.append(square);

}
