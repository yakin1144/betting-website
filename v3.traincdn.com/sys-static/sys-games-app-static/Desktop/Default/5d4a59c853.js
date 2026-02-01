import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./59d187cd26.js",
      "./entry-1d22092e0d.js",
      "./880225204f.css",
      "./77b30fea6f.css",
      "./c0a56f8b74.js",
      "./c6090e1246.css",
      "./5801fd5413.js",
      "./90ef131383.css",
      "./13653e83c8.js",
      "./e9ece99b8b.css",
      "./7dfee7f370.js",
      "./40d86ff6f3.css",
      "./5c44236948.js",
      "./2349a95ad0.css",
      "./63f309f2ac.js",
      "./276d49f51f.css",
      "./b643b49042.js",
      "./d1801a8ab2.css",
      "./60dc40b691.js",
      "./05269d2200.css",
      "./7b8547813f.js",
      "./e9ae8e9a6c.css",
    ])
) => $_$() && i.map((i) => d[i]);
import {
  runtimeCore_esmBundler_inject as Z,
  IS_PROVIDED_COMPONENT as he,
  runtimeCore_esmBundler_getCurrentInstance as ye,
  runtimeCore_esmBundler_onMounted as X,
  runtimeCore_esmBundler_defineComponent as O,
  reactivity_esmBundler_shallowRef as Le,
  execAsync as y,
  runtimeCore_esmBundler_createBlock as I,
  runtimeCore_esmBundler_openBlock as b,
  reactivity_esmBundler_unref as f,
  nuxt_useRuntimeConfig as Ae,
  index_useCDN as re,
  index_getConfigs as ae,
  useAccountStore as ge,
  reactivity_esmBundler_ref as x,
  runtimeCore_esmBundler_computed as g,
  isEmbedded as Ce,
  runtimeCore_esmBundler_watch as k,
  runtimeCore_esmBundler_createElementBlock as U,
  runtimeCore_esmBundler_createCommentVNode as q,
  runtimeCore_esmBundler_withDirectives as ne,
  runtimeCore_esmBundler_createElementVNode as j,
  runtimeDom_esmBundler_vShow as se,
  mitt_default as le,
  useNotifications_useNotifications as Re,
  runtimeCore_esmBundler_Fragment as De,
  runtimeCore_esmBundler_renderList as Te,
  runtimeCore_esmBundler_renderSlot as Ie,
  runtimeCore_esmBundler_withCtx as ie,
  useGlobalStore as Me,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  __vitePreload as d,
  REMOTE_SERVICE_LOCATION as Oe,
  REMOTE_STATIC_LOCATION as Q,
  useUserAuthenticationToken as ue,
  useComponentInfoService as de,
  HeaderComponent as ke,
  installRemotes as ce,
  loadRemoteModule as $,
  REMOTE_ENTRY_FILE_NAME as _e,
  _export_sfc as J,
} from "./entry-1d22092e0d.js";
import { withAsyncContext as we } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
var w = function () {
  return (
    (w =
      Object.assign ||
      function (e) {
        for (var o, a = 1, l = arguments.length; a < l; a++) {
          o = arguments[a];
          for (var m in o)
            Object.prototype.hasOwnProperty.call(o, m) && (e[m] = o[m]);
        }
        return e;
      }),
    w.apply(this, arguments)
  );
};
function Pe(t) {
  return t.toLowerCase();
}
var Se = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
  Ne = /[^A-Z0-9]+/gi;
function me(t, e) {
  e === void 0 && (e = {});
  for (
    var o = e.splitRegexp,
      a = o === void 0 ? Se : o,
      l = e.stripRegexp,
      m = l === void 0 ? Ne : l,
      C = e.transform,
      v = C === void 0 ? Pe : C,
      L = e.delimiter,
      A = L === void 0 ? " " : L,
      c = W(W(t, a, "$1\0$2"), m, "\0"),
      u = 0,
      r = c.length;
    c.charAt(u) === "\0";

  )
    u++;
  for (; c.charAt(r - 1) === "\0"; ) r--;
  return c.slice(u, r).split("\0").map(v).join(A);
}
function W(t, e, o) {
  return e instanceof RegExp
    ? t.replace(e, o)
    : e.reduce(function (a, l) {
        return a.replace(l, o);
      }, t);
}
function Be(t, e) {
  var o = t.charAt(0),
    a = t.substr(1).toLowerCase();
  return e > 0 && o >= "0" && o <= "9" ? "_" + o + a : "" + o.toUpperCase() + a;
}
function ee(t, e) {
  return (
    e === void 0 && (e = {}), me(t, w({ delimiter: "", transform: Be }, e))
  );
}
function Ve(t, e) {
  return e === void 0 && (e = {}), me(t, w({ delimiter: "." }, e));
}
function pe(t, e) {
  return e === void 0 && (e = {}), Ve(t, w({ delimiter: "_" }, e));
}
const Y = "Desktop",
  B = "v3-microfrontend-lobby",
  te = "/lobby",
  xe = "b2b-home";
