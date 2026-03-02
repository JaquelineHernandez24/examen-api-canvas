/*
====================================================
Canvas Art - Escena Completa
Autor: Jaqueline Hernandez Hernandez
Materia: Programación Gráfica
Descripción: Dibujo completo usando Canvas 2D
Incluye más de 30 figuras básicas y degradados.
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
    let ground = ctx.createLinearGradient(0, 300, 0, 400);
    ground.addColorStop(0, "#5c3a16");
    ground.addColorStop(1, "#2e1808");
    ctx.fillStyle = ground;
    ctx.fillRect(0, 300, 600, 100);
}

/* =========================
   SOL
========================= */

function drawSun() {
    let glow = ctx.createRadialGradient(500, 80, 10, 500, 80, 80);
    glow.addColorStop(0, "rgba(255,255,150,0.9)");
    glow.addColorStop(1, "rgba(255,255,0,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(500, 80, 80, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffce00";
    ctx.beginPath();
    ctx.arc(500, 80, 35, 0, Math.PI * 2);
    ctx.fill();
}

/* =========================
   NUBES
========================= */

function drawCloud(x, y) {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(x + i * 25, y + Math.random() * 10, 25, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* =========================
   CASA
========================= */

function drawHouse() {

    let wall = ctx.createLinearGradient(80, 140, 80, 280);
    wall.addColorStop(0, "#6db3ff");
    wall.addColorStop(1, "#215a8e");

    ctx.fillStyle = wall;
    ctx.fillRect(80, 140, 120, 140);

    ctx.fillStyle = "#f2da57";
    ctx.fillRect(100, 180, 30, 30);
    ctx.fillRect(150, 180, 30, 30);

    ctx.fillStyle = "#c78a34";
    ctx.fillRect(120, 220, 40, 60);

    ctx.fillStyle = "#c0392b";
    ctx.beginPath();
    ctx.moveTo(70, 140);
    ctx.lineTo(210, 140);
    ctx.lineTo(140, 80);
    ctx.closePath();
    ctx.fill();
}

/* =========================
   ÁRBOL
========================= */

function drawTree() {

    ctx.fillStyle = "#6b3e1d";
    ctx.fillRect(460, 200, 30, 100);

    for (let i = 0; i < 8; i++) {
        ctx.fillStyle = "#4d7a1a";
        ctx.beginPath();
        ctx.arc(475 + Math.random()*40 -20, 170 + Math.random()*40 -20, 30, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   ARBUSTOS
========================= */

function drawBush(x) {
    for (let i = 0; i < 6; i++) {
        ctx.fillStyle = "#2e7d32";
        ctx.beginPath();
        ctx.arc(x + i*20, 290, 25, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   GATO
========================= */

function drawCat() {

    let body = ctx.createLinearGradient(250, 220, 250, 300);
    body.addColorStop(0, "#ff9d4e");
    body.addColorStop(1, "#d66b1c");
    ctx.fillStyle = body;
    ctx.fillRect(250, 220, 140, 80);

    ctx.fillStyle = "#1c4b96";
    ctx.beginPath();
    ctx.arc(220, 200, 35, 0, Math.PI*2);
    ctx.fill();

    ctx.fillStyle = "#69e040";
    ctx.beginPath(); ctx.arc(210, 190, 6, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(230, 190, 6, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = "#ff69a3";
    ctx.beginPath(); ctx.arc(220, 205, 5, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = "#ffe560";
    ctx.beginPath();
    ctx.moveTo(200,170);
    ctx.lineTo(215,185);
    ctx.lineTo(205,150);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(240,170);
    ctx.lineTo(225,185);
    ctx.lineTo(235,150);
    ctx.fill();

    ctx.fillStyle = "#4da0ff";
    ctx.fillRect(270, 280, 25, 60);
    ctx.fillRect(310, 280, 25, 60);

    ctx.beginPath(); ctx.arc(282, 340, 12, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(322, 340, 12, 0, Math.PI*2); ctx.fill();

    for (let i = 0; i < 5; i++) {
        ctx.fillStyle = "#c29a2d";
        ctx.beginPath();
        ctx.arc(390 + i*18, 220 - i*3, 14, 0, Math.PI*2);
        ctx.fill();
    }
}

/* =========================
   ESCENA
========================= */

function drawScene() {
    drawSky();
    drawGround();
    drawSun();
    drawCloud(80, 70);
    drawCloud(220, 60);
    drawHouse();
    drawBush(40);
    drawBush(140);
    drawTree();
    drawCat();
}

drawScene();