// import { ground } from './js/background.js';
import { drawRock, drawPath, drawShapedPath } from './js/background.js';
import { drawPerso, player } from './js/perso.js';
import { drawHouse, house, drawPlant, plant, plant1, plant2, plant3,rock, isColliding, drawSword, sword } from './js/object.js';
import { input } from './js/input.js';
// recuperation des infos du html
const canvas = document.getElementById("game");

// creation du pinceau
const ctx = canvas.getContext("2d");
export let swordVisibility=false;
export let isAttacking = false;
export let attackAngle = 0;
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
  drawRock(ctx, rock.x, rock.y, rock.w);                 // 5. Rochers
  drawPlant(ctx,plant.x,plant.y);
  drawPlant(ctx,plant1.x,plant1.y);
  drawPlant(ctx,plant2.x,plant2.y);
  drawPlant(ctx,plant3.x,plant3.y);
  drawHouse(ctx, 320, 280);                     // 6. Maison
  
  // drawPerso(ctx, 400, 435);                     // 7. Joueur (toujours en dernier) / x,y
  // --- Déplacement ---
let moving = false;
const oldX = player.x;
const oldY = player.y;
if (input.keys.has("ArrowUp") || input.keys.has("z")) {
  player.y -= player.speed;
  player.direction = "up";
  moving = true;
  console.log("x : ",player.x, "|y : ",player.y , "| house.x : ", house.x, "|hous.y : ", house.y)
}
if (input.keys.has("ArrowDown") || input.keys.has("s")) {
  player.y += player.speed;
  player.direction = "down";
  moving = true;
  console.log("x : ",player.x, "|y : ",player.y , "| house.x : ", house.x, "|hous.y : ", house.y)
}
if (input.keys.has("ArrowLeft") || input.keys.has("q")) {
  player.x -= player.speed;
  player.direction = "left";
  moving = true;
  console.log("x : ",player.x, "|y : ",player.y , "| house.x : ", house.x, "|hous.y : ", house.y)
}
if (input.keys.has("ArrowRight") || input.keys.has("d")) {
  player.x += player.speed;
  player.direction = "right";
  moving = true;
  console.log("x : ",player.x, "|y : ",player.y , "| house.x : ", house.x, "|hous.y : ", house.y)
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
const obstacles = [
  house,
  rock,
  plant,
  plant1,
  plant2,
  plant3
];
// Si collision avec la maison → retour à l’ancienne position
for (const obj of obstacles) {
  if (isColliding(player, obj)) {
    player.x = oldX;
    player.y = oldY;
    console.log("collision")
    break;
  }
}
if (input.keys.has(" ") && !isAttacking) {
  isAttacking = true;
  swordVisibility = true;
  attackAngle = -60; // point de départ du coup

  setTimeout(() => {
    swordVisibility = false;
    isAttacking = false;
    attackAngle = 0;
  }, 300);
}

else if(input.keys.has(" ") && (isAttacking==true)){
  swordVisibility=false;
}



if (swordVisibility) {
  if ((player.direction === "up")||(player.direction==="left")) {
  if (swordVisibility) drawSword(ctx); // Épée derrière seulement si visible
  drawPerso(ctx, player);
} else {
  drawPerso(ctx, player);
  if (swordVisibility) drawSword(ctx); // Épée devant seulement si visible
}
} else {
  // ❌ Ne dessine PAS l’épée du tout
  drawPerso(ctx, player);        // Juste le joueur
}
  

ctx.restore(); 
  requestAnimationFrame(render); // 🔁 boucle infinie
}

// ==============================
// Lancer la boucle
// ==============================
render();

// Redimensionnement si la fenêtre change
// window.addEventListener("resize", render);

// Debug souris
document.addEventListener("mousemove", (el) => {
  console.log("x :", el.clientX, "| y:", el.clientY);
});
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // appelé une seule fois au début

console.log("✅ Canvas chargé");
