// DOM variables
const painting = document.querySelector('.painting');
const info = document.querySelector('.info');
const container = document.getElementById('container');
const subheading = document.querySelector('.subheading');
const startBtn = document.getElementById('start');
const newPaintingBtn = document.querySelector('#new-painting');
let pntg = document.querySelector('.painting');
let title = document.querySelector('.title');
let artist = document.querySelector('.artist');
let year = document.querySelector('.year');

// Start playing; unhides the main content and starts the game
startBtn.addEventListener('click', () => {
  subheading.classList.remove('hidden');
  container.classList.remove('hidden');
  startBtn.remove();
  setNewPainting();
});

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

const sundayAfternoon = new Painting(
  'img/sunday-in-the-park.jpeg',
  'A Sunday Afternoon on the Island of La Grande Jatte',
  'Georges Seurat',
  '1884-1886'
);

const monaLisa = new Painting(
  'img/mona-lisa.jpeg',
  'Mona Lisa',
  'Leonardo da Vinci',
  '1503-1519'
);

const arnolfini = new Painting(
  'img/arnolfini-portrait.jpeg',
  'The Arnolfini Portrait',
  'Jan van Eyck',
  '1434'
);

const theScream = new Painting(
  'img/the-scream.jpeg',
  'The Scream',
  'Edvard Munch',
  '1893'
);

const nightWatch = new Painting(
  'img/night-watch.jpeg',
  'The Night Watch',
  'Rembrandt',
  '1642'
);

const gardenEarthlyDelights = new Painting(
  'img/garden-earthly.jpeg',
  'The Garden of Earthly Delights',
  'Hieronymus Bosch',
  'c. 1500'
);

const impressionSunrise = new Painting(
  'img/impression-sunrise.jpeg',
  'Impression: Sunrise',
  'Claude Monet',
  '1872'
);

// Add all paintings created with the constructor function to the paintings array
const paintings = [
  birthOfVenus,
  starryNight,
  theKiss,
  sundayAfternoon,
  monaLisa,
  arnolfini,
  theScream,
  nightWatch,
  gardenEarthlyDelights,
  impressionSunrise,
];

// Event listener when you click on the small version of the painting to check the answer.
// Shows the full painting and the information/answer
painting.addEventListener('click', showPainting);

function showPainting() {
  painting.classList.add('check');
  showAnswer();
  subheading.classList.add('hidden');
  painting.style.backgroundPosition = 'center';
  painting.style.height = '75vh';
  painting.style.width = '100%';
}

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
  subheading.classList.remove('hidden');
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
  console.log(randomXPosition, randomYPosition);
}

function setPosition() {
  pntg.style.backgroundPosition = '100%';
}

// Setting dimensions
let height = 30;
let width = 30;

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
