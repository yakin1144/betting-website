import $_$ from "./$_$.js";
$_$();
import {
  index_getConfig as B,
  size_constants_sizeType as _,
  runtimeCore_esmBundler_defineComponent as T,
  useGlobalStore as H,
  useRouterMethodsWithLang as x,
  runtimeCore_esmBundler_computed as c,
  runtimeCore_esmBundler_resolveComponent as d,
  runtimeCore_esmBundler_createBlock as f,
  runtimeCore_esmBundler_openBlock as i,
  runtimeCore_esmBundler_resolveDynamicComponent as P,
  reactivity_esmBundler_unref as o,
  runtimeCore_esmBundler_mergeProps as W,
  runtimeCore_esmBundler_withCtx as u,
  shared_esmBundler_normalizeClass as I,
  runtimeCore_esmBundler_createTextVNode as h,
  shared_esmBundler_toDisplayString as k,
  index_useT as $,
  runtimeCore_esmBundler_createElementBlock as C,
  runtimeCore_esmBundler_createCommentVNode as O,
  runtimeCore_esmBundler_createVNode as z,
  runtimeCore_esmBundler_createElementVNode as U,
  index_injectRemoteComponent as b,
  theme_constants_themeType as V,
  WeightType as K,
  runtimeCore_esmBundler_Fragment as G,
  runtimeCore_esmBundler_renderList as R,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  parseMinAge as j,
  ICON_REGISTRATION_PATH as Z,
  _export_sfc as N,
  PLATFORM_APPS_MICRO_FRONTEND_URL as q,
  useHostAppAnalytics as J,
  useDashboardSingleSportLink as Q,
  useNavigationLinkHandler as X,
} from "./entry-85993dc44c.js";
import { MenuItemHOC as Y } from "./37be8e46f5.js";
import {
  MENU_IMG_SIZE as y,
  useTrackMenuItemClick as ee,
} from "./1c8c17a20a.js";
import { useFooterNav as oe } from "./63a1cba8b1.js";
const te = () => ({
    scrollToTop: (e = "auto") => {
      window.scrollTo({ top: 0, behavior: e });
    },
  }),
  ne = () => {
    $_$();
    var a;
    const e = Number((a = B(1044)) != null ? a : 0);
    return { casinoMinAge: e, hasCasinoMinAge: !!e };
  },
  se = { size: _.xl },
  ie = T({
    __name: "FooterMinAge",
    props: {
      hasIco: { type: Boolean, default: !1 },
      isCasinoMinAge: { type: Boolean, default: !1 },
      size: { default: _.s },
      circle: { type: Boolean, default: !1 },
      weight: { default: void 0 },
    },
    setup(a) {
      $_$();
      const e = a,
        r = j(B(548)),
        p = B(1674),
        { casinoMinAge: l } = ne(),
        t = H(),
        { getLinkWithLang: m } = x(c(() => t.language)),
        s = e.isCasinoMinAge ? `age-${l}` : `age-${r}`,
        v = e.isCasinoMinAge ? `${l}+` : `${r}+`,
        g = p
          ? { component: "NuxtLink", props: { to: m(p) } }
          : { component: "div" },
        D = c(() => ({
          "footer-min-age--text": !e.hasIco && !e.circle,
          "footer-min-age--circle": !e.hasIco && e.circle,
        })),
        M = c(() => ({ [`footer-min-age__ico--size-${e.size}`]: e.hasIco }));
      return (S, w) => {
        $_$();
        const A = d("UiIco"),
          n = d("UiCaption");
        return (
          i(),
          f(
            P(o(g).component),
            W(o(g).props, { class: ["footer-min-age", o(D)] }),
            {
              default: u(
                () =>
                  $_$() && [
                    S.hasIco
                      ? (i(),
                        f(
                          A,
                          {
                            key: 0,
                            ico: o(s),
                            path: o(Z),
                            class: I([o(M), "footer-min-age__ico"]),
                          },
                          null,
                          8,
                          ["ico", "path", "class"]
                        ))
                      : (i(),
                        f(
                          n,
                          {
                            key: 1,
                            size: o(se).size,
                            weight: S.weight,
                            class: "footer-min-age__text",
                          },
                          { default: u(() => $_$() && [h(k(o(v)), 1)]), _: 1 },
                          8,
                          ["size", "weight"]
                        )),
                  ]
              ),
              _: 1,
            },
            16,
            ["class"]
          )
        );
      };
    },
  }),
  ze = N(ie, [["__scopeId", "data-v-dcc67ee7"]]),
  re = { key: 0 },
  ae = ["srcset"],
  le = ["width", "height", "src"],
  ce = T({
    __name: "FooterNavLink",
    props: { item: {}, textSize: { default: _.xs } },
    setup(a) {
      $_$();
      const e = a,
        r = $(),
        p = c(() => {
          var t;
          return r((t = e.item.title) != null ? t : "", [], { translated: !0 });
        }),
        l = c(() => ({
          original: `${e.item.icon}_${y.DESKTOP}.png`,
          default: `${e.item.icon}_${y.DESKTOP}.webp`,
        }));
      return (t, m) => {
        $_$();
        const s = d("UiIco"),
          v = d("UiCaption");
        return (
          i(),
          f(
            Y,
            { item: t.item, class: "footer-nav-link" },
            {
              default: u(
                () =>
                  $_$() && [
                    t.item.icon
                      ? (i(),
                        C("picture", re, [
                          U(
                            "source",
                            { srcset: o(l).default, type: "image/webp" },
                            null,
                            8,
                            ae
                          ),
                          U(
                            "img",
                            {
                              width: o(y).DESKTOP,
                              height: o(y).DESKTOP,
                              src: o(l).original,
                              alt: "",
                              class: "footer-nav-link__img",
                            },
                            null,
                            8,
                            le
                          ),
                        ]))
                      : O("", !0),
                    t.item.ico
                      ? (i(),
                        f(
                          s,
                          {
                            key: 1,
                            ico: t.item.ico,
                            path: t.item.icoPath,
                            size: o(_).s,
                            class: "footer-nav-link__img",
                          },
                          null,
                          8,
                          ["ico", "path", "size"]
                        ))
                      : O("", !0),
                    z(
                      v,
                      { size: t.textSize },
                      { default: u(() => $_$() && [h(k(o(p)), 1)]), _: 1 },
                      8,
                      ["size"]
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["item"]
          )
        );
      };
    },
  }),
  ue = T({
    __name: "DownloadAppFooterWidgetDesktop",
    setup(a) {
      $_$();
      const e = b(q, "DownloadAppFooterWidgetDesktop");
      return (r, p) => {
        $_$();
        const l = d("UiCaption"),
          t = d("UiButton"),
          m = d("UiMessageBlockV2");
        return (
          i(),
          f(o(e), null, {
            error: u(
              ({ reload: s }) =>
                $_$() && [
                  z(
                    m,
                    { size: o(_).s },
                    {
                      title: u(
                        () =>
                          $_$() && [h(k(r.$T("main_dictionary_load_error")), 1)]
                      ),
                      default: u(
                        () =>
                          $_$() && [
                            h(k(r.$T("main_dictionary_refresh_page")), 1),
                          ]
                      ),
                      content: u(
                        () =>
                          $_$() && [
                            z(
                              t,
                              { onClick: s, size: o(_).s, theme: o(V).primary },
                              {
                                default: u(
                                  () =>
                                    $_$() && [
                                      z(
                                        l,
                                        { size: o(_).s },
                                        {
                                          default: u(
                                            () =>
                                              $_$() && [
                                                h(
                                                  k(
                                                    r.$T(
                                                      "main_refreshing_button"
                                                    )
                                                  ),
                                                  1
                                                ),
                                              ]
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ["size"]
                                      ),
                                    ]
                                ),
                                _: 2,
                              },
                              1032,
                              ["onClick", "size", "theme"]
                            ),
                          ]
                      ),
                      _: 2,
                    },
                    1032,
                    ["size"]
                  ),
                ]
            ),
            _: 1,
          })
        );
      };
    },
  }),
  pe = { class: "footer-nav-group" },
  _e = T({
    __name: "FooterNavGroup",
    props: {
      item: {},
      uppercase: { type: Boolean },
      isRowClass: { type: Boolean },
      isListOnHoverDecent: { type: Boolean },
      isListColorDecent: { type: Boolean },
      titleSize: {},
      linkTextSize: {},
    },
    setup(a) {
      $_$();
      const e = a,
        r = B(593),
        p = J(),
        { setDashboardSportFilter: l } = Q(),
        { scrollToTop: t } = te(),
        { trackMenuItemClick: m } = ee(),
        { isExternalLink: s } = X(),
        v = ({ id: n, link: F }) => {
          m({
            trackMenuItemClick: p.modules.footer.trackMenuItemClick,
            itemId: n,
            parentItemId: e.item.id,
            itemLink: F,
            itemIdsWithLink: ["topEvent"],
            itemIdsWithId: ["casinoTournaments"],
          });
        },
        g = (n) => {
          v(n),
            n.link && (s(n.actionType) || t(), n.actionType === 5 && l(n.link));
        },
        D = c(() => ({ "footer-nav-group__title--capitalize": !e.uppercase })),
        M = c(() => ({
          "footer-nav-group__list--hover-decent": e.isListOnHoverDecent,
          "footer-nav-group__list--clr-strong":
            !e.isListOnHoverDecent && !e.isListColorDecent,
          "footer-nav-group__list--decent": e.isListColorDecent,
          "footer-nav-group__list--row": e.isRowClass,
        })),
        S = c(() => e.item.id === "menuItemFooterApplications" && r),
        w = $(),
        A = c(() => {
          var n;
          return w((n = e.item.title) != null ? n : "", [], { translated: !0 });
        });
      return (n, F) => {
        $_$();
        const E = d("UiCaption");
        return (
          i(),
          C("div", pe, [
            z(
              E,
              {
                uppercase: n.uppercase,
                weight: o(K).BOLD,
                size: n.titleSize,
                class: I([o(D), "footer-nav-group__title"]),
              },
              { default: u(() => $_$() && [h(k(o(A)), 1)]), _: 1 },
              8,
              ["uppercase", "weight", "size", "class"]
            ),
            o(S)
              ? (i(), f(ue, { key: 0 }))
              : (i(),
                C(
                  "ul",
                  { key: 1, class: I([o(M), "footer-nav-group__list"]) },
                  [
                    (i(!0),
                    C(
                      G,
                      null,
                      R(
                        n.item.subMenuItems,
                        (L) =>
                          $_$() &&
                          (i(),
                          C("li", { key: L.id }, [
                            z(
                              ce,
                              {
                                onClick: (fe) => g(L),
                                item: L,
                                textSize: n.linkTextSize,
                              },
                              null,
                              8,
                              ["onClick", "item", "textSize"]
                            ),
                          ]))
                      ),
                      128
                    )),
                  ],
                  2
                )),
          ])
        );
      };
    },
  }),
  me = N(_e, [["__scopeId", "data-v-307ce18c"]]),
  de = T({
    __name: "FooterNav_F",
    props: {
      customMenu: { default: void 0 },
      uppercase: { type: Boolean, default: !0 },
      isNavGroupOnHoverDecent: { type: Boolean, default: !0 },
      isNavInList: { type: Boolean, default: !1 },
      isNavGroupColorDecent: { type: Boolean, default: !1 },
      navGroupTitleSize: { default: _.m },
      linkTextSize: { default: _.xs },
    },
    setup(a) {
      $_$();
      const e = a,
        r = B(593),
        { menu: p } = oe(),
        l = c(() => {
          $_$();
          var s;
          return (s = e.customMenu) != null ? s : o(p);
        }),
        t = c(() => $_$() && o(l).length === 1),
        m = c(() => ({
          "footer-nav--long": r,
          "footer-nav--contents": e.isNavInList,
        }));
      return (s, v) =>
        $_$() &&
        (i(),
        C(
          "nav",
          { class: I(["footer-nav", o(m)]) },
          [
            (i(!0),
            C(
              G,
              null,
              R(
                o(l),
                (g) =>
                  $_$() &&
                  (i(),
                  f(
                    me,
                    {
                      key: g.id,
                      item: g,
                      uppercase: s.uppercase,
                      isRowClass: o(t),
                      isListOnHoverDecent: s.isNavGroupOnHoverDecent,
                      isListColorDecent: s.isNavGroupColorDecent,
                      titleSize: s.navGroupTitleSize,
                      linkTextSize: s.linkTextSize,
                    },
                    null,
                    8,
                    [
                      "item",
                      "uppercase",
                      "isRowClass",
                      "isListOnHoverDecent",
                      "isListColorDecent",
                      "titleSize",
                      "linkTextSize",
                    ]
                  ))
              ),
              128
            )),
          ],
          2
        ));
    },
  }),
  Be = N(de, [["__scopeId", "data-v-20bc74c9"]]);
export { ze as FooterMinAge, Be as FooterNav, ne as useCasinoMinAge };
