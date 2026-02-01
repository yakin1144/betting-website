import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as f } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as k,
  execAsync as v,
  runtimeCore_esmBundler_computed as y,
  runtimeCore_esmBundler_resolveComponent as S,
  runtimeCore_esmBundler_createElementBlock as m,
  runtimeCore_esmBundler_openBlock as s,
  shared_esmBundler_normalizeClass as w,
  runtimeCore_esmBundler_createBlock as M,
  runtimeCore_esmBundler_createCommentVNode as u,
  runtimeCore_esmBundler_createVNode as U,
  reactivity_esmBundler_unref as l,
  theme_constants_themeType as A,
  runtimeCore_esmBundler_withCtx as p,
  runtimeCore_esmBundler_createElementVNode as n,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  loadSportsMenuAppConfigDesktop as L,
  _export_sfc as N,
} from "./entry-50afb6f36c.js";
const V = { class: "ui-sports-menu-loader__item" },
  g = { key: 0, class: "ui-sports-menu-loader__name" },
  E = { key: 1, class: "ui-sports-menu-loader__arrow" },
  T = k({
    __name: "UiSportsMenuLoader",
    props: { champsCount: {}, theme: {}, isCompact: { type: Boolean } },
    async setup(d) {
      $_$();
      let o, _, t, i;
      const c = d,
        C =
          (([t, i] = f(() => L())),
          (t = (([o, _] = v(() => t)), (o = await o), _(), o)),
          i(),
          t),
        { config: B } = C(),
        h = y(() => {
          var e;
          return (e = c.theme) != null ? e : B.uiSportsMenuLoaderTheme;
        });
      return (e, r) => {
        $_$();
        const a = S("UiSkeleton");
        return (
          s(),
          m(
            "div",
            {
              class: w([
                "ui-sports-menu-loader",
                { "ui-sports-menu-loader--is-compact": e.isCompact },
              ]),
            },
            [
              e.isCompact
                ? (s(),
                  M(
                    a,
                    {
                      key: 0,
                      theme: l(A).primary,
                      class: "ui-sports-menu-loader__skeleton",
                    },
                    {
                      default: p(
                        () =>
                          ($_$() && r[0]) ||
                          (r[0] = [
                            n(
                              "div",
                              { class: "ui-sports-menu-loader__item" },
                              [
                                n("div", {
                                  class: "ui-sports-menu-loader__ico",
                                }),
                              ],
                              -1
                            ),
                          ])
                      ),
                      _: 1,
                    },
                    8,
                    ["theme"]
                  ))
                : u("", !0),
              U(
                a,
                {
                  theme: l(h),
                  repeat: e.champsCount,
                  class: "ui-sports-menu-loader__skeleton",
                },
                {
                  default: p(
                    () =>
                      $_$() && [
                        n("div", V, [
                          r[1] ||
                            (r[1] = n(
                              "div",
                              { class: "ui-sports-menu-loader__ico" },
                              null,
                              -1
                            )),
                          e.isCompact ? u("", !0) : (s(), m("div", g)),
                          e.isCompact ? u("", !0) : (s(), m("div", E)),
                        ]),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["theme", "repeat"]
              ),
            ],
            2
          )
        );
      };
    },
  }),
  D = N(T, [["__scopeId", "data-v-46299fda"]]);
export { D as UiSportsMenuLoader };
