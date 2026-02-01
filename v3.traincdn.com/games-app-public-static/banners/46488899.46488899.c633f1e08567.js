"use strict";
(self.webpackChunkv3_microfrontend_banners =
  self.webpackChunkv3_microfrontend_banners || []).push([
  [46488899, 34860688],
  {
    34860688: (e, t, n) => {
      n.r(t),
        n.d(t, {
          DatetimeFormat: () => Nn,
          I18nD: () => yn,
          I18nInjectionKey: () => Cn,
          I18nN: () => On,
          I18nT: () => Tn,
          NumberFormat: () => En,
          Translation: () => hn,
          VERSION: () => Bt,
          castToVueI18n: () => wn,
          createI18n: () => Mn,
          useI18n: () => Sn,
          vTDirective: () => Pn,
        });
      const r = "undefined" != typeof window;
      const a = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
        o = (e, t, n) => l({ l: e, k: t, s: n }),
        l = (e) =>
          JSON.stringify(e)
            .replace(/\u2028/g, "\\u2028")
            .replace(/\u2029/g, "\\u2029")
            .replace(/\u0027/g, "\\u0027"),
        s = (e) => "number" == typeof e && isFinite(e),
        c = (e) => "[object Date]" === E(e),
        i = (e) => "[object RegExp]" === E(e),
        u = (e) => O(e) && 0 === Object.keys(e).length,
        f = Object.assign;
      let _;
      const m = () =>
        _ ||
        (_ =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : {});
      function p(e) {
        return e
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");
      }
      const d = Object.prototype.hasOwnProperty;
      function g(e, t) {
        return d.call(e, t);
      }
      const b = Array.isArray,
        v = (e) => "function" == typeof e,
        k = (e) => "string" == typeof e,
        L = (e) => "boolean" == typeof e,
        h = (e) => null !== e && "object" == typeof e,
        T = (e) => h(e) && v(e.then) && v(e.catch),
        I = Object.prototype.toString,
        E = (e) => I.call(e),
        O = (e) => {
          if (!h(e)) return !1;
          const t = Object.getPrototypeOf(e);
          return null === t || t.constructor === Object;
        };
      function N(e) {
        let t = e;
        return () => ++t;
      }
      function y(e, t) {
        "undefined" != typeof console &&
          (console.warn("[intlify] " + e), t && console.warn(t.stack));
      }
      const P = (e) => !h(e) || b(e);
      function F(e, t) {
        if (P(e) || P(t)) throw new Error("Invalid value");
        const n = [{ src: e, des: t }];
        for (; n.length; ) {
          const { src: e, des: t } = n.pop();
          Object.keys(e).forEach((r) => {
            h(e[r]) && !h(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : {}),
              P(t[r]) || P(e[r])
                ? (t[r] = e[r])
                : n.push({ src: e[r], des: t[r] });
          });
        }
      }
      function R(e, t, n) {
        const r = { start: e, end: t };
        return null != n && (r.source = n), r;
      }
      const A = /\{([0-9a-zA-Z]+)\}/g;
      function C(e, ...t) {
        return (
          1 === t.length && w(t[0]) && (t = t[0]),
          (t && t.hasOwnProperty) || (t = {}),
          e.replace(A, (e, n) => (t.hasOwnProperty(n) ? t[n] : ""))
        );
      }
      const M = Object.assign,
        S = (e) => "string" == typeof e,
        w = (e) => null !== e && "object" == typeof e;
      function D(e, t = "") {
        return e.reduce((e, n, r) => (0 === r ? e + n : e + t + n), "");
      }
      const x = 1,
        U = 2,
        W = { [x]: "Use modulo before '{{0}}'." };
      const $ = 1,
        V = 2,
        G = 3,
        H = 4,
        Y = 5,
        j = 6,
        B = 7,
        J = 8,
        X = 9,
        z = 10,
        K = 11,
        q = 12,
        Z = 13,
        Q = 14,
        ee = 15,
        te = 16,
        ne = 17,
        re = {
          [$]: "Expected token: '{0}'",
          [V]: "Invalid token in placeholder: '{0}'",
          [G]: "Unterminated single quote in placeholder",
          [H]: "Unknown escape sequence: \\{0}",
          [Y]: "Invalid unicode escape sequence: {0}",
          [j]: "Unbalanced closing brace",
          [B]: "Unterminated closing brace",
          [J]: "Empty placeholder",
          [X]: "Not allowed nest placeholder",
          [z]: "Invalid linked format",
          [K]: "Plural must have messages",
          [q]: "Unexpected empty linked modifier",
          [Z]: "Unexpected empty linked key",
          [Q]: "Unexpected lexical analysis in token: '{0}'",
          [ee]: "unhandled codegen node type: '{0}'",
          [te]: "unhandled mimifier node type: '{0}'",
        };
      function ae(e, t, n = {}) {
        const { domain: r, messages: a, args: o } = n,
          l = C((a || re)[e] || "", ...(o || [])),
          s = new SyntaxError(String(l));
        return (s.code = e), t && (s.location = t), (s.domain = r), s;
      }
      function oe(e) {
        throw e;
      }
      const le = " ",
        se = "\n",
        ce = String.fromCharCode(8232),
        ie = String.fromCharCode(8233);
      function ue(e) {
        const t = e;
        let n = 0,
          r = 1,
          a = 1,
          o = 0;
        const l = (e) => "\r" === t[e] && t[e + 1] === se,
          s = (e) => t[e] === ie,
          c = (e) => t[e] === ce,
          i = (e) => l(e) || ((e) => t[e] === se)(e) || s(e) || c(e),
          u = (e) => (l(e) || s(e) || c(e) ? se : t[e]);
        function f() {
          return (o = 0), i(n) && (r++, (a = 0)), l(n) && n++, n++, a++, t[n];
        }
        return {
          index: () => n,
          line: () => r,
          column: () => a,
          peekOffset: () => o,
          charAt: u,
          currentChar: () => u(n),
          currentPeek: () => u(n + o),
          next: f,
          peek: function () {
            return l(n + o) && o++, o++, t[n + o];
          },
          reset: function () {
            (n = 0), (r = 1), (a = 1), (o = 0);
          },
          resetPeek: function (e = 0) {
            o = e;
          },
          skipToPeek: function () {
            const e = n + o;
            for (; e !== n; ) f();
            o = 0;
          },
        };
      }
      const fe = void 0;
      function _e(e, t = {}) {
        const n = !1 !== t.location,
          r = ue(e),
          a = () => r.index(),
          o = () => {
            return (
              (e = r.line()),
              (t = r.column()),
              (n = r.index()),
              { line: e, column: t, offset: n }
            );
            var e, t, n;
          },
          l = o(),
          s = a(),
          c = {
            currentType: 14,
            offset: s,
            startLoc: l,
            endLoc: l,
            lastType: 14,
            lastOffset: s,
            lastStartLoc: l,
            lastEndLoc: l,
            braceNest: 0,
            inLinked: !1,
            text: "",
          },
          i = () => c,
          { onError: u } = t;
        function f(e, t, r, ...a) {
          const o = i();
          if (((t.column += r), (t.offset += r), u)) {
            const r = ae(e, n ? R(o.startLoc, t) : null, {
              domain: "tokenizer",
              args: a,
            });
            u(r);
          }
        }
        function _(e, t, r) {
          (e.endLoc = o()), (e.currentType = t);
          const a = { type: t };
          return (
            n && (a.loc = R(e.startLoc, e.endLoc)),
            null != r && (a.value = r),
            a
          );
        }
        const m = (e) => _(e, 14);
        function p(e, t) {
          return e.currentChar() === t ? (e.next(), t) : (f($, o(), 0, t), "");
        }
        function d(e) {
          let t = "";
          for (; e.currentPeek() === le || e.currentPeek() === se; )
            (t += e.currentPeek()), e.peek();
          return t;
        }
        function g(e) {
          const t = d(e);
          return e.skipToPeek(), t;
        }
        function b(e) {
          if (e === fe) return !1;
          const t = e.charCodeAt(0);
          return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || 95 === t;
        }
        function v(e, t) {
          const { currentType: n } = t;
          if (2 !== n) return !1;
          d(e);
          const r = (function (e) {
            if (e === fe) return !1;
            const t = e.charCodeAt(0);
            return t >= 48 && t <= 57;
          })("-" === e.currentPeek() ? e.peek() : e.currentPeek());
          return e.resetPeek(), r;
        }
        function k(e) {
          d(e);
          const t = "|" === e.currentPeek();
          return e.resetPeek(), t;
        }
        function L(e, t = !0) {
          const n = (t = !1, r = "", a = !1) => {
              const o = e.currentPeek();
              return "{" === o
                ? "%" !== r && t
                : "@" !== o && o
                ? "%" === o
                  ? (e.peek(), n(t, "%", !0))
                  : "|" === o
                  ? !("%" !== r && !a) || !(r === le || r === se)
                  : o === le
                  ? (e.peek(), n(!0, le, a))
                  : o !== se || (e.peek(), n(!0, se, a))
                : "%" === r || t;
            },
            r = n();
          return t && e.resetPeek(), r;
        }
        function h(e, t) {
          const n = e.currentChar();
          return n === fe ? fe : t(n) ? (e.next(), n) : null;
        }
        function T(e) {
          const t = e.charCodeAt(0);
          return (
            (t >= 97 && t <= 122) ||
            (t >= 65 && t <= 90) ||
            (t >= 48 && t <= 57) ||
            95 === t ||
            36 === t
          );
        }
        function I(e) {
          return h(e, T);
        }
        function E(e) {
          const t = e.charCodeAt(0);
          return (
            (t >= 97 && t <= 122) ||
            (t >= 65 && t <= 90) ||
            (t >= 48 && t <= 57) ||
            95 === t ||
            36 === t ||
            45 === t
          );
        }
        function O(e) {
          return h(e, E);
        }
        function N(e) {
          const t = e.charCodeAt(0);
          return t >= 48 && t <= 57;
        }
        function y(e) {
          return h(e, N);
        }
        function P(e) {
          const t = e.charCodeAt(0);
          return (
            (t >= 48 && t <= 57) ||
            (t >= 65 && t <= 70) ||
            (t >= 97 && t <= 102)
          );
        }
        function F(e) {
          return h(e, P);
        }
        function A(e) {
          let t = "",
            n = "";
          for (; (t = y(e)); ) n += t;
          return n;
        }
        function C(e) {
          let t = "";
          for (;;) {
            const n = e.currentChar();
            if ("{" === n || "}" === n || "@" === n || "|" === n || !n) break;
            if ("%" === n) {
              if (!L(e)) break;
              (t += n), e.next();
            } else if (n === le || n === se)
              if (L(e)) (t += n), e.next();
              else {
                if (k(e)) break;
                (t += n), e.next();
              }
            else (t += n), e.next();
          }
          return t;
        }
        function M(e) {
          return "'" !== e && e !== se;
        }
        function S(e) {
          const t = e.currentChar();
          switch (t) {
            case "\\":
            case "'":
              return e.next(), `\\${t}`;
            case "u":
              return w(e, t, 4);
            case "U":
              return w(e, t, 6);
            default:
              return f(H, o(), 0, t), "";
          }
        }
        function w(e, t, n) {
          p(e, t);
          let r = "";
          for (let a = 0; a < n; a++) {
            const n = F(e);
            if (!n) {
              f(Y, o(), 0, `\\${t}${r}${e.currentChar()}`);
              break;
            }
            r += n;
          }
          return `\\${t}${r}`;
        }
        function D(e) {
          return "{" !== e && "}" !== e && e !== le && e !== se;
        }
        function x(e) {
          g(e);
          const t = p(e, "|");
          return g(e), t;
        }
        function U(e, t) {
          let n = null;
          switch (e.currentChar()) {
            case "{":
              return (
                t.braceNest >= 1 && f(X, o(), 0),
                e.next(),
                (n = _(t, 2, "{")),
                g(e),
                t.braceNest++,
                n
              );
            case "}":
              return (
                t.braceNest > 0 && 2 === t.currentType && f(J, o(), 0),
                e.next(),
                (n = _(t, 3, "}")),
                t.braceNest--,
                t.braceNest > 0 && g(e),
                t.inLinked && 0 === t.braceNest && (t.inLinked = !1),
                n
              );
            case "@":
              return (
                t.braceNest > 0 && f(B, o(), 0),
                (n = W(e, t) || m(t)),
                (t.braceNest = 0),
                n
              );
            default: {
              let r = !0,
                a = !0,
                l = !0;
              if (k(e))
                return (
                  t.braceNest > 0 && f(B, o(), 0),
                  (n = _(t, 1, x(e))),
                  (t.braceNest = 0),
                  (t.inLinked = !1),
                  n
                );
              if (
                t.braceNest > 0 &&
                (5 === t.currentType ||
                  6 === t.currentType ||
                  7 === t.currentType)
              )
                return f(B, o(), 0), (t.braceNest = 0), K(e, t);
              if (
                (r = (function (e, t) {
                  const { currentType: n } = t;
                  if (2 !== n) return !1;
                  d(e);
                  const r = b(e.currentPeek());
                  return e.resetPeek(), r;
                })(e, t))
              )
                return (
                  (n = _(
                    t,
                    5,
                    (function (e) {
                      g(e);
                      let t = "",
                        n = "";
                      for (; (t = O(e)); ) n += t;
                      return e.currentChar() === fe && f(B, o(), 0), n;
                    })(e)
                  )),
                  g(e),
                  n
                );
              if ((a = v(e, t)))
                return (
                  (n = _(
                    t,
                    6,
                    (function (e) {
                      g(e);
                      let t = "";
                      return (
                        "-" === e.currentChar()
                          ? (e.next(), (t += `-${A(e)}`))
                          : (t += A(e)),
                        e.currentChar() === fe && f(B, o(), 0),
                        t
                      );
                    })(e)
                  )),
                  g(e),
                  n
                );
              if (
                (l = (function (e, t) {
                  const { currentType: n } = t;
                  if (2 !== n) return !1;
                  d(e);
                  const r = "'" === e.currentPeek();
                  return e.resetPeek(), r;
                })(e, t))
              )
                return (
                  (n = _(
                    t,
                    7,
                    (function (e) {
                      g(e), p(e, "'");
                      let t = "",
                        n = "";
                      for (; (t = h(e, M)); ) n += "\\" === t ? S(e) : t;
                      const r = e.currentChar();
                      return r === se || r === fe
                        ? (f(G, o(), 0), r === se && (e.next(), p(e, "'")), n)
                        : (p(e, "'"), n);
                    })(e)
                  )),
                  g(e),
                  n
                );
              if (!r && !a && !l)
                return (
                  (n = _(
                    t,
                    13,
                    (function (e) {
                      g(e);
                      let t = "",
                        n = "";
                      for (; (t = h(e, D)); ) n += t;
                      return n;
                    })(e)
                  )),
                  f(V, o(), 0, n.value),
                  g(e),
                  n
                );
              break;
            }
          }
          return n;
        }
        function W(e, t) {
          const { currentType: n } = t;
          let r = null;
          const a = e.currentChar();
          switch (
            ((8 !== n && 9 !== n && 12 !== n && 10 !== n) ||
              (a !== se && a !== le) ||
              f(z, o(), 0),
            a)
          ) {
            case "@":
              return e.next(), (r = _(t, 8, "@")), (t.inLinked = !0), r;
            case ".":
              return g(e), e.next(), _(t, 9, ".");
            case ":":
              return g(e), e.next(), _(t, 10, ":");
            default:
              return k(e)
                ? ((r = _(t, 1, x(e))), (t.braceNest = 0), (t.inLinked = !1), r)
                : (function (e, t) {
                    const { currentType: n } = t;
                    if (8 !== n) return !1;
                    d(e);
                    const r = "." === e.currentPeek();
                    return e.resetPeek(), r;
                  })(e, t) ||
                  (function (e, t) {
                    const { currentType: n } = t;
                    if (8 !== n && 12 !== n) return !1;
                    d(e);
                    const r = ":" === e.currentPeek();
                    return e.resetPeek(), r;
                  })(e, t)
                ? (g(e), W(e, t))
                : (function (e, t) {
                    const { currentType: n } = t;
                    if (9 !== n) return !1;
                    d(e);
                    const r = b(e.currentPeek());
                    return e.resetPeek(), r;
                  })(e, t)
                ? (g(e),
                  _(
                    t,
                    12,
                    (function (e) {
                      let t = "",
                        n = "";
                      for (; (t = I(e)); ) n += t;
                      return n;
                    })(e)
                  ))
                : (function (e, t) {
                    const { currentType: n } = t;
                    if (10 !== n) return !1;
                    const r = () => {
                        const t = e.currentPeek();
                        return "{" === t
                          ? b(e.peek())
                          : !(
                              "@" === t ||
                              "%" === t ||
                              "|" === t ||
                              ":" === t ||
                              "." === t ||
                              t === le ||
                              !t
                            ) && (t === se ? (e.peek(), r()) : L(e, !1));
                      },
                      a = r();
                    return e.resetPeek(), a;
                  })(e, t)
                ? (g(e),
                  "{" === a
                    ? U(e, t) || r
                    : _(
                        t,
                        11,
                        (function (e) {
                          const t = (n) => {
                            const r = e.currentChar();
                            return "{" !== r &&
                              "%" !== r &&
                              "@" !== r &&
                              "|" !== r &&
                              "(" !== r &&
                              ")" !== r &&
                              r
                              ? r === le
                                ? n
                                : ((n += r), e.next(), t(n))
                              : n;
                          };
                          return t("");
                        })(e)
                      ))
                : (8 === n && f(z, o(), 0),
                  (t.braceNest = 0),
                  (t.inLinked = !1),
                  K(e, t));
          }
        }
        function K(e, t) {
          let n = { type: 14 };
          if (t.braceNest > 0) return U(e, t) || m(t);
          if (t.inLinked) return W(e, t) || m(t);
          switch (e.currentChar()) {
            case "{":
              return U(e, t) || m(t);
            case "}":
              return f(j, o(), 0), e.next(), _(t, 3, "}");
            case "@":
              return W(e, t) || m(t);
            default: {
              if (k(e))
                return (
                  (n = _(t, 1, x(e))), (t.braceNest = 0), (t.inLinked = !1), n
                );
              const { isModulo: r, hasSpace: a } = (function (e) {
                const t = d(e),
                  n = "%" === e.currentPeek() && "{" === e.peek();
                return e.resetPeek(), { isModulo: n, hasSpace: t.length > 0 };
              })(e);
              if (r)
                return a
                  ? _(t, 0, C(e))
                  : _(
                      t,
                      4,
                      (function (e) {
                        g(e);
                        const t = e.currentChar();
                        return "%" !== t && f($, o(), 0, t), e.next(), "%";
                      })(e)
                    );
              if (L(e)) return _(t, 0, C(e));
              break;
            }
          }
          return n;
        }
        return {
          nextToken: function () {
            const { currentType: e, offset: t, startLoc: n, endLoc: l } = c;
            return (
              (c.lastType = e),
              (c.lastOffset = t),
              (c.lastStartLoc = n),
              (c.lastEndLoc = l),
              (c.offset = a()),
              (c.startLoc = o()),
              r.currentChar() === fe ? _(c, 14) : K(r, c)
            );
          },
          currentOffset: a,
          currentPosition: o,
          context: i,
        };
      }
      const me = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
      function pe(e, t, n) {
        switch (e) {
          case "\\\\":
            return "\\";
          case "\\'":
            return "'";
          default: {
            const e = parseInt(t || n, 16);
            return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
          }
        }
      }
      function de(e = {}) {
        const t = !1 !== e.location,
          { onError: n, onWarn: r } = e;
        function a(e, r, a, o, ...l) {
          const s = e.currentPosition();
          if (((s.offset += o), (s.column += o), n)) {
            const e = ae(r, t ? R(a, s) : null, { domain: "parser", args: l });
            n(e);
          }
        }
        function o(e, n, a, o, ...l) {
          const s = e.currentPosition();
          if (((s.offset += o), (s.column += o), r)) {
            const e = t ? R(a, s) : null;
            r(
              (function (e, t, ...n) {
                const r = C(W[e] || "", ...(n || [])),
                  a = { message: String(r), code: e };
                return t && (a.location = t), a;
              })(n, e, l)
            );
          }
        }
        function l(e, n, r) {
          const a = { type: e };
          return (
            t && ((a.start = n), (a.end = n), (a.loc = { start: r, end: r })), a
          );
        }
        function s(e, n, r, a) {
          a && (e.type = a), t && ((e.end = n), e.loc && (e.loc.end = r));
        }
        function c(e, t) {
          const n = e.context(),
            r = l(3, n.offset, n.startLoc);
          return (r.value = t), s(r, e.currentOffset(), e.currentPosition()), r;
        }
        function i(e, t) {
          const n = e.context(),
            { lastOffset: r, lastStartLoc: a } = n,
            o = l(5, r, a);
          return (
            (o.index = parseInt(t, 10)),
            e.nextToken(),
            s(o, e.currentOffset(), e.currentPosition()),
            o
          );
        }
        function u(e, t, n) {
          const r = e.context(),
            { lastOffset: a, lastStartLoc: o } = r,
            c = l(4, a, o);
          return (
            (c.key = t),
            !0 === n && (c.modulo = !0),
            e.nextToken(),
            s(c, e.currentOffset(), e.currentPosition()),
            c
          );
        }
        function f(e, t) {
          const n = e.context(),
            { lastOffset: r, lastStartLoc: a } = n,
            o = l(9, r, a);
          return (
            (o.value = t.replace(me, pe)),
            e.nextToken(),
            s(o, e.currentOffset(), e.currentPosition()),
            o
          );
        }
        function _(e) {
          const t = e.context(),
            n = l(6, t.offset, t.startLoc);
          let r = e.nextToken();
          if (9 === r.type) {
            const t = (function (e) {
              const t = e.nextToken(),
                n = e.context(),
                { lastOffset: r, lastStartLoc: o } = n,
                c = l(8, r, o);
              return 12 !== t.type
                ? (a(e, q, n.lastStartLoc, 0),
                  (c.value = ""),
                  s(c, r, o),
                  { nextConsumeToken: t, node: c })
                : (null == t.value && a(e, Q, n.lastStartLoc, 0, ge(t)),
                  (c.value = t.value || ""),
                  s(c, e.currentOffset(), e.currentPosition()),
                  { node: c });
            })(e);
            (n.modifier = t.node), (r = t.nextConsumeToken || e.nextToken());
          }
          switch (
            (10 !== r.type && a(e, Q, t.lastStartLoc, 0, ge(r)),
            (r = e.nextToken()),
            2 === r.type && (r = e.nextToken()),
            r.type)
          ) {
            case 11:
              null == r.value && a(e, Q, t.lastStartLoc, 0, ge(r)),
                (n.key = (function (e, t) {
                  const n = e.context(),
                    r = l(7, n.offset, n.startLoc);
                  return (
                    (r.value = t),
                    s(r, e.currentOffset(), e.currentPosition()),
                    r
                  );
                })(e, r.value || ""));
              break;
            case 5:
              null == r.value && a(e, Q, t.lastStartLoc, 0, ge(r)),
                (n.key = u(e, r.value || ""));
              break;
            case 6:
              null == r.value && a(e, Q, t.lastStartLoc, 0, ge(r)),
                (n.key = i(e, r.value || ""));
              break;
            case 7:
              null == r.value && a(e, Q, t.lastStartLoc, 0, ge(r)),
                (n.key = f(e, r.value || ""));
              break;
            default: {
              a(e, Z, t.lastStartLoc, 0);
              const o = e.context(),
                c = l(7, o.offset, o.startLoc);
              return (
                (c.value = ""),
                s(c, o.offset, o.startLoc),
                (n.key = c),
                s(n, o.offset, o.startLoc),
                { nextConsumeToken: r, node: n }
              );
            }
          }
          return s(n, e.currentOffset(), e.currentPosition()), { node: n };
        }
        function m(e) {
          const t = e.context(),
            n = l(
              2,
              1 === t.currentType ? e.currentOffset() : t.offset,
              1 === t.currentType ? t.endLoc : t.startLoc
            );
          n.items = [];
          let r = null,
            m = null;
          do {
            const l = r || e.nextToken();
            switch (((r = null), l.type)) {
              case 0:
                null == l.value && a(e, Q, t.lastStartLoc, 0, ge(l)),
                  n.items.push(c(e, l.value || ""));
                break;
              case 6:
                null == l.value && a(e, Q, t.lastStartLoc, 0, ge(l)),
                  n.items.push(i(e, l.value || ""));
                break;
              case 4:
                m = !0;
                break;
              case 5:
                null == l.value && a(e, Q, t.lastStartLoc, 0, ge(l)),
                  n.items.push(u(e, l.value || "", !!m)),
                  m && (o(e, x, t.lastStartLoc, 0, ge(l)), (m = null));
                break;
              case 7:
                null == l.value && a(e, Q, t.lastStartLoc, 0, ge(l)),
                  n.items.push(f(e, l.value || ""));
                break;
              case 8: {
                const t = _(e);
                n.items.push(t.node), (r = t.nextConsumeToken || null);
                break;
              }
            }
          } while (14 !== t.currentType && 1 !== t.currentType);
          return (
            s(
              n,
              1 === t.currentType ? t.lastOffset : e.currentOffset(),
              1 === t.currentType ? t.lastEndLoc : e.currentPosition()
            ),
            n
          );
        }
        function p(e) {
          const t = e.context(),
            { offset: n, startLoc: r } = t,
            o = m(e);
          return 14 === t.currentType
            ? o
            : (function (e, t, n, r) {
                const o = e.context();
                let c = 0 === r.items.length;
                const i = l(1, t, n);
                (i.cases = []), i.cases.push(r);
                do {
                  const t = m(e);
                  c || (c = 0 === t.items.length), i.cases.push(t);
                } while (14 !== o.currentType);
                return (
                  c && a(e, K, n, 0),
                  s(i, e.currentOffset(), e.currentPosition()),
                  i
                );
              })(e, n, r, o);
        }
        return {
          parse: function (n) {
            const r = _e(n, M({}, e)),
              o = r.context(),
              c = l(0, o.offset, o.startLoc);
            return (
              t && c.loc && (c.loc.source = n),
              (c.body = p(r)),
              e.onCacheKey && (c.cacheKey = e.onCacheKey(n)),
              14 !== o.currentType &&
                a(r, Q, o.lastStartLoc, 0, n[o.offset] || ""),
              s(c, r.currentOffset(), r.currentPosition()),
              c
            );
          },
        };
      }
      function ge(e) {
        if (14 === e.type) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "…" : t;
      }
      function be(e, t) {
        for (let n = 0; n < e.length; n++) ve(e[n], t);
      }
      function ve(e, t) {
        switch (e.type) {
          case 1:
            be(e.cases, t), t.helper("plural");
            break;
          case 2:
            be(e.items, t);
            break;
          case 6:
            ve(e.key, t), t.helper("linked"), t.helper("type");
            break;
          case 5:
            t.helper("interpolate"), t.helper("list");
            break;
          case 4:
            t.helper("interpolate"), t.helper("named");
        }
      }
      function ke(e, t = {}) {
        const n = (function (e) {
          const t = { ast: e, helpers: new Set() };
          return { context: () => t, helper: (e) => (t.helpers.add(e), e) };
        })(e);
        n.helper("normalize"), e.body && ve(e.body, n);
        const r = n.context();
        e.helpers = Array.from(r.helpers);
      }
      function Le(e) {
        if (1 === e.items.length) {
          const t = e.items[0];
          (3 !== t.type && 9 !== t.type) ||
            ((e.static = t.value), delete t.value);
        } else {
          const t = [];
          for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (3 !== r.type && 9 !== r.type) break;
            if (null == r.value) break;
            t.push(r.value);
          }
          if (t.length === e.items.length) {
            e.static = D(t);
            for (let t = 0; t < e.items.length; t++) {
              const n = e.items[t];
              (3 !== n.type && 9 !== n.type) || delete n.value;
            }
          }
        }
      }
      function he(e) {
        switch (((e.t = e.type), e.type)) {
          case 0: {
            const t = e;
            he(t.body), (t.b = t.body), delete t.body;
            break;
          }
          case 1: {
            const t = e,
              n = t.cases;
            for (let e = 0; e < n.length; e++) he(n[e]);
            (t.c = n), delete t.cases;
            break;
          }
          case 2: {
            const t = e,
              n = t.items;
            for (let e = 0; e < n.length; e++) he(n[e]);
            (t.i = n),
              delete t.items,
              t.static && ((t.s = t.static), delete t.static);
            break;
          }
          case 3:
          case 9:
          case 8:
          case 7: {
            const t = e;
            t.value && ((t.v = t.value), delete t.value);
            break;
          }
          case 6: {
            const t = e;
            he(t.key),
              (t.k = t.key),
              delete t.key,
              t.modifier &&
                (he(t.modifier), (t.m = t.modifier), delete t.modifier);
            break;
          }
          case 5: {
            const t = e;
            (t.i = t.index), delete t.index;
            break;
          }
          case 4: {
            const t = e;
            (t.k = t.key), delete t.key;
            break;
          }
          default:
            throw ae(te, null, { domain: "minifier", args: [e.type] });
        }
        delete e.type;
      }
      function Te(e, t) {
        const { helper: n } = e;
        switch (t.type) {
          case 0:
            !(function (e, t) {
              t.body ? Te(e, t.body) : e.push("null");
            })(e, t);
            break;
          case 1:
            !(function (e, t) {
              const { helper: n, needIndent: r } = e;
              if (t.cases.length > 1) {
                e.push(`${n("plural")}([`), e.indent(r());
                const a = t.cases.length;
                for (let n = 0; n < a && (Te(e, t.cases[n]), n !== a - 1); n++)
                  e.push(", ");
                e.deindent(r()), e.push("])");
              }
            })(e, t);
            break;
          case 2:
            !(function (e, t) {
              const { helper: n, needIndent: r } = e;
              e.push(`${n("normalize")}([`), e.indent(r());
              const a = t.items.length;
              for (let o = 0; o < a && (Te(e, t.items[o]), o !== a - 1); o++)
                e.push(", ");
              e.deindent(r()), e.push("])");
            })(e, t);
            break;
          case 6:
            !(function (e, t) {
              const { helper: n } = e;
              e.push(`${n("linked")}(`),
                Te(e, t.key),
                t.modifier
                  ? (e.push(", "), Te(e, t.modifier), e.push(", _type"))
                  : e.push(", undefined, _type"),
                e.push(")");
            })(e, t);
            break;
          case 8:
          case 7:
          case 9:
          case 3:
            e.push(JSON.stringify(t.value), t);
            break;
          case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
          case 4:
            e.push(
              `${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,
              t
            );
            break;
          default:
            throw ae(ee, null, { domain: "parser", args: [t.type] });
        }
      }
      function Ie(e, t = {}) {
        const n = M({}, t),
          r = !!n.jit,
          a = !!n.minify,
          o = null == n.optimize || n.optimize,
          l = de(n).parse(e);
        return r
          ? (o &&
              (function (e) {
                const t = e.body;
                2 === t.type ? Le(t) : t.cases.forEach((e) => Le(e));
              })(l),
            a && he(l),
            { ast: l, code: "" })
          : (ke(l, n),
            ((e, t = {}) => {
              const n = S(t.mode) ? t.mode : "normal",
                r = S(t.filename) ? t.filename : "message.intl",
                a = !!t.sourceMap,
                o =
                  null != t.breakLineCode
                    ? t.breakLineCode
                    : "arrow" === n
                    ? ";"
                    : "\n",
                l = t.needIndent ? t.needIndent : "arrow" !== n,
                s = e.helpers || [],
                c = (function (e, t) {
                  const {
                      sourceMap: n,
                      filename: r,
                      breakLineCode: a,
                      needIndent: o,
                    } = t,
                    l = !1 !== t.location,
                    s = {
                      filename: r,
                      code: "",
                      column: 1,
                      line: 1,
                      offset: 0,
                      map: void 0,
                      breakLineCode: a,
                      needIndent: o,
                      indentLevel: 0,
                    };
                  function c(e, t) {
                    s.code += e;
                  }
                  function i(e, t = !0) {
                    const n = t ? a : "";
                    c(o ? n + "  ".repeat(e) : n);
                  }
                  return (
                    l && e.loc && (s.source = e.loc.source),
                    {
                      context: () => s,
                      push: c,
                      indent: function (e = !0) {
                        const t = ++s.indentLevel;
                        e && i(t);
                      },
                      deindent: function (e = !0) {
                        const t = --s.indentLevel;
                        e && i(t);
                      },
                      newline: function () {
                        i(s.indentLevel);
                      },
                      helper: (e) => `_${e}`,
                      needIndent: () => s.needIndent,
                    }
                  );
                })(e, {
                  mode: n,
                  filename: r,
                  sourceMap: a,
                  breakLineCode: o,
                  needIndent: l,
                });
              c.push(
                "normal" === n ? "function __msg__ (ctx) {" : "(ctx) => {"
              ),
                c.indent(l),
                s.length > 0 &&
                  (c.push(
                    `const { ${D(
                      s.map((e) => `${e}: _${e}`),
                      ", "
                    )} } = ctx`
                  ),
                  c.newline()),
                c.push("return "),
                Te(c, e),
                c.deindent(l),
                c.push("}"),
                delete e.helpers;
              const { code: i, map: u } = c.context();
              return { ast: e, code: i, map: u ? u.toJSON() : void 0 };
            })(l, n));
      }
      const Ee = [];
      (Ee[0] = { w: [0], i: [3, 0], "[": [4], o: [7] }),
        (Ee[1] = { w: [1], ".": [2], "[": [4], o: [7] }),
        (Ee[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
        (Ee[3] = {
          i: [3, 0],
          0: [3, 0],
          w: [1, 1],
          ".": [2, 1],
          "[": [4, 1],
          o: [7, 1],
        }),
        (Ee[4] = {
          "'": [5, 0],
          '"': [6, 0],
          "[": [4, 2],
          "]": [1, 3],
          o: 8,
          l: [4, 0],
        }),
        (Ee[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
        (Ee[6] = { '"': [4, 0], o: 8, l: [6, 0] });
      const Oe = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
      function Ne(e) {
        if (null == e) return "o";
        switch (e.charCodeAt(0)) {
          case 91:
          case 93:
          case 46:
          case 34:
          case 39:
            return e;
          case 95:
          case 36:
          case 45:
            return "i";
          case 9:
          case 10:
          case 13:
          case 160:
          case 65279:
          case 8232:
          case 8233:
            return "w";
        }
        return "i";
      }
      function ye(e) {
        const t = e.trim();
        return (
          ("0" !== e.charAt(0) || !isNaN(parseInt(e))) &&
          ((n = t),
          Oe.test(n)
            ? (function (e) {
                const t = e.charCodeAt(0);
                return t !== e.charCodeAt(e.length - 1) ||
                  (34 !== t && 39 !== t)
                  ? e
                  : e.slice(1, -1);
              })(t)
            : "*" + t)
        );
        var n;
      }
      const Pe = new Map();
      function Fe(e, t) {
        return h(e) ? e[t] : null;
      }
      const Re = (e) => e,
        Ae = (e) => "",
        Ce = "text",
        Me = (e) =>
          0 === e.length
            ? ""
            : (function (e, t = "") {
                return e.reduce((e, n, r) => (0 === r ? e + n : e + t + n), "");
              })(e),
        Se = (e) =>
          null == e
            ? ""
            : b(e) || (O(e) && e.toString === I)
            ? JSON.stringify(e, null, 2)
            : String(e);
      function we(e, t) {
        return (
          (e = Math.abs(e)),
          2 === t ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
        );
      }
      function De(e = {}) {
        const t = e.locale,
          n = (function (e) {
            const t = s(e.pluralIndex) ? e.pluralIndex : -1;
            return e.named && (s(e.named.count) || s(e.named.n))
              ? s(e.named.count)
                ? e.named.count
                : s(e.named.n)
                ? e.named.n
                : t
              : t;
          })(e),
          r =
            h(e.pluralRules) && k(t) && v(e.pluralRules[t])
              ? e.pluralRules[t]
              : we,
          a = h(e.pluralRules) && k(t) && v(e.pluralRules[t]) ? we : void 0,
          o = e.list || [],
          l = e.named || {};
        s(e.pluralIndex) &&
          (function (e, t) {
            t.count || (t.count = e), t.n || (t.n = e);
          })(n, l);
        function c(t) {
          const n = v(e.messages)
            ? e.messages(t)
            : !!h(e.messages) && e.messages[t];
          return n || (e.parent ? e.parent.message(t) : Ae);
        }
        const i =
            O(e.processor) && v(e.processor.normalize)
              ? e.processor.normalize
              : Me,
          u =
            O(e.processor) && v(e.processor.interpolate)
              ? e.processor.interpolate
              : Se,
          _ = {
            list: (e) => o[e],
            named: (e) => l[e],
            plural: (e) => e[r(n, e.length, a)],
            linked: (t, ...n) => {
              const [r, a] = n;
              let o = "text",
                l = "";
              1 === n.length
                ? h(r)
                  ? ((l = r.modifier || l), (o = r.type || o))
                  : k(r) && (l = r || l)
                : 2 === n.length &&
                  (k(r) && (l = r || l), k(a) && (o = a || o));
              const s = c(t)(_),
                i = "vnode" === o && b(s) && l ? s[0] : s;
              return l ? ((u = l), e.modifiers ? e.modifiers[u] : Re)(i, o) : i;
              var u;
            },
            message: c,
            type: O(e.processor) && k(e.processor.type) ? e.processor.type : Ce,
            interpolate: u,
            normalize: i,
            values: f({}, o, l),
          };
        return _;
      }
      let xe = null;
      const Ue = We("function:translate");
      function We(e) {
        return (t) => xe && xe.emit(e, t);
      }
      const $e = U,
        Ve = N($e),
        Ge = {
          NOT_FOUND_KEY: $e,
          FALLBACK_TO_TRANSLATE: Ve(),
          CANNOT_FORMAT_NUMBER: Ve(),
          FALLBACK_TO_NUMBER_FORMAT: Ve(),
          CANNOT_FORMAT_DATE: Ve(),
          FALLBACK_TO_DATE_FORMAT: Ve(),
          EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Ve(),
          __EXTEND_POINT__: Ve(),
        };
      const He = ne,
        Ye = N(He),
        je = {
          INVALID_ARGUMENT: He,
          INVALID_DATE_ARGUMENT: Ye(),
          INVALID_ISO_DATE_ARGUMENT: Ye(),
          NOT_SUPPORT_NON_STRING_MESSAGE: Ye(),
          NOT_SUPPORT_LOCALE_PROMISE_VALUE: Ye(),
          NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Ye(),
          NOT_SUPPORT_LOCALE_TYPE: Ye(),
          __EXTEND_POINT__: Ye(),
        };
      function Be(e) {
        return ae(e, null, void 0);
      }
      je.INVALID_ARGUMENT,
        je.INVALID_DATE_ARGUMENT,
        je.INVALID_ISO_DATE_ARGUMENT,
        je.NOT_SUPPORT_NON_STRING_MESSAGE,
        je.NOT_SUPPORT_LOCALE_PROMISE_VALUE,
        je.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION,
        je.NOT_SUPPORT_LOCALE_TYPE;
      function Je(e, t) {
        return null != t.locale ? ze(t.locale) : ze(e.locale);
      }
      let Xe;
      function ze(e) {
        if (k(e)) return e;
        if (v(e)) {
          if (e.resolvedOnce && null != Xe) return Xe;
          if ("Function" === e.constructor.name) {
            const t = e();
            if (T(t)) throw Be(je.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return (Xe = t);
          }
          throw Be(je.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
        }
        throw Be(je.NOT_SUPPORT_LOCALE_TYPE);
      }
      function Ke(e, t, n) {
        return [
          ...new Set([
            n,
            ...(b(t) ? t : h(t) ? Object.keys(t) : k(t) ? [t] : [n]),
          ]),
        ];
      }
      function qe(e, t, n) {
        const r = k(n) ? n : rt,
          a = e;
        a.__localeChainCache || (a.__localeChainCache = new Map());
        let o = a.__localeChainCache.get(r);
        if (!o) {
          o = [];
          let e = [n];
          for (; b(e); ) e = Ze(o, e, t);
          const l = b(t) || !O(t) ? t : t.default ? t.default : null;
          (e = k(l) ? [l] : l),
            b(e) && Ze(o, e, !1),
            a.__localeChainCache.set(r, o);
        }
        return o;
      }
      function Ze(e, t, n) {
        let r = !0;
        for (let a = 0; a < t.length && L(r); a++) {
          const o = t[a];
          k(o) && (r = Qe(e, t[a], n));
        }
        return r;
      }
      function Qe(e, t, n) {
        let r;
        const a = t.split("-");
        do {
          (r = et(e, a.join("-"), n)), a.splice(-1, 1);
        } while (a.length && !0 === r);
        return r;
      }
      function et(e, t, n) {
        let r = !1;
        if (!e.includes(t) && ((r = !0), t)) {
          r = "!" !== t[t.length - 1];
          const a = t.replace(/!/g, "");
          e.push(a), (b(n) || O(n)) && n[a] && (r = n[a]);
        }
        return r;
      }
      const tt = "9.14.1",
        nt = -1,
        rt = "en-US",
        at = "",
        ot = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
      let lt, st, ct;
      function it(e) {
        lt = e;
      }
      let ut = null;
      const ft = (e) => {
          ut = e;
        },
        _t = () => ut;
      let mt = null;
      const pt = (e) => {
          mt = e;
        },
        dt = () => mt;
      let gt = 0;
      function bt(e = {}) {
        const t = v(e.onWarn) ? e.onWarn : y,
          n = k(e.version) ? e.version : tt,
          r = k(e.locale) || v(e.locale) ? e.locale : rt,
          a = v(r) ? rt : r,
          o =
            b(e.fallbackLocale) ||
            O(e.fallbackLocale) ||
            k(e.fallbackLocale) ||
            !1 === e.fallbackLocale
              ? e.fallbackLocale
              : a,
          l = O(e.messages) ? e.messages : { [a]: {} },
          s = O(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} },
          c = O(e.numberFormats) ? e.numberFormats : { [a]: {} },
          u = f({}, e.modifiers || {}, {
            upper: (e, t) =>
              "text" === t && k(e)
                ? e.toUpperCase()
                : "vnode" === t && h(e) && "__v_isVNode" in e
                ? e.children.toUpperCase()
                : e,
            lower: (e, t) =>
              "text" === t && k(e)
                ? e.toLowerCase()
                : "vnode" === t && h(e) && "__v_isVNode" in e
                ? e.children.toLowerCase()
                : e,
            capitalize: (e, t) =>
              "text" === t && k(e)
                ? ot(e)
                : "vnode" === t && h(e) && "__v_isVNode" in e
                ? ot(e.children)
                : e,
          }),
          _ = e.pluralRules || {},
          m = v(e.missing) ? e.missing : null,
          p = (!L(e.missingWarn) && !i(e.missingWarn)) || e.missingWarn,
          d = (!L(e.fallbackWarn) && !i(e.fallbackWarn)) || e.fallbackWarn,
          g = !!e.fallbackFormat,
          T = !!e.unresolving,
          I = v(e.postTranslation) ? e.postTranslation : null,
          E = O(e.processor) ? e.processor : null,
          N = !L(e.warnHtmlMessage) || e.warnHtmlMessage,
          P = !!e.escapeParameter,
          F = v(e.messageCompiler) ? e.messageCompiler : lt;
        const R = v(e.messageResolver) ? e.messageResolver : st || Fe,
          A = v(e.localeFallbacker) ? e.localeFallbacker : ct || Ke,
          C = h(e.fallbackContext) ? e.fallbackContext : void 0,
          M = e,
          S = h(M.__datetimeFormatters) ? M.__datetimeFormatters : new Map(),
          w = h(M.__numberFormatters) ? M.__numberFormatters : new Map(),
          D = h(M.__meta) ? M.__meta : {};
        gt++;
        const x = {
          version: n,
          cid: gt,
          locale: r,
          fallbackLocale: o,
          messages: l,
          modifiers: u,
          pluralRules: _,
          missing: m,
          missingWarn: p,
          fallbackWarn: d,
          fallbackFormat: g,
          unresolving: T,
          postTranslation: I,
          processor: E,
          warnHtmlMessage: N,
          escapeParameter: P,
          messageCompiler: F,
          messageResolver: R,
          localeFallbacker: A,
          fallbackContext: C,
          onWarn: t,
          __meta: D,
        };
        return (
          (x.datetimeFormats = s),
          (x.numberFormats = c),
          (x.__datetimeFormatters = S),
          (x.__numberFormatters = w),
          __INTLIFY_PROD_DEVTOOLS__ &&
            (function (e, t, n) {
              xe &&
                xe.emit("i18n:init", {
                  timestamp: Date.now(),
                  i18n: e,
                  version: t,
                  meta: n,
                });
            })(x, n, D),
          x
        );
      }
      function vt(e, t, n, r, a) {
        const { missing: o, onWarn: l } = e;
        if (null !== o) {
          const r = o(e, n, t, a);
          return k(r) ? r : t;
        }
        return t;
      }
      function kt(e, t, n) {
        (e.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
      }
      function Lt(e, t) {
        return e !== t && e.split("-")[0] === t.split("-")[0];
      }
      function ht(e, t) {
        const n = t.indexOf(e);
        if (-1 === n) return !1;
        for (let r = n + 1; r < t.length; r++) if (Lt(e, t[r])) return !0;
        return !1;
      }
      function Tt(e) {
        return (t) =>
          (function (e, t) {
            const n = t.b || t.body;
            if (1 === (n.t || n.type)) {
              const t = n,
                r = t.c || t.cases;
              return e.plural(r.reduce((t, n) => [...t, It(e, n)], []));
            }
            return It(e, n);
          })(t, e);
      }
      function It(e, t) {
        const n = t.s || t.static;
        if (n) return "text" === e.type ? n : e.normalize([n]);
        {
          const n = (t.i || t.items).reduce((t, n) => [...t, Et(e, n)], []);
          return e.normalize(n);
        }
      }
      function Et(e, t) {
        const n = t.t || t.type;
        switch (n) {
          case 3: {
            const e = t;
            return e.v || e.value;
          }
          case 9: {
            const e = t;
            return e.v || e.value;
          }
          case 4: {
            const n = t;
            return e.interpolate(e.named(n.k || n.key));
          }
          case 5: {
            const n = t;
            return e.interpolate(e.list(null != n.i ? n.i : n.index));
          }
          case 6: {
            const n = t,
              r = n.m || n.modifier;
            return e.linked(Et(e, n.k || n.key), r ? Et(e, r) : void 0, e.type);
          }
          case 7: {
            const e = t;
            return e.v || e.value;
          }
          case 8: {
            const e = t;
            return e.v || e.value;
          }
          default:
            throw new Error(`unhandled node type on format message part: ${n}`);
        }
      }
      const Ot = (e) => e;
      let Nt = Object.create(null);
      const yt = (e) =>
        h(e) && (0 === e.t || 0 === e.type) && ("b" in e || "body" in e);
      function Pt(e, t = {}) {
        let n = !1;
        const r = t.onError || oe;
        return (
          (t.onError = (e) => {
            (n = !0), r(e);
          }),
          { ...Ie(e, t), detectError: n }
        );
      }
      const Ft = (e, t) => {
        if (!k(e)) throw Be(je.NOT_SUPPORT_NON_STRING_MESSAGE);
        {
          !L(t.warnHtmlMessage) || t.warnHtmlMessage;
          const n = (t.onCacheKey || Ot)(e),
            r = Nt[n];
          if (r) return r;
          const { code: a, detectError: o } = Pt(e, t),
            l = new Function(`return ${a}`)();
          return o ? l : (Nt[n] = l);
        }
      };
      const Rt = () => "",
        At = (e) => v(e);
      function Ct(e, ...t) {
        const {
            fallbackFormat: n,
            postTranslation: r,
            unresolving: a,
            messageCompiler: o,
            fallbackLocale: l,
            messages: c,
          } = e,
          [i, u] = wt(...t),
          _ = L(u.missingWarn) ? u.missingWarn : e.missingWarn,
          m = L(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
          d = L(u.escapeParameter) ? u.escapeParameter : e.escapeParameter,
          g = !!u.resolvedMessage,
          v =
            k(u.default) || L(u.default)
              ? L(u.default)
                ? o
                  ? i
                  : () => i
                : u.default
              : n
              ? o
                ? i
                : () => i
              : "",
          T = n || "" !== v,
          I = Je(e, u);
        d &&
          (function (e) {
            b(e.list)
              ? (e.list = e.list.map((e) => (k(e) ? p(e) : e)))
              : h(e.named) &&
                Object.keys(e.named).forEach((t) => {
                  k(e.named[t]) && (e.named[t] = p(e.named[t]));
                });
          })(u);
        let [E, O, N] = g ? [i, I, c[I] || {}] : Mt(e, i, I, l, m, _),
          y = E,
          P = i;
        if (
          (g || k(y) || yt(y) || At(y) || (T && ((y = v), (P = y))),
          !(g || ((k(y) || yt(y) || At(y)) && k(O))))
        )
          return a ? nt : i;
        let F = !1;
        const R = At(y)
          ? y
          : St(e, i, O, y, P, () => {
              F = !0;
            });
        if (F) return y;
        const A = (function (e, t, n, r) {
            const {
                modifiers: a,
                pluralRules: o,
                messageResolver: l,
                fallbackLocale: c,
                fallbackWarn: i,
                missingWarn: u,
                fallbackContext: f,
              } = e,
              _ = (r) => {
                let a = l(n, r);
                if (null == a && f) {
                  const [, , e] = Mt(f, r, t, c, i, u);
                  a = l(e, r);
                }
                if (k(a) || yt(a)) {
                  let n = !1;
                  const o = St(e, r, t, a, r, () => {
                    n = !0;
                  });
                  return n ? Rt : o;
                }
                return At(a) ? a : Rt;
              },
              m = { locale: t, modifiers: a, pluralRules: o, messages: _ };
            e.processor && (m.processor = e.processor);
            r.list && (m.list = r.list);
            r.named && (m.named = r.named);
            s(r.plural) && (m.pluralIndex = r.plural);
            return m;
          })(e, O, N, u),
          C = (function (e, t, n) {
            0;
            const r = t(n);
            0;
            return r;
          })(0, R, De(A)),
          M = r ? r(C, i) : C;
        if (__INTLIFY_PROD_DEVTOOLS__) {
          const t = {
            timestamp: Date.now(),
            key: k(i) ? i : At(y) ? y.key : "",
            locale: O || (At(y) ? y.locale : ""),
            format: k(y) ? y : At(y) ? y.source : "",
            message: M,
          };
          (t.meta = f({}, e.__meta, _t() || {})), Ue(t);
        }
        return M;
      }
      function Mt(e, t, n, r, a, o) {
        const {
            messages: l,
            onWarn: s,
            messageResolver: c,
            localeFallbacker: i,
          } = e,
          u = i(e, r, n);
        let f,
          _ = {},
          m = null,
          p = n,
          d = null;
        for (let g = 0; g < u.length; g++) {
          (f = d = u[g]), (_ = l[f] || {});
          if ((null === (m = c(_, t)) && (m = _[t]), k(m) || yt(m) || At(m)))
            break;
          if (!ht(f, u)) {
            const n = vt(e, t, f, 0, "translate");
            n !== t && (m = n);
          }
          p = d;
        }
        return [m, f, _];
      }
      function St(e, t, n, r, a, l) {
        const { messageCompiler: s, warnHtmlMessage: c } = e;
        if (At(r)) {
          const e = r;
          return (e.locale = e.locale || n), (e.key = e.key || t), e;
        }
        if (null == s) {
          const e = () => r;
          return (e.locale = n), (e.key = t), e;
        }
        const i = s(
          r,
          (function (e, t, n, r, a, l) {
            return {
              locale: t,
              key: n,
              warnHtmlMessage: a,
              onError: (e) => {
                throw (l && l(e), e);
              },
              onCacheKey: (e) => o(t, n, e),
            };
          })(0, n, a, 0, c, l)
        );
        return (i.locale = n), (i.key = t), (i.source = r), i;
      }
      function wt(...e) {
        const [t, n, r] = e,
          a = {};
        if (!(k(t) || s(t) || At(t) || yt(t))) throw Be(je.INVALID_ARGUMENT);
        const o = s(t) ? String(t) : (At(t), t);
        return (
          s(n)
            ? (a.plural = n)
            : k(n)
            ? (a.default = n)
            : O(n) && !u(n)
            ? (a.named = n)
            : b(n) && (a.list = n),
          s(r) ? (a.plural = r) : k(r) ? (a.default = r) : O(r) && f(a, r),
          [o, a]
        );
      }
      const Dt = "undefined" != typeof Intl;
      Dt && Intl.DateTimeFormat, Dt && Intl.NumberFormat;
      function xt(e, ...t) {
        const {
            datetimeFormats: n,
            unresolving: r,
            fallbackLocale: a,
            onWarn: o,
            localeFallbacker: l,
          } = e,
          { __datetimeFormatters: s } = e;
        const [c, i, _, m] = Wt(...t),
          p =
            (L(_.missingWarn) ? _.missingWarn : e.missingWarn,
            L(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn,
            !!_.part),
          d = Je(e, _),
          g = l(e, a, d);
        if (!k(c) || "" === c) return new Intl.DateTimeFormat(d, m).format(i);
        let b,
          v = {},
          h = null,
          T = d,
          I = null;
        for (
          let u = 0;
          u < g.length && ((b = I = g[u]), (v = n[b] || {}), (h = v[c]), !O(h));
          u++
        )
          vt(e, c, b, 0, "datetime format"), (T = I);
        if (!O(h) || !k(b)) return r ? nt : c;
        let E = `${b}__${c}`;
        u(m) || (E = `${E}__${JSON.stringify(m)}`);
        let N = s.get(E);
        return (
          N || ((N = new Intl.DateTimeFormat(b, f({}, h, m))), s.set(E, N)),
          p ? N.formatToParts(i) : N.format(i)
        );
      }
      const Ut = [
        "localeMatcher",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "formatMatcher",
        "hour12",
        "timeZone",
        "dateStyle",
        "timeStyle",
        "calendar",
        "dayPeriod",
        "numberingSystem",
        "hourCycle",
        "fractionalSecondDigits",
      ];
      function Wt(...e) {
        const [t, n, r, a] = e,
          o = {};
        let l,
          i = {};
        if (k(t)) {
          const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
          if (!e) throw Be(je.INVALID_ISO_DATE_ARGUMENT);
          const n = e[3]
            ? e[3].trim().startsWith("T")
              ? `${e[1].trim()}${e[3].trim()}`
              : `${e[1].trim()}T${e[3].trim()}`
            : e[1].trim();
          l = new Date(n);
          try {
            l.toISOString();
          } catch (u) {
            throw Be(je.INVALID_ISO_DATE_ARGUMENT);
          }
        } else if (c(t)) {
          if (isNaN(t.getTime())) throw Be(je.INVALID_DATE_ARGUMENT);
          l = t;
        } else {
          if (!s(t)) throw Be(je.INVALID_ARGUMENT);
          l = t;
        }
        return (
          k(n)
            ? (o.key = n)
            : O(n) &&
              Object.keys(n).forEach((e) => {
                Ut.includes(e) ? (i[e] = n[e]) : (o[e] = n[e]);
              }),
          k(r) ? (o.locale = r) : O(r) && (i = r),
          O(a) && (i = a),
          [o.key || "", l, o, i]
        );
      }
      function $t(e, t, n) {
        const r = e;
        for (const a in n) {
          const e = `${t}__${a}`;
          r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e);
        }
      }
      function Vt(e, ...t) {
        const {
            numberFormats: n,
            unresolving: r,
            fallbackLocale: a,
            onWarn: o,
            localeFallbacker: l,
          } = e,
          { __numberFormatters: s } = e;
        const [c, i, _, m] = Ht(...t),
          p =
            (L(_.missingWarn) ? _.missingWarn : e.missingWarn,
            L(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn,
            !!_.part),
          d = Je(e, _),
          g = l(e, a, d);
        if (!k(c) || "" === c) return new Intl.NumberFormat(d, m).format(i);
        let b,
          v = {},
          h = null,
          T = d,
          I = null;
        for (
          let u = 0;
          u < g.length && ((b = I = g[u]), (v = n[b] || {}), (h = v[c]), !O(h));
          u++
        )
          vt(e, c, b, 0, "number format"), (T = I);
        if (!O(h) || !k(b)) return r ? nt : c;
        let E = `${b}__${c}`;
        u(m) || (E = `${E}__${JSON.stringify(m)}`);
        let N = s.get(E);
        return (
          N || ((N = new Intl.NumberFormat(b, f({}, h, m))), s.set(E, N)),
          p ? N.formatToParts(i) : N.format(i)
        );
      }
      const Gt = [
        "localeMatcher",
        "style",
        "currency",
        "currencyDisplay",
        "currencySign",
        "useGrouping",
        "minimumIntegerDigits",
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
        "compactDisplay",
        "notation",
        "signDisplay",
        "unit",
        "unitDisplay",
        "roundingMode",
        "roundingPriority",
        "roundingIncrement",
        "trailingZeroDisplay",
      ];
      function Ht(...e) {
        const [t, n, r, a] = e,
          o = {};
        let l = {};
        if (!s(t)) throw Be(je.INVALID_ARGUMENT);
        const c = t;
        return (
          k(n)
            ? (o.key = n)
            : O(n) &&
              Object.keys(n).forEach((e) => {
                Gt.includes(e) ? (l[e] = n[e]) : (o[e] = n[e]);
              }),
          k(r) ? (o.locale = r) : O(r) && (l = r),
          O(a) && (l = a),
          [o.key || "", c, o, l]
        );
      }
      function Yt(e, t, n) {
        const r = e;
        for (const a in n) {
          const e = `${t}__${a}`;
          r.__numberFormatters.has(e) && r.__numberFormatters.delete(e);
        }
      }
      "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ &&
        (m().__INTLIFY_PROD_DEVTOOLS__ = !1),
        "boolean" != typeof __INTLIFY_JIT_COMPILATION__ &&
          (m().__INTLIFY_JIT_COMPILATION__ = !1),
        "boolean" != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ &&
          (m().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
      var jt = n(43194072);
      const Bt = "9.14.1";
      const Jt = Ge.__EXTEND_POINT__,
        Xt = N(Jt);
      Xt(), Xt(), Xt(), Xt(), Xt(), Xt(), Xt(), Xt(), Xt();
      const zt = je.__EXTEND_POINT__,
        Kt = N(zt),
        qt = {
          UNEXPECTED_RETURN_TYPE: zt,
          INVALID_ARGUMENT: Kt(),
          MUST_BE_CALL_SETUP_TOP: Kt(),
          NOT_INSTALLED: Kt(),
          NOT_AVAILABLE_IN_LEGACY_MODE: Kt(),
          REQUIRED_VALUE: Kt(),
          INVALID_VALUE: Kt(),
          CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Kt(),
          NOT_INSTALLED_WITH_PROVIDE: Kt(),
          UNEXPECTED_ERROR: Kt(),
          NOT_COMPATIBLE_LEGACY_VUE_I18N: Kt(),
          BRIDGE_SUPPORT_VUE_2_ONLY: Kt(),
          MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Kt(),
          NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Kt(),
          __EXTEND_POINT__: Kt(),
        };
      function Zt(e, ...t) {
        return ae(e, null, void 0);
      }
      qt.UNEXPECTED_RETURN_TYPE,
        qt.INVALID_ARGUMENT,
        qt.MUST_BE_CALL_SETUP_TOP,
        qt.NOT_INSTALLED,
        qt.UNEXPECTED_ERROR,
        qt.NOT_AVAILABLE_IN_LEGACY_MODE,
        qt.REQUIRED_VALUE,
        qt.INVALID_VALUE,
        qt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,
        qt.NOT_INSTALLED_WITH_PROVIDE,
        qt.NOT_COMPATIBLE_LEGACY_VUE_I18N,
        qt.BRIDGE_SUPPORT_VUE_2_ONLY,
        qt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION,
        qt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;
      const Qt = a("__translateVNode"),
        en = a("__datetimeParts"),
        tn = a("__numberParts"),
        nn = a("__setPluralRules");
      a("__intlifyMeta");
      const rn = a("__injectWithOption"),
        an = a("__dispose");
      function on(e) {
        if (!h(e)) return e;
        for (const t in e)
          if (g(e, t))
            if (t.includes(".")) {
              const n = t.split("."),
                r = n.length - 1;
              let a = e,
                o = !1;
              for (let e = 0; e < r; e++) {
                if ((n[e] in a || (a[n[e]] = {}), !h(a[n[e]]))) {
                  o = !0;
                  break;
                }
                a = a[n[e]];
              }
              o || ((a[n[r]] = e[t]), delete e[t]), h(a[n[r]]) && on(a[n[r]]);
            } else h(e[t]) && on(e[t]);
        return e;
      }
      function ln(e, t) {
        const { messages: n, __i18n: r, messageResolver: a, flatJson: o } = t,
          l = O(n) ? n : b(r) ? {} : { [e]: {} };
        if (
          (b(r) &&
            r.forEach((e) => {
              if ("locale" in e && "resource" in e) {
                const { locale: t, resource: n } = e;
                t ? ((l[t] = l[t] || {}), F(n, l[t])) : F(n, l);
              } else k(e) && F(JSON.parse(e), l);
            }),
          null == a && o)
        )
          for (const s in l) g(l, s) && on(l[s]);
        return l;
      }
      function sn(e) {
        return e.type;
      }
      function cn(e, t, n) {
        let r = h(t.messages) ? t.messages : {};
        "__i18nGlobal" in n &&
          (r = ln(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
        const a = Object.keys(r);
        if (
          (a.length &&
            a.forEach((t) => {
              e.mergeLocaleMessage(t, r[t]);
            }),
          h(t.datetimeFormats))
        ) {
          const n = Object.keys(t.datetimeFormats);
          n.length &&
            n.forEach((n) => {
              e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
            });
        }
        if (h(t.numberFormats)) {
          const n = Object.keys(t.numberFormats);
          n.length &&
            n.forEach((n) => {
              e.mergeNumberFormat(n, t.numberFormats[n]);
            });
        }
      }
      function un(e) {
        return (0, jt.createVNode)(jt.Text, null, e, 0);
      }
      const fn = "__INTLIFY_META__",
        _n = () => [],
        mn = () => !1;
      let pn = 0;
      function dn(e) {
        return (t, n, r, a) =>
          e(n, r, (0, jt.getCurrentInstance)() || void 0, a);
      }
      const gn = () => {
        const e = (0, jt.getCurrentInstance)();
        let t = null;
        return e && (t = sn(e)[fn]) ? { [fn]: t } : null;
      };
      function bn(e = {}, t) {
        const { __root: n, __injectWithOption: a } = e,
          o = void 0 === n,
          l = e.flatJson,
          c = r ? jt.ref : jt.shallowRef,
          u = !!e.translateExistCompatible;
        let _ = !L(e.inheritLocale) || e.inheritLocale;
        const m = c(n && _ ? n.locale.value : k(e.locale) ? e.locale : rt),
          p = c(
            n && _
              ? n.fallbackLocale.value
              : k(e.fallbackLocale) ||
                b(e.fallbackLocale) ||
                O(e.fallbackLocale) ||
                !1 === e.fallbackLocale
              ? e.fallbackLocale
              : m.value
          ),
          d = c(ln(m.value, e)),
          T = c(O(e.datetimeFormats) ? e.datetimeFormats : { [m.value]: {} }),
          I = c(O(e.numberFormats) ? e.numberFormats : { [m.value]: {} });
        let E = n
            ? n.missingWarn
            : (!L(e.missingWarn) && !i(e.missingWarn)) || e.missingWarn,
          N = n
            ? n.fallbackWarn
            : (!L(e.fallbackWarn) && !i(e.fallbackWarn)) || e.fallbackWarn,
          y = n ? n.fallbackRoot : !L(e.fallbackRoot) || e.fallbackRoot,
          P = !!e.fallbackFormat,
          R = v(e.missing) ? e.missing : null,
          A = v(e.missing) ? dn(e.missing) : null,
          C = v(e.postTranslation) ? e.postTranslation : null,
          M = n
            ? n.warnHtmlMessage
            : !L(e.warnHtmlMessage) || e.warnHtmlMessage,
          S = !!e.escapeParameter;
        const w = n ? n.modifiers : O(e.modifiers) ? e.modifiers : {};
        let D,
          x = e.pluralRules || (n && n.pluralRules);
        (D = (() => {
          o && pt(null);
          const t = {
            version: Bt,
            locale: m.value,
            fallbackLocale: p.value,
            messages: d.value,
            modifiers: w,
            pluralRules: x,
            missing: null === A ? void 0 : A,
            missingWarn: E,
            fallbackWarn: N,
            fallbackFormat: P,
            unresolving: !0,
            postTranslation: null === C ? void 0 : C,
            warnHtmlMessage: M,
            escapeParameter: S,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: { framework: "vue" },
          };
          (t.datetimeFormats = T.value),
            (t.numberFormats = I.value),
            (t.__datetimeFormatters = O(D) ? D.__datetimeFormatters : void 0),
            (t.__numberFormatters = O(D) ? D.__numberFormatters : void 0);
          const n = bt(t);
          return o && pt(n), n;
        })()),
          kt(D, m.value, p.value);
        const U = (0, jt.computed)({
            get: () => m.value,
            set: (e) => {
              (m.value = e), (D.locale = m.value);
            },
          }),
          W = (0, jt.computed)({
            get: () => p.value,
            set: (e) => {
              (p.value = e), (D.fallbackLocale = p.value), kt(D, m.value, e);
            },
          }),
          $ = (0, jt.computed)(() => d.value),
          V = (0, jt.computed)(() => T.value),
          G = (0, jt.computed)(() => I.value);
        const H = (e, t, r, a, l, c) => {
          let i;
          m.value, p.value, d.value, T.value, I.value;
          try {
            __INTLIFY_PROD_DEVTOOLS__ && ft(gn()),
              o || (D.fallbackContext = n ? dt() : void 0),
              (i = e(D));
          } finally {
            __INTLIFY_PROD_DEVTOOLS__ && ft(null),
              o || (D.fallbackContext = void 0);
          }
          if (
            ("translate exists" !== r && s(i) && i === nt) ||
            ("translate exists" === r && !i)
          ) {
            const [e, r] = t();
            return n && y ? a(n) : l(e);
          }
          if (c(i)) return i;
          throw Zt(qt.UNEXPECTED_RETURN_TYPE);
        };
        function Y(...e) {
          return H(
            (t) => Reflect.apply(Ct, null, [t, ...e]),
            () => wt(...e),
            "translate",
            (t) => Reflect.apply(t.t, t, [...e]),
            (e) => e,
            (e) => k(e)
          );
        }
        const j = {
          normalize: function (e) {
            return e.map((e) => (k(e) || s(e) || L(e) ? un(String(e)) : e));
          },
          interpolate: (e) => e,
          type: "vnode",
        };
        function B(e) {
          return d.value[e] || {};
        }
        pn++,
          n &&
            r &&
            ((0, jt.watch)(n.locale, (e) => {
              _ && ((m.value = e), (D.locale = e), kt(D, m.value, p.value));
            }),
            (0, jt.watch)(n.fallbackLocale, (e) => {
              _ &&
                ((p.value = e),
                (D.fallbackLocale = e),
                kt(D, m.value, p.value));
            }));
        const J = {
          id: pn,
          locale: U,
          fallbackLocale: W,
          get inheritLocale() {
            return _;
          },
          set inheritLocale(e) {
            (_ = e),
              e &&
                n &&
                ((m.value = n.locale.value),
                (p.value = n.fallbackLocale.value),
                kt(D, m.value, p.value));
          },
          get availableLocales() {
            return Object.keys(d.value).sort();
          },
          messages: $,
          get modifiers() {
            return w;
          },
          get pluralRules() {
            return x || {};
          },
          get isGlobal() {
            return o;
          },
          get missingWarn() {
            return E;
          },
          set missingWarn(e) {
            (E = e), (D.missingWarn = E);
          },
          get fallbackWarn() {
            return N;
          },
          set fallbackWarn(e) {
            (N = e), (D.fallbackWarn = N);
          },
          get fallbackRoot() {
            return y;
          },
          set fallbackRoot(e) {
            y = e;
          },
          get fallbackFormat() {
            return P;
          },
          set fallbackFormat(e) {
            (P = e), (D.fallbackFormat = P);
          },
          get warnHtmlMessage() {
            return M;
          },
          set warnHtmlMessage(e) {
            (M = e), (D.warnHtmlMessage = e);
          },
          get escapeParameter() {
            return S;
          },
          set escapeParameter(e) {
            (S = e), (D.escapeParameter = e);
          },
          t: Y,
          getLocaleMessage: B,
          setLocaleMessage: function (e, t) {
            if (l) {
              const n = { [e]: t };
              for (const e in n) g(n, e) && on(n[e]);
              t = n[e];
            }
            (d.value[e] = t), (D.messages = d.value);
          },
          mergeLocaleMessage: function (e, t) {
            d.value[e] = d.value[e] || {};
            const n = { [e]: t };
            if (l) for (const r in n) g(n, r) && on(n[r]);
            F((t = n[e]), d.value[e]), (D.messages = d.value);
          },
          getPostTranslationHandler: function () {
            return v(C) ? C : null;
          },
          setPostTranslationHandler: function (e) {
            (C = e), (D.postTranslation = e);
          },
          getMissingHandler: function () {
            return R;
          },
          setMissingHandler: function (e) {
            null !== e && (A = dn(e)), (R = e), (D.missing = A);
          },
          [nn]: function (e) {
            (x = e), (D.pluralRules = x);
          },
        };
        return (
          (J.datetimeFormats = V),
          (J.numberFormats = G),
          (J.rt = function (...e) {
            const [t, n, r] = e;
            if (r && !h(r)) throw Zt(qt.INVALID_ARGUMENT);
            return Y(t, n, f({ resolvedMessage: !0 }, r || {}));
          }),
          (J.te = function (e, t) {
            return H(
              () => {
                if (!e) return !1;
                const n = B(k(t) ? t : m.value),
                  r = D.messageResolver(n, e);
                return u ? null != r : yt(r) || At(r) || k(r);
              },
              () => [e],
              "translate exists",
              (n) => Reflect.apply(n.te, n, [e, t]),
              mn,
              (e) => L(e)
            );
          }),
          (J.tm = function (e) {
            const t = (function (e) {
              let t = null;
              const n = qe(D, p.value, m.value);
              for (let r = 0; r < n.length; r++) {
                const a = d.value[n[r]] || {},
                  o = D.messageResolver(a, e);
                if (null != o) {
                  t = o;
                  break;
                }
              }
              return t;
            })(e);
            return null != t ? t : (n && n.tm(e)) || {};
          }),
          (J.d = function (...e) {
            return H(
              (t) => Reflect.apply(xt, null, [t, ...e]),
              () => Wt(...e),
              "datetime format",
              (t) => Reflect.apply(t.d, t, [...e]),
              () => at,
              (e) => k(e)
            );
          }),
          (J.n = function (...e) {
            return H(
              (t) => Reflect.apply(Vt, null, [t, ...e]),
              () => Ht(...e),
              "number format",
              (t) => Reflect.apply(t.n, t, [...e]),
              () => at,
              (e) => k(e)
            );
          }),
          (J.getDateTimeFormat = function (e) {
            return T.value[e] || {};
          }),
          (J.setDateTimeFormat = function (e, t) {
            (T.value[e] = t), (D.datetimeFormats = T.value), $t(D, e, t);
          }),
          (J.mergeDateTimeFormat = function (e, t) {
            (T.value[e] = f(T.value[e] || {}, t)),
              (D.datetimeFormats = T.value),
              $t(D, e, t);
          }),
          (J.getNumberFormat = function (e) {
            return I.value[e] || {};
          }),
          (J.setNumberFormat = function (e, t) {
            (I.value[e] = t), (D.numberFormats = I.value), Yt(D, e, t);
          }),
          (J.mergeNumberFormat = function (e, t) {
            (I.value[e] = f(I.value[e] || {}, t)),
              (D.numberFormats = I.value),
              Yt(D, e, t);
          }),
          (J[rn] = a),
          (J[Qt] = function (...e) {
            return H(
              (t) => {
                let n;
                const r = t;
                try {
                  (r.processor = j), (n = Reflect.apply(Ct, null, [r, ...e]));
                } finally {
                  r.processor = null;
                }
                return n;
              },
              () => wt(...e),
              "translate",
              (t) => t[Qt](...e),
              (e) => [un(e)],
              (e) => b(e)
            );
          }),
          (J[en] = function (...e) {
            return H(
              (t) => Reflect.apply(xt, null, [t, ...e]),
              () => Wt(...e),
              "datetime format",
              (t) => t[en](...e),
              _n,
              (e) => k(e) || b(e)
            );
          }),
          (J[tn] = function (...e) {
            return H(
              (t) => Reflect.apply(Vt, null, [t, ...e]),
              () => Ht(...e),
              "number format",
              (t) => t[tn](...e),
              _n,
              (e) => k(e) || b(e)
            );
          }),
          J
        );
      }
      function vn(e = {}, t) {
        {
          const t = bn(
              (function (e) {
                const t = k(e.locale) ? e.locale : rt,
                  n =
                    k(e.fallbackLocale) ||
                    b(e.fallbackLocale) ||
                    O(e.fallbackLocale) ||
                    !1 === e.fallbackLocale
                      ? e.fallbackLocale
                      : t,
                  r = v(e.missing) ? e.missing : void 0,
                  a =
                    (!L(e.silentTranslationWarn) &&
                      !i(e.silentTranslationWarn)) ||
                    !e.silentTranslationWarn,
                  o =
                    (!L(e.silentFallbackWarn) && !i(e.silentFallbackWarn)) ||
                    !e.silentFallbackWarn,
                  l = !L(e.fallbackRoot) || e.fallbackRoot,
                  s = !!e.formatFallbackMessages,
                  c = O(e.modifiers) ? e.modifiers : {},
                  u = e.pluralizationRules,
                  _ = v(e.postTranslation) ? e.postTranslation : void 0,
                  m = !k(e.warnHtmlInMessage) || "off" !== e.warnHtmlInMessage,
                  p = !!e.escapeParameterHtml,
                  d = !L(e.sync) || e.sync;
                let g = e.messages;
                if (O(e.sharedMessages)) {
                  const t = e.sharedMessages;
                  g = Object.keys(t).reduce((e, n) => {
                    const r = e[n] || (e[n] = {});
                    return f(r, t[n]), e;
                  }, g || {});
                }
                const { __i18n: h, __root: T, __injectWithOption: I } = e,
                  E = e.datetimeFormats,
                  N = e.numberFormats,
                  y = e.flatJson,
                  P = e.translateExistCompatible;
                return {
                  locale: t,
                  fallbackLocale: n,
                  messages: g,
                  flatJson: y,
                  datetimeFormats: E,
                  numberFormats: N,
                  missing: r,
                  missingWarn: a,
                  fallbackWarn: o,
                  fallbackRoot: l,
                  fallbackFormat: s,
                  modifiers: c,
                  pluralRules: u,
                  postTranslation: _,
                  warnHtmlMessage: m,
                  escapeParameter: p,
                  messageResolver: e.messageResolver,
                  inheritLocale: d,
                  translateExistCompatible: P,
                  __i18n: h,
                  __root: T,
                  __injectWithOption: I,
                };
              })(e)
            ),
            { __extender: n } = e,
            r = {
              id: t.id,
              get locale() {
                return t.locale.value;
              },
              set locale(e) {
                t.locale.value = e;
              },
              get fallbackLocale() {
                return t.fallbackLocale.value;
              },
              set fallbackLocale(e) {
                t.fallbackLocale.value = e;
              },
              get messages() {
                return t.messages.value;
              },
              get datetimeFormats() {
                return t.datetimeFormats.value;
              },
              get numberFormats() {
                return t.numberFormats.value;
              },
              get availableLocales() {
                return t.availableLocales;
              },
              get formatter() {
                return { interpolate: () => [] };
              },
              set formatter(e) {},
              get missing() {
                return t.getMissingHandler();
              },
              set missing(e) {
                t.setMissingHandler(e);
              },
              get silentTranslationWarn() {
                return L(t.missingWarn) ? !t.missingWarn : t.missingWarn;
              },
              set silentTranslationWarn(e) {
                t.missingWarn = L(e) ? !e : e;
              },
              get silentFallbackWarn() {
                return L(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
              },
              set silentFallbackWarn(e) {
                t.fallbackWarn = L(e) ? !e : e;
              },
              get modifiers() {
                return t.modifiers;
              },
              get formatFallbackMessages() {
                return t.fallbackFormat;
              },
              set formatFallbackMessages(e) {
                t.fallbackFormat = e;
              },
              get postTranslation() {
                return t.getPostTranslationHandler();
              },
              set postTranslation(e) {
                t.setPostTranslationHandler(e);
              },
              get sync() {
                return t.inheritLocale;
              },
              set sync(e) {
                t.inheritLocale = e;
              },
              get warnHtmlInMessage() {
                return t.warnHtmlMessage ? "warn" : "off";
              },
              set warnHtmlInMessage(e) {
                t.warnHtmlMessage = "off" !== e;
              },
              get escapeParameterHtml() {
                return t.escapeParameter;
              },
              set escapeParameterHtml(e) {
                t.escapeParameter = e;
              },
              get preserveDirectiveContent() {
                return !0;
              },
              set preserveDirectiveContent(e) {},
              get pluralizationRules() {
                return t.pluralRules || {};
              },
              __composer: t,
              t(...e) {
                const [n, r, a] = e,
                  o = {};
                let l = null,
                  s = null;
                if (!k(n)) throw Zt(qt.INVALID_ARGUMENT);
                const c = n;
                return (
                  k(r) ? (o.locale = r) : b(r) ? (l = r) : O(r) && (s = r),
                  b(a) ? (l = a) : O(a) && (s = a),
                  Reflect.apply(t.t, t, [c, l || s || {}, o])
                );
              },
              rt: (...e) => Reflect.apply(t.rt, t, [...e]),
              tc(...e) {
                const [n, r, a] = e,
                  o = { plural: 1 };
                let l = null,
                  c = null;
                if (!k(n)) throw Zt(qt.INVALID_ARGUMENT);
                const i = n;
                return (
                  k(r)
                    ? (o.locale = r)
                    : s(r)
                    ? (o.plural = r)
                    : b(r)
                    ? (l = r)
                    : O(r) && (c = r),
                  k(a) ? (o.locale = a) : b(a) ? (l = a) : O(a) && (c = a),
                  Reflect.apply(t.t, t, [i, l || c || {}, o])
                );
              },
              te: (e, n) => t.te(e, n),
              tm: (e) => t.tm(e),
              getLocaleMessage: (e) => t.getLocaleMessage(e),
              setLocaleMessage(e, n) {
                t.setLocaleMessage(e, n);
              },
              mergeLocaleMessage(e, n) {
                t.mergeLocaleMessage(e, n);
              },
              d: (...e) => Reflect.apply(t.d, t, [...e]),
              getDateTimeFormat: (e) => t.getDateTimeFormat(e),
              setDateTimeFormat(e, n) {
                t.setDateTimeFormat(e, n);
              },
              mergeDateTimeFormat(e, n) {
                t.mergeDateTimeFormat(e, n);
              },
              n: (...e) => Reflect.apply(t.n, t, [...e]),
              getNumberFormat: (e) => t.getNumberFormat(e),
              setNumberFormat(e, n) {
                t.setNumberFormat(e, n);
              },
              mergeNumberFormat(e, n) {
                t.mergeNumberFormat(e, n);
              },
              getChoiceIndex: (e, t) => -1,
            };
          return (r.__extender = n), r;
        }
      }
      const kn = {
        tag: { type: [String, Object] },
        locale: { type: String },
        scope: {
          type: String,
          validator: (e) => "parent" === e || "global" === e,
          default: "parent",
        },
        i18n: { type: Object },
      };
      function Ln(e) {
        return jt.Fragment;
      }
      const hn = (0, jt.defineComponent)({
          name: "i18n-t",
          props: f(
            {
              keypath: { type: String, required: !0 },
              plural: {
                type: [Number, String],
                validator: (e) => s(e) || !isNaN(e),
              },
            },
            kn
          ),
          setup(e, t) {
            const { slots: n, attrs: r } = t,
              a = e.i18n || Sn({ useScope: e.scope, __useComponent: !0 });
            return () => {
              const o = Object.keys(n).filter((e) => "_" !== e),
                l = {};
              e.locale && (l.locale = e.locale),
                void 0 !== e.plural &&
                  (l.plural = k(e.plural) ? +e.plural : e.plural);
              const s = (function ({ slots: e }, t) {
                  if (1 === t.length && "default" === t[0])
                    return (e.default ? e.default() : []).reduce(
                      (e, t) => [
                        ...e,
                        ...(t.type === jt.Fragment ? t.children : [t]),
                      ],
                      []
                    );
                  return t.reduce((t, n) => {
                    const r = e[n];
                    return r && (t[n] = r()), t;
                  }, {});
                })(t, o),
                c = a[Qt](e.keypath, s, l),
                i = f({}, r),
                u = k(e.tag) || h(e.tag) ? e.tag : Ln();
              return (0, jt.h)(u, i, c);
            };
          },
        }),
        Tn = hn;
      function In(e, t, n, r) {
        const { slots: a, attrs: o } = t;
        return () => {
          const t = { part: !0 };
          let l = {};
          e.locale && (t.locale = e.locale),
            k(e.format)
              ? (t.key = e.format)
              : h(e.format) &&
                (k(e.format.key) && (t.key = e.format.key),
                (l = Object.keys(e.format).reduce(
                  (t, r) =>
                    n.includes(r) ? f({}, t, { [r]: e.format[r] }) : t,
                  {}
                )));
          const s = r(e.value, t, l);
          let c = [t.key];
          b(s)
            ? (c = s.map((e, t) => {
                const n = a[e.type],
                  r = n
                    ? n({ [e.type]: e.value, index: t, parts: s })
                    : [e.value];
                var o;
                return (
                  b((o = r)) && !k(o[0]) && (r[0].key = `${e.type}-${t}`), r
                );
              }))
            : k(s) && (c = [s]);
          const i = f({}, o),
            u = k(e.tag) || h(e.tag) ? e.tag : Ln();
          return (0, jt.h)(u, i, c);
        };
      }
      const En = (0, jt.defineComponent)({
          name: "i18n-n",
          props: f(
            {
              value: { type: Number, required: !0 },
              format: { type: [String, Object] },
            },
            kn
          ),
          setup(e, t) {
            const n = e.i18n || Sn({ useScope: e.scope, __useComponent: !0 });
            return In(e, t, Gt, (...e) => n[tn](...e));
          },
        }),
        On = En,
        Nn = (0, jt.defineComponent)({
          name: "i18n-d",
          props: f(
            {
              value: { type: [Number, Date], required: !0 },
              format: { type: [String, Object] },
            },
            kn
          ),
          setup(e, t) {
            const n = e.i18n || Sn({ useScope: e.scope, __useComponent: !0 });
            return In(e, t, Ut, (...e) => n[en](...e));
          },
        }),
        yn = Nn;
      function Pn(e) {
        const t = (t) => {
          const { instance: n, modifiers: r, value: a } = t;
          if (!n || !n.$) throw Zt(qt.UNEXPECTED_ERROR);
          const o = (function (e, t) {
            const n = e;
            if ("composition" === e.mode) return n.__getInstance(t) || e.global;
            {
              const r = n.__getInstance(t);
              return null != r ? r.__composer : e.global.__composer;
            }
          })(e, n.$);
          const l = Fn(a);
          return [Reflect.apply(o.t, o, [...Rn(l)]), o];
        };
        return {
          created: (n, a) => {
            const [o, l] = t(a);
            r &&
              e.global === l &&
              (n.__i18nWatcher = (0, jt.watch)(l.locale, () => {
                a.instance && a.instance.$forceUpdate();
              })),
              (n.__composer = l),
              (n.textContent = o);
          },
          unmounted: (e) => {
            r &&
              e.__i18nWatcher &&
              (e.__i18nWatcher(),
              (e.__i18nWatcher = void 0),
              delete e.__i18nWatcher),
              e.__composer && ((e.__composer = void 0), delete e.__composer);
          },
          beforeUpdate: (e, { value: t }) => {
            if (e.__composer) {
              const n = e.__composer,
                r = Fn(t);
              e.textContent = Reflect.apply(n.t, n, [...Rn(r)]);
            }
          },
          getSSRProps: (e) => {
            const [n] = t(e);
            return { textContent: n };
          },
        };
      }
      function Fn(e) {
        if (k(e)) return { path: e };
        if (O(e)) {
          if (!("path" in e)) throw Zt(qt.REQUIRED_VALUE);
          return e;
        }
        throw Zt(qt.INVALID_VALUE);
      }
      function Rn(e) {
        const { path: t, locale: n, args: r, choice: a, plural: o } = e,
          l = {},
          c = r || {};
        return (
          k(n) && (l.locale = n),
          s(a) && (l.plural = a),
          s(o) && (l.plural = o),
          [t, c, l]
        );
      }
      function An(e, t) {
        (e.locale = t.locale || e.locale),
          (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
          (e.missing = t.missing || e.missing),
          (e.silentTranslationWarn =
            t.silentTranslationWarn || e.silentFallbackWarn),
          (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
          (e.formatFallbackMessages =
            t.formatFallbackMessages || e.formatFallbackMessages),
          (e.postTranslation = t.postTranslation || e.postTranslation),
          (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
          (e.escapeParameterHtml =
            t.escapeParameterHtml || e.escapeParameterHtml),
          (e.sync = t.sync || e.sync),
          e.__composer[nn](t.pluralizationRules || e.pluralizationRules);
        const n = ln(e.locale, { messages: t.messages, __i18n: t.__i18n });
        return (
          Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])),
          t.datetimeFormats &&
            Object.keys(t.datetimeFormats).forEach((n) =>
              e.mergeDateTimeFormat(n, t.datetimeFormats[n])
            ),
          t.numberFormats &&
            Object.keys(t.numberFormats).forEach((n) =>
              e.mergeNumberFormat(n, t.numberFormats[n])
            ),
          e
        );
      }
      const Cn = a("global-vue-i18n");
      function Mn(e = {}, t) {
        const n =
            __VUE_I18N_LEGACY_API__ && L(e.legacy)
              ? e.legacy
              : __VUE_I18N_LEGACY_API__,
          r = !L(e.globalInjection) || e.globalInjection,
          o = !__VUE_I18N_LEGACY_API__ || !n || !!e.allowComposition,
          l = new Map(),
          [s, c] = (function (e, t) {
            const n = (0, jt.effectScope)();
            {
              const r =
                __VUE_I18N_LEGACY_API__ && t
                  ? n.run(() => vn(e))
                  : n.run(() => bn(e));
              if (null == r) throw Zt(qt.UNEXPECTED_ERROR);
              return [n, r];
            }
          })(e, n),
          i = a("");
        {
          const e = {
            get mode() {
              return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
            },
            get allowComposition() {
              return o;
            },
            async install(t, ...a) {
              if (
                ((t.__VUE_I18N_SYMBOL__ = i),
                t.provide(t.__VUE_I18N_SYMBOL__, e),
                O(a[0]))
              ) {
                const t = a[0];
                (e.__composerExtend = t.__composerExtend),
                  (e.__vueI18nExtend = t.__vueI18nExtend);
              }
              let o = null;
              !n &&
                r &&
                (o = (function (e, t) {
                  const n = Object.create(null);
                  Dn.forEach((e) => {
                    const r = Object.getOwnPropertyDescriptor(t, e);
                    if (!r) throw Zt(qt.UNEXPECTED_ERROR);
                    const a = (0, jt.isRef)(r.value)
                      ? {
                          get: () => r.value.value,
                          set(e) {
                            r.value.value = e;
                          },
                        }
                      : { get: () => r.get && r.get() };
                    Object.defineProperty(n, e, a);
                  }),
                    (e.config.globalProperties.$i18n = n),
                    xn.forEach((n) => {
                      const r = Object.getOwnPropertyDescriptor(t, n);
                      if (!r || !r.value) throw Zt(qt.UNEXPECTED_ERROR);
                      Object.defineProperty(
                        e.config.globalProperties,
                        `$${n}`,
                        r
                      );
                    });
                  const r = () => {
                    delete e.config.globalProperties.$i18n,
                      xn.forEach((t) => {
                        delete e.config.globalProperties[`$${t}`];
                      });
                  };
                  return r;
                })(t, e.global)),
                __VUE_I18N_FULL_INSTALL__ &&
                  (function (e, t, ...n) {
                    const r = O(n[0]) ? n[0] : {},
                      a = !!r.useI18nComponentName;
                    (!L(r.globalInstall) || r.globalInstall) &&
                      ([a ? "i18n" : hn.name, "I18nT"].forEach((t) =>
                        e.component(t, hn)
                      ),
                      [En.name, "I18nN"].forEach((t) => e.component(t, En)),
                      [Nn.name, "I18nD"].forEach((t) => e.component(t, Nn))),
                      e.directive("t", Pn(t));
                  })(t, e, ...a),
                __VUE_I18N_LEGACY_API__ &&
                  n &&
                  t.mixin(
                    (function (e, t, n) {
                      return {
                        beforeCreate() {
                          const r = (0, jt.getCurrentInstance)();
                          if (!r) throw Zt(qt.UNEXPECTED_ERROR);
                          const a = this.$options;
                          if (a.i18n) {
                            const r = a.i18n;
                            if (
                              (a.__i18n && (r.__i18n = a.__i18n),
                              (r.__root = t),
                              this === this.$root)
                            )
                              this.$i18n = An(e, r);
                            else {
                              (r.__injectWithOption = !0),
                                (r.__extender = n.__vueI18nExtend),
                                (this.$i18n = vn(r));
                              const e = this.$i18n;
                              e.__extender &&
                                (e.__disposer = e.__extender(this.$i18n));
                            }
                          } else if (a.__i18n)
                            if (this === this.$root) this.$i18n = An(e, a);
                            else {
                              this.$i18n = vn({
                                __i18n: a.__i18n,
                                __injectWithOption: !0,
                                __extender: n.__vueI18nExtend,
                                __root: t,
                              });
                              const e = this.$i18n;
                              e.__extender &&
                                (e.__disposer = e.__extender(this.$i18n));
                            }
                          else this.$i18n = e;
                          a.__i18nGlobal && cn(t, a, a),
                            (this.$t = (...e) => this.$i18n.t(...e)),
                            (this.$rt = (...e) => this.$i18n.rt(...e)),
                            (this.$tc = (...e) => this.$i18n.tc(...e)),
                            (this.$te = (e, t) => this.$i18n.te(e, t)),
                            (this.$d = (...e) => this.$i18n.d(...e)),
                            (this.$n = (...e) => this.$i18n.n(...e)),
                            (this.$tm = (e) => this.$i18n.tm(e)),
                            n.__setInstance(r, this.$i18n);
                        },
                        mounted() {},
                        unmounted() {
                          const e = (0, jt.getCurrentInstance)();
                          if (!e) throw Zt(qt.UNEXPECTED_ERROR);
                          const t = this.$i18n;
                          delete this.$t,
                            delete this.$rt,
                            delete this.$tc,
                            delete this.$te,
                            delete this.$d,
                            delete this.$n,
                            delete this.$tm,
                            t.__disposer &&
                              (t.__disposer(),
                              delete t.__disposer,
                              delete t.__extender),
                            n.__deleteInstance(e),
                            delete this.$i18n;
                        },
                      };
                    })(c, c.__composer, e)
                  );
              const l = t.unmount;
              t.unmount = () => {
                o && o(), e.dispose(), l();
              };
            },
            get global() {
              return c;
            },
            dispose() {
              s.stop();
            },
            __instances: l,
            __getInstance: function (e) {
              return l.get(e) || null;
            },
            __setInstance: function (e, t) {
              l.set(e, t);
            },
            __deleteInstance: function (e) {
              l.delete(e);
            },
          };
          return e;
        }
      }
      function Sn(e = {}) {
        const t = (0, jt.getCurrentInstance)();
        if (null == t) throw Zt(qt.MUST_BE_CALL_SETUP_TOP);
        if (
          !t.isCE &&
          null != t.appContext.app &&
          !t.appContext.app.__VUE_I18N_SYMBOL__
        )
          throw Zt(qt.NOT_INSTALLED);
        const n = (function (e) {
            {
              const t = (0, jt.inject)(
                e.isCE ? Cn : e.appContext.app.__VUE_I18N_SYMBOL__
              );
              if (!t)
                throw Zt(
                  e.isCE ? qt.NOT_INSTALLED_WITH_PROVIDE : qt.UNEXPECTED_ERROR
                );
              return t;
            }
          })(t),
          r = (function (e) {
            return "composition" === e.mode ? e.global : e.global.__composer;
          })(n),
          a = sn(t),
          o = (function (e, t) {
            return u(e)
              ? "__i18n" in t
                ? "local"
                : "global"
              : e.useScope
              ? e.useScope
              : "local";
          })(e, a);
        if (
          __VUE_I18N_LEGACY_API__ &&
          "legacy" === n.mode &&
          !e.__useComponent
        ) {
          if (!n.allowComposition) throw Zt(qt.NOT_AVAILABLE_IN_LEGACY_MODE);
          return (function (e, t, n, r = {}) {
            const a = "local" === t,
              o = (0, jt.shallowRef)(null);
            if (
              a &&
              e.proxy &&
              !e.proxy.$options.i18n &&
              !e.proxy.$options.__i18n
            )
              throw Zt(qt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
            const l = L(r.inheritLocale) ? r.inheritLocale : !k(r.locale),
              s = (0, jt.ref)(
                !a || l ? n.locale.value : k(r.locale) ? r.locale : rt
              ),
              c = (0, jt.ref)(
                !a || l
                  ? n.fallbackLocale.value
                  : k(r.fallbackLocale) ||
                    b(r.fallbackLocale) ||
                    O(r.fallbackLocale) ||
                    !1 === r.fallbackLocale
                  ? r.fallbackLocale
                  : s.value
              ),
              u = (0, jt.ref)(ln(s.value, r)),
              f = (0, jt.ref)(
                O(r.datetimeFormats) ? r.datetimeFormats : { [s.value]: {} }
              ),
              _ = (0, jt.ref)(
                O(r.numberFormats) ? r.numberFormats : { [s.value]: {} }
              ),
              m = a
                ? n.missingWarn
                : (!L(r.missingWarn) && !i(r.missingWarn)) || r.missingWarn,
              p = a
                ? n.fallbackWarn
                : (!L(r.fallbackWarn) && !i(r.fallbackWarn)) || r.fallbackWarn,
              d = a ? n.fallbackRoot : !L(r.fallbackRoot) || r.fallbackRoot,
              g = !!r.fallbackFormat,
              h = v(r.missing) ? r.missing : null,
              T = v(r.postTranslation) ? r.postTranslation : null,
              I = a
                ? n.warnHtmlMessage
                : !L(r.warnHtmlMessage) || r.warnHtmlMessage,
              E = !!r.escapeParameter,
              N = a ? n.modifiers : O(r.modifiers) ? r.modifiers : {},
              y = r.pluralRules || (a && n.pluralRules);
            function P() {
              return [s.value, c.value, u.value, f.value, _.value];
            }
            const F = (0, jt.computed)({
                get: () => (o.value ? o.value.locale.value : s.value),
                set: (e) => {
                  o.value && (o.value.locale.value = e), (s.value = e);
                },
              }),
              R = (0, jt.computed)({
                get: () => (o.value ? o.value.fallbackLocale.value : c.value),
                set: (e) => {
                  o.value && (o.value.fallbackLocale.value = e), (c.value = e);
                },
              }),
              A = (0, jt.computed)(() =>
                o.value ? o.value.messages.value : u.value
              ),
              C = (0, jt.computed)(() => f.value),
              M = (0, jt.computed)(() => _.value);
            function S() {
              return o.value ? o.value.getPostTranslationHandler() : T;
            }
            function w(e) {
              o.value && o.value.setPostTranslationHandler(e);
            }
            function D() {
              return o.value ? o.value.getMissingHandler() : h;
            }
            function x(e) {
              o.value && o.value.setMissingHandler(e);
            }
            function U(e) {
              return P(), e();
            }
            function W(...e) {
              return o.value
                ? U(() => Reflect.apply(o.value.t, null, [...e]))
                : U(() => "");
            }
            function $(...e) {
              return o.value ? Reflect.apply(o.value.rt, null, [...e]) : "";
            }
            function V(...e) {
              return o.value
                ? U(() => Reflect.apply(o.value.d, null, [...e]))
                : U(() => "");
            }
            function G(...e) {
              return o.value
                ? U(() => Reflect.apply(o.value.n, null, [...e]))
                : U(() => "");
            }
            function H(e) {
              return o.value ? o.value.tm(e) : {};
            }
            function Y(e, t) {
              return !!o.value && o.value.te(e, t);
            }
            function j(e) {
              return o.value ? o.value.getLocaleMessage(e) : {};
            }
            function B(e, t) {
              o.value && (o.value.setLocaleMessage(e, t), (u.value[e] = t));
            }
            function J(e, t) {
              o.value && o.value.mergeLocaleMessage(e, t);
            }
            function X(e) {
              return o.value ? o.value.getDateTimeFormat(e) : {};
            }
            function z(e, t) {
              o.value && (o.value.setDateTimeFormat(e, t), (f.value[e] = t));
            }
            function K(e, t) {
              o.value && o.value.mergeDateTimeFormat(e, t);
            }
            function q(e) {
              return o.value ? o.value.getNumberFormat(e) : {};
            }
            function Z(e, t) {
              o.value && (o.value.setNumberFormat(e, t), (_.value[e] = t));
            }
            function Q(e, t) {
              o.value && o.value.mergeNumberFormat(e, t);
            }
            const ee = {
              get id() {
                return o.value ? o.value.id : -1;
              },
              locale: F,
              fallbackLocale: R,
              messages: A,
              datetimeFormats: C,
              numberFormats: M,
              get inheritLocale() {
                return o.value ? o.value.inheritLocale : l;
              },
              set inheritLocale(e) {
                o.value && (o.value.inheritLocale = e);
              },
              get availableLocales() {
                return o.value
                  ? o.value.availableLocales
                  : Object.keys(u.value);
              },
              get modifiers() {
                return o.value ? o.value.modifiers : N;
              },
              get pluralRules() {
                return o.value ? o.value.pluralRules : y;
              },
              get isGlobal() {
                return !!o.value && o.value.isGlobal;
              },
              get missingWarn() {
                return o.value ? o.value.missingWarn : m;
              },
              set missingWarn(e) {
                o.value && (o.value.missingWarn = e);
              },
              get fallbackWarn() {
                return o.value ? o.value.fallbackWarn : p;
              },
              set fallbackWarn(e) {
                o.value && (o.value.missingWarn = e);
              },
              get fallbackRoot() {
                return o.value ? o.value.fallbackRoot : d;
              },
              set fallbackRoot(e) {
                o.value && (o.value.fallbackRoot = e);
              },
              get fallbackFormat() {
                return o.value ? o.value.fallbackFormat : g;
              },
              set fallbackFormat(e) {
                o.value && (o.value.fallbackFormat = e);
              },
              get warnHtmlMessage() {
                return o.value ? o.value.warnHtmlMessage : I;
              },
              set warnHtmlMessage(e) {
                o.value && (o.value.warnHtmlMessage = e);
              },
              get escapeParameter() {
                return o.value ? o.value.escapeParameter : E;
              },
              set escapeParameter(e) {
                o.value && (o.value.escapeParameter = e);
              },
              t: W,
              getPostTranslationHandler: S,
              setPostTranslationHandler: w,
              getMissingHandler: D,
              setMissingHandler: x,
              rt: $,
              d: V,
              n: G,
              tm: H,
              te: Y,
              getLocaleMessage: j,
              setLocaleMessage: B,
              mergeLocaleMessage: J,
              getDateTimeFormat: X,
              setDateTimeFormat: z,
              mergeDateTimeFormat: K,
              getNumberFormat: q,
              setNumberFormat: Z,
              mergeNumberFormat: Q,
            };
            function te(e) {
              (e.locale.value = s.value),
                (e.fallbackLocale.value = c.value),
                Object.keys(u.value).forEach((t) => {
                  e.mergeLocaleMessage(t, u.value[t]);
                }),
                Object.keys(f.value).forEach((t) => {
                  e.mergeDateTimeFormat(t, f.value[t]);
                }),
                Object.keys(_.value).forEach((t) => {
                  e.mergeNumberFormat(t, _.value[t]);
                }),
                (e.escapeParameter = E),
                (e.fallbackFormat = g),
                (e.fallbackRoot = d),
                (e.fallbackWarn = p),
                (e.missingWarn = m),
                (e.warnHtmlMessage = I);
            }
            return (
              (0, jt.onBeforeMount)(() => {
                if (null == e.proxy || null == e.proxy.$i18n)
                  throw Zt(qt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
                const n = (o.value = e.proxy.$i18n.__composer);
                "global" === t
                  ? ((s.value = n.locale.value),
                    (c.value = n.fallbackLocale.value),
                    (u.value = n.messages.value),
                    (f.value = n.datetimeFormats.value),
                    (_.value = n.numberFormats.value))
                  : a && te(n);
              }),
              ee
            );
          })(t, o, r, e);
        }
        if ("global" === o) return cn(r, e, a), r;
        if ("parent" === o) {
          let a = (function (e, t, n = !1) {
            let r = null;
            const a = t.root;
            let o = (function (e, t = !1) {
              if (null == e) return null;
              return (t && e.vnode.ctx) || e.parent;
            })(t, n);
            for (; null != o; ) {
              const t = e;
              if ("composition" === e.mode) r = t.__getInstance(o);
              else if (__VUE_I18N_LEGACY_API__) {
                const e = t.__getInstance(o);
                null != e &&
                  ((r = e.__composer), n && r && !r[rn] && (r = null));
              }
              if (null != r) break;
              if (a === o) break;
              o = o.parent;
            }
            return r;
          })(n, t, e.__useComponent);
          return null == a && (a = r), a;
        }
        const l = n;
        let s = l.__getInstance(t);
        if (null == s) {
          const n = f({}, e);
          "__i18n" in a && (n.__i18n = a.__i18n),
            r && (n.__root = r),
            (s = bn(n)),
            l.__composerExtend && (s[an] = l.__composerExtend(s)),
            (function (e, t, n) {
              (0, jt.onMounted)(() => {
                0;
              }, t),
                (0, jt.onUnmounted)(() => {
                  const r = n;
                  e.__deleteInstance(t);
                  const a = r[an];
                  a && (a(), delete r[an]);
                }, t);
            })(l, t, s),
            l.__setInstance(t, s);
        }
        return s;
      }
      const wn = (e) => {
        if (!("__VUE_I18N_BRIDGE__" in e))
          throw Zt(qt.NOT_COMPATIBLE_LEGACY_VUE_I18N);
        return e;
      };
      const Dn = ["locale", "fallbackLocale", "availableLocales"],
        xn = ["t", "rt", "d", "n", "tm", "te"];
      var Un;
      if (
        ("boolean" != typeof __VUE_I18N_FULL_INSTALL__ &&
          (m().__VUE_I18N_FULL_INSTALL__ = !0),
        "boolean" != typeof __VUE_I18N_LEGACY_API__ &&
          (m().__VUE_I18N_LEGACY_API__ = !0),
        "boolean" != typeof __INTLIFY_JIT_COMPILATION__ &&
          (m().__INTLIFY_JIT_COMPILATION__ = !1),
        "boolean" != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ &&
          (m().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
        "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ &&
          (m().__INTLIFY_PROD_DEVTOOLS__ = !1),
        __INTLIFY_JIT_COMPILATION__
          ? it(function (e, t) {
              if (
                __INTLIFY_JIT_COMPILATION__ &&
                !__INTLIFY_DROP_MESSAGE_COMPILER__ &&
                k(e)
              ) {
                !L(t.warnHtmlMessage) || t.warnHtmlMessage;
                const n = (t.onCacheKey || Ot)(e),
                  r = Nt[n];
                if (r) return r;
                const { ast: a, detectError: o } = Pt(e, {
                    ...t,
                    location: !1,
                    jit: !0,
                  }),
                  l = Tt(a);
                return o ? l : (Nt[n] = l);
              }
              {
                const t = e.cacheKey;
                if (t) {
                  return Nt[t] || (Nt[t] = Tt(e));
                }
                return Tt(e);
              }
            })
          : it(Ft),
        (st = function (e, t) {
          if (!h(e)) return null;
          let n = Pe.get(t);
          if (
            (n ||
              ((n = (function (e) {
                const t = [];
                let n,
                  r,
                  a,
                  o,
                  l,
                  s,
                  c,
                  i = -1,
                  u = 0,
                  f = 0;
                const _ = [];
                function m() {
                  const t = e[i + 1];
                  if ((5 === u && "'" === t) || (6 === u && '"' === t))
                    return i++, (a = "\\" + t), _[0](), !0;
                }
                for (
                  _[0] = () => {
                    void 0 === r ? (r = a) : (r += a);
                  },
                    _[1] = () => {
                      void 0 !== r && (t.push(r), (r = void 0));
                    },
                    _[2] = () => {
                      _[0](), f++;
                    },
                    _[3] = () => {
                      if (f > 0) f--, (u = 4), _[0]();
                      else {
                        if (((f = 0), void 0 === r)) return !1;
                        if (((r = ye(r)), !1 === r)) return !1;
                        _[1]();
                      }
                    };
                  null !== u;

                )
                  if ((i++, (n = e[i]), "\\" !== n || !m())) {
                    if (
                      ((o = Ne(n)),
                      (c = Ee[u]),
                      (l = c[o] || c.l || 8),
                      8 === l)
                    )
                      return;
                    if (
                      ((u = l[0]),
                      void 0 !== l[1] &&
                        ((s = _[l[1]]), s && ((a = n), !1 === s())))
                    )
                      return;
                    if (7 === u) return t;
                  }
              })(t)),
              n && Pe.set(t, n)),
            !n)
          )
            return null;
          const r = n.length;
          let a = e,
            o = 0;
          for (; o < r; ) {
            const e = a[n[o]];
            if (void 0 === e) return null;
            if (v(a)) return null;
            (a = e), o++;
          }
          return a;
        }),
        (ct = qe),
        __INTLIFY_PROD_DEVTOOLS__)
      ) {
        const e = m();
        (e.__INTLIFY__ = !0),
          (Un = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__),
          (xe = Un);
      }
    },
  },
]);
