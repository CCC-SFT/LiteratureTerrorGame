/* ==========================================
   SISTEMA DE VIDAS
========================================== */

let vidas = CONFIG.vidasIniciales;

/* ==========================================
   ELEMENTOS DEL DOM
========================================== */

function obtenerContenedorVidas() {
    return document.getElementById("livesContainer");
}

/* ==========================================
   INICIALIZAR
========================================== */

function iniciarVidas() {

    vidas = CONFIG.vidasIniciales;

    actualizarVidasUI();
}

/* ==========================================
   ACTUALIZAR INTERFAZ
========================================== */

function actualizarVidasUI() {

    const container = obtenerContenedorVidas();

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < vidas; i++) {

        const heart = document.createElement("span");

        heart.classList.add("heart");

        heart.textContent = "❤️";

        container.appendChild(heart);
    }

    for (let i = vidas; i < CONFIG.vidasIniciales; i++) {

        const heart = document.createElement("span");

        heart.classList.add("heart");

        heart.style.opacity = ".25";

        heart.textContent = "🖤";

        container.appendChild(heart);
    }
}

/* ==========================================
   PERDER VIDA
========================================== */

function perderVida() {

    if (vidas <= 0) return;

    vidas--;

    reproducirDaño();

    actualizarVidasUI();

    efectoDañoPantalla();

    if (vidas <= 0) {

        gameOver();
    }
}

/* ==========================================
   RECUPERAR VIDA
========================================== */

function recuperarVida() {

    if (vidas >= CONFIG.vidasIniciales) return;

    vidas++;

    actualizarVidasUI();
}

/* ==========================================
   RESTAURAR COMPLETAMENTE
========================================== */

function restaurarVidas() {

    vidas = CONFIG.vidasIniciales;

    actualizarVidasUI();
}

/* ==========================================
   CONSULTAR VIDAS
========================================== */

function obtenerVidas() {

    return vidas;
}

/* ==========================================
   DAÑO VISUAL
========================================== */

function efectoDañoPantalla() {

    const body = document.body;

    body.classList.add("damage");

    setTimeout(() => {

        body.classList.remove("damage");

    }, 250);
}

/* ==========================================
   SONIDO DE DAÑO
========================================== */

function reproducirDaño() {

    try {

        const audio = new Audio();

        audio.src = "audio/hit.mp3";

        audio.volume = 0.4;

        audio.play();

    } catch (error) {

        console.log("No se pudo reproducir sonido.");
    }
}

/* ==========================================
   GAME OVER
========================================== */

function gameOver() {

    mostrarTransicion("La oscuridad te alcanza...");

    setTimeout(() => {

        limpiarJuego();
        mostrarPantalla("gameOverScreen");

    }, 1500);
}

/* ==========================================
   UTILIDAD
========================================== */

function estaMuerto() {

    return vidas <= 0;
}