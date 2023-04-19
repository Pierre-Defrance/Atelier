const app = {
    
}

const container = document.querySelector(".pixel-container")
const form = document.querySelector(".configuration")
let pixels =[];
let inputGridValue 
let inputPixelValue 

const gridConfig = {
    numberPixel : 8 **2,
    sizePixel : `50px`,
    numberColumns : 8,
}

function addPixel(pixelSize) {
    const pixel = document.createElement("div")
    container.appendChild(pixel)
    pixel.classList.add("pixel")
    pixel.style.width = pixelSize
    pixel.style.height = pixelSize
}

function addAllPixels (config){
    container.style.gridTemplateColumns = `repeat(${config.numberColumns},1fr)`
    for(let i= 0; i<config.numberPixel;i++){
        
        addPixel(config.sizePixel)

    }
   pixels = document.querySelectorAll('.pixel')
}

function toggleColor (domElement){
    domElement.classList.toggle("isActive")
}

const handleSubmit = function(event) {
    event.preventDefault()

    remove()
    inputGridValue = event.target.gridSize.value
    inputPixelValue = event.target.pixelSize.value

    gridConfig.numberPixel = inputGridValue **2
    gridConfig.sizePixel = `${inputPixelValue}px`
    gridConfig.numberColumns = inputGridValue

    addAllPixels(gridConfig)

    event.target.gridSize.value = ""
    event.target.pixelSize.value = ""

    pixels = document.querySelectorAll('.pixel')

    pixels.forEach((pixel) => {
        pixel.addEventListener("click",() => {
            toggleColor(pixel);
        })  
    });
}

function remove (){
    pixels.forEach((pixel) => {
        pixel.remove();
    }) 
}

// addAllPixels()

// pixels.forEach((pixel) => {
//     console.log(pixels);
//     pixel.addEventListener("click",(e) => {
//         toggleColor(pixel);
//     })  
// });

form.addEventListener("submit",handleSubmit)