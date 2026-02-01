"use strict";
(self.webpackChunkv3_microfrontend_banners =
  self.webpackChunkv3_microfrontend_banners || []).push([
  [75475863],
  {
    75475863: (e, a, n) => {
      n.r(a), n.d(a, { createRootComponent: () => g, initApp: () => u });
      var t = n(43194072),
        r = n(35910884),
        s = n(81453845),
        o = n(99799879),
        l = n(48439800),
        c = n(87369891);
      const i = {
        Desktop: (0, t.defineAsyncComponent)(() =>
          n.e(90221493).then(n.bind(n, 24513891))
        ),
        Mobile: (0, t.defineAsyncComponent)(() =>
          n.e(49536057).then(n.bind(n, 79567378))
        ),
      };
      function u(e, a, n) {
        n && (0, s.p)(n);
        const c = (0, r.createPinia)(),
          i = (0, t.createApp)(e);
        i.use(c), i.use(o.Ru);
        return (0, l.h)().initStore(a), (0, o.LE)(a.lng), i;
      }
      function g(e, a) {
        (0, c.i)(e);
        return u(i[e.view], e, a);
      }
    },
    22092859: (e, a, n) => {
      n.d(a, { z: () => t });
      let t = (function (e) {
        return (
          (e.xxxxs = "xxxxs"),
          (e.xxxs = "xxxs"),
          (e.xxs = "xxs"),
          (e.xs = "xs"),
          (e.s = "s"),
          (e.m = "m"),
          (e.l = "l"),
          (e.xl = "xl"),
          (e.xxl = "xxl"),
          e
        );
      })({});
    },
    66870897: (e, a, n) => {
      n.d(a, {
        I7: () => l,
        Zu: () => o,
        ag: () => u,
        bs: () => r,
        hM: () => s,
        jc: () => i,
      });
      var t = n(22092859);
      const r = "/sfiles/games-images/game-previews/",
        s = "/games",
        o = "imgproxy/resized/size",
        l = "301x180";
      let c = (function (e) {
        return (
          (e[(e.XXS = 375)] = "XXS"), (e[(e.SMALLEST = 0)] = "SMALLEST"), e
        );
      })({});
      c.XXS, c.SMALLEST;
      const i = t.z.m,
        u = { whence: 50, language: "", token: "" };
    },
    81453845: (e, a, n) => {
      let t;
      n.d(a, { d: () => s, p: () => r });
      const r = (e) => {
          t = e;
        },
        s = () => t;
    },
    99799879: (e, a, n) => {
      n.d(a, {
        LE: () => k,
        Ru: () => U,
        UK: () => h,
        pi: () => I,
        zv: () => m,
      });
      var t = n(13854563),
        r = n.n(t),
        s = n(17680399),
        o = n(17511707),
        l = n(70091657);
      const c = {
          EN: ["en", "en_GB"],
          RU: ["ru", "ru_RU"],
          FA: ["fa", "fa_IR"],
          AR: ["ar", "ar_AE"],
          IQ: ["iq", "ar_AE"],
          HE: ["he", "he_IL"],
          KU: ["ku", "ku_IR"],
          NE: ["ne", "ku_TR"],
          UR: ["ur", "ur_PK"],
          UA: ["ua", "uk_UA"],
          BY: ["by", "be_BY"],
          KZ: ["kz", "kk_KZ"],
          AZ: ["az", "az_AZ"],
          DEV: ["dev", "dev"],
        },
        i = c.EN[0],
        u = [...c.FA, ...c.AR, ...c.IQ, ...c.HE, ...c.KU, ...c.UR],
        g = [
          [c.UA, c.RU],
          [c.BY, c.RU],
          [c.KZ, c.RU],
          [c.AZ, c.RU],
        ],
        d = (() => {
          const e = ([e, a]) =>
            e.reduce((e, n, t) => {
              const r = a[t];
              return r ? { ...e, [n]: r } : e;
            }, {});
          return g.reduce((a, n) => ({ ...a, ...e(n) }), {});
        })(),
        p = (e) => d[e] || i,
        m = (e) => u.includes(e),
        v = (e) => c.EN.includes(e),
        f = () => {
          const e =
            navigator.languages && navigator.languages.length
              ? navigator.languages
              : [navigator.language];
          return [
            ...new Set(
              e.flatMap((e) =>
                e
                  .split("-")
                  .reverse()
                  .map((e) => e.toLowerCase())
              )
            ),
          ];
        },
        h = () =>
          ((e) => {
            const a = e?.match(/^([a-zA-Z]{2})(?:[_-]([a-zA-Z]{2}))?$/);
            return a
              ? a[2]
                ? `${a[1].toLowerCase()}_${a[2].toUpperCase()}`
                : a[1].toLowerCase()
              : null;
          })(new URLSearchParams(window.location.search).get("lg")) ||
          f()[0] ||
          i,
        x = [];
      let A = [],
        b = !1,
        w = !1,
        S = !1;
      const R = (0, l.A)("translations"),
        E = async () => {
          try {
            const {
                data: { version: e },
              } = await r().get(`${R}/version`),
              a = await (async () =>
                o.AppStorage.getItem(o.AppStorageKeys.DICTIONARIES_VERSION))();
            (b = e === a),
              b ||
                (await (async (e) =>
                  o.AppStorage.setItem(
                    o.AppStorageKeys.DICTIONARIES_VERSION,
                    e
                  ))(e));
          } catch (e) {
            console.error(e);
          }
        },
        U = (0, s.createI18n)({
          legacy: !1,
          locale: i,
          silentFallbackWarn: !0,
          silentTranslationWarn: !0,
          missing: (e, a) => {},
        }),
        _ = async (e, a) => {
          if (A.includes(a)) return Promise.resolve();
          A.push(a);
          const n = `${R}/${e}/${a}.json`,
            t = b
              ? {}
              : {
                  headers: {
                    "Cache-Control": "no-cache",
                    Pragma: "no-cache",
                    Expires: 0,
                  },
                };
          try {
            const { data: s } = await r().get(n, t);
            U.global.mergeLocaleMessage(e, { [a]: s });
          } catch (s) {
            A = A.filter((e) => e !== a);
            const n = U.global.fallbackLocale.value,
              t = n[n.indexOf(e) + 1];
            if (!t) return Promise.reject(s);
            await _(t, a);
          }
        },
        k = (e) => {
          if (S) return;
          const a = e,
            n = ((e) => c.DEV.includes(e))(a) ? c.RU[0] : a;
          (U.global.locale.value = a),
            (U.global.fallbackLocale.value = ((e) => {
              const a = [];
              let n = p(e);
              for (; !v(n); ) a.push(n), (n = p(n));
              const t = new Set([...f(), ...a, i]);
              return t.delete(e), [...t];
            })(n)),
            (r().defaults.headers.common["Accept-Language"] = n),
            E().then(() => {
              (w = !0),
                x.forEach(({ dictionaryName: e, resolve: a, reject: n }) => {
                  _(U.global.locale.value, e).then(a).catch(n);
                });
            }),
            (S = !0);
        },
        I = (...e) =>
          Promise.all(
            e.map((e) =>
              w
                ? _(U.global.locale.value, e)
                : ((e) =>
                    new Promise((a, n) => {
                      x.push({ dictionaryName: e, resolve: a, reject: n });
                    }))(e)
            )
          );
    },
    48439800: (e, a, n) => {
      n.d(a, { h: () => l });
      var t = n(35910884),
        r = n(43194072);
      let s = (function (e) {
        return (e.Desktop = "Desktop"), (e.Mobile = "Mobile"), e;
      })({});
      var o = n(99799879);
      const l = (0, t.defineStore)("sliders", () => {
        const e = (0, r.ref)(!1),
          a = (0, r.ref)(null),
          n = (0, r.ref)(!1),
          t = (0, r.ref)(""),
          l = (0, r.ref)(""),
          c = (0, r.ref)(""),
          i = (0, r.ref)(null),
          u = (0, r.computed)(() => l.value === s.Mobile);
        return {
          isDictionaryLoaded: e,
          mainCdnUrl: a,
          isThirdParty: n,
          projectName: t,
          isMobileView: u,
          language: c,
          altImgUrl: i,
          initStore: function (r) {
            (a.value = r.mainCdnUrl || ""),
              (n.value = r.isPartner ?? !1),
              (t.value = r.gamesName),
              (l.value = r.view),
              (c.value = r.lng || (0, o.UK)()),
              (i.value = r.altImgPath ?? null),
              (0, o.pi)("common").then(() => {
                e.value = !0;
              });
          },
        };
      });
    },
    70091657: (e, a, n) => {
      n.d(a, { A: () => s });
      const t = (e) =>
        e.startsWith(n.du)
          ? e
          : (e.startsWith("/") && (e = e.slice(1)), n.du + e);
      const r = function (e) {
        const a = "banners";
        return a ? e.replace(`/${a}/`, "/") : e;
      };
      const s = function (e) {
        return r(t(e));
      };
    },
    87369891: (e, a, n) => {
      n.d(a, { i: () => r });
      var t = n(66870897);
      const r = (e) => {
        var a;
        (a = { whence: e.whence, language: e.lng, token: e.userToken }),
          Object.assign(t.ag, a);
      };
    },
  },
]);
