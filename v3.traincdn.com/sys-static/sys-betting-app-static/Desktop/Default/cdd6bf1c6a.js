import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as d,
  runtimeCore_esmBundler_resolveComponent as c,
  runtimeCore_esmBundler_createBlock as p,
  runtimeCore_esmBundler_openBlock as i,
  reactivity_esmBundler_unref as r,
  theme_constants_themeType as v,
  runtimeCore_esmBundler_withCtx as w,
  runtimeCore_esmBundler_createElementVNode as n,
  runtimeCore_esmBundler_createElementBlock as l,
  runtimeCore_esmBundler_Fragment as u,
  runtimeCore_esmBundler_renderList as B,
  index_injectRemoteComponent as C,
  browser_useSharedStore as k,
  runtimeCore_esmBundler_withDirectives as o,
  runtimeCore_esmBundler_createVNode as m,
  runtimeDom_esmBundler_vShow as a,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as y,
  NUXT_THIRD_PARTY_MICRO_FRONTEND_URL as P,
} from "./entry-50afb6f36c.js";
const S = { class: "third-party-preview-games-with-header-skeleton__items" },
  f = d({
    __name: "ThirdPartyPreviewGamesWithHeaderSkeleton",
    setup(h) {
      return (s, t) => {
        $_$();
        const e = c("UiSkeleton");
        return (
          i(),
          p(
            e,
            {
              theme: r(v).primary_20,
              class: "third-party-preview-games-with-header-skeleton",
            },
            {
              default: w(
                () =>
                  $_$() && [
                    t[0] ||
                      (t[0] = n(
                        "div",
                        {
                          class:
                            "third-party-preview-games-with-header-skeleton__header",
                        },
                        null,
                        -1
                      )),
                    n("div", S, [
                      (i(),
                      l(
                        u,
                        null,
                        B(
                          16,
                          (_) =>
                            $_$() &&
                            n("div", {
                              key: _,
                              class:
                                "third-party-preview-games-with-header-skeleton__item",
                            })
                        ),
                        64
                      )),
                    ]),
                  ]
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
  T = y(f, [["__scopeId", "data-v-a0b80396"]]),
  H = d({
    __name: "ThirdPartyPreviewGamesWithHeader",
    setup(h) {
      $_$();
      const s = C(P, "PreviewGamesWithHeader"),
        e = k().get("thirdParty/isPreviewGamesLoaded");
      return (_, G) =>
        $_$() &&
        (i(),
        l(
          u,
          null,
          [
            o(m(T, null, null, 512), [[a, !r(e)]]),
            o(m(r(s), null, null, 512), [[a, r(e)]]),
          ],
          64
        ));
    },
  });
export { H as _sfc_main };
