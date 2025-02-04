// Modo oscuro
const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  toggleDarkModeButton.innerHTML = isDark
    ? '<i class="ri-moon-line"></i>'
    : '<i class="ri-sun-line"></i>';
}

// Mostrar secciones
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

// Movimiento del botón No (versión modificada)
document.getElementById("btnNo").addEventListener("mouseover", moveButton);
document.getElementById("btnNo").addEventListener("click", moveButton);

function moveButton() {
  const btn = document.getElementById("btnNo");
  const section = document.getElementById("declaracion");
  const sectionRect = section.getBoundingClientRect();

  // Límites de movimiento (80% del área visible de la sección)
  const maxX = (sectionRect.width - btn.offsetWidth) * 0.6;
  const maxY = (sectionRect.height - btn.offsetHeight) * 0.6;

  // Posición relativa dentro de la sección
  const newX = Math.random() * maxX - maxX / 2;
  const newY = Math.random() * maxY - maxY / 2;

  btn.style.transform = `translate(${newX}px, ${newY}px)`;
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleDarkModeButton.innerHTML = '<i class="ri-moon-line"></i>';
  }

  toggleDarkModeButton.addEventListener("click", toggleDarkMode);
});

// Animación de los corazones flotantes
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posicionamos el corazón de forma aleatoria en la parte superior
    heart.style.left = `${Math.random() * 100}vw`;  // Aleatorio en el eje X
    heart.style.animationDuration = `${Math.random() * 5 + 3}s`;  // Duración aleatoria de la animación

    document.body.appendChild(heart);

    // Eliminamos el corazón después de que se haya animado
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones de forma continua
setInterval(createHeart, 100);

