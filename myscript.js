function generateGrid(size){
    let container = document.getElementById("grid-container")
    for (let i = 0; i < size; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);
    }
}
function addEventHover(){
    let squares = Array.from(document.getElementsByClassName("grid-square"));
    squares.forEach(element => {
        element.addEventListener("mouseover", e=>changeColor(e.target));
});
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
        //color = window.getComputedStyle(square).backgroundColor.slice(4,7)-25.5||window.getComputedStyle(square).backgroundColor.slice(3,6)-25.5;
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
document.getElementById("clear-grid").addEventListener("click",clearGrid);
generateGrid(100);
addEventHover();
