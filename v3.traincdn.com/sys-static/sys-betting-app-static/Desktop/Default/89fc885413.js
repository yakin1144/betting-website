import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as s,
  BettingPageType as u,
  runtimeCore_esmBundler_getCurrentInstance as l,
  useGlobalStore as a,
  runtimeCore_esmBundler_computed as _,
  runtimeCore_esmBundler_onBeforeUnmount as f,
  runtimeCore_esmBundler_watch as c,
  runtimeCore_esmBundler_createBlock as d,
  runtimeCore_esmBundler_openBlock as g,
  runtimeCore_esmBundler_withCtx as B,
  runtimeCore_esmBundler_createVNode as C,
  reactivity_esmBundler_unref as T,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  defineMultiImplementedComponent as y,
  Platforms as b,
  _sfc_main$2 as L,
} from "./entry-50afb6f36c.js";
import { BettingLeftAsideTemplate as S } from "./27d38d3cde.js";
import { useBettingStore as I } from "./1af6a171a2.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import "./8378022687.js";
import "./9f1a1c8555.js";
const x = s({
  __name: "BettingLeftAside",
  props: { pageType: { default: u.HOME }, bettingType: {} },
  setup(t) {
    $_$();
    const o = t,
      i = {
        defineEntityImplementation: () => $_$() && { props: t, emit: l().emit },
      };
    y("BettingLeftAsideDesktop", { props: {} }, !0, [b.Desktop]),
      i.defineEntityImplementation();
    const n = a(),
      m = I(),
      r = _(() => {
        var e;
        return (e = o.bettingType) != null ? e : m.bettingCurrentBettingType;
      }),
      p = (e) => {
        n.setLeftSectionHover(e);
      };
    return (
      f(() => {
        n.setLeftSectionHover(!1);
      }),
      c(r, () => {
        p(!1);
      }),
      (e, v) =>
        $_$() &&
        (g(),
        d(
          S,
          { class: "betting-left-aside" },
          {
            leftSide: B(
              () =>
                $_$() && [
                  C(L, { pageType: e.pageType, bettingType: T(r) }, null, 8, [
                    "pageType",
                    "bettingType",
                  ]),
                ]
            ),
            _: 1,
          }
        ))
    );
  },
});
export { x as default };
