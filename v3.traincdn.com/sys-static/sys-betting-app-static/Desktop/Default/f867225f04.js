import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as b,
  defaultThemeType as p,
  defaultSizeType as g,
  reactivity_esmBundler_toRefs as B,
  runtimeCore_esmBundler_createElementBlock as f,
  runtimeCore_esmBundler_openBlock as s,
  shared_esmBundler_normalizeClass as n,
  runtimeCore_esmBundler_createVNode as v,
  runtimeCore_esmBundler_createElementVNode as l,
  nuxtLink_default as C,
  runtimeCore_esmBundler_createBlock as y,
  runtimeCore_esmBundler_createCommentVNode as h,
  runtimeCore_esmBundler_renderSlot as z,
  reactivity_esmBundler_unref as t,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { UiToggleFavoriteButton as T } from "./e37cc43aaf.js";
import { useToggleFavoriteGame as F } from "./6e5c097416.js";
import { _export_sfc as L } from "./entry-50afb6f36c.js";
const N = { class: "ui-sub-game-block__container" },
  S = { class: "ui-sub-game-block__label" },
  $ = b({
    __name: "UiSubGameBlock",
    props: {
      gameId: {},
      link: { default: "" },
      title: { default: "" },
      size: { default: g },
      theme: { default: p },
      hasFavoriteButton: { type: Boolean },
      isOpened: { type: Boolean },
      bettingType: {},
    },
    emits: ["clickLink"],
    setup(r, { emit: u }) {
      $_$();
      const a = r,
        m = u,
        { gameId: c, bettingType: _ } = B(a),
        { isFavorite: o, toggleFavorite: d } = F({ gameId: c, bettingType: _ });
      return (e, i) => {
        $_$();
        const k = C;
        return (
          s(),
          f(
            "div",
            {
              class: n([
                [
                  { "ui-sub-game-block--is-opened": e.isOpened },
                  `ui-sub-game-block--size-${e.size}`,
                  `ui-sub-game-block--theme-${e.theme}`,
                ],
                "ui-sub-game-block",
              ]),
            },
            [
              v(
                k,
                {
                  onClick: i[0] || (i[0] = (G) => m("clickLink")),
                  to: e.link,
                  title: e.title,
                  class: "ui-sub-game-block__link ui-sub-game-block-link",
                },
                null,
                8,
                ["to", "title"]
              ),
              l("div", N, [
                l("span", S, [z(e.$slots, "default", {}, void 0, !0)]),
                e.hasFavoriteButton
                  ? (s(),
                    y(
                      T,
                      {
                        key: 0,
                        onClick: t(d),
                        isActive: t(o),
                        size: e.size,
                        class: n([
                          { "ui-sub-game-block__favorite--is-active": t(o) },
                          "ui-sub-game-block__control ui-sub-game-block__favorite",
                        ]),
                      },
                      null,
                      8,
                      ["onClick", "isActive", "size", "class"]
                    ))
                  : h("", !0),
              ]),
            ],
            2
          )
        );
      };
    },
  }),
  E = L($, [["__scopeId", "data-v-18dd34e8"]]);
export { E as UiSubGameBlock };
