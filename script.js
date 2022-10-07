const painting = document.querySelector('.painting');
const info = document.querySelector('.info');

painting.addEventListener('click', () => {
  painting.classList.add('check');
  showAnswer();
  painting.style.backgroundPosition = 'center';
  painting.style.height = '500px';
});

let btn = document.querySelector('.newPainting');
let pntg = document.querySelector('.painting');
let title = document.querySelector('.title');
let artist = document.querySelector('.artist');
let year = document.querySelector('.year');

const paintings = [
  {
    pntg: 'img/birth-of-venus.jpeg',
    alt: 'The Birth of Venus',
    title: 'The Birth of Venus',
    artist: 'Sandro Botticelli',
    year: '1484-1486',
  },
  {
    pntg: 'img/starry-night.webp',
    alt: 'Starry Night',
    title: 'Starry Night',
    artist: 'Vincent Van Gogh',
    year: '1889',
  },
  {
    pntg: 'img/the-kiss.jpeg',
    alt: 'The Kiss',
    title: 'The Kiss',
    artist: 'Gustav Klimt',
    year: '1907-1908',
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * paintings.length);
  title.innerText = paintings[random].title;
  artist.innerText = paintings[random].artist;
  year.innerText = paintings[random].year;
  pntg.style.backgroundImage = `url(${paintings[random].pntg})`;
  pntg.classList.add('painting');
  pntg.classList.remove('check');
  pntg.alt = paintings[random].alt;
  hideAnswer();
  setRandomPosition();
  setRandomHeight();
  pntg.style.transition = 'none';
});

function hideAnswer() {
  info.style.opacity = 0;
  info.style.pointerEvents = 'none';
}

function setRandomPosition() {
  let randomXPosition = Math.floor(Math.random() * 100);
  let randomYPosition = Math.floor(Math.random() * 100);
  pntg.style.backgroundPosition = `${randomXPosition}%, ${randomYPosition}%`;
  console.log(randomXPosition, randomYPosition);
}

function setRandomHeight() {
  let randomHeight = getRandomInt(100, 300);
  console.log(randomHeight);
  pntg.style.height = `${randomHeight}px`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function showAnswer() {
  info.style.opacity = 1;
  info.style.pointerEvents = 'auto';
}
