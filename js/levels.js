/* ==========================================
   PALABRAS GRAVES
========================================== */

const palabrasGraves = [

    "casa",
    "árbol",
    "lápiz",
    "joven",
    "mesa",
    "azúcar",
    "fácil",
    "difícil",
    "camino",
    "cuaderno",
    "robot",
    "reloj",
    "doctor",
    "papel",
    "túnel",
    "virus",
    "hotel",
    "césped",
    "cárcel",
    "mármol"

];

/* ==========================================
   PALABRAS ESDRÚJULAS
========================================== */

const palabrasEsdrujulas = [

    "música",
    "teléfono",
    "murciélago",
    "rápido",
    "esdrújula",
    "brújula",
    "matemáticas",
    "fantástico",
    "pájaro",
    "película",
    "química",
    "histórico",
    "océano",
    "científico",
    "trágico",
    "último",
    "mágico",
    "lógico",
    "cómico",
    "sílaba"

];

// sobre esdrujulas

const sobreesdrujulas = [

    "dígamelo",
    "cuéntamelo",
    "devuélveselo",
    "repíteselo",
    "explícamelo",
    "entrégaselo",
    "tráemelo",
    "llévatelo",
    "escríbemelo",
    "muéstraselo",
    "acércaselo",
    "quítaselo",
    "pásamelo",
    "regálaselo",
    "cómpramelo",
    "búscamelo",
    "tómatelo",
    "olvídatelo",
    "sácalo",
    "míralo",
    "dámelo",
    "rompételo",
    "enciéndelo",
    "apágalo",
    "hazmelo"

];

/* ==========================================
   DISTRACTORES
========================================== */

const distractores = [

    "amor",
    "jugar",
    "correr",
    "felicidad",
    "caminar",
    "estrella",
    "bosque",
    "noche",
    "sombras",
    "miedo",
    "sangre",
    "espejo",
    "terror",
    "susurro",
    "fantasma",
    "oscuro",
    "silencio",
    "puerta",
    "ventana",
    "escalera",
    "cementerio",
    "luna",
    "perdido",
    "extraño",
    "misterio"

];

/* ==========================================
   NIVELES PALABRAS GRAVES
========================================== */

const nivelesGraves = [

    {
        id: 1,

        nombre: "GRAVES - FÁCIL",

        objetivo: "Selecciona las palabras GRAVES",

        velocidad: 14000,

        cantidadCorrectas: 8,

        cantidadDistractores: 6,

        puntosNecesarios: 6
    },

    {
        id: 2,

        nombre: "GRAVES - INTERMEDIO",

        objetivo: "Selecciona las palabras GRAVES",

        velocidad: 10000,

        cantidadCorrectas: 10,

        cantidadDistractores: 10,

        puntosNecesarios: 8
    },

    {
        id: 3,

        nombre: "GRAVES - RÁPIDO",

        objetivo: "Selecciona las palabras GRAVES",

        velocidad: 7000,

        cantidadCorrectas: 14,

        cantidadDistractores: 12,

        puntosNecesarios: 10
    }

];

/* ==========================================
   NIVELES PALABRAS ESDRÚJULAS
========================================== */

const nivelesEsdrujulas = [

    {
        id: 4,

        nombre: "ESDRÚJULAS - FÁCIL",

        objetivo: "Selecciona las palabras ESDRÚJULAS",

        velocidad: 12000,

        cantidadCorrectas: 8,

        cantidadDistractores: 6,

        puntosNecesarios: 6
    },

    {
        id: 5,

        nombre: "ESDRÚJULAS - INTERMEDIO",

        objetivo: "Selecciona las palabras ESDRÚJULAS",

        velocidad: 9000,

        cantidadCorrectas: 10,

        cantidadDistractores: 10,

        puntosNecesarios: 8
    },

    {
        id: 6,

        nombre: "ESDRÚJULAS - DIFÍCIL",

        objetivo: "Selecciona las palabras ESDRÚJULAS",

        velocidad: 6000,

        cantidadCorrectas: 14,

        cantidadDistractores: 14,

        puntosNecesarios: 12
    }

];


const nivelesSobreesdrujulas = [
    {
        nombre: "Infierno I",
        objetivo: "Selecciona las palabras SOBREEESDRÚJULAS",
        puntosNecesarios: 10,
        velocidad: 2000
    },
    {
        nombre: "Infierno II",
        objetivo: "La oscuridad se acelera...",
        puntosNecesarios: 15,
        velocidad: 1500
    },
    {
        nombre: "Juicio Final",
        objetivo: "Solo los más rápidos sobreviven",
        puntosNecesarios: 20,
        velocidad: 1000
    }
];

/* ==========================================
   HISTORIA
========================================== */

const paginasHistoria = [

    /* Parte 1 */
    "./pages/pag1.png",
    "./pages/pag2.png",
    "./pages/pag3.png",

    /* Parte 2 */
    "./pages/pag4.png",
    "./pages/pag5.png",
    "./pages/pag6.png",

    /* Final */
    "./pages/pag7.png",
    "./pages/pag8.png",
    "./pages/pag9.png",
    "./pages/pag10.png",
    "./pages/pag11.png",
    "./pages/pag12.png",
    "./pages/pag13.png",
    "./pages/pag14.png",
    "./pages/pag15.png",
    "./pages/pag16.png"
];

/* ==========================================
   MENSAJES
========================================== */

const mensajesHistoria = {

    inicio:

        "¿Quieres descubrir qué ocurrió después? " +
        "Deberás superar el desafío de las palabras graves.",

    segundaParte:

        "Has sobrevivido... pero la oscuridad sigue creciendo. " +
        "Ahora deberás superar el reto de las palabras esdrújulas.",

    final:

        "El secreto finalmente será revelado..."

};

/* ==========================================
   CONFIGURACIÓN GENERAL
========================================== */

const CONFIG = {

    vidasIniciales: 5,

    puntosCorrectos: 10,

    penalizacionError: 1,

    tiempoEntreBurbujas: 800,

    tiempoTransicion: 2500

};

/* ==========================================
   ESTADOS DEL JUEGO
========================================== */

const GAME_PHASES = {

    HISTORIA_1: "historia1",

    GRAVES: "graves",

    HISTORIA_2: "historia2",

    ESDRUJULAS: "esdrujulas",

    FINAL: "final"

};

/* ==========================================
   UTILIDADES
========================================== */

function mezclarArray(array) {

    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] =
            [copia[j], copia[i]];
    }

    return copia;
}

/* ==========================================
   GENERAR PALABRAS DE UN NIVEL
========================================== */

function generarPalabrasNivel(tipo, nivel) {

    let correctas = [];
    let incorrectas = [];

    if (tipo === "graves") {

        correctas =
            mezclarArray(palabrasGraves)
            .slice(0, nivel.cantidadCorrectas);

    } else {

        correctas =
            mezclarArray(palabrasEsdrujulas)
            .slice(0, nivel.cantidadCorrectas);
    }

    incorrectas =
        mezclarArray(distractores)
        .slice(0, nivel.cantidadDistractores);

    const resultado = [];

    correctas.forEach(p => {

        resultado.push({
            texto: p,
            correcta: true
        });

    });

    incorrectas.forEach(p => {

        resultado.push({
            texto: p,
            correcta: false
        });

    });

    return mezclarArray(resultado);
}