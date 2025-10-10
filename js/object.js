// js/house.js
import { player } from './perso.js';

// On crée une image JS
const maisonImg = new Image();
maisonImg.src = './assets/maison.png'; // à adapter si elle est dans un sous-dossier
const porteImg = new Image();
porteImg.src = './assets/porte.png'; // image à fournir (voir remarque ci-dessous)
const piedImg = new Image();
piedImg.src = './assets/piedestal.png'; // image à fournir (voir remarque ci-dessous)
const plantImg = new Image();
plantImg.src = './assets/plante.png'; // image à fournir (voir remarque ci-dessous)
const swordImg = new Image();
swordImg.src = './assets/sword.png'; // image à fournir (voir remarque ci-dessous)
const treeImg = new Image();
treeImg.src = './assets/tree.png'; // image à fournir (voir remarque ci-dessous)
const stormImg = new Image();
stormImg.src = './assets/bouclier.png'; // image à fournir (voir remarque ci-dessous)
const herbeImg = new Image();
herbeImg.src = './assets/herbe1.png'; // image à fournir (voir remarque ci-dessous)
const fontaineImg = new Image();
fontaineImg.src = './assets/fontaine.png'; // image à fournir (voir remarque ci-dessous)
const lacImg = new Image();
lacImg.src = './assets/lac1.png'; 
const goronImg = new Image();
goronImg.src = './assets/bijouGoron1.png'; // image à fournir (voir remarque ci-dessous)
const kokiriImg = new Image();
kokiriImg.src = './assets/bijouKokiri1.png'; 
const zoraImg = new Image();
zoraImg.src = './assets/bijouZora1.png'; 

export const sword={
    x:30,
    y:45,
    h:120,//h:player.h,
    w:player.w,
    attackAngle:-60
}
export const pied={
  x:1180,
  y:480,
  w:62,
  h:54
}
export const house = {
  x: 320,   // même position que ton drawHouse
  y: 280,
  w: 216,   // largeur de la maison (ajuste selon ton image)
  h: 200
};
export const house1 = {
  x: 1390,   // même position que ton drawHouse
  y: 280,
  w: 216,   // largeur de la maison (ajuste selon ton image)
  h: 200
};
export const porte = {
  x: 320,   // même position que ton drawHouse
  y: 280,
  w: 216,   // largeur de la maison (ajuste selon ton image)
  h: 200
};
export const porte1 = {
  x: 1390,   // même position que ton drawHouse
  y: 280,
  w: 216,   // largeur de la maison (ajuste selon ton image)
  h: 200
};


export const tree = {
  x: 550,   
  y: 280,
  w: 144,   
  h: 173
};
export const tree1 = {
  x: 690,   
  y: 280,
  w: 144,   
  h: 173
};
export const tree2 = {
  x: 830,  //+140 
  y: 280,
  w: 144,   
  h: 173
};
export const tree3 = {
  x: 970,  //+140 
  y: 280,
  w: 144,   
  h: 173
};
export const tree4 = {
  x: 1110,  //+140 
  y: 280,
  w: 144,   
  h: 173
};
export const tree5 = {
  x: 1250,  //+140 
  y: 280,
  w: 144,   
  h: 173
};

export const tree6 = {
  x: 1250,  //+140 
  y: 450,   //+170
  w: 144,   
  h: 173
};
export const tree7 = {
  x: 1250,  //+140 
  y: 620,   //+170
  w: 144,   
  h: 173
};
export const tree8 = {
  x: 1250,  //+140 
  y: 790,   //+170
  w: 144,   
  h: 173
};
export const tree9 = {
  x: 1250,  //+140 
  y: 960,   //+170
  w: 144,   
  h: 173
};
export const tree10 = {
  x: 1250,  //+140 
  y: 1130,   //+170
  w: 144,   
  h: 173
};
export const tree11 = {
  x: 1110,  //+140 
  y: 1130,   //+170
  w: 144,   
  h: 173
};
export const tree12 = {
  x: 970,  //+140 
  y: 1130,   //+170
  w: 144,   
  h: 173
};
export const tree13 = {
  x: 830,  //+140 
  y: 1130,   //+170
  w: 144,   
  h: 173
};
export const tree14 = {
  x: 690,  //+140 
  y: 1130,   //+170
  w: 144,   
  h: 173
};
export const tree15 = {
  x: 550,  //+140 
  y: 1130,   //+170
  w: 144,   
  h: 173
};
export const tree16 = {
  x: 180,  //+140 
  y: 1130,   //+170
  w: 144,   
  h: 173
};
export const tree17 = {
  x: 180,  //+140 
  y: 960,   //+170
  w: 144,   
  h: 173
};
export const tree18 = {
  x: 180,  //+140 
  y: 790,   //+170
  w: 144,   
  h: 173
};
export const tree19 = {
  x: 180,  //+140 
  y: 620,   //+170
  w: 144,   
  h: 173
};
export const tree20 = {
  x: 180,  //+140 
  y: 450,   //+170
  w: 144,   
  h: 173
};
export const tree21 = {
  x: 180,  //+140 
  y: 280,   //+170
  w: 144,   
  h: 173
};




