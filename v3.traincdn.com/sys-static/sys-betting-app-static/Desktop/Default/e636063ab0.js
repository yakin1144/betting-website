import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./ef2feedb7c.js",
      "./8378022687.js",
      "./entry-50afb6f36c.js",
      "./2b1cf2c2a4.css",
      "./b390ca0c87.js",
      "./d37a535062.js",
      "./32064d16d1.js",
      "./3fb5c2806a.js",
      "./5389ac53d9.js",
      "./10dcfb9c91.js",
      "./11286bfc75.js",
      "./9de70556bb.js",
      "./7fd3152d11.js",
      "./1af6a171a2.js",
      "./978e9c7c45.js",
      "./55bccab962.css",
      "./166d83902c.js",
      "./fde1681505.css",
      "./a042466034.js",
      "./8a75424771.js",
      "./29bf064326.css",
      "./e72402c2a8.js",
      "./897390b30b.css",
    ])
) => $_$() && i.map((i) => $_$() && d[i]);
import {
  __vitePreload as s,
  defineMultiImplementedComponent as I,
  Platforms as T,
  loadBettingLayoutAppConfigDesktop as w,
  MediaTarget as z,
} from "./entry-50afb6f36c.js";
import {
  runtimeCore_esmBundler_defineComponent as D,
  runtimeCore_esmBundler_defineAsyncComponent as p,
  runtimeCore_esmBundler_computed as O,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_getCurrentInstance as x,
  execAsync as M,
  isEmbedded as R,
  runtimeCore_esmBundler_createElementBlock as V,
  runtimeCore_esmBundler_openBlock as o,
  runtimeCore_esmBundler_Fragment as N,
  runtimeCore_esmBundler_createBlock as m,
  runtimeCore_esmBundler_createCommentVNode as l,
  shared_esmBundler_normalizeStyle as P,
  runtimeCore_esmBundler_createSlots as H,
  runtimeCore_esmBundler_withCtx as i,
  runtimeCore_esmBundler_createVNode as a,
  page_default as F,
  runtimeCore_esmBundler_resolveDynamicComponent as U,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { withAsyncContext as W } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import { useHideLayout as j, HeaderMF as q } from "./dd5b7bf312.js";
import { useBettingLayout as G } from "./944eab39d4.js";
import {
  createBettingLayoutAppConfig as J,
  MediaApp as K,
} from "./f986a79eac.js";
import { Layout as Q } from "./5de13fcb04.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
import "./9de70556bb.js";
import "./7fd3152d11.js";
import "./1af6a171a2.js";
import "./4a993370c6.js";
import "./1b1940fd00.js";
import "./f9ccf7bc98.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
const fe = D({
  __name: "BettingLayoutApp",
  async setup(c) {
    $_$();
    let t, u, r, d;
    const { hideLayout: f } = j(),
      {
        hasLeftSidebar: y,
        leftSidebarSize: C,
        rightSidebarSize: B,
        currentRightSideType: S,
        currentLeftSideComponent: g,
        currentMainComponentLayoutName: h,
      } = G(),
      L = {
        0: p(() =>
          s(
            () => import("./ef2feedb7c.js"),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20,
            ]),
            import.meta.url
          )
        ),
        1: p(() =>
          s(
            () => import("./e72402c2a8.js"),
            __vite__mapDeps([
              21, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 22,
            ]),
            import.meta.url
          )
        ),
      },
      A = O(() => $_$() && L[e(S)]),
      b = {
        defineEntityImplementation: () => $_$() && { props: c, emit: x().emit },
      };
    I("BettingLayoutAppDesktop", {}, !0, [T.Desktop]),
      b.defineEntityImplementation();
    const v =
        (([r, d] = W(() => w())),
        (r = (([t, u] = M(() => r)), (t = await t), u(), t)),
        d(),
        r),
      { config: n, styles: k } = v();
    J(n);
    const E = !R() && !1;
    return (X, Y) => {
      $_$();
      const _ = F;
      return (
        o(),
        V(
          N,
          null,
          [
            e(E) ? (o(), m(q, { key: 0 })) : l("", !0),
            e(f)
              ? l("", !0)
              : (o(),
                m(
                  Q,
                  {
                    key: 1,
                    class: "betting-layout-app",
                    leftSidebarSize: e(C),
                    rightSidebarSize: e(B),
                    style: P(e(k)),
                  },
                  H(
                    {
                      main: i(
                        () => $_$() && [a(_, { name: e(h) }, null, 8, ["name"])]
                      ),
                      default: i(
                        () =>
                          $_$() && [
                            a(
                              K,
                              {
                                target: e(z).OVERVIEW,
                                renderSideAsOverview: e(n).renderSideAsOverview,
                                theme: e(n).mediaContainerTheme,
                              },
                              null,
                              8,
                              ["target", "renderSideAsOverview", "theme"]
                            ),
                          ]
                      ),
                      _: 2,
                    },
                    [
                      e(y)
                        ? {
                            name: "leftSidebar",
                            fn: i(
                              () =>
                                $_$() && [
                                  a(_, { name: e(g) }, null, 8, ["name"]),
                                ]
                            ),
                            key: "0",
                          }
                        : void 0,
                      e(n).hasRightSidebar
                        ? {
                            name: "rightSidebar",
                            fn: i(() => $_$() && [(o(), m(U(e(A))))]),
                            key: "1",
                          }
                        : void 0,
                    ]
                  ),
                  1032,
                  ["leftSidebarSize", "rightSidebarSize", "style"]
                )),
          ],
          64
        )
      );
    };
  },
});
export { fe as default };
