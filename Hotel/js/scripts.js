// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
  pw.classList.toggle('moveOver');
});

//get hotel locations data from json file
import { hotels } from '../js/hotels.js';

console.log(hotels);

const hotelCards = document.querySelector('#cards');

//create hotel cards
hotels.forEach((hotel) => {
  const mySection = document.createElement('section');

  const theImage = document.createElement('img');
  theImage.src = `${hotel.photo}`;
  theImage.alt = hotel.name;

  const theName = document.createElement('h2');
  theName.textContent = hotel.name;

  const theAddress = document.createElement('address');
  theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

  const thePhone = document.createElement('a');
  thePhone.textContent = hotel.phone;
  thePhone.href = `tel:${hotel.phone}`;

  mySection.appendChild(theImage);
  mySection.appendChild(theName);
  mySection.appendChild(theAddress);
  mySection.appendChild(thePhone);
  hotelCards.appendChild(mySection);
});