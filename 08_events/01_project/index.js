//generate a rando color 

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {     
    color += hex[Math.floor(Math.random() * 16 )]
    }
    return color
};
let intervalId //for global scope
//to change color every second we have to wrap ot into a function
const startChangingColor = function(){
 if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
 }
}

//to change the color
function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
}

//to stop changing the color
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}


document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);