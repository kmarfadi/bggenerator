const color1Input = document.querySelector('.color1');
const color2Input = document.querySelector('.color2');
const cssCodeDisplay = document.getElementById('css-code');

function updateBackground() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
  document.body.style.background = gradient;
  cssCodeDisplay.textContent = `background: ${gradient};`;
}

color1Input.addEventListener('input', updateBackground);
color2Input.addEventListener('input', updateBackground);

// Initialize the background on page load
updateBackground();
