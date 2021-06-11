const section = document.querySelector('.section')
const table = document.querySelector('.table');
const input = document.getElementById('input');
const printBtn = document.getElementById('print');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


document.addEventListener('keydown', function(e) {

  // A) Enter is pressed - Print
  if (e.keyCode === 13 || e.which === 13) {
    displayTable();
  }
  // B) When left is pressed - Prev
  if (e.keyCode === 37 || e.which === 37 || e.keyCode === 40 || e.which === 40) {
    if (input.value > 1) {
      input.value--;
    }
    displayTable();
  }
  // C) when right is pressed - Next
  if (e.keyCode === 39 || e.which === 39 || e.keyCode === 38 || e.which === 38) {
    input.value++;
    displayTable();
  }
})


// Clicking on print btn
printBtn.addEventListener('click', displayTable);


// Clicking on prev btn
prevBtn.addEventListener('click', function () {
  if(input.value > 1) {
    input.value--;
  }
  displayTable();
});


// Clicking on next btn
nextBtn.addEventListener('click', function() {
  input.value++;
  displayTable();
});




// Display table based on currnt input value
function displayTable() {
  if (input.value > 0) {
    printTable(input.value);
  } else {
    showError();
  }
}


// Print table based on input value
function printTable(n) {

  // 1) Display hidden items
  display();
  // 2) Create an output to put the table content inside
  let output = `
  <h2>Table of ${n}:</h2>
  <br>
  `;
  // 3) Loop from 1 to 10 for table
  for (let i = 1; i <= 10; i++) {
    // 4) Print table line
    const html = `<h3>${n} x ${i} = <span id="special-text">${n * i}</span>`;
    // 5) Add to overall output
    output += html;
  }
  // 6) Append to table div
  table.innerHTML = output;

}


// Show error on a invalid input
function showError() {

  // 1) Create an element
  const h2 = document.createElement('h2');
  // 2) Assign an error class for style
  h2.className = 'error';
  // 3) Create an error msg
  h2.appendChild(document.createTextNode('Please enter a positive number!'));
  // 4) Insert error element in DOM
  section.insertBefore(h2, table);
  // 5) Remove error msg
  setTimeout(function () {
    h2.remove();
  }, 3000);

}


// Displaying hidden items
function display() {
  table.style.display = 'block';
  document.querySelector('.btn-container').style.display = 'block';
}
