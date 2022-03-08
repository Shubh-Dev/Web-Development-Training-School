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
const div = document.createElement('div');
div.className = ('popMobileWindow');
const crossButton = document.createElement('img');
crossButton.src = './images/Enabled-2.svg';
crossButton.className = 'popMobileCrossbutton';
div.appendChild(crossButton);
document.getElementById('pop-up-mobile-window').appendChild(div);

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
