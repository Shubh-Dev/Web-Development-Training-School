const arrOfImageData = [
  {
    name: 'Yochai Benkler',
    image: './images/img-1.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat veniam. Proident mollit pariatur nulla Lorem laboris reprehenderit mollit ullamco aute duis adipisicing aute eu.',
  },
  {
    name: 'Kilnam chon',
    image: './images/img-2.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat veniam. Proident mollit pariatur nulla Lorem laboris reprehenderit mollit ullamco aute duis adipisicing aute eu.',
  },
  {
    name: 'Ryan Merkley',
    image: './images/img-3.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat veniam. Proident mollit pariatur nulla Lorem laboris reprehenderit mollit ullamco aute duis adipisicing aute eu.',
  },
  {
    name: 'SohYeong Noh',
    image: './images/img-4.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat veniam. Proident mollit pariatur nulla Lorem laboris reprehenderit mollit ullamco aute duis adipisicing aute eu.',
  },
  {
    name: 'Julia Leda',
    image: './images/img-5.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat veniam. Proident mollit pariatur nulla Lorem laboris reprehenderit mollit ullamco aute duis adipisicing aute eu.',
  },
  {
    name: 'Lila Tretikov',
    image: './images/img-6.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat veniam. Proident mollit pariatur nulla Lorem laboris reprehenderit mollit ullamco aute duis adipisicing aute eu.',
  },
];
// image description grid
const mainImageGrid = document.querySelector('.image-grig');
mainImageGrid.innerHTML += arrOfImageData.map((project) => (
  `<div class = 'projects'>
 <div class = "trainer-image">
      
 </div>
 </div>`
));
// mobile-popup-window
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
