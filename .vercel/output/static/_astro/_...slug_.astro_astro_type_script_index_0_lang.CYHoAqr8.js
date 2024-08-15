import { g as i } from "./index.DjKJqAo0.js";
import { S as d } from "./ScrollTrigger.DZdR0iV_.js";
i.registerPlugin(d);
i.timeline({
  scrollTrigger: {
    scrub: 1,
    pin: !0,
    trigger: "#pin",
    start: "top 20%",
    endTrigger: "footer",
    end: "top bottom",
  },
});
const u =
  '<svg class="w-0 h-0 flex-none" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fa5a15"><path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></svg>';
function a(o) {
  if (
    (document
      .querySelectorAll("#toc li")
      .forEach((n) => n.classList.remove("selected")),
    !o)
  )
    return;
  const e = document.querySelector(`#toc a[href="#${o}"]`);
  if (!e) return;
  e.parentElement?.classList.add("selected");
}
document.addEventListener("DOMContentLoaded", function () {
  const o = document.querySelector("article"),
    l = document.querySelector("#toc ul"),
    e = o ? o.querySelectorAll("h1, h2, h3, h4, h5, h6") : [];
  e.forEach((t, n) => {
    if (t instanceof HTMLElement) {
      const r = document.createElement("li");
      r.className = "toc-level-" + t.tagName.toLowerCase();
      const s = document.createElement("div");
      s.innerHTML = u;
      const m = s.firstChild;
      r.appendChild(m);
      const c = document.createElement("a");
      (c.href = "#" + t.id),
        (c.textContent = t.textContent),
        r.appendChild(c),
        l?.appendChild(r),
        i.timeline({
          scrollTrigger: {
            trigger: t,
            start: "top 20%",
            end: () =>
              `bottom top+=${n === e.length - 1 ? 0 : e[n + 1].getBoundingClientRect().height}`,
            onEnter: () => a(t.id),
            onLeaveBack: () => a(e[n - 1]?.id),
          },
        });
    }
  });
});
