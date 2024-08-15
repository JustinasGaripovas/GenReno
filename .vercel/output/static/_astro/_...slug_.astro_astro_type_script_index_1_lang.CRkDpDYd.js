import { g as e } from "./index.DjKJqAo0.js";
function t(o, i) {
  e.set(o, i);
}
t("#fadeText", { autoAlpha: 0, y: 50, willChange: "transform, opacity" });
t("#fadeInUp", { autoAlpha: 0, y: 50, willChange: "transform, opacity" });
t("#fadeInMoveRight", {
  autoAlpha: 0,
  x: 300,
  willChange: "transform, opacity",
});
let a = e.timeline({ defaults: { overwrite: "auto" } });
a.to("#fadeText", {
  duration: 1.5,
  autoAlpha: 1,
  y: 0,
  delay: 1,
  ease: "power2.out",
});
a.to(
  "#fadeInUp",
  { duration: 1.5, autoAlpha: 1, y: 0, ease: "power2.out" },
  "-=1.2",
);
a.to(
  "#fadeInMoveRight",
  { duration: 1.5, autoAlpha: 1, x: 0, ease: "power2.inOut" },
  "-=1.4",
);
a.to("#overlay", { duration: 1, autoAlpha: 0, delay: 0.2 });
