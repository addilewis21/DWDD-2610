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


//add reviews to id="cards"
const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.length; x++ ) {

  //create a section
  const mySection = document.createElement('section');
  const myName = document.createElement('h3');
  
  //add content to h3
  myName.textContent = reviews[x].name;

  const myRating = document.createElement('div');
  // Create stars that align with the rating
  for (let step = 0; step < reviews[x].stars; step++) {
    let img = document.createElement('img'); 
    //add image source from images folder
    img.src = '../images/star.png';
    img.alt = 'star';
    myRating.appendChild(img);
  }

  const myReview = document.createElement('p');
  myReview.textContent = reviews[x].text;

  mySection.appendChild(myName);
  mySection.appendChild(myReview);
  mySection.appendChild(myRating);

  myTarget.appendChild(mySection);

  console.log(mySection);
  console.log(myName);
  console.log(myReview);
}