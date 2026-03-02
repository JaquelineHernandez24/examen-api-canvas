/*
====================================================
Canvas Art - Versión Mejorada Profesional
Autor: Jaqueline Hernandez Hernandez
Descripción: Escena completa usando Canvas 2D
Incluye +60 figuras (rectángulos, círculos, arcos,
triángulos, líneas, curvas y gradientes).
====================================================
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =========================
   FONDO
========================= */

function drawSky() {
    let sky = ctx.createLinearGradient(0, 0, 0, 400);
    sky.addColorStop(0, "#0a2d73");
    sky.addColorStop(1, "#4da4ff");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 600, 400);
}

function drawGround() {
    let ground = ctx.createLinearGradient(0, 280, 0, 400);
    ground.addColorStop(0, "#5c3a16");
    ground.addColorStop(1, "#2e1808");
    ctx.fillStyle = ground;
    ctx.fillRect(0, 280, 600, 120);
}

/* =========================
   SOL
========================= */

function drawSun() {
    let glow = ctx.createRadialGradient(500, 80, 10, 500, 80, 90);
    glow.addColorStop(0, "rgba(255,255,150,0.9)");
    glow.addColorStop(1, "rgba(255,255,0,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(500, 80, 90, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffce00";
    ctx.beginPath();
    ctx.arc(500, 80, 40, 0, Math.PI * 2);
    ctx.fill();
}

/* =========================
   NUBES
========================= */

function drawCloud(x, y) {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    for (let i = 0; i < 7; i++) {
        ctx.beginPath();
        ctx.arc(x + i * 25, y + (i % 2 === 0 ? 0 : 10), 25, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* =========================
   CASA
========================= */

function drawHouse() {

    // Cuerpo
    let wall = ctx.createLinearGradient(100, 150, 100, 280);
    wall.addColorStop(0, "#6db3ff");
    wall.addColorStop(1, "#215a8e");
    ctx.fillStyle = wall;
    ctx.fillRect(100, 150, 120, 130);

    // Ventanas
    ctx.fillStyle = "#f2da57";
    ctx.fillRect(120, 180, 30, 30);
    ctx.fillRect(170, 180, 30, 30);

    // Puerta
    ctx.fillStyle = "#c78a34";
    ctx.fillRect(145, 210, 30, 70);

    // Techo
    ctx.fillStyle = "#c0392b";
    ctx.beginPath();
    ctx.moveTo(90, 150);
    ctx.lineTo(230, 150);
    ctx.lineTo(160, 90);
    ctx.closePath();
    ctx.fill();

    // Chimenea
    ctx.fillStyle = "#7f8c8d";
    ctx.fillRect(195, 110, 20, 40);
}

/* =========================
   ÁRBOL
========================= */

function drawTree() {

    ctx.fillStyle = "#6b3e1d";
    ctx.fillRect(470, 200, 30, 100);

    for (let i = 0; i < 10; i++) {
        ctx.fillStyle = "#4d7a1a";
        ctx.beginPath();
        ctx.arc(485 + Math.random()*60 -30, 170 + Math.random()*60 -30, 30, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   ARBUSTOS
========================= */

function drawBush(x) {
    for (let i = 0; i < 8; i++) {
        ctx.fillStyle = "#2e7d32";
        ctx.beginPath();
        ctx.arc(x + i*20, 285, 25, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   GATO MEJORADO
========================= */

function drawCat() {

    // Cuerpo
    let body = ctx.createLinearGradient(260, 220, 260, 300);
    body.addColorStop(0, "#ff9d4e");
    body.addColorStop(1, "#d66b1c");
    ctx.fillStyle = body;
    ctx.fillRect(260, 220, 170, 90);

    // Decoraciones
    ctx.fillStyle = "#8e44ad";
    ctx.beginPath(); ctx.arc(300, 250, 15, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = "#16a085";
    ctx.fillRect(340, 240, 25, 25);

    ctx.fillStyle = "#c0392b";
    ctx.beginPath();
    ctx.moveTo(380, 265);
    ctx.lineTo(400, 235);
    ctx.lineTo(420, 265);
    ctx.closePath();
    ctx.fill();

    // Cabeza
    ctx.fillStyle = "#1c4b96";
    ctx.beginPath();
    ctx.arc(240, 200, 40, 0, Math.PI*2);
    ctx.fill();

    // Orejas
    ctx.fillStyle = "#f1c40f";
    ctx.beginPath();
    ctx.moveTo(215,165);
    ctx.lineTo(230,190);
    ctx.lineTo(220,145);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(265,165);
    ctx.lineTo(250,190);
    ctx.lineTo(260,145);
    ctx.fill();

    // Ojos
    ctx.fillStyle = "#69e040";
    ctx.beginPath(); ctx.arc(225, 195, 7, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(255, 195, 7, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath(); ctx.arc(225, 195, 3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(255, 195, 3, 0, Math.PI*2); ctx.fill();

    // Nariz
    ctx.fillStyle = "#ff69a3";
    ctx.beginPath();
    ctx.moveTo(240,210);
    ctx.lineTo(232,220);
    ctx.lineTo(248,220);
    ctx.closePath();
    ctx.fill();

    // Boca
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(240,220);
    ctx.lineTo(240,228);
    ctx.stroke();

    // Bigotes
    ctx.beginPath();
    ctx.moveTo(210,210); ctx.lineTo(185,205);
    ctx.moveTo(210,220); ctx.lineTo(185,220);
    ctx.moveTo(270,210); ctx.lineTo(295,205);
    ctx.moveTo(270,220); ctx.lineTo(295,220);
    ctx.stroke();

    // Patas
    ctx.fillStyle = "#4da0ff";
    ctx.fillRect(290, 310, 30, 60);
    ctx.fillRect(350, 310, 30, 60);

    ctx.beginPath(); ctx.arc(305, 370, 12, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(365, 370, 12, 0, Math.PI*2); ctx.fill();

    // Cola curva
    ctx.strokeStyle = "#f4c542";
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.moveTo(430, 230);
    ctx.quadraticCurveTo(520, 180, 500, 120);
    ctx.stroke();
}

/* =========================
   ESCENA
========================= */

function drawScene() {
    drawSky();
    drawGround();
    drawSun();
    drawCloud(70, 70);
    drawCloud(200, 60);
    drawHouse();
    drawBush(40);
    drawBush(150);
    drawTree();
    drawCat();
}

drawScene();