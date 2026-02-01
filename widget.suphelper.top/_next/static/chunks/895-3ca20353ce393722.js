(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [895],
  {
    831: (e, t, n) => {
      var r = n(68988),
        i = n(22180);
      e.exports = function (e, t) {
        return e && e.length ? i(e, r(t, 2)) : [];
      };
    },
    987: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => N });
      var r = n(55729),
        i = n(54352),
        o = n(61946),
        a = n(83004),
        l = n(38169),
        s = Object.defineProperty,
        c = Object.defineProperties,
        u = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        m = (e, t, n) =>
          t in e
            ? s(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        h = (e, t) => {
          for (var n in t || (t = {})) p.call(t, n) && m(e, n, t[n]);
          if (f) for (var n of f(t)) d.call(t, n) && m(e, n, t[n]);
          return e;
        },
        g = (e, t) => c(e, u(t));
      function y(e, t = 0) {
        let n = {},
          [r, i] = e.split("-"),
          o = "",
          a = "";
        return (
          "top" === r && ((n.top = t), (a = "-50%")),
          "middle" === r && ((n.top = "50%"), (a = "-50%")),
          "bottom" === r && ((n.bottom = t), (a = "50%")),
          "start" === i && ((n.left = t), (o = "-50%")),
          "center" === i && ((n.left = "50%"), (o = "-50%")),
          "end" === i && ((n.right = t), (o = "50%")),
          (n.transform = `translate(${o}, ${a})`),
          n
        );
      }
      var v = (0, l.r)(
        (
          e,
          {
            radius: t,
            size: n,
            color: r,
            position: i,
            offset: o,
            inline: l,
            withBorder: s,
            withLabel: c,
            zIndex: u,
          }
        ) => {
          let { background: f } = e.fn.variant({
            variant: "filled",
            primaryFallback: !1,
            color: r || e.primaryColor,
          });
          return {
            root: {
              position: "relative",
              display: l ? "inline-block" : "block",
            },
            indicator: g(h({}, y(i, o)), {
              zIndex: u,
              position: "absolute",
              [c ? "minWidth" : "width"]: n,
              height: n,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: e.fontSizes.xs,
              paddingLeft: c ? `calc(${e.spacing.xs}px / 2)` : 0,
              paddingRight: c ? `calc(${e.spacing.xs}px / 2)` : 0,
              borderRadius: e.fn.size({ size: t, sizes: e.radius }),
              backgroundColor: e.fn.variant({
                variant: "filled",
                primaryFallback: !1,
                color: r || e.primaryColor,
              }).background,
              border: s
                ? `2px solid ${
                    "dark" === e.colorScheme ? e.colors.dark[7] : e.white
                  }`
                : void 0,
              color: e.white,
              whiteSpace: "nowrap",
            }),
            processing: {
              animation: `${((e) =>
                (0, a.i7)({
                  from: { boxShadow: `0 0 0.5px 0 ${e}`, opacity: 0.6 },
                  to: { boxShadow: `0 0 0.5px 4.4px ${e}`, opacity: 0 },
                }))(f)} 1000ms linear infinite`,
            },
            common: g(h({}, y(i, o)), {
              position: "absolute",
              [c ? "minWidth" : "width"]: n,
              height: n,
              borderRadius: e.fn.size({ size: t, sizes: e.radius }),
            }),
          };
        }
      );
      function b(e) {
        let t = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            t.current = e;
          }, [e]),
          t.current
        );
      }
      let x = (0, a.i7)({
          from: { transform: "translateY(-60%)", opacity: 0 },
          to: { transform: "translateY(0%)", opacity: 1 },
        }),
        w = (0, a.i7)({
          from: { transform: "translateY(60%)", opacity: 0 },
          to: { transform: "translateY(0%)", opacity: 1 },
        }),
        k = (0, a.i7)({
          from: { transform: "translateY(0%)", opacity: 1 },
          to: { transform: "translateY(-60%)", opacity: 0 },
        }),
        O = (0, a.i7)({
          from: { transform: "translateY(0%)", opacity: 1 },
          to: { transform: "translateY(60%)", opacity: 0 },
        });
      var E = (0, l.r)(() => ({
        baseNumber: {
          height: 18,
          width: "0.6em",
          maxWidth: "0.6em",
          position: "relative",
          display: "inline-block",
        },
        oldNumberTop: { transform: "translateY(-100%);" },
        oldNumberBottom: { transform: "translateY(100%);" },
        oldNumber: {
          display: "inline-block",
          opacity: 0,
          position: "absolute",
          left: 0,
          right: 0,
        },
        currentNumberTop: { transform: "translateY(0%);" },
        currentNumber: {
          display: "inline-block",
          opacity: 1,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        currentNumberScrollDown: {
          animation: `${x} .2s cubic-bezier(0,0,.2, 1)`,
          animationIterationCount: 1,
        },
        currentNumberScrollUp: {
          animation: `${w} .2s cubic-bezier(0,0,.2, 1)`,
          animationIterationCount: 1,
        },
        oldNumberScrollUp: {
          animation: `${k} .2s cubic-bezier(0,0,.2, 1)`,
          animationIterationCount: 1,
        },
        oldNumberScrollDown: {
          animation: `${O} .2s cubic-bezier(0,0,.2, 1)`,
          animationIterationCount: 1,
        },
      }));
      let S = (0, r.forwardRef)((e, t) => {
        let [n, i] = (0, r.useState)(e.value),
          [o, a] = (0, r.useState)(e.value),
          [l, s] = (0, r.useState)("up"),
          [c, u] = (0, r.useState)(!1),
          f = b(e.value),
          p = (e) => {
            u(!0),
              s(e),
              setTimeout(() => {
                u(!1);
              }, 180);
          };
        (0, r.useEffect)(() => {
          i(f),
            a(e.value),
            (() => {
              let { newOriginalNumber: t, oldOriginalNumber: n } = e;
              null != t && null != n && (t > n ? p("up") : t < n && p("down"));
            })();
        }, [e.value, f]);
        let { classes: d, cx: m } = E(null, { name: "MachineNumber" }),
          h = (0, r.useMemo)(
            () =>
              c
                ? "up" === l
                  ? d.currentNumberScrollUp
                  : d.currentNumberScrollDown
                : null,
            [c, l]
          ),
          g = (0, r.useMemo)(
            () =>
              c
                ? "up" === l
                  ? d.oldNumberScrollUp
                  : d.oldNumberScrollDown
                : null,
            [c, l]
          );
        return r.createElement(
          "span",
          { ref: t, className: d.baseNumber },
          (n &&
            r.createElement(
              "span",
              { className: m(d.oldNumber, d.currentNumberTop, g) },
              n
            )) ||
            null,
          r.createElement(
            "span",
            null,
            r.createElement("span", { className: m(d.currentNumber, h) }, o)
          ),
          (n &&
            r.createElement(
              "span",
              { className: m(d.oldNumber, d.oldNumberBottom, g) },
              n
            )) ||
            null
        );
      });
      var C = (0, l.r)(() => ({
        base: { display: "flex", alignItems: "center", overflow: "hidden" },
      }));
      let P = (0, r.forwardRef)(({ value: e = 0, max: t }, n) => {
        let [i, o] = (0, r.useState)(),
          [a, l] = (0, r.useState)(),
          s = b(e);
        (0, r.useEffect)(() => {
          "string" == typeof e
            ? (o(void 0), l(void 0))
            : ("string" == typeof s ? o(void 0) : o(s), l(e));
        }, [e, s]);
        let c = (0, r.useMemo)(() => {
            if ("string" == typeof e) return [];
            if (e < 1) return [0];
            let n = [],
              r = e;
            for ("number" == typeof t && (r = Math.min(t, r)); r >= 1; )
              n.push(r % 10), (r /= 10), (r = Math.floor(r));
            return n.reverse(), n;
          }, [e, t]),
          { classes: u } = C(null, { name: "machine" });
        return "string" == typeof e
          ? r.createElement("span", { ref: n }, e)
          : r.createElement(
              "span",
              { ref: n, className: u.base },
              c.map((e, t) =>
                r.createElement(S, {
                  key: c.length - t - 1,
                  value: e,
                  oldOriginalNumber: i,
                  newOriginalNumber: a,
                })
              ),
              "number" == typeof t &&
                e > t &&
                r.createElement("span", null, "+")
            );
      });
      var A = n(50433),
        j = Object.defineProperty,
        z = Object.getOwnPropertySymbols,
        R = Object.prototype.hasOwnProperty,
        T = Object.prototype.propertyIsEnumerable,
        I = (e, t, n) =>
          t in e
            ? j(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let D = {
          position: "top-end",
          offset: 0,
          inline: !1,
          withBorder: !1,
          disabled: !1,
          showZero: !0,
          processing: !1,
          dot: !0,
          size: 10,
          overflowCount: 99,
          radius: 1e3,
          zIndex: (0, i.I)("app"),
        },
        N = (0, r.forwardRef)((e, t) => {
          let n = (0, o.a1)("Indicator", D, e),
            {
              children: i,
              position: a,
              offset: l,
              size: s,
              radius: c,
              inline: u,
              withBorder: f,
              className: p,
              color: d,
              dot: m,
              styles: h,
              label: g,
              overflowCount: y,
              showZero: b,
              classNames: x,
              disabled: w,
              zIndex: k,
              unstyled: O,
              processing: E,
            } = n,
            S = ((e, t) => {
              var n = {};
              for (var r in e)
                R.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && z)
                for (var r of z(e))
                  0 > t.indexOf(r) && T.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "children",
              "position",
              "offset",
              "size",
              "radius",
              "inline",
              "withBorder",
              "className",
              "color",
              "dot",
              "styles",
              "label",
              "overflowCount",
              "showZero",
              "classNames",
              "disabled",
              "zIndex",
              "unstyled",
              "processing",
            ]),
            { classes: C, cx: j } = v(
              {
                position: a,
                offset: l,
                size: s,
                radius: c,
                inline: u,
                color: d,
                withBorder: f,
                zIndex: k,
                withLabel: !!g,
              },
              { name: "Indicator", classNames: x, styles: h, unstyled: O }
            ),
            N = (0, r.useMemo)(
              () =>
                "number" == typeof g
                  ? r.createElement(P, { value: g, max: y })
                  : g,
              [g, y]
            ),
            L = (0, r.useMemo)(
              () => !w && (m || (null != g && !(g <= 0 && !b))),
              [w, g, b]
            );
          return r.createElement(
            A.a,
            ((e, t) => {
              for (var n in t || (t = {})) R.call(t, n) && I(e, n, t[n]);
              if (z) for (var n of z(t)) T.call(t, n) && I(e, n, t[n]);
              return e;
            })({ ref: t, className: j(C.root, p) }, S),
            L &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "div",
                  { className: j(C.indicator, C.common) },
                  N
                ),
                E &&
                  r.createElement("div", {
                    className: j(C.processing, C.common),
                  })
              ),
            i
          );
        });
      N.displayName = "@mantine/core/Indicator";
    },
    2872: function (e, t, n) {
      var r;
      !(function (e, i, o) {
        function a(e) {
          var t = this;
          (t.next = function () {
            var e,
              n,
              r = t.w,
              i = t.X,
              o = t.i;
            return (
              (t.w = r = (r + 0x61c88647) | 0),
              (n = i[(o + 34) & 127]),
              (e = i[(o = (o + 1) & 127)]),
              (n ^= n << 13),
              (e ^= e << 17),
              (n ^= n >>> 15),
              (e ^= e >>> 12),
              (n = i[o] = n ^ e),
              (t.i = o),
              (n + (r ^ (r >>> 16))) | 0
            );
          }),
            !(function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                l = [],
                s = 128;
              for (
                t === (0 | t)
                  ? ((r = t), (t = null))
                  : ((t += "\0"), (r = 0), (s = Math.max(s, t.length))),
                  i = 0,
                  o = -32;
                o < s;
                ++o
              )
                t && (r ^= t.charCodeAt((o + 32) % t.length)),
                  0 === o && (a = r),
                  (r ^= r << 10),
                  (r ^= r >>> 15),
                  (r ^= r << 4),
                  (r ^= r >>> 13),
                  o >= 0 &&
                    ((a = (a + 0x61c88647) | 0),
                    (i = 0 == (n = l[127 & o] ^= r + a) ? i + 1 : 0));
              for (
                i >= 128 && (l[127 & ((t && t.length) || 0)] = -1),
                  i = 127,
                  o = 512;
                o > 0;
                --o
              )
                (r = l[(i + 34) & 127]),
                  (n = l[(i = (i + 1) & 127)]),
                  (r ^= r << 13),
                  (n ^= n << 17),
                  (r ^= r >>> 15),
                  (n ^= n >>> 12),
                  (l[i] = r ^ n);
              (e.w = a), (e.X = l), (e.i = i);
            })(t, e);
        }
        function l(e, t) {
          return (t.i = e.i), (t.w = e.w), (t.X = e.X.slice()), t;
        }
        function s(e, t) {
          null == e && (e = +new Date());
          var n = new a(e),
            r = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 0x100000000;
            };
          return (
            (i.double = function () {
              do
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 0x100000000) /
                  2097152;
              while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            r &&
              (r.X && l(r, n),
              (i.state = function () {
                return l(n, {});
              })),
            i
          );
        }
        i && i.exports
          ? (i.exports = s)
          : n.amdD && n.amdO
          ? void 0 ===
              (r = function () {
                return s;
              }.call(t, n, t, i)) || (i.exports = r)
          : (this.xor4096 = s);
      })(0, (e = n.nmd(e)), n.amdD);
    },
    2921: (e) => {
      "use strict";
      (e.exports = function (e, t) {
        return "string" == typeof e
          ? a(e)
          : "number" == typeof e
          ? o(e, t)
          : null;
      }),
        (e.exports.format = o),
        (e.exports.parse = a);
      var t = /\B(?=(\d{3})+(?!\d))/g,
        n = /(?:\.0*|(\.[^0]+)0+)$/,
        r = {
          b: 1,
          kb: 1024,
          mb: 1048576,
          gb: 0x40000000,
          tb: 0x10000000000,
          pb: 0x4000000000000,
        },
        i = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
      function o(e, i) {
        if (!Number.isFinite(e)) return null;
        var o = Math.abs(e),
          a = (i && i.thousandsSeparator) || "",
          l = (i && i.unitSeparator) || "",
          s = i && void 0 !== i.decimalPlaces ? i.decimalPlaces : 2,
          c = !!(i && i.fixedDecimals),
          u = (i && i.unit) || "";
        (u && r[u.toLowerCase()]) ||
          (u =
            o >= r.pb
              ? "PB"
              : o >= r.tb
              ? "TB"
              : o >= r.gb
              ? "GB"
              : o >= r.mb
              ? "MB"
              : o >= r.kb
              ? "KB"
              : "B");
        var f = (e / r[u.toLowerCase()]).toFixed(s);
        return (
          c || (f = f.replace(n, "$1")),
          a &&
            (f = f
              .split(".")
              .map(function (e, n) {
                return 0 === n ? e.replace(t, a) : e;
              })
              .join(".")),
          f + l + u
        );
      }
      function a(e) {
        if ("number" == typeof e && !isNaN(e)) return e;
        if ("string" != typeof e) return null;
        var t,
          n = i.exec(e),
          o = "b";
        return (n
          ? ((t = parseFloat(n[1])), (o = n[4].toLowerCase()))
          : ((t = parseInt(e, 10)), (o = "b")),
        isNaN(t))
          ? null
          : Math.floor(r[o] * t);
      }
    },
    4140: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    5158: (e, t, n) => {
      "use strict";
      n.d(t, { y: () => w });
      var r = Object.defineProperty,
        i = Object.defineProperties,
        o = Object.getOwnPropertyDescriptors,
        a = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable,
        c = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        u = (e, t) => {
          for (var n in t || (t = {})) l.call(t, n) && c(e, n, t[n]);
          if (a) for (var n of a(t)) s.call(t, n) && c(e, n, t[n]);
          return e;
        },
        f = (e, t) => i(e, o(t));
      let p = {
          in: { opacity: 1, transform: "scale(1)" },
          out: { opacity: 0, transform: "scale(.9) translateY(10px)" },
          transitionProperty: "transform, opacity",
        },
        d = {
          fade: {
            in: { opacity: 1 },
            out: { opacity: 0 },
            transitionProperty: "opacity",
          },
          scale: {
            in: { opacity: 1, transform: "scale(1)" },
            out: { opacity: 0, transform: "scale(0)" },
            common: { transformOrigin: "top" },
            transitionProperty: "transform, opacity",
          },
          "scale-y": {
            in: { opacity: 1, transform: "scaleY(1)" },
            out: { opacity: 0, transform: "scaleY(0)" },
            common: { transformOrigin: "top" },
            transitionProperty: "transform, opacity",
          },
          "scale-x": {
            in: { opacity: 1, transform: "scaleX(1)" },
            out: { opacity: 0, transform: "scaleX(0)" },
            common: { transformOrigin: "left" },
            transitionProperty: "transform, opacity",
          },
          "skew-up": {
            in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
            out: {
              opacity: 0,
              transform: "translateY(-20px) skew(-10deg, -5deg)",
            },
            common: { transformOrigin: "top" },
            transitionProperty: "transform, opacity",
          },
          "skew-down": {
            in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
            out: {
              opacity: 0,
              transform: "translateY(20px) skew(-10deg, -5deg)",
            },
            common: { transformOrigin: "bottom" },
            transitionProperty: "transform, opacity",
          },
          "rotate-left": {
            in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
            out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
            common: { transformOrigin: "bottom" },
            transitionProperty: "transform, opacity",
          },
          "rotate-right": {
            in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
            out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
            common: { transformOrigin: "top" },
            transitionProperty: "transform, opacity",
          },
          "slide-down": {
            in: { opacity: 1, transform: "translateY(0)" },
            out: { opacity: 0, transform: "translateY(-100%)" },
            common: { transformOrigin: "top" },
            transitionProperty: "transform, opacity",
          },
          "slide-up": {
            in: { opacity: 1, transform: "translateY(0)" },
            out: { opacity: 0, transform: "translateY(100%)" },
            common: { transformOrigin: "bottom" },
            transitionProperty: "transform, opacity",
          },
          "slide-left": {
            in: { opacity: 1, transform: "translateX(0)" },
            out: { opacity: 0, transform: "translateX(100%)" },
            common: { transformOrigin: "left" },
            transitionProperty: "transform, opacity",
          },
          "slide-right": {
            in: { opacity: 1, transform: "translateX(0)" },
            out: { opacity: 0, transform: "translateX(-100%)" },
            common: { transformOrigin: "right" },
            transitionProperty: "transform, opacity",
          },
          pop: f(u({}, p), { common: { transformOrigin: "center center" } }),
          "pop-bottom-left": f(u({}, p), {
            common: { transformOrigin: "bottom left" },
          }),
          "pop-bottom-right": f(u({}, p), {
            common: { transformOrigin: "bottom right" },
          }),
          "pop-top-left": f(u({}, p), {
            common: { transformOrigin: "top left" },
          }),
          "pop-top-right": f(u({}, p), {
            common: { transformOrigin: "top right" },
          }),
        };
      var m = Object.defineProperty,
        h = Object.getOwnPropertySymbols,
        g = Object.prototype.hasOwnProperty,
        y = Object.prototype.propertyIsEnumerable,
        v = (e, t, n) =>
          t in e
            ? m(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        b = (e, t) => {
          for (var n in t || (t = {})) g.call(t, n) && v(e, n, t[n]);
          if (h) for (var n of h(t)) y.call(t, n) && v(e, n, t[n]);
          return e;
        };
      let x = {
        entering: "in",
        entered: "in",
        exiting: "out",
        exited: "out",
        "pre-exiting": "out",
        "pre-entering": "out",
      };
      function w({ transition: e, state: t, duration: n, timingFunction: r }) {
        let i = { transitionDuration: `${n}ms`, transitionTimingFunction: r };
        return "string" == typeof e
          ? e in d
            ? b(
                b(
                  b({ transitionProperty: d[e].transitionProperty }, i),
                  d[e].common
                ),
                d[e][x[t]]
              )
            : null
          : b(
              b(b({ transitionProperty: e.transitionProperty }, i), e.common),
              e[x[t]]
            );
      }
    },
    6242: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      var r = n(55729),
        i = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        };
      let o = function (e, t) {
        void 0 === e && (e = !1);
        var n = i((0, r.useState)(e), 2),
          o = n[0],
          a = n[1];
        return [
          o,
          (0, r.useMemo)(function () {
            var n = void 0 === t ? !e : t;
            return {
              toggle: function () {
                return a(function (t) {
                  return t === e ? n : e;
                });
              },
              set: function (e) {
                return a(e);
              },
              setLeft: function () {
                return a(e);
              },
              setRight: function () {
                return a(n);
              },
            };
          }, []),
        ];
      };
      var a = function (e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      };
      function l(e) {
        void 0 === e && (e = !1);
        var t = a(o(e), 2),
          n = t[0],
          i = t[1],
          l = i.toggle,
          s = i.set;
        return [
          n,
          (0, r.useMemo)(function () {
            return {
              toggle: l,
              set: function (e) {
                return s(!!e);
              },
              setTrue: function () {
                return s(!0);
              },
              setFalse: function () {
                return s(!1);
              },
            };
          }, []),
        ];
      }
    },
    7296: (e) => {
      "use strict";
      let t = (e) => "object" == typeof e && null !== e,
        n = Symbol("skip"),
        r = (e) =>
          t(e) &&
          !(e instanceof RegExp) &&
          !(e instanceof Error) &&
          !(e instanceof Date),
        i = (e, t, o, a = new WeakMap()) => {
          if (((o = { deep: !1, target: {}, ...o }), a.has(e))) return a.get(e);
          a.set(e, o.target);
          let { target: l } = o;
          delete o.target;
          let s = (e) => e.map((e) => (r(e) ? i(e, t, o, a) : e));
          if (Array.isArray(e)) return s(e);
          for (let [c, u] of Object.entries(e)) {
            let f = t(c, u, e);
            if (f === n) continue;
            let [p, d, { shouldRecurse: m = !0 } = {}] = f;
            "__proto__" !== p &&
              (o.deep &&
                m &&
                r(d) &&
                (d = Array.isArray(d) ? s(d) : i(d, t, o, a)),
              (l[p] = d));
          }
          return l;
        };
      (e.exports = (e, n, r) => {
        if (!t(e))
          throw TypeError(`Expected an object, got \`${e}\` (${typeof e})`);
        return i(e, n, r);
      }),
        (e.exports.mapObjectSkip = n);
    },
    9329: (e, t, n) => {
      "use strict";
      function r(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      n.d(t, { _: () => r });
    },
    11581: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => z });
      var r = n(55729),
        i = n(55272),
        o = n.n(i);
      function a(e) {
        return null === e || "object" != typeof e
          ? {}
          : Object.keys(e).reduce((t, n) => {
              let r = e[n];
              return null != r && !1 !== r && (t[n] = r), t;
            }, {});
      }
      var l = Object.defineProperty,
        s = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        f = (e, t, n) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      function p(e, t) {
        if (null === t || "object" != typeof t) return {};
        let n = ((e, t) => {
          for (var n in t || (t = {})) c.call(t, n) && f(e, n, t[n]);
          if (s) for (var n of s(t)) u.call(t, n) && f(e, n, t[n]);
          return e;
        })({}, t);
        return (
          Object.keys(t).forEach((t) => {
            t.includes(`${String(e)}.`) && delete n[t];
          }),
          n
        );
      }
      function d(e, t) {
        return (
          !!t &&
          ("boolean" == typeof t
            ? t
            : !!Array.isArray(t) &&
              t.includes(e.replace(/[.][0-9]/g, ".__MANTINE_FORM_INDEX__")))
        );
      }
      function m(e) {
        return "string" != typeof e ? [] : e.split(".");
      }
      function h(e, t, n) {
        let r = m(e);
        if (0 === r.length) return n;
        let i = (function e(t) {
          if ("object" != typeof t) return t;
          var n,
            r,
            i = Object.prototype.toString.call(t);
          if ("[object Object]" === i) {
            if (t.constructor !== Object && "function" == typeof t.constructor)
              for (n in ((r = new t.constructor()), t))
                t.hasOwnProperty(n) && r[n] !== t[n] && (r[n] = e(t[n]));
            else
              for (n in ((r = {}), t))
                "__proto__" === n
                  ? Object.defineProperty(r, n, {
                      value: e(t[n]),
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                    })
                  : (r[n] = e(t[n]));
            return r;
          }
          if ("[object Array]" === i) {
            for (r = Array((n = t.length)); n--; ) r[n] = e(t[n]);
            return r;
          }
          return "[object Set]" === i
            ? ((r = new Set()),
              t.forEach(function (t) {
                r.add(e(t));
              }),
              r)
            : "[object Map]" === i
            ? ((r = new Map()),
              t.forEach(function (t, n) {
                r.set(e(n), e(t));
              }),
              r)
            : "[object Date]" === i
            ? new Date(+t)
            : "[object RegExp]" === i
            ? (((r = new RegExp(t.source, t.flags)).lastIndex = t.lastIndex), r)
            : "[object DataView]" === i
            ? new t.constructor(e(t.buffer))
            : "[object ArrayBuffer]" === i
            ? t.slice(0)
            : "Array]" === i.slice(-6)
            ? new t.constructor(t)
            : t;
        })(n);
        if (1 === r.length) return (i[r[0]] = t), i;
        let o = i[r[0]];
        for (let e = 1; e < r.length - 1; e += 1) {
          if (void 0 === o) return i;
          o = o[r[e]];
        }
        return (o[r[r.length - 1]] = t), i;
      }
      function g(e, t) {
        let n = m(e);
        if (0 === n.length || "object" != typeof t || null === t) return;
        let r = t[n[0]];
        for (let e = 1; e < n.length && void 0 !== r; e += 1) r = r[n[e]];
        return r;
      }
      function y(e) {
        let t = a(e);
        return { hasErrors: Object.keys(t).length > 0, errors: t };
      }
      function v(e, t) {
        return "function" == typeof e
          ? y(e(t))
          : y(
              (function e(t, n, r = "", i = {}) {
                return "object" != typeof t || null === t
                  ? i
                  : Object.keys(t).reduce((i, o) => {
                      let a = t[o],
                        l = `${"" === r ? "" : `${r}.`}${o}`,
                        s = g(l, n),
                        c = !1;
                      return (
                        "function" == typeof a && (i[l] = a(s, n, l)),
                        "object" == typeof a &&
                          Array.isArray(s) &&
                          ((c = !0),
                          s.forEach((t, r) => e(a, n, `${l}.${r}`, i))),
                        "object" != typeof a ||
                          "object" != typeof s ||
                          null === s ||
                          c ||
                          e(a, n, l, i),
                        i
                      );
                    }, i);
              })(e, t)
            );
      }
      function b(e, t, n) {
        if ("string" != typeof e) return { hasError: !1, error: null };
        let r = v(t, n),
          i = Object.keys(r.errors).find((t) =>
            e.split(".").every((e, n) => e === t.split(".")[n])
          );
        return { hasError: !!i, error: i ? r.errors[i] : null };
      }
      function x(e, t) {
        let n = Object.keys(e);
        if ("string" == typeof t) {
          let r = n.filter((e) => e.startsWith(`${t}.`));
          return e[t] || r.some((t) => e[t]) || !1;
        }
        return n.some((t) => e[t]);
      }
      var w = Object.defineProperty,
        k = Object.defineProperties,
        O = Object.getOwnPropertyDescriptors,
        E = Object.getOwnPropertySymbols,
        S = Object.prototype.hasOwnProperty,
        C = Object.prototype.propertyIsEnumerable,
        P = (e, t, n) =>
          t in e
            ? w(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        A = (e, t) => {
          for (var n in t || (t = {})) S.call(t, n) && P(e, n, t[n]);
          if (E) for (var n of E(t)) C.call(t, n) && P(e, n, t[n]);
          return e;
        },
        j = (e, t) => k(e, O(t));
      function z({
        initialValues: e = {},
        initialErrors: t = {},
        initialDirty: n = {},
        initialTouched: i = {},
        clearInputErrorOnChange: l = !0,
        validateInputOnChange: s = !1,
        validateInputOnBlur: c = !1,
        transformValues: u = (e) => e,
        validate: f,
      } = {}) {
        let [m, y] = (0, r.useState)(i),
          [w, k] = (0, r.useState)(n),
          [O, E] = (0, r.useState)(e),
          [S, C] = (0, r.useState)(a(t)),
          P = (0, r.useRef)(e),
          R = (0, r.useCallback)(() => y({}), []),
          T = (e) => {
            (P.current = e || O), k({});
          },
          I = (0, r.useCallback)(
            (e) => C((t) => a("function" == typeof e ? e(t) : e)),
            []
          ),
          D = (0, r.useCallback)(() => C({}), []),
          N = (0, r.useCallback)(() => {
            E(e), D(), T(e), R();
          }, []),
          L = (0, r.useCallback)(
            (e, t) => I((n) => j(A({}, n), { [e]: t })),
            []
          ),
          M = (0, r.useCallback)(
            (e) =>
              I((t) => {
                if ("string" != typeof e) return t;
                let n = A({}, t);
                return delete n[e], n;
              }),
            []
          ),
          F = (0, r.useCallback)(
            (e) =>
              k((t) => {
                if ("string" != typeof e) return t;
                let n = p(e, t);
                return delete n[e], n;
              }),
            []
          ),
          _ = (0, r.useCallback)((e, t) => {
            let n = d(e, s);
            F(e),
              y((t) => j(A({}, t), { [e]: !0 })),
              E((r) => {
                let i = h(e, t, r);
                if (n) {
                  let t = b(e, f, i);
                  t.hasError ? L(e, t.error) : M(e);
                }
                return i;
              }),
              !n && l && L(e, null);
          }, []),
          B = (0, r.useCallback)((e) => {
            E((t) => {
              let n = "function" == typeof e ? e(t) : e;
              return A(A({}, t), n);
            }),
              l && D();
          }, []),
          H = (0, r.useCallback)((e, t) => {
            F(e),
              E((n) =>
                (function (e, { from: t, to: n }, r) {
                  let i = g(e, r);
                  if (!Array.isArray(i)) return r;
                  let o = [...i],
                    a = i[t];
                  return o.splice(t, 1), o.splice(n, 0, a), h(e, o, r);
                })(e, t, n)
              );
          }, []),
          U = (0, r.useCallback)((e, t) => {
            F(e),
              E((n) =>
                (function (e, t, n) {
                  let r = g(e, n);
                  return Array.isArray(r)
                    ? h(
                        e,
                        r.filter((e, n) => n !== t),
                        n
                      )
                    : n;
                })(e, t, n)
              ),
              C((t) => p(e, t));
          }, []),
          $ = (0, r.useCallback)((e, t, n) => {
            F(e),
              E((r) =>
                (function (e, t, n, r) {
                  let i = g(e, r);
                  if (!Array.isArray(i)) return r;
                  let o = [...i];
                  return (
                    o.splice("number" == typeof n ? n : o.length, 0, t),
                    h(e, o, r)
                  );
                })(e, t, n, r)
              );
          }, []),
          W = (0, r.useCallback)(() => {
            let e = v(f, O);
            return C(e.errors), e;
          }, [O, f]),
          V = (0, r.useCallback)(
            (e) => {
              let t = b(e, f, O);
              return t.hasError ? L(e, t.error) : M(e), t;
            },
            [O, f]
          ),
          q = (0, r.useCallback)((e) => {
            e.preventDefault(), N();
          }, []),
          Y = (0, r.useCallback)((e) => x(m, e), [m]),
          K = (0, r.useCallback)(
            (e) => (e ? !b(e, f, O).hasError : !v(f, O).hasErrors),
            [O, f]
          );
        return {
          values: O,
          errors: S,
          setValues: B,
          setErrors: I,
          setFieldValue: _,
          setFieldError: L,
          clearFieldError: M,
          clearErrors: D,
          reset: N,
          validate: W,
          validateField: V,
          reorderListItem: H,
          removeListItem: U,
          insertListItem: $,
          getInputProps: (
            e,
            {
              type: t = "input",
              withError: n = "input" === t,
              withFocus: r = !0,
            } = {}
          ) => {
            var i;
            let o = {
              onChange:
                ((i = (t) => _(e, t)),
                (e) => {
                  if (e)
                    if ("function" == typeof e) i(e);
                    else if ("object" == typeof e && "nativeEvent" in e) {
                      let { currentTarget: t } = e;
                      t instanceof HTMLInputElement
                        ? "checkbox" === t.type
                          ? i(t.checked)
                          : i(t.value)
                        : (t instanceof HTMLTextAreaElement ||
                            t instanceof HTMLSelectElement) &&
                          i(t.value);
                    } else i(e);
                  else i(e);
                }),
            };
            return (
              n && (o.error = S[e]),
              "checkbox" === t ? (o.checked = g(e, O)) : (o.value = g(e, O)),
              r &&
                ((o.onFocus = () => y((t) => j(A({}, t), { [e]: !0 }))),
                (o.onBlur = () => {
                  if (d(e, c)) {
                    let t = b(e, f, O);
                    t.hasError ? L(e, t.error) : M(e);
                  }
                })),
              o
            );
          },
          onSubmit: (e, t) => (n) => {
            null == n || n.preventDefault();
            let r = W();
            r.hasErrors ? null == t || t(r.errors, O, n) : e(u(O), n);
          },
          onReset: q,
          isDirty: (e) => {
            if (e) {
              let t = g(e, w);
              if ("boolean" == typeof t) return t;
              let n = g(e, O),
                r = g(e, P.current);
              return !o()(n, r);
            }
            return Object.keys(w).length > 0 ? x(w) : !o()(O, P.current);
          },
          isTouched: Y,
          setTouched: y,
          setDirty: k,
          resetTouched: R,
          resetDirty: T,
          isValid: K,
        };
      }
    },
    12364: (e, t, n) => {
      var r = n(23356),
        i = n(23169),
        o = n(22479),
        a = Math.max,
        l = Math.min;
      e.exports = function (e, t, n) {
        var s,
          c,
          u,
          f,
          p,
          d,
          m = 0,
          h = !1,
          g = !1,
          y = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function v(t) {
          var n = s,
            r = c;
          return (s = c = void 0), (m = t), (f = e.apply(r, n));
        }
        function b(e) {
          var n = e - d,
            r = e - m;
          return void 0 === d || n >= t || n < 0 || (g && r >= u);
        }
        function x() {
          var e,
            n,
            r,
            o = i();
          if (b(o)) return w(o);
          p = setTimeout(
            x,
            ((e = o - d), (n = o - m), (r = t - e), g ? l(r, u - n) : r)
          );
        }
        function w(e) {
          return ((p = void 0), y && s) ? v(e) : ((s = c = void 0), f);
        }
        function k() {
          var e,
            n = i(),
            r = b(n);
          if (((s = arguments), (c = this), (d = n), r)) {
            if (void 0 === p)
              return (m = e = d), (p = setTimeout(x, t)), h ? v(e) : f;
            if (g) return clearTimeout(p), (p = setTimeout(x, t)), v(d);
          }
          return void 0 === p && (p = setTimeout(x, t)), f;
        }
        return (
          (t = o(t) || 0),
          r(n) &&
            ((h = !!n.leading),
            (u = (g = "maxWait" in n) ? a(o(n.maxWait) || 0, t) : u),
            (y = "trailing" in n ? !!n.trailing : y)),
          (k.cancel = function () {
            void 0 !== p && clearTimeout(p), (m = 0), (s = d = c = p = void 0);
          }),
          (k.flush = function () {
            return void 0 === p ? f : w(i());
          }),
          k
        );
      };
    },
    13445: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => d });
      var r = n(55729),
        i = n(61946),
        o = (0, n(38169).r)((e, { spacing: t, align: n, justify: r }) => ({
          root: {
            display: "flex",
            flexDirection: "column",
            alignItems: n,
            justifyContent: r,
            gap: e.fn.size({ size: t, sizes: e.spacing }),
          },
        })),
        a = n(50433),
        l = Object.defineProperty,
        s = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        f = (e, t, n) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let p = { spacing: "md", align: "stretch", justify: "flex-start" },
        d = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("Stack", p, e),
            { spacing: l, className: d, align: m, justify: h, unstyled: g } = n,
            y = ((e, t) => {
              var n = {};
              for (var r in e)
                c.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && s)
                for (var r of s(e))
                  0 > t.indexOf(r) && u.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, ["spacing", "className", "align", "justify", "unstyled"]),
            { classes: v, cx: b } = o(
              { spacing: l, align: m, justify: h },
              { name: "Stack", unstyled: g }
            );
          return r.createElement(
            a.a,
            ((e, t) => {
              for (var n in t || (t = {})) c.call(t, n) && f(e, n, t[n]);
              if (s) for (var n of s(t)) u.call(t, n) && f(e, n, t[n]);
              return e;
            })({ className: b(v.root, d), ref: t }, y)
          );
        });
      d.displayName = "@mantine/core/Stack";
    },
    13678: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => ea });
      var r = n(55729),
        i = n(85607),
        o = n(61946),
        a = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        u = (e, t, n) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let f = (0, r.createContext)(null),
        p = f.Provider;
      var d = n(16947),
        m = n(13445);
      function h({
        spacing: e,
        offset: t,
        orientation: n,
        children: i,
        role: o,
        unstyled: a,
      }) {
        return "horizontal" === n
          ? r.createElement(d.Y, { pt: t, spacing: e, role: o, unstyled: a }, i)
          : r.createElement(
              m.B,
              { pt: t, spacing: e, role: o, unstyled: a },
              i
            );
      }
      var g = n(70503),
        y = Object.defineProperty,
        v = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        w = (e, t, n) =>
          t in e
            ? y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        k = (e, t) => {
          for (var n in t || (t = {})) b.call(t, n) && w(e, n, t[n]);
          if (v) for (var n of v(t)) x.call(t, n) && w(e, n, t[n]);
          return e;
        };
      let O = {
          orientation: "horizontal",
          spacing: "lg",
          offset: "xs",
          size: "sm",
        },
        E = (0, r.forwardRef)((e, t) => {
          let n = (0, o.a1)("RadioGroup", O, e),
            {
              children: a,
              value: l,
              defaultValue: s,
              onChange: c,
              orientation: u,
              spacing: f,
              size: d,
              wrapperProps: m,
              unstyled: y,
              offset: w,
              name: E,
            } = n,
            S = ((e, t) => {
              var n = {};
              for (var r in e)
                b.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && v)
                for (var r of v(e))
                  0 > t.indexOf(r) && x.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "children",
              "value",
              "defaultValue",
              "onChange",
              "orientation",
              "spacing",
              "size",
              "wrapperProps",
              "unstyled",
              "offset",
              "name",
            ]),
            C = (0, i.B)(E),
            [P, A] = (function (e) {
              let {
                  value: t,
                  defaultValue: n,
                  finalValue: i,
                  onChange: o = () => {},
                } = e,
                [a, l] = (0, r.useState)(void 0 !== n ? n : i);
              return void 0 !== t
                ? [t, o, !0]
                : [
                    a,
                    (e) => {
                      l(e), null == o || o(e);
                    },
                    !1,
                  ];
            })({ value: l, defaultValue: s, finalValue: "", onChange: c });
          return r.createElement(
            p,
            {
              value: {
                value: P,
                onChange: (e) => A(e.currentTarget.value),
                size: d,
                name: C,
              },
            },
            r.createElement(
              g.p.Wrapper,
              k(
                k(
                  {
                    labelElement: "div",
                    size: d,
                    __staticSelector: "RadioGroup",
                    ref: t,
                    unstyled: y,
                  },
                  m
                ),
                S
              ),
              r.createElement(
                h,
                {
                  spacing: f,
                  orientation: u,
                  unstyled: y,
                  role: "radiogroup",
                  offset: w,
                },
                a
              )
            )
          );
        });
      E.displayName = "@mantine/core/RadioGroup";
      var S = n(38169),
        C = Object.defineProperty,
        P = Object.defineProperties,
        A = Object.getOwnPropertyDescriptors,
        j = Object.getOwnPropertySymbols,
        z = Object.prototype.hasOwnProperty,
        R = Object.prototype.propertyIsEnumerable,
        T = (e, t, n) =>
          t in e
            ? C(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let I = { xs: 16, sm: 20, md: 24, lg: 30, xl: 36 },
        D = { xs: 6, sm: 8, md: 10, lg: 14, xl: 16 };
      var N = (0, S.r)(
          (
            e,
            {
              size: t,
              color: n,
              transitionDuration: r,
              labelPosition: i,
              error: o,
            },
            a
          ) => {
            let l = e.fn.variant({ variant: "filled", color: n }),
              s = e.fn.variant({ variant: "filled", color: "red" }).background;
            return {
              inner: {
                order: "left" === i ? 2 : 1,
                position: "relative",
                alignSelf: "flex-start",
              },
              icon: {
                ref: a("icon"),
                color: e.white,
                opacity: 0,
                transform: "scale(0.75) translateY(2px)",
                transition: `opacity ${r}ms ${e.transitionTimingFunction}`,
                pointerEvents: "none",
                width: e.fn.size({ sizes: D, size: t }),
                height: e.fn.size({ sizes: D, size: t }),
                position: "absolute",
                top: `calc(50% - ${e.fn.size({ sizes: D, size: t }) / 2}px)`,
                left: `calc(50% - ${e.fn.size({ sizes: D, size: t }) / 2}px)`,
              },
              radio: P(
                ((e, t) => {
                  for (var n in t || (t = {})) z.call(t, n) && T(e, n, t[n]);
                  if (j) for (var n of j(t)) R.call(t, n) && T(e, n, t[n]);
                  return e;
                })({}, e.fn.focusStyles()),
                A({
                  backgroundColor:
                    "dark" === e.colorScheme ? e.colors.dark[6] : e.white,
                  border: `1px solid ${
                    o
                      ? s
                      : "dark" === e.colorScheme
                      ? e.colors.dark[4]
                      : e.colors.gray[4]
                  }`,
                  position: "relative",
                  appearance: "none",
                  width: e.fn.size({ sizes: I, size: t }),
                  height: e.fn.size({ sizes: I, size: t }),
                  borderRadius: e.fn.size({ sizes: I, size: t }),
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transitionProperty: "background-color, border-color",
                  transitionTimingFunction: e.transitionTimingFunction,
                  transitionDuration: `${r}ms`,
                  cursor: e.cursorType,
                  "&:checked": {
                    background: l.background,
                    borderColor: l.background,
                    [`& + .${a("icon")}`]: {
                      opacity: 1,
                      transform: "scale(1)",
                    },
                  },
                  "&:disabled": {
                    borderColor:
                      "dark" === e.colorScheme
                        ? e.colors.dark[5]
                        : e.colors.gray[4],
                    backgroundColor:
                      "dark" === e.colorScheme
                        ? e.colors.dark[5]
                        : e.colors.gray[1],
                    [`& + .${a("icon")}`]: {
                      color:
                        "dark" === e.colorScheme
                          ? e.colors.dark[6]
                          : e.colors.gray[4],
                    },
                  },
                })
              ),
            };
          }
        ),
        L = n(79326),
        M = Object.defineProperty,
        F = Object.defineProperties,
        _ = Object.getOwnPropertyDescriptors,
        B = Object.getOwnPropertySymbols,
        H = Object.prototype.hasOwnProperty,
        U = Object.prototype.propertyIsEnumerable,
        $ = (e, t, n) =>
          t in e
            ? M(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let W = { xs: 16, sm: 20, md: 24, lg: 30, xl: 36 };
      var V = (0, S.r)((e, { labelPosition: t, size: n }) => ({
          root: {},
          body: { display: "flex" },
          labelWrapper: F(
            ((e, t) => {
              for (var n in t || (t = {})) H.call(t, n) && $(e, n, t[n]);
              if (B) for (var n of B(t)) U.call(t, n) && $(e, n, t[n]);
              return e;
            })({}, e.fn.fontStyles()),
            _({
              display: "inline-flex",
              flexDirection: "column",
              WebkitTapHighlightColor: "transparent",
              fontSize: e.fn.size({ size: n, sizes: e.fontSizes }),
              lineHeight: `${e.fn.size({ size: n, sizes: W })}px`,
              color: "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
              cursor: e.cursorType,
              order: "left" === t ? 1 : 2,
            })
          ),
          description: {
            marginTop: `calc(${e.spacing.xs}px / 2)`,
            ["left" === t ? "paddingRight" : "paddingLeft"]: e.spacing.sm,
          },
          error: {
            marginTop: `calc(${e.spacing.xs}px / 2)`,
            ["left" === t ? "paddingRight" : "paddingLeft"]: e.spacing.sm,
          },
          label: {
            cursor: e.cursorType,
            ["left" === t ? "paddingRight" : "paddingLeft"]: e.spacing.sm,
            "&[data-disabled]": {
              color:
                "dark" === e.colorScheme ? e.colors.dark[3] : e.colors.gray[5],
            },
          },
        })),
        q = n(50433),
        Y = Object.defineProperty,
        K = Object.getOwnPropertySymbols,
        G = Object.prototype.hasOwnProperty,
        X = Object.prototype.propertyIsEnumerable,
        Z = (e, t, n) =>
          t in e
            ? Y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      function Q(e) {
        var {
            __staticSelector: t,
            className: n,
            classNames: i,
            styles: o,
            unstyled: a,
            children: l,
            label: s,
            description: c,
            id: u,
            disabled: f,
            error: p,
            size: d,
            labelPosition: m,
          } = e,
          h = ((e, t) => {
            var n = {};
            for (var r in e) G.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && K)
              for (var r of K(e))
                0 > t.indexOf(r) && X.call(e, r) && (n[r] = e[r]);
            return n;
          })(e, [
            "__staticSelector",
            "className",
            "classNames",
            "styles",
            "unstyled",
            "children",
            "label",
            "description",
            "id",
            "disabled",
            "error",
            "size",
            "labelPosition",
          ]);
        let { classes: y, cx: v } = V(
          { size: d, labelPosition: m },
          { name: t, styles: o, classNames: i, unstyled: a }
        );
        return r.createElement(
          q.a,
          ((e, t) => {
            for (var n in t || (t = {})) G.call(t, n) && Z(e, n, t[n]);
            if (K) for (var n of K(t)) X.call(t, n) && Z(e, n, t[n]);
            return e;
          })({ className: v(y.root, n) }, h),
          r.createElement(
            "div",
            { className: v(y.body) },
            l,
            r.createElement(
              "div",
              { className: y.labelWrapper },
              s &&
                r.createElement(
                  "label",
                  {
                    className: y.label,
                    "data-disabled": f || void 0,
                    htmlFor: u,
                  },
                  s
                ),
              c &&
                r.createElement(
                  g.p.Description,
                  { className: y.description },
                  c
                ),
              p &&
                "boolean" !== p &&
                r.createElement(g.p.Error, { className: y.error }, p)
            )
          )
        );
      }
      Q.displayName = "@mantine/core/InlineInput";
      var J = Object.defineProperty,
        ee = Object.getOwnPropertySymbols,
        et = Object.prototype.hasOwnProperty,
        en = Object.prototype.propertyIsEnumerable,
        er = (e, t, n) =>
          t in e
            ? J(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        ei = (e, t) => {
          for (var n in t || (t = {})) et.call(t, n) && er(e, n, t[n]);
          if (ee) for (var n of ee(t)) en.call(t, n) && er(e, n, t[n]);
          return e;
        };
      let eo = {
          icon: function (e) {
            return r.createElement(
              "svg",
              ((e, t) => {
                for (var n in t || (t = {})) s.call(t, n) && u(e, n, t[n]);
                if (l) for (var n of l(t)) c.call(t, n) && u(e, n, t[n]);
                return e;
              })(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 5 5",
                },
                e
              ),
              r.createElement("path", {
                fill: "currentColor",
                d: "M0 2.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z",
              })
            );
          },
          transitionDuration: 100,
          size: "sm",
          labelPosition: "right",
        },
        ea = (0, r.forwardRef)((e, t) => {
          var n, a;
          let l = (0, o.a1)("Radio", eo, e),
            {
              className: s,
              style: c,
              id: u,
              label: p,
              size: d,
              title: m,
              disabled: h,
              color: g,
              classNames: y,
              styles: v,
              sx: b,
              icon: x,
              transitionDuration: w,
              wrapperProps: k,
              unstyled: O,
              labelPosition: E,
              description: S,
              error: C,
            } = l,
            P = ((e, t) => {
              var n = {};
              for (var r in e)
                et.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && ee)
                for (var r of ee(e))
                  0 > t.indexOf(r) && en.call(e, r) && (n[r] = e[r]);
              return n;
            })(l, [
              "className",
              "style",
              "id",
              "label",
              "size",
              "title",
              "disabled",
              "color",
              "classNames",
              "styles",
              "sx",
              "icon",
              "transitionDuration",
              "wrapperProps",
              "unstyled",
              "labelPosition",
              "description",
              "error",
            ]),
            A = (0, r.useContext)(f),
            j = null != (n = null == A ? void 0 : A.size) ? n : d,
            z = e.size ? d : j,
            { classes: R } = N(
              {
                color: g,
                size: z,
                transitionDuration: w,
                labelPosition: E,
                error: !!C,
              },
              { classNames: y, styles: v, unstyled: O, name: "Radio" }
            ),
            { systemStyles: T, rest: I } = (0, L.z)(P),
            D = (0, i.B)(u),
            M = A
              ? {
                  checked: A.value === I.value,
                  name: null != (a = I.name) ? a : A.name,
                  onChange: A.onChange,
                }
              : {};
          return r.createElement(
            Q,
            ei(
              ei(
                {
                  className: s,
                  sx: b,
                  style: c,
                  id: D,
                  size: z,
                  labelPosition: E,
                  label: p,
                  description: S,
                  error: C,
                  disabled: h,
                  __staticSelector: "Radio",
                  classNames: y,
                  styles: v,
                  unstyled: O,
                  "data-checked": M.checked || void 0,
                },
                T
              ),
              k
            ),
            r.createElement(
              "div",
              { className: R.inner },
              r.createElement(
                "input",
                ei(
                  ei(
                    {
                      ref: t,
                      className: R.radio,
                      type: "radio",
                      id: D,
                      disabled: h,
                    },
                    I
                  ),
                  M
                )
              ),
              r.createElement(x, { className: R.icon, "aria-hidden": !0 })
            )
          );
        });
      (ea.displayName = "@mantine/core/Radio"), (ea.Group = E);
    },
    13692: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => T });
      var r = n(55729),
        i = n(61946),
        o = n(23559),
        a = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        u = (e, t, n) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      function f(e) {
        return r.createElement(
          "svg",
          ((e, t) => {
            for (var n in t || (t = {})) s.call(t, n) && u(e, n, t[n]);
            if (l) for (var n of l(t)) c.call(t, n) && u(e, n, t[n]);
            return e;
          })(
            {
              width: "15",
              height: "15",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e
          ),
          r.createElement("path", {
            d: "M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          })
        );
      }
      var p = n(38169),
        d = Object.defineProperty,
        m = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        g = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        b = (e, t, n) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        x = (e, t) => {
          for (var n in t || (t = {})) y.call(t, n) && b(e, n, t[n]);
          if (g) for (var n of g(t)) v.call(t, n) && b(e, n, t[n]);
          return e;
        },
        w = (e, t) => m(e, h(t)),
        k = (0, p.r)((e, { radius: t }) => ({
          root: {},
          imageWrapper: { position: "relative" },
          figure: { margin: 0 },
          image: w(x({}, e.fn.fontStyles()), {
            display: "block",
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: e.fn.size({ size: t, sizes: e.radius }),
          }),
          caption: {
            color:
              "dark" === e.colorScheme ? e.colors.dark[2] : e.colors.gray[7],
            marginTop: e.spacing.xs,
          },
          placeholder: w(x({}, e.fn.cover()), {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color:
              "dark" === e.colorScheme ? e.colors.dark[2] : e.colors.gray[6],
            backgroundColor:
              "dark" === e.colorScheme ? e.colors.dark[8] : e.colors.gray[0],
            borderRadius: e.fn.size({ size: t, sizes: e.radius }),
          }),
        })),
        O = n(50433),
        E = n(37948),
        S = Object.defineProperty,
        C = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        j = (e, t, n) =>
          t in e
            ? S(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        z = (e, t) => {
          for (var n in t || (t = {})) P.call(t, n) && j(e, n, t[n]);
          if (C) for (var n of C(t)) A.call(t, n) && j(e, n, t[n]);
          return e;
        };
      let R = { fit: "cover", width: "100%", height: "auto", radius: 0 },
        T = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("Image", R, e),
            {
              className: a,
              alt: l,
              src: s,
              fit: c,
              width: u,
              height: p,
              radius: d,
              imageProps: m,
              withPlaceholder: h,
              placeholder: g,
              imageRef: y,
              classNames: v,
              styles: b,
              caption: x,
              unstyled: w,
              style: S,
            } = n,
            j = ((e, t) => {
              var n = {};
              for (var r in e)
                P.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && C)
                for (var r of C(e))
                  0 > t.indexOf(r) && A.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "alt",
              "src",
              "fit",
              "width",
              "height",
              "radius",
              "imageProps",
              "withPlaceholder",
              "placeholder",
              "imageRef",
              "classNames",
              "styles",
              "caption",
              "unstyled",
              "style",
            ]),
            { classes: T, cx: I } = k(
              { radius: d },
              { classNames: v, styles: b, unstyled: w, name: "Image" }
            ),
            [D, N] = (0, r.useState)(!s);
          return (
            (0, o.C)(() => {
              N(!s);
            }, [s]),
            r.createElement(
              O.a,
              z(
                { className: I(T.root, a), ref: t, style: z({ width: u }, S) },
                j
              ),
              r.createElement(
                "figure",
                { className: T.figure },
                r.createElement(
                  "div",
                  { className: T.imageWrapper },
                  r.createElement(
                    "img",
                    z(
                      {
                        className: T.image,
                        src: s,
                        alt: l,
                        style: { objectFit: c, width: u, height: p },
                        ref: y,
                        onError: (e) => {
                          N(!0),
                            "function" ==
                              typeof (null == m ? void 0 : m.onError) &&
                              m.onError(e);
                        },
                      },
                      m
                    )
                  ),
                  h &&
                    D &&
                    r.createElement(
                      "div",
                      { className: T.placeholder, title: l },
                      g ||
                        r.createElement(
                          "div",
                          null,
                          r.createElement(f, {
                            style: { width: 40, height: 40 },
                          })
                        )
                    )
                ),
                !!x &&
                  r.createElement(
                    E.E,
                    {
                      component: "figcaption",
                      size: "sm",
                      align: "center",
                      className: T.caption,
                    },
                    x
                  )
              )
            )
          );
        });
      T.displayName = "@mantine/core/Image";
    },
    14106: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return S;
          },
        });
      let r = n(14761),
        i = n(13514),
        o = n(6029),
        a = i._(n(55729)),
        l = i._(n(56760)),
        s = r._(n(44807)),
        c = n(89227),
        u = n(52056),
        f = n(5533);
      n(89687);
      let p = n(85765);
      function d(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
      let m = "function" == typeof l.preload,
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
        g = new Set(),
        y =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        v = new Map([
          [
            "default",
            function (e) {
              var t;
              let { config: n, src: r, width: i, quality: o } = e,
                a =
                  o ||
                  (null == (t = n.qualities)
                    ? void 0
                    : t.reduce((e, t) =>
                        Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                      )) ||
                  75;
              return !n.dangerouslyAllowSVG &&
                r.split("?", 1)[0].endsWith(".svg")
                ? r
                : (0, p.normalizePathTrailingSlash)(n.path) +
                    "?url=" +
                    encodeURIComponent(r) +
                    "&w=" +
                    i +
                    "&q=" +
                    a;
            },
          ],
          [
            "imgix",
            function (e) {
              let { config: t, src: n, width: r, quality: i } = e,
                o = new URL("" + t.path + d(n)),
                a = o.searchParams;
              return (
                a.set("auto", a.getAll("auto").join(",") || "format"),
                a.set("fit", a.get("fit") || "max"),
                a.set("w", a.get("w") || r.toString()),
                i && a.set("q", i.toString()),
                o.href
              );
            },
          ],
          [
            "cloudinary",
            function (e) {
              let { config: t, src: n, width: r, quality: i } = e,
                o =
                  ["f_auto", "c_limit", "w_" + r, "q_" + (i || "auto")].join(
                    ","
                  ) + "/";
              return "" + t.path + o + d(n);
            },
          ],
          [
            "akamai",
            function (e) {
              let { config: t, src: n, width: r } = e;
              return "" + t.path + d(n) + "?imwidth=" + r;
            },
          ],
          [
            "custom",
            function (e) {
              let { src: t } = e;
              throw Object.defineProperty(
                Error(
                  'Image with src "' +
                    t +
                    '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
                ),
                "__NEXT_ERROR_CODE",
                { value: "E252", enumerable: !1, configurable: !0 }
              );
            },
          ],
        ]);
      function b(e) {
        return void 0 !== e.default;
      }
      function x(e) {
        let {
          config: t,
          src: n,
          unoptimized: r,
          layout: i,
          width: o,
          quality: a,
          sizes: l,
          loader: s,
        } = e;
        if (r) return { src: n, srcSet: void 0, sizes: void 0 };
        let { widths: c, kind: u } = (function (e, t, n, r) {
            let { deviceSizes: i, allSizes: o } = e;
            if (r && ("fill" === n || "responsive" === n)) {
              let e = /(^|\s)(1?\d?\d)vw/g,
                t = [];
              for (let n; (n = e.exec(r)); ) t.push(parseInt(n[2]));
              if (t.length) {
                let e = 0.01 * Math.min(...t);
                return { widths: o.filter((t) => t >= i[0] * e), kind: "w" };
              }
              return { widths: o, kind: "w" };
            }
            return "number" != typeof t || "fill" === n || "responsive" === n
              ? { widths: i, kind: "w" }
              : {
                  widths: [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => o.find((t) => t >= e) || o[o.length - 1]
                      )
                    ),
                  ],
                  kind: "x",
                };
          })(t, o, i, l),
          f = c.length - 1;
        return {
          sizes: l || "w" !== u ? l : "100vw",
          srcSet: c
            .map(
              (e, r) =>
                s({ config: t, src: n, quality: a, width: e }) +
                " " +
                ("w" === u ? e : r + 1) +
                u
            )
            .join(", "),
          src: s({ config: t, src: n, quality: a, width: c[f] }),
        };
      }
      function w(e) {
        return "number" == typeof e
          ? e
          : "string" == typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function k(e) {
        var t;
        let n = (null == (t = e.config) ? void 0 : t.loader) || "default",
          r = v.get(n);
        if (r) return r(e);
        throw Object.defineProperty(
          Error(
            'Unknown "loader" found in "next.config.js". Expected: ' +
              c.VALID_LOADERS.join(", ") +
              ". Received: " +
              n
          ),
          "__NEXT_ERROR_CODE",
          { value: "E338", enumerable: !1, configurable: !0 }
        );
      }
      function O(e, t, n, r, i, o) {
        e &&
          e.src !== y &&
          e["data-loaded-src"] !== t &&
          ((e["data-loaded-src"] = t),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (
                e.parentNode &&
                (g.add(t),
                "blur" === r && o(!0),
                null == i ? void 0 : i.current)
              ) {
                let { naturalWidth: t, naturalHeight: n } = e;
                i.current({ naturalWidth: t, naturalHeight: n });
              }
            }));
      }
      let E = (e) => {
        let {
          imgAttributes: t,
          heightInt: n,
          widthInt: r,
          qualityInt: i,
          layout: l,
          className: s,
          imgStyle: c,
          blurStyle: u,
          isLazy: f,
          placeholder: p,
          loading: d,
          srcString: m,
          config: h,
          unoptimized: g,
          loader: y,
          onLoadingCompleteRef: v,
          setBlurComplete: b,
          setIntersection: w,
          onLoad: k,
          onError: E,
          isVisible: S,
          noscriptSizes: C,
          ...P
        } = e;
        return (
          (d = f ? "lazy" : d),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("img", {
                ...P,
                ...t,
                decoding: "async",
                "data-nimg": l,
                className: s,
                style: { ...c, ...u },
                ref: (0, a.useCallback)(
                  (e) => {
                    w(e),
                      (null == e ? void 0 : e.complete) && O(e, m, l, p, v, b);
                  },
                  [w, m, l, p, v, b]
                ),
                onLoad: (e) => {
                  O(e.currentTarget, m, l, p, v, b), k && k(e);
                },
                onError: (e) => {
                  "blur" === p && b(!0), E && E(e);
                },
              }),
              (f || "blur" === p) &&
                (0, o.jsx)("noscript", {
                  children: (0, o.jsx)("img", {
                    ...P,
                    loading: d,
                    decoding: "async",
                    "data-nimg": l,
                    style: c,
                    className: s,
                    ...x({
                      config: h,
                      src: m,
                      unoptimized: g,
                      layout: l,
                      width: r,
                      quality: i,
                      sizes: C,
                      loader: y,
                    }),
                  }),
                }),
            ],
          })
        );
      };
      function S(e) {
        var t;
        let n,
          {
            src: r,
            sizes: i,
            unoptimized: l = !1,
            priority: p = !1,
            loading: d,
            lazyRoot: v = null,
            lazyBoundary: O,
            className: S,
            quality: C,
            width: P,
            height: A,
            style: j,
            objectFit: z,
            objectPosition: R,
            onLoadingComplete: T,
            placeholder: I = "empty",
            blurDataURL: D,
            ...N
          } = e,
          L = (0, a.useContext)(f.ImageConfigContext),
          M = (0, a.useMemo)(() => {
            var e;
            let t = h || L || c.imageConfigDefault,
              n = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              r = t.deviceSizes.sort((e, t) => e - t),
              i = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: n, deviceSizes: r, qualities: i };
          }, [L]),
          F = i ? "responsive" : "intrinsic";
        "layout" in N && (N.layout && (F = N.layout), delete N.layout);
        let _ = k;
        if ("loader" in N) {
          if (N.loader) {
            let e = N.loader;
            _ = (t) => {
              let { config: n, ...r } = t;
              return e(r);
            };
          }
          delete N.loader;
        }
        let B = "";
        if ("object" == typeof (t = r) && (b(t) || void 0 !== t.src)) {
          let e = b(r) ? r.default : r;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (
            ((D = D || e.blurDataURL),
            (B = e.src),
            (!F || "fill" !== F) &&
              ((A = A || e.height), (P = P || e.width), !e.height || !e.width))
          )
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
        }
        let H = !p && ("lazy" === d || void 0 === d);
        ((r = "string" == typeof r ? r : B).startsWith("data:") ||
          r.startsWith("blob:")) &&
          ((l = !0), (H = !1)),
          g.has(r) && (H = !1),
          M.unoptimized && (l = !0);
        let [U, $] = (0, a.useState)(!1),
          [W, V, q] = (0, u.useIntersection)({
            rootRef: v,
            rootMargin: O || "200px",
            disabled: !H,
          }),
          Y = !H || V,
          K = {
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          G = {
            boxSizing: "border-box",
            display: "block",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          X = !1,
          Z = w(P),
          Q = w(A),
          J = w(C),
          ee = Object.assign({}, j, {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: z,
            objectPosition: R,
          }),
          et =
            "blur" !== I || U
              ? {}
              : {
                  backgroundSize: z || "cover",
                  backgroundPosition: R || "0% 0%",
                  filter: "blur(20px)",
                  backgroundImage: 'url("' + D + '")',
                };
        if ("fill" === F)
          (K.display = "block"),
            (K.position = "absolute"),
            (K.top = 0),
            (K.left = 0),
            (K.bottom = 0),
            (K.right = 0);
        else if (void 0 !== Z && void 0 !== Q) {
          let e = Q / Z,
            t = isNaN(e) ? "100%" : "" + 100 * e + "%";
          "responsive" === F
            ? ((K.display = "block"),
              (K.position = "relative"),
              (X = !0),
              (G.paddingTop = t))
            : "intrinsic" === F
            ? ((K.display = "inline-block"),
              (K.position = "relative"),
              (K.maxWidth = "100%"),
              (X = !0),
              (G.maxWidth = "100%"),
              (n =
                "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27" +
                Z +
                "%27%20height=%27" +
                Q +
                "%27/%3e"))
            : "fixed" === F &&
              ((K.display = "inline-block"),
              (K.position = "relative"),
              (K.width = Z),
              (K.height = Q));
        }
        let en = { src: y, srcSet: void 0, sizes: void 0 };
        Y &&
          (en = x({
            config: M,
            src: r,
            unoptimized: l,
            layout: F,
            width: Z,
            quality: J,
            sizes: i,
            loader: _,
          }));
        let er = r,
          ei = m
            ? void 0
            : {
                imageSrcSet: en.srcSet,
                imageSizes: en.sizes,
                crossOrigin: N.crossOrigin,
                referrerPolicy: N.referrerPolicy,
              },
          eo = a.default.useLayoutEffect,
          ea = (0, a.useRef)(T),
          el = (0, a.useRef)(r);
        (0, a.useEffect)(() => {
          ea.current = T;
        }, [T]),
          eo(() => {
            el.current !== r && (q(), (el.current = r));
          }, [q, r]);
        let es = {
          isLazy: H,
          imgAttributes: en,
          heightInt: Q,
          widthInt: Z,
          qualityInt: J,
          layout: F,
          className: S,
          imgStyle: ee,
          blurStyle: et,
          loading: d,
          config: M,
          unoptimized: l,
          placeholder: I,
          loader: _,
          srcString: er,
          onLoadingCompleteRef: ea,
          setBlurComplete: $,
          setIntersection: W,
          isVisible: Y,
          noscriptSizes: i,
          ...N,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("span", {
              style: K,
              children: [
                X
                  ? (0, o.jsx)("span", {
                      style: G,
                      children: n
                        ? (0, o.jsx)("img", {
                            style: {
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            },
                            alt: "",
                            "aria-hidden": !0,
                            src: n,
                          })
                        : null,
                    })
                  : null,
                (0, o.jsx)(E, { ...es }),
              ],
            }),
            !m && p
              ? (0, o.jsx)(s.default, {
                  children: (0, o.jsx)(
                    "link",
                    {
                      rel: "preload",
                      as: "image",
                      href: en.srcSet ? void 0 : en.src,
                      ...ei,
                    },
                    "__nimg-" + en.src + en.srcSet + en.sizes
                  ),
                })
              : null,
          ],
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    15719: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var r = n(55729),
        i = n(68357),
        o = n(23559),
        a = n(61946);
      function l({
        duration: e,
        exitDuration: t,
        timingFunction: n,
        mounted: l,
        onEnter: s,
        onExit: c,
        onEntered: u,
        onExited: f,
      }) {
        let p = (0, a.xd)(),
          d = (0, i.I)(),
          m = !!p.respectReducedMotion && d,
          [h, g] = (0, r.useState)(l ? "entered" : "exited"),
          y = m ? 0 : e,
          v = (0, r.useRef)(-1);
        return (
          (0, o.C)(() => {
            let n = l ? s : c,
              r = l ? u : f;
            if (
              (g(l ? "pre-entering" : "pre-exiting"),
              window.clearTimeout(v.current),
              0 === (y = m ? 0 : l ? e : t))
            )
              "function" == typeof n && n(),
                "function" == typeof r && r(),
                g(l ? "entered" : "exited");
            else {
              let e = window.setTimeout(() => {
                "function" == typeof n && n(), g(l ? "entering" : "exiting");
              }, 10);
              v.current = window.setTimeout(() => {
                window.clearTimeout(e),
                  "function" == typeof r && r(),
                  g(l ? "entered" : "exited");
              }, y);
            }
          }, [l]),
          (0, r.useEffect)(() => () => window.clearTimeout(v.current), []),
          {
            transitionDuration: y,
            transitionStatus: h,
            transitionTimingFunction: n || p.transitionTimingFunction,
          }
        );
      }
    },
    16141: (e, t, n) => {
      e.exports = function (e) {
        function t(e) {
          let n,
            i,
            o,
            a = null;
          function l(...e) {
            if (!l.enabled) return;
            let r = Number(new Date());
            (l.diff = r - (n || r)),
              (l.prev = n),
              (l.curr = r),
              (n = r),
              (e[0] = t.coerce(e[0])),
              "string" != typeof e[0] && e.unshift("%O");
            let i = 0;
            (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r) => {
              if ("%%" === n) return "%";
              i++;
              let o = t.formatters[r];
              if ("function" == typeof o) {
                let t = e[i];
                (n = o.call(l, t)), e.splice(i, 1), i--;
              }
              return n;
            })),
              t.formatArgs.call(l, e),
              (l.log || t.log).apply(l, e);
          }
          return (
            (l.namespace = e),
            (l.useColors = t.useColors()),
            (l.color = t.selectColor(e)),
            (l.extend = r),
            (l.destroy = t.destroy),
            Object.defineProperty(l, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== a
                  ? a
                  : (i !== t.namespaces &&
                      ((i = t.namespaces), (o = t.enabled(e))),
                    o),
              set: (e) => {
                a = e;
              },
            }),
            "function" == typeof t.init && t.init(l),
            l
          );
        }
        function r(e, n) {
          let r = t(this.namespace + (void 0 === n ? ":" : n) + e);
          return (r.log = this.log), r;
        }
        function i(e, t) {
          let n = 0,
            r = 0,
            i = -1,
            o = 0;
          for (; n < e.length; )
            if (r < t.length && (t[r] === e[n] || "*" === t[r]))
              "*" === t[r] ? ((i = r), (o = n)) : n++, r++;
            else {
              if (-1 === i) return !1;
              (r = i + 1), (n = ++o);
            }
          for (; r < t.length && "*" === t[r]; ) r++;
          return r === t.length;
        }
        return (
          (t.debug = t),
          (t.default = t),
          (t.coerce = function (e) {
            return e instanceof Error ? e.stack || e.message : e;
          }),
          (t.disable = function () {
            let e = [...t.names, ...t.skips.map((e) => "-" + e)].join(",");
            return t.enable(""), e;
          }),
          (t.enable = function (e) {
            for (let n of (t.save(e),
            (t.namespaces = e),
            (t.names = []),
            (t.skips = []),
            ("string" == typeof e ? e : "")
              .trim()
              .replace(/\s+/g, ",")
              .split(",")
              .filter(Boolean)))
              "-" === n[0] ? t.skips.push(n.slice(1)) : t.names.push(n);
          }),
          (t.enabled = function (e) {
            for (let n of t.skips) if (i(e, n)) return !1;
            for (let n of t.names) if (i(e, n)) return !0;
            return !1;
          }),
          (t.humanize = n(67264)),
          (t.destroy = function () {
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
            );
          }),
          Object.keys(e).forEach((n) => {
            t[n] = e[n];
          }),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {}),
          (t.selectColor = function (e) {
            let n = 0;
            for (let t = 0; t < e.length; t++)
              n = ((n << 5) - n + e.charCodeAt(t)) | 0;
            return t.colors[Math.abs(n) % t.colors.length];
          }),
          t.enable(t.load()),
          t
        );
      };
    },
    16947: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => h });
      var r = n(55729),
        i = n(61946),
        o = n(38169);
      let a = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
        apart: "space-between",
      };
      var l = (0, o.r)(
          (
            e,
            { spacing: t, position: n, noWrap: r, grow: i, align: o, count: l }
          ) => ({
            root: {
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: o || "center",
              flexWrap: r ? "nowrap" : "wrap",
              justifyContent: a[n],
              gap: e.fn.size({ size: t, sizes: e.spacing }),
              "& > *": {
                boxSizing: "border-box",
                maxWidth: i
                  ? `calc(${100 / l}% - ${
                      e.fn.size({ size: t, sizes: e.spacing }) -
                      e.fn.size({ size: t, sizes: e.spacing }) / l
                    }px)`
                  : void 0,
                flexGrow: +!!i,
              },
            },
          })
        ),
        s = n(50433),
        c = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        d = (e, t, n) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let m = { position: "left", spacing: "md" },
        h = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("Group", m, e),
            {
              className: o,
              position: a,
              align: c,
              children: h,
              noWrap: g,
              grow: y,
              spacing: v,
              unstyled: b,
            } = n,
            x = ((e, t) => {
              var n = {};
              for (var r in e)
                f.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && u)
                for (var r of u(e))
                  0 > t.indexOf(r) && p.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "position",
              "align",
              "children",
              "noWrap",
              "grow",
              "spacing",
              "unstyled",
            ]),
            w = r.Children.toArray(h).filter(Boolean),
            { classes: k, cx: O } = l(
              {
                align: c,
                grow: y,
                noWrap: g,
                spacing: v,
                position: a,
                count: w.length,
              },
              { unstyled: b, name: "Group" }
            );
          return r.createElement(
            s.a,
            ((e, t) => {
              for (var n in t || (t = {})) f.call(t, n) && d(e, n, t[n]);
              if (u) for (var n of u(t)) p.call(t, n) && d(e, n, t[n]);
              return e;
            })({ className: O(k.root, o), ref: t }, x),
            w
          );
        });
      h.displayName = "@mantine/core/Group";
    },
    18255: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => R });
      var r = n(55729),
        i = n(61946);
      let [o, a] = (0, n(85803).F)("List component was not found in tree");
      var l = n(38169),
        s = (0, l.r)((e, { spacing: t, center: n }, r) => ({
          itemWrapper: {
            ref: r("itemWrapper"),
            display: "inline-flex",
            flexDirection: "column",
            whiteSpace: "normal",
          },
          item: {
            whiteSpace: "nowrap",
            lineHeight: n ? 1 : e.lineHeight,
            "&:not(:first-of-type)": {
              marginTop: e.fn.size({ size: t, sizes: e.spacing }),
            },
          },
          withIcon: {
            listStyle: "none",
            [`& .${r("itemWrapper")}`]: {
              display: "inline-flex",
              alignItems: n ? "center" : "flex-start",
              flexDirection: "row",
            },
          },
          itemIcon: {
            display: "inline-block",
            verticalAlign: "middle",
            marginRight: e.spacing.sm,
          },
        })),
        c = n(50433),
        u = Object.defineProperty,
        f = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        m = (e, t, n) =>
          t in e
            ? u(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let h = {},
        g = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("ListItem", h, e),
            { className: o, children: l, icon: u } = n,
            g = ((e, t) => {
              var n = {};
              for (var r in e)
                p.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && f)
                for (var r of f(e))
                  0 > t.indexOf(r) && d.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, ["className", "children", "icon"]),
            {
              icon: y,
              spacing: v,
              center: b,
              listStyleType: x,
              size: w,
              withPadding: k,
              classNames: O,
              styles: E,
              unstyled: S,
            } = a(),
            C = u || y,
            { classes: P, cx: A } = s(
              {
                withPadding: k,
                size: w,
                listStyleType: x,
                center: b,
                spacing: v,
              },
              { classNames: O, styles: E, unstyled: S, name: "List" }
            );
          return r.createElement(
            c.a,
            ((e, t) => {
              for (var n in t || (t = {})) p.call(t, n) && m(e, n, t[n]);
              if (f) for (var n of f(t)) d.call(t, n) && m(e, n, t[n]);
              return e;
            })(
              {
                component: "li",
                className: A(P.item, { [P.withIcon]: C }, o),
                ref: t,
              },
              g
            ),
            r.createElement(
              "div",
              { className: P.itemWrapper },
              C && r.createElement("span", { className: P.itemIcon }, C),
              r.createElement("span", null, l)
            )
          );
        });
      g.displayName = "@mantine/core/ListItem";
      var y = Object.defineProperty,
        v = Object.defineProperties,
        b = Object.getOwnPropertyDescriptors,
        x = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        O = (e, t, n) =>
          t in e
            ? y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        E = (0, l.r)((e, { withPadding: t, size: n, listStyleType: r }) => ({
          root: v(
            ((e, t) => {
              for (var n in t || (t = {})) w.call(t, n) && O(e, n, t[n]);
              if (x) for (var n of x(t)) k.call(t, n) && O(e, n, t[n]);
              return e;
            })({}, e.fn.fontStyles()),
            b({
              listStyleType: r,
              color: "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
              fontSize: e.fn.size({ size: n, sizes: e.fontSizes }),
              lineHeight: e.lineHeight,
              margin: 0,
              paddingLeft: t ? e.spacing.xl : 0,
              listStylePosition: "inside",
            })
          ),
        })),
        S = Object.defineProperty,
        C = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        j = (e, t, n) =>
          t in e
            ? S(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let z = { type: "unordered", size: "md", spacing: 0 },
        R = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("List", z, e),
            {
              children: a,
              type: l,
              size: s,
              listStyleType: u,
              withPadding: f,
              center: p,
              spacing: d,
              icon: m,
              className: h,
              styles: g,
              classNames: y,
              unstyled: v,
            } = n,
            b = ((e, t) => {
              var n = {};
              for (var r in e)
                P.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && C)
                for (var r of C(e))
                  0 > t.indexOf(r) && A.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "children",
              "type",
              "size",
              "listStyleType",
              "withPadding",
              "center",
              "spacing",
              "icon",
              "className",
              "styles",
              "classNames",
              "unstyled",
            ]),
            { classes: x, cx: w } = E(
              {
                withPadding: f,
                size: s,
                listStyleType: u,
                center: p,
                spacing: d,
              },
              { classNames: y, styles: g, name: "List", unstyled: v }
            );
          return r.createElement(
            o,
            {
              value: {
                spacing: d,
                center: p,
                icon: m,
                listStyleType: u,
                size: s,
                withPadding: f,
                classNames: y,
                styles: g,
                unstyled: v,
              },
            },
            r.createElement(
              c.a,
              ((e, t) => {
                for (var n in t || (t = {})) P.call(t, n) && j(e, n, t[n]);
                if (C) for (var n of C(t)) A.call(t, n) && j(e, n, t[n]);
                return e;
              })(
                {
                  component: "unordered" === l ? "ul" : "ol",
                  className: w(x.root, h),
                  ref: t,
                },
                b
              ),
              a
            )
          );
        });
      (R.Item = g), (R.displayName = "@mantine/core/List");
    },
    20444: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = null;
          if (!e || "string" != typeof e) return n;
          var r = (0, i.default)(e),
            o = "function" == typeof t;
          return (
            r.forEach(function (e) {
              if ("declaration" === e.type) {
                var r = e.property,
                  i = e.value;
                o ? t(r, i, e) : i && ((n = n || {})[r] = i);
              }
            }),
            n
          );
        });
      var i = r(n(93409));
    },
    21666: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(55729),
        i = function (e, t) {
          return !Object.is(e, t);
        };
      let o = function (e, t) {
        void 0 === t && (t = i);
        var n = (0, r.useRef)(),
          o = (0, r.useRef)();
        return (
          t(o.current, e) && ((n.current = o.current), (o.current = e)),
          n.current
        );
      };
    },
    21681: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i });
      var r = n(55729);
      let i = function () {
        var e = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !1),
              function () {
                e.current = !0;
              }
            );
          }, []),
          e
        );
      };
    },
    23169: (e, t, n) => {
      var r = n(45516);
      e.exports = function () {
        return r.Date.now();
      };
    },
    24170: (e, t, n) => {
      e.exports = n(14106);
    },
    24890: (e, t, n) => {
      var r = n(57857),
        i = n(38316),
        o = n(53922),
        a = n(62030),
        l = n(2872),
        s = n(32372),
        c = n(28904);
      (c.alea = r),
        (c.xor128 = i),
        (c.xorwow = o),
        (c.xorshift7 = a),
        (c.xor4096 = l),
        (c.tychei = s),
        (e.exports = c);
    },
    26993: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => a });
      var r = n(55729),
        i = n(5158),
        o = n(15719);
      function a({
        transition: e,
        duration: t = 250,
        exitDuration: n = t,
        mounted: a,
        children: l,
        timingFunction: s,
        onExit: c,
        onEntered: u,
        onEnter: f,
        onExited: p,
      }) {
        let {
          transitionDuration: d,
          transitionStatus: m,
          transitionTimingFunction: h,
        } = (0, o.p)({
          mounted: a,
          exitDuration: n,
          duration: t,
          timingFunction: s,
          onExit: c,
          onEntered: u,
          onEnter: f,
          onExited: p,
        });
        return 0 === d
          ? a
            ? r.createElement(r.Fragment, null, l({}))
            : null
          : "exited" === m
          ? null
          : r.createElement(
              r.Fragment,
              null,
              l(
                (0, i.y)({
                  transition: e,
                  duration: d,
                  state: m,
                  timingFunction: h,
                })
              )
            );
      }
      a.displayName = "@mantine/core/Transition";
    },
    27189: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => w });
      var r = n(99410),
        i = n(1983),
        o = n(49737);
      function a(e, t) {
        return e
          .replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var l = n(55729),
        s = n(56760);
      let c = { disabled: !1 },
        u = l.createContext(null);
      var f = function (e) {
          return e.scrollTop;
        },
        p = "unmounted",
        d = "exited",
        m = "entering",
        h = "entered",
        g = "exiting",
        y = (function (e) {
          function t(t, n) {
            var r,
              i = e.call(this, t, n) || this,
              o = n && !n.isMounting ? t.enter : t.appear;
            return (
              (i.appearStatus = null),
              t.in
                ? o
                  ? ((r = d), (i.appearStatus = m))
                  : (r = h)
                : (r = t.unmountOnExit || t.mountOnEnter ? p : d),
              (i.state = { status: r }),
              (i.nextCallback = null),
              i
            );
          }
          (0, o.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === p ? { status: d } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== m && n !== h && (t = m)
                  : (n === m || n === h) && (t = g);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === m)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : s.findDOMNode(this);
                    n && f(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === d &&
                  this.setState({ status: p });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                i = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
                o = i[0],
                a = i[1],
                l = this.getTimeouts(),
                u = r ? l.appear : l.enter;
              if ((!e && !n) || c.disabled)
                return void this.safeSetState({ status: h }, function () {
                  t.props.onEntered(o);
                });
              this.props.onEnter(o, a),
                this.safeSetState({ status: m }, function () {
                  t.props.onEntering(o, a),
                    t.onTransitionEnd(u, function () {
                      t.safeSetState({ status: h }, function () {
                        t.props.onEntered(o, a);
                      });
                    });
                });
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
              if (!t || c.disabled)
                return void this.safeSetState({ status: d }, function () {
                  e.props.onExited(r);
                });
              this.props.onExit(r),
                this.safeSetState({ status: g }, function () {
                  e.props.onExiting(r),
                    e.onTransitionEnd(n.exit, function () {
                      e.safeSetState({ status: d }, function () {
                        e.props.onExited(r);
                      });
                    });
                });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : s.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (!n || r) return void setTimeout(this.nextCallback, 0);
              if (this.props.addEndListener) {
                var i = this.props.nodeRef
                    ? [this.nextCallback]
                    : [n, this.nextCallback],
                  o = i[0],
                  a = i[1];
                this.props.addEndListener(o, a);
              }
              null != e && setTimeout(this.nextCallback, e);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === p) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, i.A)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return l.createElement(
                u.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : l.cloneElement(l.Children.only(n), r)
              );
            }),
            t
          );
        })(l.Component);
      function v() {}
      (y.contextType = u),
        (y.propTypes = {}),
        (y.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: v,
          onEntering: v,
          onEntered: v,
          onExit: v,
          onExiting: v,
          onExited: v,
        }),
        (y.UNMOUNTED = p),
        (y.EXITED = d),
        (y.ENTERING = m),
        (y.ENTERED = h),
        (y.EXITING = g);
      var b = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              e.classList
                ? e.classList.remove(t)
                : "string" == typeof e.className
                ? (e.className = a(e.className, t))
                : e.setAttribute(
                    "class",
                    a((e.className && e.className.baseVal) || "", t)
                  );
            })
          );
        },
        x = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  o = r[1];
                t.removeClasses(i, "exit"),
                  t.addClass(i, o ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  o = r[1];
                t.addClass(i, o ? "appear" : "enter", "active"),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var r = t.resolveArguments(e, n),
                  i = r[0],
                  o = r[1] ? "appear" : "enter";
                t.removeClasses(i, o),
                  t.addClass(i, o, "done"),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"),
                  t.removeClasses(n, "enter"),
                  t.addClass(n, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"),
                  t.addClass(n, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = "string" == typeof n,
                  i = r && n ? n + "-" : "",
                  o = r ? "" + i + e : n[e],
                  a = r ? o + "-active" : n[e + "Active"],
                  l = r ? o + "-done" : n[e + "Done"];
                return {
                  baseClassName: o,
                  activeClassName: a,
                  doneClassName: l,
                };
              }),
              t
            );
          }
          (0, o.A)(t, e);
          var n = t.prototype;
          return (
            (n.addClass = function (e, t, n) {
              var r,
                i = this.getClassNames(t)[n + "ClassName"],
                o = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && o && (i += " " + o),
                "active" === n && e && f(e),
                i &&
                  ((this.appliedClasses[t][n] = i),
                  (r = i),
                  e &&
                    r &&
                    r.split(" ").forEach(function (t) {
                      e.classList
                        ? e.classList.add(t)
                        : (e.classList
                            ? t && e.classList.contains(t)
                            : -1 !==
                              (
                                " " +
                                (e.className.baseVal || e.className) +
                                " "
                              ).indexOf(" " + t + " ")) ||
                          ("string" == typeof e.className
                            ? (e.className = e.className + " " + t)
                            : e.setAttribute(
                                "class",
                                ((e.className && e.className.baseVal) || "") +
                                  " " +
                                  t
                              ));
                    }));
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                i = n.active,
                o = n.done;
              (this.appliedClasses[t] = {}),
                r && b(e, r),
                i && b(e, i),
                o && b(e, o);
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, (0, i.A)(e, ["classNames"]));
              return l.createElement(
                y,
                (0, r.A)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              );
            }),
            t
          );
        })(l.Component);
      (x.defaultProps = { classNames: "" }), (x.propTypes = {});
      let w = x;
    },
    27830: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i, k: () => r });
      let [r, i] = (0, n(85803).F)("Grid component was not found in tree");
    },
    28392: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        o = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === n.call(e);
        },
        a = function (e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r,
            i = t.call(e, "constructor"),
            o =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !o) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        l = function (e, t) {
          r && "__proto__" === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        s = function (e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            else if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          c,
          u,
          f = arguments[0],
          p = 1,
          d = arguments.length,
          m = !1;
        for (
          "boolean" == typeof f && ((m = f), (f = arguments[1] || {}), (p = 2)),
            (null == f || ("object" != typeof f && "function" != typeof f)) &&
              (f = {});
          p < d;
          ++p
        )
          if (((t = arguments[p]), null != t))
            for (n in t)
              (r = s(f, n)),
                f !== (i = s(t, n)) &&
                  (m && i && (a(i) || (c = o(i)))
                    ? (c
                        ? ((c = !1), (u = r && o(r) ? r : []))
                        : (u = r && a(r) ? r : {}),
                      l(f, { name: n, newValue: e(m, u, i) }))
                    : void 0 !== i && l(f, { name: n, newValue: i }));
        return f;
      };
    },
    28904: function (e, t, n) {
      var r;
      !(function (i, o, a) {
        var l,
          s = a.pow(256, 6),
          c = a.pow(2, 52),
          u = 2 * c;
        function f(e, t, n) {
          var r = [],
            f = m(
              (function e(t, n) {
                var r,
                  i = [],
                  o = typeof t;
                if (n && "object" == o)
                  for (r in t)
                    try {
                      i.push(e(t[r], n - 1));
                    } catch (e) {}
                return i.length ? i : "string" == o ? t : t + "\0";
              })(
                (t = !0 == t ? { entropy: !0 } : t || {}).entropy
                  ? [e, h(o)]
                  : null == e
                  ? (function () {
                      try {
                        var e;
                        return (
                          l && (e = l.randomBytes)
                            ? (e = e(256))
                            : ((e = new Uint8Array(256)),
                              (i.crypto || i.msCrypto).getRandomValues(e)),
                          h(e)
                        );
                      } catch (e) {
                        var t = i.navigator,
                          n = t && t.plugins;
                        return [+new Date(), i, n, i.screen, h(o)];
                      }
                    })()
                  : e,
                3
              ),
              r
            ),
            g = new p(r),
            y = function () {
              for (var e = g.g(6), t = s, n = 0; e < c; )
                (e = (e + n) * 256), (t *= 256), (n = g.g(1));
              for (; e >= u; ) (e /= 2), (t /= 2), (n >>>= 1);
              return (e + n) / t;
            };
          return (
            (y.int32 = function () {
              return 0 | g.g(4);
            }),
            (y.quick = function () {
              return g.g(4) / 0x100000000;
            }),
            (y.double = y),
            m(h(g.S), o),
            (
              t.pass ||
              n ||
              function (e, t, n, r) {
                return (r &&
                  (r.S && d(r, g),
                  (e.state = function () {
                    return d(g, {});
                  })),
                n)
                  ? ((a.random = e), t)
                  : e;
              }
            )(y, f, "global" in t ? t.global : this == a, t.state)
          );
        }
        function p(e) {
          var t,
            n = e.length,
            r = this,
            i = 0,
            o = (r.i = r.j = 0),
            a = (r.S = []);
          for (n || (e = [n++]); i < 256; ) a[i] = i++;
          for (i = 0; i < 256; i++)
            (a[i] = a[(o = 255 & (o + e[i % n] + (t = a[i])))]), (a[o] = t);
          (r.g = function (e) {
            for (var t, n = 0, i = r.i, o = r.j, a = r.S; e--; )
              (t = a[(i = 255 & (i + 1))]),
                (n =
                  256 * n +
                  a[255 & ((a[i] = a[(o = 255 & (o + t))]) + (a[o] = t))]);
            return (r.i = i), (r.j = o), n;
          })(256);
        }
        function d(e, t) {
          return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
        }
        function m(e, t) {
          for (var n, r = e + "", i = 0; i < r.length; )
            t[255 & i] = 255 & ((n ^= 19 * t[255 & i]) + r.charCodeAt(i++));
          return h(t);
        }
        function h(e) {
          return String.fromCharCode.apply(0, e);
        }
        if ((m(a.random(), o), e.exports)) {
          e.exports = f;
          try {
            l = n(27713);
          } catch (e) {}
        } else
          void 0 ===
            (r = function () {
              return f;
            }.call(t, n, t, e)) || (e.exports = r);
      })("undefined" != typeof self ? self : this, [], Math);
    },
    29584: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => x });
      var r = n(66177),
        i = n(13779),
        o = n(86653),
        a = n(42863),
        l = n(91645),
        s = n(59982);
      function c() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (c = function () {
          return !!e;
        })();
      }
      var u = n(18508);
      function f(e) {
        var t = c();
        return function () {
          var n,
            r = (0, s.A)(e);
          return (
            (n = t
              ? Reflect.construct(r, arguments, (0, s.A)(this).constructor)
              : r.apply(this, arguments)),
            (0, u.A)(this, n)
          );
        };
      }
      var p = n(55729),
        d = n(56760),
        m = n(32988),
        h = n.n(m),
        g = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function (e) {
            var t = e.keyCode;
            if (
              (e.altKey && !e.ctrlKey) ||
              e.metaKey ||
              (t >= g.F1 && t <= g.F12)
            )
              return !1;
            switch (t) {
              case g.ALT:
              case g.CAPS_LOCK:
              case g.CONTEXT_MENU:
              case g.CTRL:
              case g.DOWN:
              case g.END:
              case g.ESC:
              case g.HOME:
              case g.INSERT:
              case g.LEFT:
              case g.MAC_FF_META:
              case g.META:
              case g.NUMLOCK:
              case g.NUM_CENTER:
              case g.PAGE_DOWN:
              case g.PAGE_UP:
              case g.PAUSE:
              case g.PRINT_SCREEN:
              case g.RIGHT:
              case g.SHIFT:
              case g.UP:
              case g.WIN_KEY:
              case g.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function (e) {
            if (
              (e >= g.ZERO && e <= g.NINE) ||
              (e >= g.NUM_ZERO && e <= g.NUM_MULTIPLY) ||
              (e >= g.A && e <= g.Z) ||
              (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            )
              return !0;
            switch (e) {
              case g.SPACE:
              case g.QUESTION_MARK:
              case g.NUM_PLUS:
              case g.NUM_MINUS:
              case g.NUM_PERIOD:
              case g.NUM_DIVISION:
              case g.SEMICOLON:
              case g.DASH:
              case g.EQUALS:
              case g.COMMA:
              case g.PERIOD:
              case g.SLASH:
              case g.APOSTROPHE:
              case g.SINGLE_QUOTE:
              case g.OPEN_SQUARE_BRACKET:
              case g.BACKSLASH:
              case g.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        },
        y = (function (e) {
          (0, l.A)(n, e);
          var t = f(n);
          function n() {
            var e;
            (0, o.A)(this, n);
            for (var r = arguments.length, i = Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(i))).onHover = function (t) {
                var n = e.props;
                (0, n.onHover)(t, n.index);
              }),
              (e.onClick = function (t) {
                var n = e.props;
                (0, n.onClick)(t, n.index);
              }),
              (e.onKeyDown = function (t) {
                var n = e.props,
                  r = n.onClick,
                  i = n.index;
                13 === t.keyCode && r(t, i);
              }),
              e
            );
          }
          return (
            (0, a.A)(n, [
              {
                key: "getClassName",
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    n = e.index,
                    r = e.value,
                    i = e.allowHalf,
                    o = e.focused,
                    a = n + 1,
                    l = t;
                  return (
                    0 === r && 0 === n && o
                      ? (l += " ".concat(t, "-focused"))
                      : i && r + 0.5 >= a && r < a
                      ? ((l += " ".concat(t, "-half ").concat(t, "-active")),
                        o && (l += " ".concat(t, "-focused")))
                      : ((l +=
                          a <= r
                            ? " ".concat(t, "-full")
                            : " ".concat(t, "-zero")),
                        a === r && o && (l += " ".concat(t, "-focused"))),
                    l
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.onHover,
                    t = this.onClick,
                    n = this.onKeyDown,
                    r = this.props,
                    i = r.disabled,
                    o = r.prefixCls,
                    a = r.character,
                    l = r.characterRender,
                    s = r.index,
                    c = r.count,
                    u = r.value,
                    f = "function" == typeof a ? a(this.props) : a,
                    d = p.createElement(
                      "li",
                      { className: this.getClassName() },
                      p.createElement(
                        "div",
                        {
                          onClick: i ? null : t,
                          onKeyDown: i ? null : n,
                          onMouseMove: i ? null : e,
                          role: "radio",
                          "aria-checked": u > s ? "true" : "false",
                          "aria-posinset": s + 1,
                          "aria-setsize": c,
                          tabIndex: i ? -1 : 0,
                        },
                        p.createElement(
                          "div",
                          { className: "".concat(o, "-first") },
                          f
                        ),
                        p.createElement(
                          "div",
                          { className: "".concat(o, "-second") },
                          f
                        )
                      )
                    );
                  return l && (d = l(d, this.props)), d;
                },
              },
            ]),
            n
          );
        })(p.Component);
      function v() {}
      var b = (function (e) {
        (0, l.A)(n, e);
        var t = f(n);
        function n(e) {
          (0, o.A)(this, n),
            ((r = t.call(this, e)).stars = void 0),
            (r.rate = void 0),
            (r.onHover = function (e, t) {
              var n = r.props.onHoverChange,
                i = r.getStarValue(t, e.pageX);
              i !== r.state.cleanedValue &&
                r.setState({ hoverValue: i, cleanedValue: null }),
                n(i);
            }),
            (r.onMouseLeave = function () {
              var e = r.props.onHoverChange;
              r.setState({ hoverValue: void 0, cleanedValue: null }), e(void 0);
            }),
            (r.onClick = function (e, t) {
              var n = r.props.allowClear,
                i = r.state.value,
                o = r.getStarValue(t, e.pageX),
                a = !1;
              n && (a = o === i),
                r.onMouseLeave(),
                r.changeValue(a ? 0 : o),
                r.setState({ cleanedValue: a ? o : null });
            }),
            (r.onFocus = function () {
              var e = r.props.onFocus;
              r.setState({ focused: !0 }), e && e();
            }),
            (r.onBlur = function () {
              var e = r.props.onBlur;
              r.setState({ focused: !1 }), e && e();
            }),
            (r.onKeyDown = function (e) {
              var t = e.keyCode,
                n = r.props,
                i = n.count,
                o = n.allowHalf,
                a = n.onKeyDown,
                l = "rtl" === n.direction,
                s = r.state.value;
              t === g.RIGHT && s < i && !l
                ? (o ? (s += 0.5) : (s += 1),
                  r.changeValue(s),
                  e.preventDefault())
                : (t === g.LEFT && s > 0 && !l) || (t === g.RIGHT && s > 0 && l)
                ? (o ? (s -= 0.5) : (s -= 1),
                  r.changeValue(s),
                  e.preventDefault())
                : t === g.LEFT &&
                  s < i &&
                  l &&
                  (o ? (s += 0.5) : (s += 1),
                  r.changeValue(s),
                  e.preventDefault()),
                a && a(e);
            }),
            (r.saveRef = function (e) {
              return function (t) {
                r.stars[e] = t;
              };
            }),
            (r.saveRate = function (e) {
              r.rate = e;
            });
          var r,
            i = e.value;
          return (
            void 0 === i && (i = e.defaultValue),
            (r.stars = {}),
            (r.state = { value: i, focused: !1, cleanedValue: null }),
            r
          );
        }
        return (
          (0, a.A)(
            n,
            [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    n = e.disabled;
                  t && !n && this.focus();
                },
              },
              {
                key: "getStarDOM",
                value: function (e) {
                  var t, n;
                  return (n = t = this.stars[e]) instanceof HTMLElement ||
                    n instanceof SVGElement
                    ? t
                    : t instanceof p.Component
                    ? d.findDOMNode(t)
                    : null;
                },
              },
              {
                key: "getStarValue",
                value: function (e, t) {
                  var n = this.props,
                    r = n.allowHalf,
                    i = "rtl" === n.direction,
                    o = e + 1;
                  if (r) {
                    var a,
                      l,
                      s,
                      c,
                      u,
                      f,
                      p,
                      d,
                      m,
                      h = this.getStarDOM(e),
                      g =
                        ((c = (s = h.ownerDocument).body),
                        (u = s && s.documentElement),
                        (a = (f = h.getBoundingClientRect()).left),
                        (l = f.top),
                        (p = {
                          left: (a -= u.clientLeft || c.clientLeft || 0),
                          top: (l -= u.clientTop || c.clientTop || 0),
                        }),
                        (m =
                          (d = h.ownerDocument).defaultView || d.parentWindow),
                        (p.left += (function (e) {
                          var t = e.pageXOffset,
                            n = "scrollLeft";
                          if ("number" != typeof t) {
                            var r = e.document;
                            "number" != typeof (t = r.documentElement[n]) &&
                              (t = r.body[n]);
                          }
                          return t;
                        })(m)),
                        p.left),
                      y = h.clientWidth;
                    i && t - g > y / 2
                      ? (o -= 0.5)
                      : !i && t - g < y / 2 && (o -= 0.5);
                  }
                  return o;
                },
              },
              {
                key: "focus",
                value: function () {
                  this.props.disabled || this.rate.focus();
                },
              },
              {
                key: "blur",
                value: function () {
                  this.props.disabled || this.rate.blur();
                },
              },
              {
                key: "changeValue",
                value: function (e) {
                  var t = this.props.onChange;
                  "value" in this.props || this.setState({ value: e }), t(e);
                },
              },
              {
                key: "render",
                value: function () {
                  for (
                    var e = this.props,
                      t = e.count,
                      n = e.allowHalf,
                      r = e.style,
                      o = e.prefixCls,
                      a = e.disabled,
                      l = e.className,
                      s = e.character,
                      c = e.characterRender,
                      u = e.tabIndex,
                      f = e.direction,
                      d = this.state,
                      m = d.value,
                      g = d.hoverValue,
                      v = d.focused,
                      b = [],
                      x = a ? "".concat(o, "-disabled") : "",
                      w = 0;
                    w < t;
                    w += 1
                  )
                    b.push(
                      p.createElement(y, {
                        ref: this.saveRef(w),
                        index: w,
                        count: t,
                        disabled: a,
                        prefixCls: "".concat(o, "-star"),
                        allowHalf: n,
                        value: void 0 === g ? m : g,
                        onClick: this.onClick,
                        onHover: this.onHover,
                        key: w,
                        character: s,
                        characterRender: c,
                        focused: v,
                      })
                    );
                  var k = h()(
                    o,
                    x,
                    l,
                    (0, i.A)({}, "".concat(o, "-rtl"), "rtl" === f)
                  );
                  return p.createElement(
                    "ul",
                    {
                      className: k,
                      style: r,
                      onMouseLeave: a ? null : this.onMouseLeave,
                      tabIndex: a ? -1 : u,
                      onFocus: a ? null : this.onFocus,
                      onBlur: a ? null : this.onBlur,
                      onKeyDown: a ? null : this.onKeyDown,
                      ref: this.saveRate,
                      role: "radiogroup",
                    },
                    b
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  return "value" in e && void 0 !== e.value
                    ? (0, r.A)((0, r.A)({}, t), {}, { value: e.value })
                    : t;
                },
              },
            ]
          ),
          n
        );
      })(p.Component);
      b.defaultProps = {
        defaultValue: 0,
        count: 5,
        allowHalf: !1,
        allowClear: !0,
        style: {},
        prefixCls: "rc-rate",
        onChange: v,
        character: "★",
        onHoverChange: v,
        tabIndex: 0,
        direction: "ltr",
      };
      let x = b;
    },
    31008: (e, t, n) => {
      "use strict";
      n.d(t, { YV: () => R });
      var r = n(6029),
        i = n(55729),
        o = n(56760);
      let { min: a, max: l, abs: s, floor: c } = Math,
        u = (e, t, n) => a(n, l(t, e)),
        f = (e) => [...e].sort((e, t) => e - t),
        p =
          "function" == typeof queueMicrotask
            ? queueMicrotask
            : (e) => {
                Promise.resolve().then(e);
              },
        d = (e) => {
          let t, n;
          return () => (t || ((t = !0), (n = e())), n);
        },
        m = (e, t, n) => {
          let r = n ? "unshift" : "push";
          for (let n = 0; n < t; n++) e[r](-1);
          return e;
        },
        h = (e, t) => {
          let n = e.t[t];
          return -1 === n ? e.o : n;
        },
        g = (e, t, n) => {
          let r = -1 === e.t[t];
          return (e.t[t] = n), (e.i = a(t, e.i)), r;
        },
        y = (e, t) => {
          if (!e.l) return 0;
          if (e.i >= t) return e.u[t];
          e.i < 0 && ((e.u[0] = 0), (e.i = 0));
          let n = e.i,
            r = e.u[n];
          for (; n < t; ) (r += h(e, n)), (e.u[++n] = r);
          return (e.i = t), r;
        },
        v = (e, t, n = 0, r = e.l - 1) => {
          for (; n <= r; ) {
            let i = c((n + r) / 2),
              o = y(e, i);
            if (o <= t) {
              if (o + h(e, i) > t) return i;
              n = i + 1;
            } else r = i - 1;
          }
          return u(n, 0, e.l - 1);
        },
        b = (e, t, n) => {
          let r = t - e.l;
          return (
            (e.i = n ? -1 : a(t - 1, e.i)),
            (e.l = t),
            r > 0
              ? (m(e.u, r), m(e.t, r, n), e.o * r)
              : (e.u.splice(r),
                (n ? e.t.splice(0, -r) : e.t.splice(r)).reduce(
                  (t, n) => t - (-1 === n ? e.o : n),
                  0
                ))
          );
        },
        x = "undefined" != typeof window,
        w = d(
          () =>
            !!x &&
            "rtl" === getComputedStyle(document.documentElement).direction
        ),
        k = d(() => /iP(hone|od|ad)/.test(navigator.userAgent)),
        O = d(() => "scrollBehavior" in document.documentElement.style),
        E = setTimeout,
        S = (e, t) => (t && w() ? -e : e),
        C = x ? i.useLayoutEffect : i.useEffect,
        P = "current",
        A = (e, t) => {
          if (Array.isArray(e)) for (let n of e) A(n, t);
          else null == e || "boolean" == typeof e || t.push(e);
        },
        j = (e) => {
          let t = (0, i.useRef)(e);
          return (
            C(() => {
              t[P] = e;
            }, [e]),
            t
          );
        },
        z = (0, i.memo)(
          ({ N: e, Z: t, ee: n, te: o, ne: a, oe: l, re: s, ie: c }) => {
            let u = (0, i.useRef)(null);
            C(() => t(u[P], n), [n]);
            let f = (0, i.useMemo)(() => {
              let e = {
                position: a && c ? void 0 : "absolute",
                [s ? "height" : "width"]: "100%",
                [s ? "top" : "left"]: 0,
                [s ? (w() ? "right" : "left") : "top"]: o,
                visibility: !a || c ? "visible" : "hidden",
              };
              return s && (e.display = "flex"), e;
            }, [o, a, c, s]);
            return (0, r.jsx)(
              l,
              "string" == typeof l
                ? { ref: u, style: f, children: e }
                : { ref: u, style: f, index: n, children: e }
            );
          }
        ),
        R = (0, i.forwardRef)(
          (
            {
              children: e,
              count: t,
              overscan: n,
              itemSize: c,
              shift: d,
              horizontal: x,
              keepMounted: w,
              cache: R,
              startMargin: T = 0,
              ssrCount: I,
              as: D = "div",
              item: N = "div",
              scrollRef: L,
              onScroll: M,
              onScrollEnd: F,
            },
            _
          ) => {
            let [B, H] = ((e, t) =>
                (0, i.useMemo)(() => {
                  if ("function" == typeof e) return [e, t || 0];
                  let n = ((e) => {
                    let t = [];
                    return A(e, t), t;
                  })(e);
                  return [(e) => n[e], n.length];
                }, [e, t]))(e, t),
              U = (0, i.useRef)(null),
              $ = (0, i.useRef)(!!I),
              W = j(M),
              V = j(F),
              [q, Y, K, G] = ((e) => {
                let t = (0, i.useRef)();
                return t[P] || (t[P] = e());
              })(() => {
                let e = !!x,
                  t = ((e, t = 40, n = 4, r = 0, i, o = !1) => {
                    let c = !!r,
                      u = 1,
                      p = 0,
                      d = 0,
                      x = 0,
                      w = 0,
                      O = 0,
                      E = 0,
                      S = 0,
                      C = 0,
                      P = c ? [0, l(r - 1, 0)] : null,
                      A = [0, 0],
                      j = 0,
                      z = ((e, t, n) => ({
                        o: n ? n[1] : t,
                        t:
                          n && n[0]
                            ? m(
                                n[0].slice(0, a(e, n[0].length)),
                                l(0, e - n[0].length)
                              )
                            : m([], e),
                        l: e,
                        i: -1,
                        u: m([], e),
                      }))(e, t, i),
                      R = new Set(),
                      T = () => x - d + O + w,
                      I = (e) =>
                        ((e, t, n, r) => {
                          if (((r = a(r, e.l - 1)), y(e, r) <= t)) {
                            let i = v(e, t + n, r);
                            return [v(e, t, r, i), i];
                          }
                          {
                            let i = v(e, t, void 0, r);
                            return [i, v(e, t + n, i)];
                          }
                        })(z, e, p, A[0]),
                      D = () =>
                        ((e) => (e.l ? y(e, e.l - 1) + h(e, e.l - 1) : 0))(z),
                      N = (e) => y(z, e) - O,
                      L = (e) => h(z, e),
                      M = (e) => {
                        e && (k() && 0 !== S ? (O += e) : (w += e));
                      };
                    return {
                      p: () => u,
                      _: () => ((e) => [e.t.slice(), e.o])(z),
                      m: () => {
                        let e, t;
                        return (
                          E
                            ? ([e, t] = A)
                            : (([e, t] = A = I(l(0, T()))),
                              P && ((e = a(e, P[0])), (t = l(t, P[1])))),
                          1 !== S && (e -= l(0, n)),
                          2 !== S && (t += l(0, n)),
                          [l(e, 0), a(t, z.l - 1)]
                        );
                      },
                      S: () => v(z, T()),
                      $: () => v(z, T() + p),
                      I: (e) => -1 === z.t[e],
                      k: () =>
                        !!P &&
                        z.t
                          .slice(l(0, P[0] - 1), a(z.l - 1, P[1] + 1) + 1)
                          .includes(-1),
                      T: N,
                      R: L,
                      M: () => z.l,
                      C: () => x,
                      H: () => 0 !== S,
                      v: () => p,
                      W: () => d,
                      h: D,
                      B: () => (
                        (E = w), (w = 0), [E, 2 === C || x - d + p >= D()]
                      ),
                      J: (e, t) => {
                        let n = [e, t];
                        return (
                          R.add(n),
                          () => {
                            R.delete(n);
                          }
                        );
                      },
                      O: (e, t) => {
                        let n,
                          r,
                          i = 0;
                        switch (e) {
                          case 1: {
                            let e = E;
                            E = 0;
                            let n = t - x,
                              o = s(n);
                            (e && o < s(e) + 1) ||
                              0 !== C ||
                              (S = n < 0 ? 2 : 1),
                              c && ((P = null), (c = !1)),
                              (x = t),
                              (i = 4);
                            let a = x - d;
                            a >= -p && a <= D() && ((i += 1), (r = o > p));
                            break;
                          }
                          case 2:
                            (i = 8),
                              0 !== S && ((n = !0), (i += 1)),
                              (S = 0),
                              (C = 0),
                              (P = null);
                            break;
                          case 3: {
                            let e = t.filter(([e, t]) => z.t[e] !== t);
                            if (!e.length) break;
                            for (let [t, n] of (M(
                              e.reduce(
                                (e, [t, n]) => (
                                  (2 === C ||
                                    (P
                                      ? !c && t < P[0]
                                      : N(t) + (0 === S && 0 === C ? L(t) : 0) <
                                        x - d)) &&
                                    (e += n - L(t)),
                                  e
                                ),
                                0
                              )
                            ),
                            e)) {
                              let e = L(t),
                                r = g(z, t, n);
                              o && (j += r ? n : n - e);
                            }
                            o &&
                              p &&
                              j > p &&
                              (M(
                                ((e, t) => {
                                  let n = 0,
                                    r = [];
                                  e.t.forEach((e, i) => {
                                    -1 !== e && (r.push(e), i < t && n++);
                                  }),
                                    (e.i = -1);
                                  let i = f(r),
                                    o = i.length,
                                    a = (o / 2) | 0,
                                    s =
                                      o % 2 == 0 ? (i[a - 1] + i[a]) / 2 : i[a],
                                    c = e.o;
                                  return ((e.o = s) - c) * l(t - n, 0);
                                })(z, v(z, T()))
                              ),
                              (o = !1)),
                              (i = 3),
                              (r = !0);
                            break;
                          }
                          case 4:
                            p !== t && ((p = t), (i = 3));
                            break;
                          case 5:
                            t[1] ? (M(b(z, t[0], !0)), (C = 2)) : b(z, t[0]),
                              (i = 1);
                            break;
                          case 6:
                            d = t;
                            break;
                          case 7:
                            C = 1;
                            break;
                          case 8:
                            (P = I(t)), (i = 1);
                        }
                        i &&
                          ((u = 1 + (0x7fffffff & u)),
                          n && O && ((w += O), (O = 0)),
                          R.forEach(([e, t]) => {
                            i & e && t(r);
                          }));
                      },
                    };
                  })(H, c, n, I, R, !c);
                return [
                  t,
                  ((e, t) => {
                    let n,
                      r = t ? "width" : "height",
                      i = new WeakMap(),
                      o = ((e) => {
                        let t;
                        return {
                          U(n) {
                            (
                              t ||
                              (t =
                                new n.ownerDocument.defaultView.ResizeObserver(
                                  e
                                ))
                            ).observe(n);
                          },
                          F(e) {
                            t.unobserve(e);
                          },
                          P() {
                            t && t.disconnect();
                          },
                        };
                      })((t) => {
                        let o = [];
                        for (let { target: a, contentRect: l } of t)
                          if (a.offsetParent)
                            if (a === n) e.O(4, l[r]);
                            else {
                              let e = i.get(a);
                              null != e && o.push([e, l[r]]);
                            }
                        o.length && e.O(3, o);
                      });
                    return {
                      G(e) {
                        o.U((n = e));
                      },
                      K: (e, t) => (
                        i.set(e, t),
                        o.U(e),
                        () => {
                          i.delete(e), o.F(e);
                        }
                      ),
                      X: o.P,
                    };
                  })(t, e),
                  ((e, t) => {
                    let n,
                      r,
                      i,
                      o = t ? "scrollLeft" : "scrollTop",
                      a = t ? "overflowX" : "overflowY",
                      l = async (r, a) => {
                        if (!n) return void p(() => l(r, a));
                        i && i();
                        let s = () => {
                          let t;
                          return [
                            new Promise((n, r) => {
                              (t = n), (i = r), e.v() && E(r, 150);
                            }),
                            e.J(2, () => {
                              t && t();
                            }),
                          ];
                        };
                        if (a && O()) {
                          for (; e.O(8, r()), e.k(); ) {
                            let [e, t] = s();
                            try {
                              await e;
                            } catch (e) {
                              return;
                            } finally {
                              t();
                            }
                          }
                          n.scrollTo({
                            [t ? "left" : "top"]: S(r(), t),
                            behavior: "smooth",
                          });
                        } else
                          for (;;) {
                            let [i, a] = s();
                            try {
                              (n[o] = S(r(), t)), e.O(7), await i;
                            } catch (e) {
                              return;
                            } finally {
                              a();
                            }
                          }
                      };
                    return {
                      V(l) {
                        (n = l),
                          (r = ((e, t, n, r, i, o) => {
                            let a = Date.now,
                              l = 0,
                              s = !1,
                              c = !1,
                              u = !1,
                              f = !1,
                              p = (() => {
                                let t,
                                  n = () => {
                                    null != t && clearTimeout(t);
                                  },
                                  r = () => {
                                    n(),
                                      (t = E(() => {
                                        (t = null),
                                          (() => {
                                            if (s || c) return (s = !1), p();
                                            (u = !1), e.O(2);
                                          })();
                                      }, 150));
                                  };
                                return (r.L = n), r;
                              })(),
                              d = () => {
                                (l = a()),
                                  u && (f = !0),
                                  o && e.O(6, o()),
                                  e.O(1, r()),
                                  p();
                              },
                              m = (t) => {
                                if (s || !e.H() || t.ctrlKey) return;
                                let r = a() - l;
                                150 > r &&
                                  50 < r &&
                                  (n ? t.deltaX : t.deltaY) &&
                                  (s = !0);
                              },
                              h = () => {
                                (c = !0), (u = f = !1);
                              },
                              g = () => {
                                (c = !1), k() && (u = !0);
                              };
                            return (
                              t.addEventListener("scroll", d),
                              t.addEventListener("wheel", m, { passive: !0 }),
                              t.addEventListener("touchstart", h, {
                                passive: !0,
                              }),
                              t.addEventListener("touchend", g, {
                                passive: !0,
                              }),
                              {
                                P: () => {
                                  t.removeEventListener("scroll", d),
                                    t.removeEventListener("wheel", m),
                                    t.removeEventListener("touchstart", h),
                                    t.removeEventListener("touchend", g),
                                    p.L();
                                },
                                A: () => {
                                  let [t, o] = e.B();
                                  t &&
                                    (i(S(t, n), o, f),
                                    (f = !1),
                                    o && e.v() > e.h() && e.O(1, r()));
                                },
                              }
                            );
                          })(
                            e,
                            l,
                            t,
                            () => S(l[o], t),
                            (t, n, r) => {
                              if (r) {
                                let e = l.style,
                                  t = e[a];
                                (e[a] = "hidden"),
                                  E(() => {
                                    e[a] = t;
                                  });
                              }
                              n ? ((l[o] = e.C() + t), i && i()) : (l[o] += t);
                            }
                          ));
                      },
                      X() {
                        r && r.P();
                      },
                      Y(e) {
                        l(() => e);
                      },
                      j(t) {
                        (t += e.C()), l(() => t);
                      },
                      q(t, { align: n, smooth: r, offset: i = 0 } = {}) {
                        if (((t = u(t, 0, e.M() - 1)), "nearest" === n)) {
                          let r = e.T(t),
                            i = e.C();
                          if (r < i) n = "start";
                          else {
                            if (!(r + e.R(t) > i + e.v())) return;
                            n = "end";
                          }
                        }
                        l(
                          () =>
                            i +
                            e.W() +
                            e.T(t) +
                            ("end" === n
                              ? e.R(t) - e.v()
                              : "center" === n
                              ? (e.R(t) - e.v()) / 2
                              : 0),
                          r
                        );
                      },
                      D: () => {
                        r && r.A();
                      },
                    };
                  })(t, e),
                  e,
                ];
              });
            H !== q.M() && q.O(5, [H, d]), T !== q.W() && q.O(6, T);
            let [X, Z] = (0, i.useReducer)(q.p, void 0, q.p),
              [Q, J] = q.m(),
              ee = q.H(),
              et = q.h(),
              en = [],
              er = (e) => {
                let t = B(e);
                return (0, r.jsx)(
                  z,
                  {
                    Z: Y.K,
                    ee: e,
                    te: q.T(e),
                    ne: q.I(e),
                    oe: N,
                    N: t,
                    re: G,
                    ie: $[P],
                  },
                  ((e, t) => {
                    let n = e.key;
                    return null != n ? n : "_" + t;
                  })(t, e)
                );
              };
            C(() => {
              $[P] = !1;
              let e = q.J(1, (e) => {
                  e ? (0, o.flushSync)(Z) : Z();
                }),
                t = q.J(4, () => {
                  W[P] && W[P](q.C());
                }),
                n = q.J(8, () => {
                  V[P] && V[P]();
                }),
                r = (e) => {
                  Y.G(e), K.V(e);
                };
              return (
                L ? p(() => r(L[P])) : r(U[P].parentElement),
                () => {
                  e(), t(), n(), Y.X(), K.X();
                }
              );
            }, []),
              C(() => {
                K.D();
              }, [X]),
              (0, i.useImperativeHandle)(
                _,
                () => ({
                  get cache() {
                    return q._();
                  },
                  get scrollOffset() {
                    return q.C();
                  },
                  get scrollSize() {
                    return ((e) => l(e.h(), e.v()))(q);
                  },
                  get viewportSize() {
                    return q.v();
                  },
                  findStartIndex: q.S,
                  findEndIndex: q.$,
                  getItemOffset: q.T,
                  getItemSize: q.R,
                  scrollToIndex: K.q,
                  scrollTo: K.Y,
                  scrollBy: K.j,
                }),
                []
              );
            for (let e = Q; e <= J; e++) en.push(er(e));
            if (w) {
              let e = [],
                t = [];
              f(w).forEach((n) => {
                n < Q && e.push(er(n)), n > J && t.push(er(n));
              }),
                en.unshift(...e),
                en.push(...t);
            }
            return (0, r.jsx)(D, {
              ref: U,
              style: {
                overflowAnchor: "none",
                flex: "none",
                position: "relative",
                visibility: "hidden",
                width: G ? et : "100%",
                height: G ? "100%" : et,
                pointerEvents: ee ? "none" : void 0,
              },
              children: en,
            });
          }
        );
    },
    31278: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var r = n(55729),
        i = n(60693),
        o = n(32238);
      let a = function (e) {
        o.A &&
          !(0, i.Tn)(e) &&
          console.error(
            'useMount: parameter `fn` expected to be a function, but got "'.concat(
              typeof e,
              '".'
            )
          ),
          (0, r.useEffect)(function () {
            null == e || e();
          }, []);
      };
    },
    32372: function (e, t, n) {
      var r;
      !(function (e, i, o) {
        function a(e) {
          var t = this,
            n = "";
          (t.next = function () {
            var e = t.b,
              n = t.c,
              r = t.d,
              i = t.a;
            return (
              (e = (e << 25) ^ (e >>> 7) ^ n),
              (n = (n - r) | 0),
              (r = (r << 24) ^ (r >>> 8) ^ i),
              (i = (i - e) | 0),
              (t.b = e = (e << 20) ^ (e >>> 12) ^ n),
              (t.c = n = (n - r) | 0),
              (t.d = (r << 16) ^ (n >>> 16) ^ i),
              (t.a = (i - e) | 0)
            );
          }),
            (t.a = 0),
            (t.b = 0),
            (t.c = -0x61c88647),
            (t.d = 0x517cc1b7),
            e === Math.floor(e)
              ? ((t.a = (e / 0x100000000) | 0), (t.b = 0 | e))
              : (n += e);
          for (var r = 0; r < n.length + 20; r++)
            (t.b ^= n.charCodeAt(r)), t.next();
        }
        function l(e, t) {
          return (t.a = e.a), (t.b = e.b), (t.c = e.c), (t.d = e.d), t;
        }
        function s(e, t) {
          var n = new a(e),
            r = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 0x100000000;
            };
          return (
            (i.double = function () {
              do
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 0x100000000) /
                  2097152;
              while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            r &&
              ("object" == typeof r && l(r, n),
              (i.state = function () {
                return l(n, {});
              })),
            i
          );
        }
        i && i.exports
          ? (i.exports = s)
          : n.amdD && n.amdO
          ? void 0 ===
              (r = function () {
                return s;
              }.call(t, n, t, i)) || (i.exports = r)
          : (this.tychei = s);
      })(0, (e = n.nmd(e)), n.amdD);
    },
    32988: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function i() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n &&
              (e = o(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return i.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
                  return t;
                })(n)
              ));
          }
          return e;
        }
        function o(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 ===
              (n = function () {
                return i;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    38316: function (e, t, n) {
      var r;
      !(function (e, i, o) {
        function a(e) {
          var t = this,
            n = "";
          (t.x = 0),
            (t.y = 0),
            (t.z = 0),
            (t.w = 0),
            (t.next = function () {
              var e = t.x ^ (t.x << 11);
              return (
                (t.x = t.y),
                (t.y = t.z),
                (t.z = t.w),
                (t.w ^= (t.w >>> 19) ^ e ^ (e >>> 8))
              );
            }),
            e === (0 | e) ? (t.x = e) : (n += e);
          for (var r = 0; r < n.length + 64; r++)
            (t.x ^= n.charCodeAt(r)), t.next();
        }
        function l(e, t) {
          return (t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t;
        }
        function s(e, t) {
          var n = new a(e),
            r = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 0x100000000;
            };
          return (
            (i.double = function () {
              do
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 0x100000000) /
                  2097152;
              while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            r &&
              ("object" == typeof r && l(r, n),
              (i.state = function () {
                return l(n, {});
              })),
            i
          );
        }
        i && i.exports
          ? (i.exports = s)
          : n.amdD && n.amdO
          ? void 0 ===
              (r = function () {
                return s;
              }.call(t, n, t, i)) || (i.exports = r)
          : (this.xor128 = s);
      })(0, (e = n.nmd(e)), n.amdD);
    },
    42035: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => d });
      var r = n(55729),
        i = n(61946),
        o = n(63985),
        a = n(86661),
        l = Object.defineProperty,
        s = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        f = (e, t, n) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let p = { multiple: !1 },
        d = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("FileButton", p, e),
            {
              onChange: l,
              children: d,
              multiple: m,
              accept: h,
              name: g,
              form: y,
              resetRef: v,
              disabled: b,
              capture: x,
            } = n,
            w = ((e, t) => {
              var n = {};
              for (var r in e)
                c.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && s)
                for (var r of s(e))
                  0 > t.indexOf(r) && u.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "onChange",
              "children",
              "multiple",
              "accept",
              "name",
              "form",
              "resetRef",
              "disabled",
              "capture",
            ]),
            k = (0, r.useRef)();
          return (
            (0, o.b)(v, () => {
              k.current.value = "";
            }),
            r.createElement(
              r.Fragment,
              null,
              d(
                ((e, t) => {
                  for (var n in t || (t = {})) c.call(t, n) && f(e, n, t[n]);
                  if (s) for (var n of s(t)) u.call(t, n) && f(e, n, t[n]);
                  return e;
                })(
                  {
                    onClick: () => {
                      b || k.current.click();
                    },
                  },
                  w
                )
              ),
              r.createElement("input", {
                style: { display: "none" },
                type: "file",
                accept: h,
                multiple: m,
                onChange: (e) => {
                  m
                    ? l(Array.from(e.currentTarget.files))
                    : l(e.currentTarget.files[0] || null);
                },
                ref: (0, a.p)(t, k),
                name: g,
                form: y,
                capture: x,
              })
            )
          );
        });
      d.displayName = "@mantine/core/FileButton";
    },
    42542: (e, t, n) => {
      "use strict";
      function r(e) {
        return new DataView(e.buffer, e.byteOffset);
      }
      n.d(t, { Tm: () => eu }), n(31838);
      let i = {
          len: 1,
          get: (e, t) => r(e).getUint8(t),
          put: (e, t, n) => (r(e).setUint8(t, n), t + 1),
        },
        o = {
          len: 2,
          get: (e, t) => r(e).getUint16(t, !0),
          put: (e, t, n) => (r(e).setUint16(t, n, !0), t + 2),
        },
        a = {
          len: 2,
          get: (e, t) => r(e).getUint16(t),
          put: (e, t, n) => (r(e).setUint16(t, n), t + 2),
        },
        l = {
          len: 4,
          get: (e, t) => r(e).getUint32(t, !0),
          put: (e, t, n) => (r(e).setUint32(t, n, !0), t + 4),
        },
        s = {
          len: 4,
          get: (e, t) => r(e).getUint32(t),
          put: (e, t, n) => (r(e).setUint32(t, n), t + 4),
        },
        c = {
          len: 4,
          get: (e, t) => r(e).getInt32(t),
          put: (e, t, n) => (r(e).setInt32(t, n), t + 4),
        },
        u = {
          len: 8,
          get: (e, t) => r(e).getBigUint64(t, !0),
          put: (e, t, n) => (r(e).setBigUint64(t, n, !0), t + 8),
        };
      class f {
        constructor(e, t) {
          (this.len = e),
            (this.encoding = t),
            (this.textDecoder = new TextDecoder(t));
        }
        get(e, t) {
          return this.textDecoder.decode(e.subarray(t, t + this.len));
        }
      }
      class p extends Error {
        constructor() {
          super("End-Of-Stream"), (this.name = "EndOfStreamError");
        }
      }
      class d extends Error {
        constructor(e = "The operation was aborted") {
          super(e), (this.name = "AbortError");
        }
      }
      class m {
        constructor() {
          (this.maxStreamReadSize = 1048576),
            (this.endOfStream = !1),
            (this.interrupted = !1),
            (this.peekQueue = []);
        }
        async peek(e, t, n) {
          let r = await this.read(e, t, n);
          return this.peekQueue.push(e.subarray(t, t + r)), r;
        }
        async read(e, t, n) {
          if (0 === n) return 0;
          let r = this.readFromPeekBuffer(e, t, n);
          if (0 === (r += await this.readRemainderFromStream(e, t + r, n - r)))
            throw new p();
          return r;
        }
        readFromPeekBuffer(e, t, n) {
          let r = n,
            i = 0;
          for (; this.peekQueue.length > 0 && r > 0; ) {
            let n = this.peekQueue.pop();
            if (!n) throw Error("peekData should be defined");
            let o = Math.min(n.length, r);
            e.set(n.subarray(0, o), t + i),
              (i += o),
              (r -= o),
              o < n.length && this.peekQueue.push(n.subarray(o));
          }
          return i;
        }
        async readRemainderFromStream(e, t, n) {
          let r = n,
            i = 0;
          for (; r > 0 && !this.endOfStream; ) {
            let n = Math.min(r, this.maxStreamReadSize);
            if (this.interrupted) throw new d();
            let o = await this.readFromStream(e, t + i, n);
            if (0 === o) break;
            (i += o), (r -= o);
          }
          return i;
        }
      }
      class h extends m {
        constructor(e) {
          super(), (this.reader = e);
        }
        async abort() {
          return this.close();
        }
        async close() {
          this.reader.releaseLock();
        }
      }
      class g extends h {
        async readFromStream(e, t, n) {
          let r = await this.reader.read(new Uint8Array(n));
          return (r.done && (this.endOfStream = r.done), r.value)
            ? (e.set(r.value, t), r.value.byteLength)
            : 0;
        }
      }
      class y extends m {
        constructor(e) {
          super(),
            (this.reader = e),
            (this.buffer = null),
            (this.bufferOffset = 0);
        }
        async readFromStream(e, t, n) {
          let r = 0;
          if (this.buffer) {
            let i = Math.min(this.buffer.byteLength - this.bufferOffset, n);
            e.set(
              this.buffer.subarray(this.bufferOffset, this.bufferOffset + i),
              t
            ),
              (this.bufferOffset += i),
              (r += i),
              (n -= i),
              (t += i),
              this.bufferOffset >= this.buffer.byteLength &&
                ((this.buffer = null), (this.bufferOffset = 0));
          }
          for (; n > 0 && !this.endOfStream; ) {
            let i = await this.reader.read();
            if (i.done) {
              this.endOfStream = !0;
              break;
            }
            if (i.value) {
              let o = i.value;
              if (o.byteLength > n)
                return (
                  e.set(o.subarray(0, n), t),
                  (this.buffer = o),
                  (this.bufferOffset = n),
                  (r += n)
                );
              e.set(o, t),
                (r += o.byteLength),
                (n -= o.byteLength),
                (t += o.byteLength);
            }
          }
          if (0 === r && this.endOfStream) throw new p();
          return r;
        }
        abort() {
          return (this.interrupted = !0), this.reader.cancel();
        }
        async close() {
          await this.abort(), this.reader.releaseLock();
        }
      }
      class v {
        constructor(e) {
          (this.numBuffer = new Uint8Array(8)),
            (this.position = 0),
            (this.onClose = e?.onClose),
            e?.abortSignal &&
              e.abortSignal.addEventListener("abort", () => {
                this.abort();
              });
        }
        async readToken(e, t = this.position) {
          let n = new Uint8Array(e.len);
          if ((await this.readBuffer(n, { position: t })) < e.len)
            throw new p();
          return e.get(n, 0);
        }
        async peekToken(e, t = this.position) {
          let n = new Uint8Array(e.len);
          if ((await this.peekBuffer(n, { position: t })) < e.len)
            throw new p();
          return e.get(n, 0);
        }
        async readNumber(e) {
          if (
            (await this.readBuffer(this.numBuffer, { length: e.len })) < e.len
          )
            throw new p();
          return e.get(this.numBuffer, 0);
        }
        async peekNumber(e) {
          if (
            (await this.peekBuffer(this.numBuffer, { length: e.len })) < e.len
          )
            throw new p();
          return e.get(this.numBuffer, 0);
        }
        async ignore(e) {
          if (void 0 !== this.fileInfo.size) {
            let t = this.fileInfo.size - this.position;
            if (e > t) return (this.position += t), t;
          }
          return (this.position += e), e;
        }
        async close() {
          await this.abort(), await this.onClose?.();
        }
        normalizeOptions(e, t) {
          if (
            !this.supportsRandomAccess() &&
            t &&
            void 0 !== t.position &&
            t.position < this.position
          )
            throw Error(
              "`options.position` must be equal or greater than `tokenizer.position`"
            );
          return {
            ...{
              mayBeLess: !1,
              offset: 0,
              length: e.length,
              position: this.position,
            },
            ...t,
          };
        }
        abort() {
          return Promise.resolve();
        }
      }
      class b extends v {
        constructor(e, t) {
          super(t),
            (this.streamReader = e),
            (this.fileInfo = t?.fileInfo ?? {});
        }
        async readBuffer(e, t) {
          let n = this.normalizeOptions(e, t),
            r = n.position - this.position;
          if (r > 0) return await this.ignore(r), this.readBuffer(e, t);
          if (r < 0)
            throw Error(
              "`options.position` must be equal or greater than `tokenizer.position`"
            );
          if (0 === n.length) return 0;
          let i = await this.streamReader.read(e, 0, n.length);
          if (((this.position += i), (!t || !t.mayBeLess) && i < n.length))
            throw new p();
          return i;
        }
        async peekBuffer(e, t) {
          let n = this.normalizeOptions(e, t),
            r = 0;
          if (n.position) {
            let t = n.position - this.position;
            if (t > 0) {
              let i = new Uint8Array(n.length + t);
              return (
                (r = await this.peekBuffer(i, { mayBeLess: n.mayBeLess })),
                e.set(i.subarray(t)),
                r - t
              );
            }
            if (t < 0)
              throw Error("Cannot peek from a negative offset in a stream");
          }
          if (n.length > 0) {
            try {
              r = await this.streamReader.peek(e, 0, n.length);
            } catch (e) {
              if (t?.mayBeLess && e instanceof p) return 0;
              throw e;
            }
            if (!n.mayBeLess && r < n.length) throw new p();
          }
          return r;
        }
        async ignore(e) {
          let t = Math.min(256e3, e),
            n = new Uint8Array(t),
            r = 0;
          for (; r < e; ) {
            let i = e - r,
              o = await this.readBuffer(n, { length: Math.min(t, i) });
            if (o < 0) return o;
            r += o;
          }
          return r;
        }
        abort() {
          return this.streamReader.abort();
        }
        async close() {
          return this.streamReader.close();
        }
        supportsRandomAccess() {
          return !1;
        }
      }
      class x extends v {
        constructor(e, t) {
          super(t),
            (this.uint8Array = e),
            (this.fileInfo = { ...(t?.fileInfo ?? {}), ...{ size: e.length } });
        }
        async readBuffer(e, t) {
          t?.position && (this.position = t.position);
          let n = await this.peekBuffer(e, t);
          return (this.position += n), n;
        }
        async peekBuffer(e, t) {
          let n = this.normalizeOptions(e, t),
            r = Math.min(this.uint8Array.length - n.position, n.length);
          if (!n.mayBeLess && r < n.length) throw new p();
          return e.set(this.uint8Array.subarray(n.position, n.position + r)), r;
        }
        close() {
          return super.close();
        }
        supportsRandomAccess() {
          return !0;
        }
        setPosition(e) {
          this.position = e;
        }
      }
      var w = Uint8Array,
        k = Uint16Array,
        O = Int32Array,
        E = new w([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        S = new w([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        C = new w([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        P = function (e, t) {
          for (var n = new k(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
          for (var i = new O(n[30]), r = 1; r < 30; ++r)
            for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
          return { b: n, r: i };
        },
        A = P(E, 2),
        j = A.b,
        z = A.r;
      (j[28] = 258), (z[258] = 28);
      var R = P(S, 0),
        T = R.b;
      R.r;
      for (var I = new k(32768), D = 0; D < 32768; ++D) {
        var N = ((43690 & D) >> 1) | ((21845 & D) << 1);
        (N =
          ((61680 & (N = ((52428 & N) >> 2) | ((13107 & N) << 2))) >> 4) |
          ((3855 & N) << 4)),
          (I[D] = (((65280 & N) >> 8) | ((255 & N) << 8)) >> 1);
      }
      for (
        var L = function (e, t, n) {
            for (var r, i = e.length, o = 0, a = new k(t); o < i; ++o)
              e[o] && ++a[e[o] - 1];
            var l = new k(t);
            for (o = 1; o < t; ++o) l[o] = (l[o - 1] + a[o - 1]) << 1;
            if (n) {
              r = new k(1 << t);
              var s = 15 - t;
              for (o = 0; o < i; ++o)
                if (e[o])
                  for (
                    var c = (o << 4) | e[o],
                      u = t - e[o],
                      f = l[e[o] - 1]++ << u,
                      p = f | ((1 << u) - 1);
                    f <= p;
                    ++f
                  )
                    r[I[f] >> s] = c;
            } else
              for (o = 0, r = new k(i); o < i; ++o)
                e[o] && (r[o] = I[l[e[o] - 1]++] >> (15 - e[o]));
            return r;
          },
          M = new w(288),
          D = 0;
        D < 144;
        ++D
      )
        M[D] = 8;
      for (var D = 144; D < 256; ++D) M[D] = 9;
      for (var D = 256; D < 280; ++D) M[D] = 7;
      for (var D = 280; D < 288; ++D) M[D] = 8;
      for (var F = new w(32), D = 0; D < 32; ++D) F[D] = 5;
      var _ = L(M, 9, 1),
        B = L(F, 5, 1),
        H = function (e) {
          for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
          return t;
        },
        U = function (e, t, n) {
          var r = (t / 8) | 0;
          return ((e[r] | (e[r + 1] << 8)) >> (7 & t)) & n;
        },
        $ = function (e, t) {
          var n = (t / 8) | 0;
          return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >> (7 & t);
        },
        W = [
          "unexpected EOF",
          "invalid block type",
          "invalid length/literal",
          "invalid distance",
          "stream finished",
          "no stream handler",
          ,
          "no callback",
          "invalid UTF-8 data",
          "extra field too long",
          "date not in range 1980-2099",
          "filename too long",
          "stream finishing",
          "invalid zip data",
        ],
        V = function (e, t, n) {
          var r = Error(t || W[e]);
          if (
            ((r.code = e),
            Error.captureStackTrace && Error.captureStackTrace(r, V),
            !n)
          )
            throw r;
          return r;
        },
        q = function (e, t, n, r) {
          var i,
            o,
            a,
            l = e.length,
            s = r ? r.length : 0;
          if (!l || (t.f && !t.l)) return n || new w(0);
          var c = !n,
            u = c || 2 != t.i,
            f = t.i;
          c && (n = new w(3 * l));
          var p = function (e) {
              var t = n.length;
              if (e > t) {
                var r = new w(Math.max(2 * t, e));
                r.set(n), (n = r);
              }
            },
            d = t.f || 0,
            m = t.p || 0,
            h = t.b || 0,
            g = t.l,
            y = t.d,
            v = t.m,
            b = t.n,
            x = 8 * l;
          do {
            if (!g) {
              d = U(e, m, 1);
              var k = U(e, m + 1, 3);
              if (((m += 3), k))
                if (1 == k) (g = _), (y = B), (v = 9), (b = 5);
                else if (2 == k) {
                  var O = U(e, m, 31) + 257,
                    P = U(e, m + 10, 15) + 4,
                    A = O + U(e, m + 5, 31) + 1;
                  m += 14;
                  for (var z = new w(A), R = new w(19), I = 0; I < P; ++I)
                    R[C[I]] = U(e, m + 3 * I, 7);
                  m += 3 * P;
                  for (
                    var D = H(R), N = (1 << D) - 1, M = L(R, D, 1), I = 0;
                    I < A;

                  ) {
                    var F = M[U(e, m, N)];
                    m += 15 & F;
                    var W = F >> 4;
                    if (W < 16) z[I++] = W;
                    else {
                      var q = 0,
                        Y = 0;
                      for (
                        16 == W
                          ? ((Y = 3 + U(e, m, 3)), (m += 2), (q = z[I - 1]))
                          : 17 == W
                          ? ((Y = 3 + U(e, m, 7)), (m += 3))
                          : 18 == W && ((Y = 11 + U(e, m, 127)), (m += 7));
                        Y--;

                      )
                        z[I++] = q;
                    }
                  }
                  var K = z.subarray(0, O),
                    G = z.subarray(O);
                  (v = H(K)), (b = H(G)), (g = L(K, v, 1)), (y = L(G, b, 1));
                } else V(1);
              else {
                var W = (((m + 7) / 8) | 0) + 4,
                  X = e[W - 4] | (e[W - 3] << 8),
                  Z = W + X;
                if (Z > l) {
                  f && V(0);
                  break;
                }
                u && p(h + X),
                  n.set(e.subarray(W, Z), h),
                  (t.b = h += X),
                  (t.p = m = 8 * Z),
                  (t.f = d);
                continue;
              }
              if (m > x) {
                f && V(0);
                break;
              }
            }
            u && p(h + 131072);
            for (var Q = (1 << v) - 1, J = (1 << b) - 1, ee = m; ; ee = m) {
              var q = g[$(e, m) & Q],
                et = q >> 4;
              if ((m += 15 & q) > x) {
                f && V(0);
                break;
              }
              if ((q || V(2), et < 256)) n[h++] = et;
              else if (256 == et) {
                (ee = m), (g = null);
                break;
              } else {
                var en = et - 254;
                if (et > 264) {
                  var I = et - 257,
                    er = E[I];
                  (en = U(e, m, (1 << er) - 1) + j[I]), (m += er);
                }
                var ei = y[$(e, m) & J],
                  eo = ei >> 4;
                ei || V(3), (m += 15 & ei);
                var G = T[eo];
                if (eo > 3) {
                  var er = S[eo];
                  (G += $(e, m) & ((1 << er) - 1)), (m += er);
                }
                if (m > x) {
                  f && V(0);
                  break;
                }
                u && p(h + 131072);
                var ea = h + en;
                if (h < G) {
                  var el = s - G,
                    es = Math.min(G, ea);
                  for (el + h < 0 && V(3); h < es; ++h) n[h] = r[el + h];
                }
                for (; h < ea; ++h) n[h] = n[h - G];
              }
            }
            (t.l = g),
              (t.p = ee),
              (t.b = h),
              (t.f = d),
              g && ((d = 1), (t.m = v), (t.d = y), (t.n = b));
          } while (!d);
          return h != n.length && c
            ? ((i = n),
              (o = 0) < 0 && (o = 0),
              (null == (a = h) || a > i.length) && (a = i.length),
              new w(i.subarray(o, a)))
            : n.subarray(0, h);
        },
        Y = new w(0),
        K = function (e) {
          (31 != e[0] || 139 != e[1] || 8 != e[2]) && V(6, "invalid gzip data");
          var t = e[3],
            n = 10;
          4 & t && (n += (e[10] | (e[11] << 8)) + 2);
          for (var r = ((t >> 3) & 1) + ((t >> 4) & 1); r > 0; r -= !e[n++]);
          return n + (2 & t);
        },
        G = function (e) {
          var t = e.length;
          return (
            (e[t - 4] |
              (e[t - 3] << 8) |
              (e[t - 2] << 16) |
              (e[t - 1] << 24)) >>>
            0
          );
        },
        X = "undefined" != typeof TextDecoder && new TextDecoder();
      try {
        X.decode(Y, { stream: !0 });
      } catch (e) {}
      "function" == typeof queueMicrotask && queueMicrotask;
      var Z = n(81488);
      let Q = {
          LocalFileHeader: 0x4034b50,
          DataDescriptor: 0x8074b50,
          CentralFileHeader: 0x2014b50,
          EndOfCentralDirectory: 0x6054b50,
        },
        J = {
          get: (e) => (
            o.get(e, 6),
            {
              signature: l.get(e, 0),
              compressedSize: l.get(e, 8),
              uncompressedSize: l.get(e, 12),
            }
          ),
          len: 16,
        },
        ee = {
          get(e) {
            let t = o.get(e, 6);
            return {
              signature: l.get(e, 0),
              minVersion: o.get(e, 4),
              dataDescriptor: !!(8 & t),
              compressedMethod: o.get(e, 8),
              compressedSize: l.get(e, 18),
              uncompressedSize: l.get(e, 22),
              filenameLength: o.get(e, 26),
              extraFieldLength: o.get(e, 28),
              filename: null,
            };
          },
          len: 30,
        },
        et = {
          get: (e) => ({
            signature: l.get(e, 0),
            nrOfThisDisk: o.get(e, 4),
            nrOfThisDiskWithTheStart: o.get(e, 6),
            nrOfEntriesOnThisDisk: o.get(e, 8),
            nrOfEntriesOfSize: o.get(e, 10),
            sizeOfCd: l.get(e, 12),
            offsetOfStartOfCd: l.get(e, 16),
            zipFileCommentLength: o.get(e, 20),
          }),
          len: 22,
        },
        en = {
          get(e) {
            let t = o.get(e, 8);
            return {
              signature: l.get(e, 0),
              minVersion: o.get(e, 6),
              dataDescriptor: !!(8 & t),
              compressedMethod: o.get(e, 10),
              compressedSize: l.get(e, 20),
              uncompressedSize: l.get(e, 24),
              filenameLength: o.get(e, 28),
              extraFieldLength: o.get(e, 30),
              fileCommentLength: o.get(e, 32),
              relativeOffsetOfLocalHeader: l.get(e, 42),
              filename: null,
            };
          },
          len: 46,
        };
      function er(e) {
        let t = new Uint8Array(l.len);
        return l.put(t, 0, e), t;
      }
      let ei = Z("tokenizer:inflate"),
        eo = er(Q.DataDescriptor),
        ea = er(Q.EndOfCentralDirectory);
      class el {
        constructor(e) {
          (this.tokenizer = e), (this.syncBuffer = new Uint8Array(262144));
        }
        async isZip() {
          return (await this.peekSignature()) === Q.LocalFileHeader;
        }
        peekSignature() {
          return this.tokenizer.peekToken(l);
        }
        async findEndOfCentralDirectoryLocator() {
          let e = this.tokenizer,
            t = Math.min(16384, e.fileInfo.size),
            n = this.syncBuffer.subarray(0, t);
          await this.tokenizer.readBuffer(n, { position: e.fileInfo.size - t });
          for (let r = n.length - 4; r >= 0; r--)
            if (
              n[r] === ea[0] &&
              n[r + 1] === ea[1] &&
              n[r + 2] === ea[2] &&
              n[r + 3] === ea[3]
            )
              return e.fileInfo.size - t + r;
          return -1;
        }
        async readCentralDirectory() {
          if (!this.tokenizer.supportsRandomAccess())
            return void ei(
              "Cannot reading central-directory without random-read support"
            );
          ei("Reading central-directory...");
          let e = this.tokenizer.position,
            t = await this.findEndOfCentralDirectoryLocator();
          if (t > 0) {
            ei("Central-directory 32-bit signature found");
            let n = await this.tokenizer.readToken(et, t),
              r = [];
            this.tokenizer.setPosition(n.offsetOfStartOfCd);
            for (let e = 0; e < n.nrOfEntriesOfSize; ++e) {
              let t = await this.tokenizer.readToken(en);
              if (t.signature !== Q.CentralFileHeader)
                throw Error("Expected Central-File-Header signature");
              (t.filename = await this.tokenizer.readToken(
                new f(t.filenameLength, "utf-8")
              )),
                await this.tokenizer.ignore(t.extraFieldLength),
                await this.tokenizer.ignore(t.fileCommentLength),
                r.push(t),
                ei(
                  `Add central-directory file-entry: n=${e + 1}/${
                    r.length
                  }: filename=${r[e].filename}`
                );
            }
            return this.tokenizer.setPosition(e), r;
          }
          this.tokenizer.setPosition(e);
        }
        async unzip(e) {
          let t = await this.readCentralDirectory();
          if (t) return this.iterateOverCentralDirectory(t, e);
          let n = !1;
          do {
            let t,
              r = await this.readLocalFileHeader();
            if (!r) break;
            let i = e(r);
            if (
              ((n = !!i.stop),
              await this.tokenizer.ignore(r.extraFieldLength),
              r.dataDescriptor && 0 === r.compressedSize)
            ) {
              let e = [],
                t = 262144;
              ei(
                "Compressed-file-size unknown, scanning for next data-descriptor-signature...."
              );
              let n = -1;
              for (; n < 0 && 262144 === t; ) {
                t = await this.tokenizer.peekBuffer(this.syncBuffer, {
                  mayBeLess: !0,
                });
                let r =
                  (n = (function (e, t) {
                    let n = e.length,
                      r = t.length;
                    if (r > n) return -1;
                    for (let i = 0; i <= n - r; i++) {
                      let n = !0;
                      for (let o = 0; o < r; o++)
                        if (e[i + o] !== t[o]) {
                          n = !1;
                          break;
                        }
                      if (n) return i;
                    }
                    return -1;
                  })(this.syncBuffer.subarray(0, t), eo)) >= 0
                    ? n
                    : t;
                if (i.handler) {
                  let t = new Uint8Array(r);
                  await this.tokenizer.readBuffer(t), e.push(t);
                } else await this.tokenizer.ignore(r);
              }
              ei(
                `Found data-descriptor-signature at pos=${this.tokenizer.position}`
              ),
                i.handler &&
                  (await this.inflate(
                    r,
                    (function (e) {
                      let t = new Uint8Array(
                          e.reduce((e, t) => e + t.length, 0)
                        ),
                        n = 0;
                      for (let r of e) t.set(r, n), (n += r.length);
                      return t;
                    })(e),
                    i.handler
                  ));
            } else
              i.handler
                ? (ei(
                    `Reading compressed-file-data: ${r.compressedSize} bytes`
                  ),
                  (t = new Uint8Array(r.compressedSize)),
                  await this.tokenizer.readBuffer(t),
                  await this.inflate(r, t, i.handler))
                : (ei(
                    `Ignoring compressed-file-data: ${r.compressedSize} bytes`
                  ),
                  await this.tokenizer.ignore(r.compressedSize));
            if (
              (ei(`Reading data-descriptor at pos=${this.tokenizer.position}`),
              r.dataDescriptor &&
                0x8074b50 !== (await this.tokenizer.readToken(J)).signature)
            )
              throw Error(
                `Expected data-descriptor-signature at position ${
                  this.tokenizer.position - J.len
                }`
              );
          } while (!n);
        }
        async iterateOverCentralDirectory(e, t) {
          for (let n of e) {
            let e = t(n);
            if (e.handler) {
              this.tokenizer.setPosition(n.relativeOffsetOfLocalHeader);
              let t = await this.readLocalFileHeader();
              if (t) {
                await this.tokenizer.ignore(t.extraFieldLength);
                let r = new Uint8Array(n.compressedSize);
                await this.tokenizer.readBuffer(r),
                  await this.inflate(t, r, e.handler);
              }
            }
            if (e.stop) break;
          }
        }
        inflate(e, t, n) {
          var r, i, o, a;
          return 0 === e.compressedMethod
            ? n(t)
            : (ei(
                `Decompress filename=${e.filename}, compressed-size=${t.length}`
              ),
              n(
                31 == t[0] && 139 == t[1] && 8 == t[2]
                  ? ((i = void 0),
                    (o = K(t)) + 8 > t.length && V(6, "invalid gzip data"),
                    q(
                      t.subarray(o, -8),
                      { i: 2 },
                      (i && i.out) || new w(G(t)),
                      i && i.dictionary
                    ))
                  : (15 & t[0]) != 8 ||
                    t[0] >> 4 > 7 ||
                    ((t[0] << 8) | t[1]) % 31
                  ? q(t, { i: 2 }, r && r.out, r && r.dictionary)
                  : q(
                      t.subarray(
                        ((a = r && r.dictionary),
                        ((15 & t[0]) != 8 ||
                          t[0] >> 4 > 7 ||
                          ((t[0] << 8) | t[1]) % 31) &&
                          V(6, "invalid zlib data"),
                        ((t[1] >> 5) & 1) == +!a &&
                          V(
                            6,
                            "invalid zlib data: " +
                              (32 & t[1] ? "need" : "unexpected") +
                              " dictionary"
                          ),
                        ((t[1] >> 3) & 4) + 2),
                        -4
                      ),
                      { i: 2 },
                      r && r.out,
                      r && r.dictionary
                    )
              ));
        }
        async readLocalFileHeader() {
          let e = await this.tokenizer.peekToken(l);
          if (e === Q.LocalFileHeader) {
            let e = await this.tokenizer.readToken(ee);
            return (
              (e.filename = await this.tokenizer.readToken(
                new f(e.filenameLength, "utf-8")
              )),
              e
            );
          }
          if (e === Q.CentralFileHeader) return !1;
          if (0xe011cfd0 === e) throw Error("Encrypted ZIP");
          throw Error("Unexpected signature");
        }
      }
      function es(e) {
        let { byteLength: t } = e;
        return 6 === t
          ? 0x100000000 * e.getUint16(0) + e.getUint32(2)
          : 5 === t
          ? 0x100000000 * e.getUint8(0) + e.getUint32(1)
          : 4 === t
          ? e.getUint32(0)
          : 3 === t
          ? 65536 * e.getUint8(0) + e.getUint16(1)
          : 2 === t
          ? e.getUint16(0)
          : 1 === t
          ? e.getUint8(0)
          : void 0;
      }
      Object.prototype.toString,
        new globalThis.TextDecoder("utf8"),
        new globalThis.TextEncoder(),
        Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
      let ec = {
        get: (e, t) =>
          (127 & e[t + 3]) | (e[t + 2] << 7) | (e[t + 1] << 14) | (e[t] << 21),
        len: 4,
      };
      async function eu(e) {
        return new ed().fromStream(e);
      }
      function ef(e) {
        switch (e) {
          case "application/epub+zip":
            return { ext: "epub", mime: "application/epub+zip" };
          case "application/vnd.oasis.opendocument.text":
            return {
              ext: "odt",
              mime: "application/vnd.oasis.opendocument.text",
            };
          case "application/vnd.oasis.opendocument.text-template":
            return {
              ext: "ott",
              mime: "application/vnd.oasis.opendocument.text-template",
            };
          case "application/vnd.oasis.opendocument.spreadsheet":
            return {
              ext: "ods",
              mime: "application/vnd.oasis.opendocument.spreadsheet",
            };
          case "application/vnd.oasis.opendocument.spreadsheet-template":
            return {
              ext: "ots",
              mime: "application/vnd.oasis.opendocument.spreadsheet-template",
            };
          case "application/vnd.oasis.opendocument.presentation":
            return {
              ext: "odp",
              mime: "application/vnd.oasis.opendocument.presentation",
            };
          case "application/vnd.oasis.opendocument.presentation-template":
            return {
              ext: "otp",
              mime: "application/vnd.oasis.opendocument.presentation-template",
            };
          case "application/vnd.oasis.opendocument.graphics":
            return {
              ext: "odg",
              mime: "application/vnd.oasis.opendocument.graphics",
            };
          case "application/vnd.oasis.opendocument.graphics-template":
            return {
              ext: "otg",
              mime: "application/vnd.oasis.opendocument.graphics-template",
            };
          case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            return {
              ext: "xlsx",
              mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            };
          case "application/vnd.ms-excel.sheet.macroEnabled":
            return {
              ext: "xlsm",
              mime: "application/vnd.ms-excel.sheet.macroEnabled.12",
            };
          case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
            return {
              ext: "xltx",
              mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
            };
          case "application/vnd.ms-excel.template.macroEnabled":
            return {
              ext: "xltm",
              mime: "application/vnd.ms-excel.template.macroenabled.12",
            };
          case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            return {
              ext: "docx",
              mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            };
          case "application/vnd.ms-word.document.macroEnabled":
            return {
              ext: "docm",
              mime: "application/vnd.ms-word.document.macroEnabled.12",
            };
          case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
            return {
              ext: "dotx",
              mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
            };
          case "application/vnd.ms-word.template.macroEnabledTemplate":
            return {
              ext: "dotm",
              mime: "application/vnd.ms-word.template.macroEnabled.12",
            };
          case "application/vnd.openxmlformats-officedocument.presentationml.template":
            return {
              ext: "potx",
              mime: "application/vnd.openxmlformats-officedocument.presentationml.template",
            };
          case "application/vnd.ms-powerpoint.template.macroEnabled":
            return {
              ext: "potm",
              mime: "application/vnd.ms-powerpoint.template.macroEnabled.12",
            };
          case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            return {
              ext: "pptx",
              mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            };
          case "application/vnd.ms-powerpoint.presentation.macroEnabled":
            return {
              ext: "pptm",
              mime: "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
            };
          case "application/vnd.ms-visio.drawing":
            return { ext: "vsdx", mime: "application/vnd.visio" };
          case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
            return { ext: "3mf", mime: "model/3mf" };
        }
      }
      function ep(e, t, n) {
        for (let [r, i] of ((n = { offset: 0, ...n }), t.entries()))
          if (n.mask) {
            if (i !== (n.mask[r] & e[r + n.offset])) return !1;
          } else if (i !== e[r + n.offset]) return !1;
        return !0;
      }
      class ed {
        constructor(e) {
          (this.detectors = [
            ...(e?.customDetectors ?? []),
            { id: "core", detect: this.detectConfident },
            { id: "core.imprecise", detect: this.detectImprecise },
          ]),
            (this.tokenizerOptions = { abortSignal: e?.signal });
        }
        async fromTokenizer(e) {
          let t = e.position;
          for (let n of this.detectors) {
            let r = await n.detect(e);
            if (r) return r;
            if (t !== e.position) return;
          }
        }
        async fromBuffer(e) {
          if (!(e instanceof Uint8Array || e instanceof ArrayBuffer))
            throw TypeError(
              `Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``
            );
          let t = e instanceof Uint8Array ? e : new Uint8Array(e);
          if (t?.length > 1)
            return this.fromTokenizer(new x(t, this.tokenizerOptions));
        }
        async fromBlob(e) {
          return this.fromStream(e.stream());
        }
        async fromStream(e) {
          let t = await (function (e, t) {
            let n = (function (e) {
                try {
                  let t = e.getReader({ mode: "byob" });
                  if (t instanceof ReadableStreamDefaultReader) return new y(t);
                  return new g(t);
                } catch (t) {
                  if (t instanceof TypeError) return new y(e.getReader());
                  throw t;
                }
              })(e),
              r = t ?? {},
              i = r.onClose;
            return (
              (r.onClose = async () => {
                if ((await n.close(), i)) return i();
              }),
              new b(n, r)
            );
          })(e, this.tokenizerOptions);
          try {
            return await this.fromTokenizer(t);
          } finally {
            await t.close();
          }
        }
        async toDetectionStream(e, t) {
          let n,
            r,
            { sampleSize: i = 4100 } = t,
            o = e.getReader({ mode: "byob" });
          try {
            let { value: e, done: t } = await o.read(new Uint8Array(i));
            if (((r = e), !t && e))
              try {
                n = await this.fromBuffer(e.slice(0, i));
              } catch (e) {
                if (!(e instanceof p)) throw e;
                n = void 0;
              }
            r = e;
          } finally {
            o.releaseLock();
          }
          let a = new TransformStream({
              async start(e) {
                e.enqueue(r);
              },
              transform(e, t) {
                t.enqueue(e);
              },
            }),
            l = e.pipeThrough(a);
          return (l.fileType = n), l;
        }
        check(e, t) {
          return ep(this.buffer, e, t);
        }
        checkString(e, t) {
          return this.check(
            [...e].map((e) => e.charCodeAt(0)),
            t
          );
        }
        detectConfident = async (e) => {
          if (
            ((this.buffer = new Uint8Array(4100)),
            void 0 === e.fileInfo.size &&
              (e.fileInfo.size = Number.MAX_SAFE_INTEGER),
            (this.tokenizer = e),
            await e.peekBuffer(this.buffer, { length: 12, mayBeLess: !0 }),
            this.check([66, 77]))
          )
            return { ext: "bmp", mime: "image/bmp" };
          if (this.check([11, 119]))
            return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" };
          if (this.check([120, 1]))
            return { ext: "dmg", mime: "application/x-apple-diskimage" };
          if (this.check([77, 90]))
            return { ext: "exe", mime: "application/x-msdownload" };
          if (this.check([37, 33]))
            return (await e.peekBuffer(this.buffer, {
              length: 24,
              mayBeLess: !0,
            }),
            this.checkString("PS-Adobe-", { offset: 2 }) &&
              this.checkString(" EPSF-", { offset: 14 }))
              ? { ext: "eps", mime: "application/eps" }
              : { ext: "ps", mime: "application/postscript" };
          if (this.check([31, 160]) || this.check([31, 157]))
            return { ext: "Z", mime: "application/x-compress" };
          if (this.check([199, 113]))
            return { ext: "cpio", mime: "application/x-cpio" };
          if (this.check([96, 234]))
            return { ext: "arj", mime: "application/x-arj" };
          if (this.check([239, 187, 191]))
            return this.tokenizer.ignore(3), this.detectConfident(e);
          if (this.check([71, 73, 70]))
            return { ext: "gif", mime: "image/gif" };
          if (this.check([73, 73, 188]))
            return { ext: "jxr", mime: "image/vnd.ms-photo" };
          if (this.check([31, 139, 8]))
            return { ext: "gz", mime: "application/gzip" };
          if (this.check([66, 90, 104]))
            return { ext: "bz2", mime: "application/x-bzip2" };
          if (this.checkString("ID3")) {
            await e.ignore(6);
            let t = await e.readToken(ec);
            return e.position + t > e.fileInfo.size
              ? { ext: "mp3", mime: "audio/mpeg" }
              : (await e.ignore(t), this.fromTokenizer(e));
          }
          if (this.checkString("MP+"))
            return { ext: "mpc", mime: "audio/x-musepack" };
          if (
            (67 === this.buffer[0] || 70 === this.buffer[0]) &&
            this.check([87, 83], { offset: 1 })
          )
            return { ext: "swf", mime: "application/x-shockwave-flash" };
          if (this.check([255, 216, 255]))
            return this.check([247], { offset: 3 })
              ? { ext: "jls", mime: "image/jls" }
              : { ext: "jpg", mime: "image/jpeg" };
          if (this.check([79, 98, 106, 1]))
            return { ext: "avro", mime: "application/avro" };
          if (this.checkString("FLIF"))
            return { ext: "flif", mime: "image/flif" };
          if (this.checkString("8BPS"))
            return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
          if (this.checkString("MPCK"))
            return { ext: "mpc", mime: "audio/x-musepack" };
          if (this.checkString("FORM"))
            return { ext: "aif", mime: "audio/aiff" };
          if (this.checkString("icns", { offset: 0 }))
            return { ext: "icns", mime: "image/icns" };
          if (this.check([80, 75, 3, 4])) {
            let t;
            return (
              await new el(e).unzip((e) => {
                switch (e.filename) {
                  case "META-INF/mozilla.rsa":
                    return (
                      (t = { ext: "xpi", mime: "application/x-xpinstall" }),
                      { stop: !0 }
                    );
                  case "META-INF/MANIFEST.MF":
                    return (
                      (t = { ext: "jar", mime: "application/java-archive" }),
                      { stop: !0 }
                    );
                  case "mimetype":
                    return {
                      async handler(e) {
                        t = ef(new TextDecoder("utf-8").decode(e).trim());
                      },
                      stop: !0,
                    };
                  case "[Content_Types].xml":
                    return {
                      async handler(e) {
                        let n = new TextDecoder("utf-8").decode(e),
                          r = n.indexOf('.main+xml"');
                        if (-1 === r) {
                          let e =
                            "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
                          n.includes(`ContentType="${e}"`) && (t = ef(e));
                        } else {
                          let e = (n = n.slice(0, Math.max(0, r))).lastIndexOf(
                            '"'
                          );
                          t = ef(n.slice(Math.max(0, e + 1)));
                        }
                      },
                      stop: !0,
                    };
                  default:
                    if (/classes\d*\.dex/.test(e.filename))
                      return (
                        (t = {
                          ext: "apk",
                          mime: "application/vnd.android.package-archive",
                        }),
                        { stop: !0 }
                      );
                    return {};
                }
              }),
              t ?? { ext: "zip", mime: "application/zip" }
            );
          }
          if (this.checkString("OggS")) {
            await e.ignore(28);
            let t = new Uint8Array(8);
            return (await e.readBuffer(t),
            ep(t, [79, 112, 117, 115, 72, 101, 97, 100]))
              ? { ext: "opus", mime: "audio/ogg; codecs=opus" }
              : ep(t, [128, 116, 104, 101, 111, 114, 97])
              ? { ext: "ogv", mime: "video/ogg" }
              : ep(t, [1, 118, 105, 100, 101, 111, 0])
              ? { ext: "ogm", mime: "video/ogg" }
              : ep(t, [127, 70, 76, 65, 67])
              ? { ext: "oga", mime: "audio/ogg" }
              : ep(t, [83, 112, 101, 101, 120, 32, 32])
              ? { ext: "spx", mime: "audio/ogg" }
              : ep(t, [1, 118, 111, 114, 98, 105, 115])
              ? { ext: "ogg", mime: "audio/ogg" }
              : { ext: "ogx", mime: "application/ogg" };
          }
          if (
            this.check([80, 75]) &&
            (3 === this.buffer[2] ||
              5 === this.buffer[2] ||
              7 === this.buffer[2]) &&
            (4 === this.buffer[3] ||
              6 === this.buffer[3] ||
              8 === this.buffer[3])
          )
            return { ext: "zip", mime: "application/zip" };
          if (this.checkString("MThd"))
            return { ext: "mid", mime: "audio/midi" };
          if (
            this.checkString("wOFF") &&
            (this.check([0, 1, 0, 0], { offset: 4 }) ||
              this.checkString("OTTO", { offset: 4 }))
          )
            return { ext: "woff", mime: "font/woff" };
          if (
            this.checkString("wOF2") &&
            (this.check([0, 1, 0, 0], { offset: 4 }) ||
              this.checkString("OTTO", { offset: 4 }))
          )
            return { ext: "woff2", mime: "font/woff2" };
          if (
            this.check([212, 195, 178, 161]) ||
            this.check([161, 178, 195, 212])
          )
            return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" };
          if (this.checkString("DSD "))
            return { ext: "dsf", mime: "audio/x-dsf" };
          if (this.checkString("LZIP"))
            return { ext: "lz", mime: "application/x-lzip" };
          if (this.checkString("fLaC"))
            return { ext: "flac", mime: "audio/x-flac" };
          if (this.check([66, 80, 71, 251]))
            return { ext: "bpg", mime: "image/bpg" };
          if (this.checkString("wvpk"))
            return { ext: "wv", mime: "audio/wavpack" };
          if (this.checkString("%PDF")) {
            try {
              if (1350 === (await e.ignore(1350))) {
                var t;
                let n = new Uint8Array(
                  Math.min(0xa00000, e.fileInfo.size - 1350)
                );
                if (
                  (await e.readBuffer(n, { mayBeLess: !0 }),
                  (t = new TextEncoder().encode("AIPrivateData")),
                  -1 !==
                    (function (e, t) {
                      let n = e.length,
                        r = t.length;
                      if (0 === r || r > n) return -1;
                      let i = n - r;
                      for (let n = 0; n <= i; n++) {
                        let i = !0;
                        for (let o = 0; o < r; o++)
                          if (e[n + o] !== t[o]) {
                            i = !1;
                            break;
                          }
                        if (i) return n;
                      }
                      return -1;
                    })(n, t))
                )
                  return { ext: "ai", mime: "application/postscript" };
              }
            } catch (e) {
              if (!(e instanceof p)) throw e;
            }
            return { ext: "pdf", mime: "application/pdf" };
          }
          if (this.check([0, 97, 115, 109]))
            return { ext: "wasm", mime: "application/wasm" };
          if (this.check([73, 73])) {
            let e = await this.readTiffHeader(!1);
            if (e) return e;
          }
          if (this.check([77, 77])) {
            let e = await this.readTiffHeader(!0);
            if (e) return e;
          }
          if (this.checkString("MAC "))
            return { ext: "ape", mime: "audio/ape" };
          if (this.check([26, 69, 223, 163])) {
            async function n() {
              let t = await e.peekNumber(i),
                n = 128,
                r = 0;
              for (; (t & n) == 0 && 0 !== n; ) ++r, (n >>= 1);
              let o = new Uint8Array(r + 1);
              return await e.readBuffer(o), o;
            }
            async function r() {
              let e = await n(),
                t = await n();
              t[0] ^= 128 >> (t.length - 1);
              let r = Math.min(6, t.length),
                i = new DataView(e.buffer),
                o = new DataView(t.buffer, t.length - r, r);
              return { id: es(i), len: es(o) };
            }
            async function o(t) {
              for (; t > 0; ) {
                let n = await r();
                if (17026 === n.id)
                  return (await e.readToken(new f(n.len))).replaceAll(
                    /\00.*$/g,
                    ""
                  );
                await e.ignore(n.len), --t;
              }
            }
            let t = await r();
            switch (await o(t.len)) {
              case "webm":
                return { ext: "webm", mime: "video/webm" };
              case "matroska":
                return { ext: "mkv", mime: "video/x-matroska" };
              default:
                return;
            }
          }
          if (this.checkString("SQLi"))
            return { ext: "sqlite", mime: "application/x-sqlite3" };
          if (this.check([78, 69, 83, 26]))
            return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
          if (this.checkString("Cr24"))
            return {
              ext: "crx",
              mime: "application/x-google-chrome-extension",
            };
          if (this.checkString("MSCF") || this.checkString("ISc("))
            return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
          if (this.check([237, 171, 238, 219]))
            return { ext: "rpm", mime: "application/x-rpm" };
          if (this.check([197, 208, 211, 198]))
            return { ext: "eps", mime: "application/eps" };
          if (this.check([40, 181, 47, 253]))
            return { ext: "zst", mime: "application/zstd" };
          if (this.check([127, 69, 76, 70]))
            return { ext: "elf", mime: "application/x-elf" };
          if (this.check([33, 66, 68, 78]))
            return { ext: "pst", mime: "application/vnd.ms-outlook" };
          if (this.checkString("PAR1"))
            return { ext: "parquet", mime: "application/x-parquet" };
          if (this.check([207, 250, 237, 254]))
            return { ext: "macho", mime: "application/x-mach-binary" };
          if (this.check([4, 34, 77, 24]))
            return { ext: "lz4", mime: "application/x-lz4" };
          if (this.check([79, 84, 84, 79, 0]))
            return { ext: "otf", mime: "font/otf" };
          if (this.checkString("#!AMR"))
            return { ext: "amr", mime: "audio/amr" };
          if (this.checkString("{\\rtf"))
            return { ext: "rtf", mime: "application/rtf" };
          if (this.check([70, 76, 86, 1]))
            return { ext: "flv", mime: "video/x-flv" };
          if (this.checkString("IMPM"))
            return { ext: "it", mime: "audio/x-it" };
          if (
            this.checkString("-lh0-", { offset: 2 }) ||
            this.checkString("-lh1-", { offset: 2 }) ||
            this.checkString("-lh2-", { offset: 2 }) ||
            this.checkString("-lh3-", { offset: 2 }) ||
            this.checkString("-lh4-", { offset: 2 }) ||
            this.checkString("-lh5-", { offset: 2 }) ||
            this.checkString("-lh6-", { offset: 2 }) ||
            this.checkString("-lh7-", { offset: 2 }) ||
            this.checkString("-lzs-", { offset: 2 }) ||
            this.checkString("-lz4-", { offset: 2 }) ||
            this.checkString("-lz5-", { offset: 2 }) ||
            this.checkString("-lhd-", { offset: 2 })
          )
            return { ext: "lzh", mime: "application/x-lzh-compressed" };
          if (this.check([0, 0, 1, 186])) {
            if (this.check([33], { offset: 4, mask: [241] }))
              return { ext: "mpg", mime: "video/MP1S" };
            if (this.check([68], { offset: 4, mask: [196] }))
              return { ext: "mpg", mime: "video/MP2P" };
          }
          if (this.checkString("ITSF"))
            return { ext: "chm", mime: "application/vnd.ms-htmlhelp" };
          if (this.check([202, 254, 186, 190]))
            return { ext: "class", mime: "application/java-vm" };
          if (this.checkString("DRACO"))
            return { ext: "drc", mime: "application/vnd.google.draco" };
          if (this.check([253, 55, 122, 88, 90, 0]))
            return { ext: "xz", mime: "application/x-xz" };
          if (this.checkString("<?xml "))
            return { ext: "xml", mime: "application/xml" };
          if (this.check([55, 122, 188, 175, 39, 28]))
            return { ext: "7z", mime: "application/x-7z-compressed" };
          if (
            this.check([82, 97, 114, 33, 26, 7]) &&
            (0 === this.buffer[6] || 1 === this.buffer[6])
          )
            return { ext: "rar", mime: "application/x-rar-compressed" };
          if (this.checkString("solid "))
            return { ext: "stl", mime: "model/stl" };
          if (this.checkString("AC")) {
            let e = new f(4, "latin1").get(this.buffer, 2);
            if (e.match("^d*") && e >= 1e3 && e <= 1050)
              return { ext: "dwg", mime: "image/vnd.dwg" };
          }
          if (this.checkString("070707"))
            return { ext: "cpio", mime: "application/x-cpio" };
          if (this.checkString("BLENDER"))
            return { ext: "blend", mime: "application/x-blender" };
          if (this.checkString("!<arch>"))
            return (await e.ignore(8),
            "debian-binary" === (await e.readToken(new f(13, "ascii"))))
              ? { ext: "deb", mime: "application/x-deb" }
              : { ext: "ar", mime: "application/x-unix-archive" };
          if (
            this.checkString("WEBVTT") &&
            ["\n", "\r", "	", " ", "\0"].some((e) =>
              this.checkString(e, { offset: 6 })
            )
          )
            return { ext: "vtt", mime: "text/vtt" };
          if (this.check([137, 80, 78, 71, 13, 10, 26, 10])) {
            async function a() {
              return {
                length: await e.readToken(c),
                type: await e.readToken(new f(4, "latin1")),
              };
            }
            await e.ignore(8);
            do {
              let t = await a();
              if (t.length < 0) return;
              switch (t.type) {
                case "IDAT":
                  return { ext: "png", mime: "image/png" };
                case "acTL":
                  return { ext: "apng", mime: "image/apng" };
                default:
                  await e.ignore(t.length + 4);
              }
            } while (e.position + 8 < e.fileInfo.size);
            return { ext: "png", mime: "image/png" };
          }
          if (this.check([65, 82, 82, 79, 87, 49, 0, 0]))
            return { ext: "arrow", mime: "application/x-apache-arrow" };
          if (this.check([103, 108, 84, 70, 2, 0, 0, 0]))
            return { ext: "glb", mime: "model/gltf-binary" };
          if (
            this.check([102, 114, 101, 101], { offset: 4 }) ||
            this.check([109, 100, 97, 116], { offset: 4 }) ||
            this.check([109, 111, 111, 118], { offset: 4 }) ||
            this.check([119, 105, 100, 101], { offset: 4 })
          )
            return { ext: "mov", mime: "video/quicktime" };
          if (this.check([73, 73, 82, 79, 8, 0, 0, 0, 24]))
            return { ext: "orf", mime: "image/x-olympus-orf" };
          if (this.checkString("gimp xcf "))
            return { ext: "xcf", mime: "image/x-xcf" };
          if (
            this.checkString("ftyp", { offset: 4 }) &&
            (96 & this.buffer[8]) != 0
          ) {
            let e = new f(4, "latin1")
              .get(this.buffer, 8)
              .replace("\0", " ")
              .trim();
            switch (e) {
              case "avif":
              case "avis":
                return { ext: "avif", mime: "image/avif" };
              case "mif1":
                return { ext: "heic", mime: "image/heif" };
              case "msf1":
                return { ext: "heic", mime: "image/heif-sequence" };
              case "heic":
              case "heix":
                return { ext: "heic", mime: "image/heic" };
              case "hevc":
              case "hevx":
                return { ext: "heic", mime: "image/heic-sequence" };
              case "qt":
                return { ext: "mov", mime: "video/quicktime" };
              case "M4V":
              case "M4VH":
              case "M4VP":
                return { ext: "m4v", mime: "video/x-m4v" };
              case "M4P":
                return { ext: "m4p", mime: "video/mp4" };
              case "M4B":
                return { ext: "m4b", mime: "audio/mp4" };
              case "M4A":
                return { ext: "m4a", mime: "audio/x-m4a" };
              case "F4V":
                return { ext: "f4v", mime: "video/mp4" };
              case "F4P":
                return { ext: "f4p", mime: "video/mp4" };
              case "F4A":
                return { ext: "f4a", mime: "audio/mp4" };
              case "F4B":
                return { ext: "f4b", mime: "audio/mp4" };
              case "crx":
                return { ext: "cr3", mime: "image/x-canon-cr3" };
              default:
                if (e.startsWith("3g")) {
                  if (e.startsWith("3g2"))
                    return { ext: "3g2", mime: "video/3gpp2" };
                  return { ext: "3gp", mime: "video/3gpp" };
                }
                return { ext: "mp4", mime: "video/mp4" };
            }
          }
          if (this.check([82, 73, 70, 70])) {
            if (this.checkString("WEBP", { offset: 8 }))
              return { ext: "webp", mime: "image/webp" };
            if (this.check([65, 86, 73], { offset: 8 }))
              return { ext: "avi", mime: "video/vnd.avi" };
            if (this.check([87, 65, 86, 69], { offset: 8 }))
              return { ext: "wav", mime: "audio/wav" };
            if (this.check([81, 76, 67, 77], { offset: 8 }))
              return { ext: "qcp", mime: "audio/qcelp" };
          }
          if (this.check([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
            return { ext: "rw2", mime: "image/x-panasonic-rw2" };
          if (this.check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
            async function l() {
              let t = new Uint8Array(16);
              return (
                await e.readBuffer(t),
                { id: t, size: Number(await e.readToken(u)) }
              );
            }
            for (await e.ignore(30); e.position + 24 < e.fileInfo.size; ) {
              let t = await l(),
                n = t.size - 24;
              if (
                ep(
                  t.id,
                  [
                    145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12,
                    32, 83, 101,
                  ]
                )
              ) {
                let t = new Uint8Array(16);
                if (
                  ((n -= await e.readBuffer(t)),
                  ep(
                    t,
                    [
                      64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95,
                      92, 68, 43,
                    ]
                  ))
                )
                  return { ext: "asf", mime: "audio/x-ms-asf" };
                if (
                  ep(
                    t,
                    [
                      192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95,
                      92, 68, 43,
                    ]
                  )
                )
                  return { ext: "asf", mime: "video/x-ms-asf" };
                break;
              }
              await e.ignore(n);
            }
            return { ext: "asf", mime: "application/vnd.ms-asf" };
          }
          if (this.check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]))
            return { ext: "ktx", mime: "image/ktx" };
          if (
            (this.check([126, 16, 4]) || this.check([126, 24, 4])) &&
            this.check([48, 77, 73, 69], { offset: 4 })
          )
            return { ext: "mie", mime: "application/x-mie" };
          if (this.check([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 }))
            return { ext: "shp", mime: "application/x-esri-shape" };
          if (this.check([255, 79, 255, 81]))
            return { ext: "j2c", mime: "image/j2c" };
          if (this.check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10]))
            switch (
              (await e.ignore(20), await e.readToken(new f(4, "ascii")))
            ) {
              case "jp2 ":
                return { ext: "jp2", mime: "image/jp2" };
              case "jpx ":
                return { ext: "jpx", mime: "image/jpx" };
              case "jpm ":
                return { ext: "jpm", mime: "image/jpm" };
              case "mjp2":
                return { ext: "mj2", mime: "image/mj2" };
              default:
                return;
            }
          if (
            this.check([255, 10]) ||
            this.check([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])
          )
            return { ext: "jxl", mime: "image/jxl" };
          if (this.check([254, 255]))
            return this.check([0, 60, 0, 63, 0, 120, 0, 109, 0, 108], {
              offset: 2,
            })
              ? { ext: "xml", mime: "application/xml" }
              : void 0;
          if (this.check([208, 207, 17, 224, 161, 177, 26, 225]))
            return { ext: "cfb", mime: "application/x-cfb" };
          if (
            (await e.peekBuffer(this.buffer, {
              length: Math.min(256, e.fileInfo.size),
              mayBeLess: !0,
            }),
            this.check([97, 99, 115, 112], { offset: 36 }))
          )
            return { ext: "icc", mime: "application/vnd.iccprofile" };
          if (
            this.checkString("**ACE", { offset: 7 }) &&
            this.checkString("**", { offset: 12 })
          )
            return { ext: "ace", mime: "application/x-ace-compressed" };
          if (this.checkString("BEGIN:")) {
            if (this.checkString("VCARD", { offset: 6 }))
              return { ext: "vcf", mime: "text/vcard" };
            if (this.checkString("VCALENDAR", { offset: 6 }))
              return { ext: "ics", mime: "text/calendar" };
          }
          if (this.checkString("FUJIFILMCCD-RAW"))
            return { ext: "raf", mime: "image/x-fujifilm-raf" };
          if (this.checkString("Extended Module:"))
            return { ext: "xm", mime: "audio/x-xm" };
          if (this.checkString("Creative Voice File"))
            return { ext: "voc", mime: "audio/x-voc" };
          if (this.check([4, 0, 0, 0]) && this.buffer.length >= 16) {
            let e = new DataView(this.buffer.buffer).getUint32(12, !0);
            if (e > 12 && this.buffer.length >= e + 16)
              try {
                let t = new TextDecoder().decode(this.buffer.slice(16, e + 16));
                if (JSON.parse(t).files)
                  return { ext: "asar", mime: "application/x-asar" };
              } catch {}
          }
          return this.check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])
            ? { ext: "mxf", mime: "application/mxf" }
            : this.checkString("SCRM", { offset: 44 })
            ? { ext: "s3m", mime: "audio/x-s3m" }
            : (this.check([71]) && this.check([71], { offset: 188 })) ||
              (this.check([71], { offset: 4 }) &&
                this.check([71], { offset: 196 }))
            ? { ext: "mts", mime: "video/mp2t" }
            : this.check([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })
            ? { ext: "mobi", mime: "application/x-mobipocket-ebook" }
            : this.check([68, 73, 67, 77], { offset: 128 })
            ? { ext: "dcm", mime: "application/dicom" }
            : this.check([
                76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70,
              ])
            ? { ext: "lnk", mime: "application/x.ms.shortcut" }
            : this.check([
                98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0,
              ])
            ? { ext: "alias", mime: "application/x.apple.alias" }
            : this.checkString("Kaydara FBX Binary  \0")
            ? { ext: "fbx", mime: "application/x.autodesk.fbx" }
            : this.check([76, 80], { offset: 34 }) &&
              (this.check([0, 0, 1], { offset: 8 }) ||
                this.check([1, 0, 2], { offset: 8 }) ||
                this.check([2, 0, 2], { offset: 8 }))
            ? { ext: "eot", mime: "application/vnd.ms-fontobject" }
            : this.check([
                6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116,
                183, 29,
              ])
            ? { ext: "indd", mime: "application/x-indesign" }
            : (await e.peekBuffer(this.buffer, {
                length: Math.min(512, e.fileInfo.size),
                mayBeLess: !0,
              }),
              (function (e, t = 0) {
                let n = Number.parseInt(
                  new f(6).get(e, 148).replace(/\0.*$/, "").trim(),
                  8
                );
                if (Number.isNaN(n)) return !1;
                let r = 256;
                for (let n = t; n < t + 148; n++) r += e[n];
                for (let n = t + 156; n < t + 512; n++) r += e[n];
                return n === r;
              })(this.buffer))
            ? { ext: "tar", mime: "application/x-tar" }
            : this.check([255, 254])
            ? this.check([60, 0, 63, 0, 120, 0, 109, 0, 108, 0], { offset: 2 })
              ? { ext: "xml", mime: "application/xml" }
              : this.check(
                  [
                    255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85,
                    0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0,
                  ],
                  { offset: 2 }
                )
              ? { ext: "skp", mime: "application/vnd.sketchup.skp" }
              : void 0
            : this.checkString("-----BEGIN PGP MESSAGE-----")
            ? { ext: "pgp", mime: "application/pgp-encrypted" }
            : void 0;
        };
        detectImprecise = async (e) => {
          if (
            ((this.buffer = new Uint8Array(4100)),
            await e.peekBuffer(this.buffer, {
              length: Math.min(8, e.fileInfo.size),
              mayBeLess: !0,
            }),
            this.check([0, 0, 1, 186]) || this.check([0, 0, 1, 179]))
          )
            return { ext: "mpg", mime: "video/mpeg" };
          if (this.check([0, 1, 0, 0, 0]))
            return { ext: "ttf", mime: "font/ttf" };
          if (this.check([0, 0, 1, 0]))
            return { ext: "ico", mime: "image/x-icon" };
          if (this.check([0, 0, 2, 0]))
            return { ext: "cur", mime: "image/x-icon" };
          if (
            this.buffer.length >= 2 &&
            this.check([255, 224], { offset: 0, mask: [255, 224] })
          ) {
            if (this.check([16], { offset: 1, mask: [22] }))
              return (
                this.check([8], { offset: 1, mask: [8] }),
                { ext: "aac", mime: "audio/aac" }
              );
            if (this.check([2], { offset: 1, mask: [6] }))
              return { ext: "mp3", mime: "audio/mpeg" };
            if (this.check([4], { offset: 1, mask: [6] }))
              return { ext: "mp2", mime: "audio/mpeg" };
            if (this.check([6], { offset: 1, mask: [6] }))
              return { ext: "mp1", mime: "audio/mpeg" };
          }
        };
        async readTiffTag(e) {
          let t = await this.tokenizer.readToken(e ? a : o);
          switch ((this.tokenizer.ignore(10), t)) {
            case 50341:
              return { ext: "arw", mime: "image/x-sony-arw" };
            case 50706:
              return { ext: "dng", mime: "image/x-adobe-dng" };
          }
        }
        async readTiffIFD(e) {
          let t = await this.tokenizer.readToken(e ? a : o);
          for (let n = 0; n < t; ++n) {
            let t = await this.readTiffTag(e);
            if (t) return t;
          }
        }
        async readTiffHeader(e) {
          let t = (e ? a : o).get(this.buffer, 2),
            n = (e ? s : l).get(this.buffer, 4);
          if (42 === t) {
            if (n >= 6) {
              if (this.checkString("CR", { offset: 8 }))
                return { ext: "cr2", mime: "image/x-canon-cr2" };
              if (n >= 8) {
                let t = (e ? a : o).get(this.buffer, 8),
                  n = (e ? a : o).get(this.buffer, 10);
                if ((28 === t && 254 === n) || (31 === t && 11 === n))
                  return { ext: "nef", mime: "image/x-nikon-nef" };
              }
            }
            return (
              await this.tokenizer.ignore(n),
              (await this.readTiffIFD(e)) ?? { ext: "tif", mime: "image/tiff" }
            );
          }
          if (43 === t) return { ext: "tif", mime: "image/tiff" };
        }
      }
    },
    43884: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u });
      var r = n(74312),
        i = n.n(r),
        o = n(55729),
        a = n(46620),
        l = n(60693),
        s = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        c = function (e) {
          if (!e) return 0;
          var t = i()(e).valueOf() - Date.now();
          return t < 0 ? 0 : t;
        };
      let u = function (e) {
        void 0 === e && (e = {});
        var t = e || {},
          n = t.leftTime,
          r = t.targetDate,
          i = t.interval,
          u = void 0 === i ? 1e3 : i,
          f = t.onEnd,
          p = (0, o.useMemo)(
            function () {
              return "leftTime" in e
                ? (0, l.Et)(n) && n > 0
                  ? Date.now() + n
                  : void 0
                : r;
            },
            [n, r]
          ),
          d = s(
            (0, o.useState)(function () {
              return c(p);
            }),
            2
          ),
          m = d[0],
          h = d[1],
          g = (0, a.A)(f);
        (0, o.useEffect)(
          function () {
            if (!p) return void h(0);
            h(c(p));
            var e = setInterval(function () {
              var t,
                n = c(p);
              h(n),
                0 === n &&
                  (clearInterval(e), null == (t = g.current) || t.call(g));
            }, u);
            return function () {
              return clearInterval(e);
            };
          },
          [p, u]
        );
        var y = (0, o.useMemo)(
          function () {
            return {
              days: Math.floor(m / 864e5),
              hours: Math.floor(m / 36e5) % 24,
              minutes: Math.floor(m / 6e4) % 60,
              seconds: Math.floor(m / 1e3) % 60,
              milliseconds: Math.floor(m) % 1e3,
            };
          },
          [m]
        );
        return [m, y];
      };
    },
    46620: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i });
      var r = n(55729);
      let i = function (e) {
        var t = (0, r.useRef)(e);
        return (t.current = e), t;
      };
    },
    46978: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(55729),
        i = n(39084);
      function o(e) {
        let t = (0, r.useRef)(null),
          n = (0, r.useRef)(null);
        return (
          n.current && n.current.update(e),
          (0, r.useEffect)(
            () => (
              (n.current = new (0, i.LC)({ ...e, ref: t })),
              () => {
                n.current = null;
              }
            ),
            []
          ),
          r.createElement("div", { ref: t })
        );
      }
    },
    47687: (e, t, n) => {
      var r = n(12364),
        i = n(23356);
      e.exports = function (e, t, n) {
        var o = !0,
          a = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          i(n) &&
            ((o = "leading" in n ? !!n.leading : o),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(e, t, { leading: o, maxWait: t, trailing: a })
        );
      };
    },
    49914: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => N });
      var r = n(55729),
        i = n(61946),
        o = n(94408),
        a = Object.defineProperty,
        l = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (e, t, n) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        d = (e, t) => {
          for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
          if (c) for (var n of c(t)) f.call(t, n) && p(e, n, t[n]);
          return e;
        };
      function m(e) {
        var {
            size: t,
            value: n,
            offset: a,
            sum: p,
            thickness: m,
            root: h,
            color: g,
            lineRoundCaps: y,
            tooltip: v,
          } = e,
          b = ((e, t) => {
            var n = {};
            for (var r in e) u.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && c)
              for (var r of c(e))
                0 > t.indexOf(r) && f.call(e, r) && (n[r] = e[r]);
            return n;
          })(e, [
            "size",
            "value",
            "offset",
            "sum",
            "thickness",
            "root",
            "color",
            "lineRoundCaps",
            "tooltip",
          ]);
        let x = (0, i.xd)(),
          w = x.fn.themeColor(
            g || ("dark" === x.colorScheme ? "dark" : "gray"),
            g ? x.fn.primaryShade() : "dark" === x.colorScheme ? 4 : 1,
            !1
          );
        return r.createElement(
          o.m.Floating,
          { disabled: !v, label: v },
          r.createElement(
            "circle",
            d(
              l(
                d({}, b),
                s({
                  fill: "none",
                  strokeLinecap: y ? "round" : "butt",
                  stroke: w,
                })
              ),
              (function ({
                size: e,
                thickness: t,
                sum: n,
                value: r,
                root: i,
                offset: o,
              }) {
                let a = (0.9 * e - 2 * t) / 2,
                  l = (Math.PI * a * 2) / 100,
                  s = i
                    ? `${(100 - n) * l}, ${n * l}`
                    : `${r * l}, ${(100 - r) * l}`;
                return {
                  strokeWidth: t,
                  cx: e / 2,
                  cy: e / 2,
                  r: a,
                  transform: i ? `scale(1, -1) translate(0, -${e})` : null,
                  strokeDasharray: s,
                  strokeDashoffset: i ? 0 : o,
                };
              })({
                sum: p,
                size: t,
                thickness: m,
                value: n,
                offset: a,
                root: h,
              })
            )
          )
        );
      }
      m.displayName = "@mantine/core/Curve";
      var h = Object.defineProperty,
        g = Object.defineProperties,
        y = Object.getOwnPropertyDescriptors,
        v = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        w = (e, t, n) =>
          t in e
            ? h(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        k = (e, t) => {
          for (var n in t || (t = {})) b.call(t, n) && w(e, n, t[n]);
          if (v) for (var n of v(t)) x.call(t, n) && w(e, n, t[n]);
          return e;
        },
        O = (e, t) => g(e, y(t)),
        E = (0, n(38169).r)({
          root: { position: "relative" },
          label: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }),
        S = n(50433),
        C = Object.defineProperty,
        P = Object.defineProperties,
        A = Object.getOwnPropertyDescriptors,
        j = Object.getOwnPropertySymbols,
        z = Object.prototype.hasOwnProperty,
        R = Object.prototype.propertyIsEnumerable,
        T = (e, t, n) =>
          t in e
            ? C(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        I = (e, t) => {
          for (var n in t || (t = {})) z.call(t, n) && T(e, n, t[n]);
          if (j) for (var n of j(t)) R.call(t, n) && T(e, n, t[n]);
          return e;
        };
      let D = { size: 120, thickness: 12 },
        N = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("RingProgress", D, e),
            {
              className: o,
              style: a,
              label: l,
              sections: s,
              size: c,
              thickness: u,
              classNames: f,
              styles: p,
              roundCaps: d,
              rootColor: h,
              unstyled: g,
            } = n,
            y = ((e, t) => {
              var n = {};
              for (var r in e)
                z.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && j)
                for (var r of j(e))
                  0 > t.indexOf(r) && R.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "style",
              "label",
              "sections",
              "size",
              "thickness",
              "classNames",
              "styles",
              "roundCaps",
              "rootColor",
              "unstyled",
            ]),
            { classes: v, cx: b } = E(null, {
              classNames: f,
              styles: p,
              unstyled: g,
              name: "RingProgress",
            }),
            x = (function ({
              size: e,
              thickness: t,
              sections: n,
              renderRoundedLineCaps: r,
              rootColor: i,
            }) {
              let o = n.reduce((e, t) => e + t.value, 0),
                a = ((0.9 * e - 2 * t) / 2) * Math.PI * 2,
                l = a,
                s = [],
                c = [];
              for (let e = 0; e < n.length; e += 1)
                s.push({ sum: o, offset: l, data: n[e], root: !1 }),
                  (l -= (n[e].value / 100) * a);
              if (
                (s.push({ sum: o, offset: l, data: { color: i }, root: !0 }),
                c.push(O(k({}, s[s.length - 1]), { lineRoundCaps: !1 })),
                s.length > 2)
              ) {
                c.push(O(k({}, s[0]), { lineRoundCaps: r })),
                  c.push(O(k({}, s[s.length - 2]), { lineRoundCaps: r }));
                for (let e = 1; e <= s.length - 3; e += 1)
                  c.push(O(k({}, s[e]), { lineRoundCaps: !1 }));
              } else c.push(O(k({}, s[0]), { lineRoundCaps: r }));
              return c;
            })({
              size: c,
              thickness: u,
              sections: s,
              renderRoundedLineCaps: d,
              rootColor: h,
            }).map(
              ({ data: e, sum: t, root: n, lineRoundCaps: i, offset: o }, a) =>
                r.createElement(
                  m,
                  P(
                    I({}, e),
                    A({
                      key: a,
                      size: c,
                      thickness: u,
                      sum: t,
                      offset: o,
                      color: null == e ? void 0 : e.color,
                      root: n,
                      lineRoundCaps: i,
                    })
                  )
                )
            );
          return r.createElement(
            S.a,
            I(
              {
                style: I({ width: c, height: c }, a),
                className: b(v.root, o),
                ref: t,
              },
              y
            ),
            r.createElement(
              "svg",
              { width: c, height: c, style: { transform: "rotate(-90deg)" } },
              x
            ),
            l &&
              r.createElement(
                "div",
                { className: v.label, style: { right: 2 * u, left: 2 * u } },
                l
              )
          );
        });
      N.displayName = "@mantine/core/RingProgress";
    },
    52056: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(55729),
        i = n(54455),
        o = "function" == typeof IntersectionObserver,
        a = new Map(),
        l = [];
      function s(e) {
        let { rootRef: t, rootMargin: n, disabled: s } = e,
          c = s || !o,
          [u, f] = (0, r.useState)(!1),
          p = (0, r.useRef)(null),
          d = (0, r.useCallback)((e) => {
            p.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (o) {
              if (c || u) return;
              let e = p.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: i,
                    elements: o,
                  } = (function (e) {
                    let t,
                      n = { root: e.root || null, margin: e.rootMargin || "" },
                      r = l.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = a.get(r))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: i,
                      }),
                      l.push(n),
                      a.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    o.set(e, t),
                    i.observe(e),
                    function () {
                      if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                        i.disconnect(), a.delete(r);
                        let e = l.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!u) {
              let e = (0, i.requestIdleCallback)(() => f(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [c, n, t, u, p.current]),
          [
            d,
            u,
            (0, r.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    53922: function (e, t, n) {
      var r;
      !(function (e, i, o) {
        function a(e) {
          var t = this,
            n = "";
          (t.next = function () {
            var e = t.x ^ (t.x >>> 2);
            return (
              (t.x = t.y),
              (t.y = t.z),
              (t.z = t.w),
              (t.w = t.v),
              ((t.d = (t.d + 362437) | 0) +
                (t.v = t.v ^ (t.v << 4) ^ (e ^ (e << 1)))) |
                0
            );
          }),
            (t.x = 0),
            (t.y = 0),
            (t.z = 0),
            (t.w = 0),
            (t.v = 0),
            e === (0 | e) ? (t.x = e) : (n += e);
          for (var r = 0; r < n.length + 64; r++)
            (t.x ^= n.charCodeAt(r)),
              r == n.length && (t.d = (t.x << 10) ^ (t.x >>> 4)),
              t.next();
        }
        function l(e, t) {
          return (
            (t.x = e.x),
            (t.y = e.y),
            (t.z = e.z),
            (t.w = e.w),
            (t.v = e.v),
            (t.d = e.d),
            t
          );
        }
        function s(e, t) {
          var n = new a(e),
            r = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 0x100000000;
            };
          return (
            (i.double = function () {
              do
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 0x100000000) /
                  2097152;
              while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            r &&
              ("object" == typeof r && l(r, n),
              (i.state = function () {
                return l(n, {});
              })),
            i
          );
        }
        i && i.exports
          ? (i.exports = s)
          : n.amdD && n.amdO
          ? void 0 ===
              (r = function () {
                return s;
              }.call(t, n, t, i)) || (i.exports = r)
          : (this.xorwow = s);
      })(0, (e = n.nmd(e)), n.amdD);
    },
    54026: (e, t) => {
      "use strict";
      t.A = function (e, t) {
        if (e && t) {
          var n = Array.isArray(t) ? t : t.split(",");
          if (0 === n.length) return !0;
          var r = e.name || "",
            i = (e.type || "").toLowerCase(),
            o = i.replace(/\/.*$/, "");
          return n.some(function (e) {
            var t = e.trim().toLowerCase();
            return "." === t.charAt(0)
              ? r.toLowerCase().endsWith(t)
              : t.endsWith("/*")
              ? o === t.replace(/\/.*$/, "")
              : i === t;
          });
        }
        return !0;
      };
    },
    55272: (e) => {
      "use strict";
      e.exports = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
          if (t.constructor !== n.constructor) return !1;
          if (Array.isArray(t)) {
            if ((r = t.length) != n.length) return !1;
            for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === n.source && t.flags === n.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === n.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === n.toString();
          if ((r = (o = Object.keys(t)).length) !== Object.keys(n).length)
            return !1;
          for (i = r; 0 != i--; )
            if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
          for (i = r; 0 != i--; ) {
            var r,
              i,
              o,
              a = o[i];
            if (!e(t[a], n[a])) return !1;
          }
          return !0;
        }
        return t != t && n != n;
      };
    },
    56121: (e, t, n) => {
      e.exports = n(61847)();
    },
    57857: function (e, t, n) {
      var r;
      !(function (e, i, o) {
        function a(e) {
          var t,
            n = this,
            r =
              ((t = 0xefc8249d),
              function (e) {
                e = String(e);
                for (var n = 0; n < e.length; n++) {
                  var r = 0.02519603282416938 * (t += e.charCodeAt(n));
                  (t = r >>> 0),
                    (r -= t),
                    (r *= t),
                    (t = r >>> 0),
                    (r -= t),
                    (t += 0x100000000 * r);
                }
                return (t >>> 0) * 23283064365386963e-26;
              });
          (n.next = function () {
            var e = 2091639 * n.s0 + 23283064365386963e-26 * n.c;
            return (n.s0 = n.s1), (n.s1 = n.s2), (n.s2 = e - (n.c = 0 | e));
          }),
            (n.c = 1),
            (n.s0 = r(" ")),
            (n.s1 = r(" ")),
            (n.s2 = r(" ")),
            (n.s0 -= r(e)),
            n.s0 < 0 && (n.s0 += 1),
            (n.s1 -= r(e)),
            n.s1 < 0 && (n.s1 += 1),
            (n.s2 -= r(e)),
            n.s2 < 0 && (n.s2 += 1);
        }
        function l(e, t) {
          return (t.c = e.c), (t.s0 = e.s0), (t.s1 = e.s1), (t.s2 = e.s2), t;
        }
        function s(e, t) {
          var n = new a(e),
            r = t && t.state,
            i = n.next;
          return (
            (i.int32 = function () {
              return (0x100000000 * n.next()) | 0;
            }),
            (i.double = function () {
              return i() + ((2097152 * i()) | 0) * 11102230246251565e-32;
            }),
            (i.quick = i),
            r &&
              ("object" == typeof r && l(r, n),
              (i.state = function () {
                return l(n, {});
              })),
            i
          );
        }
        i && i.exports
          ? (i.exports = s)
          : n.amdD && n.amdO
          ? void 0 ===
              (r = function () {
                return s;
              }.call(t, n, t, i)) || (i.exports = r)
          : (this.alea = s);
      })(0, (e = n.nmd(e)), n.amdD);
    },
    58393: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => m });
      var r = n(55729),
        i = n(61946),
        o = n(98863),
        a = n(51663),
        l = n(50433),
        s = Object.defineProperty,
        c = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (e, t, n) =>
          t in e
            ? s(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let d = (0, r.forwardRef)((e, t) => {
        let n = (0, i.a1)("Center", {}, e),
          { inline: a, sx: s } = n,
          d = ((e, t) => {
            var n = {};
            for (var r in e) u.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && c)
              for (var r of c(e))
                0 > t.indexOf(r) && f.call(e, r) && (n[r] = e[r]);
            return n;
          })(n, ["inline", "sx"]);
        return r.createElement(
          l.a,
          ((e, t) => {
            for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
            if (c) for (var n of c(t)) f.call(t, n) && p(e, n, t[n]);
            return e;
          })(
            {
              ref: t,
              sx: [
                {
                  display: a ? "inline-flex" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                ...(0, o.n)(s),
              ],
            },
            d
          )
        );
      });
      d.displayName = "@mantine/core/Center";
      let m = (0, a.K)(d);
    },
    58555: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => S });
      var r = n(55729),
        i = n(61946),
        o = n(85607),
        a = n(38169),
        l = Object.defineProperty,
        s = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        d = (e, t, n) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        m = (e, t) => {
          for (var n in t || (t = {})) f.call(t, n) && d(e, n, t[n]);
          if (u) for (var n of u(t)) p.call(t, n) && d(e, n, t[n]);
          return e;
        },
        h = (e, t) => s(e, c(t)),
        g = (0, a.r)((e, { color: t, radius: n, variant: r }) => ({
          root: m(
            h(m({}, e.fn.fontStyles()), {
              position: "relative",
              overflow: "hidden",
              padding: `${e.spacing.sm}px ${e.spacing.md}px`,
              borderRadius: e.fn.radius(n),
              border: "1px solid transparent",
            }),
            (function ({ variant: e, color: t, theme: n }) {
              if ("filled" === e)
                return {
                  backgroundColor: n.fn.variant({ variant: "filled", color: t })
                    .background,
                  color: n.white,
                };
              if ("outline" === e) {
                let e = n.fn.variant({ variant: "outline", color: t });
                return {
                  color: e.color,
                  borderColor: e.border,
                  backgroundColor:
                    "dark" === n.colorScheme ? n.colors.dark[6] : n.white,
                };
              }
              let r = n.fn.variant({ variant: "light", color: t });
              return { backgroundColor: r.background, color: r.color };
            })({ variant: r, color: t, theme: e })
          ),
          wrapper: { display: "flex" },
          body: { flex: 1 },
          title: {
            boxSizing: "border-box",
            margin: 0,
            marginBottom: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            lineHeight: e.lineHeight,
            fontSize: e.fontSizes.sm,
            fontWeight: 700,
            "&[data-with-close-button]": { paddingRight: e.spacing.md },
          },
          label: {
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
          icon: {
            lineHeight: 1,
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginRight: e.spacing.md,
            marginTop: 1,
          },
          message: h(m({}, e.fn.fontStyles()), {
            lineHeight: e.lineHeight,
            textOverflow: "ellipsis",
            overflow: "hidden",
            fontSize: e.fontSizes.sm,
            color:
              "filled" === r
                ? e.white
                : "dark" === e.colorScheme
                ? "light" === r
                  ? e.white
                  : e.colors.dark[0]
                : e.black,
          }),
          closeButton: {
            position: "absolute",
            top: e.spacing.sm,
            right: e.spacing.sm,
            color: "inherit",
          },
        })),
        y = n(50433),
        v = n(45003),
        b = Object.defineProperty,
        x = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        O = (e, t, n) =>
          t in e
            ? b(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let E = { variant: "light" },
        S = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("Alert", E, e),
            {
              id: a,
              className: l,
              title: s,
              variant: c,
              children: u,
              color: f,
              classNames: p,
              icon: d,
              styles: m,
              onClose: h,
              radius: b,
              withCloseButton: S,
              closeButtonLabel: C,
              unstyled: P,
            } = n,
            A = ((e, t) => {
              var n = {};
              for (var r in e)
                w.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && x)
                for (var r of x(e))
                  0 > t.indexOf(r) && k.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "id",
              "className",
              "title",
              "variant",
              "children",
              "color",
              "classNames",
              "icon",
              "styles",
              "onClose",
              "radius",
              "withCloseButton",
              "closeButtonLabel",
              "unstyled",
            ]),
            { classes: j, cx: z } = g(
              { color: f, radius: b, variant: c },
              { classNames: p, styles: m, unstyled: P, name: "Alert" }
            ),
            R = (0, o.B)(a),
            T = s && `${R}-title`,
            I = `${R}-body`;
          return r.createElement(
            y.a,
            ((e, t) => {
              for (var n in t || (t = {})) w.call(t, n) && O(e, n, t[n]);
              if (x) for (var n of x(t)) k.call(t, n) && O(e, n, t[n]);
              return e;
            })(
              {
                id: R,
                role: "alert",
                "aria-labelledby": T,
                "aria-describedby": I,
                className: z(j.root, j[c], l),
                ref: t,
              },
              A
            ),
            r.createElement(
              "div",
              { className: j.wrapper },
              d && r.createElement("div", { className: j.icon }, d),
              r.createElement(
                "div",
                { className: j.body },
                s &&
                  r.createElement(
                    "div",
                    {
                      className: j.title,
                      "data-with-close-button": S || void 0,
                    },
                    r.createElement("span", { id: T, className: j.label }, s)
                  ),
                S &&
                  r.createElement(v.J, {
                    className: j.closeButton,
                    onClick: h,
                    variant: "transparent",
                    size: 16,
                    iconSize: 16,
                    "aria-label": C,
                  }),
                r.createElement("div", { id: I, className: j.message }, u)
              )
            )
          );
        });
      S.displayName = "@mantine/core/Alert";
    },
    58597: (e, t, n) => {
      "use strict";
      n.d(t, { VB: () => et });
      var r = n(55729),
        i = n(56121),
        o = n.n(i);
      function a(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var n,
          r,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = l(0)),
          (a.throw = l(1)),
          (a.return = l(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function l(l) {
          return function (s) {
            var c = [l, s];
            if (n) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), c[0] && (o = 0)), o; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & c[0]
                        ? r.return
                        : c[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                    !(i = i.call(r, c[1])).done)
                )
                  return i;
                switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                  case 0:
                  case 1:
                    i = c;
                    break;
                  case 4:
                    return o.label++, { value: c[1], done: !1 };
                  case 5:
                    o.label++, (r = c[1]), (c = [0]);
                    continue;
                  case 7:
                    (c = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                      (6 === c[0] || 2 === c[0])
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                      o.label = c[1];
                      break;
                    }
                    if (6 === c[0] && o.label < i[1]) {
                      (o.label = i[1]), (i = c);
                      break;
                    }
                    if (i && o.label < i[2]) {
                      (o.label = i[2]), o.ops.push(c);
                      break;
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                c = t.call(e, o);
              } catch (e) {
                (c = [6, e]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & c[0]) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
          };
        }
      }
      Object.create;
      function s(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function c(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var u =
        ("function" == typeof SuppressedError && SuppressedError,
        new Map([
          ["aac", "audio/aac"],
          ["abw", "application/x-abiword"],
          ["arc", "application/x-freearc"],
          ["avif", "image/avif"],
          ["avi", "video/x-msvideo"],
          ["azw", "application/vnd.amazon.ebook"],
          ["bin", "application/octet-stream"],
          ["bmp", "image/bmp"],
          ["bz", "application/x-bzip"],
          ["bz2", "application/x-bzip2"],
          ["cda", "application/x-cdf"],
          ["csh", "application/x-csh"],
          ["css", "text/css"],
          ["csv", "text/csv"],
          ["doc", "application/msword"],
          [
            "docx",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ],
          ["eot", "application/vnd.ms-fontobject"],
          ["epub", "application/epub+zip"],
          ["gz", "application/gzip"],
          ["gif", "image/gif"],
          ["heic", "image/heic"],
          ["heif", "image/heif"],
          ["htm", "text/html"],
          ["html", "text/html"],
          ["ico", "image/vnd.microsoft.icon"],
          ["ics", "text/calendar"],
          ["jar", "application/java-archive"],
          ["jpeg", "image/jpeg"],
          ["jpg", "image/jpeg"],
          ["js", "text/javascript"],
          ["json", "application/json"],
          ["jsonld", "application/ld+json"],
          ["mid", "audio/midi"],
          ["midi", "audio/midi"],
          ["mjs", "text/javascript"],
          ["mp3", "audio/mpeg"],
          ["mp4", "video/mp4"],
          ["mpeg", "video/mpeg"],
          ["mpkg", "application/vnd.apple.installer+xml"],
          ["odp", "application/vnd.oasis.opendocument.presentation"],
          ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
          ["odt", "application/vnd.oasis.opendocument.text"],
          ["oga", "audio/ogg"],
          ["ogv", "video/ogg"],
          ["ogx", "application/ogg"],
          ["opus", "audio/opus"],
          ["otf", "font/otf"],
          ["png", "image/png"],
          ["pdf", "application/pdf"],
          ["php", "application/x-httpd-php"],
          ["ppt", "application/vnd.ms-powerpoint"],
          [
            "pptx",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          ],
          ["rar", "application/vnd.rar"],
          ["rtf", "application/rtf"],
          ["sh", "application/x-sh"],
          ["svg", "image/svg+xml"],
          ["swf", "application/x-shockwave-flash"],
          ["tar", "application/x-tar"],
          ["tif", "image/tiff"],
          ["tiff", "image/tiff"],
          ["ts", "video/mp2t"],
          ["ttf", "font/ttf"],
          ["txt", "text/plain"],
          ["vsd", "application/vnd.visio"],
          ["wav", "audio/wav"],
          ["weba", "audio/webm"],
          ["webm", "video/webm"],
          ["webp", "image/webp"],
          ["woff", "font/woff"],
          ["woff2", "font/woff2"],
          ["xhtml", "application/xhtml+xml"],
          ["xls", "application/vnd.ms-excel"],
          [
            "xlsx",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
          ["xml", "application/xml"],
          ["xul", "application/vnd.mozilla.xul+xml"],
          ["zip", "application/zip"],
          ["7z", "application/x-7z-compressed"],
          ["mkv", "video/x-matroska"],
          ["mov", "video/quicktime"],
          ["msg", "application/vnd.ms-outlook"],
        ]));
      function f(e, t) {
        var n = (function (e) {
          var t = e.name;
          if (t && -1 !== t.lastIndexOf(".") && !e.type) {
            var n = t.split(".").pop().toLowerCase(),
              r = u.get(n);
            r &&
              Object.defineProperty(e, "type", {
                value: r,
                writable: !1,
                configurable: !1,
                enumerable: !0,
              });
          }
          return e;
        })(e);
        if ("string" != typeof n.path) {
          var r = e.webkitRelativePath;
          Object.defineProperty(n, "path", {
            value:
              "string" == typeof t
                ? t
                : "string" == typeof r && r.length > 0
                ? r
                : e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0,
          });
        }
        return n;
      }
      var p = [".DS_Store", "Thumbs.db"];
      function d(e) {
        return "object" == typeof e && null !== e;
      }
      function m(e) {
        return e.filter(function (e) {
          return -1 === p.indexOf(e.name);
        });
      }
      function h(e) {
        if (null === e) return [];
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }
      function g(e) {
        if ("function" != typeof e.webkitGetAsEntry) return y(e);
        var t = e.webkitGetAsEntry();
        return t && t.isDirectory ? b(t) : y(e);
      }
      function y(e) {
        var t = e.getAsFile();
        return t
          ? Promise.resolve(f(t))
          : Promise.reject("".concat(e, " is not a File"));
      }
      function v(e) {
        return a(this, void 0, void 0, function () {
          return l(this, function (t) {
            return [
              2,
              e.isDirectory
                ? b(e)
                : (function (e) {
                    return a(this, void 0, void 0, function () {
                      return l(this, function (t) {
                        return [
                          2,
                          new Promise(function (t, n) {
                            e.file(
                              function (n) {
                                t(f(n, e.fullPath));
                              },
                              function (e) {
                                n(e);
                              }
                            );
                          }),
                        ];
                      });
                    });
                  })(e),
            ];
          });
        });
      }
      function b(e) {
        var t = e.createReader();
        return new Promise(function (e, n) {
          var r = [];
          !(function i() {
            var o = this;
            t.readEntries(
              function (t) {
                return a(o, void 0, void 0, function () {
                  var o;
                  return l(this, function (a) {
                    switch (a.label) {
                      case 0:
                        if (t.length) return [3, 5];
                        a.label = 1;
                      case 1:
                        return a.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                      case 2:
                        return e(a.sent()), [3, 4];
                      case 3:
                        return n(a.sent()), [3, 4];
                      case 4:
                        return [3, 6];
                      case 5:
                        (o = Promise.all(t.map(v))),
                          r.push(o),
                          i(),
                          (a.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function (e) {
                n(e);
              }
            );
          })();
        });
      }
      var x = n(54026);
      function w(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return P(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          C(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                E(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function E(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function S(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              i =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != i) {
              var o = [],
                a = !0,
                l = !1;
              try {
                for (
                  i = i.call(e);
                  !(a = (n = i.next()).done) &&
                  (o.push(n.value), !t || o.length !== t);
                  a = !0
                );
              } catch (e) {
                (l = !0), (r = e);
              } finally {
                try {
                  a || null == i.return || i.return();
                } finally {
                  if (l) throw r;
                }
              }
              return o;
            }
          })(e, t) ||
          C(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function C(e, t) {
        if (e) {
          if ("string" == typeof e) return P(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return P(e, t);
        }
      }
      function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var A = function (e) {
          var t = Array.isArray(
            (e = Array.isArray(e) && 1 === e.length ? e[0] : e)
          )
            ? "one of ".concat(e.join(", "))
            : e;
          return {
            code: "file-invalid-type",
            message: "File type must be ".concat(t),
          };
        },
        j = function (e) {
          return {
            code: "file-too-large",
            message: "File is larger than "
              .concat(e, " ")
              .concat(1 === e ? "byte" : "bytes"),
          };
        },
        z = function (e) {
          return {
            code: "file-too-small",
            message: "File is smaller than "
              .concat(e, " ")
              .concat(1 === e ? "byte" : "bytes"),
          };
        },
        R = { code: "too-many-files", message: "Too many files" };
      function T(e, t) {
        var n = "application/x-moz-file" === e.type || (0, x.A)(e, t);
        return [n, n ? null : A(t)];
      }
      function I(e, t, n) {
        if (D(e.size)) {
          if (D(t) && D(n)) {
            if (e.size > n) return [!1, j(n)];
            if (e.size < t) return [!1, z(t)];
          } else if (D(t) && e.size < t) return [!1, z(t)];
          else if (D(n) && e.size > n) return [!1, j(n)];
        }
        return [!0, null];
      }
      function D(e) {
        return null != e;
      }
      function N(e) {
        return "function" == typeof e.isPropagationStopped
          ? e.isPropagationStopped()
          : void 0 !== e.cancelBubble && e.cancelBubble;
      }
      function L(e) {
        return e.dataTransfer
          ? Array.prototype.some.call(e.dataTransfer.types, function (e) {
              return "Files" === e || "application/x-moz-file" === e;
            })
          : !!e.target && !!e.target.files;
      }
      function M(e) {
        e.preventDefault();
      }
      function F() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          for (
            var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          return t.some(function (t) {
            return !N(e) && t && t.apply(void 0, [e].concat(r)), N(e);
          });
        };
      }
      function _(e) {
        return (
          "audio/*" === e ||
          "video/*" === e ||
          "image/*" === e ||
          "text/*" === e ||
          /\w+\/[-+.\w]+/g.test(e)
        );
      }
      function B(e) {
        return /^.*\.[\w]+$/.test(e);
      }
      var H = ["children"],
        U = ["open"],
        $ = [
          "refKey",
          "role",
          "onKeyDown",
          "onFocus",
          "onBlur",
          "onClick",
          "onDragEnter",
          "onDragOver",
          "onDragLeave",
          "onDrop",
        ],
        W = ["refKey", "onChange", "onClick"];
      function V(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              i =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != i) {
              var o = [],
                a = !0,
                l = !1;
              try {
                for (
                  i = i.call(e);
                  !(a = (n = i.next()).done) &&
                  (o.push(n.value), !t || o.length !== t);
                  a = !0
                );
              } catch (e) {
                (l = !0), (r = e);
              } finally {
                try {
                  a || null == i.return || i.return();
                } finally {
                  if (l) throw r;
                }
              }
              return o;
            }
          })(e, t) ||
          q(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function q(e, t) {
        if (e) {
          if ("string" == typeof e) return Y(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return Y(e, t);
        }
      }
      function Y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                X(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function X(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Z(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
      var Q = (0, r.forwardRef)(function (e, t) {
        var n = e.children,
          i = et(Z(e, H)),
          o = i.open,
          a = Z(i, U);
        return (
          (0, r.useImperativeHandle)(
            t,
            function () {
              return { open: o };
            },
            [o]
          ),
          r.createElement(r.Fragment, null, n(G(G({}, a), {}, { open: o })))
        );
      });
      Q.displayName = "Dropzone";
      var J = {
        disabled: !1,
        getFilesFromEvent: function (e) {
          return a(this, void 0, void 0, function () {
            return l(this, function (t) {
              var n;
              if (d(e) && d(e.dataTransfer))
                return [
                  2,
                  (function (e, t) {
                    return a(this, void 0, void 0, function () {
                      var n;
                      return l(this, function (r) {
                        switch (r.label) {
                          case 0:
                            if (!e.items) return [3, 2];
                            if (
                              ((n = h(e.items).filter(function (e) {
                                return "file" === e.kind;
                              })),
                              "drop" !== t)
                            )
                              return [2, n];
                            return [4, Promise.all(n.map(g))];
                          case 1:
                            return [
                              2,
                              m(
                                (function e(t) {
                                  return t.reduce(function (t, n) {
                                    return c(
                                      c([], s(t), !1),
                                      s(Array.isArray(n) ? e(n) : [n]),
                                      !1
                                    );
                                  }, []);
                                })(r.sent())
                              ),
                            ];
                          case 2:
                            return [
                              2,
                              m(
                                h(e.files).map(function (e) {
                                  return f(e);
                                })
                              ),
                            ];
                        }
                      });
                    });
                  })(e.dataTransfer, e.type),
                ];
              if (d((n = e)) && d(n.target))
                return [
                  2,
                  h(e.target.files).map(function (e) {
                    return f(e);
                  }),
                ];
              return Array.isArray(e) &&
                e.every(function (e) {
                  return "getFile" in e && "function" == typeof e.getFile;
                })
                ? [
                    2,
                    (function (e) {
                      return a(this, void 0, void 0, function () {
                        return l(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [
                                4,
                                Promise.all(
                                  e.map(function (e) {
                                    return e.getFile();
                                  })
                                ),
                              ];
                            case 1:
                              return [
                                2,
                                t.sent().map(function (e) {
                                  return f(e);
                                }),
                              ];
                          }
                        });
                      });
                    })(e),
                  ]
                : [2, []];
            });
          });
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !0,
        autoFocus: !1,
      };
      (Q.defaultProps = J),
        (Q.propTypes = {
          children: o().func,
          accept: o().objectOf(o().arrayOf(o().string)),
          multiple: o().bool,
          preventDropOnDocument: o().bool,
          noClick: o().bool,
          noKeyboard: o().bool,
          noDrag: o().bool,
          noDragEventsBubbling: o().bool,
          minSize: o().number,
          maxSize: o().number,
          maxFiles: o().number,
          disabled: o().bool,
          getFilesFromEvent: o().func,
          onFileDialogCancel: o().func,
          onFileDialogOpen: o().func,
          useFsAccessApi: o().bool,
          autoFocus: o().bool,
          onDragEnter: o().func,
          onDragLeave: o().func,
          onDragOver: o().func,
          onDrop: o().func,
          onDropAccepted: o().func,
          onDropRejected: o().func,
          onError: o().func,
          validator: o().func,
        });
      var ee = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        acceptedFiles: [],
        fileRejections: [],
      };
      function et() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = G(G({}, J), e),
          n = t.accept,
          i = t.disabled,
          o = t.getFilesFromEvent,
          a = t.maxSize,
          l = t.minSize,
          s = t.multiple,
          c = t.maxFiles,
          u = t.onDragEnter,
          f = t.onDragLeave,
          p = t.onDragOver,
          d = t.onDrop,
          m = t.onDropAccepted,
          h = t.onDropRejected,
          g = t.onFileDialogCancel,
          y = t.onFileDialogOpen,
          v = t.useFsAccessApi,
          b = t.autoFocus,
          x = t.preventDropOnDocument,
          k = t.noClick,
          C = t.noKeyboard,
          P = t.noDrag,
          A = t.noDragEventsBubbling,
          j = t.onError,
          z = t.validator,
          H = (0, r.useMemo)(
            function () {
              return D(n)
                ? Object.entries(n)
                    .reduce(function (e, t) {
                      var n = S(t, 2),
                        r = n[0],
                        i = n[1];
                      return [].concat(w(e), [r], w(i));
                    }, [])
                    .filter(function (e) {
                      return _(e) || B(e);
                    })
                    .join(",")
                : void 0;
            },
            [n]
          ),
          U = (0, r.useMemo)(
            function () {
              return D(n)
                ? [
                    {
                      description: "Files",
                      accept: Object.entries(n)
                        .filter(function (e) {
                          var t = S(e, 2),
                            n = t[0],
                            r = t[1],
                            i = !0;
                          return (
                            _(n) ||
                              (console.warn(
                                'Skipped "'.concat(
                                  n,
                                  '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'
                                )
                              ),
                              (i = !1)),
                            (Array.isArray(r) && r.every(B)) ||
                              (console.warn(
                                'Skipped "'.concat(
                                  n,
                                  '" because an invalid file extension was provided.'
                                )
                              ),
                              (i = !1)),
                            i
                          );
                        })
                        .reduce(function (e, t) {
                          var n = S(t, 2),
                            r = n[0],
                            i = n[1];
                          return O(O({}, e), {}, E({}, r, i));
                        }, {}),
                    },
                  ]
                : n;
            },
            [n]
          ),
          K = (0, r.useMemo)(
            function () {
              return "function" == typeof y ? y : er;
            },
            [y]
          ),
          Q = (0, r.useMemo)(
            function () {
              return "function" == typeof g ? g : er;
            },
            [g]
          ),
          et = (0, r.useRef)(null),
          ei = (0, r.useRef)(null),
          eo = V((0, r.useReducer)(en, ee), 2),
          ea = eo[0],
          el = eo[1],
          es = ea.isFocused,
          ec = ea.isFileDialogActive,
          eu = (0, r.useRef)(
            "undefined" != typeof window &&
              window.isSecureContext &&
              v &&
              "showOpenFilePicker" in window
          ),
          ef = function () {
            !eu.current &&
              ec &&
              setTimeout(function () {
                ei.current &&
                  (ei.current.files.length ||
                    (el({ type: "closeDialog" }), Q()));
              }, 300);
          };
        (0, r.useEffect)(
          function () {
            return (
              window.addEventListener("focus", ef, !1),
              function () {
                window.removeEventListener("focus", ef, !1);
              }
            );
          },
          [ei, ec, Q, eu]
        );
        var ep = (0, r.useRef)([]),
          ed = function (e) {
            (et.current && et.current.contains(e.target)) ||
              (e.preventDefault(), (ep.current = []));
          };
        (0, r.useEffect)(
          function () {
            return (
              x &&
                (document.addEventListener("dragover", M, !1),
                document.addEventListener("drop", ed, !1)),
              function () {
                x &&
                  (document.removeEventListener("dragover", M),
                  document.removeEventListener("drop", ed));
              }
            );
          },
          [et, x]
        ),
          (0, r.useEffect)(
            function () {
              return (
                !i && b && et.current && et.current.focus(), function () {}
              );
            },
            [et, b, i]
          );
        var em = (0, r.useCallback)(
            function (e) {
              j ? j(e) : console.error(e);
            },
            [j]
          ),
          eh = (0, r.useCallback)(
            function (e) {
              var t;
              e.preventDefault(),
                e.persist(),
                eA(e),
                (ep.current = [].concat(
                  (function (e) {
                    if (Array.isArray(e)) return Y(e);
                  })((t = ep.current)) ||
                    (function (e) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != e[Symbol.iterator]) ||
                        null != e["@@iterator"]
                      )
                        return Array.from(e);
                    })(t) ||
                    q(t) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(),
                  [e.target]
                )),
                L(e) &&
                  Promise.resolve(o(e))
                    .then(function (t) {
                      if (!N(e) || A) {
                        var n,
                          r,
                          i,
                          o,
                          f,
                          p,
                          d,
                          m,
                          h = t.length,
                          g =
                            h > 0 &&
                            ((r = (n = {
                              files: t,
                              accept: H,
                              minSize: l,
                              maxSize: a,
                              multiple: s,
                              maxFiles: c,
                              validator: z,
                            }).files),
                            (i = n.accept),
                            (o = n.minSize),
                            (f = n.maxSize),
                            (p = n.multiple),
                            (d = n.maxFiles),
                            (m = n.validator),
                            (!!p || !(r.length > 1)) &&
                              (!p || !(d >= 1) || !(r.length > d)) &&
                              r.every(function (e) {
                                var t = S(T(e, i), 1)[0],
                                  n = S(I(e, o, f), 1)[0],
                                  r = m ? m(e) : null;
                                return t && n && !r;
                              }));
                        el({
                          isDragAccept: g,
                          isDragReject: h > 0 && !g,
                          isDragActive: !0,
                          type: "setDraggedFiles",
                        }),
                          u && u(e);
                      }
                    })
                    .catch(function (e) {
                      return em(e);
                    });
            },
            [o, u, em, A, H, l, a, s, c, z]
          ),
          eg = (0, r.useCallback)(
            function (e) {
              e.preventDefault(), e.persist(), eA(e);
              var t = L(e);
              if (t && e.dataTransfer)
                try {
                  e.dataTransfer.dropEffect = "copy";
                } catch (e) {}
              return t && p && p(e), !1;
            },
            [p, A]
          ),
          ey = (0, r.useCallback)(
            function (e) {
              e.preventDefault(), e.persist(), eA(e);
              var t = ep.current.filter(function (e) {
                  return et.current && et.current.contains(e);
                }),
                n = t.indexOf(e.target);
              -1 !== n && t.splice(n, 1),
                (ep.current = t),
                !(t.length > 0) &&
                  (el({
                    type: "setDraggedFiles",
                    isDragActive: !1,
                    isDragAccept: !1,
                    isDragReject: !1,
                  }),
                  L(e) && f && f(e));
            },
            [et, f, A]
          ),
          ev = (0, r.useCallback)(
            function (e, t) {
              var n = [],
                r = [];
              e.forEach(function (e) {
                var t = V(T(e, H), 2),
                  i = t[0],
                  o = t[1],
                  s = V(I(e, l, a), 2),
                  c = s[0],
                  u = s[1],
                  f = z ? z(e) : null;
                if (i && c && !f) n.push(e);
                else {
                  var p = [o, u];
                  f && (p = p.concat(f)),
                    r.push({
                      file: e,
                      errors: p.filter(function (e) {
                        return e;
                      }),
                    });
                }
              }),
                ((!s && n.length > 1) || (s && c >= 1 && n.length > c)) &&
                  (n.forEach(function (e) {
                    r.push({ file: e, errors: [R] });
                  }),
                  n.splice(0)),
                el({ acceptedFiles: n, fileRejections: r, type: "setFiles" }),
                d && d(n, r, t),
                r.length > 0 && h && h(r, t),
                n.length > 0 && m && m(n, t);
            },
            [el, s, H, l, a, c, d, m, h, z]
          ),
          eb = (0, r.useCallback)(
            function (e) {
              e.preventDefault(),
                e.persist(),
                eA(e),
                (ep.current = []),
                L(e) &&
                  Promise.resolve(o(e))
                    .then(function (t) {
                      (!N(e) || A) && ev(t, e);
                    })
                    .catch(function (e) {
                      return em(e);
                    }),
                el({ type: "reset" });
            },
            [o, ev, em, A]
          ),
          ex = (0, r.useCallback)(
            function () {
              if (eu.current) {
                el({ type: "openDialog" }),
                  K(),
                  window
                    .showOpenFilePicker({ multiple: s, types: U })
                    .then(function (e) {
                      return o(e);
                    })
                    .then(function (e) {
                      ev(e, null), el({ type: "closeDialog" });
                    })
                    .catch(function (e) {
                      e instanceof DOMException &&
                      ("AbortError" === e.name || e.code === e.ABORT_ERR)
                        ? (Q(e), el({ type: "closeDialog" }))
                        : e instanceof DOMException &&
                          ("SecurityError" === e.name ||
                            e.code === e.SECURITY_ERR)
                        ? ((eu.current = !1),
                          ei.current
                            ? ((ei.current.value = null), ei.current.click())
                            : em(
                                Error(
                                  "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."
                                )
                              ))
                        : em(e);
                    });
                return;
              }
              ei.current &&
                (el({ type: "openDialog" }),
                K(),
                (ei.current.value = null),
                ei.current.click());
            },
            [el, K, Q, v, ev, em, U, s]
          ),
          ew = (0, r.useCallback)(
            function (e) {
              et.current &&
                et.current.isEqualNode(e.target) &&
                (" " === e.key ||
                  "Enter" === e.key ||
                  32 === e.keyCode ||
                  13 === e.keyCode) &&
                (e.preventDefault(), ex());
            },
            [et, ex]
          ),
          ek = (0, r.useCallback)(function () {
            el({ type: "focus" });
          }, []),
          eO = (0, r.useCallback)(function () {
            el({ type: "blur" });
          }, []),
          eE = (0, r.useCallback)(
            function () {
              k ||
                ((function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : window.navigator.userAgent;
                  return (
                    -1 !== e.indexOf("MSIE") ||
                    -1 !== e.indexOf("Trident/") ||
                    -1 !== e.indexOf("Edge/")
                  );
                })()
                  ? setTimeout(ex, 0)
                  : ex());
            },
            [k, ex]
          ),
          eS = function (e) {
            return i ? null : e;
          },
          eC = function (e) {
            return C ? null : eS(e);
          },
          eP = function (e) {
            return P ? null : eS(e);
          },
          eA = function (e) {
            A && e.stopPropagation();
          },
          ej = (0, r.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.refKey,
                  n = e.role,
                  r = e.onKeyDown,
                  o = e.onFocus,
                  a = e.onBlur,
                  l = e.onClick,
                  s = e.onDragEnter,
                  c = e.onDragOver,
                  u = e.onDragLeave,
                  f = e.onDrop,
                  p = Z(e, $);
                return G(
                  G(
                    X(
                      {
                        onKeyDown: eC(F(r, ew)),
                        onFocus: eC(F(o, ek)),
                        onBlur: eC(F(a, eO)),
                        onClick: eS(F(l, eE)),
                        onDragEnter: eP(F(s, eh)),
                        onDragOver: eP(F(c, eg)),
                        onDragLeave: eP(F(u, ey)),
                        onDrop: eP(F(f, eb)),
                        role:
                          "string" == typeof n && "" !== n ? n : "presentation",
                      },
                      void 0 === t ? "ref" : t,
                      et
                    ),
                    i || C ? {} : { tabIndex: 0 }
                  ),
                  p
                );
              };
            },
            [et, ew, ek, eO, eE, eh, eg, ey, eb, C, P, i]
          ),
          ez = (0, r.useCallback)(function (e) {
            e.stopPropagation();
          }, []),
          eR = (0, r.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.refKey,
                  n = e.onChange,
                  r = e.onClick,
                  i = Z(e, W);
                return G(
                  G(
                    {},
                    X(
                      {
                        accept: H,
                        multiple: s,
                        type: "file",
                        style: { display: "none" },
                        onChange: eS(F(n, eb)),
                        onClick: eS(F(r, ez)),
                        tabIndex: -1,
                      },
                      void 0 === t ? "ref" : t,
                      ei
                    )
                  ),
                  i
                );
              };
            },
            [ei, n, s, eb, i]
          );
        return G(
          G({}, ea),
          {},
          {
            isFocused: es && !i,
            getRootProps: ej,
            getInputProps: eR,
            rootRef: et,
            inputRef: ei,
            open: eS(ex),
          }
        );
      }
      function en(e, t) {
        switch (t.type) {
          case "focus":
            return G(G({}, e), {}, { isFocused: !0 });
          case "blur":
            return G(G({}, e), {}, { isFocused: !1 });
          case "openDialog":
            return G(G({}, ee), {}, { isFileDialogActive: !0 });
          case "closeDialog":
            return G(G({}, e), {}, { isFileDialogActive: !1 });
          case "setDraggedFiles":
            return G(
              G({}, e),
              {},
              {
                isDragActive: t.isDragActive,
                isDragAccept: t.isDragAccept,
                isDragReject: t.isDragReject,
              }
            );
          case "setFiles":
            return G(
              G({}, e),
              {},
              {
                acceptedFiles: t.acceptedFiles,
                fileRejections: t.fileRejections,
              }
            );
          case "reset":
            return G({}, ee);
          default:
            return e;
        }
      }
      function er() {}
    },
    61847: (e, t, n) => {
      "use strict";
      var r = n(4140);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, o, a) {
            if (a !== r) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    62030: function (e, t, n) {
      var r;
      !(function (e, i, o) {
        function a(e) {
          var t = this;
          t.next = function () {
            var e,
              n,
              r = t.x,
              i = t.i;
            return (
              (e = r[i]),
              (e ^= e >>> 7),
              (n =
                e ^
                (e << 24) ^
                ((e = r[(i + 1) & 7]) ^ (e >>> 10)) ^
                ((e = r[(i + 3) & 7]) ^ (e >>> 3)) ^
                ((e = r[(i + 4) & 7]) ^ (e << 7))),
              (e = r[(i + 7) & 7]),
              (e ^= e << 13),
              (n ^= e ^ (e << 9)),
              (r[i] = n),
              (t.i = (i + 1) & 7),
              n
            );
          };
          var n,
            r = e,
            i = [];
          if (r === (0 | r)) i[0] = r;
          else
            for (n = 0, r = "" + r; n < r.length; ++n)
              i[7 & n] =
                (i[7 & n] << 15) ^ ((r.charCodeAt(n) + i[(n + 1) & 7]) << 13);
          for (; i.length < 8; ) i.push(0);
          for (n = 0; n < 8 && 0 === i[n]; ++n);
          for (
            8 == n ? (i[7] = -1) : i[n], t.x = i, t.i = 0, n = 256;
            n > 0;
            --n
          )
            t.next();
        }
        function l(e, t) {
          return (t.x = e.x.slice()), (t.i = e.i), t;
        }
        function s(e, t) {
          null == e && (e = +new Date());
          var n = new a(e),
            r = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 0x100000000;
            };
          return (
            (i.double = function () {
              do
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 0x100000000) /
                  2097152;
              while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            r &&
              (r.x && l(r, n),
              (i.state = function () {
                return l(n, {});
              })),
            i
          );
        }
        i && i.exports
          ? (i.exports = s)
          : n.amdD && n.amdO
          ? void 0 ===
              (r = function () {
                return s;
              }.call(t, n, t, i)) || (i.exports = r)
          : (this.xorshift7 = s);
      })(0, (e = n.nmd(e)), n.amdD);
    },
    63887: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => C });
      var r = n(55729),
        i = n(61946),
        o = n(27830),
        a = n(84914),
        l = n(38169),
        s = Object.defineProperty,
        c = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (e, t, n) =>
          t in e
            ? s(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let d = (e, t) =>
          "content" === e
            ? "auto"
            : "auto" === e
            ? "0px"
            : e
            ? `${100 / (t / e)}%`
            : void 0,
        m = (e, t, n) =>
          n || "auto" === e || "content" === e ? "unset" : d(e, t),
        h = (e, t) => {
          if (e) return "auto" === e || t ? 1 : 0;
        },
        g = (e, t) => (0 === e ? 0 : e ? `${100 / (t / e)}%` : void 0),
        y = (e, t) =>
          void 0 !== e ? t.fn.size({ size: e, sizes: t.spacing }) / 2 : void 0;
      var v = (0, l.r)(
          (
            e,
            {
              gutter: t,
              gutterXs: n,
              gutterSm: r,
              gutterMd: i,
              gutterLg: o,
              gutterXl: l,
              grow: s,
              offset: v,
              offsetXs: b,
              offsetSm: x,
              offsetMd: w,
              offsetLg: k,
              offsetXl: O,
              columns: E,
              span: S,
              xs: C,
              sm: P,
              md: A,
              lg: j,
              xl: z,
              order: R,
              orderXs: T,
              orderSm: I,
              orderMd: D,
              orderLg: N,
              orderXl: L,
            }
          ) => ({
            col: ((e, t) => {
              for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
              if (c) for (var n of c(t)) f.call(t, n) && p(e, n, t[n]);
              return e;
            })(
              {
                boxSizing: "border-box",
                flexGrow: h(S, s),
                order: R,
                padding: y(t, e),
                marginLeft: g(v, E),
                flexBasis: d(S, E),
                flexShrink: 0,
                width: "content" === S ? "auto" : void 0,
                maxWidth: m(S, E, s),
              },
              (function ({
                sizes: e,
                offsets: t,
                orders: n,
                theme: r,
                columns: i,
                gutters: o,
                grow: l,
              }) {
                return a.qk.reduce(
                  (a, s) => (
                    (a[`@media (min-width: ${r.breakpoints[s]}px)`] = {
                      order: n[s],
                      flexBasis: d(e[s], i),
                      padding: y(o[s], r),
                      flexShrink: 0,
                      width: "content" === e[s] ? "auto" : void 0,
                      maxWidth: m(e[s], i, l),
                      marginLeft: g(t[s], i),
                      flexGrow: h(e[s], l),
                    }),
                    a
                  ),
                  {}
                );
              })({
                sizes: { xs: C, sm: P, md: A, lg: j, xl: z },
                offsets: { xs: b, sm: x, md: w, lg: k, xl: O },
                orders: { xs: T, sm: I, md: D, lg: N, xl: L },
                gutters: { xs: n, sm: r, md: i, lg: o, xl: l },
                theme: e,
                columns: E,
                grow: s,
              })
            ),
          })
        ),
        b = n(50433),
        x = Object.defineProperty,
        w = Object.getOwnPropertySymbols,
        k = Object.prototype.hasOwnProperty,
        O = Object.prototype.propertyIsEnumerable,
        E = (e, t, n) =>
          t in e
            ? x(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let S = {},
        C = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("GridCol", S, e),
            {
              children: a,
              span: l,
              offset: s,
              offsetXs: c,
              offsetSm: u,
              offsetMd: f,
              offsetLg: p,
              offsetXl: d,
              xs: m,
              sm: h,
              md: g,
              lg: y,
              xl: x,
              order: C,
              orderXs: P,
              orderSm: A,
              orderMd: j,
              orderLg: z,
              orderXl: R,
              className: T,
              id: I,
              unstyled: D,
            } = n,
            N = ((e, t) => {
              var n = {};
              for (var r in e)
                k.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && w)
                for (var r of w(e))
                  0 > t.indexOf(r) && O.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "children",
              "span",
              "offset",
              "offsetXs",
              "offsetSm",
              "offsetMd",
              "offsetLg",
              "offsetXl",
              "xs",
              "sm",
              "md",
              "lg",
              "xl",
              "order",
              "orderXs",
              "orderSm",
              "orderMd",
              "orderLg",
              "orderXl",
              "className",
              "id",
              "unstyled",
            ]),
            L = (0, o.Z)(),
            M = l || L.columns,
            { classes: F, cx: _ } = v(
              {
                gutter: L.gutter,
                gutterXs: L.gutterXs,
                gutterSm: L.gutterSm,
                gutterMd: L.gutterMd,
                gutterLg: L.gutterLg,
                gutterXl: L.gutterXl,
                offset: s,
                offsetXs: c,
                offsetSm: u,
                offsetMd: f,
                offsetLg: p,
                offsetXl: d,
                xs: m,
                sm: h,
                md: g,
                lg: y,
                xl: x,
                order: C,
                orderXs: P,
                orderSm: A,
                orderMd: j,
                orderLg: z,
                orderXl: R,
                grow: L.grow,
                columns: L.columns,
                span: M,
              },
              { unstyled: D, name: "Grid" }
            );
          return !(function (e) {
            return (
              "auto" === e ||
              "content" === e ||
              ("number" == typeof e && e > 0 && e % 1 == 0)
            );
          })(M) || M > L.columns
            ? null
            : r.createElement(
                b.a,
                ((e, t) => {
                  for (var n in t || (t = {})) k.call(t, n) && E(e, n, t[n]);
                  if (w) for (var n of w(t)) O.call(t, n) && E(e, n, t[n]);
                  return e;
                })({ className: _(F.col, T), ref: t }, N),
                a
              );
        });
      C.displayName = "@mantine/core/Col";
    },
    63985: (e, t, n) => {
      "use strict";
      function r(e, t) {
        "function" == typeof e
          ? e(t)
          : "object" == typeof e &&
            null !== e &&
            "current" in e &&
            (e.current = t);
      }
      n.d(t, { b: () => r });
    },
    66179: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => N });
      var r = n(55729),
        i = n(99410),
        o = n(1983),
        a = r.useLayoutEffect,
        l = function (e) {
          var t = r.useRef(e);
          return (
            a(function () {
              t.current = e;
            }),
            t
          );
        },
        s = function (e, t) {
          if ("function" == typeof e) return void e(t);
          e.current = t;
        },
        c = function (e, t) {
          var n = r.useRef();
          return r.useCallback(
            function (r) {
              (e.current = r),
                n.current && s(n.current, null),
                (n.current = t),
                t && s(t, r);
            },
            [t]
          );
        },
        u = {
          "min-height": "0",
          "max-height": "none",
          height: "0",
          visibility: "hidden",
          overflow: "hidden",
          position: "absolute",
          "z-index": "-1000",
          top: "0",
          right: "0",
        },
        f = function (e) {
          Object.keys(u).forEach(function (t) {
            e.style.setProperty(t, u[t], "important");
          });
        },
        p = null,
        d = function (e, t) {
          var n = e.scrollHeight;
          return "border-box" === t.sizingStyle.boxSizing
            ? n + t.borderSize
            : n - t.paddingSize;
        },
        m = function () {},
        h = [
          "borderBottomWidth",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "boxSizing",
          "fontFamily",
          "fontSize",
          "fontStyle",
          "fontWeight",
          "letterSpacing",
          "lineHeight",
          "paddingBottom",
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "tabSize",
          "textIndent",
          "textRendering",
          "textTransform",
          "width",
          "wordBreak",
        ],
        g = !!document.documentElement.currentStyle,
        y = function (e) {
          var t = window.getComputedStyle(e);
          if (null === t) return null;
          var n = h.reduce(function (e, n) {
              return (e[n] = t[n]), e;
            }, {}),
            r = n.boxSizing;
          if ("" === r) return null;
          g &&
            "border-box" === r &&
            (n.width =
              parseFloat(n.width) +
              parseFloat(n.borderRightWidth) +
              parseFloat(n.borderLeftWidth) +
              parseFloat(n.paddingRight) +
              parseFloat(n.paddingLeft) +
              "px");
          var i = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop),
            o = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
          return { sizingStyle: n, paddingSize: i, borderSize: o };
        },
        v = function (e) {
          var t = l(e);
          (0, r.useLayoutEffect)(function () {
            var e = function (e) {
              t.current(e);
            };
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []);
        },
        b = (0, r.forwardRef)(function (e, t) {
          var n = e.cacheMeasurements,
            a = e.maxRows,
            l = e.minRows,
            s = e.onChange,
            u = void 0 === s ? m : s,
            h = e.onHeightChange,
            g = void 0 === h ? m : h,
            b = (0, o.A)(e, [
              "cacheMeasurements",
              "maxRows",
              "minRows",
              "onChange",
              "onHeightChange",
            ]),
            x = void 0 !== b.value,
            w = (0, r.useRef)(null),
            k = c(w, t),
            O = (0, r.useRef)(0),
            E = (0, r.useRef)(),
            S = function () {
              var e = w.current,
                t = n && E.current ? E.current : y(e);
              if (t) {
                E.current = t;
                var r,
                  i,
                  o,
                  s,
                  c,
                  u,
                  m,
                  h,
                  v,
                  b,
                  x,
                  k =
                    ((r = e.value || e.placeholder || "x"),
                    void 0 === (i = l) && (i = 1),
                    void 0 === (o = a) && (o = 1 / 0),
                    p ||
                      ((p = document.createElement("textarea")).setAttribute(
                        "tabindex",
                        "-1"
                      ),
                      p.setAttribute("aria-hidden", "true"),
                      f(p)),
                    null === p.parentNode && document.body.appendChild(p),
                    (s = t.paddingSize),
                    (c = t.borderSize),
                    (m = (u = t.sizingStyle).boxSizing),
                    Object.keys(u).forEach(function (e) {
                      p.style[e] = u[e];
                    }),
                    f(p),
                    (p.value = r),
                    (h = d(p, t)),
                    (p.value = "x"),
                    (b = (v = p.scrollHeight - s) * i),
                    "border-box" === m && (b = b + s + c),
                    (h = Math.max(b, h)),
                    (x = v * o),
                    "border-box" === m && (x = x + s + c),
                    [(h = Math.min(x, h)), v]),
                  S = k[0],
                  C = k[1];
                O.current !== S &&
                  ((O.current = S),
                  e.style.setProperty("height", S + "px", "important"),
                  g(S, { rowHeight: C }));
              }
            };
          return (
            (0, r.useLayoutEffect)(S),
            v(S),
            (0, r.createElement)(
              "textarea",
              (0, i.A)({}, b, {
                onChange: function (e) {
                  x || S(), u(e);
                },
                ref: k,
              })
            )
          );
        }),
        x = n(85607),
        w = n(61946),
        k = (0, n(38169).r)((e) => ({
          input: { paddingTop: e.spacing.xs, paddingBottom: e.spacing.xs },
        })),
        O = n(79326),
        E = n(70503),
        S = Object.defineProperty,
        C = Object.defineProperties,
        P = Object.getOwnPropertyDescriptors,
        A = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        z = Object.prototype.propertyIsEnumerable,
        R = (e, t, n) =>
          t in e
            ? S(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        T = (e, t) => {
          for (var n in t || (t = {})) j.call(t, n) && R(e, n, t[n]);
          if (A) for (var n of A(t)) z.call(t, n) && R(e, n, t[n]);
          return e;
        },
        I = (e, t) => C(e, P(t));
      let D = { autosize: !1, size: "sm", __staticSelector: "Textarea" },
        N = (0, r.forwardRef)((e, t) => {
          let n = (0, w.a1)("Textarea", D, e),
            {
              autosize: i,
              maxRows: o,
              minRows: a,
              label: l,
              error: s,
              description: c,
              id: u,
              className: f,
              required: p,
              style: d,
              wrapperProps: m,
              classNames: h,
              styles: g,
              size: y,
              __staticSelector: v,
              sx: S,
              errorProps: C,
              descriptionProps: P,
              labelProps: R,
              inputWrapperOrder: N,
              inputContainer: L,
              unstyled: M,
              withAsterisk: F,
            } = n,
            _ = ((e, t) => {
              var n = {};
              for (var r in e)
                j.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && A)
                for (var r of A(e))
                  0 > t.indexOf(r) && z.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "autosize",
              "maxRows",
              "minRows",
              "label",
              "error",
              "description",
              "id",
              "className",
              "required",
              "style",
              "wrapperProps",
              "classNames",
              "styles",
              "size",
              "__staticSelector",
              "sx",
              "errorProps",
              "descriptionProps",
              "labelProps",
              "inputWrapperOrder",
              "inputContainer",
              "unstyled",
              "withAsterisk",
            ]),
            B = (0, x.B)(u),
            { classes: H, cx: U } = k(),
            { systemStyles: $, rest: W } = (0, O.z)(_),
            V = T(
              {
                required: p,
                ref: t,
                invalid: !!s,
                id: B,
                classNames: I(T({}, h), {
                  input: U(H.input, null == h ? void 0 : h.input),
                }),
                styles: g,
                __staticSelector: v,
                size: y,
                multiline: !0,
                unstyled: M,
              },
              W
            );
          return r.createElement(
            E.p.Wrapper,
            T(
              T(
                {
                  label: l,
                  error: s,
                  id: B,
                  description: c,
                  required: p,
                  style: d,
                  className: f,
                  classNames: h,
                  styles: g,
                  size: y,
                  __staticSelector: v,
                  sx: S,
                  errorProps: C,
                  labelProps: R,
                  descriptionProps: P,
                  inputContainer: L,
                  inputWrapperOrder: N,
                  unstyled: M,
                  withAsterisk: F,
                },
                $
              ),
              m
            ),
            i
              ? r.createElement(
                  E.p,
                  I(T({}, V), { component: b, maxRows: o, minRows: a })
                )
              : r.createElement(
                  E.p,
                  I(T({}, V), { component: "textarea", rows: a })
                )
          );
        });
      N.displayName = "@mantine/core/Textarea";
    },
    67264: (e) => {
      function t(e, t, n, r) {
        return Math.round(e / n) + " " + r + (t >= 1.5 * n ? "s" : "");
      }
      e.exports = function (e, n) {
        n = n || {};
        var r,
          i,
          o,
          a,
          l = typeof e;
        if ("string" === l && e.length > 0) {
          var s = e;
          if (!((s = String(s)).length > 100)) {
            var c =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                s
              );
            if (c) {
              var u = parseFloat(c[1]);
              switch ((c[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * u;
                case "weeks":
                case "week":
                case "w":
                  return 6048e5 * u;
                case "days":
                case "day":
                case "d":
                  return 864e5 * u;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return 36e5 * u;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return 6e4 * u;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return 1e3 * u;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return u;
                default:
                  break;
              }
            }
          }
          return;
        }
        if ("number" === l && isFinite(e)) {
          return n.long
            ? (i = Math.abs((r = e))) >= 864e5
              ? t(r, i, 864e5, "day")
              : i >= 36e5
              ? t(r, i, 36e5, "hour")
              : i >= 6e4
              ? t(r, i, 6e4, "minute")
              : i >= 1e3
              ? t(r, i, 1e3, "second")
              : r + " ms"
            : (a = Math.abs((o = e))) >= 864e5
            ? Math.round(o / 864e5) + "d"
            : a >= 36e5
            ? Math.round(o / 36e5) + "h"
            : a >= 6e4
            ? Math.round(o / 6e4) + "m"
            : a >= 1e3
            ? Math.round(o / 1e3) + "s"
            : o + "ms";
        }
        throw Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    69344: (e, t, n) => {
      "use strict";
      function r(e, t, n, r) {
        return (
          (t - (e.length - 1) * n - 2 * r * e.length) /
          e.reduce(
            (e, t) =>
              e +
              (function ({ width: e, height: t }) {
                return e / t;
              })(t),
            0
          )
        );
      }
      function i(e, t, n, i, o, a, l) {
        let s =
            (function (e, t = 0) {
              let n = 10 ** t;
              return Math.round((e + Number.EPSILON) * n) / n;
            })(
              i /
                o /
                Math.min(
                  ...e.map((e) =>
                    (function ({ width: e, height: t }) {
                      return e / t;
                    })(e)
                  )
                )
            ) +
            (a || 0) +
            2,
          c = (function (e, t, n) {
            var r = (function (e, t, n) {
              var r;
              let i = new Map(),
                o = new Set(),
                a = new Map();
              a.set(0, 0);
              let l = (function (e) {
                let t = 0,
                  n = [],
                  r = (t, r) => 0 > e(n[t], n[r]),
                  i = (e, t) => {
                    let r = n[e];
                    (n[e] = n[t]), (n[t] = r);
                  };
                return {
                  push: (e) => {
                    n[(t += 1)] = e;
                    let o = t,
                      a = Math.floor(o / 2);
                    for (; o > 1 && r(a, o); )
                      i(a, o), (a = Math.floor((o = a) / 2));
                  },
                  pop: () => {
                    if (0 === t) return;
                    i(1, t), (t -= 1);
                    let e = n.pop(),
                      o = 1,
                      a = 2;
                    for (
                      ;
                      a <= t && (a < t && r(a, a + 1) && (a += 1), r(o, a));

                    )
                      i(o, a), (a = 2 * (o = a));
                    return e;
                  },
                  size: () => t,
                };
              })(((r = (e) => e[1]), (e, t) => r(t) - r(e)));
              for (l.push([t, 0]); l.size() > 0; ) {
                let [t, n] = l.pop();
                if (!o.has(t)) {
                  let r = e(t);
                  o.add(t),
                    r.forEach((e, r) => {
                      let o = n + e,
                        s = i.get(r),
                        c = a.get(r);
                      (void 0 === c ||
                        (c > o &&
                          (c / o > 1.005 || (void 0 !== s && s < t)))) &&
                        (a.set(r, o), l.push([r, o]), i.set(r, t));
                    });
                }
              }
              return a.has(n) ? i : void 0;
            })(e, 0, n);
            if (!r) return;
            let i = [];
            for (let e = n; void 0 !== e; e = r.get(e)) i.push(e);
            return i.reverse();
          })(
            (c) => {
              let u = new Map();
              u.set(c, 0);
              let f = Math.min(s, l || 1 / 0);
              for (
                let l = c + (a || 1);
                l < e.length + 1 && !(l - c > f);
                l += 1
              ) {
                let a = (function (e, t, n, i, o, a, l) {
                  let s = e.slice(t, n),
                    c = r(s, i, o, a);
                  return c > 0 ? (c - l) ** 2 * s.length : void 0;
                })(e, c, l, i, t, n, o);
                if (void 0 === a) break;
                u.set(l, a);
              }
              return u;
            },
            0,
            e.length
          );
        if (!c) return;
        let u = [];
        for (let o = 1; o < c.length; o += 1) {
          let a = e
              .map((e, t) => ({ photo: e, index: t }))
              .slice(c[o - 1], c[o]),
            l = r(
              a.map(({ photo: e }) => e),
              i,
              t,
              n
            );
          u.push({
            photos: a.map(({ photo: e, index: t }) => ({
              photo: e,
              index: t,
              width:
                l *
                (function ({ width: e, height: t }) {
                  return e / t;
                })(e),
              height: l,
            })),
          });
        }
        return {
          spacing: t,
          padding: n,
          containerWidth: i,
          tracks: u,
          horizontal: !0,
        };
      }
      n.d(t, { A: () => i }), Object.freeze([1200, 600, 300, 0]);
    },
    69943: (e, t, n) => {
      "use strict";
      n.d(t, { x: () => k });
      var r = n(55729),
        i = n(61946),
        o = n(63887),
        a = n(27830),
        l = n(84914),
        s = n(38169),
        c = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        d = (e, t, n) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        m = (0, s.r)(
          (
            e,
            {
              justify: t,
              align: n,
              gutter: r,
              gutterXs: i,
              gutterSm: o,
              gutterMd: a,
              gutterLg: s,
              gutterXl: c,
            }
          ) => ({
            root: ((e, t) => {
              for (var n in t || (t = {})) f.call(t, n) && d(e, n, t[n]);
              if (u) for (var n of u(t)) p.call(t, n) && d(e, n, t[n]);
              return e;
            })(
              {
                margin: -e.fn.size({ size: r, sizes: e.spacing }) / 2,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: t,
                alignItems: n,
              },
              (function (e, t) {
                return l.qk.reduce(
                  (n, r) => (
                    void 0 !== e[r] &&
                      (n[`@media (min-width: ${t.breakpoints[r]}px)`] = {
                        margin:
                          -t.fn.size({ size: e[r], sizes: t.spacing }) / 2,
                      }),
                    n
                  ),
                  {}
                );
              })({ xs: i, sm: o, md: a, lg: s, xl: c }, e)
            ),
          })
        ),
        h = n(50433),
        g = Object.defineProperty,
        y = Object.getOwnPropertySymbols,
        v = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        x = (e, t, n) =>
          t in e
            ? g(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let w = {
          gutter: "md",
          justify: "flex-start",
          align: "stretch",
          columns: 12,
        },
        k = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("Grid", w, e),
            {
              gutter: o,
              gutterXs: l,
              gutterSm: s,
              gutterMd: c,
              gutterLg: u,
              gutterXl: f,
              children: p,
              grow: d,
              justify: g,
              align: k,
              columns: O,
              className: E,
              id: S,
              unstyled: C,
            } = n,
            P = ((e, t) => {
              var n = {};
              for (var r in e)
                v.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && y)
                for (var r of y(e))
                  0 > t.indexOf(r) && b.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "gutter",
              "gutterXs",
              "gutterSm",
              "gutterMd",
              "gutterLg",
              "gutterXl",
              "children",
              "grow",
              "justify",
              "align",
              "columns",
              "className",
              "id",
              "unstyled",
            ]),
            { classes: A, cx: j } = m(
              {
                gutter: o,
                justify: g,
                align: k,
                gutterXs: l,
                gutterSm: s,
                gutterMd: c,
                gutterLg: u,
                gutterXl: f,
              },
              { unstyled: C, name: "Grid" }
            );
          return r.createElement(
            a.k,
            {
              value: {
                gutter: o,
                gutterXs: l,
                gutterSm: s,
                gutterMd: c,
                gutterLg: u,
                gutterXl: f,
                grow: d,
                columns: O,
              },
            },
            r.createElement(
              h.a,
              ((e, t) => {
                for (var n in t || (t = {})) v.call(t, n) && x(e, n, t[n]);
                if (y) for (var n of y(t)) b.call(t, n) && x(e, n, t[n]);
                return e;
              })({ className: j(A.root, E), ref: t }, P),
              p
            )
          );
        });
      (k.Col = o.f), (k.displayName = "@mantine/core/Grid");
    },
    70503: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => ew });
      var r = n(55729),
        i = n(61946),
        o = n(51663),
        a = n(38169),
        l = (0, a.r)((e, { size: t }) => ({
          label: {
            display: "inline-block",
            fontSize: e.fn.size({ size: t, sizes: e.fontSizes }),
            fontWeight: 500,
            color:
              "dark" === e.colorScheme ? e.colors.dark[0] : e.colors.gray[9],
            wordBreak: "break-word",
            cursor: "default",
            WebkitTapHighlightColor: "transparent",
          },
          required: {
            color: e.fn.variant({ variant: "filled", color: "red" }).background,
          },
        })),
        s = n(50433),
        c = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        d = (e, t, n) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let m = { labelElement: "label", size: "sm" },
        h = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("InputLabel", m, e),
            {
              labelElement: o,
              children: a,
              required: c,
              size: h,
              classNames: g,
              styles: y,
              unstyled: v,
              className: b,
              htmlFor: x,
              __staticSelector: w,
            } = n,
            k = ((e, t) => {
              var n = {};
              for (var r in e)
                f.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && u)
                for (var r of u(e))
                  0 > t.indexOf(r) && p.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "labelElement",
              "children",
              "required",
              "size",
              "classNames",
              "styles",
              "unstyled",
              "className",
              "htmlFor",
              "__staticSelector",
            ]),
            { classes: O, cx: E } = l(
              { size: h },
              {
                name: ["InputWrapper", w],
                classNames: g,
                styles: y,
                unstyled: v,
              }
            );
          return r.createElement(
            s.a,
            ((e, t) => {
              for (var n in t || (t = {})) f.call(t, n) && d(e, n, t[n]);
              if (u) for (var n of u(t)) p.call(t, n) && d(e, n, t[n]);
              return e;
            })(
              {
                component: o,
                ref: t,
                className: E(O.label, b),
                htmlFor: "label" === o ? x : void 0,
              },
              k
            ),
            a,
            c &&
              r.createElement(
                "span",
                { className: O.required, "aria-hidden": !0 },
                " *"
              )
          );
        });
      h.displayName = "@mantine/core/InputLabel";
      var g = (0, a.r)((e, { size: t }) => ({
          error: {
            wordBreak: "break-word",
            color: e.fn.variant({ variant: "filled", color: "red" }).background,
            fontSize: e.fn.size({ size: t, sizes: e.fontSizes }) - 2,
            lineHeight: 1.2,
            display: "block",
          },
        })),
        y = n(37948),
        v = Object.defineProperty,
        b = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        k = (e, t, n) =>
          t in e
            ? v(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let O = { size: "sm" },
        E = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("InputError", O, e),
            {
              children: o,
              className: a,
              classNames: l,
              styles: s,
              unstyled: c,
              size: u,
              __staticSelector: f,
            } = n,
            p = ((e, t) => {
              var n = {};
              for (var r in e)
                x.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && b)
                for (var r of b(e))
                  0 > t.indexOf(r) && w.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "children",
              "className",
              "classNames",
              "styles",
              "unstyled",
              "size",
              "__staticSelector",
            ]),
            { classes: d, cx: m } = g(
              { size: u },
              {
                name: ["InputWrapper", f],
                classNames: l,
                styles: s,
                unstyled: c,
              }
            );
          return r.createElement(
            y.E,
            ((e, t) => {
              for (var n in t || (t = {})) x.call(t, n) && k(e, n, t[n]);
              if (b) for (var n of b(t)) w.call(t, n) && k(e, n, t[n]);
              return e;
            })({ className: m(d.error, a), ref: t }, p),
            o
          );
        });
      E.displayName = "@mantine/core/InputError";
      var S = (0, a.r)((e, { size: t }) => ({
          description: {
            wordBreak: "break-word",
            color:
              "dark" === e.colorScheme ? e.colors.dark[2] : e.colors.gray[6],
            fontSize: e.fn.size({ size: t, sizes: e.fontSizes }) - 2,
            lineHeight: 1.2,
            display: "block",
          },
        })),
        C = Object.defineProperty,
        P = Object.getOwnPropertySymbols,
        A = Object.prototype.hasOwnProperty,
        j = Object.prototype.propertyIsEnumerable,
        z = (e, t, n) =>
          t in e
            ? C(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let R = { size: "sm" },
        T = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("InputDescription", R, e),
            {
              children: o,
              className: a,
              classNames: l,
              styles: s,
              unstyled: c,
              size: u,
              __staticSelector: f,
            } = n,
            p = ((e, t) => {
              var n = {};
              for (var r in e)
                A.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && P)
                for (var r of P(e))
                  0 > t.indexOf(r) && j.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "children",
              "className",
              "classNames",
              "styles",
              "unstyled",
              "size",
              "__staticSelector",
            ]),
            { classes: d, cx: m } = S(
              { size: u },
              {
                name: ["InputWrapper", f],
                classNames: l,
                styles: s,
                unstyled: c,
              }
            );
          return r.createElement(
            y.E,
            ((e, t) => {
              for (var n in t || (t = {})) A.call(t, n) && z(e, n, t[n]);
              if (P) for (var n of P(t)) j.call(t, n) && z(e, n, t[n]);
              return e;
            })(
              {
                color: "dimmed",
                className: m(d.description, a),
                ref: t,
                unstyled: c,
              },
              p
            ),
            o
          );
        });
      T.displayName = "@mantine/core/InputDescription";
      let I = (0, r.createContext)({
          offsetBottom: !1,
          offsetTop: !1,
          describedBy: void 0,
        }),
        D = I.Provider;
      var N = Object.defineProperty,
        L = Object.defineProperties,
        M = Object.getOwnPropertyDescriptors,
        F = Object.getOwnPropertySymbols,
        _ = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        H = (e, t, n) =>
          t in e
            ? N(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        U = (0, a.r)((e) => ({
          root: L(
            ((e, t) => {
              for (var n in t || (t = {})) _.call(t, n) && H(e, n, t[n]);
              if (F) for (var n of F(t)) B.call(t, n) && H(e, n, t[n]);
              return e;
            })({}, e.fn.fontStyles()),
            M({ lineHeight: e.lineHeight })
          ),
        })),
        $ = Object.defineProperty,
        W = Object.defineProperties,
        V = Object.getOwnPropertyDescriptors,
        q = Object.getOwnPropertySymbols,
        Y = Object.prototype.hasOwnProperty,
        K = Object.prototype.propertyIsEnumerable,
        G = (e, t, n) =>
          t in e
            ? $(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        X = (e, t) => {
          for (var n in t || (t = {})) Y.call(t, n) && G(e, n, t[n]);
          if (q) for (var n of q(t)) K.call(t, n) && G(e, n, t[n]);
          return e;
        },
        Z = (e, t) => W(e, V(t));
      let Q = {
          labelElement: "label",
          size: "sm",
          inputContainer: (e) => e,
          inputWrapperOrder: ["label", "description", "input", "error"],
        },
        J = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("InputWrapper", Q, e),
            {
              className: o,
              label: a,
              children: l,
              required: c,
              id: u,
              error: f,
              description: p,
              labelElement: d,
              labelProps: m,
              descriptionProps: g,
              errorProps: y,
              classNames: v,
              styles: b,
              size: x,
              inputContainer: w,
              __staticSelector: k,
              unstyled: O,
              inputWrapperOrder: S,
              withAsterisk: C,
            } = n,
            P = ((e, t) => {
              var n = {};
              for (var r in e)
                Y.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && q)
                for (var r of q(e))
                  0 > t.indexOf(r) && K.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "label",
              "children",
              "required",
              "id",
              "error",
              "description",
              "labelElement",
              "labelProps",
              "descriptionProps",
              "errorProps",
              "classNames",
              "styles",
              "size",
              "inputContainer",
              "__staticSelector",
              "unstyled",
              "inputWrapperOrder",
              "withAsterisk",
            ]),
            { classes: A, cx: j } = U(null, {
              classNames: v,
              styles: b,
              name: ["InputWrapper", k],
              unstyled: O,
            }),
            z = {
              classNames: v,
              styles: b,
              unstyled: O,
              size: x,
              __staticSelector: k,
            },
            R = u ? `${u}-error` : null == y ? void 0 : y.id,
            I = u ? `${u}-description` : null == g ? void 0 : g.id,
            N = !!f && "boolean" != typeof f,
            L = `${N ? R : ""} ${p ? I : ""}`,
            M = L.trim().length > 0 ? L.trim() : void 0,
            F =
              a &&
              r.createElement(
                h,
                X(
                  X(
                    {
                      key: "label",
                      labelElement: d,
                      id: u ? `${u}-label` : void 0,
                      htmlFor: u,
                      required: "boolean" == typeof C ? C : c,
                    },
                    z
                  ),
                  m
                ),
                a
              ),
            _ =
              p &&
              r.createElement(
                T,
                Z(X(X({ key: "description" }, g), z), {
                  size: (null == g ? void 0 : g.size) || z.size,
                  id: (null == g ? void 0 : g.id) || I,
                }),
                p
              ),
            B = r.createElement(r.Fragment, { key: "input" }, w(l)),
            H =
              "boolean" != typeof f &&
              f &&
              r.createElement(
                E,
                Z(X(X({}, y), z), {
                  size: (null == y ? void 0 : y.size) || z.size,
                  key: "error",
                  id: (null == y ? void 0 : y.id) || R,
                }),
                f
              ),
            $ = S.map((e) => {
              switch (e) {
                case "label":
                  return F;
                case "input":
                  return B;
                case "description":
                  return _;
                case "error":
                  return H;
                default:
                  return null;
              }
            });
          return r.createElement(
            D,
            {
              value: X(
                { describedBy: M },
                (function (e, { hasDescription: t, hasError: n }) {
                  let r = e.findIndex((e) => "input" === e),
                    i = e[r - 1],
                    o = e[r + 1];
                  return {
                    offsetBottom:
                      (t && "description" === o) || (n && "error" === o),
                    offsetTop:
                      (t && "description" === i) || (n && "error" === i),
                  };
                })(S, { hasDescription: !!_, hasError: !!H })
              ),
            },
            r.createElement(s.a, X({ className: j(A.root, o), ref: t }, P), $)
          );
        });
      J.displayName = "@mantine/core/InputWrapper";
      var ee = n(98863),
        et = Object.defineProperty,
        en = Object.getOwnPropertySymbols,
        er = Object.prototype.hasOwnProperty,
        ei = Object.prototype.propertyIsEnumerable,
        eo = (e, t, n) =>
          t in e
            ? et(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let ea = {},
        el = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("InputPlaceholder", ea, e),
            { sx: o } = n,
            a = ((e, t) => {
              var n = {};
              for (var r in e)
                er.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && en)
                for (var r of en(e))
                  0 > t.indexOf(r) && ei.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, ["sx"]);
          return r.createElement(
            s.a,
            ((e, t) => {
              for (var n in t || (t = {})) er.call(t, n) && eo(e, n, t[n]);
              if (en) for (var n of en(t)) ei.call(t, n) && eo(e, n, t[n]);
              return e;
            })(
              {
                component: "span",
                sx: [(e) => e.fn.placeholderStyles(), ...(0, ee.n)(o)],
                ref: t,
              },
              a
            )
          );
        });
      el.displayName = "@mantine/core/InputPlaceholder";
      var es = n(71127),
        ec = n(79326),
        eu = Object.defineProperty,
        ef = Object.defineProperties,
        ep = Object.getOwnPropertyDescriptors,
        ed = Object.getOwnPropertySymbols,
        em = Object.prototype.hasOwnProperty,
        eh = Object.prototype.propertyIsEnumerable,
        eg = (e, t, n) =>
          t in e
            ? eu(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        ey = (e, t) => {
          for (var n in t || (t = {})) em.call(t, n) && eg(e, n, t[n]);
          if (ed) for (var n of ed(t)) eh.call(t, n) && eg(e, n, t[n]);
          return e;
        },
        ev = (e, t) => ef(e, ep(t));
      let eb = { rightSectionWidth: 36, size: "sm", variant: "default" },
        ex = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("Input", eb, e),
            {
              className: o,
              invalid: a,
              required: l,
              disabled: c,
              variant: u,
              icon: f,
              style: p,
              rightSectionWidth: d,
              iconWidth: m,
              rightSection: h,
              rightSectionProps: g,
              radius: y,
              size: v,
              wrapperProps: b,
              classNames: x,
              styles: w,
              __staticSelector: k,
              multiline: O,
              sx: E,
              unstyled: S,
              pointer: C,
            } = n,
            P = ((e, t) => {
              var n = {};
              for (var r in e)
                em.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && ed)
                for (var r of ed(e))
                  0 > t.indexOf(r) && eh.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "invalid",
              "required",
              "disabled",
              "variant",
              "icon",
              "style",
              "rightSectionWidth",
              "iconWidth",
              "rightSection",
              "rightSectionProps",
              "radius",
              "size",
              "wrapperProps",
              "classNames",
              "styles",
              "__staticSelector",
              "multiline",
              "sx",
              "unstyled",
              "pointer",
            ]),
            {
              offsetBottom: A,
              offsetTop: j,
              describedBy: z,
            } = (0, r.useContext)(I),
            { classes: R, cx: T } = (0, es.A)(
              {
                radius: y,
                size: v,
                multiline: O,
                variant: u,
                invalid: a,
                rightSectionWidth: d,
                iconWidth: m,
                withRightSection: !!h,
                offsetBottom: A,
                offsetTop: j,
                pointer: C,
              },
              { classNames: x, styles: w, name: ["Input", k], unstyled: S }
            ),
            { systemStyles: D, rest: N } = (0, ec.z)(P);
          return r.createElement(
            s.a,
            ey(ey({ className: T(R.wrapper, o), sx: E, style: p }, D), b),
            f && r.createElement("div", { className: R.icon }, f),
            r.createElement(
              s.a,
              ev(ey({ component: "input" }, N), {
                ref: t,
                required: l,
                "aria-invalid": a,
                "aria-describedby": z,
                disabled: c,
                className: T(R[`${u}Variant`], R.input, {
                  [R.withIcon]: f,
                  [R.invalid]: a,
                  [R.disabled]: c,
                }),
              })
            ),
            h &&
              r.createElement(
                "div",
                ev(ey({}, g), { className: R.rightSection }),
                h
              )
          );
        });
      (ex.displayName = "@mantine/core/Input"),
        (ex.Wrapper = J),
        (ex.Label = h),
        (ex.Description = T),
        (ex.Error = E),
        (ex.Placeholder = el);
      let ew = (0, o.K)(ex);
    },
    71127: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => m, L: () => d });
      var r = n(38169),
        i = Object.defineProperty,
        o = Object.defineProperties,
        a = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        u = (e, t, n) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        f = (e, t) => {
          for (var n in t || (t = {})) s.call(t, n) && u(e, n, t[n]);
          if (l) for (var n of l(t)) c.call(t, n) && u(e, n, t[n]);
          return e;
        },
        p = (e, t) => o(e, a(t));
      let d = { xs: 30, sm: 36, md: 42, lg: 50, xl: 60 },
        m = (0, r.r)(
          (
            e,
            {
              size: t,
              multiline: n,
              radius: r,
              variant: i,
              invalid: o,
              rightSectionWidth: a,
              withRightSection: l,
              iconWidth: s,
              offsetBottom: c,
              offsetTop: u,
              pointer: m,
            }
          ) => {
            let h = e.fn.variant({
                variant: "filled",
                color: "red",
              }).background,
              g =
                "default" === i || "filled" === i
                  ? {
                      minHeight: e.fn.size({ size: t, sizes: d }),
                      paddingLeft: e.fn.size({ size: t, sizes: d }) / 3,
                      paddingRight: l
                        ? a
                        : e.fn.size({ size: t, sizes: d }) / 3,
                      borderRadius: e.fn.radius(r),
                    }
                  : null;
            return {
              wrapper: {
                position: "relative",
                marginTop: u ? `calc(${e.spacing.xs}px / 2)` : void 0,
                marginBottom: c ? `calc(${e.spacing.xs}px / 2)` : void 0,
              },
              input: f(
                p(
                  f(
                    p(f({}, e.fn.fontStyles()), {
                      height: n
                        ? "unstyled" === i
                          ? void 0
                          : "auto"
                        : e.fn.size({ size: t, sizes: d }),
                      WebkitTapHighlightColor: "transparent",
                      lineHeight: n
                        ? e.lineHeight
                        : `${e.fn.size({ size: t, sizes: d }) - 2}px`,
                      appearance: "none",
                      resize: "none",
                      boxSizing: "border-box",
                      fontSize: e.fn.size({ size: t, sizes: e.fontSizes }),
                      width: "100%",
                      color:
                        "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
                      display: "block",
                      textAlign: "left",
                      cursor: m ? "pointer" : void 0,
                    }),
                    g
                  ),
                  {
                    "&:disabled": {
                      backgroundColor:
                        "dark" === e.colorScheme
                          ? e.colors.dark[6]
                          : e.colors.gray[1],
                      color: e.colors.dark[2],
                      opacity: 0.6,
                      cursor: "not-allowed",
                      "&::placeholder": { color: e.colors.dark[2] },
                    },
                    "&::placeholder": p(f({}, e.fn.placeholderStyles()), {
                      opacity: 1,
                    }),
                    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
                      { appearance: "none" },
                    "&[type=number]": { MozAppearance: "textfield" },
                  }
                ),
                (function ({ theme: e, variant: t }) {
                  return "default" === t
                    ? {
                        border: `1px solid ${
                          "dark" === e.colorScheme
                            ? e.colors.dark[4]
                            : e.colors.gray[4]
                        }`,
                        backgroundColor:
                          "dark" === e.colorScheme ? e.colors.dark[6] : e.white,
                        transition: "border-color 100ms ease",
                        "&:focus, &:focus-within":
                          e.focusRingStyles.inputStyles(e),
                      }
                    : "filled" === t
                    ? {
                        border: "1px solid transparent",
                        backgroundColor:
                          "dark" === e.colorScheme
                            ? e.colors.dark[5]
                            : e.colors.gray[1],
                        "&:focus, &:focus-within":
                          e.focusRingStyles.inputStyles(e),
                      }
                    : {
                        borderWidth: 0,
                        color:
                          "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
                        backgroundColor: "transparent",
                        minHeight: 28,
                        outline: 0,
                        "&:focus, &:focus-within": {
                          outline: "none",
                          borderColor: "transparent",
                        },
                        "&:disabled": {
                          backgroundColor: "transparent",
                          "&:focus, &:focus-within": {
                            outline: "none",
                            borderColor: "transparent",
                          },
                        },
                      };
                })({ theme: e, variant: i })
              ),
              withIcon: {
                paddingLeft:
                  "number" == typeof s ? s : e.fn.size({ size: t, sizes: d }),
              },
              invalid: {
                color: h,
                borderColor: h,
                "&::placeholder": { opacity: 1, color: h },
              },
              disabled: {
                backgroundColor:
                  "dark" === e.colorScheme
                    ? e.colors.dark[6]
                    : e.colors.gray[1],
                color: e.colors.dark[2],
                opacity: 0.6,
                cursor: "not-allowed",
                "&::placeholder": { color: e.colors.dark[2] },
              },
              icon: {
                pointerEvents: "none",
                position: "absolute",
                zIndex: 1,
                left: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width:
                  "number" == typeof s ? s : e.fn.size({ size: t, sizes: d }),
                color: o
                  ? e.colors.red["dark" === e.colorScheme ? 6 : 7]
                  : "dark" === e.colorScheme
                  ? e.colors.dark[2]
                  : e.colors.gray[5],
              },
              rightSection: {
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: a,
              },
            };
          }
        );
    },
    71943: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      var r = n(55729),
        i = n(46620),
        o = n(60693),
        a = n(32238);
      let l = function (e) {
        a.A &&
          !(0, o.Tn)(e) &&
          console.error(
            "useUnmount expected parameter is a function, got ".concat(typeof e)
          );
        var t = (0, i.A)(e);
        (0, r.useEffect)(function () {
          return function () {
            t.current();
          };
        }, []);
      };
    },
    74312: function (e) {
      e.exports = (function () {
        "use strict";
        var e = "millisecond",
          t = "second",
          n = "minute",
          r = "hour",
          i = "week",
          o = "month",
          a = "quarter",
          l = "year",
          s = "date",
          c = "Invalid Date",
          u =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          f =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          p = function (e, t, n) {
            var r = String(e);
            return !r || r.length >= t
              ? e
              : "" + Array(t + 1 - r.length).join(n) + e;
          },
          d = "en",
          m = {};
        m[d] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              n = e % 100;
            return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
          },
        };
        var h = "$isDayjsObject",
          g = function (e) {
            return e instanceof x || !(!e || !e[h]);
          },
          y = function e(t, n, r) {
            var i;
            if (!t) return d;
            if ("string" == typeof t) {
              var o = t.toLowerCase();
              m[o] && (i = o), n && ((m[o] = n), (i = o));
              var a = t.split("-");
              if (!i && a.length > 1) return e(a[0]);
            } else {
              var l = t.name;
              (m[l] = t), (i = l);
            }
            return !r && i && (d = i), i || (!r && d);
          },
          v = function (e, t) {
            if (g(e)) return e.clone();
            var n = "object" == typeof t ? t : {};
            return (n.date = e), (n.args = arguments), new x(n);
          },
          b = {
            s: p,
            z: function (e) {
              var t = -e.utcOffset(),
                n = Math.abs(t);
              return (
                (t <= 0 ? "+" : "-") +
                p(Math.floor(n / 60), 2, "0") +
                ":" +
                p(n % 60, 2, "0")
              );
            },
            m: function e(t, n) {
              if (t.date() < n.date()) return -e(n, t);
              var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                i = t.clone().add(r, o),
                a = n - i < 0,
                l = t.clone().add(r + (a ? -1 : 1), o);
              return +(-(r + (n - i) / (a ? i - l : l - i)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (c) {
              return (
                {
                  M: o,
                  y: l,
                  w: i,
                  d: "day",
                  D: s,
                  h: r,
                  m: n,
                  s: t,
                  ms: e,
                  Q: a,
                }[c] ||
                String(c || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          };
        (b.l = y),
          (b.i = g),
          (b.w = function (e, t) {
            return v(e, {
              locale: t.$L,
              utc: t.$u,
              x: t.$x,
              $offset: t.$offset,
            });
          });
        var x = (function () {
            function p(e) {
              (this.$L = y(e.locale, null, !0)),
                this.parse(e),
                (this.$x = this.$x || e.x || {}),
                (this[h] = !0);
            }
            var d = p.prototype;
            return (
              (d.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    n = e.utc;
                  if (null === t) return new Date(NaN);
                  if (b.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ("string" == typeof t && !/Z$/i.test(t)) {
                    var r = t.match(u);
                    if (r) {
                      var i = r[2] - 1 || 0,
                        o = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              i,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              o
                            )
                          )
                        : new Date(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            o
                          );
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init();
              }),
              (d.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (d.$utils = function () {
                return b;
              }),
              (d.isValid = function () {
                return this.$d.toString() !== c;
              }),
              (d.isSame = function (e, t) {
                var n = v(e);
                return this.startOf(t) <= n && n <= this.endOf(t);
              }),
              (d.isAfter = function (e, t) {
                return v(e) < this.startOf(t);
              }),
              (d.isBefore = function (e, t) {
                return this.endOf(t) < v(e);
              }),
              (d.$g = function (e, t, n) {
                return b.u(e) ? this[t] : this.set(n, e);
              }),
              (d.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (d.valueOf = function () {
                return this.$d.getTime();
              }),
              (d.startOf = function (e, a) {
                var c = this,
                  u = !!b.u(a) || a,
                  f = b.p(e),
                  p = function (e, t) {
                    var n = b.w(
                      c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e),
                      c
                    );
                    return u ? n : n.endOf("day");
                  },
                  d = function (e, t) {
                    return b.w(
                      c
                        .toDate()
                        [e].apply(
                          c.toDate("s"),
                          (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                        ),
                      c
                    );
                  },
                  m = this.$W,
                  h = this.$M,
                  g = this.$D,
                  y = "set" + (this.$u ? "UTC" : "");
                switch (f) {
                  case l:
                    return u ? p(1, 0) : p(31, 11);
                  case o:
                    return u ? p(1, h) : p(0, h + 1);
                  case i:
                    var v = this.$locale().weekStart || 0,
                      x = (m < v ? m + 7 : m) - v;
                    return p(u ? g - x : g + (6 - x), h);
                  case "day":
                  case s:
                    return d(y + "Hours", 0);
                  case r:
                    return d(y + "Minutes", 1);
                  case n:
                    return d(y + "Seconds", 2);
                  case t:
                    return d(y + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (d.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (d.$set = function (i, a) {
                var c,
                  u = b.p(i),
                  f = "set" + (this.$u ? "UTC" : ""),
                  p = (((c = {}).day = f + "Date"),
                  (c[s] = f + "Date"),
                  (c[o] = f + "Month"),
                  (c[l] = f + "FullYear"),
                  (c[r] = f + "Hours"),
                  (c[n] = f + "Minutes"),
                  (c[t] = f + "Seconds"),
                  (c[e] = f + "Milliseconds"),
                  c)[u],
                  d = "day" === u ? this.$D + (a - this.$W) : a;
                if (u === o || u === l) {
                  var m = this.clone().set(s, 1);
                  m.$d[p](d),
                    m.init(),
                    (this.$d = m.set(s, Math.min(this.$D, m.daysInMonth())).$d);
                } else p && this.$d[p](d);
                return this.init(), this;
              }),
              (d.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (d.get = function (e) {
                return this[b.p(e)]();
              }),
              (d.add = function (e, a) {
                var s,
                  c = this;
                e = Number(e);
                var u = b.p(a),
                  f = function (t) {
                    var n = v(c);
                    return b.w(n.date(n.date() + Math.round(t * e)), c);
                  };
                if (u === o) return this.set(o, this.$M + e);
                if (u === l) return this.set(l, this.$y + e);
                if ("day" === u) return f(1);
                if (u === i) return f(7);
                var p =
                    (((s = {})[n] = 6e4), (s[r] = 36e5), (s[t] = 1e3), s)[u] ||
                    1,
                  d = this.$d.getTime() + e * p;
                return b.w(d, this);
              }),
              (d.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (d.format = function (e) {
                var t = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || c;
                var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                  i = b.z(this),
                  o = this.$H,
                  a = this.$m,
                  l = this.$M,
                  s = n.weekdays,
                  u = n.months,
                  p = n.meridiem,
                  d = function (e, n, i, o) {
                    return (e && (e[n] || e(t, r))) || i[n].slice(0, o);
                  },
                  m = function (e) {
                    return b.s(o % 12 || 12, e, "0");
                  },
                  h =
                    p ||
                    function (e, t, n) {
                      var r = e < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    };
                return r.replace(f, function (e, r) {
                  return (
                    r ||
                    (function (e) {
                      switch (e) {
                        case "YY":
                          return String(t.$y).slice(-2);
                        case "YYYY":
                          return b.s(t.$y, 4, "0");
                        case "M":
                          return l + 1;
                        case "MM":
                          return b.s(l + 1, 2, "0");
                        case "MMM":
                          return d(n.monthsShort, l, u, 3);
                        case "MMMM":
                          return d(u, l);
                        case "D":
                          return t.$D;
                        case "DD":
                          return b.s(t.$D, 2, "0");
                        case "d":
                          return String(t.$W);
                        case "dd":
                          return d(n.weekdaysMin, t.$W, s, 2);
                        case "ddd":
                          return d(n.weekdaysShort, t.$W, s, 3);
                        case "dddd":
                          return s[t.$W];
                        case "H":
                          return String(o);
                        case "HH":
                          return b.s(o, 2, "0");
                        case "h":
                          return m(1);
                        case "hh":
                          return m(2);
                        case "a":
                          return h(o, a, !0);
                        case "A":
                          return h(o, a, !1);
                        case "m":
                          return String(a);
                        case "mm":
                          return b.s(a, 2, "0");
                        case "s":
                          return String(t.$s);
                        case "ss":
                          return b.s(t.$s, 2, "0");
                        case "SSS":
                          return b.s(t.$ms, 3, "0");
                        case "Z":
                          return i;
                      }
                      return null;
                    })(e) ||
                    i.replace(":", "")
                  );
                });
              }),
              (d.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (d.diff = function (e, s, c) {
                var u,
                  f = this,
                  p = b.p(s),
                  d = v(e),
                  m = (d.utcOffset() - this.utcOffset()) * 6e4,
                  h = this - d,
                  g = function () {
                    return b.m(f, d);
                  };
                switch (p) {
                  case l:
                    u = g() / 12;
                    break;
                  case o:
                    u = g();
                    break;
                  case a:
                    u = g() / 3;
                    break;
                  case i:
                    u = (h - m) / 6048e5;
                    break;
                  case "day":
                    u = (h - m) / 864e5;
                    break;
                  case r:
                    u = h / 36e5;
                    break;
                  case n:
                    u = h / 6e4;
                    break;
                  case t:
                    u = h / 1e3;
                    break;
                  default:
                    u = h;
                }
                return c ? u : b.a(u);
              }),
              (d.daysInMonth = function () {
                return this.endOf(o).$D;
              }),
              (d.$locale = function () {
                return m[this.$L];
              }),
              (d.locale = function (e, t) {
                if (!e) return this.$L;
                var n = this.clone(),
                  r = y(e, t, !0);
                return r && (n.$L = r), n;
              }),
              (d.clone = function () {
                return b.w(this.$d, this);
              }),
              (d.toDate = function () {
                return new Date(this.valueOf());
              }),
              (d.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (d.toISOString = function () {
                return this.$d.toISOString();
              }),
              (d.toString = function () {
                return this.$d.toUTCString();
              }),
              p
            );
          })(),
          w = x.prototype;
        return (
          (v.prototype = w),
          [
            ["$ms", e],
            ["$s", t],
            ["$m", n],
            ["$H", r],
            ["$W", "day"],
            ["$M", o],
            ["$y", l],
            ["$D", s],
          ].forEach(function (e) {
            w[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (v.extend = function (e, t) {
            return e.$i || (e(t, x, v), (e.$i = !0)), v;
          }),
          (v.locale = y),
          (v.isDayjs = g),
          (v.unix = function (e) {
            return v(1e3 * e);
          }),
          (v.en = m[d]),
          (v.Ls = m),
          (v.p = {}),
          v
        );
      })();
    },
    77523: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => u });
      var r = n(55729),
        i = n(27867),
        o = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable,
        c = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      function u(e) {
        var { withinPortal: t = !0, children: n } = e,
          o = ((e, t) => {
            var n = {};
            for (var r in e) l.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && a)
              for (var r of a(e))
                0 > t.indexOf(r) && s.call(e, r) && (n[r] = e[r]);
            return n;
          })(e, ["withinPortal", "children"]);
        return t
          ? r.createElement(
              i.Z,
              ((e, t) => {
                for (var n in t || (t = {})) l.call(t, n) && c(e, n, t[n]);
                if (a) for (var n of a(t)) s.call(t, n) && c(e, n, t[n]);
                return e;
              })({}, o),
              n
            )
          : r.createElement(r.Fragment, null, n);
      }
      u.displayName = "@mantine/core/OptionalPortal";
    },
    78124: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => ei });
      var r = n(55729),
        i = n(85607);
      let o = /input|select|textarea|button|object/,
        a = "a, input, select, textarea, button, object, [tabindex]";
      function l(e) {
        let t = e.getAttribute("tabindex");
        return null === t && (t = void 0), parseInt(t, 10);
      }
      function s(e) {
        let t = e.nodeName.toLowerCase(),
          n = !Number.isNaN(l(e));
        return (
          ((o.test(t) && !e.disabled) ||
            (e instanceof HTMLAnchorElement && e.href) ||
            n) &&
          (function (e) {
            if (
              e.getAttribute("aria-hidden") ||
              e.getAttribute("hidden") ||
              "hidden" === e.getAttribute("type")
            )
              return !1;
            let t = e;
            for (; t && t !== document.body && 11 !== t.nodeType; ) {
              if ("none" === t.style.display) return !1;
              t = t.parentNode;
            }
            return !0;
          })(e)
        );
      }
      function c(e) {
        let t = l(e);
        return (Number.isNaN(t) || t >= 0) && s(e);
      }
      var u = n(86661),
        f = n(23559),
        p = n(54352),
        d = n(61946),
        m = n(38169),
        h = Object.defineProperty,
        g = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        b = (e, t, n) =>
          t in e
            ? h(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let x = { xs: 320, sm: 380, md: 440, lg: 620, xl: 780 };
      var w = (0, m.r)(
          (
            e,
            { overflow: t, size: n, centered: r, zIndex: i, fullScreen: o }
          ) => ({
            close: {},
            overlay: { display: o ? "none" : void 0 },
            root: {
              position: "fixed",
              zIndex: i,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            inner: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: "auto",
              padding: o ? 0 : `${2 * e.spacing.xl}px ${e.spacing.md}px`,
              display: "flex",
              justifyContent: "center",
              alignItems: r ? "center" : "flex-start",
            },
            title: {
              marginRight: e.spacing.md,
              textOverflow: "ellipsis",
              display: "block",
              wordBreak: "break-word",
            },
            modal: ((e, t) => {
              for (var n in t || (t = {})) y.call(t, n) && b(e, n, t[n]);
              if (g) for (var n of g(t)) v.call(t, n) && b(e, n, t[n]);
              return e;
            })(
              {
                position: "relative",
                width: o ? "100vw" : e.fn.size({ sizes: x, size: n }),
                borderRadius: o ? 0 : void 0,
                outline: 0,
                backgroundColor:
                  "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
                marginTop: r ? "auto" : void 0,
                marginBottom: r ? "auto" : void 0,
                zIndex: 1,
              },
              o
                ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    maxHeight: "100vh",
                    overflowY: "auto",
                  }
                : {}
            ),
            header: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: e.spacing.md,
              marginRight: -9,
            },
            body: {
              maxHeight: "inside" === t ? "calc(100vh - 185px)" : null,
              overflowY: "inside" === t ? "auto" : null,
              wordBreak: "break-word",
            },
          })
        ),
        k = n(77523),
        O = n(5158),
        E = n(15719);
      function S({
        transitions: e,
        duration: t = 250,
        exitDuration: n = t,
        mounted: i,
        children: o,
        timingFunction: a,
        onExit: l,
        onEntered: s,
        onEnter: c,
        onExited: u,
      }) {
        let {
          transitionDuration: f,
          transitionStatus: p,
          transitionTimingFunction: d,
        } = (0, E.p)({
          mounted: i,
          duration: t,
          exitDuration: n,
          timingFunction: a,
          onExit: l,
          onEntered: s,
          onEnter: c,
          onExited: u,
        });
        if (0 === f) return i ? r.createElement(r.Fragment, null, o({})) : null;
        if ("exited" === p) return null;
        let m = Object.keys(e).reduce(
          (t, n) => (
            (t[n] = (0, O.y)({
              duration: e[n].duration,
              transition: e[n].transition,
              timingFunction: e[n].timingFunction || d,
              state: p,
            })),
            t
          ),
          {}
        );
        return r.createElement(r.Fragment, null, o(m));
      }
      S.displayName = "@mantine/core/GroupedTransition";
      var C = n(50433),
        P = n(98863),
        A = n(51663),
        j = (0, m.r)((e, { zIndex: t }) => ({
          root: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: t,
          },
        })),
        z = Object.defineProperty,
        R = Object.defineProperties,
        T = Object.getOwnPropertyDescriptors,
        I = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        N = Object.prototype.propertyIsEnumerable,
        L = (e, t, n) =>
          t in e
            ? z(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        M = (e, t) => {
          for (var n in t || (t = {})) D.call(t, n) && L(e, n, t[n]);
          if (I) for (var n of I(t)) N.call(t, n) && L(e, n, t[n]);
          return e;
        };
      let F = {
          opacity: 0.6,
          color: "#fff",
          zIndex: (0, p.I)("modal"),
          radius: 0,
          blur: 0,
        },
        _ = (0, r.forwardRef)((e, t) => {
          let n = (0, d.a1)("Overlay", F, e),
            {
              opacity: i,
              blur: o,
              color: a,
              gradient: l,
              zIndex: s,
              radius: c,
              sx: u,
              unstyled: f,
              className: p,
            } = n,
            m = ((e, t) => {
              var n = {};
              for (var r in e)
                D.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && I)
                for (var r of I(e))
                  0 > t.indexOf(r) && N.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "opacity",
              "blur",
              "color",
              "gradient",
              "zIndex",
              "radius",
              "sx",
              "unstyled",
              "className",
            ]),
            { classes: h, cx: g } = j(
              { zIndex: s },
              { name: "Overlay", unstyled: f }
            ),
            y = l ? { backgroundImage: l } : { backgroundColor: a },
            v = (e) =>
              r.createElement(
                C.a,
                M(
                  {
                    ref: t,
                    className: g(h.root, p),
                    sx: [
                      (e) =>
                        R(
                          M({}, y),
                          T({
                            opacity: i,
                            borderRadius: e.fn.size({
                              size: c,
                              sizes: e.radius,
                            }),
                          })
                        ),
                      ...(0, P.n)(u),
                    ],
                  },
                  e
                )
              );
          return o
            ? r.createElement(
                C.a,
                M(
                  {
                    className: g(h.root, p),
                    sx: [{ backdropFilter: `blur(${o}px)` }, ...(0, P.n)(u)],
                  },
                  m
                ),
                v()
              )
            : v(m);
        });
      _.displayName = "@mantine/core/Overlay";
      let B = (0, A.K)(_);
      var H = (0, m.r)((e, { radius: t, shadow: n, withBorder: r }) => ({
          root: {
            outline: 0,
            WebkitTapHighlightColor: "transparent",
            display: "block",
            textDecoration: "none",
            color: "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
            backgroundColor:
              "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
            boxSizing: "border-box",
            borderRadius: e.fn.radius(t),
            boxShadow: e.shadows[n] || n || "none",
            border: r
              ? `1px solid ${
                  "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
                }`
              : void 0,
          },
        })),
        U = Object.defineProperty,
        $ = Object.getOwnPropertySymbols,
        W = Object.prototype.hasOwnProperty,
        V = Object.prototype.propertyIsEnumerable,
        q = (e, t, n) =>
          t in e
            ? U(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let Y = {},
        K = (0, r.forwardRef)((e, t) => {
          let n = (0, d.a1)("Paper", Y, e),
            {
              className: i,
              children: o,
              radius: a,
              withBorder: l,
              shadow: s,
              unstyled: c,
            } = n,
            u = ((e, t) => {
              var n = {};
              for (var r in e)
                W.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && $)
                for (var r of $(e))
                  0 > t.indexOf(r) && V.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "children",
              "radius",
              "withBorder",
              "shadow",
              "unstyled",
            ]),
            { classes: f, cx: p } = H(
              { radius: a, shadow: s, withBorder: l },
              { name: "Paper", unstyled: c }
            );
          return r.createElement(
            C.a,
            ((e, t) => {
              for (var n in t || (t = {})) W.call(t, n) && q(e, n, t[n]);
              if ($) for (var n of $(t)) V.call(t, n) && q(e, n, t[n]);
              return e;
            })({ className: p(f.root, i), ref: t }, u),
            o
          );
        });
      K.displayName = "@mantine/core/Paper";
      let G = (0, A.K)(K);
      var X = n(37948),
        Z = n(45003),
        Q = Object.defineProperty,
        J = Object.getOwnPropertySymbols,
        ee = Object.prototype.hasOwnProperty,
        et = Object.prototype.propertyIsEnumerable,
        en = (e, t, n) =>
          t in e
            ? Q(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let er = {
        size: "md",
        transitionDuration: 250,
        overflow: "outside",
        padding: "lg",
        shadow: "lg",
        closeOnClickOutside: !0,
        closeOnEscape: !0,
        trapFocus: !0,
        withCloseButton: !0,
        withinPortal: !0,
        lockScroll: !0,
        withFocusReturn: !0,
        overlayBlur: 0,
        zIndex: (0, p.I)("modal"),
        exitTransitionDuration: 0,
      };
      function ei(e) {
        var t, n, o;
        let l = (0, d.a1)("Modal", er, e),
          {
            className: p,
            opened: m,
            title: h,
            onClose: g,
            children: y,
            withCloseButton: v,
            overlayOpacity: b,
            size: x,
            transitionDuration: O,
            exitTransitionDuration: E,
            closeButtonLabel: P,
            overlayColor: A,
            overflow: j,
            transition: z,
            padding: R,
            shadow: T,
            radius: I,
            id: D,
            classNames: N,
            styles: L,
            closeOnClickOutside: M,
            trapFocus: F,
            closeOnEscape: _,
            centered: H,
            target: U,
            withinPortal: $,
            zIndex: W,
            overlayBlur: V,
            transitionTimingFunction: q,
            fullScreen: Y,
            unstyled: K,
            lockScroll: Q,
            withFocusReturn: ei,
          } = l,
          eo = ((e, t) => {
            var n = {};
            for (var r in e) ee.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && J)
              for (var r of J(e))
                0 > t.indexOf(r) && et.call(e, r) && (n[r] = e[r]);
            return n;
          })(l, [
            "className",
            "opened",
            "title",
            "onClose",
            "children",
            "withCloseButton",
            "overlayOpacity",
            "size",
            "transitionDuration",
            "exitTransitionDuration",
            "closeButtonLabel",
            "overlayColor",
            "overflow",
            "transition",
            "padding",
            "shadow",
            "radius",
            "id",
            "classNames",
            "styles",
            "closeOnClickOutside",
            "trapFocus",
            "closeOnEscape",
            "centered",
            "target",
            "withinPortal",
            "zIndex",
            "overlayBlur",
            "transitionTimingFunction",
            "fullScreen",
            "unstyled",
            "lockScroll",
            "withFocusReturn",
          ]),
          ea = (0, i.B)(D),
          el = `${ea}-title`,
          es = `${ea}-body`,
          {
            classes: ec,
            cx: eu,
            theme: ef,
          } = w(
            { size: x, overflow: j, centered: H, zIndex: W, fullScreen: Y },
            { unstyled: K, classNames: N, styles: L, name: "Modal" }
          ),
          ep = (function () {
            let e =
                !(arguments.length > 0) ||
                void 0 === arguments[0] ||
                arguments[0],
              t = (0, r.useRef)(),
              n = (0, r.useRef)(null),
              i = (0, r.useCallback)(
                (r) => {
                  e &&
                    null !== r &&
                    ((n.current = (function (e) {
                      let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "body > :not(script)",
                        n = Array.from(document.querySelectorAll(t)).map(
                          (t) => {
                            var n;
                            if (
                              (null == (n = null == t ? void 0 : t.shadowRoot)
                                ? void 0
                                : n.contains(e)) ||
                              t.contains(e)
                            )
                              return;
                            let r = t.getAttribute("aria-hidden");
                            return (
                              (null === r || "false" === r) &&
                                t.setAttribute("aria-hidden", "true"),
                              { node: t, ariaHidden: r }
                            );
                          }
                        );
                      return () => {
                        n.forEach((e) => {
                          e &&
                            (null === e.ariaHidden
                              ? e.node.removeAttribute("aria-hidden")
                              : e.node.setAttribute(
                                  "aria-hidden",
                                  e.ariaHidden
                                ));
                        });
                      };
                    })(r)),
                    t.current !== r &&
                      (r
                        ? (setTimeout(() => {
                            if (r.getRootNode()) {
                              let e = r.querySelector("[data-autofocus]");
                              if (!e) {
                                let t = Array.from(r.querySelectorAll(a));
                                !(e = t.find(c) || t.find(s) || null) &&
                                  s(r) &&
                                  (e = r);
                              }
                              e && e.focus({ preventScroll: !0 });
                            }
                          }),
                          (t.current = r))
                        : (t.current = null)));
                },
                [e]
              );
            return (
              (0, r.useEffect)(() => {
                if (!e) return;
                let r = (e) => {
                  "Tab" === e.key &&
                    t.current &&
                    (function (e, t) {
                      let n = Array.from(e.querySelectorAll(a)).filter(c);
                      if (!n.length) return t.preventDefault();
                      let r = n[t.shiftKey ? 0 : n.length - 1],
                        i = e.getRootNode();
                      if (r !== i.activeElement && e !== i.activeElement)
                        return;
                      t.preventDefault();
                      let o = n[t.shiftKey ? n.length - 1 : 0];
                      o && o.focus();
                    })(t.current, e);
                };
                return (
                  document.addEventListener("keydown", r),
                  () => {
                    document.removeEventListener("keydown", r),
                      n.current && n.current();
                  }
                );
              }, [e]),
              i
            );
          })(F && m),
          ed = (0, r.useRef)(null),
          em = (0, u.p)(ep, ed),
          eh =
            "number" == typeof b ? b : "dark" === ef.colorScheme ? 0.85 : 0.75;
        !(function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { disableBodyPadding: !1 },
            [n, i] = (0, r.useState)(e || !1),
            o = (0, r.useRef)(0),
            { disableBodyPadding: a } = t,
            l = (0, r.useRef)(null),
            s = () => {
              (null == l ? void 0 : l.current) &&
                (l.current.parentNode.removeChild(l.current),
                (l.current = null));
            };
          (0, r.useEffect)(
            () => (
              n
                ? (() => {
                    o.current = window.scrollY;
                    let e = ((e) => {
                        let { disableBodyPadding: t } = e,
                          n = t
                            ? null
                            : "undefined" == typeof document
                            ? 0
                            : parseInt(
                                window.getComputedStyle(document.body)
                                  .paddingRight,
                                10
                              ) +
                              (window.innerWidth -
                                document.documentElement.clientWidth);
                        return "body {\n        --removed-scroll-width: "
                          .concat(
                            n,
                            "px;\n        touch-action: none;\n        overflow: hidden !important;\n        position: relative !important;\n        "
                          )
                          .concat(
                            n
                              ? "padding-right: var(--removed-scroll-width) !important;"
                              : "",
                            "\n        "
                          );
                      })({ disableBodyPadding: a }),
                      t = (function () {
                        let e = document.createElement("style");
                        return (
                          (e.type = "text/css"),
                          e.setAttribute("mantine-scroll-lock", ""),
                          e
                        );
                      })();
                    t.styleSheet
                      ? (t.styleSheet.cssText = e)
                      : t.appendChild(document.createTextNode(e)),
                      (
                        document.head ||
                        document.getElementsByTagName("head")[0]
                      ).appendChild(t),
                      (l.current = t);
                  })()
                : s(),
              s
            ),
            [n]
          ),
            (0, r.useEffect)(() => {
              void 0 !== e && i(e);
            }, [e]),
            (0, r.useEffect)(() => {
              void 0 === e &&
                "hidden" === window.document.body.style.overflow &&
                i(!0);
            }, [i]);
        })(Q && m);
        let eg = (e) => {
          !F && "Escape" === e.key && _ && g();
        };
        (0, r.useEffect)(() => {
          if (!F)
            return (
              window.addEventListener("keydown", eg),
              () => window.removeEventListener("keydown", eg)
            );
        }, [F]),
          (function (e) {
            let { opened: t, shouldReturnFocus: n = !0 } = e,
              i = (0, r.useRef)(),
              o = () => {
                var e;
                i.current &&
                  "focus" in i.current &&
                  "function" == typeof i.current.focus &&
                  (null == (e = i.current) || e.focus({ preventScroll: !0 }));
              };
            (0, f.C)(() => {
              let e = -1,
                r = (t) => {
                  "Tab" === t.key && window.clearTimeout(e);
                };
              return (
                document.addEventListener("keydown", r),
                t
                  ? (i.current = document.activeElement)
                  : n && (e = window.setTimeout(o, 10)),
                () => {
                  window.clearTimeout(e),
                    document.removeEventListener("keydown", r);
                }
              );
            }, [t, n]);
          })({ opened: m, shouldReturnFocus: F && ei });
        let ey = (0, r.useRef)(null);
        (t = "mousedown"),
          (n = (e) => {
            ey.current = e.target;
          }),
          (0, r.useEffect)(
            () => (
              window.addEventListener(t, n, void 0),
              () => window.removeEventListener(t, n, o)
            ),
            [t, n]
          );
        let ev = () => {
          ey.current === ed.current && M && g();
        };
        return r.createElement(
          k.r,
          { withinPortal: $, target: U },
          r.createElement(
            S,
            {
              mounted: m,
              duration: O,
              exitDuration: E,
              timingFunction: q,
              transitions: {
                modal: { duration: O, transition: z || (Y ? "fade" : "pop") },
                overlay: {
                  duration: O / 2,
                  transition: "fade",
                  timingFunction: "ease",
                },
              },
            },
            (e) =>
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  C.a,
                  ((e, t) => {
                    for (var n in t || (t = {}))
                      ee.call(t, n) && en(e, n, t[n]);
                    if (J) for (var n of J(t)) et.call(t, n) && en(e, n, t[n]);
                    return e;
                  })({ id: ea, className: eu(ec.root, p) }, eo),
                  r.createElement(
                    "div",
                    { style: e.overlay },
                    r.createElement(B, {
                      className: ec.overlay,
                      sx: { position: "fixed" },
                      zIndex: 0,
                      blur: V,
                      color:
                        A ||
                        ("dark" === ef.colorScheme
                          ? ef.colors.dark[9]
                          : ef.black),
                      opacity: eh,
                      unstyled: K,
                    })
                  ),
                  r.createElement(
                    "div",
                    {
                      role: "presentation",
                      className: ec.inner,
                      onClick: ev,
                      onKeyDown: (e) => {
                        var t;
                        (null == (t = e.target)
                          ? void 0
                          : t.getAttribute("data-mantine-stop-propagation")) !==
                          "true" &&
                          "Escape" === e.key &&
                          _ &&
                          g();
                      },
                      ref: em,
                    },
                    r.createElement(
                      G,
                      {
                        className: ec.modal,
                        shadow: T,
                        p: R,
                        radius: I,
                        role: "dialog",
                        "aria-labelledby": el,
                        "aria-describedby": es,
                        "aria-modal": !0,
                        tabIndex: -1,
                        style: e.modal,
                        unstyled: K,
                        onClick: (e) => e.stopPropagation(),
                      },
                      (h || v) &&
                        r.createElement(
                          "div",
                          { className: ec.header },
                          r.createElement(
                            X.E,
                            { id: el, className: ec.title },
                            h
                          ),
                          v &&
                            r.createElement(Z.J, {
                              iconSize: 16,
                              onClick: g,
                              "aria-label": P,
                              className: ec.close,
                            })
                        ),
                      r.createElement("div", { id: es, className: ec.body }, y)
                    )
                  )
                )
              )
          )
        );
      }
      ei.displayName = "@mantine/core/Modal";
    },
    81488: (e, t, n) => {
      var r = n(29143);
      (t.formatArgs = function (t) {
        if (
          ((t[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            t[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        let n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        let r = 0,
          i = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e) => {
          "%%" !== e && (r++, "%c" === e && (i = r));
        }),
          t.splice(i, 0, n);
      }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
          } catch (e) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
          } catch (e) {}
          return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e;
        }),
        (t.useColors = function () {
          let e;
          return (
            ("undefined" != typeof window &&
              !!window.process &&
              ("renderer" === window.process.type ||
                !!window.process.__nwjs)) ||
            (!(
              "undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            ) &&
              (("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ("undefined" != typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ("undefined" != typeof navigator &&
                  navigator.userAgent &&
                  (e = navigator.userAgent
                    .toLowerCase()
                    .match(/firefox\/(\d+)/)) &&
                  parseInt(e[1], 10) >= 31) ||
                ("undefined" != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.destroy = (() => {
          let e = !1;
          return () => {
            e ||
              ((e = !0),
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              ));
          };
        })()),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (t.log = console.debug || console.log || (() => {})),
        (e.exports = n(16141)(t));
      let { formatters: i } = e.exports;
      i.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };
    },
    82626: (e, t, n) => {
      "use strict";
      n.d(t, { YQ: () => i, dh: () => o });
      var r = n(55729);
      function i(e, t, n) {
        var i = this,
          o = (0, r.useRef)(null),
          a = (0, r.useRef)(0),
          l = (0, r.useRef)(null),
          s = (0, r.useRef)([]),
          c = (0, r.useRef)(),
          u = (0, r.useRef)(),
          f = (0, r.useRef)(e),
          p = (0, r.useRef)(!0);
        (0, r.useEffect)(
          function () {
            f.current = e;
          },
          [e]
        );
        var d = !t && 0 !== t && "undefined" != typeof window;
        if ("function" != typeof e) throw TypeError("Expected a function");
        t = +t || 0;
        var m = !!(n = n || {}).leading,
          h = !("trailing" in n) || !!n.trailing,
          g = "maxWait" in n,
          y = g ? Math.max(+n.maxWait || 0, t) : null;
        return (
          (0, r.useEffect)(function () {
            return (
              (p.current = !0),
              function () {
                p.current = !1;
              }
            );
          }, []),
          (0, r.useMemo)(
            function () {
              var e = function (e) {
                  var t = s.current,
                    n = c.current;
                  return (
                    (s.current = c.current = null),
                    (a.current = e),
                    (u.current = f.current.apply(n, t))
                  );
                },
                n = function (e, t) {
                  d && cancelAnimationFrame(l.current),
                    (l.current = d
                      ? requestAnimationFrame(e)
                      : setTimeout(e, t));
                },
                r = function (e) {
                  if (!p.current) return !1;
                  var n = e - o.current;
                  return (
                    !o.current || n >= t || n < 0 || (g && e - a.current >= y)
                  );
                },
                v = function (t) {
                  return (
                    (l.current = null),
                    h && s.current
                      ? e(t)
                      : ((s.current = c.current = null), u.current)
                  );
                },
                b = function e() {
                  var i = Date.now();
                  if (r(i)) return v(i);
                  if (p.current) {
                    var l = t - (i - o.current);
                    n(e, g ? Math.min(l, y - (i - a.current)) : l);
                  }
                },
                x = function () {
                  var f = Date.now(),
                    d = r(f);
                  if (
                    ((s.current = [].slice.call(arguments)),
                    (c.current = i),
                    (o.current = f),
                    d)
                  ) {
                    if (!l.current && p.current)
                      return (
                        (a.current = o.current),
                        n(b, t),
                        m ? e(o.current) : u.current
                      );
                    if (g) return n(b, t), e(o.current);
                  }
                  return l.current || n(b, t), u.current;
                };
              return (
                (x.cancel = function () {
                  l.current &&
                    (d
                      ? cancelAnimationFrame(l.current)
                      : clearTimeout(l.current)),
                    (a.current = 0),
                    (s.current = o.current = c.current = l.current = null);
                }),
                (x.isPending = function () {
                  return !!l.current;
                }),
                (x.flush = function () {
                  return l.current ? v(Date.now()) : u.current;
                }),
                x
              );
            },
            [m, g, t, y, h, d]
          )
        );
      }
      function o(e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.leading,
          a = r.trailing;
        return i(e, t, {
          maxWait: t,
          leading: void 0 === o || o,
          trailing: void 0 === a || a,
        });
      }
    },
    84206: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => el });
      var r = n(55729);
      let i = (function (e) {
        return function (t, n) {
          var i = (0, r.useRef)(!1);
          e(function () {
            return function () {
              i.current = !1;
            };
          }, []),
            e(function () {
              if (i.current) return t();
              i.current = !0;
            }, n);
        };
      })(r.useEffect);
      var o = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        a = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        },
        l = function (e, t) {
          var n = t.manual,
            l = t.ready,
            s = void 0 === l || l,
            c = t.defaultParams,
            u = void 0 === c ? [] : c,
            f = t.refreshDeps,
            p = t.refreshDepsAction,
            d = (0, r.useRef)(!1);
          return (
            (d.current = !1),
            i(
              function () {
                !n && s && ((d.current = !0), e.run.apply(e, a([], o(u), !1)));
              },
              [s]
            ),
            i(function () {
              !d.current && (n || ((d.current = !0), p ? p() : e.refresh()));
            }, a([], o(void 0 === f ? [] : f), !1)),
            {
              onBefore: function () {
                if (!s) return { stopNow: !0 };
              },
            }
          );
        };
      function s(e, t) {
        var n = (0, r.useRef)({
          deps: t,
          obj: void 0,
          initialized: !1,
        }).current;
        return (
          (!1 === n.initialized ||
            !(function (e, t) {
              if (e === t) return !0;
              for (var n = 0; n < e.length; n++)
                if (!Object.is(e[n], t[n])) return !1;
              return !0;
            })(n.deps, t)) &&
            ((n.deps = t), (n.obj = e()), (n.initialized = !0)),
          n.obj
        );
      }
      l.onInit = function (e) {
        var t = e.ready;
        return { loading: !e.manual && (void 0 === t || t) };
      };
      var c = n(71943),
        u = function () {
          return (u =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        f = new Map(),
        p = function (e, t, n) {
          var r = f.get(e);
          (null == r ? void 0 : r.timer) && clearTimeout(r.timer);
          var i = void 0;
          t > -1 &&
            (i = setTimeout(function () {
              f.delete(e);
            }, t)),
            f.set(e, u(u({}, n), { timer: i }));
        },
        d = new Map(),
        m = function (e, t) {
          d.set(e, t),
            t
              .then(function (t) {
                return d.delete(e), t;
              })
              .catch(function () {
                d.delete(e);
              });
        },
        h = {},
        g = function (e, t) {
          h[e] &&
            h[e].forEach(function (e) {
              return e(t);
            });
        },
        y = function (e, t) {
          return (
            h[e] || (h[e] = []),
            h[e].push(t),
            function () {
              var n = h[e].indexOf(t);
              h[e].splice(n, 1);
            }
          );
        },
        v = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        b = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        };
      let x = function (e, t) {
        var n = t.cacheKey,
          i = t.cacheTime,
          o = void 0 === i ? 3e5 : i,
          a = t.staleTime,
          l = void 0 === a ? 0 : a,
          u = t.setCache,
          h = t.getCache,
          x = (0, r.useRef)(),
          w = (0, r.useRef)(),
          k = function (e, t) {
            u ? u(t) : p(e, o, t), g(e, t.data);
          },
          O = function (e, t) {
            return (void 0 === t && (t = []), h) ? h(t) : f.get(e);
          };
        return (s(function () {
          if (n) {
            var t = O(n);
            t &&
              Object.hasOwnProperty.call(t, "data") &&
              ((e.state.data = t.data),
              (e.state.params = t.params),
              (-1 === l || new Date().getTime() - t.time <= l) &&
                (e.state.loading = !1)),
              (x.current = y(n, function (t) {
                e.setState({ data: t });
              }));
          }
        }, []),
        (0, c.A)(function () {
          var e;
          null == (e = x.current) || e.call(x);
        }),
        n)
          ? {
              onBefore: function (e) {
                var t = O(n, e);
                return t && Object.hasOwnProperty.call(t, "data")
                  ? -1 === l || new Date().getTime() - t.time <= l
                    ? {
                        loading: !1,
                        data: null == t ? void 0 : t.data,
                        error: void 0,
                        returnNow: !0,
                      }
                    : { data: null == t ? void 0 : t.data, error: void 0 }
                  : {};
              },
              onRequest: function (e, t) {
                var r = d.get(n);
                return (
                  (r && r !== w.current) ||
                    ((w.current = r = e.apply(void 0, b([], v(t), !1))),
                    m(n, r)),
                  { servicePromise: r }
                );
              },
              onSuccess: function (t, r) {
                var i;
                n &&
                  (null == (i = x.current) || i.call(x),
                  k(n, { data: t, params: r, time: new Date().getTime() }),
                  (x.current = y(n, function (t) {
                    e.setState({ data: t });
                  })));
              },
              onMutate: function (t) {
                var r;
                n &&
                  (null == (r = x.current) || r.call(x),
                  k(n, {
                    data: t,
                    params: e.state.params,
                    time: new Date().getTime(),
                  }),
                  (x.current = y(n, function (t) {
                    e.setState({ data: t });
                  })));
              },
            }
          : {};
      };
      var w = n(12364),
        k = n.n(w),
        O = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        E = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        };
      let S = function (e, t) {
          var n = t.debounceWait,
            i = t.debounceLeading,
            o = t.debounceTrailing,
            a = t.debounceMaxWait,
            l = (0, r.useRef)(),
            s = (0, r.useMemo)(
              function () {
                var e = {};
                return (
                  void 0 !== i && (e.leading = i),
                  void 0 !== o && (e.trailing = o),
                  void 0 !== a && (e.maxWait = a),
                  e
                );
              },
              [i, o, a]
            );
          return ((0, r.useEffect)(
            function () {
              if (n) {
                var t = e.runAsync.bind(e);
                return (
                  (l.current = k()(
                    function (e) {
                      e();
                    },
                    n,
                    s
                  )),
                  (e.runAsync = function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    return new Promise(function (n, r) {
                      var i;
                      null == (i = l.current) ||
                        i.call(l, function () {
                          t.apply(void 0, E([], O(e), !1))
                            .then(n)
                            .catch(r);
                        });
                    });
                  }),
                  function () {
                    var n;
                    null == (n = l.current) || n.cancel(), (e.runAsync = t);
                  }
                );
              }
            },
            [n, s]
          ),
          n)
            ? {
                onCancel: function () {
                  var e;
                  null == (e = l.current) || e.cancel();
                },
              }
            : {};
        },
        C = function (e, t) {
          var n = t.loadingDelay,
            i = (0, r.useRef)();
          if (!n) return {};
          var o = function () {
            i.current && clearTimeout(i.current);
          };
          return {
            onBefore: function () {
              return (
                o(),
                (i.current = setTimeout(function () {
                  e.setState({ loading: !0 });
                }, n)),
                { loading: !1 }
              );
            },
            onFinally: function () {
              o();
            },
            onCancel: function () {
              o();
            },
          };
        };
      var P = !!window.document && !!window.document.createElement;
      function A() {
        return !P || "hidden" !== document.visibilityState;
      }
      var j = [];
      P &&
        window.addEventListener(
          "visibilitychange",
          function () {
            if (A()) for (var e = 0; e < j.length; e++) (0, j[e])();
          },
          !1
        );
      let z = function (e, t) {
        var n = t.pollingInterval,
          o = t.pollingWhenHidden,
          a = void 0 === o || o,
          l = t.pollingErrorRetryCount,
          s = void 0 === l ? -1 : l,
          c = (0, r.useRef)(),
          u = (0, r.useRef)(),
          f = (0, r.useRef)(0),
          p = function () {
            var e;
            c.current && clearTimeout(c.current),
              null == (e = u.current) || e.call(u);
          };
        return (i(
          function () {
            n || p();
          },
          [n]
        ),
        n)
          ? {
              onBefore: function () {
                p();
              },
              onError: function () {
                f.current += 1;
              },
              onSuccess: function () {
                f.current = 0;
              },
              onFinally: function () {
                -1 === s || (-1 !== s && f.current <= s)
                  ? (c.current = setTimeout(function () {
                      if (a || A()) e.refresh();
                      else {
                        var t;
                        (t = function () {
                          e.refresh();
                        }),
                          j.push(t),
                          (u.current = function () {
                            var e = j.indexOf(t);
                            j.splice(e, 1);
                          });
                      }
                    }, n))
                  : (f.current = 0);
              },
              onCancel: function () {
                p();
              },
            }
          : {};
      };
      var R = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        T = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        },
        I = [];
      if (P) {
        var D = function () {
          if (A() && (!P || void 0 === navigator.onLine || navigator.onLine))
            for (var e = 0; e < I.length; e++) (0, I[e])();
        };
        window.addEventListener("visibilitychange", D, !1),
          window.addEventListener("focus", D, !1);
      }
      let N = function (e, t) {
          var n = t.refreshOnWindowFocus,
            i = t.focusTimespan,
            o = void 0 === i ? 5e3 : i,
            a = (0, r.useRef)(),
            l = function () {
              var e;
              null == (e = a.current) || e.call(a);
            };
          return (
            (0, r.useEffect)(
              function () {
                if (n) {
                  var t,
                    r,
                    i,
                    s =
                      ((t = e.refresh.bind(e)),
                      (r = !1),
                      function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        r ||
                          ((r = !0),
                          t.apply(void 0, T([], R(e), !1)),
                          setTimeout(function () {
                            r = !1;
                          }, o));
                      });
                  (i = function () {
                    s();
                  }),
                    I.push(i),
                    (a.current = function () {
                      var e = I.indexOf(i);
                      e > -1 && I.splice(e, 1);
                    });
                }
                return function () {
                  l();
                };
              },
              [n, o]
            ),
            (0, c.A)(function () {
              l();
            }),
            {}
          );
        },
        L = function (e, t) {
          var n = t.retryInterval,
            i = t.retryCount,
            o = (0, r.useRef)(),
            a = (0, r.useRef)(0),
            l = (0, r.useRef)(!1);
          return i
            ? {
                onBefore: function () {
                  l.current || (a.current = 0),
                    (l.current = !1),
                    o.current && clearTimeout(o.current);
                },
                onSuccess: function () {
                  a.current = 0;
                },
                onError: function () {
                  (a.current += 1),
                    -1 === i || a.current <= i
                      ? (o.current = setTimeout(
                          function () {
                            (l.current = !0), e.refresh();
                          },
                          null != n
                            ? n
                            : Math.min(1e3 * Math.pow(2, a.current), 3e4)
                        ))
                      : (a.current = 0);
                },
                onCancel: function () {
                  (a.current = 0), o.current && clearTimeout(o.current);
                },
              }
            : {};
        };
      var M = n(47687),
        F = n.n(M),
        _ = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        B = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        };
      let H = function (e, t) {
        var n = t.throttleWait,
          i = t.throttleLeading,
          o = t.throttleTrailing,
          a = (0, r.useRef)(),
          l = {};
        return (void 0 !== i && (l.leading = i),
        void 0 !== o && (l.trailing = o),
        (0, r.useEffect)(
          function () {
            if (n) {
              var t = e.runAsync.bind(e);
              return (
                (a.current = F()(
                  function (e) {
                    e();
                  },
                  n,
                  l
                )),
                (e.runAsync = function () {
                  for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                  return new Promise(function (n, r) {
                    var i;
                    null == (i = a.current) ||
                      i.call(a, function () {
                        t.apply(void 0, B([], _(e), !1))
                          .then(n)
                          .catch(r);
                      });
                  });
                }),
                function () {
                  var n;
                  (e.runAsync = t), null == (n = a.current) || n.cancel();
                }
              );
            }
          },
          [n, i, o]
        ),
        n)
          ? {
              onCancel: function () {
                var e;
                null == (e = a.current) || e.cancel();
              },
            }
          : {};
      };
      var U = n(46620),
        $ = n(69511),
        W = n(31278),
        V = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        };
      let q = function () {
        var e = V((0, r.useState)({}), 2)[1];
        return (0, r.useCallback)(function () {
          return e({});
        }, []);
      };
      var Y = n(60693),
        K = function () {
          return (K =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        G = function (e, t) {
          var n,
            r,
            i,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: l(0), throw: l(1), return: l(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function l(o) {
            return function (l) {
              var s = [o, l];
              if (n) throw TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & s[0]
                          ? r.return
                          : s[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, s[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (r = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = s);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(s);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = t.call(e, a);
                } catch (e) {
                  (s = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            };
          }
        },
        X = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, r = Object.getOwnPropertySymbols(e);
              i < r.length;
              i++
            )
              0 > t.indexOf(r[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          return n;
        },
        Z = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        Q = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        },
        J = (function () {
          function e(e, t, n, r) {
            void 0 === r && (r = {}),
              (this.serviceRef = e),
              (this.options = t),
              (this.subscribe = n),
              (this.initState = r),
              (this.count = 0),
              (this.state = {
                loading: !1,
                params: void 0,
                data: void 0,
                error: void 0,
              }),
              (this.state = K(K(K({}, this.state), { loading: !t.manual }), r));
          }
          return (
            (e.prototype.setState = function (e) {
              void 0 === e && (e = {}),
                (this.state = K(K({}, this.state), e)),
                this.subscribe();
            }),
            (e.prototype.runPluginHandler = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              var r = this.pluginImpls
                .map(function (n) {
                  var r;
                  return null == (r = n[e])
                    ? void 0
                    : r.call.apply(r, Q([n], Z(t), !1));
                })
                .filter(Boolean);
              return Object.assign.apply(Object, Q([{}], Z(r), !1));
            }),
            (e.prototype.runAsync = function () {
              for (
                var e, t, n, r, i, o, a, l, s, c, u, f, p, d, m = [], h = 0;
                h < arguments.length;
                h++
              )
                m[h] = arguments[h];
              return (
                (e = this),
                (t = void 0),
                (n = void 0),
                (r = function () {
                  var e, t, n, r, h, g, y, v, b, x, w;
                  return G(this, function (k) {
                    switch (k.label) {
                      case 0:
                        if (
                          ((this.count += 1),
                          (e = this.count),
                          (r =
                            void 0 !==
                              (n = (t = this.runPluginHandler("onBefore", m))
                                .stopNow) && n),
                          (g = void 0 !== (h = t.returnNow) && h),
                          (y = X(t, ["stopNow", "returnNow"])),
                          r)
                        )
                          return [2, new Promise(function () {})];
                        if (
                          (this.setState(K({ loading: !0, params: m }, y)), g)
                        )
                          return [2, Promise.resolve(y.data)];
                        null == (o = (i = this.options).onBefore) ||
                          o.call(i, m),
                          (k.label = 1);
                      case 1:
                        return (
                          k.trys.push([1, 3, , 4]),
                          (v = this.runPluginHandler(
                            "onRequest",
                            this.serviceRef.current,
                            m
                          ).servicePromise) ||
                            (v = (w = this.serviceRef).current.apply(
                              w,
                              Q([], Z(m), !1)
                            )),
                          [4, v]
                        );
                      case 2:
                        if (((b = k.sent()), e !== this.count))
                          return [2, new Promise(function () {})];
                        return (
                          this.setState({
                            data: b,
                            error: void 0,
                            loading: !1,
                          }),
                          null == (l = (a = this.options).onSuccess) ||
                            l.call(a, b, m),
                          this.runPluginHandler("onSuccess", b, m),
                          null == (c = (s = this.options).onFinally) ||
                            c.call(s, m, b, void 0),
                          e === this.count &&
                            this.runPluginHandler("onFinally", m, b, void 0),
                          [2, b]
                        );
                      case 3:
                        if (((x = k.sent()), e !== this.count))
                          return [2, new Promise(function () {})];
                        throw (
                          (this.setState({ error: x, loading: !1 }),
                          null == (f = (u = this.options).onError) ||
                            f.call(u, x, m),
                          this.runPluginHandler("onError", x, m),
                          null == (d = (p = this.options).onFinally) ||
                            d.call(p, m, void 0, x),
                          e === this.count &&
                            this.runPluginHandler("onFinally", m, void 0, x),
                          x)
                        );
                      case 4:
                        return [2];
                    }
                  });
                }),
                new (n || (n = Promise))(function (i, o) {
                  function a(e) {
                    try {
                      s(r.next(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function l(e) {
                    try {
                      s(r.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  }
                  function s(e) {
                    var t;
                    e.done
                      ? i(e.value)
                      : ((t = e.value) instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })
                        ).then(a, l);
                  }
                  s((r = r.apply(e, t || [])).next());
                })
              );
            }),
            (e.prototype.run = function () {
              for (var e = this, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              this.runAsync.apply(this, Q([], Z(t), !1)).catch(function (t) {
                e.options.onError || console.error(t);
              });
            }),
            (e.prototype.cancel = function () {
              (this.count += 1),
                this.setState({ loading: !1 }),
                this.runPluginHandler("onCancel");
            }),
            (e.prototype.refresh = function () {
              this.run.apply(this, Q([], Z(this.state.params || []), !1));
            }),
            (e.prototype.refreshAsync = function () {
              return this.runAsync.apply(
                this,
                Q([], Z(this.state.params || []), !1)
              );
            }),
            (e.prototype.mutate = function (e) {
              var t = (0, Y.Tn)(e) ? e(this.state.data) : e;
              this.runPluginHandler("onMutate", t), this.setState({ data: t });
            }),
            e
          );
        })(),
        ee = function () {
          return (ee =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        et = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, r = Object.getOwnPropertySymbols(e);
              i < r.length;
              i++
            )
              0 > t.indexOf(r[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          return n;
        },
        en = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        er = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        };
      let ei = function (e, t, n) {
        void 0 === t && (t = {}), void 0 === n && (n = []);
        var r = t.manual,
          i = void 0 !== r && r,
          o = et(t, ["manual"]),
          a = ee({ manual: i }, o),
          l = (0, U.A)(e),
          u = q(),
          f = s(function () {
            var e = n
              .map(function (e) {
                var t;
                return null == (t = null == e ? void 0 : e.onInit)
                  ? void 0
                  : t.call(e, a);
              })
              .filter(Boolean);
            return new J(
              l,
              a,
              u,
              Object.assign.apply(Object, er([{}], en(e), !1))
            );
          }, []);
        return (
          (f.options = a),
          (f.pluginImpls = n.map(function (e) {
            return e(f, a);
          })),
          (0, W.A)(function () {
            if (!i) {
              var e = f.state.params || t.defaultParams || [];
              f.run.apply(f, er([], en(e), !1));
            }
          }),
          (0, c.A)(function () {
            f.cancel();
          }),
          {
            loading: f.state.loading,
            data: f.state.data,
            error: f.state.error,
            params: f.state.params || [],
            cancel: (0, $.A)(f.cancel.bind(f)),
            refresh: (0, $.A)(f.refresh.bind(f)),
            refreshAsync: (0, $.A)(f.refreshAsync.bind(f)),
            run: (0, $.A)(f.run.bind(f)),
            runAsync: (0, $.A)(f.runAsync.bind(f)),
            mutate: (0, $.A)(f.mutate.bind(f)),
          }
        );
      };
      var eo = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              a.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o.return) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        ea = function (e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        };
      let el = function (e, t, n) {
        return ei(
          e,
          t,
          ea(ea([], eo(n || []), !1), [S, C, z, N, H, l, x, L], !1)
        );
      };
    },
    84335: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => F });
      var r = n(55729),
        i = n(61946),
        o = n(51663),
        a = n(38169),
        l = (0, a.r)((e, { orientation: t, buttonBorderWidth: n }) => ({
          root: {
            display: "flex",
            flexDirection: "vertical" === t ? "column" : "row",
            "& [data-button]": {
              "&:first-of-type": {
                borderBottomRightRadius: 0,
                ["vertical" === t
                  ? "borderBottomLeftRadius"
                  : "borderTopRightRadius"]: 0,
                ["vertical" === t ? "borderBottomWidth" : "borderRightWidth"]:
                  n / 2,
              },
              "&:last-of-type": {
                borderTopLeftRadius: 0,
                ["vertical" === t
                  ? "borderTopRightRadius"
                  : "borderBottomLeftRadius"]: 0,
                ["vertical" === t ? "borderTopWidth" : "borderLeftWidth"]:
                  n / 2,
              },
              "&:not(:first-of-type):not(:last-of-type)": {
                borderRadius: 0,
                ["vertical" === t ? "borderTopWidth" : "borderLeftWidth"]:
                  n / 2,
                ["vertical" === t ? "borderBottomWidth" : "borderRightWidth"]:
                  n / 2,
              },
              "& + [data-button]": {
                ["vertical" === t ? "marginTop" : "marginLeft"]: -n,
                "@media (min-resolution: 192dpi)": {
                  ["vertical" === t ? "marginTop" : "marginLeft"]: 0,
                },
              },
            },
          },
        })),
        s = n(50433),
        c = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        d = (e, t, n) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let m = { orientation: "horizontal", buttonBorderWidth: 1 },
        h = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("ButtonGroup", m, e),
            {
              className: o,
              orientation: a,
              buttonBorderWidth: c,
              unstyled: h,
            } = n,
            g = ((e, t) => {
              var n = {};
              for (var r in e)
                f.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && u)
                for (var r of u(e))
                  0 > t.indexOf(r) && p.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "orientation",
              "buttonBorderWidth",
              "unstyled",
            ]),
            { classes: y, cx: v } = l(
              { orientation: a, buttonBorderWidth: c },
              { name: "ButtonGroup", unstyled: h }
            );
          return r.createElement(
            s.a,
            ((e, t) => {
              for (var n in t || (t = {})) f.call(t, n) && d(e, n, t[n]);
              if (u) for (var n of u(t)) p.call(t, n) && d(e, n, t[n]);
              return e;
            })({ className: v(y.root, o), ref: t }, g)
          );
        });
      h.displayName = "@mantine/core/ButtonGroup";
      var g = n(71127),
        y = Object.defineProperty,
        v = Object.defineProperties,
        b = Object.getOwnPropertyDescriptors,
        x = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        O = (e, t, n) =>
          t in e
            ? y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        E = (e, t) => {
          for (var n in t || (t = {})) w.call(t, n) && O(e, n, t[n]);
          if (x) for (var n of x(t)) k.call(t, n) && O(e, n, t[n]);
          return e;
        },
        S = (e, t) => v(e, b(t));
      let C = {
        xs: { height: g.L.xs, paddingLeft: 14, paddingRight: 14 },
        sm: { height: g.L.sm, paddingLeft: 18, paddingRight: 18 },
        md: { height: g.L.md, paddingLeft: 22, paddingRight: 22 },
        lg: { height: g.L.lg, paddingLeft: 26, paddingRight: 26 },
        xl: { height: g.L.xl, paddingLeft: 32, paddingRight: 32 },
        "compact-xs": { height: 22, paddingLeft: 7, paddingRight: 7 },
        "compact-sm": { height: 26, paddingLeft: 8, paddingRight: 8 },
        "compact-md": { height: 30, paddingLeft: 10, paddingRight: 10 },
        "compact-lg": { height: 34, paddingLeft: 12, paddingRight: 12 },
        "compact-xl": { height: 40, paddingLeft: 14, paddingRight: 14 },
      };
      var P = (0, a.r)(
          (
            e,
            {
              color: t,
              size: n,
              radius: r,
              fullWidth: i,
              compact: o,
              gradient: a,
              variant: l,
              withLeftIcon: s,
              withRightIcon: c,
            }
          ) => ({
            root: S(
              E(
                S(
                  E(
                    E(
                      E(
                        E(
                          {},
                          (function ({
                            compact: e,
                            size: t,
                            withLeftIcon: n,
                            withRightIcon: r,
                          }) {
                            if (e) return C[`compact-${t}`];
                            let i = C[t];
                            return S(E({}, i), {
                              paddingLeft: n
                                ? i.paddingLeft / 1.5
                                : i.paddingLeft,
                              paddingRight: r
                                ? i.paddingRight / 1.5
                                : i.paddingRight,
                            });
                          })({
                            compact: o,
                            size: n,
                            withLeftIcon: s,
                            withRightIcon: c,
                          })
                        ),
                        e.fn.fontStyles()
                      ),
                      e.fn.focusStyles()
                    ),
                    ((e) => ({
                      display: e ? "block" : "inline-block",
                      width: e ? "100%" : "auto",
                    }))(i)
                  ),
                  {
                    borderRadius: e.fn.radius(r),
                    fontWeight: 600,
                    position: "relative",
                    lineHeight: 1,
                    fontSize: e.fn.size({ size: n, sizes: e.fontSizes }),
                    userSelect: "none",
                    cursor: "pointer",
                  }
                ),
                (function ({ variant: e, theme: t, color: n, gradient: r }) {
                  let i = t.fn.variant({ color: n, variant: e, gradient: r });
                  return "gradient" === e
                    ? {
                        border: 0,
                        backgroundImage: i.background,
                        color: i.color,
                        "&:hover": t.fn.hover({ backgroundSize: "200%" }),
                      }
                    : E(
                        {
                          border: `1px solid ${i.border}`,
                          backgroundColor: i.background,
                          color: i.color,
                        },
                        t.fn.hover({ backgroundColor: i.hover })
                      );
                })({ variant: l, theme: e, color: t, gradient: a })
              ),
              {
                "&:active": e.activeStyles,
                "&:disabled, &[data-disabled]": {
                  borderColor: "transparent",
                  backgroundColor:
                    "dark" === e.colorScheme
                      ? e.colors.dark[4]
                      : e.colors.gray[2],
                  color:
                    "dark" === e.colorScheme
                      ? e.colors.dark[6]
                      : e.colors.gray[5],
                  cursor: "not-allowed",
                  backgroundImage: "none",
                  pointerEvents: "none",
                  "&:active": { transform: "none" },
                },
                "&[data-loading]": {
                  pointerEvents: "none",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -1,
                    left: -1,
                    right: -1,
                    bottom: -1,
                    backgroundColor:
                      "dark" === e.colorScheme
                        ? e.fn.rgba(e.colors.dark[7], 0.5)
                        : "rgba(255, 255, 255, .5)",
                    borderRadius: e.fn.radius(r),
                    cursor: "not-allowed",
                  },
                },
              }
            ),
            icon: { display: "flex", alignItems: "center" },
            leftIcon: { marginRight: 10 },
            rightIcon: { marginLeft: 10 },
            centerLoader: {
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.5,
            },
            inner: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              overflow: "visible",
            },
            label: {
              whiteSpace: "nowrap",
              height: "100%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            },
          })
        ),
        A = n(56266),
        j = n(94338),
        z = Object.defineProperty,
        R = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        D = (e, t, n) =>
          t in e
            ? z(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        N = (e, t) => {
          for (var n in t || (t = {})) T.call(t, n) && D(e, n, t[n]);
          if (R) for (var n of R(t)) I.call(t, n) && D(e, n, t[n]);
          return e;
        };
      let L = {
          size: "sm",
          type: "button",
          variant: "filled",
          loaderPosition: "left",
        },
        M = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("Button", L, e),
            {
              className: o,
              size: a,
              color: l,
              type: s,
              disabled: c,
              children: u,
              leftIcon: f,
              rightIcon: p,
              fullWidth: d,
              variant: m,
              radius: h,
              uppercase: g,
              compact: y,
              loading: v,
              loaderPosition: b,
              loaderProps: x,
              gradient: w,
              classNames: k,
              styles: O,
              unstyled: E,
            } = n,
            S = ((e, t) => {
              var n = {};
              for (var r in e)
                T.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && R)
                for (var r of R(e))
                  0 > t.indexOf(r) && I.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "size",
              "color",
              "type",
              "disabled",
              "children",
              "leftIcon",
              "rightIcon",
              "fullWidth",
              "variant",
              "radius",
              "uppercase",
              "compact",
              "loading",
              "loaderPosition",
              "loaderProps",
              "gradient",
              "classNames",
              "styles",
              "unstyled",
            ]),
            {
              classes: z,
              cx: D,
              theme: M,
            } = P(
              {
                radius: h,
                color: l,
                size: a,
                fullWidth: d,
                compact: y,
                gradient: w,
                variant: m,
                withLeftIcon: !!f,
                withRightIcon: !!p,
              },
              { name: "Button", unstyled: E, classNames: k, styles: O }
            ),
            F = M.fn.variant({ color: l, variant: m }),
            _ = r.createElement(
              A.a,
              N(
                {
                  color: F.color,
                  size: M.fn.size({ size: a, sizes: C }).height / 2,
                },
                x
              )
            );
          return r.createElement(
            j.N,
            N(
              {
                className: D(z.root, o),
                type: s,
                disabled: c,
                "data-button": !0,
                "data-disabled": c || void 0,
                "data-loading": v || void 0,
                ref: t,
                unstyled: E,
              },
              S
            ),
            r.createElement(
              "div",
              { className: z.inner },
              (f || (v && "left" === b)) &&
                r.createElement(
                  "span",
                  { className: D(z.icon, z.leftIcon) },
                  v && "left" === b ? _ : f
                ),
              v &&
                "center" === b &&
                r.createElement("span", { className: z.centerLoader }, _),
              r.createElement(
                "span",
                {
                  className: z.label,
                  style: { textTransform: g ? "uppercase" : void 0 },
                },
                u
              ),
              (p || (v && "right" === b)) &&
                r.createElement(
                  "span",
                  { className: D(z.icon, z.rightIcon) },
                  v && "right" === b ? _ : p
                )
            )
          );
        });
      (M.displayName = "@mantine/core/Button"), (M.Group = h);
      let F = (0, o.K)(M);
    },
    85607: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => a });
      var r = n(55729),
        i = n(32879);
      let o = r["useId".toString()] || (() => void 0);
      function a(e) {
        return "string" == typeof e
          ? e
          : (function () {
              let e = o();
              return e ? "mantine-".concat(e.replace(/:/g, "")) : "";
            })() ||
              (function () {
                let [e, t] = (0, r.useState)("");
                return (
                  (0, i.o)(() => {
                    t(
                      "mantine-".concat(Math.random().toString(36).slice(2, 11))
                    );
                  }, []),
                  e
                );
              })();
      }
    },
    85803: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => i });
      var r = n(55729);
      function i(e) {
        let t = (0, r.createContext)(null);
        return [
          ({ children: e, value: n }) =>
            r.createElement(t.Provider, { value: n }, e),
          () => {
            let n = (0, r.useContext)(t);
            if (null === n) throw Error(e);
            return n;
          },
        ];
      }
    },
    86661: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => o });
      var r = n(55729),
        i = n(63985);
      function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.useCallback)(
          (function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (e) => {
              t.forEach((t) => (0, i.b)(t, e));
            };
          })(...t),
          t
        );
      }
    },
    88728: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => ee });
      var r = n(55729),
        i = n(61946),
        o = n(51663),
        a = Object.defineProperty,
        l = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        p = (e, t, n) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      function d(e) {
        return r.createElement(
          "svg",
          l(
            ((e, t) => {
              for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
              if (c) for (var n of c(t)) f.call(t, n) && p(e, n, t[n]);
              return e;
            })({}, e),
            s({
              width: "15",
              height: "15",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            })
          ),
          r.createElement("path", {
            d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
          })
        );
      }
      var m = Object.defineProperty,
        h = Object.defineProperties,
        g = Object.getOwnPropertyDescriptors,
        y = Object.getOwnPropertySymbols,
        v = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        x = (e, t, n) =>
          t in e
            ? m(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let w = (0, r.createContext)(null);
      function k({ spacing: e, children: t }) {
        return r.createElement(w.Provider, { value: { spacing: e } }, t);
      }
      var O = n(38169),
        E = (0, O.r)((e, { spacing: t }) => ({
          root: {
            display: "flex",
            paddingLeft: e.fn.size({ size: t, sizes: e.spacing }),
          },
        })),
        S = n(50433),
        C = Object.defineProperty,
        P = Object.getOwnPropertySymbols,
        A = Object.prototype.hasOwnProperty,
        j = Object.prototype.propertyIsEnumerable,
        z = (e, t, n) =>
          t in e
            ? C(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let R = {},
        T = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("AvatarGroup", R, e),
            { children: o, spacing: a = "sm", unstyled: l, className: s } = n,
            c = ((e, t) => {
              var n = {};
              for (var r in e)
                A.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && P)
                for (var r of P(e))
                  0 > t.indexOf(r) && j.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, ["children", "spacing", "unstyled", "className"]),
            { classes: u, cx: f } = E(
              { spacing: a },
              { name: "AvatarGroup", unstyled: l }
            );
          return r.createElement(
            k,
            { spacing: a },
            r.createElement(
              S.a,
              ((e, t) => {
                for (var n in t || (t = {})) A.call(t, n) && z(e, n, t[n]);
                if (P) for (var n of P(t)) j.call(t, n) && z(e, n, t[n]);
                return e;
              })({ ref: t, className: f(u.root, s) }, c),
              o
            )
          );
        });
      T.displayName = "@mantine/core/AvatarGroup";
      var I = Object.defineProperty,
        D = Object.defineProperties,
        N = Object.getOwnPropertyDescriptors,
        L = Object.getOwnPropertySymbols,
        M = Object.prototype.hasOwnProperty,
        F = Object.prototype.propertyIsEnumerable,
        _ = (e, t, n) =>
          t in e
            ? I(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        B = (e, t) => {
          for (var n in t || (t = {})) M.call(t, n) && _(e, n, t[n]);
          if (L) for (var n of L(t)) F.call(t, n) && _(e, n, t[n]);
          return e;
        },
        H = (e, t) => D(e, N(t));
      let U = { xs: 16, sm: 26, md: 38, lg: 56, xl: 84 };
      var $ = (0, O.r)(
          (
            e,
            {
              size: t,
              radius: n,
              color: r,
              withinGroup: i,
              spacing: o,
              variant: a,
              gradient: l,
            }
          ) => {
            let s = e.fn.variant({ variant: a, color: r, gradient: l });
            return {
              root: B(
                H(B({}, e.fn.focusStyles()), {
                  WebkitTapHighlightColor: "transparent",
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  userSelect: "none",
                  overflow: "hidden",
                  width: e.fn.size({ size: t, sizes: U }),
                  minWidth: e.fn.size({ size: t, sizes: U }),
                  height: e.fn.size({ size: t, sizes: U }),
                  borderRadius: e.fn.radius(n),
                  textDecoration: "none",
                  border: 0,
                  backgroundColor: "transparent",
                  padding: 0,
                }),
                (function ({ withinGroup: e, spacing: t, theme: n }) {
                  return e
                    ? {
                        marginLeft: -n.fn.size({ size: t, sizes: n.spacing }),
                        backgroundColor: `${
                          "dark" === n.colorScheme ? n.colors.dark[7] : n.white
                        }`,
                        border: `2px solid ${
                          "dark" === n.colorScheme ? n.colors.dark[7] : n.white
                        }`,
                      }
                    : null;
                })({ withinGroup: i, spacing: o, theme: e })
              ),
              image: {
                objectFit: "cover",
                width: "100%",
                height: "100%",
                display: "block",
              },
              placeholder: H(B({}, e.fn.fontStyles()), {
                fontSize: e.fn.size({ size: t, sizes: U }) / 2.5,
                color: s.color,
                fontWeight: 700,
                backgroundColor: s.background,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                userSelect: "none",
                backgroundImage: "gradient" === a ? s.background : void 0,
                border: `${+("gradient" !== a)}px solid ${s.border}`,
                borderRadius: e.fn.radius(n),
              }),
              placeholderIcon: { width: "70%", height: "70%", color: s.color },
            };
          }
        ),
        W = Object.defineProperty,
        V = Object.defineProperties,
        q = Object.getOwnPropertyDescriptors,
        Y = Object.getOwnPropertySymbols,
        K = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        X = (e, t, n) =>
          t in e
            ? W(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        Z = (e, t) => {
          for (var n in t || (t = {})) K.call(t, n) && X(e, n, t[n]);
          if (Y) for (var n of Y(t)) G.call(t, n) && X(e, n, t[n]);
          return e;
        };
      let Q = { size: "md", color: "gray", variant: "light" },
        J = (0, r.forwardRef)((e, t) => {
          let n = (0, i.a1)("Avatar", Q, e),
            {
              className: o,
              size: a,
              src: l,
              alt: s,
              radius: c,
              children: u,
              color: f,
              variant: p,
              gradient: m,
              classNames: k,
              styles: O,
              imageProps: E,
              unstyled: C,
            } = n,
            P = ((e, t) => {
              var n = {};
              for (var r in e)
                K.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && Y)
                for (var r of Y(e))
                  0 > t.indexOf(r) && G.call(e, r) && (n[r] = e[r]);
              return n;
            })(n, [
              "className",
              "size",
              "src",
              "alt",
              "radius",
              "children",
              "color",
              "variant",
              "gradient",
              "classNames",
              "styles",
              "imageProps",
              "unstyled",
            ]),
            A = (function () {
              let e = (0, r.useContext)(w);
              if (e)
                return h(
                  ((e, t) => {
                    for (var n in t || (t = {})) v.call(t, n) && x(e, n, t[n]);
                    if (y) for (var n of y(t)) b.call(t, n) && x(e, n, t[n]);
                    return e;
                  })({}, e),
                  g({ withinGroup: !0 })
                );
              return { spacing: null, withinGroup: !1 };
            })(),
            [j, z] = (0, r.useState)(!l),
            { classes: R, cx: T } = $(
              {
                color: f,
                radius: c,
                size: a,
                withinGroup: A.withinGroup,
                spacing: A.spacing,
                variant: p,
                gradient: m,
              },
              { classNames: k, styles: O, unstyled: C, name: "Avatar" }
            );
          return (
            (0, r.useEffect)(() => {
              l ? z(!1) : z(!0);
            }, [l]),
            r.createElement(
              S.a,
              Z({ component: "div", className: T(R.root, o), ref: t }, P),
              j
                ? r.createElement(
                    "div",
                    { className: R.placeholder, title: s },
                    u || r.createElement(d, { className: R.placeholderIcon })
                  )
                : r.createElement(
                    "img",
                    V(
                      Z({}, E),
                      q({
                        className: R.image,
                        src: l,
                        alt: s,
                        onError: () => z(!0),
                      })
                    )
                  )
            )
          );
        });
      (J.displayName = "@mantine/core/Avatar"), (J.Group = T);
      let ee = (0, o.K)(J);
    },
    93409: (e) => {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        o = /^:\s*/,
        a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        l = /^[;\s]*/,
        s = /^\s+|\s+$/g;
      function c(e) {
        return e ? e.replace(s, "") : "";
      }
      e.exports = function (e, s) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        s = s || {};
        var u = 1,
          f = 1;
        function p(e) {
          var t = e.match(n);
          t && (u += t.length);
          var r = e.lastIndexOf("\n");
          f = ~r ? e.length - r : f + e.length;
        }
        function d() {
          var e = { line: u, column: f };
          return function (t) {
            return (t.position = new m(e)), y(r), t;
          };
        }
        function m(e) {
          (this.start = e),
            (this.end = { line: u, column: f }),
            (this.source = s.source);
        }
        m.prototype.content = e;
        var h = [];
        function g(t) {
          var n = Error(s.source + ":" + u + ":" + f + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = s.source),
            (n.line = u),
            (n.column = f),
            (n.source = e),
            s.silent)
          )
            h.push(n);
          else throw n;
        }
        function y(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return p(r), (e = e.slice(r.length)), n;
          }
        }
        function v(e) {
          var t;
          for (e = e || []; (t = b()); ) !1 !== t && e.push(t);
          return e;
        }
        function b() {
          var t = d();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return g("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (f += 2),
              p(r),
              (e = e.slice(n)),
              (f += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        y(r);
        var x,
          w = [];
        for (
          v(w);
          (x = (function () {
            var e = d(),
              n = y(i);
            if (n) {
              if ((b(), !y(o))) return g("property missing ':'");
              var r = y(a),
                s = e({
                  type: "declaration",
                  property: c(n[0].replace(t, "")),
                  value: r ? c(r[0].replace(t, "")) : "",
                });
              return y(l), s;
            }
          })());

        )
          !1 !== x && (w.push(x), v(w));
        return w;
      };
    },
    94408: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => tU });
      var r = n(55729),
        i = n.t(r, 2);
      function o(e) {
        return (
          !Array.isArray(e) &&
          null !== e &&
          "object" == typeof e &&
          e.type !== r.Fragment
        );
      }
      var a = n(86661),
        l = n(54352),
        s = n(61946);
      let c = Math.min,
        u = Math.max,
        f = Math.round,
        p = Math.floor,
        d = (e) => ({ x: e, y: e }),
        m = { left: "right", right: "left", bottom: "top", top: "bottom" },
        h = { start: "end", end: "start" };
      function g(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function y(e) {
        return e.split("-")[0];
      }
      function v(e) {
        return e.split("-")[1];
      }
      function b(e) {
        return "x" === e ? "y" : "x";
      }
      function x(e) {
        return "y" === e ? "height" : "width";
      }
      function w(e) {
        return ["top", "bottom"].includes(y(e)) ? "y" : "x";
      }
      function k(e) {
        return e.replace(/start|end/g, (e) => h[e]);
      }
      function O(e) {
        return e.replace(/left|right|bottom|top/g, (e) => m[e]);
      }
      function E(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function S(e) {
        let { x: t, y: n, width: r, height: i } = e;
        return {
          width: r,
          height: i,
          top: n,
          left: t,
          right: t + r,
          bottom: n + i,
          x: t,
          y: n,
        };
      }
      function C(e, t, n) {
        let r,
          { reference: i, floating: o } = e,
          a = w(t),
          l = b(w(t)),
          s = x(l),
          c = y(t),
          u = "y" === a,
          f = i.x + i.width / 2 - o.width / 2,
          p = i.y + i.height / 2 - o.height / 2,
          d = i[s] / 2 - o[s] / 2;
        switch (c) {
          case "top":
            r = { x: f, y: i.y - o.height };
            break;
          case "bottom":
            r = { x: f, y: i.y + i.height };
            break;
          case "right":
            r = { x: i.x + i.width, y: p };
            break;
          case "left":
            r = { x: i.x - o.width, y: p };
            break;
          default:
            r = { x: i.x, y: i.y };
        }
        switch (v(t)) {
          case "start":
            r[l] -= d * (n && u ? -1 : 1);
            break;
          case "end":
            r[l] += d * (n && u ? -1 : 1);
        }
        return r;
      }
      let P = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: a,
          } = n,
          l = o.filter(Boolean),
          s = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          c = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: u, y: f } = C(c, r, s),
          p = r,
          d = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: o, fn: h } = l[n],
            {
              x: g,
              y: y,
              data: v,
              reset: b,
            } = await h({
              x: u,
              y: f,
              initialPlacement: r,
              placement: p,
              strategy: i,
              middlewareData: d,
              rects: c,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (u = null != g ? g : u),
            (f = null != y ? y : f),
            (d = { ...d, [o]: { ...d[o], ...v } }),
            b &&
              m <= 50 &&
              (m++,
              "object" == typeof b &&
                (b.placement && (p = b.placement),
                b.rects &&
                  (c =
                    !0 === b.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : b.rects),
                ({ x: u, y: f } = C(c, p, s))),
              (n = -1));
        }
        return { x: u, y: f, placement: p, strategy: i, middlewareData: d };
      };
      async function A(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: i, platform: o, rects: a, elements: l, strategy: s } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: u = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: d = 0,
          } = g(t, e),
          m = E(d),
          h = l[p ? ("floating" === f ? "reference" : "floating") : f],
          y = S(
            await o.getClippingRect({
              element:
                null ==
                  (n = await (null == o.isElement ? void 0 : o.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == o.getDocumentElement
                      ? void 0
                      : o.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: u,
              strategy: s,
            })
          ),
          v =
            "floating" === f
              ? {
                  x: r,
                  y: i,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          b = await (null == o.getOffsetParent
            ? void 0
            : o.getOffsetParent(l.floating)),
          x = ((await (null == o.isElement ? void 0 : o.isElement(b))) &&
            (await (null == o.getScale ? void 0 : o.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          w = S(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: v,
                  offsetParent: b,
                  strategy: s,
                })
              : v
          );
        return {
          top: (y.top - w.top + m.top) / x.y,
          bottom: (w.bottom - y.bottom + m.bottom) / x.y,
          left: (y.left - w.left + m.left) / x.x,
          right: (w.right - y.right + m.right) / x.x,
        };
      }
      function j(e) {
        let t = c(...e.map((e) => e.left)),
          n = c(...e.map((e) => e.top));
        return {
          x: t,
          y: n,
          width: u(...e.map((e) => e.right)) - t,
          height: u(...e.map((e) => e.bottom)) - n,
        };
      }
      async function z(e, t) {
        let { placement: n, platform: r, elements: i } = e,
          o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)),
          a = y(n),
          l = v(n),
          s = "y" === w(n),
          c = ["left", "top"].includes(a) ? -1 : 1,
          u = o && s ? -1 : 1,
          f = g(t, e),
          {
            mainAxis: p,
            crossAxis: d,
            alignmentAxis: m,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: f.mainAxis || 0,
                crossAxis: f.crossAxis || 0,
                alignmentAxis: f.alignmentAxis,
              };
        return (
          l && "number" == typeof m && (d = "end" === l ? -1 * m : m),
          s ? { x: d * u, y: p * c } : { x: p * c, y: d * u }
        );
      }
      function R() {
        return "undefined" != typeof window;
      }
      function T(e) {
        return N(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function I(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function D(e) {
        var t;
        return null ==
          (t = (N(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function N(e) {
        return !!R() && (e instanceof Node || e instanceof I(e).Node);
      }
      function L(e) {
        return !!R() && (e instanceof Element || e instanceof I(e).Element);
      }
      function M(e) {
        return (
          !!R() && (e instanceof HTMLElement || e instanceof I(e).HTMLElement)
        );
      }
      function F(e) {
        return (
          !!R() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof I(e).ShadowRoot)
        );
      }
      function _(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: i } = W(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(i)
        );
      }
      function B(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function H(e) {
        let t = U(),
          n = L(e) ? W(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!n[e] && "none" !== n[e]
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function U() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function $(e) {
        return ["html", "body", "#document"].includes(T(e));
      }
      function W(e) {
        return I(e).getComputedStyle(e);
      }
      function V(e) {
        return L(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function q(e) {
        if ("html" === T(e)) return e;
        let t = e.assignedSlot || e.parentNode || (F(e) && e.host) || D(e);
        return F(t) ? t.host : t;
      }
      function Y(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let i = (function e(t) {
            let n = q(t);
            return $(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : M(n) && _(n)
              ? n
              : e(n);
          })(e),
          o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = I(i);
        if (o) {
          let e = K(a);
          return t.concat(
            a,
            a.visualViewport || [],
            _(i) ? i : [],
            e && n ? Y(e) : []
          );
        }
        return t.concat(i, Y(i, [], n));
      }
      function K(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function G(e) {
        let t = W(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          i = M(e),
          o = i ? e.offsetWidth : n,
          a = i ? e.offsetHeight : r,
          l = f(n) !== o || f(r) !== a;
        return l && ((n = o), (r = a)), { width: n, height: r, $: l };
      }
      function X(e) {
        return L(e) ? e : e.contextElement;
      }
      function Z(e) {
        let t = X(e);
        if (!M(t)) return d(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: i, $: o } = G(t),
          a = (o ? f(n.width) : n.width) / r,
          l = (o ? f(n.height) : n.height) / i;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: a, y: l }
        );
      }
      let Q = d(0);
      function J(e) {
        let t = I(e);
        return U() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Q;
      }
      function ee(e, t, n, r) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let o = e.getBoundingClientRect(),
          a = X(e),
          l = d(1);
        t && (r ? L(r) && (l = Z(r)) : (l = Z(e)));
        let s = (void 0 === (i = n) && (i = !1), r && (!i || r === I(a)) && i)
            ? J(a)
            : d(0),
          c = (o.left + s.x) / l.x,
          u = (o.top + s.y) / l.y,
          f = o.width / l.x,
          p = o.height / l.y;
        if (a) {
          let e = I(a),
            t = r && L(r) ? I(r) : r,
            n = e,
            i = K(n);
          for (; i && r && t !== n; ) {
            let e = Z(i),
              t = i.getBoundingClientRect(),
              r = W(i),
              o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (u *= e.y),
              (f *= e.x),
              (p *= e.y),
              (c += o),
              (u += a),
              (i = K((n = I(i))));
          }
        }
        return S({ width: f, height: p, x: c, y: u });
      }
      function et(e, t) {
        let n = V(e).scrollLeft;
        return t ? t.left + n : ee(D(e)).left + n;
      }
      function en(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : et(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function er(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = I(e),
              r = D(e),
              i = n.visualViewport,
              o = r.clientWidth,
              a = r.clientHeight,
              l = 0,
              s = 0;
            if (i) {
              (o = i.width), (a = i.height);
              let e = U();
              (!e || (e && "fixed" === t)) &&
                ((l = i.offsetLeft), (s = i.offsetTop));
            }
            return { width: o, height: a, x: l, y: s };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = D(e),
              n = V(e),
              r = e.ownerDocument.body,
              i = u(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              o = u(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              a = -n.scrollLeft + et(e),
              l = -n.scrollTop;
            return (
              "rtl" === W(r).direction &&
                (a += u(t.clientWidth, r.clientWidth) - i),
              { width: i, height: o, x: a, y: l }
            );
          })(D(e));
        else if (L(t))
          r = (function (e, t) {
            let n = ee(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              i = n.left + e.clientLeft,
              o = M(e) ? Z(e) : d(1),
              a = e.clientWidth * o.x,
              l = e.clientHeight * o.y;
            return { width: a, height: l, x: i * o.x, y: r * o.y };
          })(t, n);
        else {
          let n = J(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return S(r);
      }
      function ei(e) {
        return "static" === W(e).position;
      }
      function eo(e, t) {
        if (!M(e) || "fixed" === W(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return D(e) === n && (n = n.ownerDocument.body), n;
      }
      function ea(e, t) {
        let n = I(e);
        if (B(e)) return n;
        if (!M(e)) {
          let t = q(e);
          for (; t && !$(t); ) {
            if (L(t) && !ei(t)) return t;
            t = q(t);
          }
          return n;
        }
        let r = eo(e, t);
        for (; r && ["table", "td", "th"].includes(T(r)) && ei(r); )
          r = eo(r, t);
        return r && $(r) && ei(r) && !H(r)
          ? n
          : r ||
              (function (e) {
                let t = q(e);
                for (; M(t) && !$(t); ) {
                  if (H(t)) return t;
                  if (B(t)) break;
                  t = q(t);
                }
                return null;
              })(e) ||
              n;
      }
      let el = async function (e) {
          let t = this.getOffsetParent || ea,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = M(t),
                i = D(t),
                o = "fixed" === n,
                a = ee(e, !0, o, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                s = d(0);
              if (r || (!r && !o))
                if ((("body" !== T(t) || _(i)) && (l = V(t)), r)) {
                  let e = ee(t, !0, o, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else i && (s.x = et(i));
              let c = !i || r || o ? d(0) : en(i, l);
              return {
                x: a.left + l.scrollLeft - s.x - c.x,
                y: a.top + l.scrollTop - s.y - c.y,
                width: a.width,
                height: a.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        es = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
              o = "fixed" === i,
              a = D(r),
              l = !!t && B(t.floating);
            if (r === a || (l && o)) return n;
            let s = { scrollLeft: 0, scrollTop: 0 },
              c = d(1),
              u = d(0),
              f = M(r);
            if (
              (f || (!f && !o)) &&
              (("body" !== T(r) || _(a)) && (s = V(r)), M(r))
            ) {
              let e = ee(r);
              (c = Z(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
            }
            let p = !a || f || o ? d(0) : en(a, s, !0);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - s.scrollLeft * c.x + u.x + p.x,
              y: n.y * c.y - s.scrollTop * c.y + u.y + p.y,
            };
          },
          getDocumentElement: D,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
              o = [
                ...("clippingAncestors" === n
                  ? B(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = Y(e, [], !1).filter(
                            (e) => L(e) && "body" !== T(e)
                          ),
                          i = null,
                          o = "fixed" === W(e).position,
                          a = o ? q(e) : e;
                        for (; L(a) && !$(a); ) {
                          let t = W(a),
                            n = H(a);
                          n || "fixed" !== t.position || (i = null),
                            (
                              o
                                ? !n && !i
                                : (!n &&
                                    "static" === t.position &&
                                    !!i &&
                                    ["absolute", "fixed"].includes(
                                      i.position
                                    )) ||
                                  (_(a) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = q(t);
                                      return (
                                        !(r === n || !L(r) || $(r)) &&
                                        ("fixed" === W(r).position || e(r, n))
                                      );
                                    })(e, a))
                            )
                              ? (r = r.filter((e) => e !== a))
                              : (i = t),
                            (a = q(a));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              a = o[0],
              l = o.reduce((e, n) => {
                let r = er(t, n, i);
                return (
                  (e.top = u(r.top, e.top)),
                  (e.right = c(r.right, e.right)),
                  (e.bottom = c(r.bottom, e.bottom)),
                  (e.left = u(r.left, e.left)),
                  e
                );
              }, er(t, a, i));
            return {
              width: l.right - l.left,
              height: l.bottom - l.top,
              x: l.left,
              y: l.top,
            };
          },
          getOffsetParent: ea,
          getElementRects: el,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = G(e);
            return { width: t, height: n };
          },
          getScale: Z,
          isElement: L,
          isRTL: function (e) {
            return "rtl" === W(e).direction;
          },
        };
      function ec(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let eu = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: n, y: r, placement: i } = t,
                  {
                    mainAxis: o = !0,
                    crossAxis: a = !1,
                    limiter: l = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...s
                  } = g(e, t),
                  f = { x: n, y: r },
                  p = await A(t, s),
                  d = w(y(i)),
                  m = b(d),
                  h = f[m],
                  v = f[d];
                if (o) {
                  let e = "y" === m ? "top" : "left",
                    t = "y" === m ? "bottom" : "right",
                    n = h + p[e],
                    r = h - p[t];
                  h = u(n, c(h, r));
                }
                if (a) {
                  let e = "y" === d ? "top" : "left",
                    t = "y" === d ? "bottom" : "right",
                    n = v + p[e],
                    r = v - p[t];
                  v = u(n, c(v, r));
                }
                let x = l.fn({ ...t, [m]: h, [d]: v });
                return {
                  ...x,
                  data: { x: x.x - n, y: x.y - r, enabled: { [m]: o, [d]: a } },
                };
              },
            }
          );
        },
        ef = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: i,
                rects: o,
                platform: a,
                elements: l,
                middlewareData: s,
              } = t,
              { element: f, padding: p = 0 } = g(e, t) || {};
            if (null == f) return {};
            let d = E(p),
              m = { x: n, y: r },
              h = b(w(i)),
              y = x(h),
              k = await a.getDimensions(f),
              O = "y" === h,
              S = O ? "clientHeight" : "clientWidth",
              C = o.reference[y] + o.reference[h] - m[h] - o.floating[y],
              P = m[h] - o.reference[h],
              A = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(f)),
              j = A ? A[S] : 0;
            (j && (await (null == a.isElement ? void 0 : a.isElement(A)))) ||
              (j = l.floating[S] || o.floating[y]);
            let z = j / 2 - k[y] / 2 - 1,
              R = c(d[O ? "top" : "left"], z),
              T = c(d[O ? "bottom" : "right"], z),
              I = j - k[y] - T,
              D = j / 2 - k[y] / 2 + (C / 2 - P / 2),
              N = u(R, c(D, I)),
              L =
                !s.arrow &&
                null != v(i) &&
                D !== N &&
                o.reference[y] / 2 - (D < R ? R : T) - k[y] / 2 < 0,
              M = L ? (D < R ? D - R : D - I) : 0;
            return {
              [h]: m[h] + M,
              data: {
                [h]: N,
                centerOffset: D - N - M,
                ...(L && { alignmentOffset: M }),
              },
              reset: L,
            };
          },
        });
      var ep = n(56760),
        ed = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function em(e, t) {
        let n, r, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 != r--; ) if (!em(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (("_owner" !== n || !e.$$typeof) && !em(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eh(e) {
        let t = r.useRef(e);
        return (
          ed(() => {
            t.current = e;
          }),
          t
        );
      }
      var eg = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      let ey = !1,
        ev = 0,
        eb = () => "floating-ui-" + ev++,
        ex = i["useId".toString()],
        ew =
          null != ex
            ? ex
            : function () {
                let [e, t] = r.useState(() => (ey ? eb() : void 0));
                return (
                  eg(() => {
                    null == e && t(eb());
                  }, []),
                  r.useEffect(() => {
                    ey || (ey = !0);
                  }, []),
                  e
                );
              },
        ek = r.createContext(null),
        eO = r.createContext(null),
        eE = () => {
          var e, t;
          return null != (e = null == (t = r.useContext(ek)) ? void 0 : t.id)
            ? e
            : null;
        },
        eS = () => r.useContext(eO);
      function eC(e) {
        var t;
        return null != (t = null == e ? void 0 : e.ownerDocument)
          ? t
          : document;
      }
      function eP(e) {
        var t;
        return null != (t = eC(e).defaultView) ? t : window;
      }
      function eA(e) {
        return !!e && e instanceof eP(e).Element;
      }
      let ej = i["useInsertionEffect".toString()];
      function ez(e) {
        let {
            open: t = !1,
            onOpenChange: n,
            whileElementsMounted: i,
            placement: o,
            middleware: a,
            strategy: l,
            nodeId: s,
          } = void 0 === e ? {} : e,
          [c, u] = r.useState(null),
          f = eS(),
          p = r.useRef(null),
          d = r.useRef({}),
          m = r.useState(() =>
            (function () {
              let e = new Map();
              return {
                emit(t, n) {
                  var r;
                  null == (r = e.get(t)) || r.forEach((e) => e(n));
                },
                on(t, n) {
                  e.set(t, [...(e.get(t) || []), n]);
                },
                off(t, n) {
                  e.set(
                    t,
                    (e.get(t) || []).filter((e) => e !== n)
                  );
                },
              };
            })()
          )[0],
          h = (function (e) {
            void 0 === e && (e = {});
            let {
                placement: t = "bottom",
                strategy: n = "absolute",
                middleware: i = [],
                platform: o,
                whileElementsMounted: a,
                open: l,
              } = e,
              [s, c] = r.useState({
                x: null,
                y: null,
                strategy: n,
                placement: t,
                middlewareData: {},
                isPositioned: !1,
              }),
              [u, f] = r.useState(i);
            em(u, i) || f(i);
            let p = r.useRef(null),
              d = r.useRef(null),
              m = r.useRef(s),
              h = eh(a),
              g = eh(o),
              [y, v] = r.useState(null),
              [b, x] = r.useState(null),
              w = r.useCallback((e) => {
                p.current !== e && ((p.current = e), v(e));
              }, []),
              k = r.useCallback((e) => {
                d.current !== e && ((d.current = e), x(e));
              }, []),
              O = r.useCallback(() => {
                if (!p.current || !d.current) return;
                let e = { placement: t, strategy: n, middleware: u };
                g.current && (e.platform = g.current),
                  ((e, t, n) => {
                    let r = new Map(),
                      i = { platform: es, ...n },
                      o = { ...i.platform, _c: r };
                    return P(e, t, { ...i, platform: o });
                  })(p.current, d.current, e).then((e) => {
                    let t = { ...e, isPositioned: !0 };
                    E.current &&
                      !em(m.current, t) &&
                      ((m.current = t),
                      ep.flushSync(() => {
                        c(t);
                      }));
                  });
              }, [u, t, n, g]);
            ed(() => {
              !1 === l &&
                m.current.isPositioned &&
                ((m.current.isPositioned = !1),
                c((e) => ({ ...e, isPositioned: !1 })));
            }, [l]);
            let E = r.useRef(!1);
            ed(
              () => (
                (E.current = !0),
                () => {
                  E.current = !1;
                }
              ),
              []
            ),
              ed(() => {
                if (y && b)
                  if (h.current) return h.current(y, b, O);
                  else O();
              }, [y, b, O, h]);
            let S = r.useMemo(
                () => ({
                  reference: p,
                  floating: d,
                  setReference: w,
                  setFloating: k,
                }),
                [w, k]
              ),
              C = r.useMemo(() => ({ reference: y, floating: b }), [y, b]);
            return r.useMemo(
              () => ({
                ...s,
                update: O,
                refs: S,
                elements: C,
                reference: w,
                floating: k,
              }),
              [s, O, S, C, w, k]
            );
          })({
            placement: o,
            middleware: a,
            strategy: l,
            whileElementsMounted: i,
          }),
          g = (function (e) {
            let t = r.useRef(() => {});
            return (
              ej
                ? ej(() => {
                    t.current = e;
                  })
                : (t.current = e),
              r.useCallback(function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return null == t.current ? void 0 : t.current(...n);
              }, [])
            );
          })(n),
          y = r.useMemo(() => ({ ...h.refs, domReference: p }), [h.refs]),
          v = r.useMemo(
            () => ({
              ...h,
              refs: y,
              dataRef: d,
              nodeId: s,
              events: m,
              open: t,
              onOpenChange: g,
              _: { domReference: c },
            }),
            [h, s, m, t, g, y, c]
          );
        eg(() => {
          let e =
            null == f ? void 0 : f.nodesRef.current.find((e) => e.id === s);
          e && (e.context = v);
        });
        let { reference: b } = h,
          x = r.useCallback(
            (e) => {
              (eA(e) || null === e) &&
                ((v.refs.domReference.current = e), u(e)),
                b(e);
            },
            [b, v.refs]
          );
        return r.useMemo(
          () => ({ ...h, context: v, refs: y, reference: x }),
          [h, y, v, x]
        );
      }
      function eR(e, t, n) {
        let r = new Map();
        return {
          ...("floating" === n && { tabIndex: -1 }),
          ...e,
          ...t
            .map((e) => (e ? e[n] : null))
            .concat(e)
            .reduce(
              (e, t) => (
                t &&
                  Object.entries(t).forEach((t) => {
                    let [n, i] = t;
                    if (0 === n.indexOf("on")) {
                      if ((r.has(n) || r.set(n, []), "function" == typeof i)) {
                        var o;
                        null == (o = r.get(n)) || o.push(i),
                          (e[n] = function () {
                            for (
                              var e, t = arguments.length, i = Array(t), o = 0;
                              o < t;
                              o++
                            )
                              i[o] = arguments[o];
                            null == (e = r.get(n)) || e.forEach((e) => e(...i));
                          });
                      }
                    } else e[n] = i;
                  }),
                e
              ),
              {}
            ),
        };
      }
      let eT = function (e) {
        void 0 === e && (e = []);
        let t = e,
          n = r.useCallback((t) => eR(t, e, "reference"), t),
          i = r.useCallback((t) => eR(t, e, "floating"), t),
          o = r.useCallback((t) => eR(t, e, "item"), t);
        return r.useMemo(
          () => ({
            getReferenceProps: n,
            getFloatingProps: i,
            getItemProps: o,
          }),
          [n, i, o]
        );
      };
      function eI(e, t) {
        var n, r;
        let i =
            null !=
            (n = e.filter((e) => {
              var n;
              return (
                e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
              );
            }))
              ? n
              : [],
          o = i;
        for (; o.length; )
          (o =
            null !=
            (r = e.filter((e) => {
              var t;
              return null == (t = o)
                ? void 0
                : t.some((t) => {
                    var n;
                    return (
                      e.parentId === t.id &&
                      (null == (n = e.context) ? void 0 : n.open)
                    );
                  });
            }))
              ? r
              : []),
            (i = i.concat(o));
        return i;
      }
      function eD(e) {
        let t = (0, r.useRef)(e);
        return (
          eg(() => {
            t.current = e;
          }),
          t
        );
      }
      function eN(e, t, n) {
        return n && "mouse" !== n
          ? 0
          : "number" == typeof e
          ? e
          : null == e
          ? void 0
          : e[t];
      }
      let eL = function (e, t) {
          let {
              enabled: n = !0,
              delay: i = 0,
              handleClose: o = null,
              mouseOnly: a = !1,
              restMs: l = 0,
              move: s = !0,
            } = void 0 === t ? {} : t,
            {
              open: c,
              onOpenChange: u,
              dataRef: f,
              events: p,
              refs: d,
              _: m,
            } = e,
            h = eS(),
            g = eE(),
            y = eD(o),
            v = eD(i),
            b = (function (e) {
              let t = (0, r.useRef)();
              return (
                eg(() => {
                  t.current = e;
                }, [e]),
                t.current
              );
            })(c),
            x = r.useRef(),
            w = r.useRef(),
            k = r.useRef(),
            O = r.useRef(),
            E = r.useRef(!0),
            S = r.useRef(!1),
            C = r.useCallback(() => {
              var e;
              let t = null == (e = f.current.openEvent) ? void 0 : e.type;
              return (
                (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
              );
            }, [f]);
          r.useEffect(() => {
            if (n)
              return (
                p.on("dismiss", e),
                () => {
                  p.off("dismiss", e);
                }
              );
            function e() {
              clearTimeout(w.current),
                clearTimeout(O.current),
                (E.current = !0);
            }
          }, [n, p, d]),
            r.useEffect(() => {
              if (!n || !y.current) return;
              function e() {
                C() && u(!1);
              }
              let t = eC(d.floating.current).documentElement;
              return (
                t.addEventListener("mouseleave", e),
                () => {
                  t.removeEventListener("mouseleave", e);
                }
              );
            }, [d, u, n, y, f, C]);
          let P = r.useCallback(
              function (e) {
                void 0 === e && (e = !0);
                let t = eN(v.current, "close", x.current);
                t && !k.current
                  ? (clearTimeout(w.current),
                    (w.current = setTimeout(() => u(!1), t)))
                  : e && (clearTimeout(w.current), u(!1));
              },
              [v, u]
            ),
            A = r.useCallback(() => {
              k.current &&
                (eC(d.floating.current).removeEventListener(
                  "pointermove",
                  k.current
                ),
                (k.current = void 0));
            }, [d]),
            j = r.useCallback(() => {
              (eC(d.floating.current).body.style.pointerEvents = ""),
                (S.current = !1);
            }, [d]);
          return (
            r.useEffect(() => {
              if (!n) return;
              function t() {
                return (
                  !!f.current.openEvent &&
                  ["click", "mousedown"].includes(f.current.openEvent.type)
                );
              }
              function r(e) {
                if (
                  (clearTimeout(w.current),
                  (E.current = !1),
                  (a && "mouse" !== x.current) ||
                    (l > 0 && 0 === eN(v.current, "open")))
                )
                  return;
                f.current.openEvent = e;
                let t = eN(v.current, "open", x.current);
                t
                  ? (w.current = setTimeout(() => {
                      u(!0);
                    }, t))
                  : u(!0);
              }
              function i(n) {
                if (t()) return;
                let r = eC(d.floating.current);
                if ((clearTimeout(O.current), y.current)) {
                  clearTimeout(w.current),
                    k.current &&
                      r.removeEventListener("pointermove", k.current),
                    (k.current = y.current({
                      ...e,
                      tree: h,
                      x: n.clientX,
                      y: n.clientY,
                      onClose() {
                        j(), A(), P();
                      },
                    })),
                    r.addEventListener("pointermove", k.current);
                  return;
                }
                P();
              }
              function o(n) {
                t() ||
                  null == y.current ||
                  y.current({
                    ...e,
                    tree: h,
                    x: n.clientX,
                    y: n.clientY,
                    leave: !0,
                    onClose() {
                      j(), A(), P();
                    },
                  })(n);
              }
              let p = d.floating.current,
                m = d.domReference.current;
              if (eA(m))
                return (
                  c && m.addEventListener("mouseleave", o),
                  null == p || p.addEventListener("mouseleave", o),
                  s && m.addEventListener("mousemove", r, { once: !0 }),
                  m.addEventListener("mouseenter", r),
                  m.addEventListener("mouseleave", i),
                  () => {
                    c && m.removeEventListener("mouseleave", o),
                      null == p || p.removeEventListener("mouseleave", o),
                      s && m.removeEventListener("mousemove", r),
                      m.removeEventListener("mouseenter", r),
                      m.removeEventListener("mouseleave", i);
                  }
                );
            }, [m.domReference, n, e, a, l, s, P, A, j, u, c, h, d, v, y, f]),
            eg(() => {
              if (
                n &&
                c &&
                y.current &&
                y.current.__options.blockPointerEvents &&
                C()
              ) {
                (eC(d.floating.current).body.style.pointerEvents = "none"),
                  (S.current = !0);
                let n = d.domReference.current,
                  r = d.floating.current;
                if (eA(n) && r) {
                  var e, t;
                  let i =
                    null == h ||
                    null == (e = h.nodesRef.current.find((e) => e.id === g)) ||
                    null == (t = e.context)
                      ? void 0
                      : t.refs.floating.current;
                  return (
                    i && (i.style.pointerEvents = ""),
                    (n.style.pointerEvents = "auto"),
                    (r.style.pointerEvents = "auto"),
                    () => {
                      (n.style.pointerEvents = ""),
                        (r.style.pointerEvents = "");
                    }
                  );
                }
              }
            }, [n, c, g, d, h, y, f, C]),
            eg(() => {
              b && !c && ((x.current = void 0), A(), j());
            }),
            r.useEffect(
              () => () => {
                A(),
                  clearTimeout(w.current),
                  clearTimeout(O.current),
                  S.current && j();
              },
              [n, A, j]
            ),
            r.useMemo(() => {
              if (!n) return {};
              function e(e) {
                x.current = e.pointerType;
              }
              return {
                reference: {
                  onPointerDown: e,
                  onPointerEnter: e,
                  onMouseMove() {
                    c ||
                      0 === l ||
                      (clearTimeout(O.current),
                      (O.current = setTimeout(() => {
                        E.current || u(!0);
                      }, l)));
                  },
                },
                floating: {
                  onMouseEnter() {
                    clearTimeout(w.current);
                  },
                  onMouseLeave() {
                    P(!1);
                  },
                },
              };
            }, [n, l, c, u, P])
          );
        },
        eM = r.createContext({
          delay: 1e3,
          initialDelay: 1e3,
          currentId: null,
          setCurrentId: () => {},
          setState: () => {},
        }),
        eF = () => r.useContext(eM),
        e_ = (e) => {
          let { children: t, delay: n } = e,
            [i, o] = r.useState({ delay: n, initialDelay: n, currentId: null }),
            a = r.useCallback((e) => {
              o((t) => ({ ...t, currentId: e }));
            }, []);
          return r.createElement(
            eM.Provider,
            {
              value: r.useMemo(
                () => ({ ...i, setState: o, setCurrentId: a }),
                [i, o, a]
              ),
            },
            t
          );
        },
        eB = function (e, t) {
          let { open: n } = e,
            { enabled: i = !0, role: o = "dialog" } = void 0 === t ? {} : t,
            a = ew(),
            l = ew();
          return r.useMemo(() => {
            let e = { id: a, role: o };
            return i
              ? "tooltip" === o
                ? {
                    reference: { "aria-describedby": n ? a : void 0 },
                    floating: e,
                  }
                : {
                    reference: {
                      "aria-expanded": n ? "true" : "false",
                      "aria-haspopup": "alertdialog" === o ? "dialog" : o,
                      "aria-controls": n ? a : void 0,
                      ...("listbox" === o && { role: "combobox" }),
                      ...("menu" === o && { id: l }),
                    },
                    floating: {
                      ...e,
                      ...("menu" === o && { "aria-labelledby": l }),
                    },
                  }
              : {};
          }, [i, o, n, a, l]);
        };
      function eH(e, t) {
        return (
          null != t &&
          ("composedPath" in e
            ? e.composedPath().includes(t)
            : null != e.target && t.contains(e.target))
        );
      }
      let eU = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        e$ = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        eW = function (e, t) {
          let { open: n, onOpenChange: i, refs: o, events: a, nodeId: l } = e,
            {
              enabled: s = !0,
              escapeKey: c = !0,
              outsidePress: u = !0,
              outsidePressEvent: f = "pointerdown",
              referencePress: p = !1,
              referencePressEvent: d = "pointerdown",
              ancestorScroll: m = !1,
              bubbles: h = !0,
            } = void 0 === t ? {} : t,
            g = eS(),
            y = null != eE(),
            v = r.useRef(!1);
          return (
            r.useEffect(() => {
              if (!n || !s) return;
              function e(e) {
                "Escape" === e.key &&
                  ((!h && g && eI(g.nodesRef.current, l).length > 0) ||
                    (a.emit("dismiss", { preventScroll: !1 }), i(!1)));
              }
              function t(e) {
                var t;
                let n = v.current;
                if (((v.current = !1), n)) return;
                let r = "composedPath" in e ? e.composedPath()[0] : e.target;
                if (eA(r) && o.floating.current) {
                  let n =
                      null != (t = o.floating.current.ownerDocument.defaultView)
                        ? t
                        : window,
                    i = r.scrollWidth > r.clientWidth,
                    a = r.scrollHeight > r.clientHeight,
                    l = a && e.offsetX > r.clientWidth;
                  if (
                    (a &&
                      "rtl" === n.getComputedStyle(r).direction &&
                      (l = e.offsetX <= r.offsetWidth - r.clientWidth),
                    l || (i && e.offsetY > r.clientHeight))
                  )
                    return;
                }
                let s =
                  g &&
                  eI(g.nodesRef.current, l).some((t) => {
                    var n;
                    return eH(
                      e,
                      null == (n = t.context) ? void 0 : n.refs.floating.current
                    );
                  });
                eH(e, o.floating.current) ||
                  eH(e, o.domReference.current) ||
                  s ||
                  (!h && g && eI(g.nodesRef.current, l).length > 0) ||
                  (a.emit("dismiss", !!y && { preventScroll: !0 }), i(!1));
              }
              function r() {
                i(!1);
              }
              let p = eC(o.floating.current);
              c && p.addEventListener("keydown", e),
                u && p.addEventListener(f, t);
              let d = [];
              return (
                m &&
                  (eA(o.domReference.current) &&
                    (d = Y(o.domReference.current)),
                  eA(o.floating.current) &&
                    (d = d.concat(Y(o.floating.current))),
                  !eA(o.reference.current) &&
                    o.reference.current &&
                    o.reference.current.contextElement &&
                    (d = d.concat(Y(o.reference.current.contextElement)))),
                (d = d.filter((e) => {
                  var t;
                  return (
                    e !==
                    (null == (t = p.defaultView) ? void 0 : t.visualViewport)
                  );
                })).forEach((e) => {
                  e.addEventListener("scroll", r, { passive: !0 });
                }),
                () => {
                  c && p.removeEventListener("keydown", e),
                    u && p.removeEventListener(f, t),
                    d.forEach((e) => {
                      e.removeEventListener("scroll", r);
                    });
                }
              );
            }, [c, u, f, a, g, l, n, i, m, s, h, o, y]),
            r.useEffect(() => {
              v.current = !1;
            }, [u, f]),
            r.useMemo(
              () =>
                s
                  ? {
                      reference: {
                        [eU[d]]: () => {
                          p && (a.emit("dismiss"), i(!1));
                        },
                      },
                      floating: {
                        [e$[f]]: () => {
                          v.current = !0;
                        },
                      },
                    }
                  : {},
              [s, a, p, f, d, i]
            )
          );
        },
        eV = function (e, t) {
          let { open: n, onOpenChange: i, dataRef: o, refs: a, events: l } = e,
            { enabled: s = !0, keyboardOnly: c = !0 } = void 0 === t ? {} : t,
            u = r.useRef(""),
            f = r.useRef(!1),
            p = r.useRef();
          return (
            r.useEffect(() => {
              var e;
              if (!s) return;
              let t =
                null != (e = eC(a.floating.current).defaultView) ? e : window;
              function r() {
                var e;
                !n &&
                  (e = a.domReference.current) &&
                  e instanceof eP(e).HTMLElement &&
                  a.domReference.current.blur();
              }
              return (
                t.addEventListener("blur", r),
                () => {
                  t.removeEventListener("blur", r);
                }
              );
            }, [a, n, s]),
            r.useEffect(() => {
              if (s)
                return (
                  l.on("dismiss", e),
                  () => {
                    l.off("dismiss", e);
                  }
                );
              function e() {
                f.current = !0;
              }
            }, [l, s]),
            r.useEffect(
              () => () => {
                clearTimeout(p.current);
              },
              []
            ),
            r.useMemo(
              () =>
                s
                  ? {
                      reference: {
                        onPointerDown(e) {
                          let { pointerType: t } = e;
                          (u.current = t), (f.current = !!(t && c));
                        },
                        onPointerLeave() {
                          f.current = !1;
                        },
                        onFocus(e) {
                          var t, n, r;
                          !f.current &&
                            (("focus" === e.type &&
                              (null == (t = o.current.openEvent)
                                ? void 0
                                : t.type) === "mousedown" &&
                              null != (n = a.domReference.current) &&
                              n.contains(
                                null == (r = o.current.openEvent)
                                  ? void 0
                                  : r.target
                              )) ||
                              ((o.current.openEvent = e.nativeEvent), i(!0)));
                        },
                        onBlur(e) {
                          let t = e.relatedTarget;
                          p.current = setTimeout(() => {
                            var e, n;
                            (null != (e = a.floating.current) &&
                              e.contains(t)) ||
                              (null != (n = a.domReference.current) &&
                                n.contains(t)) ||
                              ((f.current = !1), i(!1));
                          });
                        },
                      },
                    }
                  : {},
              [s, c, a, o, i]
            )
          );
        },
        eq = (0, r.createContext)(!1),
        eY = eq.Provider;
      function eK({ children: e, openDelay: t = 0, closeDelay: n = 0 }) {
        return r.createElement(
          eY,
          { value: !0 },
          r.createElement(e_, { delay: { open: t, close: n } }, e)
        );
      }
      eK.displayName = "@mantine/core/TooltipGroup";
      var eG = n(38169),
        eX = Object.defineProperty,
        eZ = Object.defineProperties,
        eQ = Object.getOwnPropertyDescriptors,
        eJ = Object.getOwnPropertySymbols,
        e0 = Object.prototype.hasOwnProperty,
        e1 = Object.prototype.propertyIsEnumerable,
        e2 = (e, t, n) =>
          t in e
            ? eX(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        e3 = (e, t) => {
          for (var n in t || (t = {})) e0.call(t, n) && e2(e, n, t[n]);
          if (eJ) for (var n of eJ(t)) e1.call(t, n) && e2(e, n, t[n]);
          return e;
        },
        e6 = (0, eG.r)(
          (e, { color: t, radius: n, width: r, multiline: i }) => ({
            tooltip: eZ(
              e3(
                e3({}, e.fn.fontStyles()),
                (function (e, t) {
                  if (!t)
                    return {
                      backgroundColor:
                        "dark" === e.colorScheme
                          ? e.colors.dark[6]
                          : e.colors.gray[9],
                      color: e.white,
                    };
                  let n = e.fn.variant({
                    variant: "filled",
                    color: t,
                    primaryFallback: !1,
                  });
                  return { backgroundColor: n.background, color: n.color };
                })(e, t)
              ),
              eQ({
                lineHeight: e.lineHeight,
                fontSize: e.fontSizes.sm,
                borderRadius: e.fn.radius(n),
                padding: `calc(${e.spacing.xs}px / 2) ${e.spacing.xs}px`,
                position: "absolute",
                whiteSpace: i ? "unset" : "nowrap",
                pointerEvents: "none",
                width: r,
              })
            ),
            arrow: { backgroundColor: "inherit", border: 0, zIndex: 1 },
          })
        );
      let e5 = {
        children:
          "Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
      };
      var e4 = n(77523),
        e7 = n(50433),
        e9 = Object.defineProperty,
        e8 = Object.defineProperties,
        te = Object.getOwnPropertyDescriptors,
        tt = Object.getOwnPropertySymbols,
        tn = Object.prototype.hasOwnProperty,
        tr = Object.prototype.propertyIsEnumerable,
        ti = (e, t, n) =>
          t in e
            ? e9(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        to = (e, t) => {
          for (var n in t || (t = {})) tn.call(t, n) && ti(e, n, t[n]);
          if (tt) for (var n of tt(t)) tr.call(t, n) && ti(e, n, t[n]);
          return e;
        },
        ta = (e, t) => e8(e, te(t));
      let tl = {
        refProp: "ref",
        withinPortal: !0,
        offset: 10,
        position: "right",
        zIndex: (0, l.I)("popover"),
      };
      function ts(e) {
        var t;
        let n = (0, s.a1)("TooltipFloating", tl, e),
          {
            children: i,
            refProp: l,
            withinPortal: c,
            style: u,
            className: f,
            classNames: p,
            styles: d,
            unstyled: m,
            radius: h,
            color: g,
            label: y,
            offset: v,
            position: b,
            multiline: x,
            width: w,
            zIndex: k,
            disabled: O,
          } = n,
          E = ((e, t) => {
            var n = {};
            for (var r in e) tn.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && tt)
              for (var r of tt(e))
                0 > t.indexOf(r) && tr.call(e, r) && (n[r] = e[r]);
            return n;
          })(n, [
            "children",
            "refProp",
            "withinPortal",
            "style",
            "className",
            "classNames",
            "styles",
            "unstyled",
            "radius",
            "color",
            "label",
            "offset",
            "position",
            "multiline",
            "width",
            "zIndex",
            "disabled",
          ]),
          {
            handleMouseMove: S,
            x: C,
            y: P,
            opened: A,
            boundaryRef: j,
            floating: z,
            setOpened: R,
          } = (function ({ offset: e, position: t }) {
            let [n, i] = (0, r.useState)(!1),
              o = (0, r.useRef)(),
              {
                x: a,
                y: l,
                reference: s,
                floating: c,
                refs: u,
                update: f,
                placement: p,
              } = ez({
                placement: t,
                middleware: [
                  eu({ crossAxis: !0, padding: 5, rootBoundary: "document" }),
                ],
              }),
              d = p.includes("right") ? e : t.includes("left") ? -1 * e : 0,
              m = p.includes("bottom") ? e : t.includes("top") ? -1 * e : 0,
              h = (0, r.useCallback)(
                ({ clientX: e, clientY: t }) => {
                  s({
                    getBoundingClientRect: () => ({
                      width: 0,
                      height: 0,
                      x: e,
                      y: t,
                      left: e + d,
                      top: t + m,
                      right: e,
                      bottom: t,
                    }),
                  });
                },
                [s]
              );
            return (
              (0, r.useEffect)(() => {
                if (u.floating.current) {
                  let e = o.current;
                  e.addEventListener("mousemove", h);
                  let t = Y(u.floating.current);
                  return (
                    t.forEach((e) => {
                      e.addEventListener("scroll", f);
                    }),
                    () => {
                      e.removeEventListener("mousemove", h),
                        t.forEach((e) => {
                          e.removeEventListener("scroll", f);
                        });
                    }
                  );
                }
              }, [s, u.floating, f, h, n]),
              {
                handleMouseMove: h,
                x: a,
                y: l,
                opened: n,
                setOpened: i,
                boundaryRef: o,
                floating: c,
              }
            );
          })({ offset: v, position: b }),
          { classes: T, cx: I } = e6(
            { radius: h, color: g, multiline: x, width: w },
            { name: "TooltipFloating", classNames: p, styles: d, unstyled: m }
          );
        if (!o(i)) throw Error(e5.children);
        let D = (0, a.p)(j, i.ref);
        return O
          ? r.createElement(r.Fragment, null, i)
          : r.createElement(
              r.Fragment,
              null,
              r.createElement(
                e4.r,
                { withinPortal: c },
                r.createElement(
                  e7.a,
                  ta(to({}, E), {
                    ref: z,
                    className: I(T.tooltip, f),
                    style: ta(to({}, u), {
                      zIndex: k,
                      display: A ? "block" : "none",
                      top: null != P ? P : "",
                      left: null != (t = Math.round(C)) ? t : "",
                    }),
                  }),
                  y
                )
              ),
              (0, r.cloneElement)(
                i,
                ta(to({}, i.props), {
                  [l]: D,
                  onMouseEnter: (e) => {
                    var t, n;
                    null == (n = (t = i.props).onMouseEnter) || n.call(t, e),
                      S(e),
                      R(!0);
                  },
                  onMouseLeave: (e) => {
                    var t, n;
                    null == (n = (t = i.props).onMouseLeave) || n.call(t, e),
                      R(!1);
                  },
                })
              )
            );
      }
      ts.displayName = "@mantine/core/TooltipFloating";
      var tc = n(85607),
        tu = n(23559),
        tf = n(26993),
        tp = Object.defineProperty,
        td = Object.defineProperties,
        tm = Object.getOwnPropertyDescriptors,
        th = Object.getOwnPropertySymbols,
        tg = Object.prototype.hasOwnProperty,
        ty = Object.prototype.propertyIsEnumerable,
        tv = (e, t, n) =>
          t in e
            ? tp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        tb = (e, t) => {
          for (var n in t || (t = {})) tg.call(t, n) && tv(e, n, t[n]);
          if (th) for (var n of th(t)) ty.call(t, n) && tv(e, n, t[n]);
          return e;
        },
        tx = (e, t) => td(e, tm(t));
      function tw(e, t, n, r) {
        return "center" === e || "center" === r
          ? { top: t }
          : "end" === e
          ? { bottom: n }
          : "start" === e
          ? { top: n }
          : {};
      }
      function tk(e, t, n, r, i) {
        return "center" === e || "center" === r
          ? { left: t }
          : "end" === e
          ? { ["ltr" === i ? "right" : "left"]: n }
          : "start" === e
          ? { ["ltr" === i ? "left" : "right"]: n }
          : {};
      }
      let tO = {
        bottom: "borderTopLeftRadius",
        left: "borderTopRightRadius",
        right: "borderBottomLeftRadius",
        top: "borderBottomRightRadius",
      };
      var tE = Object.defineProperty,
        tS = Object.defineProperties,
        tC = Object.getOwnPropertyDescriptors,
        tP = Object.getOwnPropertySymbols,
        tA = Object.prototype.hasOwnProperty,
        tj = Object.prototype.propertyIsEnumerable,
        tz = (e, t, n) =>
          t in e
            ? tE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      let tR = (0, r.forwardRef)((e, t) => {
        let n, i;
        var {
            withBorder: o,
            position: a,
            arrowSize: l,
            arrowOffset: c,
            arrowRadius: u,
            arrowPosition: f,
            visible: p,
            arrowX: d,
            arrowY: m,
          } = e,
          h = ((e, t) => {
            var n = {};
            for (var r in e) tA.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && tP)
              for (var r of tP(e))
                0 > t.indexOf(r) && tj.call(e, r) && (n[r] = e[r]);
            return n;
          })(e, [
            "withBorder",
            "position",
            "arrowSize",
            "arrowOffset",
            "arrowRadius",
            "arrowPosition",
            "visible",
            "arrowX",
            "arrowY",
          ]);
        let g = (0, s.xd)();
        return p
          ? r.createElement(
              "div",
              ((n = ((e, t) => {
                for (var n in t || (t = {})) tA.call(t, n) && tz(e, n, t[n]);
                if (tP) for (var n of tP(t)) tj.call(t, n) && tz(e, n, t[n]);
                return e;
              })({}, h)),
              (i = {
                ref: t,
                style: (function ({
                  position: e,
                  withBorder: t,
                  arrowSize: n,
                  arrowOffset: r,
                  arrowRadius: i,
                  arrowPosition: o,
                  arrowX: a,
                  arrowY: l,
                  dir: s,
                }) {
                  let [c, u = "center"] = e.split("-"),
                    f = {
                      width: n,
                      height: n,
                      transform: "rotate(45deg)",
                      position: "absolute",
                      [tO[c]]: i,
                    },
                    p = t ? -n / 2 - 1 : -n / 2;
                  return "left" === c
                    ? tx(tb(tb({}, f), tw(u, l, r, o)), {
                        right: p,
                        borderLeft: 0,
                        borderBottom: 0,
                      })
                    : "right" === c
                    ? tx(tb(tb({}, f), tw(u, l, r, o)), {
                        left: p,
                        borderRight: 0,
                        borderTop: 0,
                      })
                    : "top" === c
                    ? tx(tb(tb({}, f), tk(u, a, r, o, s)), {
                        bottom: p,
                        borderTop: 0,
                        borderLeft: 0,
                      })
                    : "bottom" === c
                    ? tx(tb(tb({}, f), tk(u, a, r, o, s)), {
                        top: p,
                        borderBottom: 0,
                        borderRight: 0,
                      })
                    : {};
                })({
                  withBorder: o,
                  position: a,
                  arrowSize: l,
                  arrowOffset: c,
                  arrowRadius: u,
                  arrowPosition: f,
                  dir: g.dir,
                  arrowX: d,
                  arrowY: m,
                }),
              }),
              tS(n, tC(i)))
            )
          : null;
      });
      tR.displayName = "@mantine/core/FloatingArrow";
      var tT = Object.defineProperty,
        tI = Object.defineProperties,
        tD = Object.getOwnPropertyDescriptors,
        tN = Object.getOwnPropertySymbols,
        tL = Object.prototype.hasOwnProperty,
        tM = Object.prototype.propertyIsEnumerable,
        tF = (e, t, n) =>
          t in e
            ? tT(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        t_ = (e, t) => {
          for (var n in t || (t = {})) tL.call(t, n) && tF(e, n, t[n]);
          if (tN) for (var n of tN(t)) tM.call(t, n) && tF(e, n, t[n]);
          return e;
        };
      let tB = {
          position: "top",
          refProp: "ref",
          withinPortal: !1,
          inline: !1,
          arrowSize: 4,
          arrowOffset: 5,
          arrowRadius: 0,
          arrowPosition: "side",
          offset: 5,
          transition: "fade",
          transitionDuration: 100,
          width: "auto",
          events: { hover: !0, focus: !1, touch: !1 },
          zIndex: (0, l.I)("popover"),
          positionDependencies: [],
        },
        tH = (0, r.forwardRef)((e, t) => {
          let n = (0, r.useRef)(null),
            i = (0, s.a1)("Tooltip", tB, e),
            {
              children: l,
              position: f,
              refProp: d,
              label: m,
              openDelay: h,
              closeDelay: C,
              onPositionChange: P,
              opened: R,
              withinPortal: T,
              radius: I,
              color: N,
              classNames: L,
              styles: M,
              unstyled: F,
              style: _,
              className: B,
              withArrow: H,
              arrowSize: U,
              arrowOffset: $,
              arrowRadius: W,
              arrowPosition: V,
              offset: q,
              transition: K,
              transitionDuration: G,
              multiline: Z,
              width: Q,
              events: J,
              zIndex: et,
              disabled: en,
              positionDependencies: er,
              onClick: ei,
              onMouseEnter: eo,
              onMouseLeave: ea,
              inline: el,
            } = i,
            es = ((e, t) => {
              var n = {};
              for (var r in e)
                tL.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
              if (null != e && tN)
                for (var r of tN(e))
                  0 > t.indexOf(r) && tM.call(e, r) && (n[r] = e[r]);
              return n;
            })(i, [
              "children",
              "position",
              "refProp",
              "label",
              "openDelay",
              "closeDelay",
              "onPositionChange",
              "opened",
              "withinPortal",
              "radius",
              "color",
              "classNames",
              "styles",
              "unstyled",
              "style",
              "className",
              "withArrow",
              "arrowSize",
              "arrowOffset",
              "arrowRadius",
              "arrowPosition",
              "offset",
              "transition",
              "transitionDuration",
              "multiline",
              "width",
              "events",
              "zIndex",
              "disabled",
              "positionDependencies",
              "onClick",
              "onMouseEnter",
              "onMouseLeave",
              "inline",
            ]),
            {
              classes: ep,
              cx: ed,
              theme: em,
            } = e6(
              { radius: I, color: N, width: Q, multiline: Z },
              { name: "Tooltip", classNames: L, styles: M, unstyled: F }
            ),
            eh = (function (e) {
              var t, n, i;
              let [o, a] = (0, r.useState)(!1),
                l = "boolean" == typeof e.opened ? e.opened : o,
                s = (0, r.useContext)(eq),
                f = (0, tc.B)(),
                { delay: d, currentId: m, setCurrentId: h } = eF(),
                C = (0, r.useCallback)(
                  (e) => {
                    a(e), e && h(f);
                  },
                  [h, f]
                ),
                {
                  x: P,
                  y: R,
                  reference: T,
                  floating: I,
                  context: N,
                  refs: L,
                  update: M,
                  placement: F,
                  middlewareData: { arrow: { x: _, y: B } = {} },
                } = ez({
                  placement: e.position,
                  open: l,
                  onOpenChange: C,
                  middleware: [
                    (void 0 === (t = e.offset) && (t = 0),
                    {
                      name: "offset",
                      options: t,
                      async fn(e) {
                        var n, r;
                        let { x: i, y: o, placement: a, middlewareData: l } = e,
                          s = await z(e, t);
                        return a ===
                          (null == (n = l.offset) ? void 0 : n.placement) &&
                          null != (r = l.arrow) &&
                          r.alignmentOffset
                          ? {}
                          : {
                              x: i + s.x,
                              y: o + s.y,
                              data: { ...s, placement: a },
                            };
                      },
                    }),
                    eu({ padding: 8 }),
                    (void 0 === n && (n = {}),
                    {
                      name: "flip",
                      options: n,
                      async fn(e) {
                        var t, r, i, o, a;
                        let {
                            placement: l,
                            middlewareData: s,
                            rects: c,
                            initialPlacement: u,
                            platform: f,
                            elements: p,
                          } = e,
                          {
                            mainAxis: d = !0,
                            crossAxis: m = !0,
                            fallbackPlacements: h,
                            fallbackStrategy: E = "bestFit",
                            fallbackAxisSideDirection: S = "none",
                            flipAlignment: C = !0,
                            ...P
                          } = g(n, e);
                        if (null != (t = s.arrow) && t.alignmentOffset)
                          return {};
                        let j = y(l),
                          z = w(u),
                          R = y(u) === u,
                          T = await (null == f.isRTL
                            ? void 0
                            : f.isRTL(p.floating)),
                          I =
                            h ||
                            (R || !C
                              ? [O(u)]
                              : (function (e) {
                                  let t = O(e);
                                  return [k(e), t, k(t)];
                                })(u)),
                          D = "none" !== S;
                        !h &&
                          D &&
                          I.push(
                            ...(function (e, t, n, r) {
                              let i = v(e),
                                o = (function (e, t, n) {
                                  let r = ["left", "right"],
                                    i = ["right", "left"];
                                  switch (e) {
                                    case "top":
                                    case "bottom":
                                      if (n) return t ? i : r;
                                      return t ? r : i;
                                    case "left":
                                    case "right":
                                      return t
                                        ? ["top", "bottom"]
                                        : ["bottom", "top"];
                                    default:
                                      return [];
                                  }
                                })(y(e), "start" === n, r);
                              return (
                                i &&
                                  ((o = o.map((e) => e + "-" + i)),
                                  t && (o = o.concat(o.map(k)))),
                                o
                              );
                            })(u, C, S, T)
                          );
                        let N = [u, ...I],
                          L = await A(e, P),
                          M = [],
                          F =
                            (null == (r = s.flip) ? void 0 : r.overflows) || [];
                        if ((d && M.push(L[j]), m)) {
                          let e = (function (e, t, n) {
                            void 0 === n && (n = !1);
                            let r = v(e),
                              i = b(w(e)),
                              o = x(i),
                              a =
                                "x" === i
                                  ? r === (n ? "end" : "start")
                                    ? "right"
                                    : "left"
                                  : "start" === r
                                  ? "bottom"
                                  : "top";
                            return (
                              t.reference[o] > t.floating[o] && (a = O(a)),
                              [a, O(a)]
                            );
                          })(l, c, T);
                          M.push(L[e[0]], L[e[1]]);
                        }
                        if (
                          ((F = [...F, { placement: l, overflows: M }]),
                          !M.every((e) => e <= 0))
                        ) {
                          let e =
                              ((null == (i = s.flip) ? void 0 : i.index) || 0) +
                              1,
                            t = N[e];
                          if (t)
                            return {
                              data: { index: e, overflows: F },
                              reset: { placement: t },
                            };
                          let n =
                            null ==
                            (o = F.filter((e) => e.overflows[0] <= 0).sort(
                              (e, t) => e.overflows[1] - t.overflows[1]
                            )[0])
                              ? void 0
                              : o.placement;
                          if (!n)
                            switch (E) {
                              case "bestFit": {
                                let e =
                                  null ==
                                  (a = F.filter((e) => {
                                    if (D) {
                                      let t = w(e.placement);
                                      return t === z || "y" === t;
                                    }
                                    return !0;
                                  })
                                    .map((e) => [
                                      e.placement,
                                      e.overflows
                                        .filter((e) => e > 0)
                                        .reduce((e, t) => e + t, 0),
                                    ])
                                    .sort((e, t) => e[1] - t[1])[0])
                                    ? void 0
                                    : a[0];
                                e && (n = e);
                                break;
                              }
                              case "initialPlacement":
                                n = u;
                            }
                          if (l !== n) return { reset: { placement: n } };
                        }
                        return {};
                      },
                    }),
                    ((e) => {
                      let { element: t, padding: n } = e;
                      return {
                        name: "arrow",
                        options: e,
                        fn(e) {
                          if (
                            Object.prototype.hasOwnProperty.call(t, "current")
                          ) {
                            if (null != t.current)
                              return ef({ element: t.current, padding: n }).fn(
                                e
                              );
                          } else if (t)
                            return ef({ element: t, padding: n }).fn(e);
                          return {};
                        },
                      };
                    })({ element: e.arrowRef, padding: e.arrowOffset }),
                    ...(e.inline
                      ? [
                          (void 0 === i && (i = {}),
                          {
                            name: "inline",
                            options: i,
                            async fn(e) {
                              let {
                                  placement: t,
                                  elements: n,
                                  rects: r,
                                  platform: o,
                                  strategy: a,
                                } = e,
                                { padding: l = 2, x: s, y: f } = g(i, e),
                                p = Array.from(
                                  (await (null == o.getClientRects
                                    ? void 0
                                    : o.getClientRects(n.reference))) || []
                                ),
                                d = (function (e) {
                                  let t = e.slice().sort((e, t) => e.y - t.y),
                                    n = [],
                                    r = null;
                                  for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    !r || i.y - r.y > r.height / 2
                                      ? n.push([i])
                                      : n[n.length - 1].push(i),
                                      (r = i);
                                  }
                                  return n.map((e) => S(j(e)));
                                })(p),
                                m = S(j(p)),
                                h = E(l),
                                v = await o.getElementRects({
                                  reference: {
                                    getBoundingClientRect: function () {
                                      if (
                                        2 === d.length &&
                                        d[0].left > d[1].right &&
                                        null != s &&
                                        null != f
                                      )
                                        return (
                                          d.find(
                                            (e) =>
                                              s > e.left - h.left &&
                                              s < e.right + h.right &&
                                              f > e.top - h.top &&
                                              f < e.bottom + h.bottom
                                          ) || m
                                        );
                                      if (d.length >= 2) {
                                        if ("y" === w(t)) {
                                          let e = d[0],
                                            n = d[d.length - 1],
                                            r = "top" === y(t),
                                            i = e.top,
                                            o = n.bottom,
                                            a = r ? e.left : n.left,
                                            l = r ? e.right : n.right;
                                          return {
                                            top: i,
                                            bottom: o,
                                            left: a,
                                            right: l,
                                            width: l - a,
                                            height: o - i,
                                            x: a,
                                            y: i,
                                          };
                                        }
                                        let e = "left" === y(t),
                                          n = u(...d.map((e) => e.right)),
                                          r = c(...d.map((e) => e.left)),
                                          i = d.filter((t) =>
                                            e ? t.left === r : t.right === n
                                          ),
                                          o = i[0].top,
                                          a = i[i.length - 1].bottom;
                                        return {
                                          top: o,
                                          bottom: a,
                                          left: r,
                                          right: n,
                                          width: n - r,
                                          height: a - o,
                                          x: r,
                                          y: o,
                                        };
                                      }
                                      return m;
                                    },
                                  },
                                  floating: n.floating,
                                  strategy: a,
                                });
                              return r.reference.x !== v.reference.x ||
                                r.reference.y !== v.reference.y ||
                                r.reference.width !== v.reference.width ||
                                r.reference.height !== v.reference.height
                                ? { reset: { rects: v } }
                                : {};
                            },
                          }),
                        ]
                      : []),
                  ],
                }),
                { getReferenceProps: H, getFloatingProps: U } = eT([
                  eL(N, {
                    enabled: e.events.hover,
                    delay: s ? d : { open: e.openDelay, close: e.closeDelay },
                    mouseOnly: !e.events.touch,
                  }),
                  eV(N, { enabled: e.events.focus, keyboardOnly: !0 }),
                  eB(N, { role: "tooltip" }),
                  eW(N, { enabled: (e.opened, !1) }),
                  ((e, t) => {
                    let { open: n, onOpenChange: i } = e,
                      { id: o } = t,
                      { currentId: a, initialDelay: l, setState: s } = eF();
                    r.useEffect(() => {
                      a &&
                        (s((e) => ({
                          ...e,
                          delay: { open: 1, close: eN(l, "close") },
                        })),
                        a !== o && i(!1));
                    }, [o, i, s, a, l]),
                      r.useEffect(() => {
                        n ||
                          a !== o ||
                          (i(!1),
                          s((e) => ({ ...e, delay: l, currentId: null })));
                      }, [n, s, a, o, i, l]);
                  })(N, { id: f }),
                ]);
              return (
                !(function ({
                  opened: e,
                  floating: t,
                  positionDependencies: n,
                }) {
                  let [i, o] = (0, r.useState)(0);
                  (0, r.useEffect)(() => {
                    if (t.refs.reference.current && t.refs.floating.current)
                      return (function (e, t, n, r) {
                        let i;
                        void 0 === r && (r = {});
                        let {
                            ancestorScroll: o = !0,
                            ancestorResize: a = !0,
                            elementResize: l = "function" ==
                              typeof ResizeObserver,
                            layoutShift: s = "function" ==
                              typeof IntersectionObserver,
                            animationFrame: f = !1,
                          } = r,
                          d = X(e),
                          m = o || a ? [...(d ? Y(d) : []), ...Y(t)] : [];
                        m.forEach((e) => {
                          o && e.addEventListener("scroll", n, { passive: !0 }),
                            a && e.addEventListener("resize", n);
                        });
                        let h =
                            d && s
                              ? (function (e, t) {
                                  let n,
                                    r = null,
                                    i = D(e);
                                  function o() {
                                    var e;
                                    clearTimeout(n),
                                      null == (e = r) || e.disconnect(),
                                      (r = null);
                                  }
                                  return (
                                    !(function a(l, s) {
                                      void 0 === l && (l = !1),
                                        void 0 === s && (s = 1),
                                        o();
                                      let f = e.getBoundingClientRect(),
                                        {
                                          left: d,
                                          top: m,
                                          width: h,
                                          height: g,
                                        } = f;
                                      if ((l || t(), !h || !g)) return;
                                      let y = p(m),
                                        v = p(i.clientWidth - (d + h)),
                                        b = {
                                          rootMargin:
                                            -y +
                                            "px " +
                                            -v +
                                            "px " +
                                            -p(i.clientHeight - (m + g)) +
                                            "px " +
                                            -p(d) +
                                            "px",
                                          threshold: u(0, c(1, s)) || 1,
                                        },
                                        x = !0;
                                      function w(t) {
                                        let r = t[0].intersectionRatio;
                                        if (r !== s) {
                                          if (!x) return a();
                                          r
                                            ? a(!1, r)
                                            : (n = setTimeout(() => {
                                                a(!1, 1e-7);
                                              }, 1e3));
                                        }
                                        1 !== r ||
                                          ec(f, e.getBoundingClientRect()) ||
                                          a(),
                                          (x = !1);
                                      }
                                      try {
                                        r = new IntersectionObserver(w, {
                                          ...b,
                                          root: i.ownerDocument,
                                        });
                                      } catch (e) {
                                        r = new IntersectionObserver(w, b);
                                      }
                                      r.observe(e);
                                    })(!0),
                                    o
                                  );
                                })(d, n)
                              : null,
                          g = -1,
                          y = null;
                        l &&
                          ((y = new ResizeObserver((e) => {
                            let [r] = e;
                            r &&
                              r.target === d &&
                              y &&
                              (y.unobserve(t),
                              cancelAnimationFrame(g),
                              (g = requestAnimationFrame(() => {
                                var e;
                                null == (e = y) || e.observe(t);
                              }))),
                              n();
                          })),
                          d && !f && y.observe(d),
                          y.observe(t));
                        let v = f ? ee(e) : null;
                        return (
                          f &&
                            (function t() {
                              let r = ee(e);
                              v && !ec(v, r) && n(),
                                (v = r),
                                (i = requestAnimationFrame(t));
                            })(),
                          n(),
                          () => {
                            var e;
                            m.forEach((e) => {
                              o && e.removeEventListener("scroll", n),
                                a && e.removeEventListener("resize", n);
                            }),
                              null == h || h(),
                              null == (e = y) || e.disconnect(),
                              (y = null),
                              f && cancelAnimationFrame(i);
                          }
                        );
                      })(
                        t.refs.reference.current,
                        t.refs.floating.current,
                        t.update
                      );
                  }, [t.refs.reference, t.refs.floating, e, i]),
                    (0, tu.C)(() => {
                      t.update();
                    }, n),
                    (0, tu.C)(() => {
                      o((e) => e + 1);
                    }, [e]);
                })({
                  opened: l,
                  positionDependencies: e.positionDependencies,
                  floating: { refs: L, update: M },
                }),
                (0, tu.C)(() => {
                  var t;
                  null == (t = e.onPositionChange) || t.call(e, F);
                }, [F]),
                {
                  x: P,
                  y: R,
                  arrowX: _,
                  arrowY: B,
                  reference: T,
                  floating: I,
                  getFloatingProps: U,
                  getReferenceProps: H,
                  isGroupPhase: l && m && m !== f,
                  opened: l,
                  placement: F,
                }
              );
            })({
              position: (function (e, t) {
                if (
                  "rtl" === e &&
                  (t.includes("right") || t.includes("left"))
                ) {
                  let [e, n] = t.split("-"),
                    r = "right" === e ? "left" : "right";
                  return void 0 === n ? r : `${r}-${n}`;
                }
                return t;
              })(em.dir, f),
              closeDelay: C,
              openDelay: h,
              onPositionChange: P,
              opened: R,
              events: J,
              arrowRef: n,
              arrowOffset: $,
              offset: q + (H ? U / 2 : 0),
              positionDependencies: [...er, l],
              inline: el,
            });
          if (!o(l)) throw Error(e5.children);
          let eg = (0, a.p)(eh.reference, l.ref, t);
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              e4.r,
              { withinPortal: T },
              r.createElement(
                tf.e,
                {
                  mounted: !en && eh.opened,
                  transition: K,
                  duration: eh.isGroupPhase ? 10 : G,
                },
                (e) => {
                  var t, i;
                  return r.createElement(
                    e7.a,
                    t_(
                      t_({}, es),
                      eh.getFloatingProps({
                        ref: eh.floating,
                        className: ep.tooltip,
                        style: tI(
                          t_(t_({}, _), e),
                          tD({
                            zIndex: et,
                            top: null != (t = eh.y) ? t : 0,
                            left: null != (i = eh.x) ? i : 0,
                          })
                        ),
                      })
                    ),
                    m,
                    r.createElement(tR, {
                      ref: n,
                      arrowX: eh.arrowX,
                      arrowY: eh.arrowY,
                      visible: H,
                      withBorder: !1,
                      position: eh.placement,
                      arrowSize: U,
                      arrowOffset: $,
                      arrowRadius: W,
                      arrowPosition: V,
                      className: ep.arrow,
                    })
                  );
                }
              )
            ),
            (0, r.cloneElement)(
              l,
              eh.getReferenceProps(
                t_(
                  {
                    onClick: ei,
                    onMouseEnter: eo,
                    onMouseLeave: ea,
                    onMouseMove: e.onMouseMove,
                    onPointerDown: e.onPointerDown,
                    onPointerEnter: e.onPointerEnter,
                    [d]: eg,
                    className: ed(B, l.props.className),
                  },
                  l.props
                )
              )
            )
          );
        });
      (tH.Group = eK),
        (tH.Floating = ts),
        (tH.displayName = "@mantine/core/Tooltip");
      let tU = tH;
    },
    95070: (e, t, n) => {
      "use strict";
      n.d(t, { oz: () => rR });
      var r = {};
      n.r(r),
        n.d(r, {
          boolean: () => v,
          booleanish: () => b,
          commaOrSpaceSeparated: () => E,
          commaSeparated: () => O,
          number: () => w,
          overloadedBoolean: () => x,
          spaceSeparated: () => k,
        });
      var i = {};
      n.r(i),
        n.d(i, {
          attentionMarkers: () => tT,
          contentInitial: () => tC,
          disable: () => tI,
          document: () => tS,
          flow: () => tA,
          flowInitial: () => tP,
          insideSpan: () => tR,
          string: () => tj,
          text: () => tz,
        });
      var o = n(6029);
      let a = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        l = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        s = {};
      function c(e, t) {
        return ((t || s).jsx ? l : a).test(e);
      }
      let u = /[ \t\n\f\r]/g;
      function f(e) {
        return "object" == typeof e ? "text" === e.type && p(e.value) : p(e);
      }
      function p(e) {
        return "" === e.replace(u, "");
      }
      class d {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      }
      function m(e, t) {
        let n = {},
          r = {},
          i = -1;
        for (; ++i < e.length; )
          Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
        return new d(n, r, t);
      }
      function h(e) {
        return e.toLowerCase();
      }
      (d.prototype.property = {}),
        (d.prototype.normal = {}),
        (d.prototype.space = null);
      class g {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      }
      (g.prototype.space = null),
        (g.prototype.boolean = !1),
        (g.prototype.booleanish = !1),
        (g.prototype.overloadedBoolean = !1),
        (g.prototype.number = !1),
        (g.prototype.commaSeparated = !1),
        (g.prototype.spaceSeparated = !1),
        (g.prototype.commaOrSpaceSeparated = !1),
        (g.prototype.mustUseProperty = !1),
        (g.prototype.defined = !1);
      let y = 0,
        v = S(),
        b = S(),
        x = S(),
        w = S(),
        k = S(),
        O = S(),
        E = S();
      function S() {
        return 2 ** ++y;
      }
      let C = Object.keys(r);
      class P extends g {
        constructor(e, t, n, i) {
          let o = -1;
          if (
            (super(e, t),
            (function (e, t, n) {
              n && (e[t] = n);
            })(this, "space", i),
            "number" == typeof n)
          )
            for (; ++o < C.length; ) {
              let e = C[o];
              !(function (e, t, n) {
                n && (e[t] = n);
              })(this, C[o], (n & r[e]) === r[e]);
            }
        }
      }
      P.prototype.defined = !0;
      let A = {}.hasOwnProperty;
      function j(e) {
        let t,
          n = {},
          r = {};
        for (t in e.properties)
          if (A.call(e.properties, t)) {
            let i = e.properties[t],
              o = new P(t, e.transform(e.attributes || {}, t), i, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(t) &&
              (o.mustUseProperty = !0),
              (n[t] = o),
              (r[h(t)] = t),
              (r[h(o.attribute)] = t);
          }
        return new d(n, r, e.space);
      }
      let z = j({
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        R = j({
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function T(e, t) {
        return t in e ? e[t] : t;
      }
      function I(e, t) {
        return T(e, t.toLowerCase());
      }
      let D = j({
          space: "xmlns",
          attributes: { xmlnsxlink: "xmlns:xlink" },
          transform: I,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        N = j({
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: b,
            ariaAutoComplete: null,
            ariaBusy: b,
            ariaChecked: b,
            ariaColCount: w,
            ariaColIndex: w,
            ariaColSpan: w,
            ariaControls: k,
            ariaCurrent: null,
            ariaDescribedBy: k,
            ariaDetails: null,
            ariaDisabled: b,
            ariaDropEffect: k,
            ariaErrorMessage: null,
            ariaExpanded: b,
            ariaFlowTo: k,
            ariaGrabbed: b,
            ariaHasPopup: null,
            ariaHidden: b,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: k,
            ariaLevel: w,
            ariaLive: null,
            ariaModal: b,
            ariaMultiLine: b,
            ariaMultiSelectable: b,
            ariaOrientation: null,
            ariaOwns: k,
            ariaPlaceholder: null,
            ariaPosInSet: w,
            ariaPressed: b,
            ariaReadOnly: b,
            ariaRelevant: null,
            ariaRequired: b,
            ariaRoleDescription: k,
            ariaRowCount: w,
            ariaRowIndex: w,
            ariaRowSpan: w,
            ariaSelected: b,
            ariaSetSize: w,
            ariaSort: null,
            ariaValueMax: w,
            ariaValueMin: w,
            ariaValueNow: w,
            ariaValueText: null,
            role: null,
          },
        }),
        L = j({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: I,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: O,
            acceptCharset: k,
            accessKey: k,
            action: null,
            allow: null,
            allowFullScreen: v,
            allowPaymentRequest: v,
            allowUserMedia: v,
            alt: null,
            as: null,
            async: v,
            autoCapitalize: null,
            autoComplete: k,
            autoFocus: v,
            autoPlay: v,
            blocking: k,
            capture: null,
            charSet: null,
            checked: v,
            cite: null,
            className: k,
            cols: w,
            colSpan: null,
            content: null,
            contentEditable: b,
            controls: v,
            controlsList: k,
            coords: w | O,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: v,
            defer: v,
            dir: null,
            dirName: null,
            disabled: v,
            download: x,
            draggable: b,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: v,
            formTarget: null,
            headers: k,
            height: w,
            hidden: v,
            high: w,
            href: null,
            hrefLang: null,
            htmlFor: k,
            httpEquiv: k,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: v,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: v,
            itemId: null,
            itemProp: k,
            itemRef: k,
            itemScope: v,
            itemType: k,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: v,
            low: w,
            manifest: null,
            max: null,
            maxLength: w,
            media: null,
            method: null,
            min: null,
            minLength: w,
            multiple: v,
            muted: v,
            name: null,
            nonce: null,
            noModule: v,
            noValidate: v,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: v,
            optimum: w,
            pattern: null,
            ping: k,
            placeholder: null,
            playsInline: v,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: v,
            referrerPolicy: null,
            rel: k,
            required: v,
            reversed: v,
            rows: w,
            rowSpan: w,
            sandbox: k,
            scope: null,
            scoped: v,
            seamless: v,
            selected: v,
            shadowRootClonable: v,
            shadowRootDelegatesFocus: v,
            shadowRootMode: null,
            shape: null,
            size: w,
            sizes: null,
            slot: null,
            span: w,
            spellCheck: b,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: w,
            step: null,
            style: null,
            tabIndex: w,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: v,
            useMap: null,
            value: b,
            width: w,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: k,
            axis: null,
            background: null,
            bgColor: null,
            border: w,
            borderColor: null,
            bottomMargin: w,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: v,
            declare: v,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: w,
            leftMargin: w,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: w,
            marginWidth: w,
            noResize: v,
            noHref: v,
            noShade: v,
            noWrap: v,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: w,
            rules: null,
            scheme: null,
            scrolling: b,
            standby: null,
            summary: null,
            text: null,
            topMargin: w,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: w,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: v,
            disableRemotePlayback: v,
            prefix: null,
            property: null,
            results: w,
            security: null,
            unselectable: null,
          },
        }),
        M = j({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: T,
          properties: {
            about: E,
            accentHeight: w,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: w,
            amplitude: w,
            arabicForm: null,
            ascent: w,
            attributeName: null,
            attributeType: null,
            azimuth: w,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: w,
            by: null,
            calcMode: null,
            capHeight: w,
            className: k,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: w,
            diffuseConstant: w,
            direction: null,
            display: null,
            dur: null,
            divisor: w,
            dominantBaseline: null,
            download: v,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: w,
            enableBackground: null,
            end: null,
            event: null,
            exponent: w,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: w,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: O,
            g2: O,
            glyphName: O,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: w,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: w,
            horizOriginX: w,
            horizOriginY: w,
            id: null,
            ideographic: w,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: w,
            k: w,
            k1: w,
            k2: w,
            k3: w,
            k4: w,
            kernelMatrix: E,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: w,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: w,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: w,
            overlineThickness: w,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: w,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: k,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: w,
            pointsAtY: w,
            pointsAtZ: w,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: E,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: E,
            rev: E,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: E,
            requiredFeatures: E,
            requiredFonts: E,
            requiredFormats: E,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: w,
            specularExponent: w,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: w,
            strikethroughThickness: w,
            string: null,
            stroke: null,
            strokeDashArray: E,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: w,
            strokeOpacity: w,
            strokeWidth: null,
            style: null,
            surfaceScale: w,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: E,
            tabIndex: w,
            tableValues: null,
            target: null,
            targetX: w,
            targetY: w,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: E,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: w,
            underlineThickness: w,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: w,
            values: null,
            vAlphabetic: w,
            vMathematical: w,
            vectorEffect: null,
            vHanging: w,
            vIdeographic: w,
            version: null,
            vertAdvY: w,
            vertOriginX: w,
            vertOriginY: w,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: w,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        F = m([R, z, D, N, L], "html"),
        _ = m([R, z, D, N, M], "svg"),
        B = /^data[-\w.:]+$/i,
        H = /-[a-z]/g,
        U = /[A-Z]/g;
      function $(e) {
        return "-" + e.toLowerCase();
      }
      function W(e) {
        return e.charAt(1).toUpperCase();
      }
      let V = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var q = n(20444);
      let Y = q.default || q,
        K = X("end"),
        G = X("start");
      function X(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            "number" == typeof n.line &&
            n.line > 0 &&
            "number" == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                "number" == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        };
      }
      function Z(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? J(e.position)
            : "start" in e || "end" in e
            ? J(e)
            : "line" in e || "column" in e
            ? Q(e)
            : ""
          : "";
      }
      function Q(e) {
        return ee(e && e.line) + ":" + ee(e && e.column);
      }
      function J(e) {
        return Q(e && e.start) + "-" + Q(e && e.end);
      }
      function ee(e) {
        return e && "number" == typeof e ? e : 1;
      }
      class et extends Error {
        constructor(e, t, n) {
          super(), "string" == typeof t && ((n = t), (t = void 0));
          let r = "",
            i = {},
            o = !1;
          if (
            (t &&
              (i =
                ("line" in t && "column" in t) || ("start" in t && "end" in t)
                  ? { place: t }
                  : "type" in t
                  ? { ancestors: [t], place: t.position }
                  : { ...t }),
            "string" == typeof e
              ? (r = e)
              : !i.cause && e && ((o = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          let a = i.place && "start" in i.place ? i.place.start : i.place;
          (this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = a ? a.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = r),
            (this.line = a ? a.line : void 0),
            (this.name = Z(i.place) || "1:1"),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              o && i.cause && "string" == typeof i.cause.stack
                ? i.cause.stack
                : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      }
      (et.prototype.file = ""),
        (et.prototype.name = ""),
        (et.prototype.reason = ""),
        (et.prototype.message = ""),
        (et.prototype.stack = ""),
        (et.prototype.column = void 0),
        (et.prototype.line = void 0),
        (et.prototype.ancestors = void 0),
        (et.prototype.cause = void 0),
        (et.prototype.fatal = void 0),
        (et.prototype.place = void 0),
        (et.prototype.ruleId = void 0),
        (et.prototype.source = void 0);
      let en = {}.hasOwnProperty,
        er = new Map(),
        ei = /[A-Z]/g,
        eo = /-([a-z])/g,
        ea = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        el = new Set(["td", "th"]),
        es = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function ec(e, t, n) {
        return "element" === t.type
          ? (function (e, t, n) {
              let r = e.schema;
              "svg" === t.tagName.toLowerCase() &&
                "html" === r.space &&
                (e.schema = _),
                e.ancestors.push(t);
              let i = ed(e, t.tagName, !1),
                o = (function (e, t) {
                  let n,
                    r,
                    i = {};
                  for (r in t.properties)
                    if ("children" !== r && en.call(t.properties, r)) {
                      let o = (function (e, t, n) {
                        let r = (function (e, t) {
                          let n = h(t),
                            r = t,
                            i = g;
                          if (n in e.normal) return e.property[e.normal[n]];
                          if (
                            n.length > 4 &&
                            "data" === n.slice(0, 4) &&
                            B.test(t)
                          ) {
                            if ("-" === t.charAt(4)) {
                              let e = t.slice(5).replace(H, W);
                              r =
                                "data" + e.charAt(0).toUpperCase() + e.slice(1);
                            } else {
                              let e = t.slice(4);
                              if (!H.test(e)) {
                                let n = e.replace(U, $);
                                "-" !== n.charAt(0) && (n = "-" + n),
                                  (t = "data" + n);
                              }
                            }
                            i = P;
                          }
                          return new i(r, t);
                        })(e.schema, t);
                        if (
                          !(
                            null == n ||
                            ("number" == typeof n && Number.isNaN(n))
                          )
                        ) {
                          if (
                            (Array.isArray(n) &&
                              (n = r.commaSeparated
                                ? (function (e, t) {
                                    let n = {};
                                    return (
                                      "" === e[e.length - 1] ? [...e, ""] : e
                                    )
                                      .join(
                                        (n.padRight ? " " : "") +
                                          "," +
                                          (!1 === n.padLeft ? "" : " ")
                                      )
                                      .trim();
                                  })(n)
                                : n.join(" ").trim()),
                            "style" === r.property)
                          ) {
                            let t =
                              "object" == typeof n
                                ? n
                                : (function (e, t) {
                                    let n = {};
                                    try {
                                      Y(t, function (e, t) {
                                        let r = e;
                                        "--" !== r.slice(0, 2) &&
                                          ("-ms-" === r.slice(0, 4) &&
                                            (r = "ms-" + r.slice(4)),
                                          (r = r.replace(eo, eh))),
                                          (n[r] = t);
                                      });
                                    } catch (t) {
                                      if (!e.ignoreInvalidStyle) {
                                        let n = new et(
                                          "Cannot parse `style` attribute",
                                          {
                                            ancestors: e.ancestors,
                                            cause: t,
                                            ruleId: "style",
                                            source: "hast-util-to-jsx-runtime",
                                          }
                                        );
                                        throw (
                                          ((n.file = e.filePath || void 0),
                                          (n.url =
                                            es +
                                            "#cannot-parse-style-attribute"),
                                          n)
                                        );
                                      }
                                    }
                                    return n;
                                  })(e, String(n));
                            return (
                              "css" === e.stylePropertyNameCase &&
                                (t = (function (e) {
                                  let t,
                                    n = {};
                                  for (t in e)
                                    en.call(e, t) &&
                                      (n[
                                        (function (e) {
                                          let t = e.replace(ei, eg);
                                          return (
                                            "ms-" === t.slice(0, 3) &&
                                              (t = "-" + t),
                                            t
                                          );
                                        })(t)
                                      ] = e[t]);
                                  return n;
                                })(t)),
                              ["style", t]
                            );
                          }
                          return [
                            "react" === e.elementAttributeNameCase && r.space
                              ? V[r.property] || r.property
                              : r.attribute,
                            n,
                          ];
                        }
                      })(e, r, t.properties[r]);
                      if (o) {
                        let [r, a] = o;
                        e.tableCellAlignToStyle &&
                        "align" === r &&
                        "string" == typeof a &&
                        el.has(t.tagName)
                          ? (n = a)
                          : (i[r] = a);
                      }
                    }
                  return (
                    n &&
                      ((i.style || (i.style = {}))[
                        "css" === e.stylePropertyNameCase
                          ? "text-align"
                          : "textAlign"
                      ] = n),
                    i
                  );
                })(e, t),
                a = ep(e, t);
              return (
                ea.has(t.tagName) &&
                  (a = a.filter(function (e) {
                    return "string" != typeof e || !f(e);
                  })),
                eu(e, o, i, t),
                ef(o, a),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, i, o, n)
              );
            })(e, t, n)
          : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater) {
                let n = t.data.estree.body[0];
                return n.type, e.evaluater.evaluateExpression(n.expression);
              }
              em(e, t.position);
            })(e, t)
          : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
          ? (function (e, t, n) {
              let r = e.schema;
              "svg" === t.name && "html" === r.space && (e.schema = _),
                e.ancestors.push(t);
              let i = null === t.name ? e.Fragment : ed(e, t.name, !0),
                o = (function (e, t) {
                  let n = {};
                  for (let r of t.attributes)
                    if ("mdxJsxExpressionAttribute" === r.type)
                      if (r.data && r.data.estree && e.evaluater) {
                        let t = r.data.estree.body[0];
                        t.type;
                        let i = t.expression;
                        i.type;
                        let o = i.properties[0];
                        o.type,
                          Object.assign(
                            n,
                            e.evaluater.evaluateExpression(o.argument)
                          );
                      } else em(e, t.position);
                    else {
                      let i,
                        o = r.name;
                      if (r.value && "object" == typeof r.value)
                        if (
                          r.value.data &&
                          r.value.data.estree &&
                          e.evaluater
                        ) {
                          let t = r.value.data.estree.body[0];
                          t.type,
                            (i = e.evaluater.evaluateExpression(t.expression));
                        } else em(e, t.position);
                      else i = null === r.value || r.value;
                      n[o] = i;
                    }
                  return n;
                })(e, t),
                a = ep(e, t);
              return (
                eu(e, o, i, t),
                ef(o, a),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, i, o, n)
              );
            })(e, t, n)
          : "mdxjsEsm" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater)
                return e.evaluater.evaluateProgram(t.data.estree);
              em(e, t.position);
            })(e, t)
          : "root" === t.type
          ? (function (e, t, n) {
              let r = {};
              return ef(r, ep(e, t)), e.create(t, e.Fragment, r, n);
            })(e, t, n)
          : "text" === t.type
          ? t.value
          : void 0;
      }
      function eu(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function ef(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function ep(e, t) {
        let n = [],
          r = -1,
          i = e.passKeys ? new Map() : er;
        for (; ++r < t.children.length; ) {
          let o,
            a = t.children[r];
          if (e.passKeys) {
            let e =
              "element" === a.type
                ? a.tagName
                : "mdxJsxFlowElement" === a.type ||
                  "mdxJsxTextElement" === a.type
                ? a.name
                : void 0;
            if (e) {
              let t = i.get(e) || 0;
              (o = e + "-" + t), i.set(e, t + 1);
            }
          }
          let l = ec(e, a, o);
          void 0 !== l && n.push(l);
        }
        return n;
      }
      function ed(e, t, n) {
        let r;
        if (n)
          if (t.includes(".")) {
            let e,
              n = t.split("."),
              i = -1;
            for (; ++i < n.length; ) {
              let t = c(n[i])
                ? { type: "Identifier", name: n[i] }
                : { type: "Literal", value: n[i] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: t,
                    computed: !!(i && "Literal" === t.type),
                    optional: !1,
                  }
                : t;
            }
            r = e;
          } else
            r =
              c(t) && !/^[a-z]/.test(t)
                ? { type: "Identifier", name: t }
                : { type: "Literal", value: t };
        else r = { type: "Literal", value: t };
        if ("Literal" === r.type) {
          let t = r.value;
          return en.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        em(e);
      }
      function em(e, t) {
        let n = new et("Cannot handle MDX estrees without `createEvaluater`", {
          ancestors: e.ancestors,
          place: t,
          ruleId: "mdx-estree",
          source: "hast-util-to-jsx-runtime",
        });
        throw (
          ((n.file = e.filePath || void 0),
          (n.url = es + "#cannot-handle-mdx-estrees-without-createevaluater"),
          n)
        );
      }
      function eh(e, t) {
        return t.toUpperCase();
      }
      function eg(e) {
        return "-" + e.toLowerCase();
      }
      let ey = {
          action: ["form"],
          cite: ["blockquote", "del", "ins", "q"],
          data: ["object"],
          formAction: ["button", "input"],
          href: ["a", "area", "base", "link"],
          icon: ["menuitem"],
          itemId: null,
          manifest: ["html"],
          ping: ["a", "area"],
          poster: ["video"],
          src: [
            "audio",
            "embed",
            "iframe",
            "img",
            "input",
            "script",
            "source",
            "track",
            "video",
          ],
        },
        ev = {};
      function eb(e, t, n) {
        var r;
        if ((r = e) && "object" == typeof r) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return ex(e.children, t, n);
        }
        return Array.isArray(e) ? ex(e, t, n) : "";
      }
      function ex(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) r[i] = eb(e[i], t, n);
        return r.join("");
      }
      function ew(e, t, n, r) {
        let i,
          o = e.length,
          a = 0;
        if (
          ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)).unshift(t, n), e.splice(...i);
        else
          for (n && e.splice(t, n); a < r.length; )
            (i = r.slice(a, a + 1e4)).unshift(t, 0),
              e.splice(...i),
              (a += 1e4),
              (t += 1e4);
      }
      function ek(e, t) {
        return e.length > 0 ? (ew(e, e.length, 0, t), e) : t;
      }
      class eO {
        constructor(e) {
          (this.left = e ? [...e] : []), (this.right = []);
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`"
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return this.setCursor(0), this.right.pop();
        }
        slice(e, t) {
          let n = null == t ? 1 / 0 : t;
          return n < this.left.length
            ? this.left.slice(e, n)
            : e > this.left.length
            ? this.right
                .slice(
                  this.right.length - n + this.left.length,
                  this.right.length - e + this.left.length
                )
                .reverse()
            : this.left
                .slice(e)
                .concat(
                  this.right
                    .slice(this.right.length - n + this.left.length)
                    .reverse()
                );
        }
        splice(e, t, n) {
          this.setCursor(Math.trunc(e));
          let r = this.right.splice(this.right.length - (t || 0), 1 / 0);
          return n && eE(this.left, n), r.reverse();
        }
        pop() {
          return this.setCursor(1 / 0), this.left.pop();
        }
        push(e) {
          this.setCursor(1 / 0), this.left.push(e);
        }
        pushMany(e) {
          this.setCursor(1 / 0), eE(this.left, e);
        }
        unshift(e) {
          this.setCursor(0), this.right.push(e);
        }
        unshiftMany(e) {
          this.setCursor(0), eE(this.right, e.reverse());
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          )
            if (e < this.left.length) {
              let t = this.left.splice(e, 1 / 0);
              eE(this.right, t.reverse());
            } else {
              let t = this.right.splice(
                this.left.length + this.right.length - e,
                1 / 0
              );
              eE(this.left, t.reverse());
            }
        }
      }
      function eE(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
      }
      function eS(e) {
        let t,
          n,
          r,
          i,
          o,
          a,
          l,
          s = {},
          c = -1,
          u = new eO(e);
        for (; ++c < u.length; ) {
          for (; c in s; ) c = s[c];
          if (
            ((t = u.get(c)),
            c &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === u.get(c - 1)[1].type &&
              ((r = 0) < (a = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === a[r][1].type &&
                (r += 2),
              r < a.length && "content" === a[r][1].type))
          )
            for (; ++r < a.length && "content" !== a[r][1].type; )
              "chunkText" === a[r][1].type &&
                ((a[r][1]._isInFirstContentOfListItem = !0), r++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(
                s,
                (function (e, t) {
                  let n,
                    r,
                    i = e.get(t)[1],
                    o = e.get(t)[2],
                    a = t - 1,
                    l = [],
                    s = i._tokenizer || o.parser[i.contentType](i.start),
                    c = s.events,
                    u = [],
                    f = {},
                    p = -1,
                    d = i,
                    m = 0,
                    h = 0,
                    g = [0];
                  for (; d; ) {
                    for (; e.get(++a)[1] !== d; );
                    l.push(a),
                      !d._tokenizer &&
                        ((n = o.sliceStream(d)),
                        d.next || n.push(null),
                        r && s.defineSkip(d.start),
                        d._isInFirstContentOfListItem &&
                          (s._gfmTasklistFirstContentOfListItem = !0),
                        s.write(n),
                        d._isInFirstContentOfListItem &&
                          (s._gfmTasklistFirstContentOfListItem = void 0)),
                      (r = d),
                      (d = d.next);
                  }
                  for (d = i; ++p < c.length; )
                    "exit" === c[p][0] &&
                      "enter" === c[p - 1][0] &&
                      c[p][1].type === c[p - 1][1].type &&
                      c[p][1].start.line !== c[p][1].end.line &&
                      ((h = p + 1),
                      g.push(h),
                      (d._tokenizer = void 0),
                      (d.previous = void 0),
                      (d = d.next));
                  for (
                    s.events = [],
                      d
                        ? ((d._tokenizer = void 0), (d.previous = void 0))
                        : g.pop(),
                      p = g.length;
                    p--;

                  ) {
                    let t = c.slice(g[p], g[p + 1]),
                      n = l.pop();
                    u.push([n, n + t.length - 1]), e.splice(n, 2, t);
                  }
                  for (u.reverse(), p = -1; ++p < u.length; )
                    (f[m + u[p][0]] = m + u[p][1]),
                      (m += u[p][1] - u[p][0] - 1);
                  return f;
                })(u, c)
              ),
              (c = s[c]),
              (l = !0));
          else if (t[1]._container) {
            for (r = c, n = void 0; r--; )
              if (
                "lineEnding" === (i = u.get(r))[1].type ||
                "lineEndingBlank" === i[1].type
              )
                "enter" === i[0] &&
                  (n && (u.get(n)[1].type = "lineEndingBlank"),
                  (i[1].type = "lineEnding"),
                  (n = r));
              else if ("linePrefix" === i[1].type);
              else break;
            n &&
              ((t[1].end = { ...u.get(n)[1].start }),
              (o = u.slice(n, c)).unshift(t),
              u.splice(n, c - n + 1, o));
          }
        }
        return ew(e, 0, 1 / 0, u.slice(0)), !l;
      }
      let eC = {}.hasOwnProperty,
        eP = e_(/[A-Za-z]/),
        eA = e_(/[\dA-Za-z]/),
        ej = e_(/[#-'*+\--9=?A-Z^-~]/);
      function ez(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let eR = e_(/\d/),
        eT = e_(/[\dA-Fa-f]/),
        eI = e_(/[!-/:-@[-`{-~]/);
      function eD(e) {
        return null !== e && e < -2;
      }
      function eN(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function eL(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let eM = e_(/\p{P}|\p{S}/u),
        eF = e_(/\s/);
      function e_(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
      function eB(e, t, n, r) {
        let i = r ? r - 1 : 1 / 0,
          o = 0;
        return function (r) {
          return eL(r)
            ? (e.enter(n),
              (function r(a) {
                return eL(a) && o++ < i ? (e.consume(a), r) : (e.exit(n), t(a));
              })(r))
            : t(r);
        };
      }
      let eH = {
          tokenize: function (e) {
            let t,
              n = e.attempt(
                this.parser.constructs.contentInitial,
                function (t) {
                  return null === t
                    ? void e.consume(t)
                    : (e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      eB(e, n, "linePrefix"));
                },
                function (n) {
                  return (
                    e.enter("paragraph"),
                    (function n(r) {
                      let i = e.enter("chunkText", {
                        contentType: "text",
                        previous: t,
                      });
                      return (
                        t && (t.next = i),
                        (t = i),
                        (function t(r) {
                          if (null === r) {
                            e.exit("chunkText"),
                              e.exit("paragraph"),
                              e.consume(r);
                            return;
                          }
                          return eD(r)
                            ? (e.consume(r), e.exit("chunkText"), n)
                            : (e.consume(r), t);
                        })(r)
                      );
                    })(n)
                  );
                }
              );
            return n;
          },
        },
        eU = {
          tokenize: function (e) {
            let t,
              n,
              r,
              i = this,
              o = [],
              a = 0;
            return l;
            function l(t) {
              if (a < o.length) {
                let n = o[a];
                return (
                  (i.containerState = n[1]),
                  e.attempt(n[0].continuation, s, c)(t)
                );
              }
              return c(t);
            }
            function s(e) {
              if ((a++, i.containerState._closeFlow)) {
                let n;
                (i.containerState._closeFlow = void 0), t && y();
                let r = i.events.length,
                  o = r;
                for (; o--; )
                  if (
                    "exit" === i.events[o][0] &&
                    "chunkFlow" === i.events[o][1].type
                  ) {
                    n = i.events[o][1].end;
                    break;
                  }
                g(a);
                let l = r;
                for (; l < i.events.length; )
                  (i.events[l][1].end = { ...n }), l++;
                return (
                  ew(i.events, o + 1, 0, i.events.slice(r)),
                  (i.events.length = l),
                  c(e)
                );
              }
              return l(e);
            }
            function c(n) {
              if (a === o.length) {
                if (!t) return p(n);
                if (t.currentConstruct && t.currentConstruct.concrete)
                  return m(n);
                i.interrupt = !!(
                  t.currentConstruct && !t._gfmTableDynamicInterruptHack
                );
              }
              return (i.containerState = {}), e.check(e$, u, f)(n);
            }
            function u(e) {
              return t && y(), g(a), p(e);
            }
            function f(e) {
              return (
                (i.parser.lazy[i.now().line] = a !== o.length),
                (r = i.now().offset),
                m(e)
              );
            }
            function p(t) {
              return (i.containerState = {}), e.attempt(e$, d, m)(t);
            }
            function d(e) {
              return a++, o.push([i.currentConstruct, i.containerState]), p(e);
            }
            function m(r) {
              if (null === r) {
                t && y(), g(0), e.consume(r);
                return;
              }
              return (
                (t = t || i.parser.flow(i.now())),
                e.enter("chunkFlow", {
                  _tokenizer: t,
                  contentType: "flow",
                  previous: n,
                }),
                (function t(n) {
                  if (null === n) {
                    h(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                    return;
                  }
                  return eD(n)
                    ? (e.consume(n),
                      h(e.exit("chunkFlow")),
                      (a = 0),
                      (i.interrupt = void 0),
                      l)
                    : (e.consume(n), t);
                })(r)
              );
            }
            function h(e, o) {
              let l = i.sliceStream(e);
              if (
                (o && l.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(l),
                i.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  o = t.events.length;
                for (; o--; )
                  if (
                    t.events[o][1].start.offset < r &&
                    (!t.events[o][1].end || t.events[o][1].end.offset > r)
                  )
                    return;
                let l = i.events.length,
                  s = l;
                for (; s--; )
                  if (
                    "exit" === i.events[s][0] &&
                    "chunkFlow" === i.events[s][1].type
                  ) {
                    if (e) {
                      n = i.events[s][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (g(a), o = l; o < i.events.length; )
                  (i.events[o][1].end = { ...n }), o++;
                ew(i.events, s + 1, 0, i.events.slice(l)),
                  (i.events.length = o);
              }
            }
            function g(t) {
              let n = o.length;
              for (; n-- > t; ) {
                let t = o[n];
                (i.containerState = t[1]), t[0].exit.call(i, e);
              }
              o.length = t;
            }
            function y() {
              t.write([null]),
                (n = void 0),
                (t = void 0),
                (i.containerState._closeFlow = void 0);
            }
          },
        },
        e$ = {
          tokenize: function (e, t, n) {
            return eB(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        },
        eW = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (t) {
              return eL(t) ? eB(e, r, "linePrefix")(t) : r(t);
            };
            function r(e) {
              return null === e || eD(e) ? t(e) : n(e);
            }
          },
        },
        eV = {
          resolve: function (e) {
            return eS(e), e;
          },
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                r(t)
              );
            };
            function r(t) {
              return null === t
                ? i(t)
                : eD(t)
                ? e.check(eq, o, i)(t)
                : (e.consume(t), r);
            }
            function i(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function o(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
        },
        eq = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                eB(e, i, "linePrefix")
              );
            };
            function i(i) {
              if (null === i || eD(i)) return n(i);
              let o = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
        },
        eY = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                eW,
                function (r) {
                  return null === r
                    ? void e.consume(r)
                    : (e.enter("lineEndingBlank"),
                      e.consume(r),
                      e.exit("lineEndingBlank"),
                      (t.currentConstruct = void 0),
                      n);
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  r,
                  eB(
                    e,
                    e.attempt(this.parser.constructs.flow, r, e.attempt(eV, r)),
                    "linePrefix"
                  )
                )
              );
            return n;
            function r(r) {
              return null === r
                ? void e.consume(r)
                : (e.enter("lineEnding"),
                  e.consume(r),
                  e.exit("lineEnding"),
                  (t.currentConstruct = void 0),
                  n);
            }
          },
        },
        eK = { resolveAll: eQ() },
        eG = eZ("string"),
        eX = eZ("text");
      function eZ(e) {
        return {
          resolveAll: eQ("text" === e ? eJ : void 0),
          tokenize: function (t) {
            let n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, o, a);
            return o;
            function o(e) {
              return s(e) ? i(e) : a(e);
            }
            function a(e) {
              return null === e
                ? void t.consume(e)
                : (t.enter("data"), t.consume(e), l);
            }
            function l(e) {
              return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), l);
            }
            function s(e) {
              if (null === e) return !0;
              let t = r[e],
                i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  let e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
        };
      }
      function eQ(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && "data" === t[i][1].type && ((r = i), i++)
              : (t[i] && "data" === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function eJ(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let r,
              i = e[n - 1][1],
              o = t.sliceStream(i),
              a = o.length,
              l = -1,
              s = 0;
            for (; a--; ) {
              let e = o[a];
              if ("string" == typeof e) {
                for (l = e.length; 32 === e.charCodeAt(l - 1); ) s++, l--;
                if (l) break;
                l = -1;
              } else if (-2 === e) (r = !0), s++;
              else if (-1 === e);
              else {
                a++;
                break;
              }
            }
            if (s) {
              let o = {
                type:
                  n === e.length || r || s < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  _bufferIndex: a ? l : i.start._bufferIndex + l,
                  _index: i.start._index + a,
                  line: i.end.line,
                  column: i.end.column - s,
                  offset: i.end.offset - s,
                },
                end: { ...i.end },
              };
              (i.end = { ...o.start }),
                i.start.offset === i.end.offset
                  ? Object.assign(i, o)
                  : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      let e0 = {
          name: "thematicBreak",
          tokenize: function (e, t, n) {
            let r,
              i = 0;
            return function (o) {
              var a;
              return (
                e.enter("thematicBreak"),
                (r = a = o),
                (function o(a) {
                  return a === r
                    ? (e.enter("thematicBreakSequence"),
                      (function t(n) {
                        return n === r
                          ? (e.consume(n), i++, t)
                          : (e.exit("thematicBreakSequence"),
                            eL(n) ? eB(e, o, "whitespace")(n) : o(n));
                      })(a))
                    : i >= 3 && (null === a || eD(a))
                    ? (e.exit("thematicBreak"), t(a))
                    : n(a);
                })(a)
              );
            };
          },
        },
        e1 = {
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  eW,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      eB(e, t, "listItemIndent", r.containerState.size + 1)(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !eL(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        i(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(e3, t, i)(n));
                  }
                )
              );
              function i(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  eB(
                    e,
                    e.attempt(e1, t, n),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
          name: "list",
          tokenize: function (e, t, n) {
            let r = this,
              i = r.events[r.events.length - 1],
              o =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              a = 0;
            return function (t) {
              let i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : eR(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i),
                    e.enter(i, { _container: !0 })),
                  "listUnordered" === i)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t ? e.check(e0, n, l)(t) : l(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function t(i) {
                      return eR(i) && ++a < 10
                        ? (e.consume(i), t)
                        : (!r.interrupt || a < 2) &&
                          (r.containerState.marker
                            ? i === r.containerState.marker
                            : 41 === i || 46 === i)
                        ? (e.exit("listItemValue"), l(i))
                        : n(i);
                    })(t)
                  );
              }
              return n(t);
            };
            function l(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(eW, r.interrupt ? n : s, e.attempt(e2, u, c))
              );
            }
            function s(e) {
              return (r.containerState.initialBlankLine = !0), o++, u(e);
            }
            function c(t) {
              return eL(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  u)
                : n(t);
            }
            function u(n) {
              return (
                (r.containerState.size =
                  o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
        },
        e2 = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return eB(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return !eL(e) && i && "listItemPrefixWhitespace" === i[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
        },
        e3 = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return eB(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return i &&
                  "listItemIndent" === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
        },
        e6 = {
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return eL(t)
                  ? eB(
                      e,
                      i,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(t)
                  : i(t);
              };
              function i(r) {
                return e.attempt(e6, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
          name: "blockQuote",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              if (62 === t) {
                let n = r.containerState;
                return (
                  n.open ||
                    (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(t),
                  e.exit("blockQuoteMarker"),
                  i
                );
              }
              return n(t);
            };
            function i(n) {
              return eL(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
            }
          },
        };
      function e5(e, t, n, r, i, o, a, l, s) {
        let c = s || 1 / 0,
          u = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r), e.enter(i), e.enter(o), e.consume(t), e.exit(o), f)
            : null === t || 32 === t || 41 === t || ez(t)
            ? n(t)
            : (e.enter(r),
              e.enter(a),
              e.enter(l),
              e.enter("chunkString", { contentType: "string" }),
              m(t));
        };
        function f(n) {
          return 62 === n
            ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t)
            : (e.enter(l),
              e.enter("chunkString", { contentType: "string" }),
              p(n));
        }
        function p(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(l), f(t))
            : null === t || 60 === t || eD(t)
            ? n(t)
            : (e.consume(t), 92 === t ? d : p);
        }
        function d(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
        }
        function m(i) {
          return !u && (null === i || 41 === i || eN(i))
            ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(i))
            : u < c && 40 === i
            ? (e.consume(i), u++, m)
            : 41 === i
            ? (e.consume(i), u--, m)
            : null === i || 32 === i || 40 === i || ez(i)
            ? n(i)
            : (e.consume(i), 92 === i ? h : m);
        }
        function h(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), m) : m(t);
        }
      }
      function e4(e, t, n, r, i, o) {
        let a,
          l = this,
          s = 0;
        return function (t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(o), c;
        };
        function c(f) {
          return s > 999 ||
            null === f ||
            91 === f ||
            (93 === f && !a) ||
            (94 === f && !s && "_hiddenFootnoteSupport" in l.parser.constructs)
            ? n(f)
            : 93 === f
            ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t)
            : eD(f)
            ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c)
            : (e.enter("chunkString", { contentType: "string" }), u(f));
        }
        function u(t) {
          return null === t || 91 === t || 93 === t || eD(t) || s++ > 999
            ? (e.exit("chunkString"), c(t))
            : (e.consume(t), a || (a = !eL(t)), 92 === t ? f : u);
        }
        function f(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, u)
            : u(t);
        }
      }
      function e7(e, t, n, r, i, o) {
        let a;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (a = 40 === t ? 41 : t),
              l)
            : n(t);
        };
        function l(n) {
          return n === a
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(o), s(n));
        }
        function s(t) {
          return t === a
            ? (e.exit(o), l(a))
            : null === t
            ? n(t)
            : eD(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              eB(e, s, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), c(t));
        }
        function c(t) {
          return t === a || null === t || eD(t)
            ? (e.exit("chunkString"), s(t))
            : (e.consume(t), 92 === t ? u : c);
        }
        function u(t) {
          return t === a || 92 === t ? (e.consume(t), c) : c(t);
        }
      }
      function e9(e, t) {
        let n;
        return function r(i) {
          return eD(i)
            ? (e.enter("lineEnding"),
              e.consume(i),
              e.exit("lineEnding"),
              (n = !0),
              r)
            : eL(i)
            ? eB(e, r, n ? "linePrefix" : "lineSuffix")(i)
            : t(i);
        };
      }
      function e8(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      let te = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (t) {
              return eN(t) ? e9(e, r)(t) : n(t);
            };
            function r(t) {
              return e7(
                e,
                i,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString"
              )(t);
            }
            function i(t) {
              return eL(t) ? eB(e, o, "whitespace")(t) : o(t);
            }
            function o(e) {
              return null === e || eD(e) ? t(e) : n(e);
            }
          },
        },
        tt = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return e.enter("codeIndented"), eB(e, i, "linePrefix", 5)(t);
            };
            function i(t) {
              let i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? (function t(n) {
                    return null === n
                      ? o(n)
                      : eD(n)
                      ? e.attempt(tn, t, o)(n)
                      : (e.enter("codeFlowValue"),
                        (function n(r) {
                          return null === r || eD(r)
                            ? (e.exit("codeFlowValue"), t(r))
                            : (e.consume(r), n);
                        })(n));
                  })(t)
                : n(t);
            }
            function o(n) {
              return e.exit("codeIndented"), t(n);
            }
          },
        },
        tn = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return i;
            function i(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : eD(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : eB(e, o, "linePrefix", 5)(t);
            }
            function o(e) {
              let o = r.events[r.events.length - 1];
              return o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(e)
                : eD(e)
                ? i(e)
                : n(e);
            }
          },
        },
        tr = {
          name: "setextUnderline",
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o = e.length;
            for (; o--; )
              if ("enter" === e[o][0]) {
                if ("content" === e[o][1].type) {
                  n = o;
                  break;
                }
                "paragraph" === e[o][1].type && (r = o);
              } else
                "content" === e[o][1].type && e.splice(o, 1),
                  i || "definition" !== e[o][1].type || (i = o);
            let a = {
              type: "setextHeading",
              start: { ...e[r][1].start },
              end: { ...e[e.length - 1][1].end },
            };
            return (
              (e[r][1].type = "setextHeadingText"),
              i
                ? (e.splice(r, 0, ["enter", a, t]),
                  e.splice(i + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = { ...e[i][1].end }))
                : (e[n][1] = a),
              e.push(["exit", a, t]),
              e
            );
          },
          tokenize: function (e, t, n) {
            let r,
              i = this;
            return function (t) {
              var a;
              let l,
                s = i.events.length;
              for (; s--; )
                if (
                  "lineEnding" !== i.events[s][1].type &&
                  "linePrefix" !== i.events[s][1].type &&
                  "content" !== i.events[s][1].type
                ) {
                  l = "paragraph" === i.events[s][1].type;
                  break;
                }
              return !i.parser.lazy[i.now().line] && (i.interrupt || l)
                ? (e.enter("setextHeadingLine"),
                  (r = t),
                  (a = t),
                  e.enter("setextHeadingLineSequence"),
                  (function t(n) {
                    return n === r
                      ? (e.consume(n), t)
                      : (e.exit("setextHeadingLineSequence"),
                        eL(n) ? eB(e, o, "lineSuffix")(n) : o(n));
                  })(a))
                : n(t);
            };
            function o(r) {
              return null === r || eD(r)
                ? (e.exit("setextHeadingLine"), t(r))
                : n(r);
            }
          },
        },
        ti = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        to = ["pre", "script", "style", "textarea"],
        ta = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(eW, t, n)
              );
            };
          },
        },
        tl = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return eD(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : n(t);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
        },
        ts = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  i);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
        },
        tc = {
          concrete: !0,
          name: "codeFenced",
          tokenize: function (e, t, n) {
            let r,
              i = this,
              o = {
                partial: !0,
                tokenize: function (e, t, n) {
                  let o = 0;
                  return function (t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      a
                    );
                  };
                  function a(t) {
                    return (
                      e.enter("codeFencedFence"),
                      eL(t)
                        ? eB(
                            e,
                            s,
                            "linePrefix",
                            i.parser.constructs.disable.null.includes(
                              "codeIndented"
                            )
                              ? void 0
                              : 4
                          )(t)
                        : s(t)
                    );
                  }
                  function s(t) {
                    return t === r
                      ? (e.enter("codeFencedFenceSequence"),
                        (function t(i) {
                          return i === r
                            ? (o++, e.consume(i), t)
                            : o >= l
                            ? (e.exit("codeFencedFenceSequence"),
                              eL(i) ? eB(e, c, "whitespace")(i) : c(i))
                            : n(i);
                        })(t))
                      : n(t);
                  }
                  function c(r) {
                    return null === r || eD(r)
                      ? (e.exit("codeFencedFence"), t(r))
                      : n(r);
                  }
                },
              },
              a = 0,
              l = 0;
            return function (t) {
              var o = t;
              let c = i.events[i.events.length - 1];
              return (
                (a =
                  c && "linePrefix" === c[1].type
                    ? c[2].sliceSerialize(c[1], !0).length
                    : 0),
                (r = o),
                e.enter("codeFenced"),
                e.enter("codeFencedFence"),
                e.enter("codeFencedFenceSequence"),
                (function t(i) {
                  return i === r
                    ? (l++, e.consume(i), t)
                    : l < 3
                    ? n(i)
                    : (e.exit("codeFencedFenceSequence"),
                      eL(i) ? eB(e, s, "whitespace")(i) : s(i));
                })(o)
              );
            };
            function s(o) {
              return null === o || eD(o)
                ? (e.exit("codeFencedFence"),
                  i.interrupt ? t(o) : e.check(ts, u, m)(o))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || eD(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        s(i))
                      : eL(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        eB(e, c, "whitespace")(i))
                      : 96 === i && i === r
                      ? n(i)
                      : (e.consume(i), t);
                  })(o));
            }
            function c(t) {
              return null === t || eD(t)
                ? s(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || eD(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        s(i))
                      : 96 === i && i === r
                      ? n(i)
                      : (e.consume(i), t);
                  })(t));
            }
            function u(t) {
              return e.attempt(o, m, f)(t);
            }
            function f(t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p
              );
            }
            function p(t) {
              return a > 0 && eL(t) ? eB(e, d, "linePrefix", a + 1)(t) : d(t);
            }
            function d(t) {
              return null === t || eD(t)
                ? e.check(ts, u, m)(t)
                : (e.enter("codeFlowValue"),
                  (function t(n) {
                    return null === n || eD(n)
                      ? (e.exit("codeFlowValue"), d(n))
                      : (e.consume(n), t);
                  })(t));
            }
            function m(n) {
              return e.exit("codeFenced"), t(n);
            }
          },
        },
        tu = document.createElement("i");
      function tf(e) {
        let t = "&" + e + ";";
        tu.innerHTML = t;
        let n = tu.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        );
      }
      let tp = {
          name: "characterReference",
          tokenize: function (e, t, n) {
            let r,
              i,
              o = this,
              a = 0;
            return function (t) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                l
              );
            };
            function l(t) {
              return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  s)
                : (e.enter("characterReferenceValue"),
                  (r = 31),
                  (i = eA),
                  c(t));
            }
            function s(t) {
              return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (r = 6),
                  (i = eT),
                  c)
                : (e.enter("characterReferenceValue"), (r = 7), (i = eR), c(t));
            }
            function c(l) {
              if (59 === l && a) {
                let r = e.exit("characterReferenceValue");
                return i !== eA || tf(o.sliceSerialize(r))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(l),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t)
                  : n(l);
              }
              return i(l) && a++ < r ? (e.consume(l), c) : n(l);
            }
          },
        },
        td = {
          name: "characterEscape",
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                r
              );
            };
            function r(r) {
              return eI(r)
                ? (e.enter("characterEscapeValue"),
                  e.consume(r),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(r);
            }
          },
        },
        tm = {
          name: "lineEnding",
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                eB(e, t, "linePrefix")
              );
            };
          },
        };
      function th(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) {
          let o = e[i].resolveAll;
          o && !r.includes(o) && ((t = o(t, n)), r.push(o));
        }
        return t;
      }
      let tg = {
          name: "labelEnd",
          resolveAll: function (e) {
            let t = -1,
              n = [];
            for (; ++t < e.length; ) {
              let r = e[t][1];
              if (
                (n.push(e[t]),
                "labelImage" === r.type ||
                  "labelLink" === r.type ||
                  "labelEnd" === r.type)
              ) {
                let e = "labelImage" === r.type ? 4 : 2;
                (r.type = "data"), (t += e);
              }
            }
            return e.length !== n.length && ew(e, 0, e.length, n), e;
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o,
              a = e.length,
              l = 0;
            for (; a--; )
              if (((n = e[a][1]), r)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[a][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (i) {
                if (
                  "enter" === e[a][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((r = a), "labelLink" !== n.type)
                ) {
                  l = 2;
                  break;
                }
              } else "labelEnd" === n.type && (i = a);
            let s = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: { ...e[r][1].start },
                end: { ...e[e.length - 1][1].end },
              },
              c = {
                type: "label",
                start: { ...e[r][1].start },
                end: { ...e[i][1].end },
              },
              u = {
                type: "labelText",
                start: { ...e[r + l + 2][1].end },
                end: { ...e[i - 2][1].start },
              };
            return (
              (o = ek(
                (o = [
                  ["enter", s, t],
                  ["enter", c, t],
                ]),
                e.slice(r + 1, r + l + 3)
              )),
              (o = ek(o, [["enter", u, t]])),
              (o = ek(
                o,
                th(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + l + 4, i - 3),
                  t
                )
              )),
              (o = ek(o, [["exit", u, t], e[i - 2], e[i - 1], ["exit", c, t]])),
              (o = ek(o, e.slice(i + 1))),
              (o = ek(o, [["exit", s, t]])),
              ew(e, r, e.length, o),
              e
            );
          },
          tokenize: function (e, t, n) {
            let r,
              i,
              o = this,
              a = o.events.length;
            for (; a--; )
              if (
                ("labelImage" === o.events[a][1].type ||
                  "labelLink" === o.events[a][1].type) &&
                !o.events[a][1]._balanced
              ) {
                r = o.events[a][1];
                break;
              }
            return function (t) {
              return r
                ? r._inactive
                  ? u(t)
                  : ((i = o.parser.defined.includes(
                      e8(o.sliceSerialize({ start: r.end, end: o.now() }))
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    l)
                : n(t);
            };
            function l(t) {
              return 40 === t
                ? e.attempt(ty, c, i ? c : u)(t)
                : 91 === t
                ? e.attempt(tv, c, i ? s : u)(t)
                : i
                ? c(t)
                : u(t);
            }
            function s(t) {
              return e.attempt(tb, c, u)(t);
            }
            function c(e) {
              return t(e);
            }
            function u(e) {
              return (r._balanced = !0), n(e);
            }
          },
        },
        ty = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                r
              );
            };
            function r(t) {
              return eN(t) ? e9(e, i)(t) : i(t);
            }
            function i(t) {
              return 41 === t
                ? c(t)
                : e5(
                    e,
                    o,
                    a,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(t);
            }
            function o(t) {
              return eN(t) ? e9(e, l)(t) : c(t);
            }
            function a(e) {
              return n(e);
            }
            function l(t) {
              return 34 === t || 39 === t || 40 === t
                ? e7(
                    e,
                    s,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(t)
                : c(t);
            }
            function s(t) {
              return eN(t) ? e9(e, c)(t) : c(t);
            }
            function c(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(r);
            }
          },
        },
        tv = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return e4.call(
                r,
                e,
                i,
                o,
                "reference",
                "referenceMarker",
                "referenceString"
              )(t);
            };
            function i(e) {
              return r.parser.defined.includes(
                e8(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? t(e)
                : n(e);
            }
            function o(e) {
              return n(e);
            }
          },
        },
        tb = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(r);
            }
          },
        },
        tx = {
          name: "labelStartImage",
          resolveAll: tg.resolveAll,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                i
              );
            };
            function i(t) {
              return 91 === t
                ? (e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  o)
                : n(t);
            }
            function o(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
        };
      function tw(e) {
        return null === e || eN(e) || eF(e) ? 1 : eM(e) ? 2 : void 0;
      }
      let tk = {
        name: "attention",
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            o,
            a,
            l,
            s,
            c,
            u = -1;
          for (; ++u < e.length; )
            if (
              "enter" === e[u][0] &&
              "attentionSequence" === e[u][1].type &&
              e[u][1]._close
            ) {
              for (n = u; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[u][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[u][1]._open) &&
                    (e[u][1].end.offset - e[u][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[u][1].end.offset -
                        e[u][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  l =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[u][1].end.offset - e[u][1].start.offset > 1
                      ? 2
                      : 1;
                  let f = { ...e[n][1].end },
                    p = { ...e[u][1].start };
                  tO(f, -l),
                    tO(p, l),
                    (o = {
                      type: l > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: { ...e[n][1].end },
                    }),
                    (a = {
                      type: l > 1 ? "strongSequence" : "emphasisSequence",
                      start: { ...e[u][1].start },
                      end: p,
                    }),
                    (i = {
                      type: l > 1 ? "strongText" : "emphasisText",
                      start: { ...e[n][1].end },
                      end: { ...e[u][1].start },
                    }),
                    (r = {
                      type: l > 1 ? "strong" : "emphasis",
                      start: { ...o.start },
                      end: { ...a.end },
                    }),
                    (e[n][1].end = { ...o.start }),
                    (e[u][1].start = { ...a.end }),
                    (s = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (s = ek(s, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (s = ek(s, [
                      ["enter", r, t],
                      ["enter", o, t],
                      ["exit", o, t],
                      ["enter", i, t],
                    ])),
                    (s = ek(
                      s,
                      th(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, u),
                        t
                      )
                    )),
                    (s = ek(s, [
                      ["exit", i, t],
                      ["enter", a, t],
                      ["exit", a, t],
                      ["exit", r, t],
                    ])),
                    e[u][1].end.offset - e[u][1].start.offset
                      ? ((c = 2),
                        (s = ek(s, [
                          ["enter", e[u][1], t],
                          ["exit", e[u][1], t],
                        ])))
                      : (c = 0),
                    ew(e, n - 1, u - n + 3, s),
                    (u = n + s.length - c - 2);
                  break;
                }
            }
          for (u = -1; ++u < e.length; )
            "attentionSequence" === e[u][1].type && (e[u][1].type = "data");
          return e;
        },
        tokenize: function (e, t) {
          let n,
            r = this.parser.constructs.attentionMarkers.null,
            i = this.previous,
            o = tw(i);
          return function (a) {
            return (
              (n = a),
              e.enter("attentionSequence"),
              (function a(l) {
                if (l === n) return e.consume(l), a;
                let s = e.exit("attentionSequence"),
                  c = tw(l),
                  u = !c || (2 === c && o) || r.includes(l),
                  f = !o || (2 === o && c) || r.includes(i);
                return (
                  (s._open = !!(42 === n ? u : u && (o || !f))),
                  (s._close = !!(42 === n ? f : f && (c || !u))),
                  t(l)
                );
              })(a)
            );
          };
        },
      };
      function tO(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      let tE = {
          name: "labelStartLink",
          resolveAll: tg.resolveAll,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                i
              );
            };
            function i(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
        },
        tS = {
          42: e1,
          43: e1,
          45: e1,
          48: e1,
          49: e1,
          50: e1,
          51: e1,
          52: e1,
          53: e1,
          54: e1,
          55: e1,
          56: e1,
          57: e1,
          62: e6,
        },
        tC = {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let r,
                i = this;
              return function (t) {
                var r;
                return (
                  e.enter("definition"),
                  (r = t),
                  e4.call(
                    i,
                    e,
                    o,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(r)
                );
              };
              function o(t) {
                return ((r = e8(
                  i
                    .sliceSerialize(i.events[i.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    a)
                  : n(t);
              }
              function a(t) {
                return eN(t) ? e9(e, l)(t) : l(t);
              }
              function l(t) {
                return e5(
                  e,
                  s,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )(t);
              }
              function s(t) {
                return e.attempt(te, c, c)(t);
              }
              function c(t) {
                return eL(t) ? eB(e, u, "whitespace")(t) : u(t);
              }
              function u(o) {
                return null === o || eD(o)
                  ? (e.exit("definition"), i.parser.defined.push(r), t(o))
                  : n(o);
              }
            },
          },
        },
        tP = { [-2]: tt, [-1]: tt, 32: tt },
        tA = {
          35: {
            name: "headingAtx",
            resolve: function (e, t) {
              let n,
                r,
                i = e.length - 2,
                o = 3;
              return (
                "whitespace" === e[3][1].type && (o += 2),
                i - 2 > o && "whitespace" === e[i][1].type && (i -= 2),
                "atxHeadingSequence" === e[i][1].type &&
                  (o === i - 1 ||
                    (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
                  (i -= o + 1 === i ? 2 : 4),
                i > o &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                  }),
                  (r = {
                    type: "chunkText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                    contentType: "text",
                  }),
                  ew(e, o, i - o + 1, [
                    ["enter", n, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r = 0;
              return function (i) {
                var o;
                return (
                  e.enter("atxHeading"),
                  (o = i),
                  e.enter("atxHeadingSequence"),
                  (function i(o) {
                    return 35 === o && r++ < 6
                      ? (e.consume(o), i)
                      : null === o || eN(o)
                      ? (e.exit("atxHeadingSequence"),
                        (function n(r) {
                          return 35 === r
                            ? (e.enter("atxHeadingSequence"),
                              (function t(r) {
                                return 35 === r
                                  ? (e.consume(r), t)
                                  : (e.exit("atxHeadingSequence"), n(r));
                              })(r))
                            : null === r || eD(r)
                            ? (e.exit("atxHeading"), t(r))
                            : eL(r)
                            ? eB(e, n, "whitespace")(r)
                            : (e.enter("atxHeadingText"),
                              (function t(r) {
                                return null === r || 35 === r || eN(r)
                                  ? (e.exit("atxHeadingText"), n(r))
                                  : (e.consume(r), t);
                              })(r));
                        })(o))
                      : n(o);
                  })(o)
                );
              };
            },
          },
          42: e0,
          45: [tr, e0],
          60: {
            concrete: !0,
            name: "htmlFlow",
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r,
                i,
                o,
                a,
                l,
                s = this;
              return function (t) {
                var n;
                return (
                  (n = t),
                  e.enter("htmlFlow"),
                  e.enter("htmlFlowData"),
                  e.consume(n),
                  c
                );
              };
              function c(a) {
                return 33 === a
                  ? (e.consume(a), u)
                  : 47 === a
                  ? (e.consume(a), (i = !0), d)
                  : 63 === a
                  ? (e.consume(a), (r = 3), s.interrupt ? t : T)
                  : eP(a)
                  ? (e.consume(a), (o = String.fromCharCode(a)), m)
                  : n(a);
              }
              function u(i) {
                return 45 === i
                  ? (e.consume(i), (r = 2), f)
                  : 91 === i
                  ? (e.consume(i), (r = 5), (a = 0), p)
                  : eP(i)
                  ? (e.consume(i), (r = 4), s.interrupt ? t : T)
                  : n(i);
              }
              function f(r) {
                return 45 === r ? (e.consume(r), s.interrupt ? t : T) : n(r);
              }
              function p(r) {
                let i = "CDATA[";
                return r === i.charCodeAt(a++)
                  ? (e.consume(r), a === i.length)
                    ? s.interrupt
                      ? t
                      : E
                    : p
                  : n(r);
              }
              function d(t) {
                return eP(t)
                  ? (e.consume(t), (o = String.fromCharCode(t)), m)
                  : n(t);
              }
              function m(a) {
                if (null === a || 47 === a || 62 === a || eN(a)) {
                  let l = 47 === a,
                    c = o.toLowerCase();
                  return !l && !i && to.includes(c)
                    ? ((r = 1), s.interrupt ? t(a) : E(a))
                    : ti.includes(o.toLowerCase())
                    ? ((r = 6), l)
                      ? (e.consume(a), h)
                      : s.interrupt
                      ? t(a)
                      : E(a)
                    : ((r = 7),
                      s.interrupt && !s.parser.lazy[s.now().line]
                        ? n(a)
                        : i
                        ? (function t(n) {
                            return eL(n) ? (e.consume(n), t) : k(n);
                          })(a)
                        : g(a));
                }
                return 45 === a || eA(a)
                  ? (e.consume(a), (o += String.fromCharCode(a)), m)
                  : n(a);
              }
              function h(r) {
                return 62 === r ? (e.consume(r), s.interrupt ? t : E) : n(r);
              }
              function g(t) {
                return 47 === t
                  ? (e.consume(t), k)
                  : 58 === t || 95 === t || eP(t)
                  ? (e.consume(t), y)
                  : eL(t)
                  ? (e.consume(t), g)
                  : k(t);
              }
              function y(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || eA(t)
                  ? (e.consume(t), y)
                  : v(t);
              }
              function v(t) {
                return 61 === t
                  ? (e.consume(t), b)
                  : eL(t)
                  ? (e.consume(t), v)
                  : g(t);
              }
              function b(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                  ? (e.consume(t), (l = t), x)
                  : eL(t)
                  ? (e.consume(t), b)
                  : (function t(n) {
                      return null === n ||
                        34 === n ||
                        39 === n ||
                        47 === n ||
                        60 === n ||
                        61 === n ||
                        62 === n ||
                        96 === n ||
                        eN(n)
                        ? v(n)
                        : (e.consume(n), t);
                    })(t);
              }
              function x(t) {
                return t === l
                  ? (e.consume(t), (l = null), w)
                  : null === t || eD(t)
                  ? n(t)
                  : (e.consume(t), x);
              }
              function w(e) {
                return 47 === e || 62 === e || eL(e) ? g(e) : n(e);
              }
              function k(t) {
                return 62 === t ? (e.consume(t), O) : n(t);
              }
              function O(t) {
                return null === t || eD(t)
                  ? E(t)
                  : eL(t)
                  ? (e.consume(t), O)
                  : n(t);
              }
              function E(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), A)
                  : 60 === t && 1 === r
                  ? (e.consume(t), j)
                  : 62 === t && 4 === r
                  ? (e.consume(t), I)
                  : 63 === t && 3 === r
                  ? (e.consume(t), T)
                  : 93 === t && 5 === r
                  ? (e.consume(t), R)
                  : eD(t) && (6 === r || 7 === r)
                  ? (e.exit("htmlFlowData"), e.check(ta, D, S)(t))
                  : null === t || eD(t)
                  ? (e.exit("htmlFlowData"), S(t))
                  : (e.consume(t), E);
              }
              function S(t) {
                return e.check(tl, C, D)(t);
              }
              function C(t) {
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), P
                );
              }
              function P(t) {
                return null === t || eD(t)
                  ? S(t)
                  : (e.enter("htmlFlowData"), E(t));
              }
              function A(t) {
                return 45 === t ? (e.consume(t), T) : E(t);
              }
              function j(t) {
                return 47 === t ? (e.consume(t), (o = ""), z) : E(t);
              }
              function z(t) {
                if (62 === t) {
                  let n = o.toLowerCase();
                  return to.includes(n) ? (e.consume(t), I) : E(t);
                }
                return eP(t) && o.length < 8
                  ? (e.consume(t), (o += String.fromCharCode(t)), z)
                  : E(t);
              }
              function R(t) {
                return 93 === t ? (e.consume(t), T) : E(t);
              }
              function T(t) {
                return 62 === t
                  ? (e.consume(t), I)
                  : 45 === t && 2 === r
                  ? (e.consume(t), T)
                  : E(t);
              }
              function I(t) {
                return null === t || eD(t)
                  ? (e.exit("htmlFlowData"), D(t))
                  : (e.consume(t), I);
              }
              function D(n) {
                return e.exit("htmlFlow"), t(n);
              }
            },
          },
          61: tr,
          95: e0,
          96: tc,
          126: tc,
        },
        tj = { 38: tp, 92: td },
        tz = {
          [-5]: tm,
          [-4]: tm,
          [-3]: tm,
          33: tx,
          38: tp,
          42: tk,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    i
                  );
                };
                function i(t) {
                  return eP(t) ? (e.consume(t), o) : 64 === t ? n(t) : l(t);
                }
                function o(t) {
                  return 43 === t || 45 === t || 46 === t || eA(t)
                    ? ((r = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (r = 0), a)
                          : (43 === n || 45 === n || 46 === n || eA(n)) &&
                            r++ < 32
                          ? (e.consume(n), t)
                          : ((r = 0), l(n));
                      })(t))
                    : l(t);
                }
                function a(r) {
                  return 62 === r
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(r),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === r || 32 === r || 60 === r || ez(r)
                    ? n(r)
                    : (e.consume(r), a);
                }
                function l(t) {
                  return 64 === t
                    ? (e.consume(t), s)
                    : ej(t)
                    ? (e.consume(t), l)
                    : n(t);
                }
                function s(i) {
                  return eA(i)
                    ? (function i(o) {
                        return 46 === o
                          ? (e.consume(o), (r = 0), s)
                          : 62 === o
                          ? ((e.exit("autolinkProtocol").type =
                              "autolinkEmail"),
                            e.enter("autolinkMarker"),
                            e.consume(o),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t)
                          : (function t(o) {
                              if ((45 === o || eA(o)) && r++ < 63) {
                                let n = 45 === o ? t : i;
                                return e.consume(o), n;
                              }
                              return n(o);
                            })(o);
                      })(i)
                    : n(i);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let r,
                  i,
                  o,
                  a = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    l
                  );
                };
                function l(t) {
                  return 33 === t
                    ? (e.consume(t), s)
                    : 47 === t
                    ? (e.consume(t), x)
                    : 63 === t
                    ? (e.consume(t), v)
                    : eP(t)
                    ? (e.consume(t), k)
                    : n(t);
                }
                function s(t) {
                  return 45 === t
                    ? (e.consume(t), c)
                    : 91 === t
                    ? (e.consume(t), (i = 0), d)
                    : eP(t)
                    ? (e.consume(t), y)
                    : n(t);
                }
                function c(t) {
                  return 45 === t ? (e.consume(t), p) : n(t);
                }
                function u(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                    ? (e.consume(t), f)
                    : eD(t)
                    ? ((o = u), z(t))
                    : (e.consume(t), u);
                }
                function f(t) {
                  return 45 === t ? (e.consume(t), p) : u(t);
                }
                function p(e) {
                  return 62 === e ? j(e) : 45 === e ? f(e) : u(e);
                }
                function d(t) {
                  let r = "CDATA[";
                  return t === r.charCodeAt(i++)
                    ? (e.consume(t), i === r.length ? m : d)
                    : n(t);
                }
                function m(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                    ? (e.consume(t), h)
                    : eD(t)
                    ? ((o = m), z(t))
                    : (e.consume(t), m);
                }
                function h(t) {
                  return 93 === t ? (e.consume(t), g) : m(t);
                }
                function g(t) {
                  return 62 === t ? j(t) : 93 === t ? (e.consume(t), g) : m(t);
                }
                function y(t) {
                  return null === t || 62 === t
                    ? j(t)
                    : eD(t)
                    ? ((o = y), z(t))
                    : (e.consume(t), y);
                }
                function v(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                    ? (e.consume(t), b)
                    : eD(t)
                    ? ((o = v), z(t))
                    : (e.consume(t), v);
                }
                function b(e) {
                  return 62 === e ? j(e) : v(e);
                }
                function x(t) {
                  return eP(t) ? (e.consume(t), w) : n(t);
                }
                function w(t) {
                  return 45 === t || eA(t)
                    ? (e.consume(t), w)
                    : (function t(n) {
                        return eD(n)
                          ? ((o = t), z(n))
                          : eL(n)
                          ? (e.consume(n), t)
                          : j(n);
                      })(t);
                }
                function k(t) {
                  return 45 === t || eA(t)
                    ? (e.consume(t), k)
                    : 47 === t || 62 === t || eN(t)
                    ? O(t)
                    : n(t);
                }
                function O(t) {
                  return 47 === t
                    ? (e.consume(t), j)
                    : 58 === t || 95 === t || eP(t)
                    ? (e.consume(t), E)
                    : eD(t)
                    ? ((o = O), z(t))
                    : eL(t)
                    ? (e.consume(t), O)
                    : j(t);
                }
                function E(t) {
                  return 45 === t || 46 === t || 58 === t || 95 === t || eA(t)
                    ? (e.consume(t), E)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), S)
                          : eD(n)
                          ? ((o = t), z(n))
                          : eL(n)
                          ? (e.consume(n), t)
                          : O(n);
                      })(t);
                }
                function S(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (r = t), C)
                    : eD(t)
                    ? ((o = S), z(t))
                    : eL(t)
                    ? (e.consume(t), S)
                    : (e.consume(t), P);
                }
                function C(t) {
                  return t === r
                    ? (e.consume(t), (r = void 0), A)
                    : null === t
                    ? n(t)
                    : eD(t)
                    ? ((o = C), z(t))
                    : (e.consume(t), C);
                }
                function P(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || eN(t)
                    ? O(t)
                    : (e.consume(t), P);
                }
                function A(e) {
                  return 47 === e || 62 === e || eN(e) ? O(e) : n(e);
                }
                function j(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(r);
                }
                function z(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    R
                  );
                }
                function R(t) {
                  return eL(t)
                    ? eB(
                        e,
                        T,
                        "linePrefix",
                        a.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(t)
                    : T(t);
                }
                function T(t) {
                  return e.enter("htmlTextData"), o(t);
                }
              },
            },
          ],
          91: tE,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return e.enter("hardBreakEscape"), e.consume(t), r;
                };
                function r(r) {
                  return eD(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
                }
              },
            },
            td,
          ],
          93: tg,
          95: tk,
          96: {
            name: "codeText",
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                i = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              ) {
                for (t = i; ++t < r; )
                  if ("codeTextData" === e[t][1].type) {
                    (e[i][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (i += 2),
                      (r -= 2);
                    break;
                  }
              }
              for (t = i - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === r || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            tokenize: function (e, t, n) {
              let r,
                i,
                o = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), o++, t)
                      : (e.exit("codeTextSequence"), a(n));
                  })(t)
                );
              };
              function a(s) {
                return null === s
                  ? n(s)
                  : 32 === s
                  ? (e.enter("space"), e.consume(s), e.exit("space"), a)
                  : 96 === s
                  ? ((i = e.enter("codeTextSequence")),
                    (r = 0),
                    (function n(a) {
                      return 96 === a
                        ? (e.consume(a), r++, n)
                        : r === o
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(a))
                        : ((i.type = "codeTextData"), l(a));
                    })(s))
                  : eD(s)
                  ? (e.enter("lineEnding"),
                    e.consume(s),
                    e.exit("lineEnding"),
                    a)
                  : (e.enter("codeTextData"), l(s));
              }
              function l(t) {
                return null === t || 32 === t || 96 === t || eD(t)
                  ? (e.exit("codeTextData"), a(t))
                  : (e.consume(t), l);
              }
            },
          },
        },
        tR = { null: [tk, eK] },
        tT = { null: [42, 95] },
        tI = { null: [] },
        tD = /[\0\t\n\r]/g;
      function tN(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCodePoint(n);
      }
      let tL =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function tM(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return tN(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return tf(n) || e;
      }
      let tF = {}.hasOwnProperty;
      function t_(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function tB(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              Z({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              Z({ start: t.start, end: t.end }) +
              ") is open"
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            Z({ start: t.start, end: t.end }) +
            ") is still open"
        );
      }
      function tH(e) {
        let t = this;
        t.parser = function (n) {
          var r, o;
          let a, l, s, c;
          return (
            "string" !=
              typeof (r = {
                ...t.data("settings"),
                ...e,
                extensions: t.data("micromarkExtensions") || [],
                mdastExtensions: t.data("fromMarkdownExtensions") || [],
              }) && ((o = r), (r = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: r(y),
                  autolinkProtocol: c,
                  autolinkEmail: c,
                  atxHeading: r(m),
                  blockQuote: r(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: c,
                  characterReference: c,
                  codeFenced: r(d),
                  codeFencedFenceInfo: i,
                  codeFencedFenceMeta: i,
                  codeIndented: r(d, i),
                  codeText: r(function () {
                    return { type: "inlineCode", value: "" };
                  }, i),
                  codeTextData: c,
                  data: c,
                  codeFlowValue: c,
                  definition: r(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: i,
                  definitionLabelString: i,
                  definitionTitleString: i,
                  emphasis: r(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: r(h),
                  hardBreakTrailing: r(h),
                  htmlFlow: r(g, i),
                  htmlFlowData: c,
                  htmlText: r(g, i),
                  htmlTextData: c,
                  image: r(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: i,
                  link: r(y),
                  listItem: r(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    this.data.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start =
                        Number.parseInt(this.sliceSerialize(e), 10)),
                      (this.data.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: r(v, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: r(v),
                  paragraph: r(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = "collapsed";
                  },
                  referenceString: i,
                  resourceDestinationString: i,
                  resourceTitleString: i,
                  setextHeading: r(m),
                  strong: r(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: r(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: a(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    t.depth || (t.depth = this.sliceSerialize(e).length);
                  },
                  autolink: a(),
                  autolinkEmail: function (e) {
                    u.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e));
                  },
                  autolinkProtocol: function (e) {
                    u.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e));
                  },
                  blockQuote: a(),
                  characterEscapeValue: u,
                  characterReferenceMarkerHexadecimal: p,
                  characterReferenceMarkerNumeric: p,
                  characterReferenceValue: function (e) {
                    let t,
                      n = this.sliceSerialize(e),
                      r = this.data.characterReferenceType;
                    r
                      ? ((t = tN(
                          n,
                          "characterReferenceMarkerNumeric" === r ? 10 : 16
                        )),
                        (this.data.characterReferenceType = void 0))
                      : (t = tf(n));
                    let i = this.stack[this.stack.length - 1];
                    i.value += t;
                  },
                  characterReference: function (e) {
                    this.stack.pop().position.end = t_(e.end);
                  },
                  codeFenced: a(function () {
                    let e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      ""
                    )),
                      (this.data.flowCodeInside = void 0);
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: u,
                  codeIndented: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      ""
                    );
                  }),
                  codeText: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: u,
                  data: u,
                  definition: a(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = e8(this.sliceSerialize(e)).toLowerCase());
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: a(),
                  hardBreakEscape: a(f),
                  hardBreakTrailing: a(f),
                  htmlFlow: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: u,
                  htmlText: a(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: u,
                  image: a(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (this.data.inReference = !0),
                      "link" === n.type
                        ? (n.children = e.children)
                        : (n.alt = t);
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    (n.label = t.replace(tL, tM)),
                      (n.identifier = e8(t).toLowerCase());
                  },
                  lineEnding: function (e) {
                    let n = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      (n.children[n.children.length - 1].position.end = t_(
                        e.end
                      )),
                        (this.data.atHardBreak = void 0);
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(n.type) &&
                      (c.call(this, e), u.call(this, e));
                  },
                  link: a(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  listItem: a(),
                  listOrdered: a(),
                  listUnordered: a(),
                  paragraph: a(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = e8(this.sliceSerialize(e)).toLowerCase()),
                      (this.data.referenceType = "full");
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: a(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: a(),
                  thematicBreak: a(),
                },
              };
              !(function e(t, n) {
                let r = -1;
                for (; ++r < n.length; ) {
                  let i = n[r];
                  Array.isArray(i)
                    ? e(t, i)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (tF.call(t, n))
                            switch (n) {
                              case "canContainEols": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "transforms": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "enter":
                              case "exit": {
                                let r = t[n];
                                r && Object.assign(e[n], r);
                              }
                            }
                      })(t, i);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let r = { type: "root", children: [] },
                  a = {
                    stack: [r],
                    tokenStack: [],
                    config: t,
                    enter: o,
                    exit: l,
                    buffer: i,
                    resume: s,
                    data: n,
                  },
                  c = [],
                  u = -1;
                for (; ++u < e.length; )
                  ("listOrdered" === e[u][1].type ||
                    "listUnordered" === e[u][1].type) &&
                    ("enter" === e[u][0]
                      ? c.push(u)
                      : (u = (function (e, t, n) {
                          let r,
                            i,
                            o,
                            a,
                            l = t - 1,
                            s = -1,
                            c = !1;
                          for (; ++l <= n; ) {
                            let t = e[l];
                            switch (t[1].type) {
                              case "listUnordered":
                              case "listOrdered":
                              case "blockQuote":
                                "enter" === t[0] ? s++ : s--, (a = void 0);
                                break;
                              case "lineEndingBlank":
                                "enter" === t[0] &&
                                  (!r || a || s || o || (o = l), (a = void 0));
                                break;
                              case "linePrefix":
                              case "listItemValue":
                              case "listItemMarker":
                              case "listItemPrefix":
                              case "listItemPrefixWhitespace":
                                break;
                              default:
                                a = void 0;
                            }
                            if (
                              (!s &&
                                "enter" === t[0] &&
                                "listItemPrefix" === t[1].type) ||
                              (-1 === s &&
                                "exit" === t[0] &&
                                ("listUnordered" === t[1].type ||
                                  "listOrdered" === t[1].type))
                            ) {
                              if (r) {
                                let a = l;
                                for (i = void 0; a--; ) {
                                  let t = e[a];
                                  if (
                                    "lineEnding" === t[1].type ||
                                    "lineEndingBlank" === t[1].type
                                  ) {
                                    if ("exit" === t[0]) continue;
                                    i &&
                                      ((e[i][1].type = "lineEndingBlank"),
                                      (c = !0)),
                                      (t[1].type = "lineEnding"),
                                      (i = a);
                                  } else if (
                                    "linePrefix" === t[1].type ||
                                    "blockQuotePrefix" === t[1].type ||
                                    "blockQuotePrefixWhitespace" ===
                                      t[1].type ||
                                    "blockQuoteMarker" === t[1].type ||
                                    "listItemIndent" === t[1].type
                                  );
                                  else break;
                                }
                                o && (!i || o < i) && (r._spread = !0),
                                  (r.end = Object.assign(
                                    {},
                                    i ? e[i][1].start : t[1].end
                                  )),
                                  e.splice(i || l, 0, ["exit", r, t[2]]),
                                  l++,
                                  n++;
                              }
                              if ("listItemPrefix" === t[1].type) {
                                let i = {
                                  type: "listItem",
                                  _spread: !1,
                                  start: Object.assign({}, t[1].start),
                                  end: void 0,
                                };
                                (r = i),
                                  e.splice(l, 0, ["enter", i, t[2]]),
                                  l++,
                                  n++,
                                  (o = void 0),
                                  (a = !0);
                              }
                            }
                          }
                          return (e[t][1]._spread = c), n;
                        })(e, c.pop(), u)));
                for (u = -1; ++u < e.length; ) {
                  let n = t[e[u][0]];
                  tF.call(n, e[u][1].type) &&
                    n[e[u][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[u][2].sliceSerialize },
                        a
                      ),
                      e[u][1]
                    );
                }
                if (a.tokenStack.length > 0) {
                  let e = a.tokenStack[a.tokenStack.length - 1];
                  (e[1] || tB).call(a, void 0, e[0]);
                }
                for (
                  r.position = {
                    start: t_(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: t_(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    u = -1;
                  ++u < t.transforms.length;

                )
                  r = t.transforms[u](r) || r;
                return r;
              };
              function r(e, t) {
                return function (n) {
                  o.call(this, e(n), n), t && t.call(this, n);
                };
              }
              function i() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function o(e, t, n) {
                this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n || void 0]),
                  (e.position = { start: t_(t.start), end: void 0 });
              }
              function a(e) {
                return function (t) {
                  e && e.call(this, t), l.call(this, t);
                };
              }
              function l(e, t) {
                let n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (r)
                  r[0].type !== e.type &&
                    (t
                      ? t.call(this, e, r[0])
                      : (r[1] || tB).call(this, e, r[0]));
                else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      Z({ start: e.start, end: e.end }) +
                      "): it’s not open"
                  );
                n.position.end = t_(e.end);
              }
              function s() {
                return eb(
                  this.stack.pop(),
                  "boolean" != typeof ev.includeImageAlt || ev.includeImageAlt,
                  "boolean" != typeof ev.includeHtml || ev.includeHtml
                );
              }
              function c(e) {
                let t = this.stack[this.stack.length - 1].children,
                  n = t[t.length - 1];
                (n && "text" === n.type) ||
                  (((n = { type: "text", value: "" }).position = {
                    start: t_(e.start),
                    end: void 0,
                  }),
                  t.push(n)),
                  this.stack.push(n);
              }
              function u(e) {
                let t = this.stack.pop();
                (t.value += this.sliceSerialize(e)),
                  (t.position.end = t_(e.end));
              }
              function f() {
                this.data.atHardBreak = !0;
              }
              function p(e) {
                this.data.characterReferenceType = e.type;
              }
              function d() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function m() {
                return { type: "heading", depth: 0, children: [] };
              }
              function h() {
                return { type: "break" };
              }
              function g() {
                return { type: "html", value: "" };
              }
              function y() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function v(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(o)(
              (function (e) {
                for (; !eS(e); );
                return e;
              })(
                (function (e) {
                  let t = {
                    constructs: (function (e) {
                      let t = {},
                        n = -1;
                      for (; ++n < e.length; )
                        !(function (e, t) {
                          let n;
                          for (n in t) {
                            let r,
                              i =
                                (eC.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                              o = t[n];
                            if (o)
                              for (r in o) {
                                eC.call(i, r) || (i[r] = []);
                                let e = o[r];
                                !(function (e, t) {
                                  let n = -1,
                                    r = [];
                                  for (; ++n < t.length; )
                                    ("after" === t[n].add ? e : r).push(t[n]);
                                  ew(e, 0, 0, r);
                                })(i[r], Array.isArray(e) ? e : e ? [e] : []);
                              }
                          }
                        })(t, e[n]);
                      return t;
                    })([i, ...((e || {}).extensions || [])]),
                    content: n(eH),
                    defined: [],
                    document: n(eU),
                    flow: n(eY),
                    lazy: {},
                    string: n(eG),
                    text: n(eX),
                  };
                  return t;
                  function n(e) {
                    return function (n) {
                      return (function (e, t, n) {
                        let r = {
                            _bufferIndex: -1,
                            _index: 0,
                            line: (n && n.line) || 1,
                            column: (n && n.column) || 1,
                            offset: (n && n.offset) || 0,
                          },
                          i = {},
                          o = [],
                          a = [],
                          l = [],
                          s = {
                            attempt: m(function (e, t) {
                              h(e, t.from);
                            }),
                            check: m(d),
                            consume: function (e) {
                              eD(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  g())
                                : -1 !== e && (r.column++, r.offset++),
                                r._bufferIndex < 0
                                  ? r._index++
                                  : (r._bufferIndex++,
                                    r._bufferIndex === a[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++)),
                                (c.previous = e);
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = p()),
                                c.events.push(["enter", n, c]),
                                l.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = l.pop();
                              return (
                                (t.end = p()), c.events.push(["exit", t, c]), t
                              );
                            },
                            interrupt: m(d, { interrupt: !0 }),
                          },
                          c = {
                            code: null,
                            containerState: {},
                            defineSkip: function (e) {
                              (i[e.line] = e.column), g();
                            },
                            events: [],
                            now: p,
                            parser: e,
                            previous: null,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  r = -1,
                                  i = [];
                                for (; ++r < e.length; ) {
                                  let o,
                                    a = e[r];
                                  if ("string" == typeof a) o = a;
                                  else
                                    switch (a) {
                                      case -5:
                                        o = "\r";
                                        break;
                                      case -4:
                                        o = "\n";
                                        break;
                                      case -3:
                                        o = "\r\n";
                                        break;
                                      case -2:
                                        o = t ? " " : "	";
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        o = " ";
                                        break;
                                      default:
                                        o = String.fromCharCode(a);
                                    }
                                  (n = -2 === a), i.push(o);
                                }
                                return i.join("");
                              })(f(e), t);
                            },
                            sliceStream: f,
                            write: function (e) {
                              return ((a = ek(a, e)),
                              (function () {
                                let e;
                                for (; r._index < a.length; ) {
                                  let n = a[r._index];
                                  if ("string" == typeof n)
                                    for (
                                      e = r._index,
                                        r._bufferIndex < 0 &&
                                          (r._bufferIndex = 0);
                                      r._index === e &&
                                      r._bufferIndex < n.length;

                                    ) {
                                      var t;
                                      (t = n.charCodeAt(r._bufferIndex)),
                                        (u = u(t));
                                    }
                                  else u = u(n);
                                }
                              })(),
                              null !== a[a.length - 1])
                                ? []
                                : (h(t, 0),
                                  (c.events = th(o, c.events, c)),
                                  c.events);
                            },
                          },
                          u = t.tokenize.call(c, s);
                        return t.resolveAll && o.push(t), c;
                        function f(e) {
                          return (function (e, t) {
                            let n,
                              r = t.start._index,
                              i = t.start._bufferIndex,
                              o = t.end._index,
                              a = t.end._bufferIndex;
                            if (r === o) n = [e[r].slice(i, a)];
                            else {
                              if (((n = e.slice(r, o)), i > -1)) {
                                let e = n[0];
                                "string" == typeof e
                                  ? (n[0] = e.slice(i))
                                  : n.shift();
                              }
                              a > 0 && n.push(e[o].slice(0, a));
                            }
                            return n;
                          })(a, e);
                        }
                        function p() {
                          let {
                            _bufferIndex: e,
                            _index: t,
                            line: n,
                            column: i,
                            offset: o,
                          } = r;
                          return {
                            _bufferIndex: e,
                            _index: t,
                            line: n,
                            column: i,
                            offset: o,
                          };
                        }
                        function d(e, t) {
                          t.restore();
                        }
                        function m(e, t) {
                          return function (n, i, o) {
                            var a;
                            let u, f, d, m;
                            return Array.isArray(n)
                              ? h(n)
                              : "tokenize" in n
                              ? h([n])
                              : ((a = n),
                                function (e) {
                                  let t = null !== e && a[e],
                                    n = null !== e && a.null;
                                  return h([
                                    ...(Array.isArray(t) ? t : t ? [t] : []),
                                    ...(Array.isArray(n) ? n : n ? [n] : []),
                                  ])(e);
                                });
                            function h(e) {
                              return ((u = e), (f = 0), 0 === e.length)
                                ? o
                                : y(e[f]);
                            }
                            function y(e) {
                              return function (n) {
                                return ((m = (function () {
                                  let e = p(),
                                    t = c.previous,
                                    n = c.currentConstruct,
                                    i = c.events.length,
                                    o = Array.from(l);
                                  return {
                                    from: i,
                                    restore: function () {
                                      (r = e),
                                        (c.previous = t),
                                        (c.currentConstruct = n),
                                        (c.events.length = i),
                                        (l = o),
                                        g();
                                    },
                                  };
                                })()),
                                (d = e),
                                e.partial || (c.currentConstruct = e),
                                e.name &&
                                  c.parser.constructs.disable.null.includes(
                                    e.name
                                  ))
                                  ? b(n)
                                  : e.tokenize.call(
                                      t
                                        ? Object.assign(Object.create(c), t)
                                        : c,
                                      s,
                                      v,
                                      b
                                    )(n);
                              };
                            }
                            function v(t) {
                              return e(d, m), i;
                            }
                            function b(e) {
                              return (m.restore(), ++f < u.length)
                                ? y(u[f])
                                : o;
                            }
                          };
                        }
                        function h(e, t) {
                          e.resolveAll && !o.includes(e) && o.push(e),
                            e.resolve &&
                              ew(
                                c.events,
                                t,
                                c.events.length - t,
                                e.resolve(c.events.slice(t), c)
                              ),
                            e.resolveTo &&
                              (c.events = e.resolveTo(c.events, c));
                        }
                        function g() {
                          r.line in i &&
                            r.column < 2 &&
                            ((r.column = i[r.line]),
                            (r.offset += i[r.line] - 1));
                        }
                      })(t, e, n);
                    };
                  }
                })(o)
                  .document()
                  .write(
                    ((l = 1),
                    (s = ""),
                    (c = !0),
                    function (e, t, n) {
                      let r,
                        i,
                        o,
                        u,
                        f,
                        p = [];
                      for (
                        e =
                          s +
                          ("string" == typeof e
                            ? e.toString()
                            : new TextDecoder(t || void 0).decode(e)),
                          o = 0,
                          s = "",
                          c && (65279 === e.charCodeAt(0) && o++, (c = void 0));
                        o < e.length;

                      ) {
                        if (
                          ((tD.lastIndex = o),
                          (u =
                            (r = tD.exec(e)) && void 0 !== r.index
                              ? r.index
                              : e.length),
                          (f = e.charCodeAt(u)),
                          !r)
                        ) {
                          s = e.slice(o);
                          break;
                        }
                        if (10 === f && o === u && a) p.push(-3), (a = void 0);
                        else
                          switch (
                            (a && (p.push(-5), (a = void 0)),
                            o < u && (p.push(e.slice(o, u)), (l += u - o)),
                            f)
                          ) {
                            case 0:
                              p.push(65533), l++;
                              break;
                            case 9:
                              for (
                                i = 4 * Math.ceil(l / 4), p.push(-2);
                                l++ < i;

                              )
                                p.push(-1);
                              break;
                            case 10:
                              p.push(-4), (l = 1);
                              break;
                            default:
                              (a = !0), (l = 1);
                          }
                        o = u + 1;
                      }
                      return (
                        n && (a && p.push(-5), s && p.push(s), p.push(null)), p
                      );
                    })(n, r, !0)
                  )
              )
            )
          );
        };
      }
      let tU = "object" == typeof self ? self : globalThis,
        t$ = (e) =>
          ((e, t) => {
            let n = (t, n) => (e.set(n, t), t),
              r = (i) => {
                if (e.has(i)) return e.get(i);
                let [o, a] = t[i];
                switch (o) {
                  case 0:
                  case -1:
                    return n(a, i);
                  case 1: {
                    let e = n([], i);
                    for (let t of a) e.push(r(t));
                    return e;
                  }
                  case 2: {
                    let e = n({}, i);
                    for (let [t, n] of a) e[r(t)] = r(n);
                    return e;
                  }
                  case 3:
                    return n(new Date(a), i);
                  case 4: {
                    let { source: e, flags: t } = a;
                    return n(new RegExp(e, t), i);
                  }
                  case 5: {
                    let e = n(new Map(), i);
                    for (let [t, n] of a) e.set(r(t), r(n));
                    return e;
                  }
                  case 6: {
                    let e = n(new Set(), i);
                    for (let t of a) e.add(r(t));
                    return e;
                  }
                  case 7: {
                    let { name: e, message: t } = a;
                    return n(new tU[e](t), i);
                  }
                  case 8:
                    return n(BigInt(a), i);
                  case "BigInt":
                    return n(Object(BigInt(a)), i);
                  case "ArrayBuffer":
                    return n(new Uint8Array(a).buffer, a);
                  case "DataView": {
                    let { buffer: e } = new Uint8Array(a);
                    return n(new DataView(e), a);
                  }
                }
                return n(new tU[o](a), i);
              };
            return r;
          })(
            new Map(),
            e
          )(0),
        { toString: tW } = {},
        { keys: tV } = Object,
        tq = (e) => {
          let t = typeof e;
          if ("object" !== t || !e) return [0, t];
          let n = tW.call(e).slice(8, -1);
          switch (n) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
            case "DataView":
              return [1, n];
          }
          return n.includes("Array")
            ? [1, n]
            : n.includes("Error")
            ? [7, n]
            : [2, n];
        },
        tY = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
        tK = (e, { json: t, lossy: n } = {}) => {
          let r = [];
          return (
            ((e, t, n, r) => {
              let i = (e, t) => {
                  let i = r.push(e) - 1;
                  return n.set(t, i), i;
                },
                o = (r) => {
                  if (n.has(r)) return n.get(r);
                  let [a, l] = tq(r);
                  switch (a) {
                    case 0: {
                      let t = r;
                      switch (l) {
                        case "bigint":
                          (a = 8), (t = r.toString());
                          break;
                        case "function":
                        case "symbol":
                          if (e) throw TypeError("unable to serialize " + l);
                          t = null;
                          break;
                        case "undefined":
                          return i([-1], r);
                      }
                      return i([a, t], r);
                    }
                    case 1: {
                      if (l) {
                        let e = r;
                        return (
                          "DataView" === l
                            ? (e = new Uint8Array(r.buffer))
                            : "ArrayBuffer" === l && (e = new Uint8Array(r)),
                          i([l, [...e]], r)
                        );
                      }
                      let e = [],
                        t = i([a, e], r);
                      for (let t of r) e.push(o(t));
                      return t;
                    }
                    case 2: {
                      if (l)
                        switch (l) {
                          case "BigInt":
                            return i([l, r.toString()], r);
                          case "Boolean":
                          case "Number":
                          case "String":
                            return i([l, r.valueOf()], r);
                        }
                      if (t && "toJSON" in r) return o(r.toJSON());
                      let n = [],
                        s = i([a, n], r);
                      for (let t of tV(r))
                        (e || !tY(tq(r[t]))) && n.push([o(t), o(r[t])]);
                      return s;
                    }
                    case 3:
                      return i([a, r.toISOString()], r);
                    case 4: {
                      let { source: e, flags: t } = r;
                      return i([a, { source: e, flags: t }], r);
                    }
                    case 5: {
                      let t = [],
                        n = i([a, t], r);
                      for (let [n, i] of r)
                        (e || !(tY(tq(n)) || tY(tq(i)))) &&
                          t.push([o(n), o(i)]);
                      return n;
                    }
                    case 6: {
                      let t = [],
                        n = i([a, t], r);
                      for (let n of r) (e || !tY(tq(n))) && t.push(o(n));
                      return n;
                    }
                  }
                  let { message: s } = r;
                  return i([a, { name: l, message: s }], r);
                };
              return o;
            })(
              !(t || n),
              !!t,
              new Map(),
              r
            )(e),
            r
          );
        },
        tG =
          "function" == typeof structuredClone
            ? (e, t) =>
                t && ("json" in t || "lossy" in t)
                  ? t$(tK(e, t))
                  : structuredClone(e)
            : (e, t) => t$(tK(e, t));
      function tX(e) {
        let t = [],
          n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          let o = e.charCodeAt(n),
            a = "";
          if (37 === o && eA(e.charCodeAt(n + 1)) && eA(e.charCodeAt(n + 2)))
            i = 2;
          else if (o < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
              (a = String.fromCharCode(o));
          else if (o > 55295 && o < 57344) {
            let t = e.charCodeAt(n + 1);
            o < 56320 && t > 56319 && t < 57344
              ? ((a = String.fromCharCode(o, t)), (i = 1))
              : (a = "�");
          } else a = String.fromCharCode(o);
          a &&
            (t.push(e.slice(r, n), encodeURIComponent(a)),
            (r = n + i + 1),
            (a = "")),
            i && ((n += i), (i = 0));
        }
        return t.join("") + e.slice(r);
      }
      function tZ(e, t) {
        let n = [{ type: "text", value: "↩" }];
        return (
          t > 1 &&
            n.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(t) }],
            }),
          n
        );
      }
      function tQ(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
      }
      let tJ = function (e) {
        var t, n;
        if (null == e) return t1;
        if ("function" == typeof e) return t0(e);
        if ("object" == typeof e) {
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = tJ(e[n]);
                return t0(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : ((t = e),
              t0(function (e) {
                let n;
                for (n in t) if (e[n] !== t[n]) return !1;
                return !0;
              }));
        }
        if ("string" == typeof e) {
          return (
            (n = e),
            t0(function (e) {
              return e && e.type === n;
            })
          );
        }
        throw Error("Expected function, string, or object as test");
      };
      function t0(e) {
        return function (t, n, r) {
          return !!(
            (function (e) {
              return null !== e && "object" == typeof e && "type" in e;
            })(t) &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function t1() {
        return !0;
      }
      let t2 = [];
      function t3(e, t, n, r) {
        let i;
        "function" == typeof t && "function" != typeof n
          ? ((r = n), (n = t))
          : (i = t);
        let o = tJ(i),
          a = r ? -1 : 1;
        (function e(i, l, s) {
          let c = i && "object" == typeof i ? i : {};
          if ("string" == typeof c.type) {
            let e =
              "string" == typeof c.tagName
                ? c.tagName
                : "string" == typeof c.name
                ? c.name
                : void 0;
            Object.defineProperty(u, "name", {
              value: "node (" + i.type + (e ? "<" + e + ">" : "") + ")",
            });
          }
          return u;
          function u() {
            var c;
            let u,
              f,
              p,
              d = t2;
            if (
              (!t || o(i, l, s[s.length - 1] || void 0)) &&
              !1 ===
                (d = Array.isArray((c = n(i, s)))
                  ? c
                  : "number" == typeof c
                  ? [!0, c]
                  : null == c
                  ? t2
                  : [c])[0]
            )
              return d;
            if ("children" in i && i.children && i.children && "skip" !== d[0])
              for (
                f = (r ? i.children.length : -1) + a, p = s.concat(i);
                f > -1 && f < i.children.length;

              ) {
                if (!1 === (u = e(i.children[f], f, p)())[0]) return u;
                f = "number" == typeof u[1] ? u[1] : f + a;
              }
            return d;
          }
        })(e, void 0, [])();
      }
      function t6(e, t, n, r) {
        let i, o, a;
        "function" == typeof t && "function" != typeof n
          ? ((o = void 0), (a = t), (i = n))
          : ((o = t), (a = n), (i = r)),
          t3(
            e,
            o,
            function (e, t) {
              let n = t[t.length - 1],
                r = n ? n.children.indexOf(e) : void 0;
              return a(e, r, n);
            },
            i
          );
      }
      function t5(e, t) {
        let n = t.referenceType,
          r = "]";
        if (
          ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return [{ type: "text", value: "![" + t.alt + r }];
        let i = e.all(t),
          o = i[0];
        o && "text" === o.type
          ? (o.value = "[" + o.value)
          : i.unshift({ type: "text", value: "[" });
        let a = i[i.length - 1];
        return (
          a && "text" === a.type
            ? (a.value += r)
            : i.push({ type: "text", value: r }),
          i
        );
      }
      function t4(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function t7(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
        }
        return i > r ? e.slice(r, i) : "";
      }
      let t9 = {
        blockquote: function (e, t) {
          let n = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          let n = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
          );
        },
        code: function (e, t) {
          let n = t.value ? t.value + "\n" : "",
            r = {};
          t.lang && (r.className = ["language-" + t.lang]);
          let i = {
            type: "element",
            tagName: "code",
            properties: r,
            children: [{ type: "text", value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(i = e.applyData(t, i))],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          let n = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          let n = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: function (e, t) {
          let n,
            r =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            i = String(t.identifier).toUpperCase(),
            o = tX(i.toLowerCase()),
            a = e.footnoteOrder.indexOf(i),
            l = e.footnoteCounts.get(i);
          void 0 === l
            ? ((l = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
            : (n = a + 1),
            (l += 1),
            e.footnoteCounts.set(i, l);
          let s = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + r + "fn-" + o,
              id: r + "fnref-" + o + (l > 1 ? "-" + l : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(n) }],
          };
          e.patch(t, s);
          let c = {
            type: "element",
            tagName: "sup",
            properties: {},
            children: [s],
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        heading: function (e, t) {
          let n = {
            type: "element",
            tagName: "h" + t.depth,
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            let n = { type: "raw", value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
        },
        imageReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return t5(e, t);
          let i = { src: tX(r.url || ""), alt: t.alt };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let o = {
            type: "element",
            tagName: "img",
            properties: i,
            children: [],
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        image: function (e, t) {
          let n = { src: tX(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        inlineCode: function (e, t) {
          let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
          e.patch(t, n);
          let r = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [n],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        linkReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return t5(e, t);
          let i = { href: tX(r.url || "") };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let o = {
            type: "element",
            tagName: "a",
            properties: i,
            children: e.all(t),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        link: function (e, t) {
          let n = { href: tX(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(t),
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        listItem: function (e, t, n) {
          let r = e.all(t),
            i = n
              ? (function (e) {
                  let t = !1;
                  if ("list" === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      r = -1;
                    for (; !t && ++r < n.length; ) t = t4(n[r]);
                  }
                  return t;
                })(n)
              : t4(t),
            o = {},
            a = [];
          if ("boolean" == typeof t.checked) {
            let e,
              n = r[0];
            n && "element" === n.type && "p" === n.tagName
              ? (e = n)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                r.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (o.className = ["task-list-item"]);
          }
          let l = -1;
          for (; ++l < r.length; ) {
            let e = r[l];
            (i || 0 !== l || "element" !== e.type || "p" !== e.tagName) &&
              a.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || i
                ? a.push(e)
                : a.push(...e.children);
          }
          let s = r[r.length - 1];
          s &&
            (i || "element" !== s.type || "p" !== s.tagName) &&
            a.push({ type: "text", value: "\n" });
          let c = {
            type: "element",
            tagName: "li",
            properties: o,
            children: a,
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        list: function (e, t) {
          let n = {},
            r = e.all(t),
            i = -1;
          for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++i < r.length;

          ) {
            let e = r[i];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              n.className = ["contains-task-list"];
              break;
            }
          }
          let o = {
            type: "element",
            tagName: t.ordered ? "ol" : "ul",
            properties: n,
            children: e.wrap(r, !0),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        paragraph: function (e, t) {
          let n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          let n = { type: "root", children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          let n = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          let n = e.all(t),
            r = n.shift(),
            i = [];
          if (r) {
            let n = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([r], !0),
            };
            e.patch(t.children[0], n), i.push(n);
          }
          if (n.length > 0) {
            let r = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0),
              },
              o = G(t.children[1]),
              a = K(t.children[t.children.length - 1]);
            o && a && (r.position = { start: o, end: a }), i.push(r);
          }
          let o = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(i, !0),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        tableCell: function (e, t) {
          let n = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          let r = n ? n.children : void 0,
            i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
            o = n && "table" === n.type ? n.align : void 0,
            a = o ? o.length : t.children.length,
            l = -1,
            s = [];
          for (; ++l < a; ) {
            let n = t.children[l],
              r = {},
              a = o ? o[l] : void 0;
            a && (r.align = a);
            let c = {
              type: "element",
              tagName: i,
              properties: r,
              children: [],
            };
            n &&
              ((c.children = e.all(n)), e.patch(n, c), (c = e.applyData(n, c))),
              s.push(c);
          }
          let c = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(s, !0),
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        text: function (e, t) {
          let n = {
            type: "text",
            value: (function (e) {
              let t = String(e),
                n = /\r?\n|\r/g,
                r = n.exec(t),
                i = 0,
                o = [];
              for (; r; )
                o.push(t7(t.slice(i, r.index), i > 0, !0), r[0]),
                  (i = r.index + r[0].length),
                  (r = n.exec(t));
              return o.push(t7(t.slice(i), i > 0, !1)), o.join("");
            })(String(t.value)),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          let n = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: t8,
        yaml: t8,
        definition: t8,
        footnoteDefinition: t8,
      };
      function t8() {}
      let ne = {}.hasOwnProperty,
        nt = {};
      function nn(e, t) {
        e.position &&
          (t.position = (function (e) {
            let t = G(e),
              n = K(e);
            if (t && n) return { start: t, end: n };
          })(e));
      }
      function nr(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            i = e.data.hProperties;
          "string" == typeof t &&
            ("element" === n.type
              ? (n.tagName = t)
              : (n = {
                  type: "element",
                  tagName: t,
                  properties: {},
                  children: "children" in n ? n.children : [n],
                })),
            "element" === n.type && i && Object.assign(n.properties, tG(i)),
            "children" in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function ni(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
          r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
      }
      function no(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
        return e.slice(t);
      }
      function na(e, t) {
        let n = (function (e, t) {
            let n = t || nt,
              r = new Map(),
              i = new Map(),
              o = {
                all: function (e) {
                  let t = [];
                  if ("children" in e) {
                    let n = e.children,
                      r = -1;
                    for (; ++r < n.length; ) {
                      let i = o.one(n[r], e);
                      if (i) {
                        if (
                          r &&
                          "break" === n[r - 1].type &&
                          (Array.isArray(i) ||
                            "text" !== i.type ||
                            (i.value = no(i.value)),
                          !Array.isArray(i) && "element" === i.type)
                        ) {
                          let e = i.children[0];
                          e && "text" === e.type && (e.value = no(e.value));
                        }
                        Array.isArray(i) ? t.push(...i) : t.push(i);
                      }
                    }
                  }
                  return t;
                },
                applyData: nr,
                definitionById: r,
                footnoteById: i,
                footnoteCounts: new Map(),
                footnoteOrder: [],
                handlers: { ...t9, ...n.handlers },
                one: function (e, t) {
                  let n = e.type,
                    r = o.handlers[n];
                  if (ne.call(o.handlers, n) && r) return r(o, e, t);
                  if (
                    o.options.passThrough &&
                    o.options.passThrough.includes(n)
                  ) {
                    if ("children" in e) {
                      let { children: t, ...n } = e,
                        r = tG(n);
                      return (r.children = o.all(e)), r;
                    }
                    return tG(e);
                  }
                  return (
                    o.options.unknownHandler ||
                    function (e, t) {
                      let n = t.data || {},
                        r =
                          "value" in t &&
                          !(
                            ne.call(n, "hProperties") || ne.call(n, "hChildren")
                          )
                            ? { type: "text", value: t.value }
                            : {
                                type: "element",
                                tagName: "div",
                                properties: {},
                                children: e.all(t),
                              };
                      return e.patch(t, r), e.applyData(t, r);
                    }
                  )(o, e, t);
                },
                options: n,
                patch: nn,
                wrap: ni,
              };
            return (
              t6(e, function (e) {
                if (
                  "definition" === e.type ||
                  "footnoteDefinition" === e.type
                ) {
                  let t = "definition" === e.type ? r : i,
                    n = String(e.identifier).toUpperCase();
                  t.has(n) || t.set(n, e);
                }
              }),
              o
            );
          })(e, t),
          r = n.one(e, void 0),
          i = (function (e) {
            let t =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              n = e.options.footnoteBackContent || tZ,
              r = e.options.footnoteBackLabel || tQ,
              i = e.options.footnoteLabel || "Footnotes",
              o = e.options.footnoteLabelTagName || "h2",
              a = e.options.footnoteLabelProperties || {
                className: ["sr-only"],
              },
              l = [],
              s = -1;
            for (; ++s < e.footnoteOrder.length; ) {
              let i = e.footnoteById.get(e.footnoteOrder[s]);
              if (!i) continue;
              let o = e.all(i),
                a = String(i.identifier).toUpperCase(),
                c = tX(a.toLowerCase()),
                u = 0,
                f = [],
                p = e.footnoteCounts.get(a);
              for (; void 0 !== p && ++u <= p; ) {
                f.length > 0 && f.push({ type: "text", value: " " });
                let e = "string" == typeof n ? n : n(s, u);
                "string" == typeof e && (e = { type: "text", value: e }),
                  f.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: "#" + t + "fnref-" + c + (u > 1 ? "-" + u : ""),
                      dataFootnoteBackref: "",
                      ariaLabel: "string" == typeof r ? r : r(s, u),
                      className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(e) ? e : [e],
                  });
              }
              let d = o[o.length - 1];
              if (d && "element" === d.type && "p" === d.tagName) {
                let e = d.children[d.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : d.children.push({ type: "text", value: " " }),
                  d.children.push(...f);
              } else o.push(...f);
              let m = {
                type: "element",
                tagName: "li",
                properties: { id: t + "fn-" + c },
                children: e.wrap(o, !0),
              };
              e.patch(i, m), l.push(m);
            }
            if (0 !== l.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: o,
                    properties: { ...tG(a), id: "footnote-label" },
                    children: [{ type: "text", value: i }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(l, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(n),
          o = Array.isArray(r)
            ? { type: "root", children: r }
            : r || { type: "root", children: [] };
        return i && o.children.push({ type: "text", value: "\n" }, i), o;
      }
      function nl(e, t) {
        return e && "run" in e
          ? async function (n, r) {
              let i = na(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return na(n, { file: r, ...(e || t) });
            };
      }
      function ns(e) {
        if (e) throw e;
      }
      var nc = n(28392);
      function nu(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      let nf = {
        basename: function (e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          np(e);
          let r = 0,
            i = -1,
            o = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; o--; )
              if (47 === e.codePointAt(o)) {
                if (n) {
                  r = o + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = o + 1));
            return i < 0 ? "" : e.slice(r, i);
          }
          if (t === e) return "";
          let a = -1,
            l = t.length - 1;
          for (; o--; )
            if (47 === e.codePointAt(o)) {
              if (n) {
                r = o + 1;
                break;
              }
            } else
              a < 0 && ((n = !0), (a = o + 1)),
                l > -1 &&
                  (e.codePointAt(o) === t.codePointAt(l--)
                    ? l < 0 && (i = o)
                    : ((l = -1), (i = a)));
          return r === i ? (i = a) : i < 0 && (i = e.length), e.slice(r, i);
        },
        dirname: function (e) {
          let t;
          if ((np(e), 0 === e.length)) return ".";
          let n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.codePointAt(0)
            ? "//"
            : e.slice(0, n);
        },
        extname: function (e) {
          let t;
          np(e);
          let n = e.length,
            r = -1,
            i = 0,
            o = -1,
            a = 0;
          for (; n--; ) {
            let l = e.codePointAt(n);
            if (47 === l) {
              if (t) {
                i = n + 1;
                break;
              }
              continue;
            }
            r < 0 && ((t = !0), (r = n + 1)),
              46 === l
                ? o < 0
                  ? (o = n)
                  : 1 !== a && (a = 1)
                : o > -1 && (a = -1);
          }
          return o < 0 ||
            r < 0 ||
            0 === a ||
            (1 === a && o === r - 1 && o === i + 1)
            ? ""
            : e.slice(o, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            np(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t
            ? "."
            : (function (e) {
                np(e);
                let t = 47 === e.codePointAt(0),
                  n = (function (e, t) {
                    let n,
                      r,
                      i = "",
                      o = 0,
                      a = -1,
                      l = 0,
                      s = -1;
                    for (; ++s <= e.length; ) {
                      if (s < e.length) n = e.codePointAt(s);
                      else if (47 === n) break;
                      else n = 47;
                      if (47 === n) {
                        if (a === s - 1 || 1 === l);
                        else if (a !== s - 1 && 2 === l) {
                          if (
                            i.length < 2 ||
                            2 !== o ||
                            46 !== i.codePointAt(i.length - 1) ||
                            46 !== i.codePointAt(i.length - 2)
                          ) {
                            if (i.length > 2) {
                              if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                r < 0
                                  ? ((i = ""), (o = 0))
                                  : (o =
                                      (i = i.slice(0, r)).length -
                                      1 -
                                      i.lastIndexOf("/")),
                                  (a = s),
                                  (l = 0);
                                continue;
                              }
                            } else if (i.length > 0) {
                              (i = ""), (o = 0), (a = s), (l = 0);
                              continue;
                            }
                          }
                          t && ((i = i.length > 0 ? i + "/.." : ".."), (o = 2));
                        } else
                          i.length > 0
                            ? (i += "/" + e.slice(a + 1, s))
                            : (i = e.slice(a + 1, s)),
                            (o = s - a - 1);
                        (a = s), (l = 0);
                      } else 46 === n && l > -1 ? l++ : (l = -1);
                    }
                    return i;
                  })(e, !t);
                return (
                  0 !== n.length || t || (n = "."),
                  n.length > 0 &&
                    47 === e.codePointAt(e.length - 1) &&
                    (n += "/"),
                  t ? "/" + n : n
                );
              })(t);
        },
        sep: "/",
      };
      function np(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      let nd = {
        cwd: function () {
          return "/";
        },
      };
      function nm(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let nh = ["history", "path", "basename", "stem", "extname", "dirname"];
      class ng {
        constructor(e) {
          let t, n;
          (t = e
            ? nm(e)
              ? { path: e }
              : "string" == typeof e ||
                (function (e) {
                  return !!(
                    e &&
                    "object" == typeof e &&
                    "byteLength" in e &&
                    "byteOffset" in e
                  );
                })(e)
              ? { value: e }
              : e
            : {}),
            (this.cwd = "cwd" in t ? "" : nd.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let r = -1;
          for (; ++r < nh.length; ) {
            let e = nh[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) nh.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" == typeof this.path ? nf.basename(this.path) : void 0;
        }
        set basename(e) {
          nv(e, "basename"),
            ny(e, "basename"),
            (this.path = nf.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" == typeof this.path ? nf.dirname(this.path) : void 0;
        }
        set dirname(e) {
          nb(this.basename, "dirname"),
            (this.path = nf.join(e || "", this.basename));
        }
        get extname() {
          return "string" == typeof this.path ? nf.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((ny(e, "extname"), nb(this.dirname, "extname"), e)) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = nf.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          nm(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!nm(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`"
                );
                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin'
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                    let e = t.codePointAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters"
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            nv(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" == typeof this.path
            ? nf.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          nv(e, "stem"),
            ny(e, "stem"),
            (this.path = nf.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          let r = new et(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          return void 0 === this.value
            ? ""
            : "string" == typeof this.value
            ? this.value
            : new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function ny(e, t) {
        if (e && e.includes(nf.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + nf.sep + "`"
          );
      }
      function nv(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function nb(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      let nx = function (e) {
          let t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          return Object.setPrototypeOf(r, t), r;
        },
        nw = {}.hasOwnProperty;
      class nk extends nx {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                        "Expected function as last argument, not " + r
                      );
                    !(function i(o, ...a) {
                      let l = e[++n],
                        s = -1;
                      if (o) return void r(o);
                      for (; ++s < t.length; )
                        (null === a[s] || void 0 === a[s]) && (a[s] = t[s]);
                      (t = a),
                        l
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let o,
                                  a = e.length > t.length;
                                a && t.push(r);
                                try {
                                  o = e.apply(this, t);
                                } catch (e) {
                                  if (a && n) throw e;
                                  return r(e);
                                }
                                a ||
                                  (o && o.then && "function" == typeof o.then
                                    ? o.then(i, r)
                                    : o instanceof Error
                                    ? r(o)
                                    : i(o));
                              };
                              function r(e, ...i) {
                                n || ((n = !0), t(e, ...i));
                              }
                              function i(e) {
                                r(null, e);
                              }
                            })(
                              l,
                              i
                            )(...a)
                          : r(null, ...a);
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ("function" != typeof n)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + n
                      );
                    return e.push(n), t;
                  },
                };
              return t;
            })());
        }
        copy() {
          let e = new nk(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return e.data(nc(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (nC("data", this.frozen), (this.namespace[e] = t), this)
              : (nw.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (nC("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (this.frozen = !0), (this.freezeIndex = 1 / 0), this;
        }
        parse(e) {
          this.freeze();
          let t = nj(e),
            n = this.parser || this.Parser;
          return nE("parse", n), n(String(t), t);
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            nE("process", this.parser || this.Parser),
            nS("process", this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, i) {
            let o = nj(e),
              a = n.parse(o);
            function l(e, n) {
              e || !n ? i(e) : r ? r(n) : t(void 0, n);
            }
            n.run(a, o, function (e, t, r) {
              var i, o;
              if (e || !t || !r) return l(e);
              let a = n.stringify(t, r);
              "string" == typeof (i = a) ||
              ((o = i) &&
                "object" == typeof o &&
                "byteLength" in o &&
                "byteOffset" in o)
                ? (r.value = a)
                : (r.result = a),
                l(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            nE("processSync", this.parser || this.Parser),
            nS("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              (n = !0), ns(e), (t = r);
            }),
            nA("processSync", "process", n),
            t
          );
        }
        run(e, t, n) {
          nP(e), this.freeze();
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? i(void 0, n) : new Promise(i)
          );
          function i(i, o) {
            let a = nj(t);
            r.run(e, a, function (t, r, a) {
              let l = r || e;
              t ? o(t) : i ? i(l) : n(void 0, l, a);
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              ns(e), (n = t), (r = !0);
            }),
            nA("runSync", "run", r),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = nj(t),
            r = this.compiler || this.Compiler;
          return nS("stringify", r), nP(e), r(e, n);
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((nC("use", this.frozen), null == e));
          else if ("function" == typeof e) a(e, t);
          else if ("object" == typeof e) Array.isArray(e) ? o(e) : i(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function i(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            o(e.plugins),
              e.settings && (r.settings = nc(!0, r.settings, e.settings));
          }
          function o(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; ) {
                var n = e[t];
                if ("function" == typeof n) a(n, []);
                else if ("object" == typeof n)
                  if (Array.isArray(n)) {
                    let [e, ...t] = n;
                    a(e, t);
                  } else i(n);
                else throw TypeError("Expected usable value, not `" + n + "`");
              }
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function a(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...o] = t,
                a = n[i][1];
              nu(a) && nu(r) && (r = nc(!0, a, r)), (n[i] = [e, r, ...o]);
            }
          }
        }
      }
      let nO = new nk().freeze();
      function nE(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function nS(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function nC(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function nP(e) {
        if (!nu(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function nA(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function nj(e) {
        var t;
        return (t = e) &&
          "object" == typeof t &&
          "message" in t &&
          "messages" in t
          ? e
          : new ng(e);
      }
      let nz = [],
        nR = { allowDangerousHtml: !0 },
        nT = /^(https?|ircs?|mailto|xmpp)$/i,
        nI = [
          { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
          {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
          },
          {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
          },
          {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
          },
          {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
          },
          { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
          { from: "includeElementIndex", id: "#remove-includeelementindex" },
          {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
          { from: "linkTarget", id: "remove-linktarget" },
          {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
          },
          { from: "rawSourcePos", id: "#remove-rawsourcepos" },
          {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
          },
          { from: "source", id: "change-source-to-children", to: "children" },
          { from: "sourcePos", id: "#remove-sourcepos" },
          {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
          {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
        ];
      function nD(e) {
        let t = e.allowedElements,
          n = e.allowElement,
          r = e.children || "",
          i = e.className,
          a = e.components,
          l = e.disallowedElements,
          s = e.rehypePlugins || nz,
          c = e.remarkPlugins || nz,
          u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...nR } : nR,
          f = e.skipHtml,
          p = e.unwrapDisallowed,
          d = e.urlTransform || nN,
          m = nO().use(tH).use(c).use(nl, u).use(s),
          h = new ng();
        for (let t of ("string" == typeof r && (h.value = r), nI))
          Object.hasOwn(e, t.from) && (t.from, t.to && t.to, t.id);
        let g = m.parse(h),
          y = m.runSync(g, h);
        return (
          i &&
            (y = {
              type: "element",
              tagName: "div",
              properties: { className: i },
              children: "root" === y.type ? y.children : [y],
            }),
          t6(y, function (e, r, i) {
            if ("raw" === e.type && i && "number" == typeof r)
              return (
                f
                  ? i.children.splice(r, 1)
                  : (i.children[r] = { type: "text", value: e.value }),
                r
              );
            if ("element" === e.type) {
              let t;
              for (t in ey)
                if (Object.hasOwn(ey, t) && Object.hasOwn(e.properties, t)) {
                  let n = e.properties[t],
                    r = ey[t];
                  (null === r || r.includes(e.tagName)) &&
                    (e.properties[t] = d(String(n || ""), t, e));
                }
            }
            if ("element" === e.type) {
              let o = t ? !t.includes(e.tagName) : !!l && l.includes(e.tagName);
              if (
                (!o && n && "number" == typeof r && (o = !n(e, r, i)),
                o && i && "number" == typeof r)
              )
                return (
                  p && e.children
                    ? i.children.splice(r, 1, ...e.children)
                    : i.children.splice(r, 1),
                  r
                );
            }
          }),
          (function (e, t) {
            var n, r, i, o;
            let a;
            if (!t || void 0 === t.Fragment)
              throw TypeError("Expected `Fragment` in options");
            let l = t.filePath || void 0;
            if (t.development) {
              if ("function" != typeof t.jsxDEV)
                throw TypeError(
                  "Expected `jsxDEV` in options when `development: true`"
                );
              (n = l),
                (r = t.jsxDEV),
                (a = function (e, t, i, o) {
                  let a = Array.isArray(i.children),
                    l = G(e);
                  return r(
                    t,
                    i,
                    o,
                    a,
                    {
                      columnNumber: l ? l.column - 1 : void 0,
                      fileName: n,
                      lineNumber: l ? l.line : void 0,
                    },
                    void 0
                  );
                });
            } else {
              if ("function" != typeof t.jsx)
                throw TypeError("Expected `jsx` in production options");
              if ("function" != typeof t.jsxs)
                throw TypeError("Expected `jsxs` in production options");
              (i = t.jsx),
                (o = t.jsxs),
                (a = function (e, t, n, r) {
                  let a = Array.isArray(n.children) ? o : i;
                  return r ? a(t, n, r) : a(t, n);
                });
            }
            let s = {
                Fragment: t.Fragment,
                ancestors: [],
                components: t.components || {},
                create: a,
                elementAttributeNameCase: t.elementAttributeNameCase || "react",
                evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                filePath: l,
                ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                passKeys: !1 !== t.passKeys,
                passNode: t.passNode || !1,
                schema: "svg" === t.space ? _ : F,
                stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
              },
              c = ec(s, e, void 0);
            return c && "string" != typeof c
              ? c
              : s.create(e, s.Fragment, { children: c || void 0 }, void 0);
          })(y, {
            Fragment: o.Fragment,
            components: a,
            ignoreInvalidStyle: !0,
            jsx: o.jsx,
            jsxs: o.jsxs,
            passKeys: !0,
            passNode: !0,
          })
        );
      }
      function nN(e) {
        let t = e.indexOf(":"),
          n = e.indexOf("?"),
          r = e.indexOf("#"),
          i = e.indexOf("/");
        return -1 === t ||
          (-1 !== i && t > i) ||
          (-1 !== n && t > n) ||
          (-1 !== r && t > r) ||
          nT.test(e.slice(0, t))
          ? e
          : "";
      }
      let nL = function (e, t, n, r, i) {
          let o = nM(t);
          if (null != n && ("number" != typeof n || n < 0 || n === 1 / 0))
            throw Error("Expected positive finite `index`");
          if (null != r && (!r.type || !r.children))
            throw Error("Expected valid `parent`");
          if ((null == n) != (null == r))
            throw Error("Expected both `index` and `parent`");
          return !!nB(e) && o.call(i, e, n, r);
        },
        nM = function (e) {
          if (null == e) return n_;
          if ("string" == typeof e) {
            var t;
            return (
              (t = e),
              nF(function (e) {
                return e.tagName === t;
              })
            );
          }
          if ("object" == typeof e) {
            var n = e;
            let t = [],
              r = -1;
            for (; ++r < n.length; ) t[r] = nM(n[r]);
            return nF(function (...e) {
              let n = -1;
              for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
              return !1;
            });
          }
          if ("function" == typeof e) return nF(e);
          throw Error("Expected function, string, or array as `test`");
        };
      function nF(e) {
        return function (t, n, r) {
          return !!(
            nB(t) &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function n_(e) {
        return !!(
          e &&
          "object" == typeof e &&
          "type" in e &&
          "element" === e.type &&
          "tagName" in e &&
          "string" == typeof e.tagName
        );
      }
      function nB(e) {
        return (
          null !== e && "object" == typeof e && "type" in e && "tagName" in e
        );
      }
      let nH = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        nU = /^[a-zA-Z]:\\/,
        n$ = ["http", "https"],
        nW = ["nofollow"],
        nV = {};
      function nq(e) {
        let t = e || nV,
          n = t.protocols || n$,
          r = nM(t.test);
        return function (e) {
          t6(e, "element", function (e, i, o) {
            if (
              "a" === e.tagName &&
              "string" == typeof e.properties.href &&
              r(e, i, o)
            ) {
              let r = e.properties.href;
              if (
                !(function (e) {
                  if ("string" != typeof e)
                    throw TypeError(
                      `Expected a \`string\`, got \`${typeof e}\``
                    );
                  return !nU.test(e) && nH.test(e);
                })(r)
                  ? r.startsWith("//")
                  : n.includes(r.slice(0, r.indexOf(":")))
              ) {
                let n = nY(t.content, e),
                  r = n && !Array.isArray(n) ? [n] : n,
                  i = nY(t.rel, e) || nW,
                  o =
                    "string" == typeof i
                      ? (function (e) {
                          let t = String(e || "").trim();
                          return t ? t.split(/[ \t\n\r\f]+/g) : [];
                        })(i)
                      : i,
                  a = nY(t.target, e),
                  l = nY(t.properties, e);
                if (
                  (l && Object.assign(e.properties, tG(l)),
                  o.length > 0 && (e.properties.rel = [...o]),
                  a && (e.properties.target = a),
                  r)
                ) {
                  let n = nY(t.contentProperties, e) || {};
                  e.children.push({
                    type: "element",
                    tagName: "span",
                    properties: tG(n),
                    children: tG(r),
                  });
                }
              }
            }
          });
        };
      }
      function nY(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function nK(e, t, n) {
        let r = tJ((n || {}).ignore || []),
          i = (function (e) {
            let t = [];
            if (!Array.isArray(e))
              throw TypeError(
                "Expected find and replace tuple or list of tuples"
              );
            let n = !e[0] || Array.isArray(e[0]) ? e : [e],
              r = -1;
            for (; ++r < n.length; ) {
              var i;
              let e = n[r];
              t.push([
                "string" == typeof (i = e[0])
                  ? RegExp(
                      (function (e) {
                        if ("string" != typeof e)
                          throw TypeError("Expected a string");
                        return e
                          .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                          .replace(/-/g, "\\x2d");
                      })(i),
                      "g"
                    )
                  : i,
                (function (e) {
                  return "function" == typeof e
                    ? e
                    : function () {
                        return e;
                      };
                })(e[1]),
              ]);
            }
            return t;
          })(t),
          o = -1;
        for (; ++o < i.length; ) t3(e, "text", a);
        function a(e, t) {
          let n,
            a = -1;
          for (; ++a < t.length; ) {
            let e = t[a],
              i = n ? n.children : void 0;
            if (r(e, i ? i.indexOf(e) : void 0, n)) return;
            n = e;
          }
          if (n)
            return (function (e, t) {
              let n = t[t.length - 1],
                r = i[o][0],
                a = i[o][1],
                l = 0,
                s = n.children.indexOf(e),
                c = !1,
                u = [];
              r.lastIndex = 0;
              let f = r.exec(e.value);
              for (; f; ) {
                let n = f.index,
                  i = { index: f.index, input: f.input, stack: [...t, e] },
                  o = a(...f, i);
                if (
                  ("string" == typeof o &&
                    (o = o.length > 0 ? { type: "text", value: o } : void 0),
                  !1 === o
                    ? (r.lastIndex = n + 1)
                    : (l !== n &&
                        u.push({ type: "text", value: e.value.slice(l, n) }),
                      Array.isArray(o) ? u.push(...o) : o && u.push(o),
                      (l = n + f[0].length),
                      (c = !0)),
                  !r.global)
                )
                  break;
                f = r.exec(e.value);
              }
              return (
                c
                  ? (l < e.value.length &&
                      u.push({ type: "text", value: e.value.slice(l) }),
                    n.children.splice(s, 1, ...u))
                  : (u = [e]),
                s + u.length
              );
            })(e, t);
        }
      }
      function nG() {
        return { type: "break" };
      }
      function nX() {
        return function (e) {
          nK(e, [/\r?\n|\r/g, nG]);
        };
      }
      let nZ = {
          tokenize: function (e, t, n) {
            let r = 0;
            return function t(o) {
              return (87 === o || 119 === o) && r < 3
                ? (r++, e.consume(o), t)
                : 46 === o && 3 === r
                ? (e.consume(o), i)
                : n(o);
            };
            function i(e) {
              return null === e ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        nQ = {
          tokenize: function (e, t, n) {
            let r, i, o;
            return a;
            function a(t) {
              return 46 === t || 95 === t
                ? e.check(n0, s, l)(t)
                : null === t || eN(t) || eF(t) || (45 !== t && eM(t))
                ? s(t)
                : ((o = !0), e.consume(t), a);
            }
            function l(t) {
              return (
                95 === t ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), a
              );
            }
            function s(e) {
              return i || r || !o ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        nJ = {
          tokenize: function (e, t) {
            let n = 0,
              r = 0;
            return i;
            function i(a) {
              return 40 === a
                ? (n++, e.consume(a), i)
                : 41 === a && r < n
                ? o(a)
                : 33 === a ||
                  34 === a ||
                  38 === a ||
                  39 === a ||
                  41 === a ||
                  42 === a ||
                  44 === a ||
                  46 === a ||
                  58 === a ||
                  59 === a ||
                  60 === a ||
                  63 === a ||
                  93 === a ||
                  95 === a ||
                  126 === a
                ? e.check(n0, t, o)(a)
                : null === a || eN(a) || eF(a)
                ? t(a)
                : (e.consume(a), i);
            }
            function o(t) {
              return 41 === t && r++, e.consume(t), i;
            }
          },
          partial: !0,
        },
        n0 = {
          tokenize: function (e, t, n) {
            return r;
            function r(a) {
              return 33 === a ||
                34 === a ||
                39 === a ||
                41 === a ||
                42 === a ||
                44 === a ||
                46 === a ||
                58 === a ||
                59 === a ||
                63 === a ||
                95 === a ||
                126 === a
                ? (e.consume(a), r)
                : 38 === a
                ? (e.consume(a), o)
                : 93 === a
                ? (e.consume(a), i)
                : 60 === a || null === a || eN(a) || eF(a)
                ? t(a)
                : n(a);
            }
            function i(e) {
              return null === e || 40 === e || 91 === e || eN(e) || eF(e)
                ? t(e)
                : r(e);
            }
            function o(t) {
              return eP(t)
                ? (function t(i) {
                    return 59 === i
                      ? (e.consume(i), r)
                      : eP(i)
                      ? (e.consume(i), t)
                      : n(i);
                  })(t)
                : n(t);
            }
          },
          partial: !0,
        },
        n1 = {
          tokenize: function (e, t, n) {
            return function (t) {
              return e.consume(t), r;
            };
            function r(e) {
              return eA(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        n2 = {
          name: "wwwAutolink",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (87 !== t && 119 !== t) ||
                !n7.call(r, r.previous) ||
                rt(r.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkWww"),
                  e.check(nZ, e.attempt(nQ, e.attempt(nJ, i), n), n)(t));
            };
            function i(n) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: n7,
        },
        n3 = {
          name: "protocolAutolink",
          tokenize: function (e, t, n) {
            let r = this,
              i = "",
              o = !1;
            return function (t) {
              return (72 === t || 104 === t) &&
                n9.call(r, r.previous) &&
                !rt(r.events)
                ? (e.enter("literalAutolink"),
                  e.enter("literalAutolinkHttp"),
                  (i += String.fromCodePoint(t)),
                  e.consume(t),
                  a)
                : n(t);
            };
            function a(t) {
              if (eP(t) && i.length < 5)
                return (i += String.fromCodePoint(t)), e.consume(t), a;
              if (58 === t) {
                let n = i.toLowerCase();
                if ("http" === n || "https" === n) return e.consume(t), l;
              }
              return n(t);
            }
            function l(t) {
              return 47 === t ? ((e.consume(t), o) ? s : ((o = !0), l)) : n(t);
            }
            function s(t) {
              return null === t || ez(t) || eN(t) || eF(t) || eM(t)
                ? n(t)
                : e.attempt(nQ, e.attempt(nJ, c), n)(t);
            }
            function c(n) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: n9,
        },
        n6 = {
          name: "emailAutolink",
          tokenize: function (e, t, n) {
            let r,
              i,
              o = this;
            return function (t) {
              return !re(t) || !n8.call(o, o.previous) || rt(o.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkEmail"),
                  (function t(r) {
                    return re(r)
                      ? (e.consume(r), t)
                      : 64 === r
                      ? (e.consume(r), a)
                      : n(r);
                  })(t));
            };
            function a(t) {
              return 46 === t
                ? e.check(n1, s, l)(t)
                : 45 === t || 95 === t || eA(t)
                ? ((i = !0), e.consume(t), a)
                : s(t);
            }
            function l(t) {
              return e.consume(t), (r = !0), a;
            }
            function s(a) {
              return i && r && eP(o.previous)
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  t(a))
                : n(a);
            }
          },
          previous: n8,
        },
        n5 = {},
        n4 = 48;
      for (; n4 < 123; )
        (n5[n4] = n6), 58 == ++n4 ? (n4 = 65) : 91 === n4 && (n4 = 97);
      function n7(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          eN(e)
        );
      }
      function n9(e) {
        return !eP(e);
      }
      function n8(e) {
        return !(47 === e || re(e));
      }
      function re(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || eA(e);
      }
      function rt(e) {
        let t = e.length,
          n = !1;
        for (; t--; ) {
          let r = e[t][1];
          if (
            ("labelLink" === r.type || "labelImage" === r.type) &&
            !r._balanced
          ) {
            n = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !n &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          n
        );
      }
      function rn(e, t) {
        let n = String(e);
        if ("string" != typeof t) throw TypeError("Expected character");
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      (n5[43] = n6),
        (n5[45] = n6),
        (n5[46] = n6),
        (n5[95] = n6),
        (n5[72] = [n6, n3]),
        (n5[104] = [n6, n3]),
        (n5[87] = [n6, n2]),
        (n5[119] = [n6, n2]);
      let rr = "phrasing",
        ri = ["autolink", "link", "image", "label"];
      function ro(e) {
        this.enter({ type: "link", title: null, url: "", children: [] }, e);
      }
      function ra(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function rl(e) {
        this.config.exit.autolinkProtocol.call(this, e);
      }
      function rs(e) {
        this.config.exit.data.call(this, e);
        let t = this.stack[this.stack.length - 1];
        t.type, (t.url = "http://" + this.sliceSerialize(e));
      }
      function rc(e) {
        this.config.exit.autolinkEmail.call(this, e);
      }
      function ru(e) {
        this.exit(e);
      }
      function rf(e) {
        nK(
          e,
          [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, rp],
            [
              RegExp(
                "(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)",
                "gu"
              ),
              rd,
            ],
          ],
          { ignore: ["link", "linkReference"] }
        );
      }
      function rp(e, t, n, r, i) {
        let o = "";
        if (
          !rm(i) ||
          (/^w/i.test(t) && ((n = t + n), (t = ""), (o = "http://")),
          !(function (e) {
            let t = e.split(".");
            return !(
              t.length < 2 ||
              (t[t.length - 1] &&
                (/_/.test(t[t.length - 1]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
              (t[t.length - 2] &&
                (/_/.test(t[t.length - 2]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 2])))
            );
          })(n))
        )
          return !1;
        let a = (function (e) {
          let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!t) return [e, void 0];
          e = e.slice(0, t.index);
          let n = t[0],
            r = n.indexOf(")"),
            i = rn(e, "("),
            o = rn(e, ")");
          for (; -1 !== r && i > o; )
            (e += n.slice(0, r + 1)),
              (r = (n = n.slice(r + 1)).indexOf(")")),
              o++;
          return [e, n];
        })(n + r);
        if (!a[0]) return !1;
        let l = {
          type: "link",
          title: null,
          url: o + t + a[0],
          children: [{ type: "text", value: t + a[0] }],
        };
        return a[1] ? [l, { type: "text", value: a[1] }] : l;
      }
      function rd(e, t, n, r) {
        return (
          !(!rm(r, !0) || /[-\d_]$/.test(n)) && {
            type: "link",
            title: null,
            url: "mailto:" + t + "@" + n,
            children: [{ type: "text", value: t + "@" + n }],
          }
        );
      }
      function rm(e, t) {
        let n = e.input.charCodeAt(e.index - 1);
        return (0 === e.index || eF(n) || eM(n)) && (!t || 47 !== n);
      }
      let rh = nM(function (e) {
          return (
            "audio" === e.tagName ||
            "canvas" === e.tagName ||
            "embed" === e.tagName ||
            "iframe" === e.tagName ||
            "img" === e.tagName ||
            "math" === e.tagName ||
            "object" === e.tagName ||
            "picture" === e.tagName ||
            "svg" === e.tagName ||
            "video" === e.tagName
          );
        }),
        rg = [
          "address",
          "article",
          "aside",
          "blockquote",
          "body",
          "br",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "legend",
          "li",
          "li",
          "listing",
          "main",
          "menu",
          "nav",
          "ol",
          "optgroup",
          "option",
          "p",
          "plaintext",
          "pre",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "td",
          "tfoot",
          "th",
          "th",
          "thead",
          "tr",
          "ul",
          "wbr",
          "xmp",
        ],
        ry = ["button", "input", "select", "textarea"],
        rv = [
          "area",
          "base",
          "basefont",
          "dialog",
          "datalist",
          "head",
          "link",
          "meta",
          "noembed",
          "noframes",
          "param",
          "rp",
          "script",
          "source",
          "style",
          "template",
          "track",
          "title",
        ],
        rb = {},
        rx = tJ(["comment", "doctype"]);
      function rw(e) {
        return rh(e) || nL(e, ry);
      }
      function rk(e) {
        return " " === e || "\n" === e;
      }
      function rO(e) {
        let t = /\r?\n|\r/.exec(e);
        return t ? t[0] : " ";
      }
      function rE() {
        return " ";
      }
      function rS(e) {
        return function (t) {
          var n;
          !(function e(t, n) {
            if ("children" in t) {
              let r = { ...n };
              return (
                ("root" === t.type || nL(t, rg)) &&
                  ((r.before = !0), (r.after = !0)),
                (r.whitespace = (function (e, t) {
                  if ("tagName" in e && e.properties)
                    switch (e.tagName) {
                      case "listing":
                      case "plaintext":
                      case "script":
                      case "style":
                      case "xmp":
                        return "pre";
                      case "nobr":
                        return "nowrap";
                      case "pre":
                        return e.properties.wrap ? "pre-wrap" : "pre";
                      case "td":
                      case "th":
                        return e.properties.noWrap ? "nowrap" : t.whitespace;
                      case "textarea":
                        return "pre-wrap";
                    }
                  return t.whitespace;
                })(t, n)),
                (function (t, n) {
                  let r = n.before,
                    i = n.after,
                    o = t.children,
                    a = o.length,
                    l = -1;
                  for (; ++l < a; ) {
                    let t = e(o[l], {
                      ...n,
                      after: (function e(t, n, r) {
                        for (; ++n < t.length; ) {
                          var i;
                          let r = t[n],
                            o = (function (e) {
                              if ("element" === e.type) {
                                if (rw(e)) return !1;
                                if (
                                  (function (e) {
                                    return nL(e, rg);
                                  })(e)
                                )
                                  return !0;
                              } else if ("text" === e.type) {
                                if (!f(e)) return !1;
                              } else if (!rx(e)) return !1;
                            })(r);
                          if (
                            (void 0 === o &&
                              "children" in r &&
                              !(
                                ("element" === (i = r).type &&
                                  i.properties.hidden) ||
                                rx(i) ||
                                nL(i, rv)
                              ) &&
                              (o = e(r.children, -1)),
                            "boolean" == typeof o)
                          )
                            return o;
                        }
                        return r;
                      })(o, l, i),
                      before: r,
                    });
                    t.remove
                      ? (o.splice(l, 1), l--, a--)
                      : t.ignore || (r = t.stripAtStart),
                      rw(o[l]) && (r = !1);
                  }
                  return { ignore: !1, stripAtStart: !!(r || i), remove: !1 };
                })(t, r)
              );
            }
            if ("text" === t.type) {
              if ("normal" === n.whitespace) {
                var r = t,
                  i = n;
                let e = i.collapse(r.value),
                  o = { ignore: !1, stripAtStart: !1, remove: !1 },
                  a = 0,
                  l = e.length;
                return (
                  i.before && rk(e.charAt(0)) && a++,
                  a !== l &&
                    rk(e.charAt(l - 1)) &&
                    (i.after ? l-- : (o.stripAtStart = !0)),
                  a === l ? (o.remove = !0) : (r.value = e.slice(a, l)),
                  o
                );
              }
              "nowrap" === n.whitespace && (t.value = n.collapse(t.value));
            }
            return { ignore: rx(t), stripAtStart: !1, remove: !1 };
          })(t, {
            collapse:
              ((n = (e || rb).newlines ? rO : rE),
              function (e) {
                return String(e).replace(/[\t\n\v\f\r ]+/g, n);
              }),
            whitespace: "normal",
          });
        };
      }
      var rC = function () {
        return (rC =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      "function" == typeof SuppressedError && SuppressedError;
      var rP = [
          "attention",
          "autolink",
          "blankLine",
          "blockQuote",
          "characterEscape",
          "characterReference",
          "codeFenced",
          "codeIndented",
          "codeText",
          "content",
          "definition",
          "hardBreakEscape",
          "headingAtx",
          "htmlFlow",
          "htmlText",
          "labelEnd",
          "labelStartImage",
          "labelStartLink",
          "list",
          "setextUnderline",
          "thematicBreak",
        ],
        rA = [
          "attention",
          "autolink",
          "characterEscape",
          "labelEnd",
          "labelStartLink",
          "list",
        ];
      function rj(e) {
        void 0 === e && (e = {});
        var t = this.data(),
          n = e.allow || rA,
          r = rP.filter(function (e) {
            return !n.includes(e);
          });
        (t.micromarkExtensions || (t.micromarkExtensions = [])).push({
          disable: { null: r },
        });
      }
      function rz() {
        var e = this.data(),
          t = e.micromarkExtensions || (e.micromarkExtensions = []),
          n = e.fromMarkdownExtensions || (e.fromMarkdownExtensions = []),
          r = e.toMarkdownExtensions || (e.toMarkdownExtensions = []);
        t.push({ text: n5 }),
          n.push({
            transforms: [rf],
            enter: {
              literalAutolink: ro,
              literalAutolinkEmail: ra,
              literalAutolinkHttp: ra,
              literalAutolinkWww: ra,
            },
            exit: {
              literalAutolink: ru,
              literalAutolinkEmail: rc,
              literalAutolinkHttp: rl,
              literalAutolinkWww: rs,
            },
          }),
          r.push({
            unsafe: [
              {
                character: "@",
                before: "[+\\-.\\w]",
                after: "[\\-.\\w]",
                inConstruct: rr,
                notInConstruct: ri,
              },
              {
                character: ".",
                before: "[Ww]",
                after: "[\\-.\\w]",
                inConstruct: rr,
                notInConstruct: ri,
              },
              {
                character: ":",
                before: "[ps]",
                after: "\\/",
                inConstruct: rr,
                notInConstruct: ri,
              },
            ],
          });
      }
      var rR = function (e) {
        var t = e.children,
          n = e.allowedConstructs,
          r = (function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var i = 0, r = Object.getOwnPropertySymbols(e);
                i < r.length;
                i++
              )
                0 > t.indexOf(r[i]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]]);
            return n;
          })(e, ["children", "allowedConstructs"]);
        return (
          "string" == typeof t &&
            (t = t.replace(/\*{4,}|_{4,}/g, function (e) {
              return e
                .split("")
                .map(function (e) {
                  return "\\".concat(e);
                })
                .join("");
            })),
          (0, o.jsx)(
            nD,
            rC(
              {
                remarkPlugins: [[rj, { allow: n }], rz, nX],
                rehypePlugins: [
                  [nq, { target: "_blank", rel: ["noreferrer"] }],
                  rS,
                ],
              },
              r,
              { children: t }
            )
          )
        );
      };
    },
    98863: (e, t, n) => {
      "use strict";
      function r(e) {
        return Array.isArray(e) ? e : [e];
      }
      n.d(t, { n: () => r });
    },
  },
]);
