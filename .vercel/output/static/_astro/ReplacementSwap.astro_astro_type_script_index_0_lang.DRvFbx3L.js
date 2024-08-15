import { T as h } from "./router.C4zY8-45.js";
const a = "data-astro-transition-persist";
function A(t) {
  for (const e of document.scripts)
    for (const s of t.scripts)
      if (
        !s.hasAttribute("data-astro-rerun") &&
        ((!e.src && e.textContent === s.textContent) ||
          (e.src && e.type === s.type && e.src === s.src))
      ) {
        s.dataset.astroExec = "";
        break;
      }
}
function y(t) {
  const e = document.documentElement,
    s = [...e.attributes].filter(
      ({ name: o }) => (e.removeAttribute(o), o.startsWith("data-astro-")),
    );
  [...t.documentElement.attributes, ...s].forEach(({ name: o, value: r }) =>
    e.setAttribute(o, r),
  );
}
function S(t) {
  for (const e of Array.from(document.head.children)) {
    const s = v(e, t);
    s ? s.remove() : e.remove();
  }
  document.head.append(...t.head.children);
}
function T(t, e) {
  e.replaceWith(t);
  for (const s of e.querySelectorAll(`[${a}]`)) {
    const o = s.getAttribute(a),
      r = t.querySelector(`[${a}="${o}"]`);
    r &&
      (r.replaceWith(s),
      r.localName === "astro-island" &&
        g(s) &&
        (s.setAttribute("ssr", ""),
        s.setAttribute("props", r.getAttribute("props"))));
  }
}
const w = () => {
    const t = document.activeElement;
    if (t?.closest(`[${a}]`)) {
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        const e = t.selectionStart,
          s = t.selectionEnd;
        return () => m({ activeElement: t, start: e, end: s });
      }
      return () => m({ activeElement: t });
    } else return () => m({ activeElement: null });
  },
  m = ({ activeElement: t, start: e, end: s }) => {
    t &&
      (t.focus(),
      (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) &&
        (typeof e == "number" && (t.selectionStart = e),
        typeof s == "number" && (t.selectionEnd = s)));
  },
  v = (t, e) => {
    const s = t.getAttribute(a),
      o = s && e.head.querySelector(`[${a}="${s}"]`);
    if (o) return o;
    if (t.matches("link[rel=stylesheet]")) {
      const r = t.getAttribute("href");
      return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`);
    }
    return null;
  },
  g = (t) => {
    const e = t.dataset.astroTransitionPersistProps;
    return e == null || e === "false";
  },
  R = "vtbot-replace-swap",
  $ = () =>
    (document.querySelector(`meta[name="${R}"]`)?.getAttribute("content") ?? "")
      .split(",")
      .map((t) => t.trim());
document.addEventListener(h, (t) => {
  const e = t.swap;
  t.swap = () => {
    const s = (n) => {
        const l = n.body.querySelectorAll("[data-vtbot-replace]"),
          i = [...l].map(
            (c) => c instanceof HTMLElement && c.dataset.vtbotReplace,
          );
        return { elements: [...l], names: new Set(i) };
      },
      { elements: o, names: r } = s(document),
      { elements: f, names: p } = s(t.newDocument),
      d = [...r].filter((n) => p.has(n));
    if (d.length === 0) {
      e();
      return;
    }
    const u = t.newDocument;
    A(u);
    const b = $().map((n) => ({
      key: n,
      val: document.documentElement.getAttribute(n),
    }));
    y(u),
      b.forEach(
        (n) =>
          n.val !== null && document.documentElement.setAttribute(n.key, n.val),
      ),
      S(u);
    const E = w();
    d.forEach((n) => {
      const l = o.find((c) => c.dataset.vtbotReplace === n),
        i = f.find((c) => c.dataset.vtbotReplace === n);
      l && i && T(i, l);
    }),
      E(),
      [
        ...document.querySelectorAll("[class*='astro-route-announcer']"),
      ].forEach((n) => n.remove());
  };
});
