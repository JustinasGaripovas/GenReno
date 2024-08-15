import { s as g, n as l } from "./router.C4zY8-45.js";
import { i as h } from "./index.D6rU_tt3.js";
function p() {
  const e = document.querySelector('[name="astro-view-transitions-fallback"]');
  return e ? e.getAttribute("content") : "animate";
}
function f(e) {
  return e.dataset.astroReload !== void 0;
}
(g || p() !== "none") &&
  (document.addEventListener("click", (e) => {
    let t = e.target;
    if (
      (e.composed && (t = e.composedPath()[0]),
      t instanceof Element && (t = t.closest("a, area")),
      !(t instanceof HTMLAnchorElement) &&
        !(t instanceof SVGAElement) &&
        !(t instanceof HTMLAreaElement))
    )
      return;
    const n = t instanceof HTMLElement ? t.target : t.target.baseVal,
      o = t instanceof HTMLElement ? t.href : t.href.baseVal,
      r = new URL(o, location.href).origin;
    f(t) ||
      t.hasAttribute("download") ||
      !t.href ||
      (n && n !== "_self") ||
      r !== location.origin ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey ||
      e.defaultPrevented ||
      (e.preventDefault(),
      l(o, {
        history: t.dataset.astroHistory === "replace" ? "replace" : "auto",
        sourceElement: t,
      }));
  }),
  document.addEventListener("submit", (e) => {
    let t = e.target;
    if (t.tagName !== "FORM" || e.defaultPrevented || f(t)) return;
    const n = t,
      o = e.submitter,
      r = new FormData(n, o),
      m = typeof n.action == "string" ? n.action : n.getAttribute("action"),
      u = typeof n.method == "string" ? n.method : n.getAttribute("method");
    let a = o?.getAttribute("formaction") ?? m ?? location.pathname;
    const i = o?.getAttribute("formmethod") ?? u ?? "get";
    if (i === "dialog" || location.origin !== new URL(a, location.href).origin)
      return;
    const s = { sourceElement: o ?? n };
    if (i === "get") {
      const d = new URLSearchParams(r),
        c = new URL(a);
      (c.search = d.toString()), (a = c.toString());
    } else s.formData = r;
    e.preventDefault(), l(a, s);
  }),
  h({ prefetchAll: !0 }));
