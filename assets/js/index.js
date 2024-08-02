// aparecer bloco
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.bloco');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item);
    });
});

// aparecer carregando
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carregando');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item);
    });
});

// som 
function playSound() {
    const audio = document.getElementById('somBlocoInov');
    audio.pause(); // Pausa o áudio anterior, se estiver sendo reproduzido
    audio.currentTime = 0; // Reinicia o áudio para garantir que seja reproduzido novamente
    audio.play();
  }