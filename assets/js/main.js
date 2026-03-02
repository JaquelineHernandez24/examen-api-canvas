/**
 * Examen Tema 1 – Programación Gráfica
 * Aplicación: Canvas Art – Paisaje Completo + Gato Geométrico (Versión Mejorada)
 * Autor: [Tu Nombre]
 * Fecha: 2024
 * Descripción:
 *   Versión PRO con degradados avanzados, volumen, sombras, nubes suaves,
 *   casa con textura, árbol 3D, gato con volumen y fondo similar a la referencia.
 */

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/* ======================================================
   UTILIDADES (MEJORADAS)
====================================================== */

function gradient(x1, y1, x2, y2, colors) {
    let g = ctx.createLinearGradient(x1, y1, x2, y2);
    colors.forEach(c => g.addColorStop(c.stop, c.color));
    return g;
}

function radial(x, y, r1, r2, colors) {
    let g = ctx.createRadialGradient(x, y, r1, x, y, r2);
    colors.forEach(c => g.addColorStop(c.stop, c.color));
    return g;
}

function circle(x, y, r, fill, shadow=false) {
    if (shadow) {
        ctx.shadowColor = "rgba(0,0,0,0.4)";
        ctx.shadowBlur = 15;
    }
    ctx.beginPath();
    ctx.fillStyle = fill;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
}

function rect(x, y, w, h, fill, shadow=false) {
    if (shadow) {
        ctx.shadowColor = "rgba(0,0,0,0.4)";
        ctx.shadowBlur = 10;
    }
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, w, h);
    ctx.shadowBlur = 0;
}

function triangle(x1, y1, x2, y2, x3, y3, fill) {
    ctx.beginPath();
    ctx.fillStyle = fill;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

/* ======================================================
   FONDO (MUY REALISTA)
====================================================== */

function drawSky() {
    ctx.fillStyle = gradient(0, 0, 0, canvas.height, [
        { stop: 0, color: "#6ec7ff" },
        { stop: 0.6, color: "#7fc8ff" },
        { stop: 1, color: "#b7e3ff" }
    ]);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGround() {
    ctx.fillStyle = gradient(0, 350, 0, 600, [
        { stop: 0, color: "#442a16" },
        { stop: 0.5, color: "#5c371a" },
        { stop: 1, color: "#3f240f" }
    ]);
    ctx.fillRect(0, 380, 600, 220);

    // textura como tierra
    for (let i = 0; i < 160; i++) {
        circle(
            Math.random() * 600,
            380 + Math.random() * 180,
            Math.random() * 4,
            "rgba(0,0,0,0.25)"
        );
    }
}

/* ======================================================
   NUBES REALISTAS (DEGRADADO)
====================================================== */

function drawCloud(x, y) {
    let cloudColor = radial(x, y, 10, 60, [
        { stop: 0, color: "white" },
        { stop: 1, color: "rgba(255,255,255,0.6)" }
    ]);

    const parts = [
        [0, 0], [30, -15], [65, 0], [30, 20], [-20, 20]
    ];

    parts.forEach(p => circle(x + p[0], y + p[1], 30, cloudColor));
}

/* ======================================================
   SOL (MUY DETALLADO)
====================================================== */

function drawSun() {
    let glow = radial(480, 90, 10, 110, [
        { stop: 0, color: "rgba(255,255,200,1)" },
        { stop: 1, color: "rgba(255,210,80,0)" }
    ]);

    circle(480, 90, 110, glow);

    circle(480, 90, 45, radial(480, 90, 5, 45, [
        { stop: 0, color: "#fff7b1" },
        { stop: 1, color: "#ffd233" }
    ]));

    for (let i = 0; i < 18; i++) {
        let ang = i * (Math.PI * 2 / 18);
        let x = 480 + Math.cos(ang) * 70;
        let y = 90 + Math.sin(ang) * 70;
        triangle(480, 90, x, y, x+6, y+6, "#ffcc22");
    }
}

/* ======================================================
   CASA (VOLÚMEN + TECHO 3D)
====================================================== */

function drawHouse() {
    rect(
        90, 245, 140, 140,
        gradient(90, 245, 230, 385, [
            { stop: 0, color: "#7db2ff" },
            { stop: 1, color: "#4d83e3" }
        ]),
        true
    );

    rect(110, 280, 40, 40, "#ffe47a");
    rect(170, 280, 40, 40, "#ffe47a");

    rect(140, 320, 40, 65, "#78451c");

    triangle(70, 245, 160, 170, 250, 245,
        gradient(70, 170, 250, 245, [
            { stop: 0, color: "#e8533a" },
            { stop: 1, color: "#b43724" }
        ])
    );
}

/* ======================================================
   ÁRBOL 3D
====================================================== */

function drawTree() {
    rect(420, 270, 35, 110, "#7a512a");

    const leaves = [
        [420, 230], [450, 240], [400, 245],
        [430, 210], [460, 260], [390, 260],
        [440, 280], [470, 240], [410, 220]
    ];

    leaves.forEach(l => {
        circle(
            l[0], l[1], 32,
            radial(l[0], l[1], 5, 32, [
                { stop: 0, color: "#7ccf72" },
                { stop: 1, color: "#4c9d4a" }
            ]),
            true
        );
    });
}

/* ======================================================
   GATO 3D
====================================================== */

function drawCat() {
    rect(
        240, 260, 140, 90,
        gradient(240, 260, 380, 350, [
            { stop: 0, color: "#ff9a35" },
            { stop: 1, color: "#d86c12" }
        ]),
        true
    );

    circle(230, 240, 38,
        radial(230, 240, 5, 40, [
            { stop: 0, color: "#7394ff" },
            { stop: 1, color: "#4a63c9" }
        ]),
        true
    );

    triangle(200, 220, 220, 200, 235, 230, "#ffe066");
    triangle(240, 230, 260, 200, 275, 220, "#ffe066");

    circle(215, 235, 7, "lime");
    circle(245, 235, 7, "lime");

    circle(230, 250, 5, "pink");

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.arc(230, 255, 12, 0, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200, 250); ctx.lineTo(175, 245);
    ctx.moveTo(200, 255); ctx.lineTo(175, 255);
    ctx.moveTo(200, 260); ctx.lineTo(175, 265);
    ctx.moveTo(260, 250); ctx.lineTo(285, 245);
    ctx.moveTo(260, 255); ctx.lineTo(285, 255);
    ctx.moveTo(260, 260); ctx.lineTo(285, 265);
    ctx.stroke();

    rect(260, 350, 30, 60, "#567ce0", true);
    rect(300, 350, 30, 60, "#567ce0", true);
    rect(340, 350, 30, 60, "#d55e1b", true);

    circle(275, 410, 14, "#456ac2");
    circle(315, 410, 14, "#456ac2");
    circle(355, 410, 14, "#c44c13");

    let cx = 380;
    for (let i = 0; i < 6; i++) {
        circle(cx, 290, 18,
            radial(cx, 290, 4, 18, [
                { stop: 0, color: "#ffe386" },
                { stop: 1, color: "#e9c75e" }
            ])
        );
        cx += 22;
    }
}

/* ======================================================
   DIBUJAR TODO
====================================================== */

function drawScene() {
    drawSky();
    drawGround();

    drawCloud(90, 100);
    drawCloud(200, 70);
    drawCloud(330, 120);

    drawSun();
    drawHouse();
    drawTree();
    drawCat();
}

drawScene();