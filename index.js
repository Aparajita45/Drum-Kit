var numberOfDrums=document.querySelectorAll(".drum").length;

function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kickBass=new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

            default:
                console.log(this.innerHTML);
    }
}
for(var i=0;i<numberOfDrums;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var key=this.innerHTML;
    makeSound(key);
    animation(key);});

    
}
for(var i=0;i<numberOfDrums;i++){
    document.addEventListener("keypress",function(event){makeSound(event.key);animation(event.key);})
}

function animation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(()=>{
    document.querySelector("."+key).classList.remove("pressed");
   },"100");
}


