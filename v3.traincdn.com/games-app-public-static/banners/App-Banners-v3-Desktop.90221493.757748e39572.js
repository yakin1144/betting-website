"use strict";
(self.webpackChunkv3_microfrontend_banners =
  self.webpackChunkv3_microfrontend_banners || []).push([
  [90221493],
  {
    58896881: (e, r) => {
      r.A = (e, r) => {
        const t = e.__vccOpts || e;
        for (const [a, l] of r) t[a] = l;
        return t;
      };
    },
    24513891: (e, r, t) => {
      t.r(r), t.d(r, { default: () => ee });
      var a = t(43194072),
        l = t(35910884),
        n = t(89275642),
        o = t(81453845);
      let i = (function (e) {
          return (e[(e.RTL = -1)] = "RTL"), (e[(e.LTR = 1)] = "LTR"), e;
        })({}),
        s = (function (e) {
          return (e.RTL = "rtl"), (e.LTR = "ltr"), e;
        })({});
      const c = () => {
          const e = new Set(),
            r = (r) => ([...e].map((e) => e(r)), r),
            t = (r) => {
              r ? e.delete(r) : e.clear();
            },
            a = (r) => (e.add(r), () => t(r));
          return (
            (r.watch = a),
            (r.map = (e) => {
              const r = c();
              return a(async (t) => r(await e(t))), r;
            }),
            (r.unwatch = t),
            r
          );
        },
        d = (e) => {
          e.cancelable &&
            !e.defaultPrevented &&
            (e.preventDefault(), e.stopPropagation());
        },
        u = (e) => (e?.changedTouches ? e.changedTouches[0] : e),
        m = (e) => {
          const r = {
            passive: !1,
            ...("boolean" == typeof e ? { capture: e ?? !1 } : e),
          };
          return (() => {
            let e = !1;
            const r = Object.defineProperty({}, "passive", {
                get() {
                  e = !0;
                },
              }),
              t = () => {};
            try {
              globalThis.addEventListener("test", t, r),
                globalThis.removeEventListener("test", t, r);
            } catch (a) {}
            return e;
          })()
            ? r
            : Boolean(r.capture);
        },
        p = ({ refScrollbarContainer: e, refScrollbarDrag: r, isRtl: t }) => {
          const l = (0, a.computed)(() => ((0, a.unref)(t) ? i.RTL : i.LTR)),
            n = c(),
            o = c(),
            s = (0, a.ref)(0),
            p = (0, a.ref)(0),
            f = (0, a.ref)(0);
          let h = 0,
            g = !1,
            w = 0;
          const v = (0, a.computed)(() => e.value),
            S = (0, a.computed)(() => r.value),
            E = (0, a.computed)(() => s.value - p.value),
            y = (0, a.computed)(() => (t.value ? l.value * E.value : 0)),
            b = (0, a.computed)(() => (t.value ? 0 : E.value)),
            _ = () => {
              (s.value = v.value?.clientWidth ?? 0),
                (p.value = S.value?.clientWidth ?? 0);
            },
            z = (e, r = !0) => {
              (h = ((e) =>
                e > (0, a.unref)(b)
                  ? (0, a.unref)(b)
                  : e < (0, a.unref)(y)
                  ? (0, a.unref)(y)
                  : e)(e)),
                (f.value = (0, a.unref)(E) ? (100 * h) / (0, a.unref)(E) : 0),
                r && n((0, a.unref)(f)),
                (() => {
                  const e = `translateX(${h}px)`;
                  (0, a.unref)(S)?.style.setProperty("-webkit-transform", e),
                    (0, a.unref)(S)?.style.setProperty("transform", e);
                })();
            },
            L = (e) => {
              if (g) return;
              const r = ((0, a.unref)(E) * e) / 100;
              z(r, !1);
            },
            P = (e) => {
              const r = (0, a.unref)(S),
                t = (0, a.unref)(v);
              if (!r || !t) return;
              const l = e - w;
              (w = e), z(h + l);
            },
            k = (e) => {
              const { clientX: r } = u(e);
              P(r);
            },
            T = (e) => {
              if (g) return;
              (g = !0),
                globalThis.addEventListener("mousemove", k, m({ passive: !0 })),
                globalThis.addEventListener("touchmove", k, m({ passive: !0 })),
                d(e);
              const { clientX: r } = u(e);
              w = r;
            },
            B = (e) => {
              if (!g) return;
              const { clientX: r } = u(e);
              (g = !1),
                globalThis.removeEventListener(
                  "mousemove",
                  k,
                  m({ passive: !0 })
                ),
                globalThis.removeEventListener(
                  "touchmove",
                  k,
                  m({ passive: !0 })
                ),
                P(r),
                o();
            },
            C = () => {
              _(), L((0, a.unref)(f));
            };
          return (
            (0, a.watch)(
              e,
              () => {
                (() => {
                  const e = (0, a.unref)(v);
                  e &&
                    (e.addEventListener("mousedown", T, m()),
                    e.addEventListener("touchstart", T, m()));
                })(),
                  _();
              },
              { immediate: !0 }
            ),
            (0, a.onMounted)(() => {
              globalThis.addEventListener("mouseup", B, m()),
                globalThis.addEventListener("touchend", B, m()),
                globalThis.addEventListener("resize", C, m()),
                globalThis.addEventListener("toggleRightSection", C, m()),
                globalThis.addEventListener("toggleLeftSection", C, m());
            }),
            (0, a.onBeforeUnmount)(() => {
              (() => {
                const e = (0, a.unref)(v);
                e &&
                  (e.removeEventListener("mousedown", T, m()),
                  e.removeEventListener("touchstart", T, m()));
              })(),
                globalThis.removeEventListener("mouseup", B, m()),
                globalThis.removeEventListener("touchend", B, m()),
                globalThis.removeEventListener("resize", C, m()),
                globalThis.removeEventListener("toggleRightSection", C, m()),
                globalThis.removeEventListener("toggleLeftSection", C, m());
            }),
            {
              scrollbarHandleResize: C,
              scrollbarEmitUpdateScrollAsPercentage: n,
              scrollbarEmitScrollEnd: o,
              updateDragPositionByPercent: L,
            }
          );
        },
        f = (e, r) => {
          const t = 20,
            l = (0, a.computed)(() => ((0, a.unref)(r) ? i.RTL : i.LTR)),
            {
              refHorizontalSwiper: n,
              minSwipeOffsetForStart: o = t,
              isOnlyOneSlide: p,
            } = e,
            f = (0, a.ref)(0),
            h = (0, a.ref)(0),
            g = (0, a.ref)(0),
            w = (0, a.ref)(0),
            v = c(),
            S = c(),
            E = c(),
            y = c(),
            b = c();
          let _ = !1,
            z = !1,
            L = 0,
            P = 0;
          const k = (0, a.computed)(() => n.value),
            T = (0, a.computed)(() => (0, a.unref)(f)),
            B = (0, a.computed)(() => (0, a.unref)(h)),
            C = (0, a.computed)(() => (0, a.unref)(g)),
            R = (0, a.computed)(() => (0, a.unref)(h) - (0, a.unref)(g)),
            U = (0, a.computed)(() =>
              (0, a.unref)(r) ? (0, a.unref)(l) * (0, a.unref)(R) : 0
            ),
            x = (0, a.computed)(() => ((0, a.unref)(r) ? 0 : (0, a.unref)(R))),
            $ = (0, a.computed)(() => (0, a.unref)(R) > 0),
            I = () => {
              const {
                scrollLeft: e = 0,
                scrollWidth: r = 0,
                clientWidth: t = 0,
              } = (0, a.unref)(k) ?? {};
              (f.value = e), (h.value = r), (g.value = t);
            },
            M = (e, r = !0) => {
              const t = ((e) =>
                e > (0, a.unref)(x)
                  ? (0, a.unref)(x)
                  : e < (0, a.unref)(U)
                  ? (0, a.unref)(U)
                  : e)(e);
              (w.value = (0, a.unref)(R) ? (100 * t) / (0, a.unref)(R) : 0),
                k.value && (k.value.scrollLeft = Math.floor(t)),
                I(),
                r && v((0, a.unref)(w));
            },
            A = (e, r = !1) => {
              const t = ((0, a.unref)(R) * e) / 100;
              M(t, r);
            },
            V = (e) => {
              const { clientX: r } = u(e);
              (L = P - r),
                _
                  ? (M((0, a.unref)(T) + L), d(e), y(e), (P = r))
                  : Math.abs(L) > o && (_ = !0);
            },
            N = (e) => {
              if (z) return;
              (z = !0),
                (L = 0),
                (_ = !1),
                globalThis.addEventListener("mousemove", V, m()),
                globalThis.addEventListener("touchmove", V, m()),
                e instanceof MouseEvent && d(e);
              const { clientX: r } = u(e);
              (P = r), S(e);
            },
            D = (e) => {
              _ && (d(e), b(e)), (_ = !1);
            },
            G = (e) => {
              z &&
                ((z = !1),
                globalThis.removeEventListener("mousemove", V, m()),
                globalThis.removeEventListener("touchmove", V, m()),
                _ && (d(e), E(e)));
            },
            W = () => {
              I(), A((0, a.unref)(w));
            };
          return (
            (0, a.watch)(
              n,
              (e) => {
                (() => {
                  if ((0, a.unref)(p)) return;
                  const e = (0, a.unref)(k);
                  e &&
                    (e.addEventListener("mousedown", N, m()),
                    e.addEventListener("touchstart", N, m()));
                })(),
                  I(),
                  ((e) => {
                    (0, a.unref)(r) &&
                      e &&
                      e.style?.setProperty("direction", s.RTL);
                  })(e);
              },
              { immediate: !0 }
            ),
            (0, a.onMounted)(() => {
              globalThis.addEventListener("mouseup", G, m()),
                globalThis.addEventListener("touchend", G, m()),
                globalThis.addEventListener("click", D, m(!0)),
                globalThis.addEventListener("resize", W, m()),
                globalThis.addEventListener("toggleRightSection", W, m()),
                globalThis.addEventListener("toggleLeftSection", W, m());
            }),
            (0, a.onBeforeUnmount)(() => {
              (() => {
                const e = (0, a.unref)(k);
                e &&
                  (e.removeEventListener("mousedown", N, m()),
                  e.removeEventListener("touchstart", N, m()));
              })(),
                globalThis.removeEventListener("mouseup", G, m()),
                globalThis.removeEventListener("touchend", G, m()),
                globalThis.removeEventListener("click", D, m(!0)),
                globalThis.removeEventListener("resize", W, m()),
                globalThis.removeEventListener("toggleRightSection", W, m()),
                globalThis.removeEventListener("toggleLeftSection", W, m());
            }),
            {
              horizontalSwiperIsScroll: $,
              horizontalSwiperElement: k,
              horizontalSwiperScrollLeft: T,
              horizontalSwiperScrollWidth: B,
              horizontalSwiperClientWidth: C,
              horizontalSwiperMaxScrollLeft: R,
              horizontalSwiperUpdateScroll: M,
              horizontalSwiperUpdateScrollByPercent: A,
              horizontalSwiperEmitUpdateScrollAsPercentage: v,
              horizontalSwiperEmitSwipeDown: S,
              horizontalSwiperEmitSwipeUp: E,
              horizontalSwiperEmitSwipeMove: y,
              horizontalSwiperEmitSwipeClick: b,
            }
          );
        },
        h = (e, r) => {
          const t = 10,
            l = 3,
            n = (0, a.ref)(0),
            o = (0, a.computed)(() => ((0, a.unref)(r) ? i.RTL : i.LTR)),
            {
              horizontalSwiperIsScroll: s,
              horizontalSwiperElement: c,
              horizontalSwiperScrollLeft: d,
              horizontalSwiperScrollWidth: m,
              horizontalSwiperClientWidth: p,
              horizontalSwiperMaxScrollLeft: h,
              horizontalSwiperUpdateScroll: g,
              horizontalSwiperUpdateScrollByPercent: w,
              horizontalSwiperEmitUpdateScrollAsPercentage: v,
              horizontalSwiperEmitSwipeDown: S,
              horizontalSwiperEmitSwipeUp: E,
              horizontalSwiperEmitSwipeMove: y,
              horizontalSwiperEmitSwipeClick: b,
            } = f(e, r),
            {
              refHorizontalSwiper: _,
              refHorizontalSwiperItems: z = [],
              items: L = [],
              padding: P = t,
              startRenderItemsCount: k = l,
              isRepeat: T = !1,
            } = e,
            B = (0, a.shallowRef)([]),
            C = (0, a.shallowRef)(0);
          let R = 1,
            U = 0;
          const x = (0, a.computed)(() =>
              (0, a.unref)(z)
                .map((e) => (0, a.unref)(e))
                .filter(Boolean)
                .map((e) => e)
                .sort((e, r) => (0, a.unref)(o) * (e.offsetLeft - r.offsetLeft))
            ),
            $ = (0, a.computed)(() =>
              (0, a.unref)(B)
                .map((e) => ({ ...e, item: (0, a.unref)(L)[e.index] }))
                .filter((e) => e.item)
            ),
            I = (0, a.computed)(() => (0, a.unref)(o) * ((0, a.unref)(h) / 2)),
            M = (e) => {
              C.value = e;
            },
            A = (e, r) => ({ id: R++, index: e, isInitial: r, el: void 0 }),
            V = () => {
              B.value = (0, a.unref)(B).slice();
            },
            N = () => {
              const e = (0, a.unref)(L).length,
                r = (0, a.unref)(B).length,
                t = (0, a.unref)(B)[r - 1],
                l = t?.index ?? 0,
                n = t ? (t.index + 1) % e : 0;
              (!T && l > n) || ((0, a.unref)(B).push(A(n, !0)), V());
            },
            D = () => {
              const e = (0, a.unref)(m);
              if (!(0, a.unref)(L).length) return;
              const r = (0, a.unref)(B)
                  .filter((e) => e.el)
                  .filter((e) => Math.floor((0, a.unref)(o) * e.offset) <= 0),
                t = (0, a.unref)(B)
                  .filter((e) => e.el)
                  .filter(
                    (r) =>
                      Math.floor(
                        (0, a.unref)(o) * r.offset + r.el.clientWidth
                      ) >= e
                  ),
                l = r.length + t.length;
              !r.length && l <= 2
                ? (() => {
                    const e = (0, a.unref)(L).length,
                      r = (0, a.unref)(B)[0],
                      t = r?.index ?? 0,
                      l = Math.max(0, 0 === t ? e - 1 : (t - 1) % e);
                    (!T && t < l) ||
                      !(0, a.unref)(B).length ||
                      ((0, a.unref)(B).unshift(A(l, !1)), V());
                  })()
                : r.length > 1 &&
                  (M(
                    (0, a.unref)(C) +
                      (0, a.unref)(B)
                        .slice(0, r.length - 1)
                        .filter((e) => e.el)
                        .map((e) => e.widthOffset)
                        .reduce((e, r) => e + r, 0)
                  ),
                  (B.value = [...(0, a.unref)(B).slice(r.length - 1)]),
                  V()),
                !t.length && l <= 2
                  ? N()
                  : t.length > 1 &&
                    ((0, a.unref)(B).splice(1 - t.length, t.length), V());
            },
            G = async (e = 0, t = !1) => {
              let l = (0, a.unref)(C) + e;
              const i = (0, a.unref)(x),
                s = i[i.length - 1];
              if (!T && s && !(0, a.unref)(r)) {
                const e =
                  l +
                  s.offsetLeft +
                  s.clientWidth -
                  (0, a.unref)(I) -
                  (0, a.unref)(p);
                l > (0, a.unref)(I) && (l = (0, a.unref)(I)), e < 0 && (l -= e);
              }
              M(l),
                ((e) => {
                  let t = 0,
                    l = 0;
                  e &&
                    (t =
                      window.innerWidth - document.documentElement.clientWidth),
                    e &&
                      (!(0, a.unref)(n) && t
                        ? (l += (0, a.unref)(r) ? -t : t)
                        : (0, a.unref)(n) &&
                          (l += (0, a.unref)(r)
                            ? (0, a.unref)(n)
                            : -(0, a.unref)(n))),
                    g((0, a.unref)(I)),
                    (0, a.unref)(x).reduce((e, r, t) => {
                      const n = (0, a.unref)(B)[t];
                      if (!n) return e;
                      (n.el = r),
                        (n.offset = (0, a.unref)(C) + e + (t <= 1 ? l : 0)),
                        (n.widthOffset = (0, a.unref)(o) * (r.clientWidth + P)),
                        n.isInitial || M((0, a.unref)(C) - n.widthOffset),
                        (n.isInitial = !0);
                      const i = `translate3d(${
                        n.offset - r.offsetLeft
                      }px, 0, 0)`;
                      return (
                        r.style.setProperty("-webkit-transform", i),
                        r.style.setProperty("transform", i),
                        e + n.widthOffset
                      );
                    }, 0),
                    V(),
                    e &&
                      (n.value =
                        window.innerWidth -
                        document.documentElement.clientWidth);
                })(t),
                await (0, a.nextTick)(),
                D();
            },
            W = S.map((e) => {
              const { clientX: r } = u(e);
              return (U = r), e;
            }),
            j = E.map(async (e) => {
              const { clientX: r } = u(e),
                t = r - U;
              return await G(t), e;
            });
          return (
            (0, a.watch)(_, () => {
              (B.value = []),
                M(0),
                (U = 0),
                Array.from({ length: k }).forEach(() => N()),
                G((0, a.unref)(I));
            }),
            (0, a.watch)(
              () => [(0, a.unref)(z), (0, a.unref)(L)],
              () => {
                G();
              },
              { deep: !0 }
            ),
            {
              horizontalSwiperItemsOffsetX: (0, a.computed)(() =>
                (0, a.unref)(C)
              ),
              horizontalSwiperElementFixedPosition: I,
              horizontalSwiperRenderItems: $,
              horizontalSwiperIsScroll: s,
              horizontalSwiperElement: c,
              horizontalSwiperScrollLeft: d,
              horizontalSwiperScrollWidth: m,
              horizontalSwiperClientWidth: p,
              horizontalSwiperMaxScrollLeft: h,
              horizontalSwiperUpdateScroll: g,
              horizontalSwiperUpdateScrollByPercent: w,
              horizontalSwiperVirtualOpenTransition: (e, r) => {
                e > r
                  ? (B.value[0] = A(r, !0))
                  : (B.value[(0, a.unref)(B).length - 1] = A(r, !0)),
                  V();
              },
              horizontalSwiperVirtualCloseTransition: (e, r) => {
                e > r
                  ? (B.value[(0, a.unref)(B).length - 1] = A(r + 1, !0))
                  : (B.value[0] = A(r - 1, !0)),
                  V();
              },
              horizontalSwiperVirtualUpdatePosition: G,
              horizontalSwiperEmitUpdateScrollAsPercentage: v,
              horizontalSwiperEmitSwipeDown: W,
              horizontalSwiperEmitSwipeUp: j,
              horizontalSwiperEmitSwipeMove: y,
              horizontalSwiperEmitSwipeClick: b,
            }
          );
        },
        g = 1700,
        w = 1e3,
        v = (e, r) => {
          const t = (0, a.computed)(() => ((0, a.unref)(r) ? i.RTL : i.LTR)),
            {
              horizontalSwiperIsScroll: l,
              horizontalSwiperItemsOffsetX: n,
              horizontalSwiperRenderItems: o,
              horizontalSwiperElement: s,
              horizontalSwiperScrollLeft: d,
              horizontalSwiperClientWidth: m,
              horizontalSwiperMaxScrollLeft: p,
              horizontalSwiperUpdateScroll: v,
              horizontalSwiperUpdateScrollByPercent: S,
              horizontalSwiperVirtualUpdatePosition: E,
              horizontalSwiperEmitUpdateScrollAsPercentage: y,
              horizontalSwiperEmitSwipeDown: b,
              horizontalSwiperEmitSwipeUp: _,
            } = ((e, r) =>
              e.items
                ? h(e, r)
                : {
                    horizontalSwiperItemsOffsetX: (0, a.computed)(() => 0),
                    horizontalSwiperElementFixedPosition: (0, a.computed)(
                      () => 0
                    ),
                    horizontalSwiperRenderItems: (0, a.computed)(() => []),
                    horizontalSwiperVirtualUpdatePosition: () =>
                      Promise.resolve(),
                    ...f(e, r),
                  })(e, r),
            {
              refHorizontalSwiperItems: z,
              centered: L = !1,
              alignRight: P = !1,
              isMomentumScrolling: k = !0,
              durationSwipeAnimation: T = g,
              durationAnimation: B = w,
              sliderItemsCount: C = 1,
              responsiveScrolling: R = !1,
            } = e,
            U = c(),
            x = (0, a.shallowRef)();
          let $,
            I = 0,
            M = 0;
          const A = (0, a.computed)(() =>
              Array.from((0, a.unref)(s)?.childNodes ?? [])
            ),
            V = (0, a.computed)(() =>
              (0, a.unref)(z ?? A)
                .filter(Boolean)
                .map((e) => e)
                .sort((e, r) => e.offsetLeft - r.offsetLeft)
            ),
            N = (e, r) => {
              let t = e;
              return (
                L && (t = e + r / 2), P && (t = e + r), t + (0, a.unref)(n)
              );
            },
            D = async ({
              swipeOffsetX: e,
              minOffsetToNext: r = 80,
              maxDurationAnimation: l = B,
            }) => {
              const n = (0, a.unref)(s),
                i = (0, a.unref)(V);
              let c = !0;
              if (!n || !i.length) return;
              await E();
              let u = (0, a.unref)(d);
              const f = (0, a.unref)(m),
                h = e > 0,
                g = h ? 1 : -1,
                w = Math.abs(e),
                S = 300 * (w / (f / 3));
              let y = performance.now() - M;
              y = y >= S ? S : y;
              const b = y < S,
                _ = b ? 0 : r,
                z = b ? w * (1 - y / S) * 1.5 : 0,
                L = (0, a.unref)(p) / 4;
              let P = (0, a.unref)(k) ? z * g : g;
              P = P > L ? L : P;
              const T = u + P,
                U = ((e) =>
                  (0, a.unref)(V)
                    .filter((r) => N(r.offsetLeft, r.clientWidth) <= e)
                    .reverse())(T),
                I = ((e) =>
                  (0, a.unref)(V).filter(
                    (r) => N(r.offsetLeft, r.clientWidth) >= e
                  ))(T),
                [A] = U,
                [D] = I,
                G = (h && w > _) || (!h && w <= _) ? D || A : A || D,
                W = G?.offsetLeft ?? 0,
                j = G?.clientWidth ?? 0,
                O = (0, a.unref)(o).find((e) => e.el === G);
              let F = ((e, r, l) => {
                let n = N(e, r);
                const o = l?.item;
                if (o && Array.isArray(o.items) && R) {
                  const e = l?.index ?? 0,
                    i = o.items.length < C,
                    s = r / C;
                  e > 0 &&
                    i &&
                    (n -= (C - o.items.length) * s * (0, a.unref)(t));
                }
                return n;
              })(W, j, O);
              (0, a.unref)(p) < (0, a.unref)(t) * F &&
                (F = (0, a.unref)(t) * (0, a.unref)(p));
              let X = Math.floor(F - u);
              Math.floor(F) === u &&
                ((c = !1),
                h
                  ? ((X = -1 * Math.abs(e)), (u += Math.abs(e)))
                  : ((X = Math.abs(e)), (u -= Math.abs(e))));
              const H = (Math.abs(X) / f) * l;
              return (
                (x.value = O),
                new Promise((e) => {
                  $ = (({
                    draw: e,
                    duration: r,
                    callbackStop: t = () => {},
                    timingFunction: a = (e, r) => 1 - (1 - e) ** r,
                  }) => {
                    const l = performance.now();
                    let n,
                      o = !1;
                    const i = async () => (
                        (o = !0),
                        cancelAnimationFrame(n),
                        new Promise((e) => {
                          setTimeout(() => e(t()));
                        })
                      ),
                      s = (t) => {
                        if (o) return;
                        let c = t - l;
                        c >= r && (c = r), c < 0 && (c = 0);
                        const d = c / r,
                          u = Math.round(1e4 * a(d, 10)) / 1e4;
                        e(u), u < 1 ? (n = requestAnimationFrame(s)) : i();
                      };
                    return (
                      r > 0 ? (n = requestAnimationFrame(s)) : i(), () => i()
                    );
                  })({
                    draw: (e) => {
                      const r = u + X * e;
                      v(Math.floor(r));
                    },
                    duration: H,
                    callbackStop: async () => {
                      ($ = void 0),
                        c && (await E(u - (0, a.unref)(d))),
                        (c = !0),
                        e();
                    },
                  });
                })
              );
            };
          return (
            b.watch((e) => {
              const { clientX: r } = u(e);
              (I = r), (M = performance.now()), $ && $();
            }),
            _.watch(async (e) => {
              const { clientX: r } = u(e);
              await D({ swipeOffsetX: I - r, maxDurationAnimation: T }), U();
            }),
            {
              horizontalSwiperIsScroll: l,
              horizontalSwiperUpdateScrollByPercent: S,
              horizontalSwiperEmitUpdateScrollAsPercentage: y,
              horizontalSwiperEmitScrollEnd: U,
            }
          );
        },
        S = (0, a.defineComponent)({
          __name: "GamesThirdPartySwipeSlider",
          props: {
            slides: { type: Array, required: !0 },
            themeShadow: { type: String, default: "default" },
            rtl: { type: Boolean, default: !1 },
            shadowStart: { type: Boolean, default: !1 },
            shadowEnd: { type: Boolean, default: !1 },
            showScrollbar: { type: Boolean, default: !0 },
            settings: { type: String, default: "default" },
          },
          emits: ["scroll", "scrollEnd"],
          setup(e, { emit: r }) {
            const t = e,
              l = r,
              n = (0, a.ref)(t.rtl),
              i = (0, a.ref)(),
              s = (0, a.ref)([]),
              c = (0, a.ref)(),
              d = (0, a.ref)(),
              u = (0, a.ref)(0),
              {
                scrollbarEmitUpdateScrollAsPercentage: m,
                scrollbarEmitScrollEnd: f,
                updateDragPositionByPercent: h,
                scrollbarHandleResize: g,
              } = p({
                refScrollbarContainer: c,
                refScrollbarDrag: d,
                isRtl: n,
              }),
              {
                horizontalSwiperIsScroll: w,
                horizontalSwiperUpdateScrollByPercent: S,
                horizontalSwiperEmitUpdateScrollAsPercentage: E,
                horizontalSwiperEmitScrollEnd: y,
              } = v({ refHorizontalSwiper: i }, n),
              b = (0, a.ref)(!1),
              _ = (0, a.computed)(
                () => (0, a.unref)(w) && t.shadowStart && (0, a.unref)(u) >= 5
              ),
              z = (0, a.computed)(
                () => (0, a.unref)(w) && t.shadowEnd && (0, a.unref)(u) <= 95
              ),
              L = (e) => {
                (u.value = Math.abs(Number(e))), l("scroll", u.value);
              },
              P = (0, a.computed)(() => [
                `games-third-party-swipe-slider--settings-${t.settings}`,
              ]),
              k = (0, a.computed)(() => ({
                "games-third-party-swipe-slider__body--has-scrollbar":
                  t.showScrollbar,
              })),
              T = (0, a.computed)(() => ({
                "games-third-party-swipe-slider__shadow--is-start": (0,
                a.unref)(_),
                "games-third-party-swipe-slider__shadow--is-end": (0, a.unref)(
                  z
                ),
              }));
            return (
              (0, o.d)().on("handleResizeSlider", () => {
                g();
              }),
              (0, a.watch)(w, () => {
                g();
              }),
              (0, a.onMounted)(async () => {
                E.watch(h),
                  E.watch(L),
                  m.watch(S),
                  m.watch(L),
                  f.watch(() => l("scrollEnd", u.value)),
                  y.watch(() => l("scrollEnd", u.value)),
                  await (0, a.nextTick)(),
                  (b.value = t.showScrollbar);
              }),
              (r, t) => (
                (0, a.openBlock)(),
                (0, a.createElementBlock)(
                  "div",
                  {
                    class: (0, a.normalizeClass)([
                      P.value,
                      "games-third-party-swipe-slider",
                    ]),
                  },
                  [
                    (0, a.createElementVNode)(
                      "div",
                      {
                        class: (0, a.normalizeClass)([
                          k.value,
                          "games-third-party-swipe-slider__body",
                        ]),
                      },
                      [
                        (0, a.createElementVNode)(
                          "ul",
                          {
                            ref_key: "refHorizontalSwiper",
                            ref: i,
                            class: "games-third-party-swipe-slider__slides",
                          },
                          [
                            ((0, a.openBlock)(!0),
                            (0, a.createElementBlock)(
                              a.Fragment,
                              null,
                              (0, a.renderList)(
                                e.slides,
                                (e, t) => (
                                  (0, a.openBlock)(),
                                  (0, a.createElementBlock)(
                                    "li",
                                    {
                                      key: t,
                                      class:
                                        "games-third-party-swipe-slider__item",
                                    },
                                    [
                                      (0, a.renderSlot)(r.$slots, "default", {
                                        slide: e,
                                        slideIndex: t,
                                        refItems: s.value,
                                      }),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          512
                        ),
                        (0, a.createElementVNode)(
                          "span",
                          {
                            class: (0, a.normalizeClass)([
                              T.value,
                              "games-third-party-swipe-slider__shadow",
                            ]),
                          },
                          null,
                          2
                        ),
                      ],
                      2
                    ),
                    b.value
                      ? ((0, a.openBlock)(),
                        (0, a.createElementBlock)(
                          "div",
                          {
                            key: 0,
                            ref_key: "refScrollbarContainer",
                            ref: c,
                            class:
                              "games-third-party-swipe-slider__scrollbar games-third-party-swipe-slider-scrollbar",
                          },
                          [
                            (0, a.createElementVNode)(
                              "div",
                              {
                                ref_key: "refScrollbarDrag",
                                ref: d,
                                class:
                                  "games-third-party-swipe-slider-scrollbar__drag",
                              },
                              null,
                              512
                            ),
                          ],
                          512
                        ))
                      : (0, a.createCommentVNode)("", !0),
                  ],
                  2
                )
              )
            );
          },
        });
      var E = t(58896881);
      const y = (0, E.A)(S, [["__scopeId", "data-v-301ec5f8"]]);
      var b = t(67455263),
        _ = t(30859221),
        z = t(44954442);
      const L = { class: "games-third-party-slider-card" },
        P = { key: 0, class: "games-third-party-slider-card__picture" },
        k = ["srcset"],
        T = ["srcset", "src", "alt"],
        B = { class: "games-third-party-slider-card__bottom" },
        C = { class: "games-third-party-slider-card__name" },
        R = (0, a.defineComponent)({
          __name: "GamesThirdPartySliderCard",
          props: { slide: {}, placeholderPath: { default: () => "" } },
          setup(e) {
            const r = e,
              { imgPathThirdParty: t, imgPath2xThirdParty: l } = (0, b.Q)(),
              { isBrokenImage: n, handleImageError: o } = (0, _.k)(),
              { getCdnBgStyle: i, getCdnUrl: s } = (0, z.R)(),
              c = i("", `${t(r.placeholderPath)}.jpg`),
              d = (0, a.computed)(() => ((0, a.unref)(n) ? c : "")),
              u = (0, a.computed)(() =>
                (0, a.unref)(n) ? "games-third-party-slider-card__main--bg" : ""
              ),
              m = (0, a.computed)(
                () =>
                  s(l(r.slide.imgUrl)) + " 2x," + s(t(r.slide.imgUrl)) + " 1x"
              ),
              p = (0, a.computed)(
                () =>
                  s(l(r.slide.imgUrlProgressive)) +
                  " 2x," +
                  s(t(r.slide.imgUrlProgressive)) +
                  " 1x"
              );
            return (e, l) => (
              (0, a.openBlock)(),
              (0, a.createElementBlock)("div", L, [
                (0, a.createElementVNode)(
                  "div",
                  {
                    style: (0, a.normalizeStyle)(d.value),
                    class: (0, a.normalizeClass)([
                      u.value,
                      "games-third-party-slider-card__main",
                    ]),
                  },
                  [
                    (0, a.unref)(n)
                      ? (0, a.createCommentVNode)("", !0)
                      : ((0, a.openBlock)(),
                        (0, a.createElementBlock)("picture", P, [
                          (0, a.createElementVNode)(
                            "source",
                            { srcset: m.value, type: "image/webp" },
                            null,
                            8,
                            k
                          ),
                          (0, a.createElementVNode)(
                            "img",
                            {
                              onError:
                                l[0] ||
                                (l[0] = (...e) =>
                                  (0, a.unref)(o) && (0, a.unref)(o)(...e)),
                              srcset: p.value,
                              src: `${(0, a.unref)(s)(
                                (0, a.unref)(t)(r.slide.imgUrlProgressive)
                              )}`,
                              alt: r.slide.name,
                              loading: "lazy",
                              width: "272",
                              height: "176",
                              class: "games-third-party-slider-card__image",
                            },
                            null,
                            40,
                            T
                          ),
                        ])),
                  ],
                  6
                ),
                (0, a.createElementVNode)("div", B, [
                  (0, a.createElementVNode)(
                    "p",
                    C,
                    (0, a.toDisplayString)(r.slide.name),
                    1
                  ),
                ]),
              ])
            );
          },
        }),
        U = (0, E.A)(R, [["__scopeId", "data-v-2dc5338b"]]);
      var x = t(99799879);
      const $ = ["href"],
        I = (0, a.defineComponent)({
          __name: "GamesThirdPartySlider",
          setup(e) {
            const {
                hasSlides: r,
                initSliderData: t,
                slidesList: l,
                placeholderPath: i,
                language: s,
              } = (0, n.G)(),
              c = (0, x.zv)(s.value),
              d = (0, a.ref)(!0);
            return (
              (0, a.onBeforeMount)(async () => {
                try {
                  await t();
                } finally {
                  d.value = !1;
                }
              }),
              (0, a.watch)(d, (e) => {
                e || (0, o.d)()?.emit("isLoaded");
              }),
              (e, t) =>
                (0, a.unref)(r) && !d.value
                  ? ((0, a.openBlock)(),
                    (0, a.createBlock)(
                      y,
                      {
                        key: 0,
                        slides: (0, a.unref)(l),
                        rtl: (0, a.unref)(c),
                        shadowEnd: "",
                        shadowStart: "",
                        class: "games-third-party-slider",
                      },
                      {
                        default: (0, a.withCtx)(({ slide: e }) => [
                          (0, a.createElementVNode)(
                            "a",
                            {
                              href: e.href,
                              class: "games-third-party-slider__link",
                            },
                            [
                              (0, a.createVNode)(
                                U,
                                {
                                  slide: e,
                                  placeholderPath: (0, a.unref)(i),
                                  class: "games-third-party-slider__slide",
                                },
                                null,
                                8,
                                ["slide", "placeholderPath"]
                              ),
                            ],
                            8,
                            $
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["slides", "rtl"]
                    ))
                  : (0, a.createCommentVNode)("", !0)
            );
          },
        }),
        M = (0, E.A)(I, [["__scopeId", "data-v-47a8de5a"]]),
        A = (0, a.defineComponent)({
          __name: "GamesSwipeSlider",
          props: {
            slides: { type: Array, required: !0 },
            themeShadow: { type: String, default: "default" },
            rtl: { type: Boolean, default: !1 },
            shadowStart: { type: Boolean, default: !1 },
            shadowEnd: { type: Boolean, default: !1 },
            showScrollbar: { type: Boolean, default: !0 },
            settings: { type: String, default: "default" },
          },
          emits: ["scroll", "scrollEnd"],
          setup(e, { emit: r }) {
            const t = e,
              l = r,
              n = (0, a.ref)(t.rtl),
              i = (0, a.ref)(),
              s = (0, a.ref)([]),
              c = (0, a.ref)(),
              d = (0, a.ref)(),
              u = (0, a.ref)(0),
              {
                scrollbarEmitUpdateScrollAsPercentage: m,
                scrollbarEmitScrollEnd: f,
                updateDragPositionByPercent: h,
                scrollbarHandleResize: g,
              } = p({
                refScrollbarContainer: c,
                refScrollbarDrag: d,
                isRtl: n,
              }),
              {
                horizontalSwiperIsScroll: w,
                horizontalSwiperUpdateScrollByPercent: S,
                horizontalSwiperEmitUpdateScrollAsPercentage: E,
                horizontalSwiperEmitScrollEnd: y,
              } = v({ refHorizontalSwiper: i }, n),
              b = (0, a.ref)(!1),
              _ = (0, a.computed)(
                () => (0, a.unref)(w) && t.shadowStart && (0, a.unref)(u) >= 5
              ),
              z = (0, a.computed)(
                () => (0, a.unref)(w) && t.shadowEnd && (0, a.unref)(u) <= 95
              ),
              L = (e) => {
                (u.value = Math.abs(Number(e))), l("scroll", u.value);
              },
              P = (0, a.computed)(() => [
                `games-swipe-slider--settings-${t.settings}`,
              ]),
              k = (0, a.computed)(() => ({
                "games-swipe-slider__body--has-scrollbar": t.showScrollbar,
              })),
              T = (0, a.computed)(() => ({
                "games-swipe-slider__shadow--is-start": (0, a.unref)(_),
                "games-swipe-slider__shadow--is-end": (0, a.unref)(z),
              }));
            return (
              (0, o.d)().on("handleResizeSlider", () => {
                g();
              }),
              (0, a.watch)(w, () => {
                g();
              }),
              (0, a.onMounted)(async () => {
                E.watch(h),
                  E.watch(L),
                  m.watch(S),
                  m.watch(L),
                  f.watch(() => l("scrollEnd", u.value)),
                  y.watch(() => l("scrollEnd", u.value)),
                  await (0, a.nextTick)(),
                  (b.value = t.showScrollbar);
              }),
              (r, t) => (
                (0, a.openBlock)(),
                (0, a.createElementBlock)(
                  "div",
                  {
                    class: (0, a.normalizeClass)([
                      P.value,
                      "games-swipe-slider",
                    ]),
                  },
                  [
                    (0, a.createElementVNode)(
                      "div",
                      {
                        class: (0, a.normalizeClass)([
                          k.value,
                          "games-swipe-slider__body",
                        ]),
                      },
                      [
                        (0, a.createElementVNode)(
                          "ul",
                          {
                            ref_key: "refHorizontalSwiper",
                            ref: i,
                            class: "games-swipe-slider__slides",
                          },
                          [
                            ((0, a.openBlock)(!0),
                            (0, a.createElementBlock)(
                              a.Fragment,
                              null,
                              (0, a.renderList)(
                                e.slides,
                                (e, t) => (
                                  (0, a.openBlock)(),
                                  (0, a.createElementBlock)(
                                    "li",
                                    {
                                      key: t,
                                      class: "games-swipe-slider__item",
                                    },
                                    [
                                      (0, a.renderSlot)(r.$slots, "default", {
                                        slide: e,
                                        slideIndex: t,
                                        refItems: s.value,
                                      }),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          512
                        ),
                        (0, a.createElementVNode)(
                          "span",
                          {
                            class: (0, a.normalizeClass)([
                              T.value,
                              "games-swipe-slider__shadow",
                            ]),
                          },
                          null,
                          2
                        ),
                      ],
                      2
                    ),
                    b.value
                      ? ((0, a.openBlock)(),
                        (0, a.createElementBlock)(
                          "div",
                          {
                            key: 0,
                            ref_key: "refScrollbarContainer",
                            ref: c,
                            class:
                              "games-swipe-slider__scrollbar games-swipe-slider-scrollbar",
                          },
                          [
                            (0, a.createElementVNode)(
                              "div",
                              {
                                ref_key: "refScrollbarDrag",
                                ref: d,
                                class: "games-swipe-slider-scrollbar__drag",
                              },
                              null,
                              512
                            ),
                          ],
                          512
                        ))
                      : (0, a.createCommentVNode)("", !0),
                  ],
                  2
                )
              )
            );
          },
        }),
        V = (0, E.A)(A, [["__scopeId", "data-v-50a06e1c"]]),
        N = { class: "games-slider-card" },
        D = { key: 0, class: "games-slider-card__picture" },
        G = ["srcset"],
        W = ["srcset", "src", "alt"],
        j = { class: "games-slider-card__bottom" },
        O = { class: "games-slider-card__name" },
        F = (0, a.defineComponent)({
          __name: "GamesSliderCard",
          props: { slide: {}, placeholderPath: { default: () => "" } },
          setup(e) {
            const r = e,
              { imgPathRect: t, imgPath2xRect: l } = (0, b.Q)(),
              { isBrokenImage: n, handleImageError: o } = (0, _.k)(),
              { getCdnBgStyle: i, getCdnUrl: s } = (0, z.R)(),
              c = i("", `${t(r.placeholderPath)}.jpg`),
              d = (0, a.computed)(() => ((0, a.unref)(n) ? c : "")),
              u = (0, a.computed)(() =>
                (0, a.unref)(n) ? "games-slider-card__main--bg" : ""
              ),
              m = (0, a.computed)(
                () =>
                  s(l(r.slide.imgUrl)) + " 2x," + s(t(r.slide.imgUrl)) + " 1x"
              ),
              p = (0, a.computed)(
                () =>
                  s(l(r.slide.imgUrlProgressive)) +
                  " 2x," +
                  s(t(r.slide.imgUrlProgressive)) +
                  " 1x"
              );
            return (e, l) => (
              (0, a.openBlock)(),
              (0, a.createElementBlock)("div", N, [
                (0, a.createElementVNode)(
                  "div",
                  {
                    style: (0, a.normalizeStyle)(d.value),
                    class: (0, a.normalizeClass)([
                      u.value,
                      "games-slider-card__main",
                    ]),
                  },
                  [
                    (0, a.unref)(n)
                      ? (0, a.createCommentVNode)("", !0)
                      : ((0, a.openBlock)(),
                        (0, a.createElementBlock)("picture", D, [
                          (0, a.createElementVNode)(
                            "source",
                            { srcset: m.value, type: "image/webp" },
                            null,
                            8,
                            G
                          ),
                          (0, a.createElementVNode)(
                            "img",
                            {
                              onError:
                                l[0] ||
                                (l[0] = (...e) =>
                                  (0, a.unref)(o) && (0, a.unref)(o)(...e)),
                              srcset: p.value,
                              src: `${(0, a.unref)(s)(
                                (0, a.unref)(t)(r.slide.imgUrlProgressive)
                              )}`,
                              alt: r.slide.name,
                              loading: "lazy",
                              width: "190",
                              height: "102",
                              class: "games-slider-card__image",
                            },
                            null,
                            40,
                            W
                          ),
                        ])),
                  ],
                  6
                ),
                (0, a.createElementVNode)("div", j, [
                  (0, a.createElementVNode)(
                    "p",
                    O,
                    (0, a.toDisplayString)(r.slide.name),
                    1
                  ),
                ]),
              ])
            );
          },
        }),
        X = (0, E.A)(F, [["__scopeId", "data-v-d26e9250"]]),
        H = ["href"],
        q = (0, a.defineComponent)({
          __name: "GamesHomeSlider",
          setup(e) {
            const {
                hasSlides: r,
                initSliderData: t,
                slidesList: l,
                placeholderPath: i,
                language: s,
              } = (0, n.G)(),
              c = (0, x.zv)(s.value),
              d = (0, a.ref)(!0);
            return (
              (0, a.onBeforeMount)(async () => {
                try {
                  await t();
                } finally {
                  d.value = !1;
                }
              }),
              (0, a.watch)(d, (e) => {
                e || (0, o.d)()?.emit("isLoaded");
              }),
              (e, t) =>
                (0, a.unref)(r) && !d.value
                  ? ((0, a.openBlock)(),
                    (0, a.createBlock)(
                      V,
                      {
                        key: 0,
                        slides: (0, a.unref)(l),
                        rtl: (0, a.unref)(c),
                        shadowEnd: "",
                        shadowStart: "",
                        class: "games-home-slider",
                      },
                      {
                        default: (0, a.withCtx)(({ slide: e }) => [
                          (0, a.createElementVNode)(
                            "a",
                            { href: e.href, class: "games-home-slider__link" },
                            [
                              (0, a.createVNode)(
                                X,
                                {
                                  slide: e,
                                  placeholderPath: (0, a.unref)(i),
                                  class: "games-home-slider__slide",
                                },
                                null,
                                8,
                                ["slide", "placeholderPath"]
                              ),
                            ],
                            8,
                            H
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["slides", "rtl"]
                    ))
                  : (0, a.createCommentVNode)("", !0)
            );
          },
        }),
        Q = (0, E.A)(q, [["__scopeId", "data-v-67297a0a"]]);
      var Z = t(48439800);
      const J = { key: 0, class: "games-app-banners" },
        K = { key: 1, class: "games-app-banners" },
        Y = (0, a.defineComponent)({
          __name: "DesktopApp",
          setup(e) {
            const { isThirdParty: r } = (0, l.storeToRefs)((0, Z.h)());
            return (e, t) =>
              (0, a.unref)(r)
                ? ((0, a.openBlock)(),
                  (0, a.createElementBlock)("div", J, [(0, a.createVNode)(M)]))
                : ((0, a.openBlock)(),
                  (0, a.createElementBlock)("div", K, [(0, a.createVNode)(Q)]));
          },
        }),
        ee = (0, E.A)(Y, [["__scopeId", "data-v-6d372c4a"]]);
    },
    30859221: (e, r, t) => {
      t.d(r, { k: () => l });
      var a = t(43194072);
      const l = ({
        defaultValue: e = !1,
        mainClass: r = "",
        nameClass: t = "",
      } = {}) => {
        const l = (0, a.ref)((0, a.unref)(e)),
          n = (0, a.computed)(() => ({ [r]: (0, a.unref)(l) })),
          o = (0, a.computed)(() => ({ [t]: (0, a.unref)(l) }));
        return {
          isBrokenImage: l,
          mainClasses: n,
          nameClasses: o,
          handleImageError: () => {
            l.value = !0;
          },
        };
      };
    },
    44954442: (e, r, t) => {
      t.d(r, { R: () => i });
      var a = t(35910884),
        l = t(66870897),
        n = t(48439800),
        o = t(70091657);
      const i = () => {
        const { mainCdnUrl: e } = (0, a.storeToRefs)((0, n.h)()),
          r = e.value ?? "",
          t = (e) => `${r}${e}`;
        return {
          getCdnUrl: t,
          getCdnBgStyle: (e, ...r) => ({
            backgroundImage: r.map((r) => `url(${t(e + r)})`).join(", "),
          }),
          getResizedUrl: (e, r) =>
            `${(0, o.A)(`${l.Zu}${r?.size ?? l.I7}${e}`)}`,
        };
      };
    },
    67455263: (e, r, t) => {
      t.d(r, { Q: () => o });
      var a = t(43194072),
        l = t(44954442),
        n = t(30859221);
      const o = () => {
        const { isBrokenImage: e } = (0, n.k)(),
          { getCdnUrl: r } = (0, l.R)(),
          t = (e) => (e ? e.replace(/(faceless|game-\d+)/, "$1-circle") : ""),
          o = (e) => (e ? e.replace(/(game-previews)/, "$1/190x102") : ""),
          i = (e) => (e ? e.replace(/(game-previews)/, "$1/544x352") : "");
        return {
          gamesSliderCardMainClasses: (0, a.computed)(() =>
            (0, a.unref)(e) ? "games-slider-card__main--bg" : ""
          ),
          imgPathCircle: t,
          imgPath2xCircle: (e) =>
            e ? t(e).replace(/(game-previews\/)/, "$1x2/") : "",
          imgPathRect: o,
          imgPath2xRect: (e) => (e ? o(e).replace(/(190x102)/, "$1/x2") : ""),
          imgPathThirdParty: i,
          imgPath2xThirdParty: (e) =>
            e ? i(e).replace(/(544x352)/, "$1/x2") : "",
          getImageSrc: (e) => r(o(e.imgUrl)),
        };
      };
    },
    89275642: (e, r, t) => {
      t.d(r, { G: () => E });
      var a = t(43194072),
        l = t(35910884),
        n = t(48439800),
        o = t(66870897);
      class i {
        onFulfilled(e) {
          return (
            o.ag.token && (e.headers["X-Auth"] = `Bearer ${o.ag.token}`), e
          );
        }
      }
      class s {
        onFulfilled(e) {
          return (e.params = { language: o.ag.language, ...e.params }), e;
        }
      }
      class c {
        onFulfilled(e) {
          return (e.params = { whence: o.ag.whence, ...e.params }), e;
        }
      }
      class d extends Error {
        constructor(e, r, t, a, l) {
          super(l ?? "Service Api Response Error"),
            (this.statusCode = e),
            (this.serviceApiErrorCode = r),
            (this.serviceApiMessage = t),
            (this.response = a),
            (this.errorMessage = l),
            Object.setPrototypeOf(this, d.prototype);
        }
      }
      const u = (e) =>
        Promise.reject(
          new d(e.status ?? 400, e.data?.ErrorCode ?? 0, e.data?.Error, e)
        );
      class m {
        onFulfilled(e) {
          const { data: r } = e;
          if (!1 === r.Success) return u(e);
          const t = r.Value ?? r;
          return { ...e, data: t };
        }
        onRejected(e) {
          return e.response ? u(e.response) : Promise.reject(e);
        }
      }
      class p {
        onFulfilled(e) {
          return e;
        }
        onRejected(e) {
          return e instanceof d
            ? Promise.reject(e)
            : Promise.reject(
                new d(
                  e.response?.status ?? 400,
                  0,
                  void 0,
                  e.response,
                  e.message
                )
              );
        }
      }
      var f = t(13854563),
        h = t.n(f),
        g = t(70091657);
      const w = (e, r, t, a) => {
          const l = h().create({ baseURL: (0, g.A)(`service-api/${e}`), ...a });
          return (
            r.forEach((e) => {
              l.interceptors.request.use(e.onFulfilled, e.onRejected);
            }),
            t.forEach((e) => {
              l.interceptors.response.use(
                (r) => e.onFulfilled(r, l),
                (r) => e.onRejected?.(r, l) ?? Promise.reject(r)
              );
            }),
            l
          );
        },
        v = (e) => {
          const r = [new i(), new s(), new c()],
            t = [new m(), new p()];
          return w("games-preview", r, t, e);
        };
      class S {
        constructor() {
          this.apiClient = v();
        }
        async makeRequest(e) {
          try {
            const { data: r } = await this.apiClient.request(e);
            return r;
          } catch (r) {
            return Promise.reject(r);
          }
        }
        async getTopGamesList() {
          return (
            await this.makeRequest({
              url: "GetGamesPreviewLight",
              method: "GET",
              params: { top: 15 },
            })
          ).G;
        }
      }
      const E = () => {
        const e = new S(),
          {
            isThirdParty: r,
            projectName: t,
            language: i,
            altImgUrl: s,
            isMobileView: c,
          } = (0, l.storeToRefs)((0, n.h)()),
          d = r.value ? `${o.bs}games-faceless` : `${o.bs}games-no-faceless`,
          u = (0, a.ref)([]),
          m = (0, a.ref)([]),
          p = (0, a.computed)(() => u.value.length > 0),
          f = (0, a.computed)(() =>
            s.value
              ? c.value
                ? `${o.bs}${s.value}-circle`
                : `${o.bs}${s.value}`
              : null
          ),
          h = (0, a.computed)(() => {
            if (m.value)
              return {
                id: "otherGames",
                title: t.value,
                isNeedLinkGeneration: !1,
                href: `${o.hM}`,
              };
          }),
          g = () => {
            const e = {
              id: "0",
              name: t.value,
              imgUrl: f.value ? `${f.value}.webp` : `${d}.webp`,
              imgUrlProgressive: f.value ? `${f.value}.png` : `${d}.jpg`,
              href: `${o.hM}`,
            };
            m.value && (u.value = [e, ...m.value]);
          };
        return {
          slidesList: u,
          hasSlides: p,
          placeholderPath: d,
          thirdPartySectionLink: h,
          language: i,
          initDefaultSliderData: g,
          initSliderData: async () => {
            await (async () => {
              const r = await e.getTopGamesList();
              m.value = r.map((e) => {
                const r = `${o.bs}game-${e.GT}.webp`,
                  t = `${o.bs}game-${e.GT}.jpg`;
                return {
                  id: String(e.GT),
                  name: e.GN,
                  imgUrl: `${r}`,
                  imgUrlProgressive: `${t}`,
                  href: `${o.hM}/${e.R}`,
                };
              });
            })(),
              g();
          },
        };
      };
    },
  },
]);
