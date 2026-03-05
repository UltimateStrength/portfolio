const numStars = 300;
const container = document.querySelector('.dot-background');

for(let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('dot');

  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  const size = Math.random() * 2 + 1; // entre 1px e 3px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // duração aleatória da animação
  const duration = Math.random() * 3 + 2; // entre 2s e 5s
  star.style.animationDuration = `${duration}s`;

  // delay aleatório para não piscar tudo junto
  star.style.animationDelay = `${Math.random() * 5}s`;

  container.appendChild(star);
}
