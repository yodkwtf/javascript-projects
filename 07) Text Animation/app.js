function init() {
  // get h1
  const textElement = document.querySelector('.sp-text');
  // get all letters inside
  const letters = textElement.textContent.split('');
  // erase the text
  textElement.textContent = '';

  // wrap each letter inside a span
  letters.forEach((letter) => {
    textElement.innerHTML += `<span>${letter}</span>`;
  });

  let i = 0;

  //-ADD ANIMATION FUNCTION
  const addAnimation = () => {
    const span = document.querySelectorAll('span')[i];
    span.classList.add('animated');
    i++;
    if (i >= letters.length) {
      return complete();
    }
  };

  // ADD ANIMATION TO LETTERS ONE BY ONE
  const interval = setInterval(addAnimation, 200);

  //-COMPLETE ANIMATION FUNCTION
  const complete = () => clearInterval(interval);
}

init();

// animate on click
const animateBtn = document.querySelector('.btn');
animateBtn.addEventListener('click', init);
