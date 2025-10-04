// ==============================
// État global du jeu
// ==============================
const canvas = document.getElementById("game");

export const input = {
  keys: new Set(),    // touches actives
  mouse: { x: 0, y: 0, pressed: false }
};

// ==============================
// Listeners clavier
// ==============================
window.addEventListener("keydown", (e) => {
  input.keys.add(e.key); // stocke la touche pressée
});

window.addEventListener("keyup", (e) => {
  input.keys.delete(e.key); // supprime la touche relâchée
});

// ==============================
// Listeners souris
// ==============================
canvas.addEventListener("mousemove", (e) => {
  input.mouse.x = e.clientX;
  input.mouse.y = e.clientY;
});

canvas.addEventListener("mousedown", () => {
  input.mouse.pressed = true;
});

canvas.addEventListener("mouseup", () => {
  input.mouse.pressed = false;
});
