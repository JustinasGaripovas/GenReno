var C = { exports: {} };
(function (y, T) {
  (function (I, E) {
    y.exports = E();
  })(self, () =>
    (() => {
      var I = {
          223: (m, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.BREAKPOINTS =
                t.COMBO_BOX_ACCESSIBILITY_KEY_SET =
                t.SELECT_ACCESSIBILITY_KEY_SET =
                t.TABS_ACCESSIBILITY_KEY_SET =
                t.OVERLAY_ACCESSIBILITY_KEY_SET =
                t.DROPDOWN_ACCESSIBILITY_KEY_SET =
                t.POSITIONS =
                  void 0),
              (t.POSITIONS = {
                auto: "auto",
                "auto-start": "auto-start",
                "auto-end": "auto-end",
                top: "top",
                "top-left": "top-start",
                "top-right": "top-end",
                bottom: "bottom",
                "bottom-left": "bottom-start",
                "bottom-right": "bottom-end",
                right: "right",
                "right-start": "right-start",
                "right-end": "right-end",
                left: "left",
                "left-start": "left-start",
                "left-end": "left-end",
              }),
              (t.DROPDOWN_ACCESSIBILITY_KEY_SET = [
                "Escape",
                "ArrowUp",
                "ArrowDown",
                "Home",
                "End",
                "Enter",
              ]),
              (t.OVERLAY_ACCESSIBILITY_KEY_SET = ["Escape", "Tab"]),
              (t.TABS_ACCESSIBILITY_KEY_SET = [
                "ArrowUp",
                "ArrowLeft",
                "ArrowDown",
                "ArrowRight",
                "Home",
                "End",
              ]),
              (t.SELECT_ACCESSIBILITY_KEY_SET = [
                "ArrowUp",
                "ArrowLeft",
                "ArrowDown",
                "ArrowRight",
                "Home",
                "End",
                "Escape",
                "Enter",
                "Tab",
              ]),
              (t.COMBO_BOX_ACCESSIBILITY_KEY_SET = [
                "ArrowUp",
                "ArrowLeft",
                "ArrowDown",
                "ArrowRight",
                "Home",
                "End",
                "Escape",
                "Enter",
              ]),
              (t.BREAKPOINTS = {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                "2xl": 1536,
              });
          },
          961: (m, t) => {
            /*
             * HSBasePlugin
             * @version: 2.4.1
             * @author: Preline Labs Ltd.
             * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
             * Copyright 2024 Preline Labs Ltd.
             */ Object.defineProperty(t, "__esModule", { value: !0 });
            var p = (function () {
              function d(h, e, s) {
                (this.el = h),
                  (this.options = e),
                  (this.events = s),
                  (this.el = h),
                  (this.options = e),
                  (this.events = {});
              }
              return (
                (d.prototype.createCollection = function (h, e) {
                  var s;
                  h.push({
                    id:
                      ((s = e?.el) === null || s === void 0 ? void 0 : s.id) ||
                      h.length + 1,
                    element: e,
                  });
                }),
                (d.prototype.fireEvent = function (h, e) {
                  if (
                    (e === void 0 && (e = null), this.events.hasOwnProperty(h))
                  )
                    return this.events[h](e);
                }),
                (d.prototype.on = function (h, e) {
                  this.events[h] = e;
                }),
                d
              );
            })();
            t.default = p;
          },
          166: function (m, t, p) {
            /*
             * HSTabs
             * @version: 2.4.1
             * @author: Preline Labs Ltd.
             * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
             * Copyright 2024 Preline Labs Ltd.
             */ var d,
              h =
                (this && this.__extends) ||
                ((d = function (f, l) {
                  return (
                    (d =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (n, o) {
                          n.__proto__ = o;
                        }) ||
                      function (n, o) {
                        for (var i in o)
                          Object.prototype.hasOwnProperty.call(o, i) &&
                            (n[i] = o[i]);
                      }),
                    d(f, l)
                  );
                }),
                function (f, l) {
                  if (typeof l != "function" && l !== null)
                    throw new TypeError(
                      "Class extends value " +
                        String(l) +
                        " is not a constructor or null",
                    );
                  function n() {
                    this.constructor = f;
                  }
                  d(f, l),
                    (f.prototype =
                      l === null
                        ? Object.create(l)
                        : ((n.prototype = l.prototype), new n()));
                }),
              e =
                (this && this.__importDefault) ||
                function (f) {
                  return f && f.__esModule ? f : { default: f };
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = p(292),
              a = e(p(961)),
              c = p(223),
              u = (function (f) {
                function l(n, o, i) {
                  var r = f.call(this, n, o, i) || this;
                  return (
                    (r.toggles = r.el.querySelectorAll("[data-hs-tab]")),
                    (r.extraToggleId = r.el.getAttribute("data-hs-tab-select")),
                    (r.extraToggle = document.querySelector(r.extraToggleId)),
                    (r.current = Array.from(r.toggles).find(function (v) {
                      return v.classList.contains("active");
                    })),
                    (r.currentContentId =
                      r.current.getAttribute("data-hs-tab")),
                    (r.currentContent = document.querySelector(
                      r.currentContentId,
                    )),
                    (r.prev = null),
                    (r.prevContentId = null),
                    (r.prevContent = null),
                    r.init(),
                    r
                  );
                }
                return (
                  h(l, f),
                  (l.prototype.init = function () {
                    var n = this;
                    this.createCollection(window.$hsTabsCollection, this),
                      this.toggles.forEach(function (o) {
                        o.addEventListener("click", function () {
                          return n.open(o);
                        });
                      }),
                      this.extraToggle &&
                        this.extraToggle.addEventListener(
                          "change",
                          function (o) {
                            return n.change(o);
                          },
                        );
                  }),
                  (l.prototype.open = function (n) {
                    var o, i;
                    (this.prev = this.current),
                      (this.prevContentId = this.currentContentId),
                      (this.prevContent = this.currentContent),
                      (this.current = n),
                      (this.currentContentId =
                        this.current.getAttribute("data-hs-tab")),
                      (this.currentContent = document.querySelector(
                        this.currentContentId,
                      )),
                      !(
                        (o = this == null ? void 0 : this.prev) === null ||
                        o === void 0
                      ) &&
                        o.ariaSelected &&
                        (this.prev.ariaSelected = "false"),
                      this.prev.classList.remove("active"),
                      this.prevContent.classList.add("hidden"),
                      !(
                        (i = this == null ? void 0 : this.current) === null ||
                        i === void 0
                      ) &&
                        i.ariaSelected &&
                        (this.current.ariaSelected = "true"),
                      this.current.classList.add("active"),
                      this.currentContent.classList.remove("hidden"),
                      this.fireEvent("change", {
                        el: n,
                        prev: this.prevContentId,
                        current: this.currentContentId,
                      }),
                      (0, s.dispatch)("change.hs.tab", n, {
                        el: n,
                        prev: this.prevContentId,
                        current: this.currentContentId,
                      });
                  }),
                  (l.prototype.change = function (n) {
                    var o = document.querySelector(
                      '[data-hs-tab="'.concat(n.target.value, '"]'),
                    );
                    o && o.click();
                  }),
                  (l.getInstance = function (n, o) {
                    var i = window.$hsTabsCollection.find(function (r) {
                      return (
                        r.element.el ===
                        (typeof n == "string" ? document.querySelector(n) : n)
                      );
                    });
                    return i ? (o ? i : i.element) : null;
                  }),
                  (l.autoInit = function () {
                    window.$hsTabsCollection || (window.$hsTabsCollection = []),
                      document
                        .querySelectorAll(
                          '[role="tablist"]:not(select):not(.--prevent-on-load-init)',
                        )
                        .forEach(function (n) {
                          window.$hsTabsCollection.find(function (o) {
                            var i;
                            return (
                              ((i = o?.element) === null || i === void 0
                                ? void 0
                                : i.el) === n
                            );
                          }) || new l(n);
                        }),
                      window.$hsTabsCollection &&
                        document.addEventListener("keydown", function (n) {
                          return l.accessibility(n);
                        });
                  }),
                  (l.open = function (n) {
                    var o = window.$hsTabsCollection.find(function (r) {
                        return Array.from(r.element.toggles).includes(
                          typeof n == "string" ? document.querySelector(n) : n,
                        );
                      }),
                      i = Array.from(o.element.toggles).find(function (r) {
                        return (
                          r ===
                          (typeof n == "string" ? document.querySelector(n) : n)
                        );
                      });
                    i && !i.classList.contains("active") && o.element.open(i);
                  }),
                  (l.accessibility = function (n) {
                    var o = document.querySelector("[data-hs-tab]:focus");
                    if (
                      o &&
                      c.TABS_ACCESSIBILITY_KEY_SET.includes(n.code) &&
                      !n.metaKey
                    ) {
                      var i = o
                        .closest('[role="tablist"]')
                        .getAttribute("data-hs-tabs-vertical");
                      switch ((n.preventDefault(), n.code)) {
                        case i === "true" ? "ArrowUp" : "ArrowLeft":
                          this.onArrow();
                          break;
                        case i === "true" ? "ArrowDown" : "ArrowRight":
                          this.onArrow(!1);
                          break;
                        case "Home":
                          this.onStartEnd();
                          break;
                        case "End":
                          this.onStartEnd(!1);
                      }
                    }
                  }),
                  (l.onArrow = function (n) {
                    n === void 0 && (n = !0);
                    var o = document
                        .querySelector("[data-hs-tab]:focus")
                        .closest('[role="tablist"]'),
                      i = window.$hsTabsCollection.find(function (g) {
                        return g.element.el === o;
                      });
                    if (i) {
                      var r = n
                          ? Array.from(i.element.toggles).reverse()
                          : Array.from(i.element.toggles),
                        v = r.find(function (g) {
                          return document.activeElement === g;
                        }),
                        S = r.findIndex(function (g) {
                          return g === v;
                        });
                      r[(S = S + 1 < r.length ? S + 1 : 0)].focus(),
                        r[S].click();
                    }
                  }),
                  (l.onStartEnd = function (n) {
                    n === void 0 && (n = !0);
                    var o = document
                        .querySelector("[data-hs-tab]:focus")
                        .closest('[role="tablist"]'),
                      i = window.$hsTabsCollection.find(function (v) {
                        return v.element.el === o;
                      });
                    if (i) {
                      var r = n
                        ? Array.from(i.element.toggles)
                        : Array.from(i.element.toggles).reverse();
                      r.length && (r[0].focus(), r[0].click());
                    }
                  }),
                  (l.on = function (n, o, i) {
                    var r = window.$hsTabsCollection.find(function (v) {
                      return Array.from(v.element.toggles).includes(
                        typeof o == "string" ? document.querySelector(o) : o,
                      );
                    });
                    r && (r.element.events[n] = i);
                  }),
                  l
                );
              })(a.default);
            window.addEventListener("load", function () {
              u.autoInit();
            }),
              typeof window < "u" && (window.HSTabs = u),
              (t.default = u);
          },
          292: function (m, t) {
            var p = this;
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.menuSearchHistory =
                t.classToClassList =
                t.htmlToElement =
                t.afterTransition =
                t.dispatch =
                t.debounce =
                t.isFormElement =
                t.isParentOrElementHidden =
                t.isEnoughSpace =
                t.isIpadOS =
                t.isIOS =
                t.getZIndex =
                t.getClassPropertyAlt =
                t.getClassProperty =
                t.stringToBoolean =
                  void 0),
              (t.getHighestZIndex = function (e) {
                var s = Number.NEGATIVE_INFINITY;
                return (
                  e.forEach(function (a) {
                    var c = d(a);
                    c !== "auto" && (c = parseInt(c, 10)) > s && (s = c);
                  }),
                  s
                );
              }),
              (t.stringToBoolean = function (e) {
                return e === "true";
              }),
              (t.getClassProperty = function (e, s, a) {
                return (
                  a === void 0 && (a = ""),
                  (window.getComputedStyle(e).getPropertyValue(s) || a).replace(
                    " ",
                    "",
                  )
                );
              }),
              (t.getClassPropertyAlt = function (e, s, a) {
                a === void 0 && (a = "");
                var c = "";
                return (
                  e.classList.forEach(function (u) {
                    u.includes(s) && (c = u);
                  }),
                  c.match(/:(.*)]/) ? c.match(/:(.*)]/)[1] : a
                );
              });
            var d = function (e) {
              return window.getComputedStyle(e).getPropertyValue("z-index");
            };
            (t.getZIndex = d),
              (t.isIOS = function () {
                return (
                  !!/iPad|iPhone|iPod/.test(navigator.platform) ||
                  (navigator.maxTouchPoints &&
                    navigator.maxTouchPoints > 2 &&
                    /MacIntel/.test(navigator.platform))
                );
              }),
              (t.isIpadOS = function () {
                return (
                  navigator.maxTouchPoints &&
                  navigator.maxTouchPoints > 2 &&
                  /MacIntel/.test(navigator.platform)
                );
              }),
              (t.isEnoughSpace = function (e, s, a, c, u) {
                a === void 0 && (a = "auto"),
                  c === void 0 && (c = 10),
                  u === void 0 && (u = null);
                var f = s.getBoundingClientRect(),
                  l = u ? u.getBoundingClientRect() : null,
                  n = window.innerHeight,
                  o = l ? f.top - l.top : f.top,
                  i = (u ? l.bottom : n) - f.bottom,
                  r = e.clientHeight + c;
                return a === "bottom"
                  ? i >= r
                  : a === "top"
                    ? o >= r
                    : o >= r || i >= r;
              }),
              (t.isFormElement = function (e) {
                return (
                  e instanceof HTMLInputElement ||
                  e instanceof HTMLTextAreaElement ||
                  e instanceof HTMLSelectElement
                );
              });
            var h = function (e) {
              return (
                !!e &&
                (window.getComputedStyle(e).display === "none" ||
                  h(e.parentElement))
              );
            };
            (t.isParentOrElementHidden = h),
              (t.debounce = function (e, s) {
                var a;
                return (
                  s === void 0 && (s = 200),
                  function () {
                    for (var c = [], u = 0; u < arguments.length; u++)
                      c[u] = arguments[u];
                    clearTimeout(a),
                      (a = setTimeout(function () {
                        e.apply(p, c);
                      }, s));
                  }
                );
              }),
              (t.dispatch = function (e, s, a) {
                a === void 0 && (a = null);
                var c = new CustomEvent(e, {
                  detail: { payload: a },
                  bubbles: !0,
                  cancelable: !0,
                  composed: !1,
                });
                s.dispatchEvent(c);
              }),
              (t.afterTransition = function (e, s) {
                var a = function () {
                    s(), e.removeEventListener("transitionend", a, !0);
                  },
                  c = window.getComputedStyle(e),
                  u = c.getPropertyValue("transition-duration");
                c.getPropertyValue("transition-property") !== "none" &&
                parseFloat(u) > 0
                  ? e.addEventListener("transitionend", a, !0)
                  : s();
              }),
              (t.htmlToElement = function (e) {
                var s = document.createElement("template");
                return (e = e.trim()), (s.innerHTML = e), s.content.firstChild;
              }),
              (t.classToClassList = function (e, s, a, c) {
                a === void 0 && (a = " "),
                  c === void 0 && (c = "add"),
                  e.split(a).forEach(function (u) {
                    return c === "add"
                      ? s.classList.add(u)
                      : s.classList.remove(u);
                  });
              }),
              (t.menuSearchHistory = {
                historyIndex: -1,
                addHistory: function (e) {
                  this.historyIndex = e;
                },
                existsInHistory: function (e) {
                  return e > this.historyIndex;
                },
                clearHistory: function () {
                  this.historyIndex = -1;
                },
              });
          },
        },
        E = {},
        w = (function m(t) {
          var p = E[t];
          if (p !== void 0) return p.exports;
          var d = (E[t] = { exports: {} });
          return I[t].call(d.exports, d, d.exports, m), d.exports;
        })(166);
      return w;
    })(),
  );
})(C);
