const buttons = document.querySelectorAll('button');
const numberOfButtons = buttons.length;

for(let i=0;i<numberOfButtons;i++){
    buttons[i].addEventListener('click',(event) => {
        sound(buttons[i].innerText);
    })
}

document.addEventListener('keypress',(event) => {
    sound(event.key);
})

function sound(key) {
    switch (key) {  
        case '1':
            var sound1 = new Audio('sounds/boom.wav')
            sound1.play();
            break;

        case '2':
            var sound2 = new Audio('sounds/clap.wav')
            sound2.play();
            break;

        case '3':
            var sound3 = new Audio('sounds/hihat.wav')
            sound3.play();
            break;

        case '4':
            var sound4 = new Audio('sounds/kick.wav')
            sound4.play();
            break;

        case '5':
            var sound5 = new Audio('sounds/openhat.wav')
            sound5.play();
            break;

        case '6':
            var sound6 = new Audio('sounds/ride.wav')
            sound6.play();
            break;
        case '7':
            var sound7 = new Audio('sounds/snare.wav')
            sound7.play();
            break;

        case '8':
            var sound8 = new Audio('sounds/tink.wav')
            sound8.play();
            break;

        case '9':
            var sound9 = new Audio('sounds/tom.wav')
            sound9.play();
            break;
            
        default: console.log(key);
    }
}