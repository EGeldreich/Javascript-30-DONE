

const keydownHandler = (e) => {
    // Trouver audio correspondant a la touche
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const keyEl = document.querySelector(`.key[data-key=${e.code}]`);
    
    if(!audio) return; // stopper fonction si mauvaise touche

    audio.currentTime = 0; // reset audio timer
    
    audio.play(); // play audio
    
    keyEl.classList.add("playing"); //Ajouter classe

    // Retirer classe avec setTimeout
    /* setTimeout( () => {
        keyEl.classList.remove("playing");
    }, 70); */

    // Retirer classe avec transitionend
    const removeTransition = (e) => {
    // selectionner une transition avec temps max, quitter sinon
    if(e.propertyName !== 'transform') return;
    // retirer classe a la fin de la transition
    keyEl.classList.remove("playing");
    };
    keyEl.addEventListener('transitionend', removeTransition);
};

window.addEventListener('keydown', keydownHandler);
