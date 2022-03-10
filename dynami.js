const partnerImg2 = document.createElement('img');
partnerImg2.className = 'partner-image-set2';
partnerImg2.src = './images/Partners-1.jpg';
document.querySelector('.partner-image-desktop-2').appendChild(partnerImg2);

const dynamicFooter = document.createElement('div');
dynamicFooter.className = 'home-page-footer';
const footerText = document.createElement('h3');
footerText.textContent = 'Orange Intelligence';
const footerPara = document.createElement('p');
footerPara.textContent = 'orance intelligence,copyright &copy; 2022';
dynamicFooter.appendChild(footerText);
dynamicFooter.appendChild(footerPara);
document.querySelector('.dynamic-footer').appendChild(dynamicFooter);