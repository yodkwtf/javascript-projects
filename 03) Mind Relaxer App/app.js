const container = document.querySelector('.container');
const text = document.querySelector('.circle-text');

const time = 9500;
const breathInTime = 3000;
const holdTime = 1500;
const breathOutTime = 5000;

// TODO- on starting
const breathAnimation = () => {
  // change text to "breathe in" and grow the circle
  text.textContent = 'Breath In';
  container.className = 'container grow';

  // TODO- after breathing in for 3 seconds
  setTimeout(() => {
    // change text to "hold"
    text.textContent = 'Hold';

    // TODO- after holding for 1.5 seconds
    setTimeout(() => {
      // change text to "breath out" and shrink the circle
      text.textContent = 'Breath Out';
      container.className = 'container shrink';
    }, holdTime);
  }, breathInTime);
};

breathAnimation();
setInterval(breathAnimation, time);

// INFO
const infoBtn = document.querySelector('.info-btn');
const infoText = document.querySelector('.info-text');

window.addEventListener('click', (e) => {
  if (
    e.target != infoText && // not closing on clicking info div
    e.target != infoBtn && // not closing on btn click
    e.target.parentElement != infoText // not closing on clicking para inside info div
  ) {
    infoText.classList.remove('visible');
  }
});
infoBtn.addEventListener('click', () => infoText.classList.toggle('visible'));
