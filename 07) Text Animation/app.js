// get h1
const textElement = document.querySelector('.sp-text');
// get the text inside
const text = textElement.textContent;

// get all the letters
const letters = text.split('');

// erase the text
textElement.textContent = '';

console.log(letters);

// dynamically create single letters
letters.forEach((letter) => {
  textElement.innerHTML += `<span>${letter}</span>`;
});

// get all spans
const spans = document.querySelectorAll('span');

spans.forEach((span) =>
  setInterval(() => {
    span.classList.add('fade');
  }, 1000)
);
