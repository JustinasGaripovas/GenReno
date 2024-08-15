function xo(i, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(i, t.key, t);
  }
}
function wo(i, e, n) {
  return e && xo(i.prototype, e), i;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ve,
  Gr,
  $e,
  Et,
  Mt,
  rr,
  Vn,
  zt,
  mr,
  qn,
  mt,
  ot,
  Kn,
  Zn = function () {
    return (
      ve ||
      (typeof window < "u" && (ve = window.gsap) && ve.registerPlugin && ve)
    );
  },
  Jn = 1,
  tr = [],
  E = [],
  ft = [],
  xr = Date.now,
  fn = function (e, n) {
    return n;
  },
  bo = function () {
    var e = mr.core,
      n = e.bridge || {},
      t = e._scrollers,
      r = e._proxies;
    t.push.apply(t, E),
      r.push.apply(r, ft),
      (E = t),
      (ft = r),
      (fn = function (a, l) {
        return n[a](l);
      });
  },
  Dt = function (e, n) {
    return ~ft.indexOf(e) && ft[ft.indexOf(e) + 1][n];
  },
  wr = function (e) {
    return !!~qn.indexOf(e);
  },
  Re = function (e, n, t, r, o) {
    return e.addEventListener(n, t, { passive: r !== !1, capture: !!o });
  },
  De = function (e, n, t, r) {
    return e.removeEventListener(n, t, !!r);
  },
  Or = "scrollLeft",
  Ar = "scrollTop",
  pn = function () {
    return (mt && mt.isPressed) || E.cache++;
  },
  Zr = function (e, n) {
    var t = function r(o) {
      if (o || o === 0) {
        Jn && ($e.history.scrollRestoration = "manual");
        var a = mt && mt.isPressed;
        (o = r.v = Math.round(o) || (mt && mt.iOS ? 1 : 0)),
          e(o),
          (r.cacheID = E.cache),
          a && fn("ss", o);
      } else
        (n || E.cache !== r.cacheID || fn("ref")) &&
          ((r.cacheID = E.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return (t.offset = 0), e && t;
  },
  Ye = {
    s: Or,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Zr(function (i) {
      return arguments.length
        ? $e.scrollTo(i, ae.sc())
        : $e.pageXOffset || Et[Or] || Mt[Or] || rr[Or] || 0;
    }),
  },
  ae = {
    s: Ar,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ye,
    sc: Zr(function (i) {
      return arguments.length
        ? $e.scrollTo(Ye.sc(), i)
        : $e.pageYOffset || Et[Ar] || Mt[Ar] || rr[Ar] || 0;
    }),
  },
  Xe = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || ve.utils.toArray)(e)[0] ||
      (typeof e == "string" && ve.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Rt = function (e, n) {
    var t = n.s,
      r = n.sc;
    wr(e) && (e = Et.scrollingElement || Mt);
    var o = E.indexOf(e),
      a = r === ae.sc ? 1 : 2;
    !~o && (o = E.push(e) - 1), E[o + a] || Re(e, "scroll", pn);
    var l = E[o + a],
      p =
        l ||
        (E[o + a] =
          Zr(Dt(e, t), !0) ||
          (wr(e)
            ? r
            : Zr(function (w) {
                return arguments.length ? (e[t] = w) : e[t];
              })));
    return (
      (p.target = e),
      l || (p.smooth = ve.getProperty(e, "scrollBehavior") === "smooth"),
      p
    );
  },
  dn = function (e, n, t) {
    var r = e,
      o = e,
      a = xr(),
      l = a,
      p = n || 50,
      w = Math.max(500, p * 3),
      Y = function (_, $) {
        var z = xr();
        $ || z - a > p
          ? ((o = r), (r = _), (l = a), (a = z))
          : t
            ? (r += _)
            : (r = o + ((_ - o) / (z - l)) * (a - l));
      },
      O = function () {
        (o = r = t ? 0 : r), (l = a = 0);
      },
      h = function (_) {
        var $ = l,
          z = o,
          ne = xr();
        return (
          (_ || _ === 0) && _ !== r && Y(_),
          a === l || ne - l > w
            ? 0
            : ((r + (t ? z : -z)) / ((t ? ne : a) - $)) * 1e3
        );
      };
    return { update: Y, reset: O, getVelocity: h };
  },
  fr = function (e, n) {
    return (
      n && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Mn = function (e) {
    var n = Math.max.apply(Math, e),
      t = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(t) ? n : t;
  },
  Qn = function () {
    (mr = ve.core.globals().ScrollTrigger), mr && mr.core && bo();
  },
  jn = function (e) {
    return (
      (ve = e || Zn()),
      !Gr &&
        ve &&
        typeof document < "u" &&
        document.body &&
        (($e = window),
        (Et = document),
        (Mt = Et.documentElement),
        (rr = Et.body),
        (qn = [$e, Et, Mt, rr]),
        ve.utils.clamp,
        (Kn = ve.core.context || function () {}),
        (zt = "onpointerenter" in rr ? "pointer" : "mouse"),
        (Vn = Z.isTouch =
          $e.matchMedia &&
          $e.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in $e ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (ot = Z.eventTypes =
          (
            "ontouchstart" in Mt
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Mt
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Jn = 0);
        }, 500),
        Qn(),
        (Gr = 1)),
      Gr
    );
  };
Ye.op = ae;
E.cache = 0;
var Z = (function () {
  function i(n) {
    this.init(n);
  }
  var e = i.prototype;
  return (
    (e.init = function (t) {
      Gr || jn(ve) || console.warn("Please gsap.registerPlugin(Observer)"),
        mr || Qn();
      var r = t.tolerance,
        o = t.dragMinimum,
        a = t.type,
        l = t.target,
        p = t.lineHeight,
        w = t.debounce,
        Y = t.preventDefault,
        O = t.onStop,
        h = t.onStopDelay,
        c = t.ignore,
        _ = t.wheelSpeed,
        $ = t.event,
        z = t.onDragStart,
        ne = t.onDragEnd,
        H = t.onDrag,
        de = t.onPress,
        k = t.onRelease,
        Ue = t.onRight,
        B = t.onLeft,
        b = t.onUp,
        Se = t.onDown,
        Ie = t.onChangeX,
        g = t.onChangeY,
        ge = t.onChange,
        x = t.onToggleX,
        pt = t.onToggleY,
        oe = t.onHover,
        ke = t.onHoverEnd,
        Te = t.onMove,
        L = t.ignoreCheck,
        J = t.isNormalizer,
        Q = t.onGestureStart,
        s = t.onGestureEnd,
        ie = t.onWheel,
        Ot = t.onEnable,
        wt = t.onDisable,
        Ve = t.onClick,
        dt = t.scrollSpeed,
        Pe = t.capture,
        j = t.allowClicks,
        Ee = t.lockAxis,
        me = t.onLockAxis;
      (this.target = l = Xe(l) || Mt),
        (this.vars = t),
        c && (c = ve.utils.toArray(c)),
        (r = r || 1e-9),
        (o = o || 0),
        (_ = _ || 1),
        (dt = dt || 1),
        (a = a || "wheel,touch,pointer"),
        (w = w !== !1),
        p || (p = parseFloat($e.getComputedStyle(rr).lineHeight) || 22);
      var bt,
        Me,
        Qe,
        A,
        V,
        ze,
        Be,
        u = this,
        Ne = 0,
        gt = 0,
        yt = t.passive || !Y,
        ee = Rt(l, Ye),
        Ct = Rt(l, ae),
        At = ee(),
        Vt = Ct(),
        ue =
          ~a.indexOf("touch") &&
          !~a.indexOf("pointer") &&
          ot[0] === "pointerdown",
        St = wr(l),
        q = l.ownerDocument || Et,
        je = [0, 0, 0],
        qe = [0, 0, 0],
        ht = 0,
        sr = function () {
          return (ht = xr());
        },
        te = function (m, F) {
          return (
            ((u.event = m) && c && ~c.indexOf(m.target)) ||
            (F && ue && m.pointerType !== "touch") ||
            (L && L(m, F))
          );
        },
        Mr = function () {
          u._vx.reset(), u._vy.reset(), Me.pause(), O && O(u);
        },
        kt = function () {
          var m = (u.deltaX = Mn(je)),
            F = (u.deltaY = Mn(qe)),
            f = Math.abs(m) >= r,
            S = Math.abs(F) >= r;
          ge && (f || S) && ge(u, m, F, je, qe),
            f &&
              (Ue && u.deltaX > 0 && Ue(u),
              B && u.deltaX < 0 && B(u),
              Ie && Ie(u),
              x && u.deltaX < 0 != Ne < 0 && x(u),
              (Ne = u.deltaX),
              (je[0] = je[1] = je[2] = 0)),
            S &&
              (Se && u.deltaY > 0 && Se(u),
              b && u.deltaY < 0 && b(u),
              g && g(u),
              pt && u.deltaY < 0 != gt < 0 && pt(u),
              (gt = u.deltaY),
              (qe[0] = qe[1] = qe[2] = 0)),
            (A || Qe) && (Te && Te(u), Qe && (H(u), (Qe = !1)), (A = !1)),
            ze && !(ze = !1) && me && me(u),
            V && (ie(u), (V = !1)),
            (bt = 0);
        },
        qt = function (m, F, f) {
          (je[f] += m),
            (qe[f] += F),
            u._vx.update(m),
            u._vy.update(F),
            w ? bt || (bt = requestAnimationFrame(kt)) : kt();
        },
        Kt = function (m, F) {
          Ee &&
            !Be &&
            ((u.axis = Be = Math.abs(m) > Math.abs(F) ? "x" : "y"), (ze = !0)),
            Be !== "y" && ((je[2] += m), u._vx.update(m, !0)),
            Be !== "x" && ((qe[2] += F), u._vy.update(F, !0)),
            w ? bt || (bt = requestAnimationFrame(kt)) : kt();
        },
        Tt = function (m) {
          if (!te(m, 1)) {
            m = fr(m, Y);
            var F = m.clientX,
              f = m.clientY,
              S = F - u.x,
              v = f - u.y,
              y = u.isDragging;
            (u.x = F),
              (u.y = f),
              (y ||
                Math.abs(u.startX - F) >= o ||
                Math.abs(u.startY - f) >= o) &&
                (H && (Qe = !0),
                y || (u.isDragging = !0),
                Kt(S, v),
                y || (z && z(u)));
          }
        },
        Ft = (u.onPress = function (C) {
          te(C, 1) ||
            (C && C.button) ||
            ((u.axis = Be = null),
            Me.pause(),
            (u.isPressed = !0),
            (C = fr(C)),
            (Ne = gt = 0),
            (u.startX = u.x = C.clientX),
            (u.startY = u.y = C.clientY),
            u._vx.reset(),
            u._vy.reset(),
            Re(J ? l : q, ot[1], Tt, yt, !0),
            (u.deltaX = u.deltaY = 0),
            de && de(u));
        }),
        P = (u.onRelease = function (C) {
          if (!te(C, 1)) {
            De(J ? l : q, ot[1], Tt, !0);
            var m = !isNaN(u.y - u.startY),
              F = u.isDragging,
              f =
                F &&
                (Math.abs(u.x - u.startX) > 3 || Math.abs(u.y - u.startY) > 3),
              S = fr(C);
            !f &&
              m &&
              (u._vx.reset(),
              u._vy.reset(),
              Y &&
                j &&
                ve.delayedCall(0.08, function () {
                  if (xr() - ht > 300 && !C.defaultPrevented) {
                    if (C.target.click) C.target.click();
                    else if (q.createEvent) {
                      var v = q.createEvent("MouseEvents");
                      v.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        $e,
                        1,
                        S.screenX,
                        S.screenY,
                        S.clientX,
                        S.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        C.target.dispatchEvent(v);
                    }
                  }
                })),
              (u.isDragging = u.isGesturing = u.isPressed = !1),
              O && F && !J && Me.restart(!0),
              ne && F && ne(u),
              k && k(u, f);
          }
        }),
        Yt = function (m) {
          return (
            m.touches &&
            m.touches.length > 1 &&
            (u.isGesturing = !0) &&
            Q(m, u.isDragging)
          );
        },
        et = function () {
          return (u.isGesturing = !1) || s(u);
        },
        tt = function (m) {
          if (!te(m)) {
            var F = ee(),
              f = Ct();
            qt((F - At) * dt, (f - Vt) * dt, 1),
              (At = F),
              (Vt = f),
              O && Me.restart(!0);
          }
        },
        rt = function (m) {
          if (!te(m)) {
            (m = fr(m, Y)), ie && (V = !0);
            var F =
              (m.deltaMode === 1 ? p : m.deltaMode === 2 ? $e.innerHeight : 1) *
              _;
            qt(m.deltaX * F, m.deltaY * F, 0), O && !J && Me.restart(!0);
          }
        },
        Lt = function (m) {
          if (!te(m)) {
            var F = m.clientX,
              f = m.clientY,
              S = F - u.x,
              v = f - u.y;
            (u.x = F),
              (u.y = f),
              (A = !0),
              O && Me.restart(!0),
              (S || v) && Kt(S, v);
          }
        },
        Zt = function (m) {
          (u.event = m), oe(u);
        },
        _t = function (m) {
          (u.event = m), ke(u);
        },
        lr = function (m) {
          return te(m) || (fr(m, Y) && Ve(u));
        };
      (Me = u._dc = ve.delayedCall(h || 0.25, Mr).pause()),
        (u.deltaX = u.deltaY = 0),
        (u._vx = dn(0, 50, !0)),
        (u._vy = dn(0, 50, !0)),
        (u.scrollX = ee),
        (u.scrollY = Ct),
        (u.isDragging = u.isGesturing = u.isPressed = !1),
        Kn(this),
        (u.enable = function (C) {
          return (
            u.isEnabled ||
              (Re(St ? q : l, "scroll", pn),
              a.indexOf("scroll") >= 0 && Re(St ? q : l, "scroll", tt, yt, Pe),
              a.indexOf("wheel") >= 0 && Re(l, "wheel", rt, yt, Pe),
              ((a.indexOf("touch") >= 0 && Vn) || a.indexOf("pointer") >= 0) &&
                (Re(l, ot[0], Ft, yt, Pe),
                Re(q, ot[2], P),
                Re(q, ot[3], P),
                j && Re(l, "click", sr, !0, !0),
                Ve && Re(l, "click", lr),
                Q && Re(q, "gesturestart", Yt),
                s && Re(q, "gestureend", et),
                oe && Re(l, zt + "enter", Zt),
                ke && Re(l, zt + "leave", _t),
                Te && Re(l, zt + "move", Lt)),
              (u.isEnabled = !0),
              C && C.type && Ft(C),
              Ot && Ot(u)),
            u
          );
        }),
        (u.disable = function () {
          u.isEnabled &&
            (tr.filter(function (C) {
              return C !== u && wr(C.target);
            }).length || De(St ? q : l, "scroll", pn),
            u.isPressed &&
              (u._vx.reset(), u._vy.reset(), De(J ? l : q, ot[1], Tt, !0)),
            De(St ? q : l, "scroll", tt, Pe),
            De(l, "wheel", rt, Pe),
            De(l, ot[0], Ft, Pe),
            De(q, ot[2], P),
            De(q, ot[3], P),
            De(l, "click", sr, !0),
            De(l, "click", lr),
            De(q, "gesturestart", Yt),
            De(q, "gestureend", et),
            De(l, zt + "enter", Zt),
            De(l, zt + "leave", _t),
            De(l, zt + "move", Lt),
            (u.isEnabled = u.isPressed = u.isDragging = !1),
            wt && wt(u));
        }),
        (u.kill = u.revert =
          function () {
            u.disable();
            var C = tr.indexOf(u);
            C >= 0 && tr.splice(C, 1), mt === u && (mt = 0);
          }),
        tr.push(u),
        J && wr(l) && (mt = u),
        u.enable($);
    }),
    wo(i, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    i
  );
})();
Z.version = "3.12.5";
Z.create = function (i) {
  return new Z(i);
};
Z.register = jn;
Z.getAll = function () {
  return tr.slice();
};
Z.getById = function (i) {
  return tr.filter(function (e) {
    return e.vars.id === i;
  })[0];
};
Zn() && ve.registerPlugin(Z);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var d,
  jt,
  D,
  G,
  it,
  X,
  eo,
  Jr,
  Pr,
  br,
  dr,
  Fr,
  ye,
  tn,
  gn,
  Ae,
  Dn,
  Rn,
  er,
  to,
  nn,
  ro,
  Oe,
  hn,
  no,
  oo,
  Pt,
  _n,
  bn,
  nr,
  yn,
  Qr,
  vn,
  on,
  Yr = 1,
  Ce = Date.now,
  sn = Ce(),
  Je = 0,
  gr = 0,
  On = function (e, n, t) {
    var r = Ge(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (t["_" + n + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  },
  An = function (e, n) {
    return n && (!Ge(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  yo = function i() {
    return gr && requestAnimationFrame(i);
  },
  Fn = function () {
    return (tn = 1);
  },
  Yn = function () {
    return (tn = 0);
  },
  ut = function (e) {
    return e;
  },
  hr = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  io = function () {
    return typeof window < "u";
  },
  so = function () {
    return d || (io() && (d = window.gsap) && d.registerPlugin && d);
  },
  Gt = function (e) {
    return !!~eo.indexOf(e);
  },
  lo = function (e) {
    return (
      (e === "Height" ? yn : D["inner" + e]) ||
      it["client" + e] ||
      X["client" + e]
    );
  },
  ao = function (e) {
    return (
      Dt(e, "getBoundingClientRect") ||
      (Gt(e)
        ? function () {
            return (Kr.width = D.innerWidth), (Kr.height = yn), Kr;
          }
        : function () {
            return vt(e);
          })
    );
  },
  Co = function (e, n, t) {
    var r = t.d,
      o = t.d2,
      a = t.a;
    return (a = Dt(e, "getBoundingClientRect"))
      ? function () {
          return a()[r];
        }
      : function () {
          return (n ? lo(o) : e["client" + o]) || 0;
        };
  },
  So = function (e, n) {
    return !n || ~ft.indexOf(e)
      ? ao(e)
      : function () {
          return Kr;
        };
  },
  ct = function (e, n) {
    var t = n.s,
      r = n.d2,
      o = n.d,
      a = n.a;
    return Math.max(
      0,
      (t = "scroll" + r) && (a = Dt(e, t))
        ? a() - ao(e)()[o]
        : Gt(e)
          ? (it[t] || X[t]) - lo(r)
          : e[t] - e["offset" + r],
    );
  },
  Lr = function (e, n) {
    for (var t = 0; t < er.length; t += 3)
      (!n || ~n.indexOf(er[t + 1])) && e(er[t], er[t + 1], er[t + 2]);
  },
  Ge = function (e) {
    return typeof e == "string";
  },
  Le = function (e) {
    return typeof e == "function";
  },
  _r = function (e) {
    return typeof e == "number";
  },
  Xt = function (e) {
    return typeof e == "object";
  },
  pr = function (e, n, t) {
    return e && e.progress(n ? 0 : 1) && t && e.pause();
  },
  ln = function (e, n) {
    if (e.enabled) {
      var t = e._ctx
        ? e._ctx.add(function () {
            return n(e);
          })
        : n(e);
      t && t.totalTime && (e.callbackAnimation = t);
    }
  },
  Jt = Math.abs,
  uo = "left",
  co = "top",
  Cn = "right",
  Sn = "bottom",
  Nt = "width",
  Ht = "height",
  yr = "Right",
  Cr = "Left",
  Sr = "Top",
  kr = "Bottom",
  re = "padding",
  Ke = "margin",
  ir = "Width",
  kn = "Height",
  le = "px",
  Ze = function (e) {
    return D.getComputedStyle(e);
  },
  ko = function (e) {
    var n = Ze(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
  },
  Ln = function (e, n) {
    for (var t in n) t in e || (e[t] = n[t]);
    return e;
  },
  vt = function (e, n) {
    var t =
        n &&
        Ze(e)[gn] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        d
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = e.getBoundingClientRect();
    return t && t.progress(0).kill(), r;
  },
  jr = function (e, n) {
    var t = n.d2;
    return e["offset" + t] || e["client" + t] || 0;
  },
  fo = function (e) {
    var n = [],
      t = e.labels,
      r = e.duration(),
      o;
    for (o in t) n.push(t[o] / r);
    return n;
  },
  To = function (e) {
    return function (n) {
      return d.utils.snap(fo(e), n);
    };
  },
  Tn = function (e) {
    var n = d.utils.snap(e),
      t =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, o) {
          return r - o;
        });
    return t
      ? function (r, o, a) {
          a === void 0 && (a = 0.001);
          var l;
          if (!o) return n(r);
          if (o > 0) {
            for (r -= a, l = 0; l < t.length; l++) if (t[l] >= r) return t[l];
            return t[l - 1];
          } else for (l = t.length, r += a; l--; ) if (t[l] <= r) return t[l];
          return t[0];
        }
      : function (r, o, a) {
          a === void 0 && (a = 0.001);
          var l = n(r);
          return !o || Math.abs(l - r) < a || l - r < 0 == o < 0
            ? l
            : n(o < 0 ? r - e : r + e);
        };
  },
  Po = function (e) {
    return function (n, t) {
      return Tn(fo(e))(n, t.direction);
    };
  },
  Ir = function (e, n, t, r) {
    return t.split(",").forEach(function (o) {
      return e(n, o, r);
    });
  },
  pe = function (e, n, t, r, o) {
    return e.addEventListener(n, t, { passive: !r, capture: !!o });
  },
  fe = function (e, n, t, r) {
    return e.removeEventListener(n, t, !!r);
  },
  zr = function (e, n, t) {
    (t = t && t.wheelHandler), t && (e(n, "wheel", t), e(n, "touchmove", t));
  },
  In = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Xr = { toggleActions: "play", anticipatePin: 0 },
  en = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  $r = function (e, n) {
    if (Ge(e)) {
      var t = e.indexOf("="),
        r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      ~t && (e.indexOf("%") > t && (r *= n / 100), (e = e.substr(0, t - 1))),
        (e =
          r +
          (e in en
            ? en[e] * n
            : ~e.indexOf("%")
              ? (parseFloat(e) * n) / 100
              : parseFloat(e) || 0));
    }
    return e;
  },
  Br = function (e, n, t, r, o, a, l, p) {
    var w = o.startColor,
      Y = o.endColor,
      O = o.fontSize,
      h = o.indent,
      c = o.fontWeight,
      _ = G.createElement("div"),
      $ = Gt(t) || Dt(t, "pinType") === "fixed",
      z = e.indexOf("scroller") !== -1,
      ne = $ ? X : t,
      H = e.indexOf("start") !== -1,
      de = H ? w : Y,
      k =
        "border-color:" +
        de +
        ";font-size:" +
        O +
        ";color:" +
        de +
        ";font-weight:" +
        c +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (k += "position:" + ((z || p) && $ ? "fixed;" : "absolute;")),
      (z || p || !$) &&
        (k += (r === ae ? Cn : Sn) + ":" + (a + parseFloat(h)) + "px;"),
      l &&
        (k +=
          "box-sizing:border-box;text-align:left;width:" +
          l.offsetWidth +
          "px;"),
      (_._isStart = H),
      _.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
      (_.style.cssText = k),
      (_.innerText = n || n === 0 ? e + "-" + n : e),
      ne.children[0] ? ne.insertBefore(_, ne.children[0]) : ne.appendChild(_),
      (_._offset = _["offset" + r.op.d2]),
      Ur(_, 0, r, H),
      _
    );
  },
  Ur = function (e, n, t, r) {
    var o = { display: "block" },
      a = t[r ? "os2" : "p2"],
      l = t[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (o[t.a + "Percent"] = r ? -100 : 0),
      (o[t.a] = r ? "1px" : 0),
      (o["border" + a + ir] = 1),
      (o["border" + l + ir] = 0),
      (o[t.p] = n + "px"),
      d.set(e, o);
  },
  T = [],
  mn = {},
  Er,
  zn = function () {
    return Ce() - Je > 34 && (Er || (Er = requestAnimationFrame(xt)));
  },
  Qt = function () {
    (!Oe || !Oe.isPressed || Oe.startX > X.clientWidth) &&
      (E.cache++,
      Oe ? Er || (Er = requestAnimationFrame(xt)) : xt(),
      Je || Ut("scrollStart"),
      (Je = Ce()));
  },
  an = function () {
    (oo = D.innerWidth), (no = D.innerHeight);
  },
  vr = function () {
    E.cache++,
      !ye &&
        !ro &&
        !G.fullscreenElement &&
        !G.webkitFullscreenElement &&
        (!hn ||
          oo !== D.innerWidth ||
          Math.abs(D.innerHeight - no) > D.innerHeight * 0.25) &&
        Jr.restart(!0);
  },
  $t = {},
  Eo = [],
  po = function i() {
    return fe(R, "scrollEnd", i) || Bt(!0);
  },
  Ut = function (e) {
    return (
      ($t[e] &&
        $t[e].map(function (n) {
          return n();
        })) ||
      Eo
    );
  },
  We = [],
  go = function (e) {
    for (var n = 0; n < We.length; n += 5)
      (!e || (We[n + 4] && We[n + 4].query === e)) &&
        ((We[n].style.cssText = We[n + 1]),
        We[n].getBBox && We[n].setAttribute("transform", We[n + 2] || ""),
        (We[n + 3].uncache = 1));
  },
  Pn = function (e, n) {
    var t;
    for (Ae = 0; Ae < T.length; Ae++)
      (t = T[Ae]),
        t && (!n || t._ctx === n) && (e ? t.kill(1) : t.revert(!0, !0));
    (Qr = !0), n && go(n), n || Ut("revert");
  },
  ho = function (e, n) {
    E.cache++,
      (n || !Fe) &&
        E.forEach(function (t) {
          return Le(t) && t.cacheID++ && (t.rec = 0);
        }),
      Ge(e) && (D.history.scrollRestoration = bn = e);
  },
  Fe,
  Wt = 0,
  Xn,
  Mo = function () {
    if (Xn !== Wt) {
      var e = (Xn = Wt);
      requestAnimationFrame(function () {
        return e === Wt && Bt(!0);
      });
    }
  },
  _o = function () {
    X.appendChild(nr),
      (yn = (!Oe && nr.offsetHeight) || D.innerHeight),
      X.removeChild(nr);
  },
  Bn = function (e) {
    return Pr(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (n) {
      return (n.style.display = e ? "none" : "block");
    });
  },
  Bt = function (e, n) {
    if (Je && !e && !Qr) {
      pe(R, "scrollEnd", po);
      return;
    }
    _o(),
      (Fe = R.isRefreshing = !0),
      E.forEach(function (r) {
        return Le(r) && ++r.cacheID && (r.rec = r());
      });
    var t = Ut("refreshInit");
    to && R.sort(),
      n || Pn(),
      E.forEach(function (r) {
        Le(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      T.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (Qr = !1),
      T.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var o = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = r.pin[o];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[o] - a), r.refresh();
        }
      }),
      (vn = 1),
      Bn(!0),
      T.forEach(function (r) {
        var o = ct(r.scroller, r._dir),
          a = r.vars.end === "max" || (r._endClamp && r.end > o),
          l = r._startClamp && r.start >= o;
        (a || l) &&
          r.setPositions(
            l ? o - 1 : r.start,
            a ? Math.max(l ? o : r.start + 1, o) : r.end,
            !0,
          );
      }),
      Bn(!1),
      (vn = 0),
      t.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      E.forEach(function (r) {
        Le(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      ho(bn, 1),
      Jr.pause(),
      Wt++,
      (Fe = 2),
      xt(2),
      T.forEach(function (r) {
        return Le(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (Fe = R.isRefreshing = !1),
      Ut("refresh");
  },
  xn = 0,
  Vr = 1,
  Tr,
  xt = function (e) {
    if (e === 2 || (!Fe && !Qr)) {
      (R.isUpdating = !0), Tr && Tr.update(0);
      var n = T.length,
        t = Ce(),
        r = t - sn >= 50,
        o = n && T[0].scroll();
      if (
        ((Vr = xn > o ? -1 : 1),
        Fe || (xn = o),
        r &&
          (Je && !tn && t - Je > 200 && ((Je = 0), Ut("scrollEnd")),
          (dr = sn),
          (sn = t)),
        Vr < 0)
      ) {
        for (Ae = n; Ae-- > 0; ) T[Ae] && T[Ae].update(0, r);
        Vr = 1;
      } else for (Ae = 0; Ae < n; Ae++) T[Ae] && T[Ae].update(0, r);
      R.isUpdating = !1;
    }
    Er = 0;
  },
  wn = [
    uo,
    co,
    Sn,
    Cn,
    Ke + kr,
    Ke + yr,
    Ke + Sr,
    Ke + Cr,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  qr = wn.concat([
    Nt,
    Ht,
    "boxSizing",
    "max" + ir,
    "max" + kn,
    "position",
    Ke,
    re,
    re + Sr,
    re + yr,
    re + kr,
    re + Cr,
  ]),
  Do = function (e, n, t) {
    or(t);
    var r = e._gsap;
    if (r.spacerIsNative) or(r.spacerState);
    else if (e._gsap.swappedIn) {
      var o = n.parentNode;
      o && (o.insertBefore(e, n), o.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  un = function (e, n, t, r) {
    if (!e._gsap.swappedIn) {
      for (var o = wn.length, a = n.style, l = e.style, p; o--; )
        (p = wn[o]), (a[p] = t[p]);
      (a.position = t.position === "absolute" ? "absolute" : "relative"),
        t.display === "inline" && (a.display = "inline-block"),
        (l[Sn] = l[Cn] = "auto"),
        (a.flexBasis = t.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[Nt] = jr(e, Ye) + le),
        (a[Ht] = jr(e, ae) + le),
        (a[re] = l[Ke] = l[co] = l[uo] = "0"),
        or(r),
        (l[Nt] = l["max" + ir] = t[Nt]),
        (l[Ht] = l["max" + kn] = t[Ht]),
        (l[re] = t[re]),
        e.parentNode !== n &&
          (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Ro = /([A-Z])/g,
  or = function (e) {
    if (e) {
      var n = e.t.style,
        t = e.length,
        r = 0,
        o,
        a;
      for ((e.t._gsap || d.core.getCache(e.t)).uncache = 1; r < t; r += 2)
        (a = e[r + 1]),
          (o = e[r]),
          a
            ? (n[o] = a)
            : n[o] && n.removeProperty(o.replace(Ro, "-$1").toLowerCase());
    }
  },
  Nr = function (e) {
    for (var n = qr.length, t = e.style, r = [], o = 0; o < n; o++)
      r.push(qr[o], t[qr[o]]);
    return (r.t = e), r;
  },
  Oo = function (e, n, t) {
    for (var r = [], o = e.length, a = t ? 8 : 0, l; a < o; a += 2)
      (l = e[a]), r.push(l, l in n ? n[l] : e[a + 1]);
    return (r.t = e.t), r;
  },
  Kr = { left: 0, top: 0 },
  Nn = function (e, n, t, r, o, a, l, p, w, Y, O, h, c, _) {
    Le(e) && (e = e(p)),
      Ge(e) &&
        e.substr(0, 3) === "max" &&
        (e = h + (e.charAt(4) === "=" ? $r("0" + e.substr(3), t) : 0));
    var $ = c ? c.time() : 0,
      z,
      ne,
      H;
    if ((c && c.seek(0), isNaN(e) || (e = +e), _r(e)))
      c &&
        (e = d.utils.mapRange(
          c.scrollTrigger.start,
          c.scrollTrigger.end,
          0,
          h,
          e,
        )),
        l && Ur(l, t, r, !0);
    else {
      Le(n) && (n = n(p));
      var de = (e || "0").split(" "),
        k,
        Ue,
        B,
        b;
      (H = Xe(n, p) || X),
        (k = vt(H) || {}),
        (!k || (!k.left && !k.top)) &&
          Ze(H).display === "none" &&
          ((b = H.style.display),
          (H.style.display = "block"),
          (k = vt(H)),
          b ? (H.style.display = b) : H.style.removeProperty("display")),
        (Ue = $r(de[0], k[r.d])),
        (B = $r(de[1] || "0", t)),
        (e = k[r.p] - w[r.p] - Y + Ue + o - B),
        l && Ur(l, B, r, t - B < 20 || (l._isStart && B > 20)),
        (t -= t - B);
    }
    if ((_ && ((p[_] = e || -0.001), e < 0 && (e = 0)), a)) {
      var Se = e + t,
        Ie = a._isStart;
      (z = "scroll" + r.d2),
        Ur(
          a,
          Se,
          r,
          (Ie && Se > 20) ||
            (!Ie && (O ? Math.max(X[z], it[z]) : a.parentNode[z]) <= Se + 1),
        ),
        O &&
          ((w = vt(l)),
          O && (a.style[r.op.p] = w[r.op.p] - r.op.m - a._offset + le));
    }
    return (
      c &&
        H &&
        ((z = vt(H)),
        c.seek(h),
        (ne = vt(H)),
        (c._caScrollDist = z[r.p] - ne[r.p]),
        (e = (e / c._caScrollDist) * h)),
      c && c.seek($),
      c ? e : Math.round(e)
    );
  },
  Ao = /(webkit|moz|length|cssText|inset)/i,
  Hn = function (e, n, t, r) {
    if (e.parentNode !== n) {
      var o = e.style,
        a,
        l;
      if (n === X) {
        (e._stOrig = o.cssText), (l = Ze(e));
        for (a in l)
          !+a &&
            !Ao.test(a) &&
            l[a] &&
            typeof o[a] == "string" &&
            a !== "0" &&
            (o[a] = l[a]);
        (o.top = t), (o.left = r);
      } else o.cssText = e._stOrig;
      (d.core.getCache(e).uncache = 1), n.appendChild(e);
    }
  },
  vo = function (e, n, t) {
    var r = n,
      o = r;
    return function (a) {
      var l = Math.round(e());
      return (
        l !== r &&
          l !== o &&
          Math.abs(l - r) > 3 &&
          Math.abs(l - o) > 3 &&
          ((a = l), t && t()),
        (o = r),
        (r = a),
        a
      );
    };
  },
  Hr = function (e, n, t) {
    var r = {};
    (r[n.p] = "+=" + t), d.set(e, r);
  },
  Wn = function (e, n) {
    var t = Rt(e, n),
      r = "_scroll" + n.p2,
      o = function a(l, p, w, Y, O) {
        var h = a.tween,
          c = p.onComplete,
          _ = {};
        w = w || t();
        var $ = vo(t, w, function () {
          h.kill(), (a.tween = 0);
        });
        return (
          (O = (Y && O) || 0),
          (Y = Y || l - w),
          h && h.kill(),
          (p[r] = l),
          (p.inherit = !1),
          (p.modifiers = _),
          (_[r] = function () {
            return $(w + Y * h.ratio + O * h.ratio * h.ratio);
          }),
          (p.onUpdate = function () {
            E.cache++, a.tween && xt();
          }),
          (p.onComplete = function () {
            (a.tween = 0), c && c.call(h);
          }),
          (h = a.tween = d.to(e, p)),
          h
        );
      };
    return (
      (e[r] = t),
      (t.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      pe(e, "wheel", t.wheelHandler),
      R.isTouch && pe(e, "touchmove", t.wheelHandler),
      o
    );
  },
  R = (function () {
    function i(n, t) {
      jt ||
        i.register(d) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        _n(this),
        this.init(n, t);
    }
    var e = i.prototype;
    return (
      (e.init = function (t, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !gr)
        ) {
          this.update = this.refresh = this.kill = ut;
          return;
        }
        t = Ln(Ge(t) || _r(t) || t.nodeType ? { trigger: t } : t, Xr);
        var o = t,
          a = o.onUpdate,
          l = o.toggleClass,
          p = o.id,
          w = o.onToggle,
          Y = o.onRefresh,
          O = o.scrub,
          h = o.trigger,
          c = o.pin,
          _ = o.pinSpacing,
          $ = o.invalidateOnRefresh,
          z = o.anticipatePin,
          ne = o.onScrubComplete,
          H = o.onSnapComplete,
          de = o.once,
          k = o.snap,
          Ue = o.pinReparent,
          B = o.pinSpacer,
          b = o.containerAnimation,
          Se = o.fastScrollEnd,
          Ie = o.preventOverlaps,
          g =
            t.horizontal || (t.containerAnimation && t.horizontal !== !1)
              ? Ye
              : ae,
          ge = !O && O !== 0,
          x = Xe(t.scroller || D),
          pt = d.core.getCache(x),
          oe = Gt(x),
          ke =
            ("pinType" in t
              ? t.pinType
              : Dt(x, "pinType") || (oe && "fixed")) === "fixed",
          Te = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          L = ge && t.toggleActions.split(" "),
          J = "markers" in t ? t.markers : Xr.markers,
          Q = oe ? 0 : parseFloat(Ze(x)["border" + g.p2 + ir]) || 0,
          s = this,
          ie =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(s);
            },
          Ot = Co(x, oe, g),
          wt = So(x, oe),
          Ve = 0,
          dt = 0,
          Pe = 0,
          j = Rt(x, g),
          Ee,
          me,
          bt,
          Me,
          Qe,
          A,
          V,
          ze,
          Be,
          u,
          Ne,
          gt,
          yt,
          ee,
          Ct,
          At,
          Vt,
          ue,
          St,
          q,
          je,
          qe,
          ht,
          sr,
          te,
          Mr,
          kt,
          qt,
          Kt,
          Tt,
          Ft,
          P,
          Yt,
          et,
          tt,
          rt,
          Lt,
          Zt,
          _t;
        if (
          ((s._startClamp = s._endClamp = !1),
          (s._dir = g),
          (z *= 45),
          (s.scroller = x),
          (s.scroll = b ? b.time.bind(b) : j),
          (Me = j()),
          (s.vars = t),
          (r = r || t.animation),
          "refreshPriority" in t &&
            ((to = 1), t.refreshPriority === -9999 && (Tr = s)),
          (pt.tweenScroll = pt.tweenScroll || {
            top: Wn(x, ae),
            left: Wn(x, Ye),
          }),
          (s.tweenTo = Ee = pt.tweenScroll[g.p]),
          (s.scrubDuration = function (f) {
            (Yt = _r(f) && f),
              Yt
                ? P
                  ? P.duration(f)
                  : (P = d.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Yt,
                      paused: !0,
                      onComplete: function () {
                        return ne && ne(s);
                      },
                    }))
                : (P && P.progress(1).kill(), (P = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !s.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (s.animation = r.pause()),
            (r.scrollTrigger = s),
            s.scrubDuration(O),
            (Tt = 0),
            p || (p = r.vars.id)),
          k &&
            ((!Xt(k) || k.push) && (k = { snapTo: k }),
            "scrollBehavior" in X.style &&
              d.set(oe ? [X, it] : x, { scrollBehavior: "auto" }),
            E.forEach(function (f) {
              return (
                Le(f) &&
                f.target === (oe ? G.scrollingElement || it : x) &&
                (f.smooth = !1)
              );
            }),
            (bt = Le(k.snapTo)
              ? k.snapTo
              : k.snapTo === "labels"
                ? To(r)
                : k.snapTo === "labelsDirectional"
                  ? Po(r)
                  : k.directional !== !1
                    ? function (f, S) {
                        return Tn(k.snapTo)(
                          f,
                          Ce() - dt < 500 ? 0 : S.direction,
                        );
                      }
                    : d.utils.snap(k.snapTo)),
            (et = k.duration || { min: 0.1, max: 2 }),
            (et = Xt(et) ? br(et.min, et.max) : br(et, et)),
            (tt = d
              .delayedCall(k.delay || Yt / 2 || 0.1, function () {
                var f = j(),
                  S = Ce() - dt < 500,
                  v = Ee.tween;
                if (
                  (S || Math.abs(s.getVelocity()) < 10) &&
                  !v &&
                  !tn &&
                  Ve !== f
                ) {
                  var y = (f - A) / ee,
                    ce = r && !ge ? r.totalProgress() : y,
                    M = S ? 0 : ((ce - Ft) / (Ce() - dr)) * 1e3 || 0,
                    K = d.utils.clamp(-y, 1 - y, (Jt(M / 2) * M) / 0.185),
                    xe = y + (k.inertia === !1 ? 0 : K),
                    U,
                    N,
                    I = k,
                    nt = I.onStart,
                    W = I.onInterrupt,
                    He = I.onComplete;
                  if (
                    ((U = bt(xe, s)),
                    _r(U) || (U = xe),
                    (N = Math.round(A + U * ee)),
                    f <= V && f >= A && N !== f)
                  ) {
                    if (v && !v._initted && v.data <= Jt(N - f)) return;
                    k.inertia === !1 && (K = U - y),
                      Ee(
                        N,
                        {
                          duration: et(
                            Jt(
                              (Math.max(Jt(xe - ce), Jt(U - ce)) * 0.185) /
                                M /
                                0.05 || 0,
                            ),
                          ),
                          ease: k.ease || "power3",
                          data: Jt(N - f),
                          onInterrupt: function () {
                            return tt.restart(!0) && W && W(s);
                          },
                          onComplete: function () {
                            s.update(),
                              (Ve = j()),
                              r &&
                                (P
                                  ? P.resetTo(
                                      "totalProgress",
                                      U,
                                      r._tTime / r._tDur,
                                    )
                                  : r.progress(U)),
                              (Tt = Ft =
                                r && !ge ? r.totalProgress() : s.progress),
                              H && H(s),
                              He && He(s);
                          },
                        },
                        f,
                        K * ee,
                        N - f - K * ee,
                      ),
                      nt && nt(s, Ee.tween);
                  }
                } else s.isActive && Ve !== f && tt.restart(!0);
              })
              .pause())),
          p && (mn[p] = s),
          (h = s.trigger = Xe(h || (c !== !0 && c))),
          (_t = h && h._gsap && h._gsap.stRevert),
          _t && (_t = _t(s)),
          (c = c === !0 ? h : Xe(c)),
          Ge(l) && (l = { targets: h, className: l }),
          c &&
            (_ === !1 ||
              _ === Ke ||
              (_ =
                !_ &&
                c.parentNode &&
                c.parentNode.style &&
                Ze(c.parentNode).display === "flex"
                  ? !1
                  : re),
            (s.pin = c),
            (me = d.core.getCache(c)),
            me.spacer
              ? (Ct = me.pinState)
              : (B &&
                  ((B = Xe(B)),
                  B && !B.nodeType && (B = B.current || B.nativeElement),
                  (me.spacerIsNative = !!B),
                  B && (me.spacerState = Nr(B))),
                (me.spacer = ue = B || G.createElement("div")),
                ue.classList.add("pin-spacer"),
                p && ue.classList.add("pin-spacer-" + p),
                (me.pinState = Ct = Nr(c))),
            t.force3D !== !1 && d.set(c, { force3D: !0 }),
            (s.spacer = ue = me.spacer),
            (Kt = Ze(c)),
            (sr = Kt[_ + g.os2]),
            (q = d.getProperty(c)),
            (je = d.quickSetter(c, g.a, le)),
            un(c, ue, Kt),
            (Vt = Nr(c))),
          J)
        ) {
          (gt = Xt(J) ? Ln(J, In) : In),
            (u = Br("scroller-start", p, x, g, gt, 0)),
            (Ne = Br("scroller-end", p, x, g, gt, 0, u)),
            (St = u["offset" + g.op.d2]);
          var lr = Xe(Dt(x, "content") || x);
          (ze = this.markerStart = Br("start", p, lr, g, gt, St, 0, b)),
            (Be = this.markerEnd = Br("end", p, lr, g, gt, St, 0, b)),
            b && (Zt = d.quickSetter([ze, Be], g.a, le)),
            !ke &&
              !(ft.length && Dt(x, "fixedMarkers") === !0) &&
              (ko(oe ? X : x),
              d.set([u, Ne], { force3D: !0 }),
              (Mr = d.quickSetter(u, g.a, le)),
              (qt = d.quickSetter(Ne, g.a, le)));
        }
        if (b) {
          var C = b.vars.onUpdate,
            m = b.vars.onUpdateParams;
          b.eventCallback("onUpdate", function () {
            s.update(0, 0, 1), C && C.apply(b, m || []);
          });
        }
        if (
          ((s.previous = function () {
            return T[T.indexOf(s) - 1];
          }),
          (s.next = function () {
            return T[T.indexOf(s) + 1];
          }),
          (s.revert = function (f, S) {
            if (!S) return s.kill(!0);
            var v = f !== !1 || !s.enabled,
              y = ye;
            v !== s.isReverted &&
              (v &&
                ((rt = Math.max(j(), s.scroll.rec || 0)),
                (Pe = s.progress),
                (Lt = r && r.progress())),
              ze &&
                [ze, Be, u, Ne].forEach(function (ce) {
                  return (ce.style.display = v ? "none" : "block");
                }),
              v && ((ye = s), s.update(v)),
              c &&
                (!Ue || !s.isActive) &&
                (v ? Do(c, ue, Ct) : un(c, ue, Ze(c), te)),
              v || s.update(v),
              (ye = y),
              (s.isReverted = v));
          }),
          (s.refresh = function (f, S, v, y) {
            if (!((ye || !s.enabled) && !S)) {
              if (c && f && Je) {
                pe(i, "scrollEnd", po);
                return;
              }
              !Fe && ie && ie(s),
                (ye = s),
                Ee.tween && !v && (Ee.tween.kill(), (Ee.tween = 0)),
                P && P.pause(),
                $ && r && r.revert({ kill: !1 }).invalidate(),
                s.isReverted || s.revert(!0, !0),
                (s._subPinOffset = !1);
              var ce = Ot(),
                M = wt(),
                K = b ? b.duration() : ct(x, g),
                xe = ee <= 0.01,
                U = 0,
                N = y || 0,
                I = Xt(v) ? v.end : t.end,
                nt = t.endTrigger || h,
                W = Xt(v)
                  ? v.start
                  : t.start || (t.start === 0 || !h ? 0 : c ? "0 0" : "0 100%"),
                He = (s.pinnedContainer =
                  t.pinnedContainer && Xe(t.pinnedContainer, s)),
                st = (h && Math.max(0, T.indexOf(s))) || 0,
                he = st,
                _e,
                we,
                It,
                Dr,
                be,
                se,
                lt,
                rn,
                En,
                ar,
                at,
                ur,
                Rr;
              for (
                J &&
                Xt(v) &&
                ((ur = d.getProperty(u, g.p)), (Rr = d.getProperty(Ne, g.p)));
                he--;

              )
                (se = T[he]),
                  se.end || se.refresh(0, 1) || (ye = s),
                  (lt = se.pin),
                  lt &&
                    (lt === h || lt === c || lt === He) &&
                    !se.isReverted &&
                    (ar || (ar = []), ar.unshift(se), se.revert(!0, !0)),
                  se !== T[he] && (st--, he--);
              for (
                Le(W) && (W = W(s)),
                  W = On(W, "start", s),
                  A =
                    Nn(
                      W,
                      h,
                      ce,
                      g,
                      j(),
                      ze,
                      u,
                      s,
                      M,
                      Q,
                      ke,
                      K,
                      b,
                      s._startClamp && "_startClamp",
                    ) || (c ? -0.001 : 0),
                  Le(I) && (I = I(s)),
                  Ge(I) &&
                    !I.indexOf("+=") &&
                    (~I.indexOf(" ")
                      ? (I = (Ge(W) ? W.split(" ")[0] : "") + I)
                      : ((U = $r(I.substr(2), ce)),
                        (I = Ge(W)
                          ? W
                          : (b
                              ? d.utils.mapRange(
                                  0,
                                  b.duration(),
                                  b.scrollTrigger.start,
                                  b.scrollTrigger.end,
                                  A,
                                )
                              : A) + U),
                        (nt = h))),
                  I = On(I, "end", s),
                  V =
                    Math.max(
                      A,
                      Nn(
                        I || (nt ? "100% 0" : K),
                        nt,
                        ce,
                        g,
                        j() + U,
                        Be,
                        Ne,
                        s,
                        M,
                        Q,
                        ke,
                        K,
                        b,
                        s._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  U = 0,
                  he = st;
                he--;

              )
                (se = T[he]),
                  (lt = se.pin),
                  lt &&
                    se.start - se._pinPush <= A &&
                    !b &&
                    se.end > 0 &&
                    ((_e =
                      se.end -
                      (s._startClamp ? Math.max(0, se.start) : se.start)),
                    ((lt === h && se.start - se._pinPush < A) || lt === He) &&
                      isNaN(W) &&
                      (U += _e * (1 - se.progress)),
                    lt === c && (N += _e));
              if (
                ((A += U),
                (V += U),
                s._startClamp && (s._startClamp += U),
                s._endClamp &&
                  !Fe &&
                  ((s._endClamp = V || -0.001), (V = Math.min(V, ct(x, g)))),
                (ee = V - A || ((A -= 0.01) && 0.001)),
                xe && (Pe = d.utils.clamp(0, 1, d.utils.normalize(A, V, rt))),
                (s._pinPush = N),
                ze &&
                  U &&
                  ((_e = {}),
                  (_e[g.a] = "+=" + U),
                  He && (_e[g.p] = "-=" + j()),
                  d.set([ze, Be], _e)),
                c && !(vn && s.end >= ct(x, g)))
              )
                (_e = Ze(c)),
                  (Dr = g === ae),
                  (It = j()),
                  (qe = parseFloat(q(g.a)) + N),
                  !K &&
                    V > 1 &&
                    ((at = (oe ? G.scrollingElement || it : x).style),
                    (at = {
                      style: at,
                      value: at["overflow" + g.a.toUpperCase()],
                    }),
                    oe &&
                      Ze(X)["overflow" + g.a.toUpperCase()] !== "scroll" &&
                      (at.style["overflow" + g.a.toUpperCase()] = "scroll")),
                  un(c, ue, _e),
                  (Vt = Nr(c)),
                  (we = vt(c, !0)),
                  (rn = ke && Rt(x, Dr ? Ye : ae)()),
                  _
                    ? ((te = [_ + g.os2, ee + N + le]),
                      (te.t = ue),
                      (he = _ === re ? jr(c, g) + ee + N : 0),
                      he &&
                        (te.push(g.d, he + le),
                        ue.style.flexBasis !== "auto" &&
                          (ue.style.flexBasis = he + le)),
                      or(te),
                      He &&
                        T.forEach(function (cr) {
                          cr.pin === He &&
                            cr.vars.pinSpacing !== !1 &&
                            (cr._subPinOffset = !0);
                        }),
                      ke && j(rt))
                    : ((he = jr(c, g)),
                      he &&
                        ue.style.flexBasis !== "auto" &&
                        (ue.style.flexBasis = he + le)),
                  ke &&
                    ((be = {
                      top: we.top + (Dr ? It - A : rn) + le,
                      left: we.left + (Dr ? rn : It - A) + le,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (be[Nt] = be["max" + ir] = Math.ceil(we.width) + le),
                    (be[Ht] = be["max" + kn] = Math.ceil(we.height) + le),
                    (be[Ke] =
                      be[Ke + Sr] =
                      be[Ke + yr] =
                      be[Ke + kr] =
                      be[Ke + Cr] =
                        "0"),
                    (be[re] = _e[re]),
                    (be[re + Sr] = _e[re + Sr]),
                    (be[re + yr] = _e[re + yr]),
                    (be[re + kr] = _e[re + kr]),
                    (be[re + Cr] = _e[re + Cr]),
                    (At = Oo(Ct, be, Ue)),
                    Fe && j(0)),
                  r
                    ? ((En = r._initted),
                      nn(1),
                      r.render(r.duration(), !0, !0),
                      (ht = q(g.a) - qe + ee + N),
                      (kt = Math.abs(ee - ht) > 1),
                      ke && kt && At.splice(At.length - 2, 2),
                      r.render(0, !0, !0),
                      En || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      nn(0))
                    : (ht = ee),
                  at &&
                    (at.value
                      ? (at.style["overflow" + g.a.toUpperCase()] = at.value)
                      : at.style.removeProperty("overflow-" + g.a));
              else if (h && j() && !b)
                for (we = h.parentNode; we && we !== X; )
                  we._pinOffset && ((A -= we._pinOffset), (V -= we._pinOffset)),
                    (we = we.parentNode);
              ar &&
                ar.forEach(function (cr) {
                  return cr.revert(!1, !0);
                }),
                (s.start = A),
                (s.end = V),
                (Me = Qe = Fe ? rt : j()),
                !b && !Fe && (Me < rt && j(rt), (s.scroll.rec = 0)),
                s.revert(!1, !0),
                (dt = Ce()),
                tt && ((Ve = -1), tt.restart(!0)),
                (ye = 0),
                r &&
                  ge &&
                  (r._initted || Lt) &&
                  r.progress() !== Lt &&
                  r.progress(Lt || 0, !0).render(r.time(), !0, !0),
                (xe || Pe !== s.progress || b || $) &&
                  (r &&
                    !ge &&
                    r.totalProgress(
                      b && A < -0.001 && !Pe ? d.utils.normalize(A, V, 0) : Pe,
                      !0,
                    ),
                  (s.progress = xe || (Me - A) / ee === Pe ? 0 : Pe)),
                c && _ && (ue._pinOffset = Math.round(s.progress * ht)),
                P && P.invalidate(),
                isNaN(ur) ||
                  ((ur -= d.getProperty(u, g.p)),
                  (Rr -= d.getProperty(Ne, g.p)),
                  Hr(u, g, ur),
                  Hr(ze, g, ur - (y || 0)),
                  Hr(Ne, g, Rr),
                  Hr(Be, g, Rr - (y || 0))),
                xe && !Fe && s.update(),
                Y && !Fe && !yt && ((yt = !0), Y(s), (yt = !1));
            }
          }),
          (s.getVelocity = function () {
            return ((j() - Qe) / (Ce() - dr)) * 1e3 || 0;
          }),
          (s.endAnimation = function () {
            pr(s.callbackAnimation),
              r &&
                (P
                  ? P.progress(1)
                  : r.paused()
                    ? ge || pr(r, s.direction < 0, 1)
                    : pr(r, r.reversed()));
          }),
          (s.labelToScroll = function (f) {
            return (
              (r &&
                r.labels &&
                (A || s.refresh() || A) + (r.labels[f] / r.duration()) * ee) ||
              0
            );
          }),
          (s.getTrailing = function (f) {
            var S = T.indexOf(s),
              v = s.direction > 0 ? T.slice(0, S).reverse() : T.slice(S + 1);
            return (
              Ge(f)
                ? v.filter(function (y) {
                    return y.vars.preventOverlaps === f;
                  })
                : v
            ).filter(function (y) {
              return s.direction > 0 ? y.end <= A : y.start >= V;
            });
          }),
          (s.update = function (f, S, v) {
            if (!(b && !v && !f)) {
              var y = Fe === !0 ? rt : s.scroll(),
                ce = f ? 0 : (y - A) / ee,
                M = ce < 0 ? 0 : ce > 1 ? 1 : ce || 0,
                K = s.progress,
                xe,
                U,
                N,
                I,
                nt,
                W,
                He,
                st;
              if (
                (S &&
                  ((Qe = Me),
                  (Me = b ? j() : y),
                  k && ((Ft = Tt), (Tt = r && !ge ? r.totalProgress() : M))),
                z &&
                  c &&
                  !ye &&
                  !Yr &&
                  Je &&
                  (!M && A < y + ((y - Qe) / (Ce() - dr)) * z
                    ? (M = 1e-4)
                    : M === 1 &&
                      V > y + ((y - Qe) / (Ce() - dr)) * z &&
                      (M = 0.9999)),
                M !== K && s.enabled)
              ) {
                if (
                  ((xe = s.isActive = !!M && M < 1),
                  (U = !!K && K < 1),
                  (W = xe !== U),
                  (nt = W || !!M != !!K),
                  (s.direction = M > K ? 1 : -1),
                  (s.progress = M),
                  nt &&
                    !ye &&
                    ((N = M && !K ? 0 : M === 1 ? 1 : K === 1 ? 2 : 3),
                    ge &&
                      ((I = (!W && L[N + 1] !== "none" && L[N + 1]) || L[N]),
                      (st =
                        r && (I === "complete" || I === "reset" || I in r)))),
                  Ie &&
                    (W || st) &&
                    (st || O || !r) &&
                    (Le(Ie)
                      ? Ie(s)
                      : s.getTrailing(Ie).forEach(function (It) {
                          return It.endAnimation();
                        })),
                  ge ||
                    (P && !ye && !Yr
                      ? (P._dp._time - P._start !== P._time &&
                          P.render(P._dp._time - P._start),
                        P.resetTo
                          ? P.resetTo("totalProgress", M, r._tTime / r._tDur)
                          : ((P.vars.totalProgress = M),
                            P.invalidate().restart()))
                      : r && r.totalProgress(M, !!(ye && (dt || f)))),
                  c)
                ) {
                  if ((f && _ && (ue.style[_ + g.os2] = sr), !ke))
                    je(hr(qe + ht * M));
                  else if (nt) {
                    if (
                      ((He = !f && M > K && V + 1 > y && y + 1 >= ct(x, g)), Ue)
                    )
                      if (!f && (xe || He)) {
                        var he = vt(c, !0),
                          _e = y - A;
                        Hn(
                          c,
                          X,
                          he.top + (g === ae ? _e : 0) + le,
                          he.left + (g === ae ? 0 : _e) + le,
                        );
                      } else Hn(c, ue);
                    or(xe || He ? At : Vt),
                      (kt && M < 1 && xe) || je(qe + (M === 1 && !He ? ht : 0));
                  }
                }
                k && !Ee.tween && !ye && !Yr && tt.restart(!0),
                  l &&
                    (W || (de && M && (M < 1 || !on))) &&
                    Pr(l.targets).forEach(function (It) {
                      return It.classList[xe || de ? "add" : "remove"](
                        l.className,
                      );
                    }),
                  a && !ge && !f && a(s),
                  nt && !ye
                    ? (ge &&
                        (st &&
                          (I === "complete"
                            ? r.pause().totalProgress(1)
                            : I === "reset"
                              ? r.restart(!0).pause()
                              : I === "restart"
                                ? r.restart(!0)
                                : r[I]()),
                        a && a(s)),
                      (W || !on) &&
                        (w && W && ln(s, w),
                        Te[N] && ln(s, Te[N]),
                        de && (M === 1 ? s.kill(!1, 1) : (Te[N] = 0)),
                        W || ((N = M === 1 ? 1 : 3), Te[N] && ln(s, Te[N]))),
                      Se &&
                        !xe &&
                        Math.abs(s.getVelocity()) > (_r(Se) ? Se : 2500) &&
                        (pr(s.callbackAnimation),
                        P ? P.progress(1) : pr(r, I === "reverse" ? 1 : !M, 1)))
                    : ge && a && !ye && a(s);
              }
              if (qt) {
                var we = b ? (y / b.duration()) * (b._caScrollDist || 0) : y;
                Mr(we + (u._isFlipped ? 1 : 0)), qt(we);
              }
              Zt && Zt((-y / b.duration()) * (b._caScrollDist || 0));
            }
          }),
          (s.enable = function (f, S) {
            s.enabled ||
              ((s.enabled = !0),
              pe(x, "resize", vr),
              oe || pe(x, "scroll", Qt),
              ie && pe(i, "refreshInit", ie),
              f !== !1 && ((s.progress = Pe = 0), (Me = Qe = Ve = j())),
              S !== !1 && s.refresh());
          }),
          (s.getTween = function (f) {
            return f && Ee ? Ee.tween : P;
          }),
          (s.setPositions = function (f, S, v, y) {
            if (b) {
              var ce = b.scrollTrigger,
                M = b.duration(),
                K = ce.end - ce.start;
              (f = ce.start + (K * f) / M), (S = ce.start + (K * S) / M);
            }
            s.refresh(
              !1,
              !1,
              {
                start: An(f, v && !!s._startClamp),
                end: An(S, v && !!s._endClamp),
              },
              y,
            ),
              s.update();
          }),
          (s.adjustPinSpacing = function (f) {
            if (te && f) {
              var S = te.indexOf(g.d) + 1;
              (te[S] = parseFloat(te[S]) + f + le),
                (te[1] = parseFloat(te[1]) + f + le),
                or(te);
            }
          }),
          (s.disable = function (f, S) {
            if (
              s.enabled &&
              (f !== !1 && s.revert(!0, !0),
              (s.enabled = s.isActive = !1),
              S || (P && P.pause()),
              (rt = 0),
              me && (me.uncache = 1),
              ie && fe(i, "refreshInit", ie),
              tt && (tt.pause(), Ee.tween && Ee.tween.kill() && (Ee.tween = 0)),
              !oe)
            ) {
              for (var v = T.length; v--; )
                if (T[v].scroller === x && T[v] !== s) return;
              fe(x, "resize", vr), oe || fe(x, "scroll", Qt);
            }
          }),
          (s.kill = function (f, S) {
            s.disable(f, S), P && !S && P.kill(), p && delete mn[p];
            var v = T.indexOf(s);
            v >= 0 && T.splice(v, 1),
              v === Ae && Vr > 0 && Ae--,
              (v = 0),
              T.forEach(function (y) {
                return y.scroller === s.scroller && (v = 1);
              }),
              v || Fe || (s.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                f && r.revert({ kill: !1 }),
                S || r.kill()),
              ze &&
                [ze, Be, u, Ne].forEach(function (y) {
                  return y.parentNode && y.parentNode.removeChild(y);
                }),
              Tr === s && (Tr = 0),
              c &&
                (me && (me.uncache = 1),
                (v = 0),
                T.forEach(function (y) {
                  return y.pin === c && v++;
                }),
                v || (me.spacer = 0)),
              t.onKill && t.onKill(s);
          }),
          T.push(s),
          s.enable(!1, !1),
          _t && _t(s),
          r && r.add && !ee)
        ) {
          var F = s.update;
          (s.update = function () {
            (s.update = F), A || V || s.refresh();
          }),
            d.delayedCall(0.01, s.update),
            (ee = 0.01),
            (A = V = 0);
        } else s.refresh();
        c && Mo();
      }),
      (i.register = function (t) {
        return (
          jt ||
            ((d = t || so()), io() && window.document && i.enable(), (jt = gr)),
          jt
        );
      }),
      (i.defaults = function (t) {
        if (t) for (var r in t) Xr[r] = t[r];
        return Xr;
      }),
      (i.disable = function (t, r) {
        (gr = 0),
          T.forEach(function (a) {
            return a[r ? "kill" : "disable"](t);
          }),
          fe(D, "wheel", Qt),
          fe(G, "scroll", Qt),
          clearInterval(Fr),
          fe(G, "touchcancel", ut),
          fe(X, "touchstart", ut),
          Ir(fe, G, "pointerdown,touchstart,mousedown", Fn),
          Ir(fe, G, "pointerup,touchend,mouseup", Yn),
          Jr.kill(),
          Lr(fe);
        for (var o = 0; o < E.length; o += 3)
          zr(fe, E[o], E[o + 1]), zr(fe, E[o], E[o + 2]);
      }),
      (i.enable = function () {
        if (
          ((D = window),
          (G = document),
          (it = G.documentElement),
          (X = G.body),
          d &&
            ((Pr = d.utils.toArray),
            (br = d.utils.clamp),
            (_n = d.core.context || ut),
            (nn = d.core.suppressOverwrites || ut),
            (bn = D.history.scrollRestoration || "auto"),
            (xn = D.pageYOffset),
            d.core.globals("ScrollTrigger", i),
            X))
        ) {
          (gr = 1),
            (nr = document.createElement("div")),
            (nr.style.height = "100vh"),
            (nr.style.position = "absolute"),
            _o(),
            yo(),
            Z.register(d),
            (i.isTouch = Z.isTouch),
            (Pt =
              Z.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (hn = Z.isTouch === 1),
            pe(D, "wheel", Qt),
            (eo = [D, G, it, X]),
            d.matchMedia
              ? ((i.matchMedia = function (p) {
                  var w = d.matchMedia(),
                    Y;
                  for (Y in p) w.add(Y, p[Y]);
                  return w;
                }),
                d.addEventListener("matchMediaInit", function () {
                  return Pn();
                }),
                d.addEventListener("matchMediaRevert", function () {
                  return go();
                }),
                d.addEventListener("matchMedia", function () {
                  Bt(0, 1), Ut("matchMedia");
                }),
                d.matchMedia("(orientation: portrait)", function () {
                  return an(), an;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            an(),
            pe(G, "scroll", Qt);
          var t = X.style,
            r = t.borderTopStyle,
            o = d.core.Animation.prototype,
            a,
            l;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              t.borderTopStyle = "solid",
              a = vt(X),
              ae.m = Math.round(a.top + ae.sc()) || 0,
              Ye.m = Math.round(a.left + Ye.sc()) || 0,
              r ? (t.borderTopStyle = r) : t.removeProperty("border-top-style"),
              Fr = setInterval(zn, 250),
              d.delayedCall(0.5, function () {
                return (Yr = 0);
              }),
              pe(G, "touchcancel", ut),
              pe(X, "touchstart", ut),
              Ir(pe, G, "pointerdown,touchstart,mousedown", Fn),
              Ir(pe, G, "pointerup,touchend,mouseup", Yn),
              gn = d.utils.checkPrefix("transform"),
              qr.push(gn),
              jt = Ce(),
              Jr = d.delayedCall(0.2, Bt).pause(),
              er = [
                G,
                "visibilitychange",
                function () {
                  var p = D.innerWidth,
                    w = D.innerHeight;
                  G.hidden
                    ? ((Dn = p), (Rn = w))
                    : (Dn !== p || Rn !== w) && vr();
                },
                G,
                "DOMContentLoaded",
                Bt,
                D,
                "load",
                Bt,
                D,
                "resize",
                vr,
              ],
              Lr(pe),
              T.forEach(function (p) {
                return p.enable(0, 1);
              }),
              l = 0;
            l < E.length;
            l += 3
          )
            zr(fe, E[l], E[l + 1]), zr(fe, E[l], E[l + 2]);
        }
      }),
      (i.config = function (t) {
        "limitCallbacks" in t && (on = !!t.limitCallbacks);
        var r = t.syncInterval;
        (r && clearInterval(Fr)) || ((Fr = r) && setInterval(zn, r)),
          "ignoreMobileResize" in t &&
            (hn = i.isTouch === 1 && t.ignoreMobileResize),
          "autoRefreshEvents" in t &&
            (Lr(fe) || Lr(pe, t.autoRefreshEvents || "none"),
            (ro = (t.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (i.scrollerProxy = function (t, r) {
        var o = Xe(t),
          a = E.indexOf(o),
          l = Gt(o);
        ~a && E.splice(a, l ? 6 : 2),
          r && (l ? ft.unshift(D, r, X, r, it, r) : ft.unshift(o, r));
      }),
      (i.clearMatchMedia = function (t) {
        T.forEach(function (r) {
          return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
        });
      }),
      (i.isInViewport = function (t, r, o) {
        var a = (Ge(t) ? Xe(t) : t).getBoundingClientRect(),
          l = a[o ? Nt : Ht] * r || 0;
        return o
          ? a.right - l > 0 && a.left + l < D.innerWidth
          : a.bottom - l > 0 && a.top + l < D.innerHeight;
      }),
      (i.positionInViewport = function (t, r, o) {
        Ge(t) && (t = Xe(t));
        var a = t.getBoundingClientRect(),
          l = a[o ? Nt : Ht],
          p =
            r == null
              ? l / 2
              : r in en
                ? en[r] * l
                : ~r.indexOf("%")
                  ? (parseFloat(r) * l) / 100
                  : parseFloat(r) || 0;
        return o ? (a.left + p) / D.innerWidth : (a.top + p) / D.innerHeight;
      }),
      (i.killAll = function (t) {
        if (
          (T.slice(0).forEach(function (o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }),
          t !== !0)
        ) {
          var r = $t.killAll || [];
          ($t = {}),
            r.forEach(function (o) {
              return o();
            });
        }
      }),
      i
    );
  })();
R.version = "3.12.5";
R.saveStyles = function (i) {
  return i
    ? Pr(i).forEach(function (e) {
        if (e && e.style) {
          var n = We.indexOf(e);
          n >= 0 && We.splice(n, 5),
            We.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              d.core.getCache(e),
              _n(),
            );
        }
      })
    : We;
};
R.revert = function (i, e) {
  return Pn(!i, e);
};
R.create = function (i, e) {
  return new R(i, e);
};
R.refresh = function (i) {
  return i ? vr() : (jt || R.register()) && Bt(!0);
};
R.update = function (i) {
  return ++E.cache && xt(i === !0 ? 2 : 0);
};
R.clearScrollMemory = ho;
R.maxScroll = function (i, e) {
  return ct(i, e ? Ye : ae);
};
R.getScrollFunc = function (i, e) {
  return Rt(Xe(i), e ? Ye : ae);
};
R.getById = function (i) {
  return mn[i];
};
R.getAll = function () {
  return T.filter(function (i) {
    return i.vars.id !== "ScrollSmoother";
  });
};
R.isScrolling = function () {
  return !!Je;
};
R.snapDirectional = Tn;
R.addEventListener = function (i, e) {
  var n = $t[i] || ($t[i] = []);
  ~n.indexOf(e) || n.push(e);
};
R.removeEventListener = function (i, e) {
  var n = $t[i],
    t = n && n.indexOf(e);
  t >= 0 && n.splice(t, 1);
};
R.batch = function (i, e) {
  var n = [],
    t = {},
    r = e.interval || 0.016,
    o = e.batchMax || 1e9,
    a = function (w, Y) {
      var O = [],
        h = [],
        c = d
          .delayedCall(r, function () {
            Y(O, h), (O = []), (h = []);
          })
          .pause();
      return function (_) {
        O.length || c.restart(!0),
          O.push(_.trigger),
          h.push(_),
          o <= O.length && c.progress(1);
      };
    },
    l;
  for (l in e)
    t[l] =
      l.substr(0, 2) === "on" && Le(e[l]) && l !== "onRefreshInit"
        ? a(l, e[l])
        : e[l];
  return (
    Le(o) &&
      ((o = o()),
      pe(R, "refresh", function () {
        return (o = e.batchMax());
      })),
    Pr(i).forEach(function (p) {
      var w = {};
      for (l in t) w[l] = t[l];
      (w.trigger = p), n.push(R.create(w));
    }),
    n
  );
};
var Gn = function (e, n, t, r) {
    return (
      n > r ? e(r) : n < 0 && e(0),
      t > r ? (r - n) / (t - n) : t < 0 ? n / (n - t) : 1
    );
  },
  cn = function i(e, n) {
    n === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          n === !0
            ? "auto"
            : n
              ? "pan-" + n + (Z.isTouch ? " pinch-zoom" : "")
              : "none"),
      e === it && i(X, n);
  },
  Wr = { auto: 1, scroll: 1 },
  Fo = function (e) {
    var n = e.event,
      t = e.target,
      r = e.axis,
      o = (n.changedTouches ? n.changedTouches[0] : n).target,
      a = o._gsap || d.core.getCache(o),
      l = Ce(),
      p;
    if (!a._isScrollT || l - a._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== X &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(Wr[(p = Ze(o)).overflowY] || Wr[p.overflowX]));

      )
        o = o.parentNode;
      (a._isScroll =
        o &&
        o !== t &&
        !Gt(o) &&
        (Wr[(p = Ze(o)).overflowY] || Wr[p.overflowX])),
        (a._isScrollT = l);
    }
    (a._isScroll || r === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  mo = function (e, n, t, r) {
    return Z.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (r = r && Fo),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return t && pe(G, Z.eventTypes[0], Un, !1, !0);
      },
      onDisable: function () {
        return fe(G, Z.eventTypes[0], Un, !0);
      },
    });
  },
  Yo = /(input|label|select|textarea)/i,
  $n,
  Un = function (e) {
    var n = Yo.test(e.target.tagName);
    (n || $n) && ((e._gsapAllow = !0), ($n = n));
  },
  Lo = function (e) {
    Xt(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n = e,
      t = n.normalizeScrollX,
      r = n.momentum,
      o = n.allowNestedScroll,
      a = n.onRelease,
      l,
      p,
      w = Xe(e.target) || it,
      Y = d.core.globals().ScrollSmoother,
      O = Y && Y.get(),
      h =
        Pt &&
        ((e.content && Xe(e.content)) ||
          (O && e.content !== !1 && !O.smooth() && O.content())),
      c = Rt(w, ae),
      _ = Rt(w, Ye),
      $ = 1,
      z =
        (Z.isTouch && D.visualViewport
          ? D.visualViewport.scale * D.visualViewport.width
          : D.outerWidth) / D.innerWidth,
      ne = 0,
      H = Le(r)
        ? function () {
            return r(l);
          }
        : function () {
            return r || 2.8;
          },
      de,
      k,
      Ue = mo(w, e.type, !0, o),
      B = function () {
        return (k = !1);
      },
      b = ut,
      Se = ut,
      Ie = function () {
        (p = ct(w, ae)),
          (Se = br(Pt ? 1 : 0, p)),
          t && (b = br(0, ct(w, Ye))),
          (de = Wt);
      },
      g = function () {
        (h._gsap.y = hr(parseFloat(h._gsap.y) + c.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (c.offset = c.cacheID = 0);
      },
      ge = function () {
        if (k) {
          requestAnimationFrame(B);
          var J = hr(l.deltaY / 2),
            Q = Se(c.v - J);
          if (h && Q !== c.v + c.offset) {
            c.offset = Q - c.v;
            var s = hr((parseFloat(h && h._gsap.y) || 0) - c.offset);
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              s +
              ", 0, 1)"),
              (h._gsap.y = s + "px"),
              (c.cacheID = E.cache),
              xt();
          }
          return !0;
        }
        c.offset && g(), (k = !0);
      },
      x,
      pt,
      oe,
      ke,
      Te = function () {
        Ie(),
          x.isActive() &&
            x.vars.scrollY > p &&
            (c() > p ? x.progress(1) && c(p) : x.resetTo("scrollY", p));
      };
    return (
      h && d.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (L) {
        return (
          (Pt && L.type === "touchmove" && ge()) ||
          ($ > 1.05 && L.type !== "touchstart") ||
          l.isGesturing ||
          (L.touches && L.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        k = !1;
        var L = $;
        ($ = hr(((D.visualViewport && D.visualViewport.scale) || 1) / z)),
          x.pause(),
          L !== $ && cn(w, $ > 1.01 ? !0 : t ? !1 : "x"),
          (pt = _()),
          (oe = c()),
          Ie(),
          (de = Wt);
      }),
      (e.onRelease = e.onGestureStart =
        function (L, J) {
          if ((c.offset && g(), !J)) ke.restart(!0);
          else {
            E.cache++;
            var Q = H(),
              s,
              ie;
            t &&
              ((s = _()),
              (ie = s + (Q * 0.05 * -L.velocityX) / 0.227),
              (Q *= Gn(_, s, ie, ct(w, Ye))),
              (x.vars.scrollX = b(ie))),
              (s = c()),
              (ie = s + (Q * 0.05 * -L.velocityY) / 0.227),
              (Q *= Gn(c, s, ie, ct(w, ae))),
              (x.vars.scrollY = Se(ie)),
              x.invalidate().duration(Q).play(0.01),
              ((Pt && x.vars.scrollY >= p) || s >= p - 1) &&
                d.to({}, { onUpdate: Te, duration: Q });
          }
          a && a(L);
        }),
      (e.onWheel = function () {
        x._ts && x.pause(), Ce() - ne > 1e3 && ((de = 0), (ne = Ce()));
      }),
      (e.onChange = function (L, J, Q, s, ie) {
        if (
          (Wt !== de && Ie(),
          J && t && _(b(s[2] === J ? pt + (L.startX - L.x) : _() + J - s[1])),
          Q)
        ) {
          c.offset && g();
          var Ot = ie[2] === Q,
            wt = Ot ? oe + L.startY - L.y : c() + Q - ie[1],
            Ve = Se(wt);
          Ot && wt !== Ve && (oe += Ve - wt), c(Ve);
        }
        (Q || J) && xt();
      }),
      (e.onEnable = function () {
        cn(w, t ? !1 : "x"),
          R.addEventListener("refresh", Te),
          pe(D, "resize", Te),
          c.smooth &&
            ((c.target.style.scrollBehavior = "auto"),
            (c.smooth = _.smooth = !1)),
          Ue.enable();
      }),
      (e.onDisable = function () {
        cn(w, !0),
          fe(D, "resize", Te),
          R.removeEventListener("refresh", Te),
          Ue.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (l = new Z(e)),
      (l.iOS = Pt),
      Pt && !c() && c(1),
      Pt && d.ticker.add(ut),
      (ke = l._dc),
      (x = d.to(l, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: t ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: vo(c, c(), function () {
            return x.pause();
          }),
        },
        onUpdate: xt,
        onComplete: ke.vars.onComplete,
      })),
      l
    );
  };
R.sort = function (i) {
  return T.sort(
    i ||
      function (e, n) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (n.start + (n.vars.refreshPriority || 0) * -1e6)
        );
      },
  );
};
R.observe = function (i) {
  return new Z(i);
};
R.normalizeScroll = function (i) {
  if (typeof i > "u") return Oe;
  if (i === !0 && Oe) return Oe.enable();
  if (i === !1) {
    Oe && Oe.kill(), (Oe = i);
    return;
  }
  var e = i instanceof Z ? i : Lo(i);
  return Oe && Oe.target === e.target && Oe.kill(), Gt(e.target) && (Oe = e), e;
};
R.core = {
  _getVelocityProp: dn,
  _inputObserver: mo,
  _scrollers: E,
  _proxies: ft,
  bridge: {
    ss: function () {
      Je || Ut("scrollStart"), (Je = Ce());
    },
    ref: function () {
      return ye;
    },
  },
};
so() && d.registerPlugin(R);
export { R as S };
