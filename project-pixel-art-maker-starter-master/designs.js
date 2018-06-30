// Select color input
const colorPicker = document.querySelector('#colorPicker');
var colorInput;
colorPicker.addEventListener('change', function(e) {
    colorInput = e.target.value;
})
// Select size input
const submit = document.querySelector('#sizePicker');

const pixelCanvas = document.querySelector('#pixelCanvas');

function makeGrid() {
    // Your code goes here!
    var root = '';
    
    var gridHeight = document.querySelector('#inputHeight').value;
    var gridWidth = document.querySelector('#inputWidth').value;
    
    for (var row = 0; row < gridHeight; row++) {
        root += '<tr>';
        for (var coln = 0; coln < gridWidth; coln++) {
            root += '<td></td>';
        }
        root += '</tr>';
    }
    
    pixelCanvas.innerHTML = root;
}

submit.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
});


pixelCanvas.addEventListener('click', function(e) {
    const cell = e.target;
    
    if (cell.tagName.toLowerCase() === 'td'){
        if (cell.hasAttribute('style')) {
            cell.removeAttribute('style');
        } else {
            cell.style.backgroundColor = colorInput;
        }
    }
});