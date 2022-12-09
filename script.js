var Rod1 = document.getElementById("TopRod");
var Rod2 = document.getElementById("BottomRod");
var ball = document.getElementById("Ball");
console.log('Running');
var leftPress = false;
var rightPress = false;

document.addEventListener("keydown", (event)=>{
    if(event.key == 'a'){
        leftPress = true;
    }
    else if(event.key == 'd'){
        rightPress = true;
    }
});

document.addEventListener("keyup", (event)=>{
    if(event.key == 'a'){
        leftPress = false;
    }
    else if(event.key == 'd'){
        rightPress = false;
    }
});

function gameplay(){
    setTimeout(function(){
        console.log('Start');
        setInterval(function(){
            if(leftPress){
                Rod1.style.left = `${Number(Rod1.style.left.split('%')[0]) - 0.1}%`;
                Rod2.style.left = `${Number(Rod2.style.left.split('%')[0]) - 0.1}%`;
                console.log('Left');
            }
            else if(rightPress){
                Rod1.style.left = `${Number(Rod1.style.left.split('%')[0]) + 0.1}%`;
                Rod2.style.left = `${Number(Rod2.style.left.split('%')[0]) + 0.1}%`;
                console.log('Right');
            }
        },5);
    }, 500);
}
gameplay();