import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as y,
  theme_constants_themeType as I,
  ImagesSizeType as g,
  ResizedImagesTeamLogoSizeType as f,
  reactivity_esmBundler_toRefs as h,
  runtimeCore_esmBundler_computed as i,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_resolveComponent as S,
  runtimeCore_esmBundler_createElementBlock as a,
  runtimeCore_esmBundler_openBlock as u,
  shared_esmBundler_normalizeClass as B,
  runtimeCore_esmBundler_createCommentVNode as T,
  runtimeCore_esmBundler_Fragment as z,
  runtimeCore_esmBundler_renderList as b,
  runtimeCore_esmBundler_createVNode as N,
  runtimeCore_esmBundler_createElementVNode as E,
  shared_esmBundler_toDisplayString as v,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as U } from "./entry-50afb6f36c.js";
const A = 3,
  $ = 1,
  k = y({
    name: "UiTeamIcons",
    props: {
      images: { type: Array, required: !0 },
      opponentsCount: { type: Number, required: !0 },
      countryIco: { type: [Number, String], default: "" },
      decreased: { type: Boolean, default: !1 },
      presetSize: { type: Number, default: f.S16 },
      boxSize: { type: Number, default: g.S16 },
      theme: { type: String, default: I.gray30 },
    },
    setup(n) {
      $_$();
      const {
          images: l,
          opponentsCount: m,
          countryIco: c,
          decreased: d,
        } = h(n),
        _ = i(() => {
          $_$();
          const e = t(l);
          return !e.length && !c ? [] : !e.length && c ? [""] : e;
        }),
        s = i(() => {
          $_$();
          const e = t(m),
            p = Math.min(t(d) ? $ : A, e) + 1,
            o = t(_);
          return e <= p
            ? o.length >= e
              ? o.slice(0, e)
              : o
            : o.slice(0, p - 1);
        }),
        r = i(() => {
          $_$();
          const e = t(s).length;
          return e && t(m) - e;
        }),
        C = i(() => ({
          [`ui-team-icons--theme-${n.theme}`]: n.opponentsCount > 1,
        }));
      return {
        displayedImages: s,
        hiddenImagesCount: r,
        uiTeamIconsClasses: C,
      };
    },
  }),
  D = { key: 0, class: "ui-team-icons-plus ui-team-icons__item" },
  L = { class: "ui-team-icons-plus__content" };
function M(n, l, m, c, d, _) {
  $_$();
  const s = S("UiIcoTeam");
  return (
    u(),
    a(
      "div",
      { class: B([n.uiTeamIconsClasses, "ui-team-icons"]) },
      [
        (u(!0),
        a(
          z,
          null,
          b(
            n.displayedImages,
            (r) =>
              $_$() &&
              (u(),
              a("span", { key: r, class: "ui-team-icons__item" }, [
                N(
                  s,
                  {
                    image: r,
                    countryIco: n.countryIco,
                    presetSize: n.presetSize,
                    boxSize: n.boxSize,
                    class: "ui-team-icons__ico",
                  },
                  null,
                  8,
                  ["image", "countryIco", "presetSize", "boxSize"]
                ),
              ]))
          ),
          128
        )),
        n.hiddenImagesCount
          ? (u(), a("span", D, [E("span", L, "+" + v(n.hiddenImagesCount), 1)]))
          : T("", !0),
      ],
      2
    )
  );
}
const V = U(k, [
  ["render", M],
  ["__scopeId", "data-v-65560353"],
]);
export { V as UiTeamIcons };
