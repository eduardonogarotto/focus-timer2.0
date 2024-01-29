import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"
import { soundCards, forestAudioCard } from "./elements.js"

export function toggleRunning () {
  state.isRunning = document.documentElement.classList.toggle("running")
  
  timer.countdown()

  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")

  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function increaseTime() {
  state.minutes = state.minutes + 5
  reset()
  timer.updateDisplay()
}

export function decreaseTime() {
  if(state.minutes > 5) {
    state.minutes = state.minutes - 5
    reset()
    timer.updateDisplay()
  } else {
    sounds.buttonPressAudio.play()
    alert("O tempo mínimo é de 5 minutos.")
  }
}

forestAudioCard.addEventListener('click', () => { 
  state.isMuted = forestAudioCard.classList.toggle("selected")

  if(state.isMuted) {
    sounds.forestAudio.play()
    return
  }

    sounds.forestAudio.pause()
})

rainAudioCard.addEventListener('click', () => { 
  state.isMuted = rainAudioCard.classList.toggle("selected")

  if(state.isMuted) {
    sounds.rainAudio.play()
    return
  }

    sounds.rainAudio.pause()
})

coffeeshopAudioCard.addEventListener('click', () => { 
  state.isMuted = coffeeshopAudioCard.classList.toggle("selected")

  if(state.isMuted) {
    sounds.coffeeshopAudio.play()
    return
  }

    sounds.coffeeshopAudio.pause()
})

campfireAudioCard.addEventListener('click', () => { 
  state.isMuted = campfireAudioCard.classList.toggle("selected")

  if(state.isMuted) {
    sounds.campfireAudio.play()
    return
  }

    sounds.campfireAudio.pause()
})