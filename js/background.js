
//creation du fond
// export function ground(ctx,width,height){
//     const gradient = ctx.createLinearGradient(0, 0, 0, height);
//   gradient.addColorStop(0, "#95d283ff"); // herbe claire
//   gradient.addColorStop(1, "#52a649ff"); // plus foncée en bas
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, width, height);
// }
import{pied}from "./object.js"
const swordplantImg = new Image();
swordplantImg.src = './assets/swordplant.png'; // à adapter si elle est dans un sous-dossier
export const solImg = new Image();
solImg.src = './assets/sol.png'; // à adapter si elle est dans un sous-dossier


export const swordplant = {
x:pied.x+3,
y:pied.y-62,
w:62,
h:54
}
export function drawRock(ctx, x, y, size = 80) {
    // Couleurs pour un rocher plus "terreux" ou "sombre"
    const baseColor = "#544C4A";    // Gris-brun foncé pour la base
    const highlightColor = "#7A706A"; // Gris-brun clair pour les zones éclairées
    const shadowColor = "#3E3735";  // Marron très foncé pour les ombres profondes

    // Les points définissant la silhouette du rocher.
    // Ajustés pour une forme plus organique, sans Math.random().
    // Ces points sont relatifs à un carré de taille 'size' pour faciliter l'adaptation.
    const shapePoints = [
        { x: 0.1, y: 0.7 },
        { x: 0.05, y: 0.4 },
        { x: 0.2, y: 0.1 },
        { x: 0.5, y: 0.0 },
        { x: 0.8, y: 0.1 },
        { x: 0.95, y: 0.3 },
        { x: 1.0, y: 0.6 },
        { x: 0.85, y: 0.8 },
        { x: 0.6, y: 0.9 },
        { x: 0.3, y: 0.8 }
    ];

    // --- DESSIN DU CORPS PRINCIPAL DU ROCHER ---
    ctx.beginPath();
    // Le premier point est déplacé à la position réelle (x,y) + offset * size
    ctx.moveTo(x + shapePoints[0].x * size, y + shapePoints[0].y * size);

    // Dessin de la silhouette avec des courbes douces
    for (let i = 0; i < shapePoints.length; i++) {
        const p1 = shapePoints[i];
        const p2 = shapePoints[(i + 1) % shapePoints.length]; // Le dernier point se relie au premier

        // Les points de contrôle sont calculés pour être au milieu des segments
        // ajustés pour donner une courbure naturelle
        const controlX = x + ((p1.x + p2.x) / 2) * size + (i % 2 === 0 ? size * 0.05 : -size * 0.05); // Légère variation
        const controlY = y + ((p1.y + p2.y) / 2) * size + (i % 2 === 1 ? size * 0.05 : -size * 0.05); // Légère variation

        ctx.quadraticCurveTo(controlX, controlY, x + p2.x * size, y + p2.y * size);
    }
    ctx.closePath();

    // --- APPLICATION D'UN DÉGRADÉ RADIAL ---
    // Simule une lumière venant du centre du rocher ou légèrement décalée,
    // donnant un effet de volume plus doux et réaliste.
    const gradient = ctx.createRadialGradient(
        x + size * 0.4, y + size * 0.3, size * 0.1,  // Cercle intérieur (plus clair)
        x + size * 0.5, y + size * 0.5, size * 0.7   // Cercle extérieur (plus foncé)
    );
    gradient.addColorStop(0, highlightColor); // Centre lumineux
    gradient.addColorStop(0.6, baseColor);    // Couleur de base
    gradient.addColorStop(1, shadowColor);   // Bords plus sombres

    ctx.fillStyle = gradient;
    ctx.fill();

    // --- DESSIN BORDURE ---
    ctx.lineWidth = 3; // Bordure fine
    ctx.strokeStyle = "#2B2827"; // Un marron très foncé pour la bordure
    ctx.lineJoin = "round";
    ctx.stroke();

    // --- AJOUT DE DÉTAILS SIMPLIFIÉS (sans Math.random) ---
    // Ces détails sont fixes pour que le rocher soit toujours identique
    ctx.fillStyle = shadowColor;
    ctx.globalAlpha = 0.5; // Rendre les détails légèrement transparents

    // Détail 1
    ctx.beginPath();
    ctx.ellipse(x + size * 0.3, y + size * 0.6, size * 0.1, size * 0.07, Math.PI / 6, 0, Math.PI * 2);
    ctx.fill();

    // Détail 2
    ctx.beginPath();
    ctx.ellipse(x + size * 0.7, y + size * 0.4, size * 0.08, size * 0.06, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1; // Remettre l'alpha à 1
}
export function drawSwordplant (ctx,x,y){
if (swordplantImg.complete) {
    ctx.drawImage(swordplantImg, x, y);
  } else {
    // Attendre que les images soient prêtes avant de dessiner
    swordplantImg.onload = () => {
      ctx.drawImage(swordplantImg, x, y);
    };
  }
}
export function drawSol (ctx,x,y){
if (solImg.complete) {
    ctx.drawImage(solImg, x, y);
  } else {
    // Attendre que les images soient prêtes avant de dessiner
    solImg.onload = () => {
      ctx.drawImage(solImg, x, y);
    };
  }
}
export function drawPath(ctx, x, y, width, height, angle = 0) {
  ctx.save(); // 🔒 on garde le contexte

  // Déplacer l'origine au centre du chemin
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate((angle * Math.PI) / 180); // rotation en degrés → radians

  // Comme on a translaté au centre, il faut dessiner le chemin relatif à (-width/2, -height/2)
  ctx.fillStyle = "#d2b48c"; // beige / couleur du chemin
  ctx.fillRect(-width / 2, -height / 2, width, height);

  // Bordures foncées
  ctx.fillStyle = "#b19066";
  ctx.fillRect(-width / 2, -height / 2, width * 0.1, height);       // bord gauche
  ctx.fillRect(width / 2 - width * 0.1, -height / 2, width * 0.1, height); // bord droit

  ctx.restore(); // 🔓 on remet le contexte normal
}

export function drawShapedPath(ctx, x, y, direction = "right", width = 80, length = 80, radius = 40, angle = 0) {
  const offset = direction === "left" ? -1 : 1;

  ctx.save(); // 🔒 on sauve le contexte actuel

  // Déplacer le point d’origine au point (x, y)
  ctx.translate(x, y);
  ctx.rotate((angle * Math.PI) / 180); // 🔁 rotation en radians

  ctx.beginPath();

  // Partie verticale
  ctx.moveTo(0, 0);
  ctx.lineTo(0, length);

  // Arc de cercle
  const centerX = radius * offset;
  const centerY = length + radius;

  ctx.arc(
    centerX,
    centerY,
    radius,
    direction === "right" ? Math.PI : 0,
    direction === "right" ? Math.PI * 1.5 : -Math.PI / 2,
    direction === "left"
  );

  // Ligne horizontale après le virage
  ctx.lineTo(centerX + radius * offset, centerY - radius);

  // === DESSIN BORDURE ===
  ctx.lineWidth = width + 16;
  ctx.strokeStyle = "#b19066";
  ctx.lineCap = "round";
  ctx.stroke();

  // === DESSIN DU CHEMIN ===
  ctx.lineWidth = width;
  ctx.strokeStyle = "#d2b48c";
  ctx.stroke();

  ctx.restore(); // 🔓 on revient au contexte d’origine
}

/**
 * Dessine un virage en quart de cercle (un coude) avec bordures.
 */
export function drawCurvedPath(ctx, x, y, direction = "right", radius = 40, width = 80, angle = 0) {
    // Définitions de style
    const BORDER_WIDTH = width + 16;
    const BORDER_COLOR = "#b19066";
    const PATH_COLOR = "#d2b48c";

    ctx.save();
    
    // 1. Déplacer et faire tourner l'ensemble du coude
    ctx.translate(x, y);
    ctx.rotate((angle * Math.PI) / 180); 

    // Définir le centre de l'arc en fonction de la direction
    const offset = direction === "left" ? -1 : 1;
    const centerX = radius * offset;
    const centerY = radius;
    
    // === DESSIN BORDURE (Plus large et en couleur foncée) ===
    ctx.beginPath();
    ctx.lineWidth = BORDER_WIDTH;
    ctx.strokeStyle = BORDER_COLOR;
    
    // ❌ Suppression de ctx.lineCap = "round";
    // Si vous voulez être explicite sur l'absence d'arrondis :
    ctx.lineCap = "butt"; 

    if (direction === "right") {
        ctx.arc(
            centerX, 
            centerY, 
            radius,  
            Math.PI,     
            Math.PI * 1.5 
        );
    } else { // direction === "left"
        ctx.arc(
            centerX, 
            centerY, 
            radius,  
            0,            
            -Math.PI / 2, 
            true          
        );
    }
    ctx.stroke();

    // === DESSIN DU CHEMIN PRINCIPAL (Moins large et en couleur claire) ===
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = PATH_COLOR;
    ctx.lineCap = "butt"; // IMPORTANT : Assurer que le chemin principal est plat

    if (direction === "right") {
        ctx.arc(
            centerX, 
            centerY, 
            radius,  
            Math.PI,     
            Math.PI * 1.5 
        );
    } else { // direction === "left"
        ctx.arc(
            centerX, 
            centerY, 
            radius,  
            0,            
            -Math.PI / 2, 
            true          
        );
    }
    ctx.stroke();

    ctx.restore();
}

