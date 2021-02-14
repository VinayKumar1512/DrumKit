var numberofButtons = document.querySelectorAll(".drum").length;
//we are selecting all the buttons having class .drum and storing there length
//function is an aynonymus function as it is not having any name.

for (var i = 0; i < numberofButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //we are adding click event to all the buttons selected

        // var audio = new Audio("./sounds/crash.mp3"); //by this an html
        // audio element is created
        // by which you can perform different audio operations,having different 
        //method one of them in play() method
        // audio.play();

        var buttonSound = this.innerHTML;
        //this represent the current button clicked
        //we are getting the button clicked innerHTML i.e w,a,s,d,j,k,l in HTML

        drumSound(buttonSound);
        buttonAnimation(buttonSound);

    });
}
document.addEventListener("keypress", function(event) {
    //whenever we press key on keyboard the keypress event triggered
    //we are getting the information of the event perfomred by using event object
    drumSound(event.key);
    //we are passing the key which is pressed during the event
    buttonAnimation(event.key);
});


function drumSound(buttonSound) {
    //Here using switch statement using different buttons clicked innerHTML 
    //we are adding different sound to them
    switch (buttonSound) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentkey) {
    //we are adding animation to the current clicked button by adding pressed class to it
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        //removing pressed class after 200ms
        activeButton.classList.remove("pressed");
    }, 200);
}