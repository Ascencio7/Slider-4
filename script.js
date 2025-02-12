let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let totalItems = items.length;
let active = 0;
let endMessage = document.createElement('div');
endMessage.textContent = '¡Has llegado al final del carrusel!';
endMessage.style.position = 'absolute';
endMessage.style.top = '50%';
endMessage.style.left = '50%';
endMessage.style.transform = 'translate(-50%, -50%)';
endMessage.style.fontSize = '2em';
endMessage.style.color = '#fff';
endMessage.style.display = 'none'; // Ocultar inicialmente
document.querySelector('.slider').appendChild(endMessage);

// Función para actualizar el slider
const setSlider = () => {
    // Remueve la clase 'active' del elemento actual
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    
    // Agrega la clase 'active' al nuevo elemento
    items[active].classList.add('active');

    // Maneja la visibilidad de botones y mensaje
    prevBtn.classList.toggle('d-none', active === 0);
    nextBtn.classList.toggle('d-none', active === totalItems - 1);
    
    // Mostrar el mensaje al llegar al final
    if (active === totalItems - 1) {
        endMessage.style.display = 'block';
    } else {
        endMessage.style.display = 'none';
    }
};

// Evento para botón siguiente
nextBtn.onclick = () => {
    if (active < totalItems - 1) {
        active++;
        setSlider();
    }
};

// Evento para botón anterior
prevBtn.onclick = () => {
    if (active > 0) {
        active--;
        setSlider();
    }
};

// Función para manejar las teclas de flecha de la laptop
const handleKeyPress = (event) => {
    if (event.key === "ArrowRight") {
        if (active < totalItems - 1) {
            active++;
            setSlider();
        }
    } else if (event.key === "ArrowLeft") {
        if (active > 0) {
            active--;
            setSlider();
        }
    }
};

// Añade el eventListener a las teclas
window.addEventListener('keydown', handleKeyPress);

// Inicializa el slider en la primera imagen
setSlider();