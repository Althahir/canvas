// import { ground } from './js/background.js';
import { drawRock, drawPath, drawShapedPath, drawSwordplant, swordplant, drawCurvedPath,drawSol, drawSolKokiri  } from './js/background.js';
import { drawPerso, player, drawHearts,loadPlayerSprites, drawMoney, rubisImage,drawSalam , salam, drawTriforce,personnage,drawPersonnage } from './js/perso.js';
import { drawHouse,drawPorte, house,porte, drawPlant, plant, plant1, plant2, plant3, plant4, plant5,plant6,plant7,plant8,plant9,plant10, rock, isColliding, drawSword, sword} from './js/object.js';
import { plant11,plant12,plant13,plant14,plant15,plant16,plant17,plant18,plant19} from './js/object.js'
import{plant20,plant21,plant22,plant23,plant24,plant25,plant26,plant27,plant28, plant29 } from './js/object.js';
import{plant30,plant31,plant32,plant33,plant34,plant35,plant36,plant37,plant38, plant39, house1, porte1 } from './js/object.js';
import {tree, tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8,tree9,tree10,tree11, tree12,tree13, tree14,tree15,tree16,tree17, tree18, tree19,tree20,tree21,drawTree} from './js/object.js';
import{herbe1,herbe2,herbe3,herbe4,herbe5, herbe6,herbe7,herbe8,herbe9,herbe10,herbe11,herbe12,herbe13,herbe14,herbe15,herbe16,herbe17,herbe18,drawMur}from './js/object.js'
import{mur,mur1,mur2,mur3,mur4,mur5, mur6,mur7,mur8,mur9,mur10,mur11,mur12,mur13,mur14,mur15,mur16,mur17,mur18,mur19,mur20,mur21,mur22,mur23,mur24,mur25}from './js/object.js'
import{mur26,mur27,mur28,mur29,mur30,mur31, mur32,mur33,mur34,mur35,mur36,mur37,mur38,mur39,mur40,mur41,mur42,mur43,mur44,mur45,mur46,mur47,mur48}from './js/object.js'
import{mur49,mur50,mur51,mur52,mur53,mur54,mur55,mur56,mur57,mur58,mur59,mur60,mur61,mur62,mur63,mur64,mur65,mur66,mur67,mur68,mur69, mur70,mur71}from './js/object.js'
import{herbe19,herbe20,herbe21,herbe22,herbe23,herbe24,herbe25,herbe26,herbe27,herbe28,herbe29,herbe30}from './js/object.js'
import{caisse,drawCaisse,trou,drawTrou,pousserCaisse,obstaclesCaisse,stopCaisse}from './js/object.js'
import {storm, drawStorm, herbe, drawHerbe, fontaine, drawFontaine, drawLac, lac, pied, drawPied, goron, drawGoron, zora, drawZora,kokiri, drawKokiri} from './js/object.js';
import {runRevolution,kokiriReussi,tropheeKokiri} from './js/object.js';
import { input } from './js/input.js';
import{DrawMessage1, DrawMessage2, drawTirerEpee} from './js/message.js'
// recuperation des infos du html
const canvas = document.getElementById("game");

// creation du pinceau
const ctx = canvas.getContext("2d");
export let swordVisibility=false;
export let isAttacking = false;
export let messageDebut=true;

// function isCenteredOn(a, b, eps = 6) {
//   const ax = a.x + a.w / 2, ay = a.y + a.h / 2;
//   const bx = b.x + b.w / 2, by = b.y + b.h / 2;
//   return Math.abs(ax - bx) <= eps && Math.abs(ay - by) <= eps;
// }

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
  drawPath(ctx, 1383, 1175, 80, 550,90)
    drawPath(ctx, 1813, 738, 80, 550,0)
    drawShapedPath(ctx, 1853, 8, "left", 65, 654, 165, 0); // 2. pate d'oie
    drawShapedPath(ctx, -373, 1450, "right", 65, 804, 485, 270); // 2. pate d'oie
    // drawShapedPath(ctx, 433, 1280, "left", 65, 654, 165, 180); // 2. pate d'oie
    drawShapedPath(ctx, -973, 1450, "left", 65, 804, 205, 270); // 2. pate d'oie
        drawShapedPath(ctx, -170, 3150, "right", 65, 804, 485, 180); // 2. pate d'oie


