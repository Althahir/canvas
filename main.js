// import { ground } from './js/background.js';
import { drawRock, drawPath, drawShapedPath, drawSwordplant, swordplant, drawCurvedPath } from './js/background.js';
import { drawPerso, player, drawHearts,loadPlayerSprites, drawDownEau,drawLeftEau,drawRightEau,drawUpEau  } from './js/perso.js';
import { drawHouse,drawPorte, house,porte, drawPlant, plant, plant1, plant2, plant3, plant4, plant5,plant6,plant7,plant8,plant9,plant10, rock, isColliding, drawSword, sword, tree, tree1, tree2 } from './js/object.js';
import { plant11,plant12,plant13,plant14,plant15,plant16,plant17,plant18,plant19 } from './js/object.js';
import { tree3, tree4, tree5, tree6, tree7, tree8,tree9,tree10,tree11, tree12,tree13,tree14,tree15,tree16,tree17,tree18,tree19, drawTree} from './js/object.js';
import {storm, drawStorm, herbe, drawHerbe, fontaine, drawFontaine, drawLac, lac, pied, drawPied, goron, drawGoron, zora, drawZora,kokiri, drawKokiri} from './js/object.js';
import {runRevolution} from './js/object.js';
import { input } from './js/input.js';
import{drawTirerEpee} from './js/message.js'
// recuperation des infos du html
const canvas = document.getElementById("game");

// creation du pinceau
const ctx = canvas.getContext("2d");
export let swordVisibility=false;
export let isAttacking = false;


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
 // déplace toute la scène
  // === Ordre de rendu ===
  // ground(ctx, width, height);                   // 1. Fond
  ctx.save();            // 🔒 garde l’état du canvas
  ctx.translate(camX, camY);
  drawPath(ctx, 823, 1150, 80, 600,90)
  // drawPath(ctx, x, y, width, height, angle = 0)
  drawShapedPath(ctx, 433, 1280, "left", 65, 654, 165, 180); // 2. Chemin incurvé /
drawCurvedPath(ctx, 433, 1450, "left", 165, 65, 180);



  // drawRock(ctx, rock.x, rock.y, rock.w); 
  drawPied(ctx,pied.x,pied.y);
  drawSwordplant(ctx,swordplant.x,swordplant.y);               // 5. Rochers
  drawPlant(ctx,plant.x,plant.y);
  drawPlant(ctx,plant1.x,plant1.y);
  drawPlant(ctx,plant2.x,plant2.y);
  drawPlant(ctx,plant3.x,plant3.y);
  drawPlant(ctx,plant4.x,plant4.y);
  drawPlant(ctx,plant5.x,plant5.y);
  drawPlant(ctx,plant6.x,plant6.y);
  drawPlant(ctx,plant7.x,plant7.y);
  drawPlant(ctx,plant8.x,plant8.y);
  drawPlant(ctx,plant9.x,plant9.y);
  drawPlant(ctx,plant10.x,plant10.y);
  drawPlant(ctx,plant11.x,plant11.y);
  drawPlant(ctx,plant12.x,plant12.y);
  drawPlant(ctx,plant13.x,plant13.y);
  drawPlant(ctx,plant14.x,plant14.y);
  drawPlant(ctx,plant15.x,plant15.y);
  drawPlant(ctx,plant16.x,plant16.y);
  drawPlant(ctx,plant17.x,plant17.y);
  drawPlant(ctx,plant18.x,plant18.y);
  drawPlant(ctx,plant19.x,plant19.y);
  drawHouse(ctx, house.x, house.y);                     // 6. Maison
  drawPorte(ctx, porte.x, porte.y);                     // 6. Maison
  drawTree(ctx, tree.x, tree.y);                     // 6. Maison
  drawTree(ctx, tree1.x, tree1.y);                     // 6. Maison
  drawTree(ctx, tree2.x, tree2.y);                     // 6. Maison
  drawTree(ctx, tree3.x, tree3.y);                     // 6. Maison
  drawTree(ctx, tree4.x, tree4.y);                     // 6. Maison
  drawTree(ctx, tree5.x, tree5.y);                     // 6. Maison
  drawTree(ctx, tree6.x, tree6.y);                     // 6. Maison
  drawTree(ctx, tree7.x, tree7.y);                     // 6. Maison
  drawTree(ctx, tree8.x, tree8.y);                     // 6. Maison
  drawTree(ctx, tree9.x, tree9.y);                     // 6. Maison
  drawTree(ctx, tree10.x, tree10.y);                     // 10. Maison
  drawTree(ctx, tree11.x, tree11.y);                     // 6. Maison
  drawTree(ctx, tree12.x, tree12.y);                     // 6. Maison
  drawTree(ctx, tree14.x, tree14.y);                     // 6. Maison
  drawTree(ctx, tree15.x, tree15.y);                     // 6. Maison
  drawTree(ctx, tree16.x, tree16.y);                     // 6. Maison
  drawTree(ctx, tree17.x, tree17.y);                     // 6. Maison
  drawTree(ctx, tree18.x, tree18.y);                     // 6. Maison
  drawTree(ctx, tree19.x, tree19.y);     
  drawTree(ctx, tree13.x, tree13.y);                 // 6. Maison
  drawHerbe(ctx, herbe.x, herbe.y); 
  drawLac(ctx, lac.x, lac.y);                     
  // drawDownEau(ctx, lac.x, lac.y);                     
  // drawLeftEau(ctx, lac.x, lac.y);                     
  // drawUpEau(ctx, lac.x, lac.y);                     
  // drawRightEau(ctx, lac.x, lac.y);                     
  // ===================================
