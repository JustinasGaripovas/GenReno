var E = { exports: {} };
(function (m, S) {
  (function (y, v) {
    m.exports = v();
  })(self, () =>
    (() => {
      var y = {
          740: function (g, o, f) {
            /*
             * HSAccordion
             * @version: 2.4.1
             * @author: Preline Labs Ltd.
             * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
             * Copyright 2024 Preline Labs Ltd.
             */ var d,
              h =
                (this && this.__extends) ||
                ((d = function (r, l) {
                  return (
                    (d =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (n, t) {
                          n.__proto__ = t;
                        }) ||
                      function (n, t) {
                        for (var i in t)
                          Object.prototype.hasOwnProperty.call(t, i) &&
                            (n[i] = t[i]);
                      }),
                    d(r, l)
                  );
                }),
                function (r, l) {
                  if (typeof l != "function" && l !== null)
                    throw new TypeError(
                      "Class extends value " +
                        String(l) +
                        " is not a constructor or null",
                    );
                  function n() {
                    this.constructor = r;
                  }
                  d(r, l),
                    (r.prototype =
                      l === null
                        ? Object.create(l)
                        : ((n.prototype = l.prototype), new n()));
                }),
              e =
                (this && this.__assign) ||
                function () {
                  return (
                    (e =
                      Object.assign ||
                      function (r) {
                        for (var l, n = 1, t = arguments.length; n < t; n++)
                          for (var i in (l = arguments[n]))
                            Object.prototype.hasOwnProperty.call(l, i) &&
                              (r[i] = l[i]);
                        return r;
                      }),
                    e.apply(this, arguments)
                  );
                },
              s =
                (this && this.__importDefault) ||
                function (r) {
                  return r && r.__esModule ? r : { default: r };
                };
            Object.defineProperty(o, "__esModule", { value: !0 });
            var c = f(292),
              a = (function (r) {
                function l(n, t, i) {
                  var u = r.call(this, n, t, i) || this;
                  return (
                    (u.toggle =
                      u.el.querySelector(".hs-accordion-toggle") || null),
                    (u.content =
                      u.el.querySelector(".hs-accordion-content") || null),
                    (u.group = u.el.closest(".hs-accordion-group") || null),
                    (u.isAlwaysOpened =
                      u.group.hasAttribute("data-hs-accordion-always-open") ||
                      !1),
                    u.toggle && u.content && u.init(),
                    u
                  );
                }
                return (
                  h(l, r),
                  (l.prototype.init = function () {
                    var n = this;
                    this.createCollection(window.$hsAccordionCollection, this),
                      this.toggle.addEventListener("click", function (t) {
                        t.stopPropagation(),
                          n.el.classList.contains("active")
                            ? n.hide()
                            : n.show();
                      });
                  }),
                  (l.prototype.show = function () {
                    var n,
                      t = this;
                    if (
                      (this.group &&
                        !this.isAlwaysOpened &&
                        this.group.querySelector(
                          ":scope > .hs-accordion.active",
                        ) &&
                        this.group.querySelector(
                          ":scope > .hs-accordion.active",
                        ) !== this.el &&
                        window.$hsAccordionCollection
                          .find(function (i) {
                            return (
                              i.element.el ===
                              t.group.querySelector(
                                ":scope > .hs-accordion.active",
                              )
                            );
                          })
                          .element.hide(),
                      this.el.classList.contains("active"))
                    )
                      return !1;
                    this.el.classList.add("active"),
                      !(
                        (n = this == null ? void 0 : this.toggle) === null ||
                        n === void 0
                      ) &&
                        n.ariaExpanded &&
                        (this.toggle.ariaExpanded = "true"),
                      (this.content.style.display = "block"),
                      (this.content.style.height = "0"),
                      setTimeout(function () {
                        t.content.style.height = "".concat(
                          t.content.scrollHeight,
                          "px",
                        );
                      }),
                      (0, c.afterTransition)(this.content, function () {
                        (t.content.style.display = "block"),
                          (t.content.style.height = ""),
                          t.fireEvent("open", t.el),
                          (0, c.dispatch)("open.hs.accordion", t.el, t.el);
                      });
                  }),
                  (l.prototype.hide = function () {
                    var n,
                      t = this;
                    if (!this.el.classList.contains("active")) return !1;
                    this.el.classList.remove("active"),
                      !(
                        (n = this == null ? void 0 : this.toggle) === null ||
                        n === void 0
                      ) &&
                        n.ariaExpanded &&
                        (this.toggle.ariaExpanded = "false"),
                      (this.content.style.height = "".concat(
                        this.content.scrollHeight,
                        "px",
                      )),
                      setTimeout(function () {
                        t.content.style.height = "0";
                      }),
                      (0, c.afterTransition)(this.content, function () {
                        (t.content.style.display = ""),
                          (t.content.style.height = "0"),
                          t.fireEvent("close", t.el),
                          (0, c.dispatch)("close.hs.accordion", t.el, t.el);
                      });
                  }),
                  (l.getInstance = function (n, t) {
                    var i = window.$hsAccordionCollection.find(function (u) {
                      return (
                        u.element.el ===
                        (typeof n == "string" ? document.querySelector(n) : n)
                      );
                    });
                    return i ? (t ? i : i.element.el) : null;
                  }),
                  (l.show = function (n) {
                    var t = window.$hsAccordionCollection.find(function (i) {
                      return (
                        i.element.el ===
                        (typeof n == "string" ? document.querySelector(n) : n)
                      );
                    });
                    t &&
                      t.element.content.style.display !== "block" &&
                      t.element.show();
                  }),
                  (l.hide = function (n) {
                    var t = window.$hsAccordionCollection.find(function (i) {
                      return (
                        i.element.el ===
                        (typeof n == "string" ? document.querySelector(n) : n)
                      );
                    });
                    t &&
                      t.element.content.style.display === "block" &&
                      t.element.hide();
                  }),
                  (l.autoInit = function () {
                    window.$hsAccordionCollection ||
                      (window.$hsAccordionCollection = []),
                      document
                        .querySelectorAll(
                          ".hs-accordion:not(.--prevent-on-load-init)",
                        )
                        .forEach(function (n) {
                          window.$hsAccordionCollection.find(function (t) {
                            var i;
                            return (
                              ((i = t?.element) === null || i === void 0
                                ? void 0
                                : i.el) === n
                            );
                          }) || new l(n);
                        });
                  }),
                  (l.treeView = function () {
                    var n = this;
                    if (
                      !document.querySelectorAll(".hs-accordion-treeview-root")
                        .length
                    )
                      return !1;
                    (this.selectable = []),
                      document
                        .querySelectorAll(".hs-accordion-treeview-root")
                        .forEach(function (t) {
                          var i = t?.getAttribute("data-hs-accordion-options"),
                            u = i ? JSON.parse(i) : {};
                          n.selectable.push({ el: t, options: e({}, u) });
                        }),
                      this.selectable.length &&
                        this.selectable.forEach(function (t) {
                          t.el
                            .querySelectorAll(".hs-accordion-selectable")
                            .forEach(function (i) {
                              i.addEventListener("click", function (u) {
                                u.stopPropagation(), n.toggleSelected(t, i);
                              });
                            });
                        });
                  }),
                  (l.toggleSelected = function (n, t) {
                    t.classList.contains("selected")
                      ? t.classList.remove("selected")
                      : (n.el
                          .querySelectorAll(".hs-accordion-selectable")
                          .forEach(function (i) {
                            return i.classList.remove("selected");
                          }),
                        t.classList.add("selected"));
                  }),
                  (l.on = function (n, t, i) {
                    var u = window.$hsAccordionCollection.find(function (p) {
                      return (
                        p.element.el ===
                        (typeof t == "string" ? document.querySelector(t) : t)
                      );
                    });
                    u && (u.element.events[n] = i);
                  }),
                  l
                );
              })(s(f(961)).default);
            window.addEventListener("load", function () {
              a.autoInit(),
                document.querySelectorAll(".hs-accordion-treeview-root")
                  .length && a.treeView();
            }),
              typeof window < "u" && (window.HSAccordion = a),
              (o.default = a);
          },
          961: (g, o) => {
            /*
             * HSBasePlugin
             * @version: 2.4.1
             * @author: Preline Labs Ltd.
             * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
             * Copyright 2024 Preline Labs Ltd.
             */ Object.defineProperty(o, "__esModule", { value: !0 });
            var f = (function () {
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
            o.default = f;
          },
          292: function (g, o) {
            var f = this;
            Object.defineProperty(o, "__esModule", { value: !0 }),
              (o.menuSearchHistory =
                o.classToClassList =
                o.htmlToElement =
                o.afterTransition =
                o.dispatch =
                o.debounce =
                o.isFormElement =
                o.isParentOrElementHidden =
                o.isEnoughSpace =
                o.isIpadOS =
                o.isIOS =
                o.getZIndex =
                o.getClassPropertyAlt =
                o.getClassProperty =
                o.stringToBoolean =
                  void 0),
              (o.getHighestZIndex = function (e) {
                var s = Number.NEGATIVE_INFINITY;
                return (
                  e.forEach(function (c) {
                    var a = d(c);
                    a !== "auto" && (a = parseInt(a, 10)) > s && (s = a);
                  }),
                  s
                );
              }),
              (o.stringToBoolean = function (e) {
                return e === "true";
              }),
              (o.getClassProperty = function (e, s, c) {
                return (
                  c === void 0 && (c = ""),
                  (window.getComputedStyle(e).getPropertyValue(s) || c).replace(
                    " ",
                    "",
                  )
                );
              }),
              (o.getClassPropertyAlt = function (e, s, c) {
                c === void 0 && (c = "");
                var a = "";
                return (
                  e.classList.forEach(function (r) {
                    r.includes(s) && (a = r);
                  }),
                  a.match(/:(.*)]/) ? a.match(/:(.*)]/)[1] : c
                );
              });
            var d = function (e) {
              return window.getComputedStyle(e).getPropertyValue("z-index");
            };
            (o.getZIndex = d),
              (o.isIOS = function () {
                return (
                  !!/iPad|iPhone|iPod/.test(navigator.platform) ||
                  (navigator.maxTouchPoints &&
                    navigator.maxTouchPoints > 2 &&
                    /MacIntel/.test(navigator.platform))
                );
              }),
              (o.isIpadOS = function () {
                return (
                  navigator.maxTouchPoints &&
                  navigator.maxTouchPoints > 2 &&
                  /MacIntel/.test(navigator.platform)
                );
              }),
              (o.isEnoughSpace = function (e, s, c, a, r) {
                c === void 0 && (c = "auto"),
                  a === void 0 && (a = 10),
                  r === void 0 && (r = null);
                var l = s.getBoundingClientRect(),
                  n = r ? r.getBoundingClientRect() : null,
                  t = window.innerHeight,
                  i = n ? l.top - n.top : l.top,
                  u = (r ? n.bottom : t) - l.bottom,
                  p = e.clientHeight + a;
                return c === "bottom"
                  ? u >= p
                  : c === "top"
                    ? i >= p
                    : i >= p || u >= p;
              }),
              (o.isFormElement = function (e) {
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
            (o.isParentOrElementHidden = h),
              (o.debounce = function (e, s) {
                var c;
                return (
                  s === void 0 && (s = 200),
                  function () {
                    for (var a = [], r = 0; r < arguments.length; r++)
                      a[r] = arguments[r];
                    clearTimeout(c),
                      (c = setTimeout(function () {
                        e.apply(f, a);
                      }, s));
                  }
                );
              }),
              (o.dispatch = function (e, s, c) {
                c === void 0 && (c = null);
                var a = new CustomEvent(e, {
                  detail: { payload: c },
                  bubbles: !0,
                  cancelable: !0,
                  composed: !1,
                });
                s.dispatchEvent(a);
              }),
              (o.afterTransition = function (e, s) {
                var c = function () {
                    s(), e.removeEventListener("transitionend", c, !0);
                  },
                  a = window.getComputedStyle(e),
                  r = a.getPropertyValue("transition-duration");
                a.getPropertyValue("transition-property") !== "none" &&
                parseFloat(r) > 0
                  ? e.addEventListener("transitionend", c, !0)
                  : s();
              }),
              (o.htmlToElement = function (e) {
                var s = document.createElement("template");
                return (e = e.trim()), (s.innerHTML = e), s.content.firstChild;
              }),
              (o.classToClassList = function (e, s, c, a) {
                c === void 0 && (c = " "),
                  a === void 0 && (a = "add"),
                  e.split(c).forEach(function (r) {
                    return a === "add"
                      ? s.classList.add(r)
                      : s.classList.remove(r);
                  });
              }),
              (o.menuSearchHistory = {
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
        v = {},
        w = (function g(o) {
          var f = v[o];
          if (f !== void 0) return f.exports;
          var d = (v[o] = { exports: {} });
          return y[o].call(d.exports, d, d.exports, g), d.exports;
        })(740);
      return w;
    })(),
  );
})(E);
