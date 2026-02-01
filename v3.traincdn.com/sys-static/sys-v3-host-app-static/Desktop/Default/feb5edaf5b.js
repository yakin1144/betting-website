import $_$ from "./$_$.js";
$_$();
import {
  ResponsibleGamblingLogoIds_ResponsibleGamblingLogoIds as g,
  runtimeCore_esmBundler_defineComponent as p,
  runtimeCore_esmBundler_computed as b,
  runtimeCore_esmBundler_createElementBlock as m,
  runtimeCore_esmBundler_openBlock as l,
  runtimeCore_esmBundler_Fragment as c,
  runtimeCore_esmBundler_renderList as d,
  shared_esmBundler_normalizeClass as C,
  reactivity_esmBundler_unref as a,
  runtimeCore_esmBundler_createBlock as f,
  runtimeCore_esmBundler_resolveDynamicComponent as B,
  runtimeCore_esmBundler_withCtx as y,
  runtimeCore_esmBundler_createElementVNode as _,
  MEDIA_EXTENSIONS as h,
  index_getConfig as G,
  responsibleGamblingLogos_responsibleGamblingLogos as L,
  router_useRoute as R,
  BettingPageType as k,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
/* empty css          */ import { _export_sfc as v } from "./entry-85993dc44c.js";
const u = {
    [g.GAMBLING_CARE]: "responsible_game_logos_gambling_care_white",
    [g.GORDON_MOODY]: "responsible_game_logos_gordon_moody_white",
  },
  w = { class: "footer-responsible-gambling" },
  E = ["srcset"],
  I = ["src", "alt"],
  P = p({
    __name: "FooterResponsibleGambling",
    props: {
      logos: { default: () => [] },
      isCyberPage: { type: Boolean, default: !1 },
    },
    setup(o) {
      $_$();
      const s = o,
        r = b(() => ({
          "footer-responsible-gambling__item--theme-cyber--35": s.isCyberPage,
          "footer-responsible-gambling__item--theme-primary--20":
            !s.isCyberPage,
        })),
        t = (e) => (e ? "a" : "div"),
        i = (e) => (e.link ? e.target || "_blank" : void 0);
      return (e, O) =>
        $_$() &&
        (l(),
        m("ul", w, [
          (l(!0),
          m(
            c,
            null,
            d(
              e.logos,
              (n) =>
                $_$() &&
                (l(),
                m(
                  "li",
                  {
                    key: n.id,
                    class: C([a(r), "footer-responsible-gambling__item"]),
                  },
                  [
                    (l(),
                    f(
                      B(t(n.link)),
                      { href: n.link, target: i(n) },
                      {
                        default: y(
                          () =>
                            $_$() && [
                              _("picture", null, [
                                _(
                                  "source",
                                  {
                                    srcset: e.$mediaUrl(n.mediaKey, a(h).WEBP),
                                    type: "image/webp",
                                  },
                                  null,
                                  8,
                                  E
                                ),
                                _(
                                  "img",
                                  {
                                    src: e.$mediaUrl(n.mediaKey),
                                    alt: n.name,
                                    class: "footer-responsible-gambling__img",
                                  },
                                  null,
                                  8,
                                  I
                                ),
                              ]),
                            ]
                        ),
                        _: 2,
                      },
                      1032,
                      ["href", "target"]
                    )),
                  ],
                  2
                ))
            ),
            128
          )),
        ]));
    },
  }),
  A = v(P, [["__scopeId", "data-v-b02916a9"]]),
  N = (o = "default") => {
    $_$();
    var s;
    const r = (s = G(1859)) != null ? s : [];
    let t = L.filter(({ id: i }) => r.includes(i));
    switch (o) {
      case "white": {
        t = t.map((i) => {
          const e = { ...i };
          return e.id in u && (e.mediaKey = u[e.id]), e;
        });
        break;
      }
    }
    return { visibleResponsibleGamblingLogos: t };
  },
  K = () => {
    $_$();
    const o = R(),
      { visibleResponsibleGamblingLogos: s } = N("white"),
      r = b(
        () =>
          ($_$() && a(o).params.pageType === k.CYBER) ||
          a(o).params.pageType === "esports"
      );
    return { responsibleGamblingLogos: s, isCyberPage: r };
  };
export { A as FooterResponsibleGambling, K as useFooter };
