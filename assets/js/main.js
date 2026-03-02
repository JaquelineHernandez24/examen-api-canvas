/**
 * Examen Tema 1 – Programación Gráfica
 * Canvas Art – Escena Cartoon Estilizada
 * Autora: Jaqueline Hernández
 * Fecha: 2024
 * Descripción:
 *  Versión PRO con degradados visibles, figuras volumétricas,
 *  sombras suaves y estilo parecido a la Imagen A pero cartoon.
 */

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/* ======================================================
   UTILIDADES
====================================================== */

function grad(x1, y1, x2, y2, stops) {
    const g = ctx.createLinearGradient(x1, y1, x2, y2);
    stops.forEach(s => g.addColorStop(s.stop, s.color));
    return g;
}

function radial(x, y, r1, r2, stops) {
    const g = ctx.createRadialGradient(x, y, r1, x, y, r2);
    stops.forEach(s => g.addColorStop(s.stop, s.color));
    return g;
}

function circle(x, y, r, fill, shadow=false) {
    if (shadow) {
        ctx.shadowColor = "rgba(0,0,0,0.35)";
        ctx.shadowBlur = 15;
    }
    ctx.beginPath();
    ctx.fillStyle = fill;
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fill();
    ctx.shadowBlur = 0;
}

function rect(x, y, w, h, fill, shadow=false) {
    if (shadow) {
        ctx.shadowColor = "rgba(0,0,0,0.4)";
        ctx.shadowBlur = 12;
    }
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, w, h);
    ctx.shadowBlur = 0;
}

function tri(x1, y1, x2, y2, x3, y3, fill) {
    ctx.beginPath();
    ctx.fillStyle = fill;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.closePath();
    ctx.fill();
}

/* ======================================================
   FONDO
====================================================== */

function drawSky() {
    ctx.fillStyle = grad(0,0,0,500,[
        {stop:0, color:"#6bd0ff"},
        {stop:0.6, color:"#8ad8ff"},
        {stop:1, color:"#c4edff"}
    ]);
    ctx.fillRect(0,0,600,500);
}

function drawGround() {
    ctx.fillStyle = grad(0,350,0,500,[
        {stop:0, color:"#5b3a22"},
        {stop:1, color:"#382514"}
    ]);
    ctx.fillRect(0,360,600,200);

    for (let i=0;i<100;i++){
        circle(Math.random()*600, 360+Math.random()*140, Math.random()*3,
            "rgba(0,0,0,0.25)");
    }
}

/* ======================================================
   NUBES (cartoon suaves)
====================================================== */

function cloud(x,y) {
    const parts = [
        [0,0], [35,-12], [65,5], [40,22], [-15,15]
    ];
    parts.forEach(p=>{
        circle(x+p[0], y+p[1], 30, 
            radial(x+p[0], y+p[1], 5,35,[
                {stop:0, color:"white"},
                {stop:1, color:"rgba(255,255,255,0.6)"}
            ])
        );
    });
}

/* ======================================================
   SOL (cartoon)
====================================================== */

function drawSun() {
    circle(500,80,65,
        radial(500,80,10,65,[
            {stop:0, color:"#fffab0"},
            {stop:1, color:"#ffd843"}
        ]),
        true
    );
}

/* ======================================================
   CASA CARTOON
====================================================== */

function drawHouse() {
    rect(
        90,260,150,120,
        grad(90,260,250,380,[
            {stop:0,color:"#80b6ff"},
            {stop:1,color:"#4b76d4"}
        ]),
        true
    );

    rect(115,295,40,40,"#ffef9c");
    rect(175,295,40,40,"#ffef9c");

    rect(150,330,40,50,"#7d4d24", true);

    tri(
        75,260,165,190,255,260,
        grad(75,200,255,260,[
            {stop:0,color:"#ff6a3b"},
            {stop:1,color:"#d44724"}
        ])
    );
}

/* ======================================================
   ÁRBOL
====================================================== */

function drawTree() {
    rect(420,280,35,110,"#7c542a");

    const leaves = [
        [420,240],[450,245],[395,250],[430,215],[465,265],[390,265]
    ];
    leaves.forEach(l=>{
        circle(l[0],l[1],30,
            radial(l[0],l[1],5,30,[
                {stop:0,color:"#8bf27b"},
                {stop:1,color:"#56b759"}
            ]),
            true
        );
    });
}

/* ======================================================
   GATO CARTOON (menos real, más bonito)
====================================================== */

function drawCat() {
    rect(
        250,270,130,80,
        grad(250,270,380,350,[
            {stop:0,color:"#ffa346"},
            {stop:1,color:"#d6741a"}
        ]),
        true
    );

    circle(235,250,35,
        radial(235,250,5,35,[
            {stop:0,color:"#8fb2ff"},
            {stop:1,color:"#5b79d7"}
        ]),
        true
    );

    tri(210,230,230,210,245,240,"#ffe27d");
    tri(240,240,260,210,275,230,"#ffe27d");

    circle(225,245,6,"lime");
    circle(248,245,6,"lime");

    circle(235,258,4,"pink");

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=2;
    ctx.arc(235,260,10,0,Math.PI);
    ctx.stroke();

    const whisk = [
        [210,255,185,250],
        [210,260,185,260],
        [210,265,185,270],

        [260,255,285,250],
        [260,260,285,260],
        [260,265,285,270]
    ];

    whisk.forEach(w=>{
        ctx.beginPath();
        ctx.moveTo(w[0],w[1]);
        ctx.lineTo(w[2],w[3]);
        ctx.stroke();
    });

    rect(265,350,25,55,"#6c8aff",true);
    rect(305,350,25,55,"#6c8aff",true);
    rect(345,350,25,55,"#d45c19",true);

    circle(278,405,12,"#4f6fd0");
    circle(318,405,12,"#4f6fd0");
    circle(358,405,12,"#c44a14");

    let x=380;
    for(let i=0;i<5;i++){
        circle(x,290,16,
            radial(x,290,4,16,[
                {stop:0,color:"#ffe48e"},
                {stop:1,color:"#d7b45a"}
            ])
        );
        x+=20;
    }
}

/* ======================================================
   DIBUJAR TODO
====================================================== */

function drawScene(){
    drawSky();
    drawGround();

    cloud(90,90);
    cloud(210,65);
    cloud(330,110);

    drawSun();
    drawHouse();
    drawTree();
    drawCat();
}

drawScene();