// DÉMARRAGE DE LA RÉVOLUTION
// ===================================
// 1. Mise à jour des positions (x, y) de goron, zora et kokiri
// Ceci modifie les objets eux-mêmes (goron.x, goron.y, etc.)
runRevolution(); 

// 2. Dessin des bijoux aux nouvelles positions
// (Les fonctions drawXxx gèrent le redimensionnement et le centrage)
drawGoron(ctx, goron.x, goron.y);           
drawZora(ctx, zora.x, zora.y);           
drawKokiri(ctx, kokiri.x, kokiri.y);           
// ===================================                
  drawFontaine(ctx, fontaine.x, fontaine.y);                     // 6. Maison
  drawStorm(ctx, storm.x, storm.y);                     // 6. Maison



  // ⚠️ N'oubliez pas d'appeler cette fonction une fois au début
loadPlayerSprites();
  // drawPerso(ctx, 400, 435);                     // 7. Joueur (toujours en dernier) / x,y
  // --- Déplacement ---
let moving = false;
const oldX = player.x;
const oldY = player.y;
if (input.keys.has("ArrowUp") || input.keys.has("z")) {
  player.y -= player.speed;
  player.direction = "up";
  moving = true;
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

const obstacles = [
  house,
  // rock,
  plant,
  plant1,
  plant2,
  plant3, 
  plant4, 
  plant5, 
  plant6, 
  plant7, 
  plant8, 
  plant9, 
  plant10, 
  plant11, 
  plant12, 
  plant13, 
  plant14, 
  plant15, 
  plant16, 
  plant17, 
  plant18, 
  plant19, 
  tree,
  tree1,
  tree2,
  tree3,
  tree4, 
  tree5, 
  tree6, 
  tree7, 
  tree8, 
  tree9, 
  tree10, 
  tree11, 
  tree12,
  tree13, 
  tree14, 
  tree15, 
  tree16, 
  tree17, 
  tree18, 
  tree19, 
  storm
  
];
const coupable = [
  plant,
  plant1,
  plant2,
  plant3,
  plant4,
  plant5, 
  plant6, 
  plant7, 
  plant8, 
  plant9, 
  plant10, 
  plant11, 
  plant12, 
  plant13, 
  plant14, 
  plant15, 
  plant16, 
  plant17, 
  plant18, 
  plant19, 
  herbe
];

const bijou=[
  goron,
  kokiri,
  zora
]

// ******************************************************
// MODIFICATION APPLIQUÉE ICI : 
// LA VÉRIFICATION DU TRÉSOR EST MAINTENANT AVANT L'OBSTACLE
// ******************************************************

// VÉRIFICATION DES TRÉSORS (pour que la collision soit enregistrée avant d'être repoussé)
 

// if (input.keys.has(" ") ){ //&& !isAttacking) {
document.addEventListener("keyup",(e)=>{

  if (e.code=="Space"){
    
  isAttacking = true;
  swordVisibility = true;
  sword.attackAngle = -60; // point de départ du coup

  setTimeout(() => {
    sword.attackAngle = -45;
  }, 30);
  setTimeout(() => {
    sword.attackAngle = -30;
  }, 60);
  setTimeout(() => {
    sword.attackAngle = -15;
  }, 90);
  setTimeout(() => {
    sword.attackAngle = 0;
  }, 110);
  setTimeout(() => {
    swordVisibility=false;
    isAttacking = false;
  }, 140);
}  
})
document.addEventListener("keydown",(e)=>{
player.speed=8
  if (e.code=="ControlLeft"){
    // console.log(player.frame)
    player.speed=16;
  }
  })
document.addEventListener("keyup",(e)=>{

  if (e.code=="ControlLeft"){
    // console.log(e.code)
    player.speed=4;
  }
  })
// else if(input.keys.has(" ") && (isAttacking==true)){
//   swordVisibility=false;
// }



if ((swordVisibility)&&(player.epee==1)) {
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
  let distancePorte = player.y-house.y
 if (isColliding(player, porte)) {
    porte.x=-1000,
    porte.y=-1000 // DOIT MAINTENANT S'AFFICHER
  }
  else if(distancePorte>=200){
    porte.x=320,
    porte.y=280
  }
  // else{
  //   porte.x=320,
  //   porte.y=280
  // }


  if (isColliding(player, storm)) {
        drawTirerEpee(ctx);
    document.addEventListener("keydown",(e)=>{
      if (e.code=="KeyN"){
        storm.x=-1000;
        storm.y=-1000;
        player.bouclier=1

      }
  })
}


// Si collision avec les obstacles → retour à l’ancienne position
for (const obj of obstacles) {
  if (isColliding(player, obj)) {
    player.x = oldX;
    player.y = oldY;
    // console.log("collision avec l'objet situé :", obj)
    break;
  }
}
for (const obj of bijou) {
  if (isColliding(player, obj)) {
    obj.x = -1000;
    obj.y = -1000;
    // console.log("collision avec l'objet situé :", obj)
    break;
  }
}

// Si collision de l'epee avec objet decoupable disparition de l'objet
for (const coupe of coupable) {
  if (isColliding(sword, coupe)) {
    coupe.x = -1000;
    coupe.y = -1000;
    // console.log("coupe")
    break;
  }
}
let distanceXlac=lac.x-player.x
let distanceYlac=lac.y-player.y
  if (isColliding(player, lac)) {
    player.eau=1;
    // console.log("collision avec l'objet situé :", obj)
  }
  else if ((distanceXlac>=1)||(distanceYlac>=1)||(distanceXlac<=1)||(distanceYlac<=1)){
    player.eau=0
  }
  
drawHearts(ctx, player.life); // ❤️ affichage des vies





  if (isColliding(player, swordplant)) {
    drawTirerEpee(ctx);
    document.addEventListener("keydown",(e)=>{
      if (e.code=="KeyN"){
        swordplant.x=-1000;
        swordplant.y=-1000;
        player.epee=1

      }
    })
  }


// console.log("Coordonnées Porte :", porte.x, porte.y, porte.w, porte.h);
// console.log("Coordonnées Storm :", storm.x, storm.y, storm.w, storm.h);
  requestAnimationFrame(render); // 🔁 boucle infinie
}

// ==============================
// Lancer la boucle
// ==============================
render();

// Redimensionnement si la fenêtre change
// window.addEventListener("resize", render);

// Debug souris
// document.addEventListener("mousemove", (el) => {
//   console.log("x :", el.clientX, "| y:", el.clientY);
// });
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // appelé une seule fois au début

console.log("✅ Canvas chargé");