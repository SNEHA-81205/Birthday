// Handle reveal from welcome to note
const revealBtn = document.getElementById('revealBtn');
const welcome = document.getElementById('welcome');
const note = document.getElementById('note');
const confettiBtn = document.getElementById('confettiBtn');
const nextSurpriseBtn = document.getElementById('nextSurpriseBtn');
const gallery = document.getElementById('gallery');

function launchConfetti(batch = 80){
  const colors = ['#fff', '#ffd166', '#b388ff', '#ff9ecf', '#caffbf', '#9bf6ff', '#fdffb6'];
  for(let i=0;i<batch;i++){
    const piece = document.createElement('div');
    piece.className = 'confetti';
    piece.style.left = Math.random()*100 + 'vw';
    piece.style.animationDuration = (Math.random()*2 + 2.2) + 's';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(piece);
    piece.addEventListener('animationend', ()=> piece.remove());
  }
}

revealBtn.addEventListener('click', () => {
  welcome.classList.add('hidden');
  note.classList.remove('hidden');
  launchConfetti(120);
});

confettiBtn.addEventListener('click', () => launchConfetti(100));

nextSurpriseBtn.addEventListener('click', () => {
  note.classList.add('hidden');
  gallery.classList.remove('hidden');
});

// Allow setting heartfelt note later
function setHeartfeltNote(text){
  document.getElementById('heartNote').textContent = text;
}

// Arrange gallery images in circle
window.addEventListener("load", () => {
  const ring = document.getElementById("imageRing");
  const images = ring.querySelectorAll("img");
  const total = images.length;
  const angle = 360 / total;

  let radius = window.innerWidth < 600 ? 350 : 600;

  images.forEach((img, i) => {
    img.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
  });
});


