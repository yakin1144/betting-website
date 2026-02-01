import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as s,
  runtimeCore_esmBundler_resolveComponent as l,
  runtimeCore_esmBundler_createBlock as m,
  runtimeCore_esmBundler_openBlock as _,
  reactivity_esmBundler_unref as o,
  theme_constants_themeType as u,
  runtimeCore_esmBundler_withCtx as c,
  runtimeCore_esmBundler_createElementVNode as f,
  index_getConfig as r,
  runtimeCore_esmBundler_computed as B,
  runtimeCore_esmBundler_defineAsyncComponent as g,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as C,
  loadBettingMainPromoDesktop as v,
} from "./entry-50afb6f36c.js";
import { BannersWidgetLoader as h } from "./b6f603b6f3.js";
import { useTopEventsConfig as k } from "./e7037efd24.js";
const y = s({
    __name: "TopEventsPromoLoader",
    setup(i) {
      return (n, e) => {
        $_$();
        const t = l("UiSkeleton");
        return (
          _(),
          m(
            t,
            { theme: o(u).primary, class: "top-events-promo-loader" },
            {
              default: c(
                () =>
                  ($_$() && e[0]) ||
                  (e[0] = [
                    f(
                      "div",
                      { class: "top-events-promo-loader__content" },
                      null,
                      -1
                    ),
                  ])
              ),
              _: 1,
            },
            8,
            ["theme"]
          )
        );
      };
    },
  }),
  P = C(y, [["__scopeId", "data-v-029f69fa"]]),
  S = s({
    __name: "BettingMainPromoDesktop",
    setup(i) {
      $_$();
      const { topEventsConfig: n } = k(),
        e = r(565),
        t = r(2101),
        a = e && t,
        p = B(() => ($_$() && !!o(n).length) || e),
        d = g({
          loader: v,
          loadingComponent: a ? h : P,
          suspensible: !o(p),
          delay: 0,
        });
      return (x, E) =>
        $_$() && (_(), m(o(d), { class: "betting-main-promo-desktop" }));
    },
  }),
  T = Object.freeze(
    Object.defineProperty({ __proto__: null, default: S }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  T as BettingMainPromoDesktop,
  P as TopEventsPromoLoader,
  S as _sfc_main,
};
