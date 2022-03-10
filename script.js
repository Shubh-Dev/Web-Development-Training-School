const arrOfImageData = [
  {
    name: 'Yochai Benkler',
    image: './images/img-1.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui llamco aute duis adipisicing aute eu.',
  },
  {
    name: 'Kilnam chon',
    image: './images/img-2.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat veniam. ng aute eu.',
  },
  {
    name: 'Ryan Merkley',
    image: './images/img-3.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip g aute eu.',
  },
  {
    name: 'SohYeong Noh',
    image: './images/img-4.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat ute eu.',
  },
  {
    name: 'Julia Leda',
    image: './images/img-5.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum ing aute eu.',
  },
  {
    name: 'Lila Tretikov',
    image: './images/img-6.jpg',
    designation: 'Anim ad et ullamco sint ad esse aliqua',
    line: 'orange-bar-mobile',
    description: 'Qui esse est quis non qui proident et eiusmod ea.Consectetur cillum aliquip occaecat veniam Proident.',
  },
];
// image description grid
const mainImageGrid = document.querySelector('.speaker');
mainImageGrid.innerHTML += arrOfImageData.map((projects) => (
  `<div class="trainer-detail-grid">

  <div class = dynamic-image-container> 
     <img class = "dynamic-img" src= "${projects.image}">
  </div>

  <div class="trainer-description">
     <h4 class="name">"${projects.name}"</h4>
     <a class="trainer-designation red-text">${projects.designation}</a>
     <p class="comments">${projects.description}</p>
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

const partnerImg = document.createElement('img');
partnerImg.className = 'partner-image-set';
partnerImg.src = './images/Partners.jpg';
// document.querySelector('.partner-image-template').appendChild(partnerImg);

// const partnerImg2 = document.createElement('img');
// partnerImg2.className = 'partner-image-set2';
// partnerImg2.src = './images/Partners-1.jpg';
// document.querySelector('.image-partner-mob').appendChild(partnerImg2);
