// array with color code
const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


// get variables from DOM
const color = document.getElementById('color-code');
const changeBtn = document.querySelector('.change');
const copyBtn = document.querySelector('.copy');



/*
* EVENT LISTENERS
*/

// clicking on change btn
changeBtn.addEventListener('click', useColorCode);

// pressing spacebar
document.addEventListener('keydown', function(e) {
  if(e.keyCode === 32 || e.which === 32) {
    useColorCode();
  }
})

// clicking on copy btn
copyBtn.addEventListener('click', copyColorCode);



/*
* FUNCTIONS
*/

// GENERATE A COLOR CODE
function getColorCode() {

  // 1) create a variable for color code
  let colorCode = '#';
  // 2) loop 6 times
  for(let i=0; i<=5; i++) {
    // 3) get a random no. bw 0-15
    const random = Math.floor(Math.random() * colorArr.length);
    // 4) get the arr value using random no. as index
    const colorLetter = colorArr[random]
    // 5) add arr value to colorcode
    colorCode += colorLetter;
  }
  // 6) return color code
  return colorCode;

}


// USE THE GENERATED COLOR CODE
function useColorCode() {

  // 1) get color code
  const colorCode = getColorCode();
  // 2) change background color
  document.body.style.backgroundColor = colorCode;
  // 3) print color code to UI
  color.textContent = colorCode;
  // 4) change color of color code in UI
  color.style.color = colorCode;

}


// COPY THE COLOR CODE
function copyColorCode() {
  window.navigator.clipboard.writeText(color.textContent);
  copyBtn.textContent = 'copied...';
  setTimeout(function() {
    copyBtn.innerHTML = 'copy <i class="las la-clipboard"></i>';
  },1000)
}