// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  const navLinks = navList.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('open');
      }
    });
  });
}

// Slider de imagens na seção Sobre
const sobreSlides = document.querySelectorAll('.sobre-slide');
let currentSobreSlide = 0;

function showSobreSlide(index) {
  sobreSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

if (sobreSlides.length > 1) {
  setInterval(() => {
    currentSobreSlide = (currentSobreSlide + 1) % sobreSlides.length;
    showSobreSlide(currentSobreSlide);
  }, 4000);
}

// Slider galeria mobile
const slides = document.querySelectorAll('.galeria-slide');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentSlide = 0;
let autoplayInterval;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
  });
}

// Autoplay - troca a cada 4 segundos
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

if (slides.length > 0) {
  showSlide(0);
  startAutoplay();

  // Parar autoplay quando usuário clicar nas setas
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoplay();
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      startAutoplay();
    });

    nextBtn.addEventListener('click', () => {
      stopAutoplay();
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      startAutoplay();
    });
  }
}

// Formulário envia via WhatsApp
const form = document.querySelector('.contato-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá! Vim do site.%0A%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*Email:* ${email}%0A*Assunto:* ${assunto}%0A*Mensagem:* ${mensagem}`;

    window.open(`https://wa.me/5519974169445?text=${texto}`, '_blank');
  });
}

// Botão voltar ao topo
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
