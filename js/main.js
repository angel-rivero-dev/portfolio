particlesJS.load('particles-js', 'js/particles-config.json', function() {
  console.log('Particles.js cargado correctamente');
});

document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,  // Duración de la animación en milisegundos
    once: true,
    offset: 100,    // Distancia en píxeles antes de que se dispare la animación
  });
});