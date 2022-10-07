// DOM variables
const painting = document.querySelector('.painting');
const info = document.querySelector('.info');
let newPaintingBtn = document.querySelector('#new-painting');
let pntg = document.querySelector('.painting');
let title = document.querySelector('.title');
let artist = document.querySelector('.artist');
let year = document.querySelector('.year');

// Constructor function to add new paintings
function Painting(pntg, title, artist, year) {
  this.pntg = pntg;
  this.title = title;
  this.artist = artist;
  this.year = year;
}

// Add new paintings with constructor function
const birthOfVenus = new Painting(
  'img/birth-of-venus.jpeg',
  'The Birth of Venus',
  'Sandro Botticelli',
  '1484-1486'
);

const starryNight = new Painting(
  'img/starry-night.webp',
  'Starry Night',
  'Vincent Van Gogh',
  '1889'
);

const theKiss = new Painting(
  'img/the-kiss.jpeg',
  'The Kiss',
  'Gustav Klimt',
  '1907-1908'
);

// Add all paintings created with the constructor function to the paintings array
const paintings = [birthOfVenus, starryNight, theKiss];

// Event listener when you click on the small version of the painting to check the answer.
// Shows the full painting and the information/answer
painting.addEventListener('click', () => {
  painting.classList.add('check');
  showAnswer();
  painting.style.backgroundPosition = 'center';
  painting.style.height = '75vh';
  painting.style.width = '100%';
});

// Event listener for the 'New Painting' button
newPaintingBtn.addEventListener('click', setNewPainting);

function setNewPainting() {
  setPaintingInfo();
  hideAnswer();
  setRandomPosition();
  setHeight();
  setWidth();
}

function setPaintingInfo() {
  let random = Math.floor(Math.random() * paintings.length);
  title.innerText = paintings[random].title;
  artist.innerText = paintings[random].artist;
  year.innerText = paintings[random].year;
  pntg.alt = paintings[random].title;
  pntg.style.backgroundImage = `url(${paintings[random].pntg})`;
  pntg.classList.add('painting');
  pntg.classList.remove('check');
}

// Hide/show the info section at the bottom
function hideAnswer() {
  info.style.opacity = 0;
  info.style.pointerEvents = 'none';
}

function showAnswer() {
  info.style.opacity = 1;
  info.style.pointerEvents = 'auto';
}

// Show a random portion of the painting; will be completely different each time
function setRandomPosition() {
  let randomXPosition = Math.floor(Math.random() * 100);
  let randomYPosition = Math.floor(Math.random() * 100);
  pntg.style.backgroundPosition = `${randomXPosition}%, ${randomYPosition}%`;
}

// Setting dimensions
let height = 20;
let width = 20;

//Get the desired height from the user-input slider; default is 20%
function getHeight(newHeight) {
  height = newHeight;
}

// Change the height to the user-inputted height
function setHeight() {
  getHeight(height);
  pntg.style.height = `${height}%`;
}

// Get the desired width from the user-input slider; default is 20%
function getWidth(newWidth) {
  width = newWidth;
}

// Change the width to the user-inputted width
function setWidth() {
  getWidth(width);
  pntg.style.width = `${width}%`;
  pntg.style.margin = '0 auto';
}
