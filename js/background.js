
//creation du fond
// export function ground(ctx,width,height){
//     const gradient = ctx.createLinearGradient(0, 0, 0, height);
//   gradient.addColorStop(0, "#95d283ff"); // herbe claire
//   gradient.addColorStop(1, "#52a649ff"); // plus foncée en bas
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, width, height);
// }

//Dessine les rochers
export function drawRock(ctx, x,y ,size = 80) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size * 0.6, y - size * 0.3);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size * 0.8, y + size * 0.5);
  ctx.lineTo(x + size * 0.3, y + size * 0.6);
  ctx.lineTo(x, y + size * 0.4);
  ctx.closePath();
// === DESSIN BORDURE ===
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#100901ff";
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.fillStyle = "#5a5a5a"; // gris rocher
  ctx.fill();
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
// export function drawCurvedPath(ctx, x, y, direction = "right") {
//   const w = 80;  // largeur du chemin
//   const h = 120; // hauteur du chemin

//   const offset = direction === "left" ? -1 : 1;

//   ctx.beginPath();

//   // Bord gauche
//   ctx.moveTo(x, y);
//   ctx.bezierCurveTo(
//     x + 30 * offset, y + h * 0.3,
//     x + 10 * offset, y + h * 0.7,
//     x + 40 * offset, y + h
//   );

//   // Bord droit (retour en haut, miroir du bord gauche)
//   ctx.lineTo(x + 40 * offset + w, y + h);
//   ctx.bezierCurveTo(
//     x + 10 * offset + w, y + h * 0.7,
//     x + 30 * offset + w, y + h * 0.3,
//     x + w, y
//   );

//   ctx.closePath();

//   // Remplissage
//   ctx.fillStyle = "#d2b48c"; // terre claire
//   ctx.fill();

//   // Bordures
//   ctx.strokeStyle = "#b19066";
//   ctx.lineWidth = 2;
//   ctx.stroke();
// }
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





// ➕ petite fonction pour dessiner une ellipse
// function drawEllipse(ctx, x, y, rx, ry) {
//   ctx.beginPath();
//   ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
//   ctx.fill();
// }

// ➕ utilitaire pour choisir une couleur aléatoire
// function pickRandom(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

//fonctions pour avoir des chiffres aleatoires :
// ➕ Renvoie un nombre entre 0 et max (non inclus)
// export function randomX(maxWidth) {
//   return Math.random() * maxWidth;
// }

// // ➕ Renvoie un nombre entre 0 et max (non inclus)
// export function randomY(maxHeight) {
//   return Math.random() * maxHeight;
// }

// // ➕ Renvoie un nombre entre 60 et 80 (inclus)
// export function randomBetween60And80() {
//   return 60 + Math.random() * 20;
// }