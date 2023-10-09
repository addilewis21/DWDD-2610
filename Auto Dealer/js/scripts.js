// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

//nav
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

//get reviews data
import {reviews} from '../media/reviews.js';
console.log(reviews);

const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.lenth; x++ ) {

  //create a section
  const mySection = document.createElement('section')
  const myName = document.createElement('h3')
  myName.textContext = reviews [x].name

  const myRating = document.createElement('div')

  const genIndicator = document.createElement('img')
  genIndicator.src = "../images/star-solid.svg"
  myRating.appendChild(genIndicator)

  
  const myReview = document.createElement('p')
  myReview.textContent = reviews [x].text

  mySection.appendChild(myName);

  mySection.appendChild(myReview);

  mySection.appendChild(myRating);

  myTarget.appendChild(mySection);
}