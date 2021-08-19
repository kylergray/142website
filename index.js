'use strict';

(function() {

  window.addEventListener('load', init);

  let counter = 0;

  function init() {
    let button = document.getElementById('change-btn');
    button.addEventListener('click', buttonClicked);
  }

  function buttonClicked() {
    let header = document.getElementById('header');
    counter++;
    console.log(counter);
    header.textContent = 'Button was clicked ' + counter + ' times';
  }

})();