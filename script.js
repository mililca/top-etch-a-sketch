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

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) =>{
    cell.addEventListener('mouseover', () =>{
        cell.style.backgroundColor = 'black'
    })
})