var ve = ((t) => (
  (t.Default = "Default"),
  (t.China = "China"),
  (t.Asia = "Asia"),
  (t.Casino = "Casino"),
  t
))(ve || {});
const Ue = "games-app-home-page",
  $e = "default",
  je = () => ($_$() && Z == null ? void 0 : Z(he)),
  Ge = () => ({
    hydrate: () => {
      $_$();
      var e, o, a, l;
      return (
        je() &&
        ((l =
          (a =
            (o = (e = ye()) == null ? void 0 : e.provides) == null
              ? void 0
              : o.onVnodeMounted) != null
            ? a
            : Z("onVnodeMounted")) == null
          ? void 0
          : l())
      );
    },
  }),
  He = () => {
    $_$();
    const { hydrate: t } = Ge();
    X(t);
  },
  Fe = O({
    __name: "Loader_F",
    props: { version: { default: void 0 }, themeHashes: { default: void 0 } },
    async setup(t) {
      $_$();
      let e, o, a, l;
      const m = t,
        C = {
          Desktop: Object.assign({
            "/app/components/lobby/Desktop/loader/Asia/default/Loader.vue":
              () =>
                d(
                  () => import("./59d187cd26.js"),
                  __vite__mapDeps([0, 1, 2, 3]),
                  import.meta.url
                ),
            "/app/components/lobby/Desktop/loader/Casino/default/Loader.vue":
              () =>
                d(
                  () => import("./c0a56f8b74.js"),
                  __vite__mapDeps([4, 1, 2, 5]),
                  import.meta.url
                ),
            "/app/components/lobby/Desktop/loader/China/default/Loader.vue":
              () =>
                d(
                  () => import("./5801fd5413.js"),
                  __vite__mapDeps([6, 1, 2, 7]),
                  import.meta.url
                ),
            "/app/components/lobby/Desktop/loader/Default/default/Loader.vue":
              () =>
                d(
                  () => import("./13653e83c8.js"),
                  __vite__mapDeps([8, 1, 2, 9]),
                  import.meta.url
                ),
            "/app/components/lobby/Desktop/loader/Default/gafuj-pajug-funod/Loader.vue":
              () =>
                d(
                  () => import("./7dfee7f370.js"),
                  __vite__mapDeps([10, 8, 1, 2, 9, 11]),
                  import.meta.url
                ),
          }),
          Mobile: Object.assign({
            "/app/components/lobby/Mobile/loader/Asia/default/Loader.vue": () =>
              d(
                () => import("./5c44236948.js"),
                __vite__mapDeps([12, 1, 2, 13]),
                import.meta.url
              ),
            "/app/components/lobby/Mobile/loader/Casino/default/Loader.vue":
              () =>
                d(
                  () => import("./63f309f2ac.js"),
                  __vite__mapDeps([14, 1, 2, 15]),
                  import.meta.url
                ),
            "/app/components/lobby/Mobile/loader/China/default/Loader.vue":
              () =>
                d(
                  () => import("./b643b49042.js"),
                  __vite__mapDeps([16, 1, 2, 17]),
                  import.meta.url
                ),
            "/app/components/lobby/Mobile/loader/Default/default/Loader.vue":
              () =>
                d(
                  () => import("./60dc40b691.js"),
                  __vite__mapDeps([18, 1, 2, 19]),
                  import.meta.url
                ),
            "/app/components/lobby/Mobile/loader/Default/gafuj-pajug-funod/Loader.vue":
              () =>
                d(
                  () => import("./7b8547813f.js"),
                  __vite__mapDeps([20, 18, 1, 2, 19, 21]),
                  import.meta.url
                ),
          }),
        },
        v = {},
        L = C[Y],
        A = Le(null);
      for (const [r] of Object.entries(L)) {
        const p = r.match(/loader\/([^/]+)\/([^/]+)\/Loader\.vue$/);
        if (p) {
          const [, R, D] = p;
          v[R] || (v[R] = {}), (v[R][D] = L[r]);
        }
      }
      Object.values(ve).forEach((r) => {
        v[r].default = () =>
          ze(`~/app/components/lobby/${Y}/loader/${r}/default/Loader.vue`);
      });
      let c;
      const u = [...(m.themeHashes || []), $e];
      for (const r of u)
        try {
          if (m.version) {
            const p = v[m.version][r];
            if (p) {
              c = p;
              break;
            }
          }
        } catch (p) {}
      if (c) {
        const r =
          (([a, l] = we(() => c())),
          (a = (([e, o] = y(() => a)), (e = await e), o(), e)),
          l(),
          a);
        (A.value = r.default), He();
      }
      return (r, p) => $_$() && (b(), I(f(A)));
    },
  });
