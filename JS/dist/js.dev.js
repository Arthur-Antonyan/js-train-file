"use strict";

var count = 0;
var btn2 = document.querySelector('#btn2');

btn2.onclick = function () {
  localStorage.setItem('txtx', count++);
};

localStorage.setItem('now', Date.now());