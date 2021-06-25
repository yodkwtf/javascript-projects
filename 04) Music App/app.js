// SELECT ELEMENTS
const btns = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');

// PLAYING SOUNDS WITH CLICK
btns.forEach((btn, index) =>
  // get btn
  btn.addEventListener('click', (e) => {
    // get audio
    const audio = audios[index];
    // play sound
    playSounds(btn, audio);
  })
);

// PLAYING SOUNDS WITH KEYS
window.addEventListener('keydown', (e) => {
  // get audio
  const audio = document.querySelector(`audio[data-key='${e.key}']`);
  if (audio) {
    // get btn
    const btn = audio.previousElementSibling;
    // play sound
    playSounds(btn, audio);
  }
});

// playSounds FUNCTION
const playSounds = (btn, audio) => {
  // reset audio
  audio.currentTime = 0;
  // play audio
  audio.play();
  // add animation to btn
  btn.classList.add('key-animate');
  // remove animation from btn
  setTimeout(() => btn.classList.remove('key-animate'), 150);
};