export const plant={
    x:590,
    y:1350,
    w:45,
    h:43,
}
export const plant1={
    x:630,
    y:1350,
    w:45,
    h:43,
}
export const plant2={
    x:670,
    y:1350,
    w:45,
    h:43,
}
export const plant3={
    x:710,
    y:1350,
    w:45,
    h:43,
}
export const plant4={
    x:750,
    y:1350,
    w:45,
    h:43,
}
export const plant5={
    x:790,
    y:1350,
    w:45,
    h:43,
}
export const plant6={
    x:830,
    y:1350,
    w:45,
    h:43,
}
export const plant7={
    x:870,
    y:1350,
    w:45,
    h:43,
}
export const plant8={
    x:910,
    y:1350,
    w:45,
    h:43,
}
export const plant9={
    x:950,
    y:1350,
    w:45,
    h:43,
}
export const plant10={
    x:590,
    y:1495,
    w:45,
    h:43,
}
export const plant11={
    x:630,
    y:1495,
    w:45,
    h:43,
}
export const plant12={
    x:670,
    y:1495,
    w:45,
    h:43,
}
export const plant13={
    x:710,
    y:1495,
    w:45,
    h:43,
}
export const plant14={
    x:750,
    y:1495,
    w:45,
    h:43,
}
export const plant15={
    x:790,
    y:1495,
    w:45,
    h:43,
}
export const plant16={
    x:830,
    y:1495,
    w:45,
    h:43,
}
export const plant17={
    x:870,
    y:1495,
    w:45,
    h:43,
}
export const plant18={
    x:910,
    y:1495,
    w:45,
    h:43,
}
export const plant19={
    x:950,
    y:1495,
    w:45,
    h:43,
}
export const plant20={
    x:590,
    y:1535,
    w:45,
    h:43,
}
export const plant21={
    x:630,
    y:1535,
    w:45,
    h:43,
}
export const plant22={
    x:670,
    y:1535,
    w:45,
    h:43,
}
export const plant23={
    x:710,
    y:1535,
    w:45,
    h:43,
}
export const plant24={
    x:750,
    y:1535,
    w:45,
    h:43,
}
export const plant25={
    x:790,
    y:1535,
    w:45,
    h:43,
}
export const plant26={
    x:830,
    y:1535,
    w:45,
    h:43,
}
export const plant27={
    x:870,
    y:1535,
    w:45,
    h:43,
}
export const plant28={
    x:910,
    y:1535,
    w:45,
    h:43,
}
export const plant29={
    x:950,
    y:1535,
    w:45,
    h:43,
}
export const plant30={
    x:590,
    y:1575,
    w:45,
    h:43,
}
export const plant31={
    x:630,
    y:1575,
    w:45,
    h:43,
}
export const plant32={
    x:670,
    y:1575,
    w:45,
    h:43,
}
export const plant33={
    x:710,
    y:1575,
    w:45,
    h:43,
}
export const plant34={
    x:750,
    y:1575,
    w:45,
    h:43,
}
export const plant35={
    x:790,
    y:1575,
    w:45,
    h:43,
}
export const plant36={
    x:830,
    y:1575,
    w:45,
    h:43,
}
export const plant37={
    x:870,
    y:1575,
    w:45,
    h:43,
}
export const plant38={
    x:910,
    y:1575,
    w:45,
    h:43,
}
export const plant39={
    x:950,
    y:1575,
    w:45,
    h:43,
}



