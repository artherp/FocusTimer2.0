import state from './state.js';
import * as el from "./controls.js";

export function countdown() {
    clearTimeout(state.countdownId)
    if(!state.isRunning) {
        return
    }
    console.log('iniciou')

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {

    }
}