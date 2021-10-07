function generateGrid(size){
    let container = document.getElementById("grid-container")
    container.textContent = ""
    container.style.gridTemplateColumns = `repeat(${size},auto)`;
    let squaresAmount = size * size;
    for (let i = 0; i < squaresAmount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", e=>changeColor(e.target));
        square.classList.add("grid-square");
        container.appendChild(square);
    }
}

function changeColor(square){
    let mode = document.querySelector('input[name="pensil-color"]:checked').value;
    let color;
    switch(mode){
    case "rainbow": 
        color = [Math.floor(Math.random() * (256) ),Math.floor(Math.random() * (256) ),Math.floor(Math.random() * (256) )]
        color = `rgb(${color.toString()})`
        break;
    case "black":
        color = "black";
        break;
    case "gray-scale":
        color = window.getComputedStyle(square).backgroundColor.split(",").pop().trim().slice(-5,-1);
        color -=25.5;
        color = `rgb(${color},${color},${color})` 
        break
    case "rubber":
        color ="white";
        break;

}
    square.style.backgroundColor = color;
}

function clearGrid(){
    let squares = Array.from(document.getElementsByClassName("grid-square"));
    squares.forEach(element => {
        element.style.backgroundColor = "white";
});
}

function changeSize(){
    let size = window.prompt("Screen size?")
    if (size > 100) size = 100;
    generateGrid(size)
}
document.getElementById("clear-grid").addEventListener("click",clearGrid);
document.getElementById("change-size").addEventListener("click",changeSize);
generateGrid(10);
