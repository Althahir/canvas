// // recuperation des infos du html
// const canvas = document.getElementById("game");
// // creation du pinceau
// const ctx = canvas.getContext("2d");
// import { ground } from './js/background.js';
// import { drawRock } from './js/background.js';
// import { drawPath } from './js/background.js';
// import { drawShapedPath } from './js/background.js';
// import { drawPerso } from './js/perso.js';
// import { drawHouse } from './js/object.js';
// // Fonction pour adapter la taille du canvas à la fenêtre
// function resizeCanvas() {
//   // Récupère le ratio d’écran (utile pour Retina)
//   const ratio = window.devicePixelRatio || 1;

//   // Donne au canvas sa vraie taille en pixels
//   canvas.width = window.innerWidth * ratio;
//   canvas.height = window.innerHeight * ratio;

//   // Rétrécit visuellement pour correspondre aux dimensions CSS
//   canvas.style.width = window.innerWidth + "px";
//   canvas.style.height = window.innerHeight + "px";

//   // Applique le ratio pour que le dessin reste net
//   ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
//   ctx.scale(ratio, ratio);

//   const width = canvas.width / ratio;
//   const height = canvas.height / ratio;

//   ground(ctx, width, height); // ✅ ici
//   drawHouse(ctx,320,280);
//   drawShapedPath(ctx, 433, 965, "left", 65, 82, 145, 180);    //x,y,sens,largeur,
//   drawPath(ctx,392,480,80,260,0);//x,y, largeur, hauteur, angle
//   drawPath(ctx,749,753,80,260,90);//x,y, largeur, hauteur, angle
//   drawRock(ctx,370,961,135); // ✅ ici
//   drawPerso(ctx,420,430)

// }
// // Dimensionnement du canvas
// resizeCanvas();


// // Dimensionnement du canvas a chaque redimmensionnement de l'ecran
// window.addEventListener("resize", resizeCanvas);
// document.addEventListener("mousemove",(el)=>{
//   console.log("x :" , el.clientX , "| y: " , el.clientY);
// })



// // ➕ exemple de dessin
// // ctx.fillStyle = "limegreen";
// // ctx.fillRect(50, 50, 100, 100);

// console.log("✅ Canvas chargé");












// recuperation des infos du html
const canvas = document.getElementById("game");
// creation du pinceau
const ctx = canvas.getContext("2d");




// import { ground } from './js/background.js';
import { drawRock } from './js/background.js';
import { drawPath } from './js/background.js';
import { drawShapedPath } from './js/background.js';
import { drawPerso } from './js/perso.js';
import { player } from './js/perso.js';
import { drawHouse } from './js/object.js';
import { input } from './js/input.js';


// ==============================
// Fonction pour adapter la taille du canvas à la fenêtre
// ==============================
function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;

  // Donne au canvas sa taille "réelle" en pixels
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;

  // Ajuste la taille CSS pour remplir l’écran
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  // Reset transform + mise à l’échelle Retina
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(ratio, ratio);

  return {
    width: canvas.width / ratio,
    height: canvas.height / ratio
  };
}


// ==============================
// Fonction principale de rendu
// ==============================
function render() {
  const { width, height } = resizeCanvas();
  // === Déplacement caméra ===
  const camX = width / 2 - player.x;
  const camY = height / 2 - player.y;
  ctx.save();            // 🔒 garde l’état du canvas
  ctx.translate(camX, camY); // déplace toute la scène
  // === Ordre de rendu ===
  // ground(ctx, width, height);                   // 1. Fond
  drawShapedPath(ctx, 433, 965, "left", 65, 82, 145, 180); // 2. Chemin incurvé /
  drawPath(ctx, 392, 480, 80, 260, 0);          // 3. Chemin vertical
  drawPath(ctx, 749, 753, 80, 260, 90);         // 4. Chemin horizontal
  drawRock(ctx, 370, 961, 135);                 // 5. Rochers
  drawHouse(ctx, 320, 280);                     // 6. Maison
  // drawPerso(ctx, 400, 435);                     // 7. Joueur (toujours en dernier) / x,y
  // --- Déplacement ---
let moving = false;

if (input.keys.has("ArrowUp") || input.keys.has("z")) {
  player.y -= player.speed;
  player.direction = "up";
  moving = true;
  console.log(player.y)
}
if (input.keys.has("ArrowDown") || input.keys.has("s")) {
  player.y += player.speed;
  player.direction = "down";
  moving = true;
}
if (input.keys.has("ArrowLeft") || input.keys.has("q")) {
  player.x -= player.speed;
  player.direction = "left";
  moving = true;
}
if (input.keys.has("ArrowRight") || input.keys.has("d")) {
  player.x += player.speed;
  player.direction = "right";
  moving = true;
}

// --- Animation ---
if (moving) {
  player.frameCount++;
  if (player.frameCount >= player.frameDelay) {
    player.frame = (player.frame + 1) % 3; // alterne 0,1,2
    player.frameCount = 0;
  }
} else {
  player.frame = 0; // perso à l’arrêt → frame "idle"
}

  // --- Dessin joueur ---
  drawPerso(ctx, player);

ctx.restore(); 
  requestAnimationFrame(render); // 🔁 boucle infinie
}

// ==============================
// Lancer la boucle
// ==============================
render();

// Redimensionnement si la fenêtre change
window.addEventListener("resize", render);

// Debug souris
document.addEventListener("mousemove", (el) => {
  console.log("x :", el.clientX, "| y:", el.clientY);
});

console.log("✅ Canvas chargé");
