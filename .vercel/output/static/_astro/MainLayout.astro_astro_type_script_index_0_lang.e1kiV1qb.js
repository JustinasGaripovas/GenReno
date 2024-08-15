function k(w, t, i) {
  return Math.max(w, Math.min(t, i));
}
class F {
  constructor() {
    (this.isRunning = !1),
      (this.value = 0),
      (this.from = 0),
      (this.to = 0),
      (this.duration = 0),
      (this.currentTime = 0);
  }
  advance(t) {
    var i;
    if (!this.isRunning) return;
    let s = !1;
    if (this.duration && this.easing) {
      this.currentTime += t;
      const e = k(0, this.currentTime / this.duration, 1);
      s = e >= 1;
      const o = s ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * o;
    } else
      this.lerp
        ? ((this.value = (function (o, n, l, r) {
            return (function (c, u, m) {
              return (1 - m) * c + m * u;
            })(o, n, 1 - Math.exp(-l * r));
          })(this.value, this.to, 60 * this.lerp, t)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (s = !0)))
        : ((this.value = this.to), (s = !0));
    s && this.stop(),
      (i = this.onUpdate) === null ||
        i === void 0 ||
        i.call(this, this.value, s);
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(t, i, { lerp: s, duration: e, easing: o, onStart: n, onUpdate: l }) {
    (this.from = this.value = t),
      (this.to = i),
      (this.lerp = s),
      (this.duration = e),
      (this.easing = o),
      (this.currentTime = 0),
      (this.isRunning = !0),
      n?.(),
      (this.onUpdate = l);
  }
}
class I {
  constructor({
    wrapper: t,
    content: i,
    autoResize: s = !0,
    debounce: e = 250,
  } = {}) {
    (this.width = 0),
      (this.height = 0),
      (this.scrollWidth = 0),
      (this.scrollHeight = 0),
      (this.resize = () => {
        this.onWrapperResize(), this.onContentResize();
      }),
      (this.onWrapperResize = () => {
        this.wrapper === window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : this.wrapper instanceof HTMLElement &&
            ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      }),
      (this.onContentResize = () => {
        this.wrapper === window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : this.wrapper instanceof HTMLElement &&
            ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      }),
      (this.wrapper = t),
      (this.content = i),
      s &&
        ((this.debouncedResize = (function (n, l) {
          let r;
          return function () {
            let h = arguments,
              c = this;
            clearTimeout(r),
              (r = setTimeout(function () {
                n.apply(c, h);
              }, l));
          };
        })(this.resize, e)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize,
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize();
  }
  destroy() {
    var t, i;
    (t = this.wrapperResizeObserver) === null || t === void 0 || t.disconnect(),
      (i = this.contentResizeObserver) === null ||
        i === void 0 ||
        i.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class C {
  constructor() {
    this.events = {};
  }
  emit(t, ...i) {
    let s = this.events[t] || [];
    for (let e = 0, o = s.length; e < o; e++) s[e](...i);
  }
  on(t, i) {
    var s;
    return (
      (!((s = this.events[t]) === null || s === void 0) && s.push(i)) ||
        (this.events[t] = [i]),
      () => {
        var e;
        this.events[t] =
          (e = this.events[t]) === null || e === void 0
            ? void 0
            : e.filter((o) => i !== o);
      }
    );
  }
  off(t, i) {
    var s;
    this.events[t] =
      (s = this.events[t]) === null || s === void 0
        ? void 0
        : s.filter((e) => i !== e);
  }
  destroy() {
    this.events = {};
  }
}
const O = 100 / 6;
class B {
  constructor(t, { wheelMultiplier: i = 1, touchMultiplier: s = 1 }) {
    (this.lastDelta = { x: 0, y: 0 }),
      (this.windowWidth = 0),
      (this.windowHeight = 0),
      (this.onTouchStart = (e) => {
        const { clientX: o, clientY: n } = e.targetTouches
          ? e.targetTouches[0]
          : e;
        (this.touchStart.x = o),
          (this.touchStart.y = n),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
      }),
      (this.onTouchMove = (e) => {
        var o, n, l, r;
        const { clientX: h, clientY: c } = e.targetTouches
            ? e.targetTouches[0]
            : e,
          u =
            -(
              h -
              ((n =
                (o = this.touchStart) === null || o === void 0
                  ? void 0
                  : o.x) !== null && n !== void 0
                ? n
                : 0)
            ) * this.touchMultiplier,
          m =
            -(
              c -
              ((r =
                (l = this.touchStart) === null || l === void 0
                  ? void 0
                  : l.y) !== null && r !== void 0
                ? r
                : 0)
            ) * this.touchMultiplier;
        (this.touchStart.x = h),
          (this.touchStart.y = c),
          (this.lastDelta = { x: u, y: m }),
          this.emitter.emit("scroll", { deltaX: u, deltaY: m, event: e });
      }),
      (this.onTouchEnd = (e) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: e,
        });
      }),
      (this.onWheel = (e) => {
        let { deltaX: o, deltaY: n, deltaMode: l } = e;
        (o *= l === 1 ? O : l === 2 ? this.windowWidth : 1),
          (n *= l === 1 ? O : l === 2 ? this.windowHeight : 1),
          (o *= this.wheelMultiplier),
          (n *= this.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: o, deltaY: n, event: e });
      }),
      (this.onWindowResize = () => {
        (this.windowWidth = window.innerWidth),
          (this.windowHeight = window.innerHeight);
      }),
      (this.element = t),
      (this.wheelMultiplier = i),
      (this.touchMultiplier = s),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new C()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
  on(t, i) {
    return this.emitter.on(t, i);
  }
  destroy() {
    this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel),
      this.element.removeEventListener("touchstart", this.onTouchStart),
      this.element.removeEventListener("touchmove", this.onTouchMove),
      this.element.removeEventListener("touchend", this.onTouchEnd);
  }
}
class $ {
  constructor({
    wrapper: t = window,
    content: i = document.documentElement,
    wheelEventsTarget: s = t,
    eventsTarget: e = s,
    smoothWheel: o = !0,
    syncTouch: n = !1,
    syncTouchLerp: l = 0.075,
    touchInertiaMultiplier: r = 35,
    duration: h,
    easing: c = (v) => Math.min(1, 1.001 - Math.pow(2, -10 * v)),
    lerp: u = 0.1,
    infinite: m = !1,
    orientation: d = "vertical",
    gestureOrientation: g = "vertical",
    touchMultiplier: y = 1,
    wheelMultiplier: W = 1,
    autoResize: H = !0,
    prevent: X,
    virtualScroll: Y,
    __experimental__naiveDimensions: A = !1,
  } = {}) {
    (this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.userData = {}),
      (this.lastVelocity = 0),
      (this.velocity = 0),
      (this.direction = 0),
      (this.onPointerDown = (v) => {
        v.button === 1 && this.reset();
      }),
      (this.onVirtualScroll = (v) => {
        if (
          typeof this.options.virtualScroll == "function" &&
          this.options.virtualScroll(v) === !1
        )
          return;
        const { deltaX: S, deltaY: f, event: a } = v;
        if (
          (this.emitter.emit("virtual-scroll", {
            deltaX: S,
            deltaY: f,
            event: a,
          }),
          a.ctrlKey)
        )
          return;
        const E = a.type.includes("touch"),
          x = a.type.includes("wheel");
        if (
          ((this.isTouching =
            a.type === "touchstart" || a.type === "touchmove"),
          this.options.syncTouch &&
            E &&
            a.type === "touchstart" &&
            !this.isStopped &&
            !this.isLocked)
        )
          return void this.reset();
        const U = S === 0 && f === 0,
          q =
            (this.options.gestureOrientation === "vertical" && f === 0) ||
            (this.options.gestureOrientation === "horizontal" && S === 0);
        if (U || q) return;
        let T = a.composedPath();
        T = T.slice(0, T.indexOf(this.rootElement));
        const z = this.options.prevent;
        if (
          T.find((p) => {
            var L, M, N, R, b;
            return (
              p instanceof Element &&
              ((typeof z == "function" && z?.(p)) ||
                ((L = p.hasAttribute) === null || L === void 0
                  ? void 0
                  : L.call(p, "data-lenis-prevent")) ||
                (E &&
                  ((M = p.hasAttribute) === null || M === void 0
                    ? void 0
                    : M.call(p, "data-lenis-prevent-touch"))) ||
                (x &&
                  ((N = p.hasAttribute) === null || N === void 0
                    ? void 0
                    : N.call(p, "data-lenis-prevent-wheel"))) ||
                (((R = p.classList) === null || R === void 0
                  ? void 0
                  : R.contains("lenis")) &&
                  !(
                    !((b = p.classList) === null || b === void 0) &&
                    b.contains("lenis-stopped")
                  )))
            );
          })
        )
          return;
        if (this.isStopped || this.isLocked) return void a.preventDefault();
        if (!((this.options.syncTouch && E) || (this.options.smoothWheel && x)))
          return (this.isScrolling = "native"), void this.animate.stop();
        a.preventDefault();
        let _ = f;
        this.options.gestureOrientation === "both"
          ? (_ = Math.abs(f) > Math.abs(S) ? f : S)
          : this.options.gestureOrientation === "horizontal" && (_ = S);
        const P = E && this.options.syncTouch,
          D = E && a.type === "touchend" && Math.abs(_) > 5;
        D && (_ = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + _,
            Object.assign(
              { programmatic: !1 },
              P
                ? { lerp: D ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  },
            ),
          );
      }),
      (this.onNativeScroll = () => {
        if (
          (clearTimeout(this.__resetVelocityTimeout),
          delete this.__resetVelocityTimeout,
          this.__preventNextNativeScrollEvent)
        )
          delete this.__preventNextNativeScrollEvent;
        else if (this.isScrolling === !1 || this.isScrolling === "native") {
          const v = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity),
            (this.velocity = this.animatedScroll - v),
            (this.direction = Math.sign(this.animatedScroll - v)),
            (this.isScrolling = "native"),
            this.emit(),
            this.velocity !== 0 &&
              (this.__resetVelocityTimeout = setTimeout(() => {
                (this.lastVelocity = this.velocity),
                  (this.velocity = 0),
                  (this.isScrolling = !1),
                  this.emit();
              }, 400));
        }
      }),
      (window.lenisVersion = "1.1.9"),
      (t && t !== document.documentElement && t !== document.body) ||
        (t = window),
      (this.options = {
        wrapper: t,
        content: i,
        wheelEventsTarget: s,
        eventsTarget: e,
        smoothWheel: o,
        syncTouch: n,
        syncTouchLerp: l,
        touchInertiaMultiplier: r,
        duration: h,
        easing: c,
        lerp: u,
        infinite: m,
        gestureOrientation: g,
        orientation: d,
        touchMultiplier: y,
        wheelMultiplier: W,
        autoResize: H,
        prevent: X,
        virtualScroll: Y,
        __experimental__naiveDimensions: A,
      }),
      (this.animate = new F()),
      (this.emitter = new C()),
      (this.dimensions = new I({ wrapper: t, content: i, autoResize: H })),
      this.updateClassName(),
      (this.userData = {}),
      (this.time = 0),
      (this.velocity = this.lastVelocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      this.options.wrapper.addEventListener(
        "pointerdown",
        this.onPointerDown,
        !1,
      ),
      (this.virtualScroll = new B(e, {
        touchMultiplier: y,
        wheelMultiplier: W,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1,
      ),
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
        !1,
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName();
  }
  on(t, i) {
    return this.emitter.on(t, i);
  }
  off(t, i) {
    return this.emitter.off(t, i);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop();
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(t) {
    const i = t - (this.time || t);
    (this.time = t), this.animate.advance(0.001 * i);
  }
  scrollTo(
    t,
    {
      offset: i = 0,
      immediate: s = !1,
      lock: e = !1,
      duration: o = this.options.duration,
      easing: n = this.options.easing,
      lerp: l = this.options.lerp,
      onStart: r,
      onComplete: h,
      force: c = !1,
      programmatic: u = !0,
      userData: m = {},
    } = {},
  ) {
    if ((!this.isStopped && !this.isLocked) || c) {
      if (typeof t == "string" && ["top", "left", "start"].includes(t)) t = 0;
      else if (typeof t == "string" && ["bottom", "right", "end"].includes(t))
        t = this.limit;
      else {
        let d;
        if (
          (typeof t == "string"
            ? (d = document.querySelector(t))
            : t instanceof HTMLElement && t?.nodeType && (d = t),
          d)
        ) {
          if (this.options.wrapper !== window) {
            const y = this.rootElement.getBoundingClientRect();
            i -= this.isHorizontal ? y.left : y.top;
          }
          const g = d.getBoundingClientRect();
          t = (this.isHorizontal ? g.left : g.top) + this.animatedScroll;
        }
      }
      if (
        typeof t == "number" &&
        ((t += i),
        (t = Math.round(t)),
        this.options.infinite
          ? u && (this.targetScroll = this.animatedScroll = this.scroll)
          : (t = k(0, t, this.limit)),
        t !== this.targetScroll)
      ) {
        if (((this.userData = m), s))
          return (
            (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            h?.(this),
            void (this.userData = {})
          );
        u || (this.targetScroll = t),
          this.animate.fromTo(this.animatedScroll, t, {
            duration: o,
            easing: n,
            lerp: l,
            onStart: () => {
              e && (this.isLocked = !0),
                (this.isScrolling = "smooth"),
                r?.(this);
            },
            onUpdate: (d, g) => {
              (this.isScrolling = "smooth"),
                (this.lastVelocity = this.velocity),
                (this.velocity = d - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = d),
                this.setScroll(this.scroll),
                u && (this.targetScroll = d),
                g || this.emit(),
                g &&
                  (this.reset(),
                  this.emit(),
                  h?.(this),
                  (this.userData = {}),
                  this.preventNextNativeScrollEvent());
            },
          });
      }
    }
  }
  preventNextNativeScrollEvent() {
    (this.__preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        delete this.__preventNextNativeScrollEvent;
      });
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? (function (i, s) {
          return ((i % s) + s) % s;
        })(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t &&
      ((this.__isScrolling = t), this.updateClassName());
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t && ((this.__isStopped = t), this.updateClassName());
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(t) {
    this.__isLocked !== t && ((this.__isLocked = t), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get className() {
    let t = "lenis";
    return (
      this.isStopped && (t += " lenis-stopped"),
      this.isLocked && (t += " lenis-locked"),
      this.isScrolling && (t += " lenis-scrolling"),
      this.isScrolling === "smooth" && (t += " lenis-smooth"),
      t
    );
  }
  updateClassName() {
    this.cleanUpClassName(),
      (this.rootElement.className =
        `${this.rootElement.className} ${this.className}`.trim());
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className
      .replace(/lenis(-\w+)?/g, "")
      .trim();
  }
}
const j = new $();
function V(w) {
  j.raf(w), requestAnimationFrame(V);
}
requestAnimationFrame(V);
