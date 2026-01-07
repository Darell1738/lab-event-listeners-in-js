// Handle Button Clicks

function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Capture Keyboard Input

function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`
  }
}

// Process Text Input

function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')

  if (textInput && textInputDisplay) {
    textInputDisplay.textContent = `You typed: ${textInput.value}`
  }
}

// Attach Event Listeners
function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)

  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

// Prevent browser crash
if (typeof module !== 'undefined') {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  }
}
