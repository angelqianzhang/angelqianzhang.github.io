var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'flower.jpeg') {
      myImage.setAttribute ('src','flower2.jpeg');
    } else {
      myImage.setAttribute ('src','flower.jpeg');
    }
};

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
};
/*
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
};

myButton.onclick = function() {
  setUserName();
};

*/

