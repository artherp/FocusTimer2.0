import state from "./state.js"
import * as timer from './timer.js'
import * as el from './controls.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    console.log('toggleRunning called');
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();
    sounds.buttonPress.play();
}

export function reset() {
    console.log('reset called');
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPress.play();
}

export function add() {
    console.log('add called');
    timer.plus();
    sounds.buttonPress.play();
}

export function subtract() {
    console.log('subtract called');
    timer.minus();
    sounds.buttonPress.play();
}


el.forestBtn.addEventListener('click', () => {
    toggleSound(el.forestBtn, sounds.forest)
})

el.rainBtn.addEventListener('click', () => {
    toggleSound(el.rainBtn, sounds.rain)
})

el.coffeeBtn.addEventListener('click', () => {
    toggleSound(el.coffeeBtn, sounds.coffee)
})

el.fireplaceBtn.addEventListener('click', () => {
    toggleSound(el.fireplaceBtn, sounds.fireplace)
})

function toggleSound(button, audio) {
    const isPaused = audio.paused;

    const allButtons = document.querySelectorAll('.music-controls button');
    allButtons.forEach(btn => {
        btn.classList.remove('selected');
    });
    Object.values(sounds).forEach(sound => {
        sound.pause();
    });
  
    if (isPaused) {
        audio.play();
        button.classList.add('selected');
    } else {
        audio.pause();
        button.classList.remove('selected');
    }
}