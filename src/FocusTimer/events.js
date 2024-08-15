import state from "./state.js";
import { timerControls, controlsMusics } from "./controls.js"
import * as actions from "./action.js";
import * as el from "./controls.js";

export function timer() {
    timerControls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] !== "function") {
            return;
        }
        actions[action]();
    });
}

document.querySelectorAll('#controls-musics button').forEach(btn => {
    btn.addEventListener('click', function() {
        const soundId = this.dataset.soundId;

        if (soundId && actions[soundId]) {
            actions[soundId]();
        }
    });
});
