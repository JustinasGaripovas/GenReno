var X =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function $(w) {
  return w && w.__esModule && Object.prototype.hasOwnProperty.call(w, "default")
    ? w.default
    : w;
}
var M = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */ (function (w, _) {
  (function (S, g) {
    w.exports = g();
  })(X, function () {
    return (function () {
      var O = {
          686: function (u, c, t) {
            t.d(c, {
              default: function () {
                return V;
              },
            });
            var s = t(279),
              f = t.n(s),
              l = t(370),
              h = t.n(l),
              y = t(817),
              b = t.n(y);
            function d(i) {
              try {
                return document.execCommand(i);
              } catch {
                return !1;
              }
            }
            var v = function (n) {
                var e = b()(n);
                return d("cut"), e;
              },
              p = v;
            function E(i) {
              var n = document.documentElement.getAttribute("dir") === "rtl",
                e = document.createElement("textarea");
              (e.style.fontSize = "12pt"),
                (e.style.border = "0"),
                (e.style.padding = "0"),
                (e.style.margin = "0"),
                (e.style.position = "absolute"),
                (e.style[n ? "right" : "left"] = "-9999px");
              var r = window.pageYOffset || document.documentElement.scrollTop;
              return (
                (e.style.top = "".concat(r, "px")),
                e.setAttribute("readonly", ""),
                (e.value = i),
                e
              );
            }
            var P = function (n, e) {
                var r = E(n);
                e.container.appendChild(r);
                var o = b()(r);
                return d("copy"), r.remove(), o;
              },
              N = function (n) {
                var e =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : { container: document.body },
                  r = "";
                return (
                  typeof n == "string"
                    ? (r = P(n, e))
                    : n instanceof HTMLInputElement &&
                        !["text", "search", "url", "tel", "password"].includes(
                          n?.type,
                        )
                      ? (r = P(n.value, e))
                      : ((r = b()(n)), d("copy")),
                  r
                );
              },
              L = N;
            function x(i) {
              "@babel/helpers - typeof";
              return (
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? (x = function (e) {
                      return typeof e;
                    })
                  : (x = function (e) {
                      return e &&
                        typeof Symbol == "function" &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
                x(i)
              );
            }
            var D = function () {
                var n =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : {},
                  e = n.action,
                  r = e === void 0 ? "copy" : e,
                  o = n.container,
                  a = n.target,
                  m = n.text;
                if (r !== "copy" && r !== "cut")
                  throw new Error(
                    'Invalid "action" value, use either "copy" or "cut"',
                  );
                if (a !== void 0)
                  if (a && x(a) === "object" && a.nodeType === 1) {
                    if (r === "copy" && a.hasAttribute("disabled"))
                      throw new Error(
                        'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute',
                      );
                    if (
                      r === "cut" &&
                      (a.hasAttribute("readonly") || a.hasAttribute("disabled"))
                    )
                      throw new Error(
                        `Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`,
                      );
                  } else
                    throw new Error(
                      'Invalid "target" value, use a valid Element',
                    );
                if (m) return L(m, { container: o });
                if (a) return r === "cut" ? p(a) : L(a, { container: o });
              },
              F = D;
            function T(i) {
              "@babel/helpers - typeof";
              return (
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? (T = function (e) {
                      return typeof e;
                    })
                  : (T = function (e) {
                      return e &&
                        typeof Symbol == "function" &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
                T(i)
              );
            }
            function H(i, n) {
              if (!(i instanceof n))
                throw new TypeError("Cannot call a class as a function");
            }
            function R(i, n) {
              for (var e = 0; e < n.length; e++) {
                var r = n[e];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(i, r.key, r);
              }
            }
            function I(i, n, e) {
              return n && R(i.prototype, n), e && R(i, e), i;
            }
            function q(i, n) {
              if (typeof n != "function" && n !== null)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (i.prototype = Object.create(n && n.prototype, {
                constructor: { value: i, writable: !0, configurable: !0 },
              })),
                n && j(i, n);
            }
            function j(i, n) {
              return (
                (j =
                  Object.setPrototypeOf ||
                  function (r, o) {
                    return (r.__proto__ = o), r;
                  }),
                j(i, n)
              );
            }
            function z(i) {
              var n = G();
              return function () {
                var r = A(i),
                  o;
                if (n) {
                  var a = A(this).constructor;
                  o = Reflect.construct(r, arguments, a);
                } else o = r.apply(this, arguments);
                return U(this, o);
              };
            }
            function U(i, n) {
              return n && (T(n) === "object" || typeof n == "function")
                ? n
                : Y(i);
            }
            function Y(i) {
              if (i === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return i;
            }
            function G() {
              if (
                typeof Reflect > "u" ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            }
            function A(i) {
              return (
                (A = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                A(i)
              );
            }
            function k(i, n) {
              var e = "data-clipboard-".concat(i);
              if (n.hasAttribute(e)) return n.getAttribute(e);
            }
            var J = (function (i) {
                q(e, i);
                var n = z(e);
                function e(r, o) {
                  var a;
                  return (
                    H(this, e),
                    (a = n.call(this)),
                    a.resolveOptions(o),
                    a.listenClick(r),
                    a
                  );
                }
                return (
                  I(
                    e,
                    [
                      {
                        key: "resolveOptions",
                        value: function () {
                          var o =
                            arguments.length > 0 && arguments[0] !== void 0
                              ? arguments[0]
                              : {};
                          (this.action =
                            typeof o.action == "function"
                              ? o.action
                              : this.defaultAction),
                            (this.target =
                              typeof o.target == "function"
                                ? o.target
                                : this.defaultTarget),
                            (this.text =
                              typeof o.text == "function"
                                ? o.text
                                : this.defaultText),
                            (this.container =
                              T(o.container) === "object"
                                ? o.container
                                : document.body);
                        },
                      },
                      {
                        key: "listenClick",
                        value: function (o) {
                          var a = this;
                          this.listener = h()(o, "click", function (m) {
                            return a.onClick(m);
                          });
                        },
                      },
                      {
                        key: "onClick",
                        value: function (o) {
                          var a = o.delegateTarget || o.currentTarget,
                            m = this.action(a) || "copy",
                            C = F({
                              action: m,
                              container: this.container,
                              target: this.target(a),
                              text: this.text(a),
                            });
                          this.emit(C ? "success" : "error", {
                            action: m,
                            text: C,
                            trigger: a,
                            clearSelection: function () {
                              a && a.focus(),
                                window.getSelection().removeAllRanges();
                            },
                          });
                        },
                      },
                      {
                        key: "defaultAction",
                        value: function (o) {
                          return k("action", o);
                        },
                      },
                      {
                        key: "defaultTarget",
                        value: function (o) {
                          var a = k("target", o);
                          if (a) return document.querySelector(a);
                        },
                      },
                      {
                        key: "defaultText",
                        value: function (o) {
                          return k("text", o);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.listener.destroy();
                        },
                      },
                    ],
                    [
                      {
                        key: "copy",
                        value: function (o) {
                          var a =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : { container: document.body };
                          return L(o, a);
                        },
                      },
                      {
                        key: "cut",
                        value: function (o) {
                          return p(o);
                        },
                      },
                      {
                        key: "isSupported",
                        value: function () {
                          var o =
                              arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : ["copy", "cut"],
                            a = typeof o == "string" ? [o] : o,
                            m = !!document.queryCommandSupported;
                          return (
                            a.forEach(function (C) {
                              m = m && !!document.queryCommandSupported(C);
                            }),
                            m
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(f()),
              V = J;
          },
          828: function (u) {
            var c = 9;
            if (typeof Element < "u" && !Element.prototype.matches) {
              var t = Element.prototype;
              t.matches =
                t.matchesSelector ||
                t.mozMatchesSelector ||
                t.msMatchesSelector ||
                t.oMatchesSelector ||
                t.webkitMatchesSelector;
            }
            function s(f, l) {
              for (; f && f.nodeType !== c; ) {
                if (typeof f.matches == "function" && f.matches(l)) return f;
                f = f.parentNode;
              }
            }
            u.exports = s;
          },
          438: function (u, c, t) {
            var s = t(828);
            function f(y, b, d, v, p) {
              var E = h.apply(this, arguments);
              return (
                y.addEventListener(d, E, p),
                {
                  destroy: function () {
                    y.removeEventListener(d, E, p);
                  },
                }
              );
            }
            function l(y, b, d, v, p) {
              return typeof y.addEventListener == "function"
                ? f.apply(null, arguments)
                : typeof d == "function"
                  ? f.bind(null, document).apply(null, arguments)
                  : (typeof y == "string" && (y = document.querySelectorAll(y)),
                    Array.prototype.map.call(y, function (E) {
                      return f(E, b, d, v, p);
                    }));
            }
            function h(y, b, d, v) {
              return function (p) {
                (p.delegateTarget = s(p.target, b)),
                  p.delegateTarget && v.call(y, p);
              };
            }
            u.exports = l;
          },
          879: function (u, c) {
            (c.node = function (t) {
              return (
                t !== void 0 && t instanceof HTMLElement && t.nodeType === 1
              );
            }),
              (c.nodeList = function (t) {
                var s = Object.prototype.toString.call(t);
                return (
                  t !== void 0 &&
                  (s === "[object NodeList]" ||
                    s === "[object HTMLCollection]") &&
                  "length" in t &&
                  (t.length === 0 || c.node(t[0]))
                );
              }),
              (c.string = function (t) {
                return typeof t == "string" || t instanceof String;
              }),
              (c.fn = function (t) {
                var s = Object.prototype.toString.call(t);
                return s === "[object Function]";
              });
          },
          370: function (u, c, t) {
            var s = t(879),
              f = t(438);
            function l(d, v, p) {
              if (!d && !v && !p) throw new Error("Missing required arguments");
              if (!s.string(v))
                throw new TypeError("Second argument must be a String");
              if (!s.fn(p))
                throw new TypeError("Third argument must be a Function");
              if (s.node(d)) return h(d, v, p);
              if (s.nodeList(d)) return y(d, v, p);
              if (s.string(d)) return b(d, v, p);
              throw new TypeError(
                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList",
              );
            }
            function h(d, v, p) {
              return (
                d.addEventListener(v, p),
                {
                  destroy: function () {
                    d.removeEventListener(v, p);
                  },
                }
              );
            }
            function y(d, v, p) {
              return (
                Array.prototype.forEach.call(d, function (E) {
                  E.addEventListener(v, p);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(d, function (E) {
                      E.removeEventListener(v, p);
                    });
                  },
                }
              );
            }
            function b(d, v, p) {
              return f(document.body, d, v, p);
            }
            u.exports = l;
          },
          817: function (u) {
            function c(t) {
              var s;
              if (t.nodeName === "SELECT") t.focus(), (s = t.value);
              else if (t.nodeName === "INPUT" || t.nodeName === "TEXTAREA") {
                var f = t.hasAttribute("readonly");
                f || t.setAttribute("readonly", ""),
                  t.select(),
                  t.setSelectionRange(0, t.value.length),
                  f || t.removeAttribute("readonly"),
                  (s = t.value);
              } else {
                t.hasAttribute("contenteditable") && t.focus();
                var l = window.getSelection(),
                  h = document.createRange();
                h.selectNodeContents(t),
                  l.removeAllRanges(),
                  l.addRange(h),
                  (s = l.toString());
              }
              return s;
            }
            u.exports = c;
          },
          279: function (u) {
            function c() {}
            (c.prototype = {
              on: function (t, s, f) {
                var l = this.e || (this.e = {});
                return (l[t] || (l[t] = [])).push({ fn: s, ctx: f }), this;
              },
              once: function (t, s, f) {
                var l = this;
                function h() {
                  l.off(t, h), s.apply(f, arguments);
                }
                return (h._ = s), this.on(t, h, f);
              },
              emit: function (t) {
                var s = [].slice.call(arguments, 1),
                  f = ((this.e || (this.e = {}))[t] || []).slice(),
                  l = 0,
                  h = f.length;
                for (l; l < h; l++) f[l].fn.apply(f[l].ctx, s);
                return this;
              },
              off: function (t, s) {
                var f = this.e || (this.e = {}),
                  l = f[t],
                  h = [];
                if (l && s)
                  for (var y = 0, b = l.length; y < b; y++)
                    l[y].fn !== s && l[y].fn._ !== s && h.push(l[y]);
                return h.length ? (f[t] = h) : delete f[t], this;
              },
            }),
              (u.exports = c),
              (u.exports.TinyEmitter = c);
          },
        },
        S = {};
      function g(u) {
        if (S[u]) return S[u].exports;
        var c = (S[u] = { exports: {} });
        return O[u](c, c.exports, g), c.exports;
      }
      return (
        (function () {
          g.n = function (u) {
            var c =
              u && u.__esModule
                ? function () {
                    return u.default;
                  }
                : function () {
                    return u;
                  };
            return g.d(c, { a: c }), c;
          };
        })(),
        (function () {
          g.d = function (u, c) {
            for (var t in c)
              g.o(c, t) &&
                !g.o(u, t) &&
                Object.defineProperty(u, t, { enumerable: !0, get: c[t] });
          };
        })(),
        (function () {
          g.o = function (u, c) {
            return Object.prototype.hasOwnProperty.call(u, c);
          };
        })(),
        g(686)
      );
    })().default;
  });
})(M);
var B = M.exports;
const K = $(B);
(function () {
  window.addEventListener("load", () => {
    document.querySelectorAll(".js-clipboard").forEach((_) => {
      new K(_, { text: () => window.location.href }).on("success", () => {
        const S = _.querySelector(".js-clipboard-default"),
          g = _.querySelector(".js-clipboard-success"),
          u = _.querySelector(".js-clipboard-success-text"),
          c = _.dataset.clipboardSuccessText || "";
        let t;
        u && ((t = u.textContent || ""), (u.textContent = c)),
          S && g && ((S.style.display = "none"), (g.style.display = "block")),
          setTimeout(() => {
            u && t !== void 0 && (u.textContent = t),
              S && g && ((g.style.display = ""), (S.style.display = ""));
          }, 800);
      });
    });
  });
})();
