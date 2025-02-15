const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate() {
    const now = new Date();

    const secDegrees = (now.getSeconds() / 60) * 360 + 90
    const minDegrees = (now.getMinutes() / 60) * 360 + 90
    const hourDegrees = (now.getHours() / 24) * 360 + 90

    secondHand.style.transform = `rotate(${secDegrees}deg)`
    minHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000)

setDate()