// drawCurvedPath(ctx, 433, 1450, "left", 165, 65, 180);//virage
drawCurvedPath(ctx, 1853, 1450, "left", 165, 65, 90);//virage





  // drawRock(ctx, rock.x, rock.y, rock.w); 
  drawPied(ctx,pied.x,pied.y);
  drawSwordplant(ctx,swordplant.x,swordplant.y);               // 5. Rochers
  drawSol(ctx,932,557);    
  drawSolKokiri(ctx,2285,-450);               // 5. Rochers5
  drawSolKokiri(ctx,1813,-450);               // 5. Rochers5
  drawSolKokiri(ctx,1341,-450);               // 5. Rochers5
  drawSolKokiri(ctx,869,-450);               // 5. Rochers5
  drawSolKokiri(ctx,2285,-923);               // 5. Rochers5
  drawSolKokiri(ctx,1813,-923);               // 5. Rochers5
  drawSolKokiri(ctx,1341,-923);               // 5. Rochers5
  drawSolKokiri(ctx,869,-923);               // 5. Rochers5
  drawSolKokiri(ctx,2285,-1396);               // 5. Rochers5
  drawSolKokiri(ctx,1813,-1396);               // 5. Rochers5
  drawSolKokiri(ctx,1341,-1396);               // 5. Rochers5
  drawSolKokiri(ctx,869,-1396);  
    // 5. Rochers5
  drawMur(ctx,mur.x,mur.y);             // 5. Rochers5
  drawMur(ctx,mur1.x,mur1.y);               // 5. Rochers5
  drawMur(ctx,mur2.x,mur2.y);               // 5. Rochers5
  drawMur(ctx,mur3.x,mur3.y);               // 5. Rochers5
  drawMur(ctx,mur4.x,mur4.y);               // 5. Rochers5
  drawMur(ctx,mur5.x,mur5.y);               // 5. Rochers5
  drawMur(ctx,mur6.x,mur6.y);               // 5. Rochers5
  drawMur(ctx,mur7.x,mur7.y);               // 5. Rochers5
  drawMur(ctx,mur8.x,mur8.y);               // 5. Rochers5
  drawMur(ctx,mur9.x,mur9.y);               // 5. Rochers5
  drawMur(ctx,mur10.x,mur10.y);               // 5. Rochers5
  drawMur(ctx,mur11.x,mur11.y);               // 5. Rochers5
  drawMur(ctx,mur12.x,mur12.y);               // 5. Rochers5
  drawMur(ctx,mur13.x,mur13.y);               // 5. Rochers5
  drawMur(ctx,mur14.x,mur14.y);               // 5. Rochers5
  drawMur(ctx,mur15.x,mur15.y);               // 5. Rochers5
  drawMur(ctx,mur16.x,mur16.y);               // 5. Rochers5
  drawMur(ctx,mur17.x,mur17.y);               // 5. Rochers5
  drawMur(ctx,mur18.x,mur18.y);               // 5. Rochers5
  drawMur(ctx,mur19.x,mur19.y);               // 5. Rochers5
  drawMur(ctx,mur20.x,mur20.y);               // 5. Rochers5
  drawMur(ctx,mur21.x,mur21.y);               // 5. Rochers5
  drawMur(ctx,mur22.x,mur22.y);               // 5. Rochers5
  drawMur(ctx,mur23.x,mur23.y);               // 5. Rochers5
  drawMur(ctx,mur24.x,mur24.y);               // 5. Rochers5
  drawMur(ctx,mur25.x,mur25.y);               // 5. Rochers5
  drawMur(ctx,mur26.x,mur26.y);               // 5. Rochers5
  drawMur(ctx,mur27.x,mur27.y);               // 5. Rochers5
  drawMur(ctx,mur28.x,mur28.y);               // 5. Rochers5
  drawMur(ctx,mur29.x,mur29.y);               // 5. Rochers5
  drawMur(ctx,mur30.x,mur30.y);               // 5. Rochers5
  drawMur(ctx,mur31.x,mur31.y);               // 5. Rochers5
  drawMur(ctx,mur32.x,mur32.y);               // 5. Rochers5
  drawMur(ctx,mur33.x,mur33.y);               // 5. Rochers5
  drawMur(ctx,mur34.x,mur34.y);               // 5. Rochers5
  drawMur(ctx,mur35.x,mur35.y);               // 5. Rochers5
  drawMur(ctx,mur36.x,mur36.y);               // 5. Rochers5
  drawMur(ctx,mur37.x,mur37.y);               // 5. Rochers5
  drawMur(ctx,mur38.x,mur38.y);               // 5. Rochers5
  drawMur(ctx,mur39.x,mur39.y);               // 5. Rochers5
  drawMur(ctx,mur40.x,mur40.y);               // 5. Rochers5
  drawMur(ctx,mur41.x,mur41.y);               // 5. Rochers5
  drawMur(ctx,mur42.x,mur42.y);               // 5. Rochers5
  drawMur(ctx,mur43.x,mur43.y);               // 5. Rochers5
  drawMur(ctx,mur44.x,mur44.y);               // 5. Rochers5
  drawMur(ctx,mur45.x,mur45.y);               // 5. Rochers5
  drawMur(ctx,mur46.x,mur46.y);               // 5. Rochers5
  drawMur(ctx,mur47.x,mur47.y);               // 5. Rochers5
  drawMur(ctx,mur48.x,mur48.y);               // 5. Rochers5
  drawMur(ctx,mur49.x,mur49.y);               // 5. Rochers5
  drawMur(ctx,mur50.x,mur50.y);               // 5. Rochers5
  drawMur(ctx,mur51.x,mur51.y);               // 5. Rochers5
  drawMur(ctx,mur52.x,mur52.y);               // 5. Rochers5
  drawMur(ctx,mur53.x,mur53.y);               // 5. Rochers5
  drawMur(ctx,mur54.x,mur54.y);               // 5. Rochers5
  drawMur(ctx,mur55.x,mur55.y);               // 5. Rochers5
  drawMur(ctx,mur56.x,mur56.y);               // 5. Rochers5
  drawMur(ctx,mur57.x,mur57.y);               // 5. Rochers5
  drawMur(ctx,mur58.x,mur58.y);               // 5. Rochers5
  drawMur(ctx,mur59.x,mur59.y);               // 5. Rochers5
  drawMur(ctx,mur60.x,mur60.y);               // 5. Rochers5
  drawMur(ctx,mur61.x,mur61.y);               // 5. Rochers5
  drawMur(ctx,mur62.x,mur62.y);               // 5. Rochers5
  drawMur(ctx,mur63.x,mur63.y);               // 5. Rochers5
  drawMur(ctx,mur64.x,mur64.y);               // 5. Rochers5
  drawMur(ctx,mur65.x,mur65.y);               // 5. Rochers5

  //mur enigme
  drawMur(ctx,mur66.x,mur66.y);               // 5. Rochers5
  drawMur(ctx,mur67.x,mur67.y);               // 5. Rochers5
  drawMur(ctx,mur68.x,mur68.y);               // 5. Rochers5
  drawMur(ctx,mur69.x,mur69.y);               // 5. Rochers5
  drawMur(ctx,mur70.x,mur70.y);               // 5. Rochers5
  drawMur(ctx,mur71.x,mur71.y);               // 5. Rochers5
  drawCaisse(ctx,caisse.x,caisse.y);               // 5. Rochers5
  drawTrou(ctx,trou.x,trou.y);               // 5. Rochers5

