/* ==========================================
   PALABRAS AGUDAS
========================================== */

const palabrasAgudas = [

    "lugar",
    "habitación",
    "cruzar",
    "saber",
    "maldición",
    "mamá", 
    "compró", 
    "placer", 
    "edad",
    "maldad",
    "crueldad",
    "mutilación",
    "alucinación",
    "aparición",
    "ansiedad",
    "temblor",
    "aquí",
    "entrar",
    "iré",
    "visión"

];



/* ==========================================
   PALABRAS GRAVES
========================================== */

const palabrasGraves = [

    "Bonita",
    "Padre",
    "Casa",
    "Cuarto",
    "precio",
    "Vecinos",
    "Ventana",
    "Madre",
    "Hermoso",
    "Espero",
    "Sueño",
    "Noche",
    "Puerta",
    "Loca",
    "Barata",
    "Cielo",
    "Árbol",
    "Sangre",
    "Muerte",
    "Oscura",
    "Luz"

];

/* ==========================================
   PALABRAS ESDRÚJULAS
========================================== */

const palabrasEsdrujulas = [

    "visítenos",
    "público",
    "árboles",
    "moviéndose",
    "deberíamos",
    "déjame",
    "murciélago",
    "pánico",
    "macabro",
    "tenebroso",
    "mágico",
    "diabólico",
    "cráneo",
    "maléfico",
    "lámpara",
    "rápido",
    "pálido"

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



/* ==========================================
   NIVELES PALABRAS AGUDAS
========================================== */

const nivelesAgudas = [

    {
        id: 1,

        nombre: "AGUDAS - FÁCIL",

        objetivo: "Selecciona las palabras AGUDAS",

        velocidad: 14000,

        cantidadCorrectas: 8,

        cantidadDistractores: 6,

        puntosNecesarios: 6
    },

    {
        id: 2,

        nombre: "AGUDAS - INTERMEDIO",

        objetivo: "Selecciona las palabras AGUDAS",

        velocidad: 10000,

        cantidadCorrectas: 10,

        cantidadDistractores: 10,

        puntosNecesarios: 8
    },

    {
        id: 3,

        nombre: "AGUDAS - RÁPIDO",

        objetivo: "Selecciona las palabras AGUDAS",

        velocidad: 7000,

        cantidadCorrectas: 14,

        cantidadDistractores: 12,

        puntosNecesarios: 10
    }

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

    AGUDAS: "agudas",

    HISTORIA_2: "historia2",

    GRAVES: "graves",

    HISTORIA_3: "historia3",

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


const distractoresAgudas = [

    ...palabrasGraves,
    ...palabrasEsdrujulas

];

const distractoresGraves = [

    ...palabrasAgudas,
    ...palabrasEsdrujulas

];

const distractoresEsdrujulas = [

    ...palabrasAgudas,
    ...palabrasGraves

];

const distractoresSobreesdrujulas = [

    ...palabrasAgudas,
    ...palabrasGraves,
    ...palabrasEsdrujulas

];


/* ==========================================
   GENERAR PALABRAS DE UN NIVEL
========================================== */

function generarPalabrasNivel(tipo, nivel) {

    let correctas = [];
    let incorrectas = [];

    switch (tipo) {

        case "agudas":

            correctas = mezclarArray(palabrasAgudas)
                .slice(0, nivel.cantidadCorrectas);

            incorrectas = mezclarArray(distractoresAgudas)
                .slice(0, nivel.cantidadDistractores);

            break;

        case "graves":

            correctas = mezclarArray(palabrasGraves)
                .slice(0, nivel.cantidadCorrectas);

            incorrectas = mezclarArray(distractoresGraves)
                .slice(0, nivel.cantidadDistractores);

            break;

        case "esdrujulas":

            correctas = mezclarArray(palabrasEsdrujulas)
                .slice(0, nivel.cantidadCorrectas);

            incorrectas = mezclarArray(distractoresEsdrujulas)
                .slice(0, nivel.cantidadDistractores);

            break;

        case "sobreesdrujulas":

            correctas = mezclarArray(sobreesdrujulas)
                .slice(0, nivel.cantidadCorrectas);

            incorrectas = mezclarArray(distractoresSobreesdrujulas)
                .slice(0, nivel.cantidadDistractores);

            break;
    }

    
    incorrectas = incorrectas.filter(
        palabra => !correctas.includes(palabra)
    );

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


/* ==========================================
   PISTAS POR NIVEL
========================================== */

const pistas = {

    agudas: {

        titulo: "Palabras Agudas",

        texto:
            "Las palabras agudas tienen la fuerza de voz en la última sílaba. " +
            "Ejemplos: ca-fé, can-tar, pa-pel, re-loj."
    },

    graves: {
        titulo: "Palabras Graves",
        texto:
            "Las palabras graves tienen la fuerza de voz en la penúltima sílaba. " +
            "Ejemplos: CA-sa, ME-sa, RO-bot, RE-loj."
    },

    esdrujulas: {
        titulo: "Palabras Esdrújulas",
        texto:
            "Las palabras esdrújulas tienen la fuerza de voz en la antepenúltima sílaba y SIEMPRE llevan tilde. " +
            "Ejemplos: MÚ-si-ca, TE-lé-fo-no, BRÚ-ju-la."
    },

    sobreesdrujulas: {
        titulo: "Palabras Sobreesdrújulas",
        texto:
            "Las palabras sobreesdrújulas tienen la fuerza de voz antes de la antepenúltima sílaba y siempre llevan tilde. " +
            "Ejemplos: DÍ-ga-me-lo, CUÉN-ta-me-lo, EX-PLÍ-ca-me-lo."
    }

};



