const keys = document.querySelectorAll('.drumKit');

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
    key.classList.add('playing');
};


//link HTML to js
keys.forEach( key => key.addEventListener('transitionend' , removePlayingClass ) );
//remove the playing class when it has began/started
function removePlayingClass(e){
    this.classList.remove('playing');
}


// Play music by mouse click
keys.forEach( key => key.addEventListener('click' , mouseDrum ) );
function mouseDrum(e){
    const keyCode = this.getAttribute('data-key');
	const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
	sound.currentTime = 0;
	sound.play();
	const drumClick = document.querySelector(`.key[data-key="${keyCode}"]`);
    drumClick.classList.add('playing');
}