drawPersonnage(ctx,personnage.x,personnage.y);

  // drawPlant(ctx,plant.x,plant.y);
  // drawPlant(ctx,plant1.x,plant1.y);
  // drawPlant(ctx,plant2.x,plant2.y);
  // drawPlant(ctx,plant3.x,plant3.y);
  // drawPlant(ctx,plant4.x,plant4.y);
  // drawPlant(ctx,plant5.x,plant5.y);
  // drawPlant(ctx,plant6.x,plant6.y);
  // drawPlant(ctx,plant7.x,plant7.y);
  // drawPlant(ctx,plant8.x,plant8.y);
  // drawPlant(ctx,plant9.x,plant9.y);
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
  drawPlant(ctx,plant20.x,plant20.y);
  drawPlant(ctx,plant21.x,plant21.y);
  drawPlant(ctx,plant22.x,plant22.y);
  drawPlant(ctx,plant23.x,plant23.y);
  drawPlant(ctx,plant24.x,plant24.y);
  drawPlant(ctx,plant25.x,plant25.y);
  drawPlant(ctx,plant26.x,plant26.y);
  drawPlant(ctx,plant27.x,plant27.y);
  drawPlant(ctx,plant28.x,plant28.y);
  drawPlant(ctx,plant29.x,plant29.y);
  drawPlant(ctx,plant30.x,plant30.y);
  drawPlant(ctx,plant31.x,plant31.y);
  drawPlant(ctx,plant32.x,plant32.y);
  drawPlant(ctx,plant33.x,plant33.y);
  drawPlant(ctx,plant34.x,plant34.y);
  drawPlant(ctx,plant35.x,plant35.y);
  drawPlant(ctx,plant36.x,plant36.y);
  drawPlant(ctx,plant37.x,plant37.y);
  drawPlant(ctx,plant38.x,plant38.y);
  drawPlant(ctx,plant39.x,plant39.y);

  drawHouse(ctx, house.x, house.y);                     // 6. Maison
  drawHouse(ctx, house1.x, house1.y);                     // 6. Maison
  drawPorte(ctx, porte.x, porte.y);    
  drawPorte(ctx, porte1.x, porte1.y);    
                   // 6. Maison
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
  drawTree(ctx, tree13.x, tree13.y);  
  drawTree(ctx, tree14.x, tree14.y);                   // 6. Maison
  // drawTree(ctx, tree15.x, tree15.y);                     // 6. Maison
  drawTree(ctx, tree16.x, tree16.y);                     // 6. Maison
  drawTree(ctx, tree17.x, tree17.y);                     // 6. Maison
  drawTree(ctx, tree18.x, tree18.y);                     // 6. Maison
  drawTree(ctx, tree19.x, tree19.y);     
  drawTree(ctx, tree20.x, tree20.y);                 // 6. Maison
  drawTree(ctx, tree21.x, tree21.y); 
                  // 6. Maison
  drawHerbe(ctx, herbe.x, herbe.y); 
  drawHerbe(ctx, herbe1.x, herbe1.y); 
  drawHerbe(ctx, herbe2.x, herbe2.y); 
  drawHerbe(ctx, herbe3.x, herbe3.y); 
  drawHerbe(ctx, herbe4.x, herbe4.y); 
  drawHerbe(ctx, herbe5.x, herbe5.y); 
  drawHerbe(ctx, herbe7.x, herbe7.y); 
  drawHerbe(ctx, herbe8.x, herbe8.y); 
  drawHerbe(ctx, herbe9.x, herbe9.y); 
  drawHerbe(ctx, herbe10.x,herbe10.y); 
  drawHerbe(ctx, herbe11.x, herbe11.y); 
  drawHerbe(ctx, herbe12.x, herbe12.y); 
  drawHerbe(ctx, herbe13.x, herbe13.y); 
  drawHerbe(ctx, herbe14.x, herbe14.y); 
  drawHerbe(ctx, herbe15.x, herbe15.y); 
  drawHerbe(ctx, herbe16.x, herbe16.y); 
  drawHerbe(ctx, herbe17.x, herbe17.y); 
  drawHerbe(ctx, herbe18.x, herbe18.y); 
  drawHerbe(ctx, herbe19.x, herbe19.y); 
  drawHerbe(ctx, herbe20.x, herbe20.y); 
  drawHerbe(ctx, herbe21.x, herbe21.y); 
  drawHerbe(ctx, herbe22.x, herbe22.y); 
  drawHerbe(ctx, herbe23.x, herbe23.y); 
  drawHerbe(ctx, herbe24.x, herbe24.y); 
  drawHerbe(ctx, herbe25.x, herbe25.y); 
  drawHerbe(ctx, herbe26.x, herbe26.y); 
  drawHerbe(ctx, herbe27.x, herbe27.y); 
  drawHerbe(ctx, herbe28.x, herbe28.y); 
  drawHerbe(ctx, herbe29.x, herbe29.y); 
  drawHerbe(ctx, herbe30.x, herbe30.y); 

  drawLac(ctx, lac.x, lac.y);
   
  // drawSalam(ctx, salam)                  
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
           
