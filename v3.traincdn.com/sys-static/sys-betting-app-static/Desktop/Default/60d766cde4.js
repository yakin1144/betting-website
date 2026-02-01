import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as d } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as p,
  execAsync as C,
  runtimeCore_esmBundler_computed as f,
  runtimeCore_esmBundler_resolveComponent as g,
  runtimeCore_esmBundler_createBlock as v,
  runtimeCore_esmBundler_openBlock as B,
  reactivity_esmBundler_unref as h,
  runtimeCore_esmBundler_withCtx as k,
  runtimeCore_esmBundler_createElementVNode as e,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  loadSportsMenuAppConfigDesktop as x,
  _export_sfc as y,
} from "./entry-50afb6f36c.js";
const S = p({
    __name: "UiGamesLoader",
    props: { gameCount: {}, theme: {} },
    async setup(a) {
      $_$();
      let o, m, r, s;
      const _ = a,
        i =
          (([r, s] = d(() => x())),
          (r = (([o, m] = C(() => r)), (o = await o), m(), o)),
          s(),
          r),
        { config: l } = i(),
        u = f(() => {
          var t;
          return (t = _.theme) != null ? t : l.uiGameLoaderTheme;
        });
      return (t, n) => {
        $_$();
        const c = g("UiSkeleton");
        return (
          B(),
          v(
            c,
            { repeat: t.gameCount, theme: h(u), class: "ui-games-loader" },
            {
              default: k(
                () =>
                  ($_$() && n[0]) ||
                  (n[0] = [
                    e(
                      "div",
                      { class: "ui-games-loader__item" },
                      [
                        e("div", { class: "ui-games-loader__info" }, [
                          e("div", { class: "ui-games-loader__champ" }),
                          e("div", { class: "ui-games-loader__team" }),
                          e("div", { class: "ui-games-loader__time" }),
                        ]),
                        e("div", { class: "ui-games-loader__ico" }),
                      ],
                      -1
                    ),
                  ])
              ),
              _: 1,
            },
            8,
            ["repeat", "theme"]
          )
        );
      };
    },
  }),
  A = y(S, [["__scopeId", "data-v-00f75eb7"]]);
export { A as UiGamesLoaderStub };
