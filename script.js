var num = 256;

const gridContainer = document.querySelector('.grid-container')

const grid = document.createElement('div');
grid.className = 'grid';
for (let i = 0; i < num; i++){
    var cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
}
gridContainer.appendChild(grid);

var cells = document.querySelectorAll('.cell');
cells.forEach((cell) =>{
    cell.addEventListener('mouseover', () =>{
        cell.style.backgroundColor = 'black'
    })
})

const btnTwentyFour = document.querySelector('#size-twenty-four');
btnTwentyFour.addEventListener('click', () => {
    num = 576;
    generateGrid24(num);
})

const btnThirtyTwo = document.querySelector('#size-thirty-two');
btnThirtyTwo.addEventListener('click', () => {
    num = 1024;
    generateGrid32(num);
})

const generateGrid16 = function(num) {
    clearGrid()
    for (let i = 0; i < num; i++){
        var cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = '29.25px'
        cell.style.height = '29.25px'
        grid.appendChild(cell);
    }
    var cells = document.querySelectorAll('.cell');
    cells.forEach((cell) =>{
    cell.addEventListener('mouseover', () =>{
        cell.style.backgroundColor = 'black'
    })
})
gridContainer.appendChild(grid);
}

const generateGrid24 = function(num) {
    clearGrid()
    for (let i = 0; i < num; i++){
        var cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = '18.82px'
        cell.style.height = '18.82px'
        grid.appendChild(cell);
    }
    var cells = document.querySelectorAll('.cell');
    cells.forEach((cell) =>{
    cell.addEventListener('mouseover', () =>{
        cell.style.backgroundColor = 'black'
    })
})
gridContainer.appendChild(grid);
}

const generateGrid32 = function(num) {
    clearGrid()
    for (let i = 0; i < num; i++){
        var cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = '13.60px'
        cell.style.height = '13.60px'
        grid.appendChild(cell);
    }
    var cells = document.querySelectorAll('.cell');
    cells.forEach((cell) =>{
    cell.addEventListener('mouseover', () =>{
        cell.style.backgroundColor = 'black'
    })
})
gridContainer.appendChild(grid);
}

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    generateGrid16(256)
})

const clearGrid = function() {
    grid.innerHTML = ''
}