document.querySelectorAll('button').forEach(function(but){
    but.addEventListener('click', function() {
        let word = this.innerText;
        playsound(word);
        buttonanimation(word);
        
    });
});

function playsound(word){

    let audio ;
    switch(word){
        case 'w':{
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        }
        case 'a':{
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        }
        case 's':{
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        }
        case 'd':{
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        }
        case 'j':{
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        }
        case 'k':{
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        }
        case 'l':{
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        }
    }

}

// let audio = new Audio('sounds/snare.mp3');
//         audio.play();

document.addEventListener('keypress', function(event){
    playsound(event.key);
    buttonanimation(event.key);
});

function buttonanimation(currentkey){

      let active =  document.querySelector(`.${currentkey}`);

        active.classList.add('pressed');

        setTimeout(function(){
            active.classList.remove('pressed');
        }, 100);
        
}