if (player.kokiri==1)   {
drawKokiri(ctx, kokiri.x, kokiri.y); 
}
if (player.goron==1){
drawGoron(ctx, goron.x, goron.y);  
}
if (player.zora==1){
drawZora(ctx, zora.x, zora.y); 
}
if (player.triforce==1){
  drawTriforce(ctx)
}
if (kokiriReussi==true){
  drawKokiri(ctx,tropheeKokiri.x,tropheeKokiri.y);
  caisse.w=0;
  caisse.h=0;
}

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
  house1,
  personnage,
  // plant,
  // plant1,
  // plant2,
  // plant3, 
  // plant4, 
  // plant5, 
  // plant6, 
  // plant7, 
  // plant8, 
  // plant9, 
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
  plant20, 
  plant21, 
  plant22, 
  plant23, 
  plant24, 
  plant25, 
  plant26, 
  plant27, 
  plant28, 
  plant29, 
  plant30, 
  plant31, 
  plant32, 
  plant33, 
  plant34, 
  plant35, 
  plant36, 
  plant37, 
  plant38, 
  plant39, 
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
  // tree15, 
  tree16, 
  tree17, 
  tree18, 
  tree19, 
  tree20,
  tree21,
  mur,
  mur1,
  mur2,
  mur3,
  mur4,
  mur5,
  mur6,
  mur7,
  mur8,
  mur9,
  mur10,
  mur11,
  mur12,
  mur13,
  mur14,
  mur15,
  mur16,
  mur17,
  mur18,
  mur19,
  mur20,
  mur21,
  mur22,
  mur23,
  mur24,
  mur25,
  mur26,
  mur27,
  mur28,
  mur29,
  mur30,
  mur31,
  mur32,
  mur33,
  mur34,
  mur35,
  mur36,
  mur37,
  mur38,
  mur39,
  mur40,
  mur41,
  mur42,
  mur43,
  mur44,
  mur45,
  mur46,
  mur47,
  mur48,
  mur49,
  mur40,
  mur41,
  mur42,
  mur43,
  mur44,
  mur45,
  mur46,
  mur47,
  mur48,
  mur49,
  mur50,
  mur51,
  mur52,
  mur53,
  mur54,
  mur55,
  mur56,
  mur57,
  mur58,
  mur59,
  mur60,
  mur61,
  mur62,
  mur63,
  mur64,
  mur65,
  mur66,
  mur67,
  mur68,
  mur69,
  mur70,
  mur71,
  fontaine,
  storm,
  // swordplant
  
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
  plant20, 
  plant21, 
  plant22, 
  plant23, 
  plant24, 
  plant25, 
  plant26, 
  plant27, 
  plant28, 
  plant29, 
  plant30, 
  plant31, 
  plant32, 
  plant33, 
  plant34, 
  plant35, 
  plant36, 
  plant37, 
  plant38, 
  plant39, 
  // plant40, 
  // herbe,
  // herbe1,
  // herbe2,
  // herbe3,
  // herbe4,
  // herbe5,
  // herbe6,
  // herbe7,
  // herbe8,
  // herbe9,
  // herbe10,
  // herbe11,
  // herbe12,
  // herbe13,
  // herbe14,
  // herbe15,
  // herbe16,
  // herbe17,
  // herbe18,
  // herbe19,
  // herbe20,
  // herbe21,
  // herbe22,
  // herbe23,
  // herbe24,
  // herbe25,
  // herbe26,
  // herbe27,
  // herbe28,
  // herbe29,
  // herbe30
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
    porte.x=-10000,
    porte.y=-10000 // DOIT MAINTENANT S'AFFICHER
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
        storm.x=-10000;
        storm.y=-10000;
        player.bouclier=1

      }
  })
}
  if (isColliding(player, personnage)) {
   DrawMessage2(ctx,150,150)
}
if (player.bouclier==1){
  player.max_life=6;
  player.life=6;
}
 if((player.kokiri==1)&&(player.goron==1)&&(player.zora==1))     {
  if ((player.x>=912)&&(player.x<=1030)&&(player.y>=512)&&(player.y<=630)){
    // console.log("hello")
    drawTirerEpee(ctx)
      document.addEventListener("keydown",(e)=>{
      if (e.code=="KeyN"){
        player.triforce=1,
        player.kokiri=0,
        player.goron=0,
        player.zora=0

      }
    })
  }
 }