function ze(t) {
  switch (t) {
    case "~/app/components/lobby/Desktop/loader/Asia/default/Loader":
    case "~/app/components/lobby/Desktop/loader/Asia/default/Loader.vue":
      return d(
        () => import("./59d187cd26.js"),
        __vite__mapDeps([0, 1, 2, 3]),
        import.meta.url
      );
    case "~/app/components/lobby/Desktop/loader/Casino/default/Loader":
    case "~/app/components/lobby/Desktop/loader/Casino/default/Loader.vue":
      return d(
        () => import("./c0a56f8b74.js"),
        __vite__mapDeps([4, 1, 2, 5]),
        import.meta.url
      );
    case "~/app/components/lobby/Desktop/loader/China/default/Loader":
    case "~/app/components/lobby/Desktop/loader/China/default/Loader.vue":
      return d(
        () => import("./5801fd5413.js"),
        __vite__mapDeps([6, 1, 2, 7]),
        import.meta.url
      );
    case "~/app/components/lobby/Desktop/loader/Default/default/Loader":
    case "~/app/components/lobby/Desktop/loader/Default/default/Loader.vue":
      return d(
        () => import("./13653e83c8.js"),
        __vite__mapDeps([8, 1, 2, 9]),
        import.meta.url
      );
    case "~/app/components/lobby/Mobile/loader/Asia/default/Loader":
    case "~/app/components/lobby/Mobile/loader/Asia/default/Loader.vue":
      return d(
        () => import("./5c44236948.js"),
        __vite__mapDeps([12, 1, 2, 13]),
        import.meta.url
      );
    case "~/app/components/lobby/Mobile/loader/Casino/default/Loader":
    case "~/app/components/lobby/Mobile/loader/Casino/default/Loader.vue":
      return d(
        () => import("./63f309f2ac.js"),
        __vite__mapDeps([14, 1, 2, 15]),
        import.meta.url
      );
    case "~/app/components/lobby/Mobile/loader/China/default/Loader":
    case "~/app/components/lobby/Mobile/loader/China/default/Loader.vue":
      return d(
        () => import("./b643b49042.js"),
        __vite__mapDeps([16, 1, 2, 17]),
        import.meta.url
      );
    case "~/app/components/lobby/Mobile/loader/Default/default/Loader":
    case "~/app/components/lobby/Mobile/loader/Default/default/Loader.vue":
      return d(
        () => import("./60dc40b691.js"),
        __vite__mapDeps([18, 1, 2, 19]),
        import.meta.url
      );
    default:
      return new Promise(function (e, o) {
        (typeof queueMicrotask == "function"
          ? queueMicrotask
          : setTimeout)(o.bind(null, new Error("Unknown variable dynamic import: " + t)));
      });
  }
}
const fe = (t) => {
    $_$();
    const e = Ae(),
      o = re(),
      a = () => `${Oe}${t}/`,
      l = () =>
        e.public.CI_COMMIT_REF_NAME !== "master" ? `${Q}/` : o(`${Q}/`);
    return { remoteServiceUrl: a(), remoteCdnStaticUrl: l() };
  },
  Ze = O({
    __name: "Lobby",
    setup(t) {
      $_$();
      const { remoteServiceUrl: e, remoteCdnStaticUrl: o } = fe(te),
        [a, l, m] = ae(-1010, -1001, -1004),
        C = ge(),
        { userToken: v, updateAuthenticationToken: L } = ue(),
        A = x(null),
        c = x(!1),
        {
          componentInfo: u,
          isComponentInfoLoaded: r,
          isGameActivityEnabled: p,
          getGameActionName: R,
        } = de(te, xe),
        D = g(() => {
          var s;
          return ((s = u.value) == null ? void 0 : s.themes) || null;
        }),
        P = g(() => (u.value.name ? ee(u.value.name) : null)),
        G = g(() => !!D.value && !!P.value && !c.value),
        S = g(() => {
          var s;
          return (s = C.mainAccount) == null ? void 0 : s.id;
        }),
        H = g(() => {
          var s;
          return u.value && u.value.props
            ? (s = u.value.props) == null
              ? void 0
              : s.image
            : null;
        }),
        F = !Ce() && !1,
        n = () => {
          const s = document.getElementById(Ue);
          s && (s.style.display = "none");
        },
        _ = async (s, E) => {
          $_$();
          let i, h;
          ce({ [B]: { url: e, fileName: _e, containerName: pe(B) } }),
            (([i, h] = y(() => $(B, "./publicPath"))),
            (i = await i),
            h(),
            i).set(o);
          const { createApp: N } =
              (([i, h] = y(() => $(B, "App"))), (i = await i), h(), i),
            M = le();
          k(v, (T) => {
            M.emit("changeUserToken", T);
          }),
            k(S, (T) => {
              M.emit("changeMainAccountId", T);
            }),
            M.on("apiAuthFailed:request", async () => {
              $_$();
              let T, K;
              ([T, K] = y(() => L())),
                await T,
                K(),
                M.emit("apiAuthFailed:response", { token: v.value });
            }),
            M.on("ready", () => {
              c.value = !0;
            });
          const { notificationError: Ee } = Re();
          return (
            M.on("showErrorNotification", (T) => {
              Ee(T);
            }),
            ([i, h] = y(() =>
              N(
                {
                  whence: a,
                  group_id: l,
                  lng: m.id,
                  mainAccountId: S.value,
                  userToken: v.value,
                  view: Y,
                  gameActionName: R,
                  version: s,
                  themes: E,
                  altImgPath: H.value,
                },
                M
              )
            )),
            (i = await i),
            h(),
            i
          );
        };
      return (
        X(async () => {
          $_$();
          k(
            r,
            async () => {
              $_$();
              var s;
              let E, i;
              if (u.value) {
                const { name: h, themes: z } = u.value;
                if (h) {
                  (([E, i] = y(() => _(ee(h), z))),
                  (E = await E),
                  i(),
                  E).mount(A.value);
                  return;
                }
              }
              ((r.value && !((s = u.value) != null && s.name)) || !p.value) &&
                n();
            },
            { immediate: !0 }
          );
        }),
        (s, E) =>
          $_$() &&
          (b(),
          U("div", null, [
            f(F) ? (b(), I(f(ke), { key: 0 })) : q("", !0),
            f(G)
              ? (b(),
                I(Fe, { key: 1, version: f(P), themeHashes: f(D) }, null, 8, [
                  "version",
                  "themeHashes",
                ]))
              : q("", !0),
            ne(
              j(
                "div",
                { id: "games-app", ref_key: "gamesApp", ref: A },
                null,
                512
              ),
              [[se, f(c) && f(p)]]
            ),
          ]))
      );
    },
  }),
  it = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ze },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qe = "Desktop",
  Ye = { class: "games-skeleton" },
  Xe = O({
    __name: "GamesSkeleton",
    props: { repeat: { type: Number, default: 1 } },
    setup(t) {
      const e = t;
      return (o, a) =>
        $_$() &&
        (b(),
        U("div", Ye, [
          (b(!0),
          U(
            De,
            null,
            Te(
              e.repeat,
              (l) => $_$() && Ie(o.$slots, "default", { index: l }, void 0, !0)
            ),
            256
          )),
        ]));
    },
  }),
  be = J(Xe, [["__scopeId", "data-v-c6d36396"]]),
  Je = O({
    __name: "GamesThirdPartySliderLoader",
    setup(t) {
      return (e, o) =>
        $_$() &&
        (b(),
        I(
          be,
          { repeat: 15, class: "games-third-party-slider-loader" },
          {
            default: ie(
              () =>
                ($_$() && o[0]) ||
                (o[0] = [
                  j(
                    "div",
                    { class: "games-third-party-slider-loader__item" },
                    null,
                    -1
                  ),
                ])
            ),
            _: 1,
          }
        ));
    },
  }),
  Ke = J(Je, [["__scopeId", "data-v-b23bfd89"]]),
  Qe = O({
    __name: "GamesSliderLoader",
    setup(t) {
      return (e, o) =>
        $_$() &&
        (b(),
        I(
          be,
          { repeat: 15, class: "games-slider-loader" },
          {
            default: ie(
              () =>
                ($_$() && o[0]) ||
                (o[0] = [
                  j("div", { class: "games-slider-loader__item" }, null, -1),
                ])
            ),
            _: 1,
          }
        ));
    },
  }),
  We = J(Qe, [["__scopeId", "data-v-7d4de1e6"]]),
  et = O({
    __name: "GameSlidersLoader_F",
    props: { isPartnerView: { type: Boolean, default: !1 } },
    setup(t) {
      const e = t;
      return (o, a) =>
        $_$() && e.isPartnerView
          ? (b(), I(Ke, { key: 0 }))
          : (b(), I(We, { key: 1 }));
    },
  }),
  V = "v3-microfrontend-banners",
  oe = "/banners",
  tt = "banner-slider",
  ot = "games-app-banners",
  rt = O({
    __name: "GameSliders",
    setup(t) {
      $_$();
      const { remoteServiceUrl: e, remoteCdnStaticUrl: o } = fe(oe),
        [a, l, m, C] = ae(-1010, -1001, -1004, 672),
        L = re()(""),
        { userToken: A } = ue(),
        c = x(null),
        u = x(!1),
        {
          componentInfo: r,
          isComponentInfoLoaded: p,
          isGameActivityEnabled: R,
        } = de(oe, tt),
        D = g(() => (r.value ? r.value.name === "b2b" : null)),
        P = g(() => {
          var n;
          return r.value && r.value.props
            ? (n = r.value.props) == null
              ? void 0
              : n.image
            : null;
        }),
        G = g(() => D.value !== null && !!r.value.name && !u.value),
        S = Me(),
        H = () => {
          const n = document.getElementById(ot);
          n && (n.style.display = "none");
        },
        F = async () => {
          $_$();
          let n, _;
          ce({ [V]: { url: e, fileName: _e, containerName: pe(V) } }),
            (([n, _] = y(() => $(V, "./publicPath"))),
            (n = await n),
            _(),
            n).set(o);
          const { createRootComponent: E } =
              (([n, _] = y(() => $(V, "App"))), (n = await n), _(), n),
            i = le(),
            h = g(() => S.isRightSectionHidden);
          return (
            i.on("isLoaded", () => {
              u.value = !0;
            }),
            k(h, (N) => {
              i.emit("handleResizeSlider", N);
            }),
            ([n, _] = y(() =>
              E(
                {
                  whence: a,
                  group_id: l,
                  lng: m.id,
                  gamesName: C,
                  mainCdnUrl: L,
                  userToken: A.value,
                  view: qe,
                  isPartner: D.value,
                  altImgPath: P.value,
                },
                i
              )
            )),
            (n = await n),
            _(),
            n
          );
        };
      return (
        X(async () => {
          $_$();
          k(
            p,
            async () => {
              $_$();
              var n;
              let _, s;
              if (r.value) {
                const { name: E } = r.value;
                if (E) {
                  (([_, s] = y(() => F())), (_ = await _), s(), _).mount(
                    c.value
                  );
                  return;
                }
              }
              ((p.value && !((n = r.value) != null && n.name)) || !R.value) &&
                H();
            },
            { immediate: !0 }
          );
        }),
        (n, _) =>
          $_$() &&
          (b(),
          U("div", null, [
            f(G)
              ? (b(),
                I(et, { key: 0, isPartnerView: f(D) }, null, 8, [
                  "isPartnerView",
                ]))
              : q("", !0),
            ne(
              j(
                "div",
                { id: "games-app", ref_key: "gamesApp", ref: c },
                null,
                512
              ),
              [[se, f(u) && f(R)]]
            ),
          ]))
      );
    },
  }),
  ut = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { it as index, ut as index$1 };
