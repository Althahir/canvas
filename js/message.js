const tirerEpeeImg = new Image();
tirerEpeeImg.src = './assets/f.png'; 

export function drawTirerEpee (ctx){
    let x=50;
    let y=150;
if (tirerEpeeImg.complete) {
    ctx.drawImage(tirerEpeeImg, x, y);
  } else {
    // Attendre que les images soient prêtes avant de dessiner
    tirerEpeeImg.onload = () => {
      ctx.drawImage(tirerEpeeImg, x, y);
    };
  }
}