if (isColliding(player, caisse)) {
  // recule le joueur (ou remets oldX/oldY)
  if (player.direction === "left")  player.x += player.speed;
  if (player.direction === "right") player.x -= player.speed;
  if (player.direction === "up")    player.y += player.speed;
  if (player.direction === "down")  player.y -= player.speed;

  if (!caisse.isMoving) {
    pousserCaisse(player.direction, caisse, obstaclesCaisse, trou);
  }
}
if (isColliding(player,tropheeKokiri)){
  tropheeKokiri.x=-10000;
  tropheeKokiri.y=-10000;
  player.kokiri=1
  player.x=400;
  player.y=480;

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
    obj.x = -10000;
    obj.y = -10000;
    // console.log("collision avec l'objet situé :", obj)
    break;
  }
}

// Si collision de l'epee avec objet decoupable disparition de l'objet
for (const coupe of coupable) {
  if (isColliding(sword, coupe)) {
    coupe.x = -10000;
    coupe.y = -10000;
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
  else if ((distanceXlac>=20)||(distanceYlac>=0)||(distanceXlac<=(lac.w-50))||(distanceYlac<=lac.y)){
    player.eau=0
  }
  // console.log(distanceXlac, distanceYlac)
drawHearts(ctx, player.life, player.max_life); // ❤️ affichage des vies
  DrawMessage1(ctx,150,150,messageDebut);
document.addEventListener("keydown", (e) => {
    // La condition `if (messageDebut)` est importante ici.
    // Elle garantit que l'appui sur "Enter" n'agit que lorsque le message est affiché.
    if (e.code === "Enter" && messageDebut === true) {
        messageDebut = false;
    }
});
// Assurez-vous que 'rubisImage' est l'objet Image que vous avez pré-chargé
drawMoney(ctx, rubisImage, player.money, 50, 130);// ctx.drawImage(rubis,50,150,size,size,x,y,size,size)

// console.log("swordplant:",swordplant.x,swordplant.y,"|hero:",player.x,player.y)
  if (isColliding(player, swordplant)){
    if(player.triforce==1) {
    drawTirerEpee(ctx);
    document.addEventListener("keydown",(e)=>{
      if (e.code=="KeyN"){
        swordplant.x=-10000;
        swordplant.y=-10000;
        player.epee=1

      }
    })
  }
  else{
    DrawMessage2(ctx,150,150);
  }

  }
// console.log("Coordonnées Porte :", player.x, player.y);
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