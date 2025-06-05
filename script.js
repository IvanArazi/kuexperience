const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Cerrar menú hamburguesa al hacer clic en un enlace del menú (solo en mobile)
document.querySelectorAll('nav ul a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider-marquee');
    if (!slider) return;

    // Crea el contenedor interno y duplica los 4 testimonios
    const inner = document.createElement('div');
    inner.className = 'slider-marquee-inner';
    const items = Array.from(slider.children);
    items.forEach(item => inner.appendChild(item.cloneNode(true)));
    items.forEach(item => inner.appendChild(item.cloneNode(true))); // Duplicar para loop largo
    slider.innerHTML = '';
    slider.appendChild(inner);

    // Pausa al pasar el mouse
    slider.addEventListener('mouseenter', () => {
        slider.classList.add('paused');
    });
    slider.addEventListener('mouseleave', () => {
        slider.classList.remove('paused');
    });
});

// Language selection
document.getElementById('language-select').addEventListener('change', function() {
    window.location.href = this.value;
});

document.getElementById('language-select-mobile').addEventListener('change', function() {
    window.location.href = this.value;
});


// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
        const item = this.parentElement;
        item.classList.toggle('open');
        // Cierra otros si quieres solo uno abierto a la vez:
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) other.classList.remove('open');
        });
    });
});


// Cargar países al select
const paises = [
  "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita",
  "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés",
  "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina",
  "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde",
  "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras",
  "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca",
  "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia",
  "Eslovenia", "España", "Estados Unidos", "Estonia", "Esuatini", "Etiopía", "Filipinas", "Finlandia",
  "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea",
  "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana", "Haití", "Honduras", "Hungría", "India", "Indonesia",
  "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica",
  "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia",
  "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia",
  "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia",
  "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua",
  "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá",
  "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana",
  "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana",
  "Ruanda", "Rumania", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas",
  "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur",
  "Siria", "Somalia", "Sri Lanka", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam",
  "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez",
  "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Vaticano",
  "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"
];
const selectPaises = document.getElementById("select-paises");

selectPaises.innerHTML = `<option value="" disabled selected>Nacionalidad</option>` +
  paises.map(pais => `<option value="${pais}">${pais}</option>`).join("");

// EmailJS - Enviar formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm('default_service', 'template_aghokjh', this)
    .then(() => {
      alert("Mensaje enviado correctamente ✅");
      this.reset();
    }, (error) => {
      console.error('Error:', error);
      alert("Ocurrió un error al enviar el mensaje ❌");
    });
});
