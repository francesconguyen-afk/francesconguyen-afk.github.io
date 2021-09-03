let myImage = document.querySelector('img');
let elem;

function replyClick(temp){
  elem = temp;
}

document.querySelector('#Ninja').onclick = function() {
  if(elem === 'Naruto')
      myImage.setAttribute('src','images/naruto-rasengan.gif');
  if(elem === 'Sasuke')
      myImage.setAttribute('src','images/sasuke-sharingan.gif');
  if(elem === 'Kakashi')
      myImage.setAttribute('src','images/kakashi-chidori.gif');

  
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
