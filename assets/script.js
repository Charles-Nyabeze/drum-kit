const keys = document.querySelectorAll('.drumKit');
const stopMusic = document.querySelector('#stop')
//on button click add playing = play sound
window.addEventListener('keydown' , playDrum);
function playDrum(e) {
    //link HTML to js
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!sound) return;
    sound.currentTime = 0;
    sound.play();
    //add in class
    const key = document.querySelector(`.drumKit[data-key="${e.keyCode}"]`);
    key.classList.add('hit');
};


//link HTML to js
keys.forEach( key => key.addEventListener('transitionend' , removeHit ) );
//remove the playing class when it has began/started
function removeHit(e){
    this.classList.remove('hit');
}

