/*
====================================================
Canvas Art - Versión Final Profesional
Autor: Jaqueline Hernandez Hernandez
Incluye más de 70 figuras geométricas
Rectángulos, círculos, arcos, líneas,
triángulos, curvas y gradientes.
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
   PASTO
========================= */

function drawGrass() {
    ctx.strokeStyle = "#2ecc71";
    ctx.lineWidth = 2;

    for (let i = 0; i < 600; i += 6) {
        ctx.beginPath();
        ctx.moveTo(i, 285);
        ctx.lineTo(i + 2, 275);
        ctx.stroke();
    }
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
   NUBES MEJORADAS
========================= */

function drawCloud(x, y) {

    // sombra
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.beginPath();
    ctx.ellipse(x + 60, y + 25, 70, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // gradiente
    let cloudGradient = ctx.createRadialGradient(x + 60, y, 10, x + 60, y, 80);
    cloudGradient.addColorStop(0, "#ffffff");
    cloudGradient.addColorStop(1, "#dcdcdc");

    ctx.fillStyle = cloudGradient;

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.arc(x + 40, y - 15, 35, 0, Math.PI * 2);
    ctx.arc(x + 80, y, 30, 0, Math.PI * 2);
    ctx.arc(x + 120, y - 10, 25, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

/* =========================
   CASA
========================= */

function drawHouse() {

    let wall = ctx.createLinearGradient(100, 150, 100, 280);
    wall.addColorStop(0, "#6db3ff");
    wall.addColorStop(1, "#215a8e");
    ctx.fillStyle = wall;
    ctx.fillRect(100, 150, 120, 130);

    ctx.fillStyle = "#f2da57";
    ctx.fillRect(120, 180, 30, 30);
    ctx.fillRect(170, 180, 30, 30);

    ctx.fillStyle = "#c78a34";
    ctx.fillRect(145, 210, 30, 70);

    ctx.fillStyle = "#c0392b";
    ctx.beginPath();
    ctx.moveTo(90, 150);
    ctx.lineTo(230, 150);
    ctx.lineTo(160, 90);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#7f8c8d";
    ctx.fillRect(195, 110, 20, 40);
}

/* =========================
   ARBUSTOS SEPARADOS
========================= */

function drawBush(x) {
    ctx.fillStyle = "#2e7d32";
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(x + i * 35, 285, 25, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* =========================
   ÁRBOL
========================= */

function drawTree() {

    ctx.fillStyle = "#6b3e1d";
    ctx.fillRect(470, 200, 30, 100);

    for (let i = 0; i < 8; i++) {
        ctx.fillStyle = "#4d7a1a";
        ctx.beginPath();
        ctx.arc(485 + Math.random()*50 -25, 170 + Math.random()*50 -25, 30, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   GATO FINAL
========================= */

function drawCat() {

    // CUERPO
    let body = ctx.createLinearGradient(260, 220, 260, 300);
    body.addColorStop(0, "#ff9d4e");
    body.addColorStop(1, "#d66b1c");
    ctx.fillStyle = body;
    ctx.fillRect(260, 220, 170, 90);

    // DECORACIONES
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

    // CABEZA
    ctx.fillStyle = "#1c4b96";
    ctx.beginPath();
    ctx.arc(240, 200, 40, 0, Math.PI*2);
    ctx.fill();

    // OREJAS
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

    // OJOS
    ctx.fillStyle = "#69e040";
    ctx.beginPath(); ctx.arc(225, 195, 7, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(255, 195, 7, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath(); ctx.arc(225, 195, 3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(255, 195, 3, 0, Math.PI*2); ctx.fill();

    // NARIZ
    ctx.fillStyle = "#ff69a3";
    ctx.beginPath();
    ctx.moveTo(240,210);
    ctx.lineTo(232,220);
    ctx.lineTo(248,220);
    ctx.closePath();
    ctx.fill();

    // BOCA FELINA
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(235, 225, 10, 0, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(245, 225, 10, 0, Math.PI);
    ctx.stroke();

    // BIGOTES
    ctx.beginPath();
    ctx.moveTo(210,210); ctx.lineTo(185,205);
    ctx.moveTo(210,220); ctx.lineTo(185,220);
    ctx.moveTo(270,210); ctx.lineTo(295,205);
    ctx.moveTo(270,220); ctx.lineTo(295,220);
    ctx.stroke();

    // 4 PATAS
    ctx.fillStyle = "#4da0ff";
    ctx.fillRect(290, 310, 25, 60);
    ctx.fillRect(330, 310, 25, 60);
    ctx.fillRect(370, 310, 25, 60);
    ctx.fillRect(410, 310, 25, 60);

    ctx.beginPath(); ctx.arc(302, 370, 12, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(342, 370, 12, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(382, 370, 12, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(422, 370, 12, 0, Math.PI*2); ctx.fill();

    // COLA SEGMENTADA
    ctx.fillStyle = "#f4c542";
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(430 + i*18, 230 - i*5, 12, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   ESCENA
========================= */

function drawScene() {
    drawSky();
    drawGround();
    drawGrass();
    drawSun();
    drawCloud(70, 70);
    drawCloud(220, 60);
    drawHouse();
    drawBush(30);
    drawBush(180);
    drawTree();
    drawCat();
}

drawScene();