import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as B } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as C,
  execAsync as u,
  useGlobalStore as v,
  reactivity_esmBundler_toRef as p,
  runtimeCore_esmBundler_useTemplateRef as R,
  runtimeCore_esmBundler_computed as y,
  reactivity_esmBundler_unref as r,
  runtimeCore_esmBundler_watch as b,
  runtimeCore_esmBundler_nextTick as w,
  runtimeCore_esmBundler_createBlock as k,
  runtimeCore_esmBundler_openBlock as x,
  shared_esmBundler_normalizeStyle as H,
  shared_esmBundler_normalizeClass as A,
  runtimeCore_esmBundler_withCtx as M,
  runtimeCore_esmBundler_createVNode as z,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { LayoutSidebar as E } from "./8378022687.js";
import { RightSide as T } from "./b390ca0c87.js";
import { createRightSideConfig as D } from "./a042466034.js";
import {
  loadRightSideConfigDesktop as G,
  _export_sfc as I,
} from "./entry-50afb6f36c.js";
import "./d37a535062.js";
import "./32064d16d1.js";
import "./3fb5c2806a.js";
import "./5389ac53d9.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
import "./9de70556bb.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "./7fd3152d11.js";
import "./1af6a171a2.js";
import "./978e9c7c45.js";
import "./166d83902c.js";
import "./8a75424771.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
const L = C({
    __name: "BettingRightAside",
    async setup(N) {
      $_$();
      let o, a, n, _;
      const g =
          (([n, _] = B(() => G())),
          (n = (([o, a] = u(() => n)), (o = await o), a(), o)),
          _(),
          n),
        { config: d, styles: h } = g();
      D(d);
      const s = v(),
        m = p(() => s.isRightSectionHidden),
        f = p(() => s.isRightSectionHover),
        l = R("rightSide"),
        S = y(() => {
          $_$();
          var t;
          return (t = r(l)) == null ? void 0 : t.rightSideMedia;
        }),
        c = (t, e) => {
          $_$();
          var i;
          d.isRightSideHover &&
            (((i = r(S)) != null && i.$el.contains(t.target)) ||
              s.setRightSectionHover(e));
        };
      return (
        b(m, async () => {
          $_$();
          let t, e;
          ([t, e] = u(() => $_$() && w())),
            await t,
            e(),
            window.dispatchEvent(new Event("toggleRightSection"));
        }),
        (t, e) =>
          $_$() &&
          (x(),
          k(
            E,
            {
              onMouseover: e[0] || (e[0] = (i) => c(i, !0)),
              onMouseleave: e[1] || (e[1] = (i) => c(i, !1)),
              rightSidebar: "",
              class: A([
                "betting-right-aside",
                {
                  "betting-right-aside--is-compact": r(m),
                  "betting-right-aside--is-shown": r(f),
                },
              ]),
              isCompact: r(m),
              style: H(r(h)),
            },
            {
              default: M(
                () =>
                  $_$() && [z(T, { ref_key: "rightSide", ref: l }, null, 512)]
              ),
              _: 1,
            },
            8,
            ["isCompact", "style", "class"]
          ))
      );
    },
  }),
  ne = I(L, [["__scopeId", "data-v-30658be8"]]);
export { ne as default };
