import $_$ from "./$_$.js";
$_$();
import {
  ColorType as I,
  size_constants_sizeType as v,
  runtimeCore_esmBundler_defineComponent as T,
  useGlobalStore as B,
  runtimeCore_esmBundler_computed as _,
  useRouterMethodsWithLang as y,
  index_getConfig as b,
  runtimeCore_esmBundler_resolveComponent as h,
  runtimeCore_esmBundler_createElementBlock as x,
  runtimeCore_esmBundler_openBlock as a,
  runtimeCore_esmBundler_createVNode as M,
  runtimeCore_esmBundler_createBlock as C,
  runtimeCore_esmBundler_createCommentVNode as p,
  reactivity_esmBundler_unref as u,
  runtimeCore_esmBundler_withCtx as m,
  runtimeCore_esmBundler_createTextVNode as k,
  shared_esmBundler_toDisplayString as d,
  nuxtLink_default as N,
  isDef as S,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useHostAppAnalytics as z,
  _export_sfc as O,
  useMenuConfig as A,
  filterMenuItemsTree as D,
  getVisibilityState as E,
} from "./entry-85993dc44c.js";
const g = { size: v.xs, color: I.clrDecent },
  V = { class: "footer-cookie" },
  $ = T({
    __name: "FooterCookie",
    props: {
      isLinkInText: { type: Boolean, default: !0 },
      textColor: { default: g.color },
    },
    setup(i) {
      $_$();
      const l = B(),
        n = _(() => l.getLanguage),
        { useLangLocation: r } = y(n),
        c = b(91),
        t = r(c),
        e = z(),
        o = () => {
          e.modules.footer.trackClickOnCookieLink();
        };
      return (s, P) => {
        $_$();
        const f = N,
          L = h("UiCaption");
        return (
          a(),
          x("div", V, [
            M(
              L,
              {
                size: u(g).size,
                color: s.textColor,
                class: "footer-cookie__text",
              },
              {
                default: m(
                  () =>
                    $_$() && [
                      k(d(s.$T("footer_cookie_file")) + " ", 1),
                      s.isLinkInText
                        ? (a(),
                          C(
                            f,
                            {
                              key: 0,
                              onClick: o,
                              to: u(t),
                              class: "footer-cookie__link",
                            },
                            {
                              default: m(
                                () =>
                                  $_$() && [
                                    k(d(s.$T("footer_cookie_learn_more")), 1),
                                  ]
                              ),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ))
                        : p("", !0),
                    ]
                ),
                _: 1,
              },
              8,
              ["size", "color"]
            ),
            s.isLinkInText
              ? p("", !0)
              : (a(),
                C(
                  f,
                  {
                    key: 0,
                    onClick: o,
                    to: u(t),
                    class: "footer-cookie__link footer-cookie__link--outside",
                  },
                  {
                    default: m(
                      () => $_$() && [k(d(s.$T("footer_cookie_learn_more")), 1)]
                    ),
                    _: 1,
                  },
                  8,
                  ["to"]
                )),
          ])
        );
      };
    },
  }),
  W = O($, [["__scopeId", "data-v-9e730e28"]]),
  j = (i) => {
    $_$();
    const l = A();
    return _(() => {
      $_$();
      var n;
      return (
        ((n = l.footer) == null
          ? void 0
          : n
              .map((r) =>
                D(r, ({ visibilityByAuth: c }) => $_$() && E(c, u(i)))
              )
              .filter(S)) || []
      );
    });
  },
  F = /\.(jpg|png|pdf)/,
  G = () => {
    $_$();
    const i = B(),
      l = _(() => i.isUserAuth),
      n = j(l),
      r = (t) =>
        t.map((e) => {
          var o;
          return Object.assign(Object.create(Object.getPrototypeOf(e)), e, {
            ...((o = e.link) != null && o.startsWith("/") && !F.test(e.link)
              ? { link: `/${i.getLanguage}${e.link}` }
              : {}),
            ...(e.id === "menuItemMobileVersion" ? { link: e.link } : {}),
            subMenuItems: r(e.subMenuItems),
          });
        });
    return {
      menu: _(() => {
        $_$();
        var t;
        return r(
          ((t = u(n)) != null ? t : []).filter((e) => {
            var o;
            return (o = e == null ? void 0 : e.subMenuItems) == null
              ? void 0
              : o.length;
          })
        );
      }),
    };
  };
export { W as FooterCookie, G as useFooterNav };
