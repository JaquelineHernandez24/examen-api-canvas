/* ============================================================
    Canvas Art - Proyecto Final 
    Autor: [TU NOMBRE]
    Fecha: 2024
    Descripción: Dibujo completo en Canvas 2D con más de 
    30 figuras, degradados y volumen estilo la imagen original.
============================================================ */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* ============================================================
                    FONDOS Y CIELO
============================================================ */

// Cielo degradado
function drawSky() {
    let sky = ctx.createLinearGradient(0, 0, 0, 500);
    sky.addColorStop(0, "#0a2d73");
    sky.addColorStop(1, "#4da4ff");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 750, 500);
}

// Suelo
function drawGround() {
    let dirt = ctx.createLinearGradient(0, 350, 0, 500);
    dirt.addColorStop(0, "#5c3a16");
    dirt.addColorStop(1, "#2e1808");
    ctx.fillStyle = dirt;
    ctx.fillRect(0, 350, 750, 150);
}

/* ============================================================
                    NUBES
============================================================ */

function drawCloud(x, y, scale) {
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(x + Math.random() * 60 * scale, y + Math.random() * 20 * scale, 30 * scale, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* ============================================================
                    SOL
============================================================ */

function drawSun() {
    // glow
    let glow = ctx.createRadialGradient(600, 90, 20, 600, 90, 90);
    glow.addColorStop(0, "rgba(255,255,150,0.9)");
    glow.addColorStop(1, "rgba(255,255,0,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(600, 90, 90, 0, Math.PI * 2);
    ctx.fill();

    // sun disc
    let sun = ctx.createRadialGradient(600, 90, 10, 600, 90, 40);
    sun.addColorStop(0, "#fffac0");
    sun.addColorStop(1, "#ffce00");
    ctx.fillStyle = sun;
    ctx.beginPath();
    ctx.arc(600, 90, 40, 0, Math.PI * 2);
    ctx.fill();
}

/* ============================================================
                    ARBUSTOS
============================================================ */

function drawBush(x, y) {
    let colors = ["#4aa84f", "#5fc25f", "#3f8f47"];

    for (let i = 0; i < 10; i++) {
        let grad = ctx.createRadialGradient(
            x + Math.random()*80,
            y + Math.random()*40,
            5,
            x + Math.random()*80,
            y + Math.random()*40,
            35
        );
        grad.addColorStop(0, colors[Math.floor(Math.random()*3)]);
        grad.addColorStop(1, "#1d4b25");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x + (i*15), y + Math.random()*20, 30, 0, Math.PI*2);
        ctx.fill();
    }
}

/* ============================================================
                    ÁRBOL
============================================================ */

function drawTree() {
    // tronco
    let trunk = ctx.createLinearGradient(520, 200, 520, 350);
    trunk.addColorStop(0, "#7b4b27");
    trunk.addColorStop(1, "#3d2615");

    ctx.fillStyle = trunk;
    ctx.fillRect(520, 200, 40, 150);

    // copa de círculos
    for (let i = 0; i < 12; i++) {
        let grad = ctx.createRadialGradient(
            540 + Math.random()*60 - 30,
            170 + Math.random()*70 - 35,
            10,
            540,
            200,
            60
        );
        grad.addColorStop(0, "#9acd32");
        grad.addColorStop(1, "#4d7a1a");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(540 + Math.random()*80 - 40, 170 + Math.random()*80 - 40, 35, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* ============================================================
                    CASA
============================================================ */

function drawHouse() {

    // Pared
    let wall = ctx.createLinearGradient(100, 160, 100, 300);
    wall.addColorStop(0, "#6db3ff");
    wall.addColorStop(1, "#215a8e");

    ctx.fillStyle = wall;
    ctx.fillRect(100, 160, 130, 150);

    // puerta
    ctx.fillStyle = "#c78a34";
    ctx.fillRect(160, 250, 40, 60);

    // ventanas
    ctx.fillStyle = "#f2da57";
    ctx.fillRect(120, 200, 30, 30);
    ctx.fillRect(180, 200, 30, 30);

    // techo
    ctx.fillStyle = "#c0392b";
    ctx.beginPath();
    ctx.moveTo(90, 160);
    ctx.lineTo(265, 160);
    ctx.lineTo(178, 90);
    ctx.closePath();
    ctx.fill();

    // tejas
    for (let i = 95; i < 255; i += 20) {
        ctx.strokeStyle = "rgba(0,0,0,0.4)";
        ctx.beginPath();
        ctx.moveTo(i, 160);
        ctx.lineTo(i - 40, 120);
        ctx.stroke();
    }
}

/* ============================================================
                    GATO (MUCHOS DETALLES)
============================================================ */

function drawCat() {
    // cuerpo
    let body = ctx.createLinearGradient(280, 250, 280, 330);
    body.addColorStop(0, "#ff9d4e");
    body.addColorStop(1, "#d66b1c");

    ctx.fillStyle = body;
    ctx.fillRect(280, 230, 150, 100);

    // cabeza
    let head = ctx.createRadialGradient(250, 210, 10, 250, 210, 40);
    head.addColorStop(0, "#6fb3ff");
    head.addColorStop(1, "#1c4b96");

    ctx.fillStyle = head;
    ctx.beginPath();
    ctx.arc(250, 210, 40, 0, Math.PI*2);
    ctx.fill();

    // ojos
    ctx.fillStyle = "#69e040";
    ctx.beginPath(); ctx.arc(235, 200, 8, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(265, 200, 8, 0, Math.PI*2); ctx.fill();

    // nariz
    ctx.fillStyle = "#ff69a3";
    ctx.beginPath(); ctx.arc(250, 215, 7, 0, Math.PI*2); ctx.fill();

    // boca
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(250, 222);
    ctx.lineTo(240, 230);
    ctx.moveTo(250, 222);
    ctx.lineTo(260, 230);
    ctx.stroke();

    // bigotes
    ctx.lineWidth = 2;
    for (let dx of [-25, -20, 20, 25]) {
        ctx.beginPath();
        ctx.moveTo(250, 215);
        ctx.lineTo(250 + dx, 215 + (Math.random()*10 - 5));
        ctx.stroke();
    }

    // orejas
    ctx.fillStyle = "#ffe560";
    ctx.beginPath();
    ctx.moveTo(220, 180);
    ctx.lineTo(240, 190);
    ctx.lineTo(230, 155);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(260, 190);
    ctx.lineTo(280, 180);
    ctx.lineTo(270, 155);
    ctx.fill();

    // patas y pies
    function leg(x) {
        let lg = ctx.createLinearGradient(x, 270, x, 330);
        lg.addColorStop(0, "#4da0ff");
        lg.addColorStop(1, "#1c3f8c");

        ctx.fillStyle = lg;
        ctx.fillRect(x, 260, 30, 80);

        ctx.beginPath();
        ctx.arc(x + 15, 340, 15, 0, Math.PI*2);
        ctx.fill();
    }

    leg(300);
    leg(350);

    // patas traseras
    function backLeg(x) {
        let lg = ctx.createLinearGradient(x, 270, x, 330);
        lg.addColorStop(0, "#ff7648");
        lg.addColorStop(1, "#b5401b");

        ctx.fillStyle = lg;
        ctx.fillRect(x, 260, 30, 80);

        ctx.beginPath();
        ctx.arc(x + 15, 340, 15, 0, Math.PI*2);
        ctx.fill();
    }

    backLeg(400);
    backLeg(430);

    // cola esférica segmentada
    for (let i = 0; i < 5; i++) {
        let seg = ctx.createRadialGradient(430 + i*22, 230 - i*5, 5, 430 + i*22, 230 - i*5, 18);
        seg.addColorStop(0, "#ffe47e");
        seg.addColorStop(1, "#c29a2d");

        ctx.fillStyle = seg;
        ctx.beginPath();
        ctx.arc(430 + i*22, 230 - i*5, 18, 0, Math.PI*2);
        ctx.fill();
    }

    // figuras geométricas del gato
    ctx.fillStyle = "#7f29ff"; ctx.fillRect(320, 250, 20, 20); // cuadrado
    ctx.fillStyle = "#d12b2b";
    ctx.beginPath(); ctx.moveTo(360,250); ctx.lineTo(380,250); ctx.lineTo(370,230); ctx.fill(); // triángulo

    ctx.fillStyle = "#0080ff";
    ctx.beginPath(); ctx.arc(410, 250, 10, 0, Math.PI*2); ctx.fill(); // círculo

    ctx.fillStyle = "#ff5f00"; 
    ctx.fillRect(330, 280, 15, 25); // rectángulo extra
}

/* ============================================================
                    ESCENA COMPLETA
============================================================ */

function drawScene() {
    drawSky();
    drawGround();
    drawCloud(100, 80, 1.1);
    drawCloud(250, 60, 0.9);
    drawCloud(450, 100, 1.0);
    drawSun();
    drawBush(40, 310);
    drawBush(150, 310);
    drawTree();
    drawHouse();
    drawCat();
}

drawScene();