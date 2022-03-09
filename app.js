const div = document.createElement('div');
div.className = 'popMobileWindow';
const crossButton = document.createElement('img');
crossButton.src = './images/Enabled-2.svg';
crossButton.className = 'popMobileCrossbutton';
div.appendChild(crossButton);
document.getElementById('pop-up-mobile-window').appendChild(div);

const homeButton = document.createElement('a');
homeButton.className = 'home';
homeButton.href = 'index.html';
const textNode = document.createTextNode('Home');
homeButton.appendChild(textNode);

const aboutButton = document.createElement('a');
aboutButton.className = 'home';
aboutButton.href = 'about.html';
const textNode2 = document.createTextNode('About');
aboutButton.appendChild(textNode2);

const innerDiv = document.createElement('div');
innerDiv.className = 'inner-div';

innerDiv.appendChild(homeButton);
innerDiv.appendChild(aboutButton);
div.appendChild(innerDiv);

const popUpMobileWindow = document.getElementById('hamburger');
popUpMobileWindow.addEventListener('click', () => {
  const mobilepopButton = document.querySelector('.popMobileWindow');
  mobilepopButton.classList.add('active');

  const popOutMobileWindow = document.querySelector('.popMobileCrossbutton');
  popOutMobileWindow.addEventListener('click', () => {
    const mobilepopButton = document.querySelector('.popMobileWindow');
    mobilepopButton.classList.remove('active');
  });
});