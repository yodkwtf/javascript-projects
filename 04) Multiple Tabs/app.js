// selecting elements
const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.btn');
const infoText = document.querySelectorAll('.info-text');


tabs.addEventListener('click', function(e) {
  // 1) get data-id from the clicked btn
  const id = e.target.dataset.id;
  if(id) {
    // 2) remove active class from btns
    btns.forEach(function(btn) {
      btn.classList.remove('active');
    });
    // 3) remove active class from info
    infoText.forEach(function(info) {
      info.classList.remove('active');
    })
  }
  // 4) add active class to btn which is clicked
  e.target.classList.add('active');
  // 5) add active class to info matching the data-id
  document.getElementById(id).classList.add('active');
  
})

