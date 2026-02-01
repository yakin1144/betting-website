import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as l,
  runtimeCore_esmBundler_computed as p,
  runtimeCore_esmBundler_resolveComponent as c,
  runtimeCore_esmBundler_createElementBlock as _,
  runtimeCore_esmBundler_openBlock as t,
  runtimeCore_esmBundler_createVNode as C,
  runtimeCore_esmBundler_createBlock as d,
  runtimeCore_esmBundler_createCommentVNode as i,
  reactivity_esmBundler_unref as n,
  theme_constants_themeType as B,
  runtimeCore_esmBundler_withCtx as f,
  runtimeCore_esmBundler_createElementVNode as o,
  runtimeCore_esmBundler_Fragment as v,
  runtimeCore_esmBundler_defineAsyncComponent as k,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { UiGamesLoaderStub as y } from "./60d766cde4.js";
import { _export_sfc as h, loadFavoritesApp as L } from "./entry-50afb6f36c.js";
const S = { class: "left-side-nav-loader" },
  N = l({
    __name: "LeftSideNavLoader",
    props: { isCompact: { type: Boolean }, hasGame: { type: Boolean } },
    setup(s) {
      $_$();
      const r = s,
        m = p(() => !r.isCompact && r.hasGame);
      return (a, e) => {
        $_$();
        const u = c("UiSkeleton");
        return (
          t(),
          _("div", S, [
            C(
              u,
              { theme: n(B).primary, class: "left-side-nav-loader__skeleton" },
              {
                default: f(
                  () =>
                    $_$() && [
                      e[2] ||
                        (e[2] = o(
                          "div",
                          { class: "left-side-nav-loader__ico" },
                          null,
                          -1
                        )),
                      a.isCompact
                        ? i("", !0)
                        : (t(),
                          _(
                            v,
                            { key: 0 },
                            [
                              e[0] ||
                                (e[0] = o(
                                  "div",
                                  { class: "left-side-nav-loader__name" },
                                  null,
                                  -1
                                )),
                              e[1] ||
                                (e[1] = o(
                                  "div",
                                  { class: "left-side-nav-loader__arrow" },
                                  null,
                                  -1
                                )),
                            ],
                            64
                          )),
                    ]
                ),
                _: 1,
              },
              8,
              ["theme"]
            ),
            n(m) ? (t(), d(y, { key: 0, gameCount: 1 })) : i("", !0),
          ])
        );
      };
    },
  }),
  G = h(N, [["__scopeId", "data-v-c3aaeae5"]]),
  w = l({
    __name: "FavoritesApp",
    setup(s) {
      $_$();
      const r = k(L);
      return (m, a) => $_$() && (t(), d(n(r)));
    },
  });
export { G as LeftSideNavLoader, w as _sfc_main };
