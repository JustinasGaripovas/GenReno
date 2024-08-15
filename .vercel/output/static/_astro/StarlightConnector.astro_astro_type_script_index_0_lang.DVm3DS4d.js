import { a as T, T as q } from "./router.C4zY8-45.js";
const m = "div.main-frame",
  M = `${m} main`,
  N = "data-mobile-menu-expanded",
  R = "starlight-menu-button",
  u = "nav.sidebar",
  l = `${u} .sidebar-content`,
  A = "starlight-lang-select";
function w(e) {
  const t = c(e.href),
    r = t.split(""),
    a = document.querySelectorAll(`${l} a[href^='/']`);
  if (a.length === 0) return null;
  const n = [...a],
    i = n.map((o) => c(new URL(o.href, location.href).href));
  return n[
    i
      .map((o) => o.split("").findIndex((s, b) => s !== r[b]))
      .map((o, s) =>
        o !== -1
          ? o
          : Math.min(t.length, i[s].length) +
            (t.length === i[s].length ? 1 : 0),
      )
      .reduce((o, s, b, g) => (s > g[o] ? b : o), 0)
  ];
  function c(o) {
    return o.replace(/\/#/, "#").replace(/\/$/, "");
  }
}
function _() {
  document
    .querySelectorAll(`${l} [aria-current="page"]`)
    ?.forEach((e) => e.removeAttribute("aria-current"));
}
function C(e) {
  _(), w(e)?.setAttribute("aria-current", "page");
}
function h(e, t = !0) {
  const r = document.querySelector(`${l} [aria-current="page"]`);
  let a = r?.closest("details");
  for (; a; ) (a.open = !0), (a = a.parentElement?.closest("details"));
  t && r?.scrollIntoView({ block: "center", behavior: "instant" });
}
function S(e) {
  e
    .querySelectorAll(l + " .__collapse input")
    .forEach((t, r) =>
      t.setAttribute("data-vtbot-replace", `vtbot-sms-v0-${r}`),
    ),
    e
      .querySelectorAll(
        l +
          " :is(starlight-multi-sidebar-tabs, starlight-multi-sidebar-select)",
      )
      .forEach((t, r) => {
        t.setAttribute("data-vtbot-replace", `vtbot-sms-${r}`),
          [...t.children].forEach((a, n) => {
            n > 0 &&
              [...a.children].forEach((i, c) =>
                i.setAttribute(
                  "data-astro-transition-persist",
                  `vtbot-sms-${r}-${n}-${c}`,
                ),
              );
          });
      });
}
const I = "vtbot-starlight-replace-sidebar-content",
  $ = "vtbot-starlight-retain-current-page-marker",
  v = () => ({
    replaceSidebarContent: document.querySelector(`head meta[name="${I}"]`),
    retainCurrentPageMarker: document.querySelector(`head meta[name="${$}"]`),
    mainTransitionScope: document.querySelector(
      'head meta[name="vtbot-main-transition-scope"]',
    )?.content,
  });
let {
  replaceSidebarContent: p,
  retainCurrentPageMarker: f,
  mainTransitionScope: d,
} = v();
h();
y(window.document);
function k(e) {
  E(document),
    E(e.newDocument),
    P(),
    y(e.newDocument),
    D(e),
    !p && !f && C(e.to);
}
function L(e) {
  B(e.newDocument);
}
function O(e) {
  !f && h();
}
function P() {
  document.body.hasAttribute(N) &&
    document.body
      .querySelector(R)
      ?.closest("nav")
      ?.dispatchEvent(
        new KeyboardEvent("keyup", {
          key: "Escape",
          code: "Escape",
          charCode: 27,
          keyCode: 27,
          shiftKey: !1,
          ctrlKey: !1,
          altKey: !1,
          metaKey: !1,
        }),
      );
}
function E(e) {
  e.body.querySelector(m)?.setAttribute("data-vtbot-replace", "main");
}
function D(e) {
  if (!d) return;
  t(document, d), t(e.newDocument, d);
  function t(r, a) {
    const n = r.querySelector(M);
    n && (n.dataset.astroTransitionScope = a);
  }
}
function B(e) {
  const t = e.querySelector(u);
  if (!t) document.querySelector(u)?.remove();
  else {
    const r = document.querySelector(u);
    if (!r) document.querySelector(m)?.insertAdjacentElement("beforebegin", t);
    else {
      const a = r.querySelector(l),
        n = t.querySelector(l),
        i =
          [...(a?.querySelectorAll("a") ?? [])].map((c) => c.href).join(" ") !==
          [...(n?.querySelectorAll("a") ?? [])].map((c) => c.href).join(" ");
      p || i
        ? a && n
          ? (a.setAttribute("data-vtbot-replace", "vtbot-sidebar-content"),
            n.setAttribute("data-vtbot-replace", "vtbot-sidebar-content"),
            r.removeAttribute("data-vtbot-replace"),
            t.removeAttribute("data-vtbot-replace"))
          : (r.setAttribute("data-vtbot-replace", "vtbot-sidebar-content"),
            t.setAttribute("data-vtbot-replace", "vtbot-sidebar-content"),
            a?.removeAttribute("data-vtbot-replace"),
            n?.removeAttribute("data-vtbot-replace"))
        : (S(document), S(e));
    }
  }
}
function y(e) {
  e.querySelectorAll(A).forEach((t, r) =>
    t.setAttribute("data-vtbot-replace", `vtbot-${A}-${r}`),
  );
}
document.addEventListener(T, (e) => {
  ({
    replaceSidebarContent: p,
    retainCurrentPageMarker: f,
    mainTransitionScope: d,
  } = v());
  const t = e.loader;
  e.loader = async () => {
    await t(), k(e);
  };
});
document.addEventListener(q, (e) => {
  L(e);
  const t = e.swap;
  e.swap = () => {
    t(), O();
  };
});
export { I as REPLACE_SIDEBAR_CONTENT, $ as RETAIN_CURRENT_PAGE_MARKER };
