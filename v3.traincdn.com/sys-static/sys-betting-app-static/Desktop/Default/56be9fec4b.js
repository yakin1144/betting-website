import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as g,
  runtimeCore_esmBundler_getCurrentInstance as k,
  index_getConfig as r,
  runtimeCore_esmBundler_computed as y,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_createElementBlock as b,
  runtimeCore_esmBundler_openBlock as t,
  runtimeCore_esmBundler_createBlock as n,
  runtimeCore_esmBundler_createCommentVNode as i,
  runtimeCore_esmBundler_renderSlot as h,
  clientOnly_default as v,
  runtimeCore_esmBundler_withCtx as m,
  runtimeCore_esmBundler_createVNode as E,
  shared_esmBundler_normalizeClass as I,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { BannersWidgetLoader as w } from "./b6f603b6f3.js";
import { _sfc_main as L, TopEventsPromoLoader as T } from "./d470e270c1.js";
import { useBettingPageData as x } from "./4a993370c6.js";
import { useTopEventsConfig as M } from "./e7037efd24.js";
import { _sfc_main as P } from "./61a12c7732.js";
import {
  defineMultiImplementedComponent as S,
  Platforms as D,
  _export_sfc as N,
} from "./entry-50afb6f36c.js";
import "./1af6a171a2.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
import "./9de70556bb.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "./7fd3152d11.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
const O = { class: "betting-main" },
  W = g({
    __name: "BettingMain",
    setup(s) {
      $_$();
      const _ = {
        defineEntityImplementation: () => $_$() && { props: s, emit: k().emit },
      };
      S("BettingMain", {}, !0, [D.Desktop]), _.defineEntityImplementation();
      const { topEventsConfig: a } = M(),
        o = r(565),
        { isHomePage: l } = x(),
        c = r(2037),
        d = y(() => ($_$() && !!e(a).length) || o),
        u = r(2101),
        p = o && u,
        f = o ? "betting-main__ticker" : "betting-main__promo";
      return (B, $) => {
        $_$();
        const C = v;
        return (
          t(),
          b("div", O, [
            e(l)
              ? (t(),
                n(
                  C,
                  { key: 0 },
                  {
                    fallback: m(
                      () =>
                        $_$() && [
                          e(p)
                            ? (t(),
                              n(w, { key: 0, class: "betting-main__widget" }))
                            : e(d)
                            ? (t(),
                              n(T, { key: 1, class: "betting-main__promo" }))
                            : i("", !0),
                        ]
                    ),
                    default: m(
                      () =>
                        $_$() && [
                          E(L, { class: I(e(f)) }, null, 8, ["class"]),
                          e(c)
                            ? (t(),
                              n(P, { key: 0, class: "betting-main__winners" }))
                            : i("", !0),
                        ]
                    ),
                    _: 1,
                  }
                ))
              : i("", !0),
            h(B.$slots, "default", {}, void 0, !0),
          ])
        );
      };
    },
  }),
  Y = N(W, [["__scopeId", "data-v-ea7ad6c9"]]);
export { Y as default };
