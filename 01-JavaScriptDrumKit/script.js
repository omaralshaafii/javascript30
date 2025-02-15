const keys = document.querySelectorAll(".key")

function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!sound) return;
    key.classList.add("playing")
    sound.currentTime = 0;
    sound.play()
}

function removeTrasition(e) {
    if (e.propertyName !== "transform") return;

    this.classList.remove("playing")
}

window.addEventListener("keydown", playSound)
keys.forEach(key => key.addEventListener('transitionend', removeTrasition))