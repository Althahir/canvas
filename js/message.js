const tirerEpeeImg = new Image();
tirerEpeeImg.src = './assets/n.png'; 

export function drawTirerEpee (ctx, x=50, y=250){
if (tirerEpeeImg.complete) {
    ctx.drawImage(tirerEpeeImg, x, y);
  } else {
    // Attendre que les images soient prêtes avant de dessiner
    tirerEpeeImg.onload = () => {
      ctx.drawImage(tirerEpeeImg, x, y);
    };
  }
}