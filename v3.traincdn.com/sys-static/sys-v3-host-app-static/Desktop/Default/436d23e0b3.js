import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as y,
  reactivity_esmBundler_toRefs as F,
  runtimeCore_esmBundler_computed as m,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_resolveDirective as T,
  runtimeCore_esmBundler_withDirectives as z,
  runtimeCore_esmBundler_createBlock as _,
  runtimeCore_esmBundler_openBlock as r,
  runtimeCore_esmBundler_withCtx as B,
  runtimeCore_esmBundler_createElementBlock as u,
  runtimeCore_esmBundler_createCommentVNode as h,
  runtimeCore_esmBundler_createElementVNode as g,
  shared_esmBundler_normalizeClass as S,
  runtimeCore_esmBundler_createTextVNode as w,
  shared_esmBundler_toDisplayString as N,
  index_getConfig as $,
  theme_constants_themeType as f,
  runtimeCore_esmBundler_Fragment as U,
  runtimeCore_esmBundler_renderList as A,
  runtimeCore_esmBundler_createVNode as D,
  WeightType as O,
  runtimeCore_esmBundler_getCurrentInstance as M,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useHostAppAnalytics as P,
  _export_sfc as I,
  useFooterMixedSocialLinks as W,
  useLayoutThemes as E,
  defineMultiImplementedComponent as V,
  Platforms as v,
} from "./entry-85993dc44c.js";
const R = () => {
    const n = P();
    return {
      onAnalyticForSocial: (o) =>
        n.modules.footer.trackFooterSocialMediaClick(o),
    };
  },
  x = { key: 0 },
  H = ["srcset"],
  j = ["src", "alt"],
  q = y({
    __name: "FooterSocialsIconsLink",
    props: {
      tooltipTheme: {},
      theme: {},
      size: { default: void 0 },
      link: { default: () => ({}) },
      block: { type: Boolean, default: !1 },
      uppercase: { type: Boolean, default: !1 },
      weight: { default: void 0 },
    },
    setup(n) {
      $_$();
      const s = n,
        { link: o } = F(s),
        l = m(() => {
          $_$();
          var t;
          return {
            "footer-socials-icons-link__icon--line":
              (t = e(o).styles) == null ? void 0 : t.caption,
            [`footer-socials-icons-link__icon--size-${s.size}`]: !!s.size,
          };
        }),
        i = m(() => {
          $_$();
          var t, c;
          return {
            [`footer-socials-icons-link__caption--theme-${
              (t = e(o).styles) == null ? void 0 : t.theme
            }`]: !!((c = e(o).styles) != null && c.theme),
          };
        }),
        a = m(
          () =>
            $_$() && {
              original: `${e(o).iconPath}_19.png`,
              default: `${e(o).iconPath}_19.webp`,
            }
        );
      return (t, c) => {
        $_$();
        const p = d("UiIco"),
          C = d("UiCaption"),
          b = d("UiButton"),
          L = T("tooltip");
        return z(
          (r(),
          _(
            b,
            {
              tag: "a",
              href: e(o).value,
              "aria-label": e(o).origName,
              title: e(o).origName,
              block: t.block,
              theme: t.theme,
              rounded: !1,
              class: "footer-socials-icons-link",
              target: "_blank",
            },
            {
              container: B(() => {
                $_$();
                var k;
                return [
                  e(o).iconPath
                    ? (r(),
                      u("picture", x, [
                        g(
                          "source",
                          { srcset: e(a).default, type: "image/webp" },
                          null,
                          8,
                          H
                        ),
                        g(
                          "img",
                          {
                            src: e(a).original,
                            alt: e(o).name,
                            class: "footer-socials-icons-link__img",
                          },
                          null,
                          8,
                          j
                        ),
                      ]))
                    : h("", !0),
                  e(o).iconName
                    ? (r(),
                      _(
                        p,
                        {
                          key: 1,
                          ico: e(o).iconName,
                          path: e(o).iconSection,
                          class: S(["footer-socials-icons-link__icon", e(l)]),
                        },
                        null,
                        8,
                        ["ico", "path", "class"]
                      ))
                    : h("", !0),
                  (k = e(o).styles) != null && k.caption
                    ? (r(),
                      _(
                        C,
                        {
                          key: 2,
                          class: S([
                            "footer-socials-icons-link__caption",
                            e(i),
                          ]),
                          uppercase: t.uppercase,
                          weight: t.weight,
                        },
                        {
                          default: B(
                            () => $_$() && [w(N(t.$T(e(o).styles.caption)), 1)]
                          ),
                          _: 1,
                        },
                        8,
                        ["class", "uppercase", "weight"]
                      ))
                    : h("", !0),
                ];
              }),
              _: 1,
            },
            8,
            ["href", "aria-label", "title", "block", "theme"]
          )),
          [[L, { content: e(o).origName, classes: t.tooltipTheme }]]
        );
      };
    },
  }),
  G = I(q, [["__scopeId", "data-v-512aef52"]]),
  J = ({ socialLinks: n }) => {
    $_$();
    const s = $(1571),
      o = {
        linePromo: { theme: f.accent, caption: "footer_socials_line_promo" },
        lineSupport: {
          theme: f.primary75,
          caption: "footer_socials_line_support",
        },
      };
    return {
      socialLinksWithStyleOptions: m(() =>
        $_$() && s
          ? e(n).map((i) => ({
              ...i,
              ...(i.label && i.label in o && { styles: o[i.label] }),
            }))
          : e(n)
      ),
    };
  },
  K = { class: "footer-socials-icons" },
  Q = y({
    __name: "FooterSocialsIcons_F",
    props: { theme: { default: f.gray30 }, size: { default: void 0 } },
    setup(n) {
      const { socialLinks: s } = W(),
        { layoutThemes: o } = E(),
        { onAnalyticForSocial: l } = R(),
        { socialLinksWithStyleOptions: i } = J({ socialLinks: s });
      return (a, t) =>
        $_$() &&
        (r(),
        u("ul", K, [
          (r(!0),
          u(
            U,
            null,
            A(
              e(i),
              (c, p) =>
                $_$() &&
                (r(),
                u("li", { key: `${c.name}-${p}` }, [
                  D(
                    G,
                    {
                      onClick: (C) => $_$() && e(l)(c.origName),
                      link: c,
                      theme: a.theme,
                      size: a.size,
                      tooltipTheme: e(o).tooltipTheme,
                      uppercase: "",
                      weight: e(O).BOLD,
                      class: "footer-socials-icons__link",
                    },
                    null,
                    8,
                    [
                      "onClick",
                      "link",
                      "theme",
                      "size",
                      "tooltipTheme",
                      "weight",
                    ]
                  ),
                ]))
            ),
            128
          )),
        ]));
    },
  }),
  X = I(Q, [["__scopeId", "data-v-41b5f577"]]),
  ee = y({
    __name: "FooterSocialsIcons",
    props: { theme: {}, size: {} },
    setup(n) {
      const s = n,
        o = {
          defineEntityImplementation: () =>
            $_$() && { props: n, emit: M().emit },
        };
      V("FooterSocials", { props: s }, !0, [v.Desktop, v.Mobile]);
      const { props: l } = o.defineEntityImplementation();
      return (i, a) =>
        $_$() &&
        (r(),
        _(X, { theme: e(l).theme, size: e(l).size }, null, 8, [
          "theme",
          "size",
        ]));
    },
  });
export { ee as default };
