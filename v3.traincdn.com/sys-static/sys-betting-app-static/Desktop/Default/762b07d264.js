import $_$ from "./$_$.js";
$_$();
import {
  iconName as l,
  runtimeCore_esmBundler_defineComponent as _,
  ImagesSizeType as d,
  runtimeCore_esmBundler_computed as m,
  runtimeCore_esmBundler_resolveComponent as p,
  runtimeCore_esmBundler_createBlock as i,
  runtimeCore_esmBundler_openBlock as s,
  reactivity_esmBundler_unref as o,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { LANGS_NAME_PATH as h } from "./entry-50afb6f36c.js";
const I = "default",
  f = [void 0, 225, 229],
  C = ({ countryId: c, isDefaultIcon: e }) => {
    $_$();
    if (e) return { icon: l.CHAMP_DEFAULT, bordered: !1 };
    const n = !f.includes(c);
    return { icon: n ? c : I, path: h, bordered: n };
  },
  T = _({
    __name: "UiChampIcon",
    props: {
      champ: {},
      isDefaultIcon: { type: Boolean },
      isIgnoreLogoType: { type: Boolean },
      boxSize: { default: d.S16 },
    },
    setup(c) {
      $_$();
      const e = c,
        n = m(() =>
          e.champ.logotype && !e.isIgnoreLogoType
            ? `/sfiles/logo-champ/${e.champ.logotype}`
            : ""
        ),
        t = m(() =>
          C({ countryId: e.champ.countryId, isDefaultIcon: e.isDefaultIcon })
        );
      return (r, y) => {
        $_$();
        const a = p("UiIco"),
          u = p("UiImg");
        return r.isDefaultIcon
          ? (s(),
            i(
              a,
              { key: 0, ico: o(l).CHAMP_DEFAULT, class: "ui-champ-icon" },
              null,
              8,
              ["ico"]
            ))
          : o(n)
          ? (s(),
            i(
              u,
              {
                key: 1,
                src: r.$cdn(o(n)),
                alt: r.champ.name,
                boxSize: r.boxSize,
                class: "ui-champ-icon",
              },
              null,
              8,
              ["src", "alt", "boxSize"]
            ))
          : (s(),
            i(
              a,
              {
                key: 2,
                ico: o(t).icon,
                path: o(t).path,
                bordered: o(t).bordered,
                class: "ui-champ-icon",
              },
              null,
              8,
              ["ico", "path", "bordered"]
            ));
      };
    },
  });
export { T as _sfc_main };
