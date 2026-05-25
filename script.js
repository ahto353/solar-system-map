const space = document.getElementById("space");

let zoom = 1;

/* ⭐ tähed */
for (let i = 0; i < 250; i++) {
  const star = document.createElement("div");

  star.style.position = "absolute";
  star.style.width = Math.random() * 2 + "px";
  star.style.height = star.style.width;
  star.style.background = "white";
  star.style.borderRadius = "50%";

  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";

  space.appendChild(star);
}

/* planets */
const planets = [
  document.querySelector(".mercury"),
  document.querySelector(".venus"),
  document.querySelector(".earth"),
  document.querySelector(".mars")
];

let angles = [0, 0, 0, 0];
let radius = [60, 100, 150, 200];
let speed = [0.02, 0.015, 0.01, 0.008];

/* scroll */
document.addEventListener("wheel", (e) => {
  zoom += e.deltaY * -0.002;   // selgelt nähtav
  zoom = Math.min(Math.max(0.5, 4), zoom);
});

/* loop */
function update() {
  for (let i = 0; i < planets.length; i++) {
    angles[i] += speed[i];

    const x = Math.cos(angles[i]) * radius[i];
    const y = Math.sin(angles[i]) * radius[i];

    planets[i].style.transform =
      `translate(${x}px, ${y}px) scale(${zoom})`;
  }

  requestAnimationFrame(update);
}

update();