export const rock = {
    x:4,
    y:570,
    w:135,
    h:85
  }
export const fontaine = {
    x:634,
    y:670,
    w:111,
    h:109
  }
export const lac = {
    x:585,
    y:775,
    w:232,
    h:186
  }
export const storm={
    x:70,
    y:740,
    w:58,
    h:74,
}




export const herbe={
    x:850,
    y:755,
    w:40,
    h:40,
}
export const herbe1={
    x:900,  //+50
    y:755,
    w:40,
    h:40,
}
export const herbe2={
    x:950,  //+50
    y:755,
    w:40,
    h:40,
}
export const herbe3={
    x:1000,  //+50
    y:755,
    w:40,
    h:40,
}
export const herbe4={
    x:1050,  //+50
    y:755,
    w:40,
    h:40,
}
export const herbe5={
    x:1100,  //+50
    y:755,
    w:40,
    h:40,
}
export const herbe6={
    x:1150,  //+50
    y:755,
    w:40,
    h:40,
}
export const herbe7={
    x:850,
    y:795,
    w:40,
    h:40,
}
export const herbe8={
    x:900,  //+50
    y:795,
    w:40,
    h:40,
}
export const herbe9={
    x:950,  //+50
    y:795,
    w:40,
    h:40,
}
export const herbe10={
    x:1000,  //+50
    y:795,
    w:40,
    h:40,
}
export const herbe11={
    x:1050,  //+50
    y:795,
    w:40,
    h:40,
}
export const herbe12={
    x:1100,  //+50
    y:795,
    w:40,
    h:40,
}
export const herbe13={
    x:850,  //+50
    y:835,  //+40
    w:40,
    h:40,
}
export const herbe14={
    x:900,  //+50
    y:835,  //+40
    w:40,
    h:40,
}
export const herbe15={
    x:950,  //+50
    y:835,  //+40
    w:40,
    h:40,
}
export const herbe16={
    x:1000,  //+50
    y:835,  //+40
    w:40,
    h:40,
}
export const herbe17={
    x:1050,  //+50
    y:835,  //+40
    w:40,
    h:40,
}
export const herbe18={
    x:1100,  //+50
    y:835,  //+40
    w:40,
    h:40,
}
export const herbe19={
    x:850,  //+50
    y:875,  //+40
    w:40,
    h:40,
}
export const herbe20={
    x:900,  //+50
    y:875,  //+40
    w:40,
    h:40,
}
export const herbe21={
    x:950,  //+50
    y:875,  //+40
    w:40,
    h:40,
}
export const herbe22={
    x:1000,  //+50
    y:875,  //+40
    w:40,
    h:40,
}
export const herbe23={
    x:1050,  //+50
    y:875,  //+40
    w:40,
    h:40,
}
export const herbe24={
    x:1100,  //+50
    y:875,  //+40
    w:40,
    h:40,
}
export const herbe25={
    x:850,  //+50
    y:915,  //+40
    w:40,
    h:40,
}
export const herbe26={
    x:900,  //+50
    y:915,  //+40
    w:40,
    h:40,
}
export const herbe27={
    x:950,  //+50
    y:915,  //+40
    w:40,
    h:40,
}
export const herbe28={
    x:1000,  //+50
    y:915,  //+40
    w:40,
    h:40,
}
export const herbe29={
    x:1050,  //+50
    y:915,  //+40
    w:40,
    h:40,
}
export const herbe30={
    x:1100,  //+50
    y:915,  //+40
    w:40,
    h:40,
}
// Centre de rotation global (maintenant 200px sous le centre du lac)
// Centre de rotation global (Décalé de +100 en X et -100 en Y)
// Centre de rotation global (Décalé de +300 en X et -300 en Y)
// Centre de rotation global (Décalé de +300 en X et -350 en Y)
// Centre de rotation global (Décalé de +300 en X et -380 en Y)
const CENTER_X = 992.5; // 692.5 + 300
const CENTER_Y = 617.5; // 997.5 - 380

// ===================================
// DÉFINITION DES BIJOUX
// ===================================

