var v3_microfrontend_banners;
(() => {
  "use strict";
  var e,
    r,
    t,
    n,
    o,
    a,
    i,
    s,
    l,
    u,
    f,
    p,
    d,
    c,
    h,
    v,
    g,
    m,
    b,
    y,
    w,
    S = {
      4362436: (e, r, t) => {
        var n = {
            App: () => t.e(75475863).then(() => () => t(75475863)),
            "./publicPath": () =>
              Promise.resolve().then(() => () => t(31898517)),
            "./deployUrl": () =>
              Promise.resolve().then(() => () => t(70761649)),
          },
          o = (e, r) => (
            (t.R = r),
            (r = t.o(n, e)
              ? n[e]()
              : Promise.resolve().then(() => {
                  throw new Error(
                    'Module "' + e + '" does not exist in container.'
                  );
                })),
            (t.R = void 0),
            r
          ),
          a = (e, r) => {
            if (t.S) {
              var n = "default",
                o = t.S[n];
              if (o && o !== e)
                throw new Error(
                  "Container initialization failed as it has already been initialized with a different share scope"
                );
              return (t.S[n] = e), t.I(n, r);
            }
          };
        t.d(r, { get: () => o, init: () => a });
      },
      70761649: (e, r, t) => {
        var n = () => t.du,
          o = (e) => {
            t.du = e;
          };
        t.d(r, { get: () => n, set: () => o });
      },
      31898517: (e, r, t) => {
        var n = () => t.p,
          o = (e) => {
            t.p = e;
          };
        t.d(r, { get: () => n, set: () => o });
      },
    },
    k = {};
  function C(e) {
    var r = k[e];
    if (void 0 !== r) return r.exports;
    var t = (k[e] = { exports: {} });
    return S[e](t, t.exports, C), t.exports;
  }
  (C.m = S),
    (C.c = k),
    (C.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return C.d(r, { a: r }), r;
    }),
    (C.d = (e, r) => {
      for (var t in r)
        C.o(r, t) &&
          !C.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (C.f = {}),
    (C.e = (e) =>
      Promise.all(Object.keys(C.f).reduce((r, t) => (C.f[t](e, r), r), []))),
    (C.u = (e) =>
      "banners/" +
      ({
        49536057: "App-Banners-v3-Mobile",
        90221493: "App-Banners-v3-Desktop",
      }[e] || e) +
      "." +
      e +
      "." +
      {
        14687768: "4911d9a9b318",
        18225377: "6db126e70763",
        34860688: "681915fdb671",
        46488899: "c633f1e08567",
        46637997: "51c21aa3fd76",
        49536057: "13061aaf2609",
        61884380: "9191b1908038",
        73512591: "57dc46533301",
        75475863: "4d91492e7f3b",
        85383299: "c7caf9e5ba8f",
        90221493: "757748e39572",
      }[e] +
      ".js"),
    (C.miniCssF = (e) =>
      "banners/" +
      { 49536057: "App-Banners-v3-Mobile", 90221493: "App-Banners-v3-Desktop" }[
        e
      ] +
      "." +
      e +
      "." +
      { 49536057: "d3a0f885e1ab", 90221493: "a990511ece5e" }[e] +
      ".css"),
    (C.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (C.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "v3-microfrontend-banners:"),
    (C.l = (t, n, o, a) => {
      if (e[t]) e[t].push(n);
      else {
        var i, s;
        if (void 0 !== o)
          for (
            var l = document.getElementsByTagName("script"), u = 0;
            u < l.length;
            u++
          ) {
            var f = l[u];
            if (
              f.getAttribute("src") == t ||
              f.getAttribute("data-webpack") == r + o
            ) {
              i = f;
              break;
            }
          }
        i ||
          ((s = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          C.nc && i.setAttribute("nonce", C.nc),
          i.setAttribute("data-webpack", r + o),
          (i.src = t)),
          (e[t] = [n]);
        var p = (r, n) => {
            (i.onerror = i.onload = null), clearTimeout(d);
            var o = e[t];
            if (
              (delete e[t],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach((e) => e(n)),
              r)
            )
              return r(n);
          },
          d = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = p.bind(null, i.onerror)),
          (i.onload = p.bind(null, i.onload)),
          s && document.head.appendChild(i);
      }
    }),
    (C.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      C.S = {};
      var e = {},
        r = {};
      C.I = (t, n) => {
        n || (n = []);
        var o = r[t];
        if ((o || (o = r[t] = {}), !(n.indexOf(o) >= 0))) {
          if ((n.push(o), e[t])) return e[t];
          C.o(C.S, t) || (C.S[t] = {});
          var a = C.S[t],
            i = "v3-microfrontend-banners",
            s = (e, r, t, n) => {
              var o = (a[e] = a[e] || {}),
                s = o[r];
              (!s || (!s.loaded && (!n != !s.eager ? n : i > s.from))) &&
                (o[r] = { get: t, from: i, eager: !!n });
            },
            l = [];
          if ("default" === t)
            s("@games/app-storage", "0.0.1", () =>
              C.e(85383299).then(() => () => C(85383299))
            ),
              s("axios", "1.7.7", () =>
                C.e(14687768).then(() => () => C(14687768))
              ),
              s("localforage", "1.10.0", () =>
                C.e(46637997).then(() => () => C(46637997))
              ),
              s("pinia", "2.2.2", () =>
                C.e(73512591).then(() => () => C(73512591))
              ),
              s("vue-i18n", "9.14.1", () =>
                C.e(46488899).then(() => () => C(34860688))
              ),
              s("vue", "3.5.8", () =>
                C.e(18225377).then(() => () => C(18225377))
              );
          return l.length
            ? (e[t] = Promise.all(l).then(() => (e[t] = 1)))
            : (e[t] = 1);
        }
      };
    })(),
    (() => {
      var e;
      C.g.importScripts && (e = C.g.location + "");
      var r = C.g.document;
      if (
        !e &&
        r &&
        (r.currentScript &&
          "SCRIPT" === r.currentScript.tagName.toUpperCase() &&
          (e = r.currentScript.src),
        !e)
      ) {
        var t = r.getElementsByTagName("script");
        if (t.length)
          for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e)); )
            e = t[n--].src;
      }
      if (!e)
        throw new Error("Automatic deployUrl is not supported in this browser");
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (C.du = new URL(e + "../").toString());
    })(),
    (() => {
      var e;
      C.g.importScripts && (e = C.g.location + "");
      var r = C.g.document;
      if (
        !e &&
        r &&
        (r.currentScript &&
          "SCRIPT" === r.currentScript.tagName.toUpperCase() &&
          (e = r.currentScript.src),
        !e)
      ) {
        var t = r.getElementsByTagName("script");
        if (t.length)
          for (var n = t.length - 1; n > -1 && (!e || !/^http(s?):/.test(e)); )
            e = t[n--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (C.p = e + "../");
    })(),
    (t = (e) => {
      var r = (e) => e.split(".").map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        n = t[1] ? r(t[1]) : [];
      return (
        t[2] && (n.length++, n.push.apply(n, r(t[2]))),
        t[3] && (n.push([]), n.push.apply(n, r(t[3]))),
        n
      );
    }),
    (n = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var n = 0; ; ) {
        if (n >= e.length) return n < r.length && "u" != (typeof r[n])[0];
        var o = e[n],
          a = (typeof o)[0];
        if (n >= r.length) return "u" == a;
        var i = r[n],
          s = (typeof i)[0];
        if (a != s) return ("o" == a && "n" == s) || "s" == s || "u" == a;
        if ("o" != a && "u" != a && o != i) return o < i;
        n++;
      }
    }),
    (o = (e) => {
      var r = e[0],
        t = "";
      if (1 === e.length) return "*";
      if (r + 0.5) {
        t +=
          0 == r
            ? ">="
            : -1 == r
            ? "<"
            : 1 == r
            ? "^"
            : 2 == r
            ? "~"
            : r > 0
            ? "="
            : "!=";
        for (var n = 1, a = 1; a < e.length; a++)
          n--,
            (t +=
              "u" == (typeof (s = e[a]))[0]
                ? "-"
                : (n > 0 ? "." : "") + ((n = 2), s));
        return t;
      }
      var i = [];
      for (a = 1; a < e.length; a++) {
        var s = e[a];
        i.push(
          0 === s
            ? "not(" + l() + ")"
            : 1 === s
            ? "(" + l() + " || " + l() + ")"
            : 2 === s
            ? i.pop() + " " + i.pop()
            : o(s)
        );
      }
      return l();
      function l() {
        return i.pop().replace(/^\((.+)\)$/, "$1");
      }
    }),
    (a = (e, r) => {
      if (0 in e) {
        r = t(r);
        var n = e[0],
          o = n < 0;
        o && (n = -n - 1);
        for (var i = 0, s = 1, l = !0; ; s++, i++) {
          var u,
            f,
            p = s < e.length ? (typeof e[s])[0] : "";
          if (i >= r.length || "o" == (f = (typeof (u = r[i]))[0]))
            return !l || ("u" == p ? s > n && !o : ("" == p) != o);
          if ("u" == f) {
            if (!l || "u" != p) return !1;
          } else if (l)
            if (p == f)
              if (s <= n) {
                if (u != e[s]) return !1;
              } else {
                if (o ? u > e[s] : u < e[s]) return !1;
                u != e[s] && (l = !1);
              }
            else if ("s" != p && "n" != p) {
              if (o || s <= n) return !1;
              (l = !1), s--;
            } else {
              if (s <= n || f < p != o) return !1;
              l = !1;
            }
          else "s" != p && "n" != p && ((l = !1), s--);
        }
      }
      var d = [],
        c = d.pop.bind(d);
      for (i = 1; i < e.length; i++) {
        var h = e[i];
        d.push(1 == h ? c() | c() : 2 == h ? c() & c() : h ? a(h, r) : !c());
      }
      return !!c();
    }),
    (i = (e, r) => e && C.o(e, r)),
    (s = (e) => ((e.loaded = 1), e.get())),
    (l = (e) =>
      Object.keys(e).reduce((r, t) => (e[t].eager && (r[t] = e[t]), r), {})),
    (u = (e, r, t) => {
      var o = t ? l(e[r]) : e[r];
      return Object.keys(o).reduce(
        (e, r) => (!e || (!o[e].loaded && n(e, r)) ? r : e),
        0
      );
    }),
    (f = (e, r, t, n) =>
      "Unsatisfied version " +
      t +
      " from " +
      (t && e[r][t].from) +
      " of shared singleton module " +
      r +
      " (required " +
      o(n) +
      ")"),
    (p = (e) => {
      throw new Error(e);
    }),
    (d = (e) => {
      "undefined" != typeof console && console.warn && console.warn(e);
    }),
    (h = (e, r, t) =>
      t
        ? t()
        : ((e, r) =>
            p("Shared module " + r + " doesn't exist in shared scope " + e))(
            e,
            r
          )),
    (v = (c = (e) =>
      function (r, t, n, o, a) {
        var i = C.I(r);
        return i && i.then && !n
          ? i.then(e.bind(e, r, C.S[r], t, !1, o, a))
          : e(r, C.S[r], t, n, o, a);
      })((e, r, t, n, o, l) => {
      if (!i(r, t)) return h(e, t, l);
      var p = u(r, t, n);
      return a(o, p) || d(f(r, t, p, o)), s(r[t][p]);
    })),
    (g = c((e, r, t, n, o, l) => {
      if (!i(r, t)) return h(e, t, l);
      var d = u(r, t, n);
      return a(o, d) || p(f(r, t, d, o)), s(r[t][d]);
    })),
    (m = {}),
    (b = {
      47535664: () =>
        g("default", "localforage", !1, [4, 1, 10, 0], () =>
          C.e(46637997).then(() => () => C(46637997))
        ),
      43194072: () =>
        g("default", "vue", !1, [4, 3, 5, 8], () =>
          C.e(18225377).then(() => () => C(18225377))
        ),
      35910884: () =>
        g("default", "pinia", !1, [4, 2, 2, 2], () =>
          C.e(61884380).then(() => () => C(73512591))
        ),
      13854563: () =>
        g("default", "axios", !1, [4, 1, 7, 7], () =>
          C.e(14687768).then(() => () => C(14687768))
        ),
      17680399: () =>
        g("default", "vue-i18n", !1, [4, 9, 14, 1], () =>
          C.e(34860688).then(() => () => C(34860688))
        ),
      17511707: () =>
        v("default", "@games/app-storage", !1, [4, 0, 0, 1], () =>
          C.e(85383299).then(() => () => C(85383299))
        ),
    }),
    (y = {
      46488899: [43194072],
      73512591: [43194072],
      75475863: [43194072, 35910884, 13854563, 17680399, 17511707],
      85383299: [47535664],
    }),
    (w = {}),
    (C.f.consumes = (e, r) => {
      C.o(y, e) &&
        y[e].forEach((e) => {
          if (C.o(m, e)) return r.push(m[e]);
          if (!w[e]) {
            var t = (r) => {
              (m[e] = 0),
                (C.m[e] = (t) => {
                  delete C.c[e], (t.exports = r());
                });
            };
            w[e] = !0;
            var n = (r) => {
              delete m[e],
                (C.m[e] = (t) => {
                  throw (delete C.c[e], r);
                });
            };
            try {
              var o = b[e]();
              o.then ? r.push((m[e] = o.then(t).catch(n))) : t(o);
            } catch (a) {
              n(a);
            }
          }
        });
    }),
    (() => {
      if ("undefined" != typeof document) {
        var e = (r, t, n, o, a) => {
            var i = document.createElement("link");
            (i.rel = "stylesheet"),
              (i.type = "text/css"),
              C.nc && (i.nonce = C.nc);
            if (
              ((i.onerror = i.onload =
                (e) => {
                  if (((i.onerror = i.onload = null), "load" === e.type)) o();
                  else {
                    var n = e && e.type,
                      s = (e && e.target && e.target.href) || t,
                      l = new Error(
                        "Loading CSS chunk " +
                          r +
                          " failed.\n(" +
                          n +
                          ": " +
                          s +
                          ")"
                      );
                    (l.name = "ChunkLoadError"),
                      (l.code = "CSS_CHUNK_LOAD_FAILED"),
                      (l.type = n),
                      (l.request = s),
                      i.parentNode && i.parentNode.removeChild(i),
                      a(l);
                  }
                }),
              (i.href = t),
              C.du)
            ) {
              var s = a;
              a = (t) => {
                if (t.request.startsWith(C.p) && C.p !== C.du) {
                  console.warn(
                    "[AsyncCssChunksFallbackPlugin]: Failed to load " +
                      r +
                      " chunk from " +
                      C.p +
                      ". Now trying to load from the deploy url."
                  );
                  var a = t.request.replace(C.p, C.du);
                  e(r, a, n, o, s);
                } else s(t);
              };
            }
            return (
              n
                ? n.parentNode.insertBefore(i, n.nextSibling)
                : document.head.appendChild(i),
              i
            );
          },
          r = (r) =>
            new Promise((t, n) => {
              var o = C.miniCssF(r),
                a = C.p + o;
              if (
                ((e, r) => {
                  for (
                    var t = document.getElementsByTagName("link"), n = 0;
                    n < t.length;
                    n++
                  ) {
                    var o =
                      (i = t[n]).getAttribute("data-href") ||
                      i.getAttribute("href");
                    if ("stylesheet" === i.rel && (o === e || o === r))
                      return i;
                  }
                  var a = document.getElementsByTagName("style");
                  for (n = 0; n < a.length; n++) {
                    var i;
                    if (
                      (o = (i = a[n]).getAttribute("data-href")) === e ||
                      o === r
                    )
                      return i;
                  }
                })(o, a)
              )
                return t();
              e(r, a, null, t, n);
            }),
          t = { 17765803: 0 };
        C.f.miniCss = (e, n) => {
          t[e]
            ? n.push(t[e])
            : 0 !== t[e] &&
              { 49536057: 1, 90221493: 1 }[e] &&
              n.push(
                (t[e] = r(e).then(
                  () => {
                    t[e] = 0;
                  },
                  (r) => {
                    throw (delete t[e], r);
                  }
                ))
              );
        };
      }
    })(),
    (() => {
      var e = { 17765803: 0 };
      C.f.j = (r, t) => {
        var n = C.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else {
            var o = new Promise((t, o) => (n = e[r] = [t, o]));
            t.push((n[2] = o));
            var a = C.p + C.u(r),
              i = new Error();
            C.l(
              a,
              (t) => {
                if (C.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = o),
                    (i.request = a),
                    n[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var n,
            o,
            [a, i, s] = t,
            l = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (n in i) C.o(i, n) && (C.m[n] = i[n]);
            if (s) s(C);
          }
          for (r && r(t); l < a.length; l++)
            (o = a[l]), C.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        t = (self.webpackChunkv3_microfrontend_banners =
          self.webpackChunkv3_microfrontend_banners || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (() => {
      var e = {},
        r = C.l;
      C.l = function (t, n, o, a) {
        if (e[t]) e[t].push(n);
        else {
          e[t] = [n];
          var i = function (r) {
            var n = e[t];
            delete e[t], n && n.forEach((e) => e(r));
          };
          if (C.du) {
            var s = i;
            i = function (e) {
              if (
                -1 !== ["error", "timeout"].indexOf(e.type) &&
                t.startsWith(C.p) &&
                C.p !== C.du
              ) {
                console.warn(
                  "[AsyncJsChunksFallbackPlugin]: Failed to load " +
                    a +
                    " chunk from " +
                    C.p +
                    ". Now trying to load from the deploy url."
                );
                var n = t.replace(C.p, C.du);
                r(n, s, o, a);
              } else s(e);
            };
          }
          r(t, i, o, a);
        }
      };
    })(),
    (() => {
      try {
        var e = new URL(C.p);
        C.p = e.toString();
      } catch (r) {}
    })();
  var E = C(4362436);
  v3_microfrontend_banners = E;
})();
