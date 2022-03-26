const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")
 
const center = document.querySelector(".center")


// console.log(window.getComputedStyle(pink).background);


const getBGColor = (selectElement) => {
    return window.getComputedStyle(selectElement).backgroundColor;
}

// var pinkcolor = getBGColor(pink);

const magicColor = (element, color) =>{
    return element.addEventListener("mouseenter", () =>{
        center.style.background = color;
    });
};

magicColor(red, getBGColor(red))
magicColor(cyan, getBGColor(cyan))
magicColor(violet, getBGColor(violet))
magicColor(orange, getBGColor(orange))
magicColor(pink, getBGColor(pink))
// magicColor(  , getBGColor())

// pink.addEventListener("dblclick", () =>{
//     center.style.background = pinkcolor;
// })