// Goron : (X initial +300), (Y initial -380)
export const goron = {
    x: 992.5,     // 692.5 + 300
    y: 564.17,    // 944.17 - 380
    w: 40,
    h: 40,
    angle: Math.atan2(564.17 - CENTER_Y, 992.5 - CENTER_X), 
    radius: Math.hypot(992.5 - CENTER_X, 564.17 - CENTER_Y), 
}

// Zora : (X initial +300), (Y initial -380)
export const zora = {
    x: 1052.5,    // 752.5 + 300
    y: 644.17,    // 1024.17 - 380
    w: 40,
    h: 40,
    angle: Math.atan2(644.17 - CENTER_Y, 1052.5 - CENTER_X),
    radius: Math.hypot(1052.5 - CENTER_X, 644.17 - CENTER_Y),
}

// Kokiri : (X initial +300), (Y initial -380)
export const kokiri = {
    x: 932.5,     // 632.5 + 300
    y: 644.17,    // 1024.17 - 380
    w: 40,
    h: 40,
    angle: Math.atan2(644.17 - CENTER_Y, 932.5 - CENTER_X),
    radius: Math.hypot(932.5 - CENTER_X, 644.17 - CENTER_Y),
}

// fonction de collision
export function isColliding(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

// Fonction d'affichage
export function drawHouse(ctx, x=house.x, y=house.y) {
  // Si les 2 images sont chargées, on les dessine
  if (maisonImg.complete) {
    ctx.drawImage(maisonImg, x, y); // ajuster les coords selon ta porte
  } else {
    // Attendre que les images soient prêtes avant de dessiner
    maisonImg.onload = () => {
      ctx.drawImage(maisonImg, x, y);
    };

    };
}
export function drawPorte(ctx,x=house.x,y=house.y){
    if(porteImg.complete){
      ctx.drawImage(porteImg, x, y);
    }else {
    // Attendre que les images soient prêtes avant de dessiner
    porteImg.onload = () => {
      ctx.drawImage(porteImg, x, y);
    };
  }
}
export function drawPlant(ctx, x,y){
    if (plantImg.complete){
        ctx.drawImage(plantImg,x,y);
    }
    else{
        plantImg.onload=()=>{
            ctx.drawImage(plantImg,x,y)
        }
    }
}
export function drawTree(ctx, x,y){
    if (treeImg.complete){
        ctx.drawImage(treeImg,x,y);
    }
    else{
        treeImg.onload=()=>{
            ctx.drawImage(treeImg,x,y)
        }
    }
}
export function drawSword(ctx) {
//   if (!swordVisibility) return;

  let angle = 0;
  let offsetX = 0;
  let offsetY = 0;

  switch (player.direction) {
    case "up":
      angle = 20;
      offsetX = 0;
      offsetY = -25;
      break;
    case "down":
      angle = 200;
      offsetX = 8;
      offsetY = -40;
      break;
    case "left":
      angle = -90;
      offsetX = -10;
      offsetY = -40;
      break;
    case "right":
      angle = 90;
      offsetX = 10;
      offsetY = -25;
      break;
  }
  angle += sword.attackAngle;
  // Position réelle de l'épée (utile pour collisions)
  sword.x = player.x + offsetX;
  sword.y = player.y + offsetY;

  // Dessin visuel (rotation autour du centre du joueur)
  const centerX = player.x + player.w / 2;
  const centerY = player.y + player.h / 2;

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate((angle * Math.PI) / 180);

  if (swordImg.complete) {
    ctx.drawImage(
  swordImg,
  -swordImg.width / 2 + offsetX,
  -swordImg.height / 2 + offsetY
);

  } else {
    swordImg.onload = () => {
      ctx.drawImage(
  swordImg,
  -swordImg.width / 2 + offsetX,
  -swordImg.height / 2 + offsetY
);

    };
  }

  ctx.restore();

  

}
export function drawStorm(ctx, x,y){
    if (stormImg.complete){
        ctx.drawImage(stormImg,x,y);
    }
    else{
        stormImg.onload=()=>{
            ctx.drawImage(stormImg,x,y)
        }
    }
}
export function drawHerbe(ctx, x,y){
    if (herbeImg.complete){
        ctx.drawImage(herbeImg,x,y);
    }
    else{
        herbeImg.onload=()=>{
            ctx.drawImage(herbeImg,x,y)
        }
    }
}
export function drawFontaine(ctx, x,y){
    if (fontaineImg.complete){
        ctx.drawImage(fontaineImg,x,y);
    }
    else{
        fontaineImg.onload=()=>{
            ctx.drawImage(fontaineImg,x,y)
        }
    }
}
export function drawLac(ctx, x,y){
   ctx.save(); // 🔒 on garde le contexte
    if (lacImg.complete){
        ctx.drawImage(lacImg,x,y);
    }
    else{
        lacImg.onload=()=>{
            ctx.drawImage(lacImg,x,y)
        }
    }
    ctx.restore();
}
export function drawGoron(ctx, x, y) {
    // Coordonnées pour dessiner l'image centrée sur (x, y)
    const drawX = x - goron.w / 2;
    const drawY = y - goron.h / 2;
    
    // Le 3ème et 4ème paramètre de drawImage sont la largeur et la hauteur
    const drawW = goron.w;
    const drawH = goron.h;

    const drawAction = () => {
        // Dessine l'image en utilisant la largeur et hauteur définies dans l'objet goron
        ctx.drawImage(goronImg, drawX, drawY, drawW, drawH);
    };

    if (goronImg.complete) {
        drawAction();
    } else {
        // S'assure que l'image est dessinée dès qu'elle est chargée
        // (Attention : cette affectation unique de onload est plus fragile dans une boucle de jeu)
        goronImg.onload = drawAction;
    }
}
export function drawKokiri(ctx, x, y) {
    // Coordonnées pour dessiner l'image centrée sur (x, y)
    const drawX = x - kokiri.w / 2;
    const drawY = y - kokiri.h / 2;
    
    const drawW = kokiri.w;
    const drawH = kokiri.h;

    const drawAction = () => {
        // Dessine l'image en utilisant la largeur et hauteur définies dans l'objet kokiri
        ctx.drawImage(kokiriImg, drawX, drawY, drawW, drawH);
    };

    if (kokiriImg.complete) {
        drawAction();
    } else {
        kokiriImg.onload = drawAction;
    }
}
export function drawZora(ctx, x, y) {
    // Coordonnées pour dessiner l'image centrée sur (x, y)
    const drawX = x - zora.w / 2;
    const drawY = y - zora.h / 2;
    
    const drawW = zora.w;
    const drawH = zora.h;

    const drawAction = () => {
        // Dessine l'image en utilisant la largeur et hauteur définies dans l'objet zora
        ctx.drawImage(zoraImg, drawX, drawY, drawW, drawH);
    };

    if (zoraImg.complete) {
        drawAction();
    } else {
        zoraImg.onload = drawAction;
    }
}
export function drawPied(ctx,x=pied.x,y=pied.y){
    if(piedImg.complete){
      ctx.drawImage(piedImg, x, y);
    }else {
    // Attendre que les images soient prêtes avant de dessiner
    piedImg.onload = () => {
      ctx.drawImage(piedImg, x, y);
    };
  }
}

// Variable pour contrôler la vitesse de rotation (en radians par frame)
const ROTATION_SPEED = 0.02; 

/**
 * Met à jour la position de l'élément pour effectuer une révolution.
 * @param {object} entity - L'objet (goron, zora, kokiri)
 */
function updateRevolution(entity) {
    // 1. Augmenter l'angle pour la prochaine frame (tourner d'un petit montant)
    entity.angle += ROTATION_SPEED;
    
    // 2. Calculer les nouvelles coordonnées (x, y)
    // Nouvelle X = Centre X + Rayon * cos(Nouvel Angle)
    entity.x = CENTER_X + entity.radius * Math.cos(entity.angle);
    
    // Nouvelle Y = Centre Y + Rayon * sin(Nouvel Angle)
    entity.y = CENTER_Y + entity.radius * Math.sin(entity.angle);
}

// Fonction principale de mise à jour (à appeler dans votre boucle de jeu/animation)
export function runRevolution() {
    updateRevolution(goron);
    updateRevolution(zora);
    updateRevolution(kokiri);
}
