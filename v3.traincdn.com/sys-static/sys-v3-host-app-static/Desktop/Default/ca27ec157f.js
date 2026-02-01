import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./ffafaa2040.js",
      "./f59398d84b.js",
      "./entry-85993dc44c.js",
      "./c955f88782.css",
      "./20de15747e.js",
      "./fdbae7c87b.css",
      "./d9f6a4243d.js",
      "./36a2d8947c.css",
      "./9eb2d82d24.js",
      "./e3f402a1cc.css",
    ])
) => i.map((i) => d[i]);
import {
  index_useT as z,
  index_getConfig as w,
  toFirstLetterUpperCase_toFirstLetterUpperCase as W,
  size_constants_sizeType as M,
  iconName as g,
  iconLogos as D,
  ICON_LOGOS_PATH as G,
  useCoreBus as N,
  useToggle_useToggle as H,
  reactivity_esmBundler_ref as j,
  runtimeCore_esmBundler_computed as a,
  runtimeCore_esmBundler_defineAsyncComponent as X,
  reactivity_esmBundler_unref as t,
  runtimeCore_esmBundler_onMounted as L,
  runtimeCore_esmBundler_onBeforeUnmount as P,
  index_getConfigs as $,
  useGlobalStore as K,
  ICON_NAME_PATH as A,
  runtimeCore_esmBundler_defineComponent as q,
  runtimeCore_esmBundler_resolveComponent as v,
  runtimeCore_esmBundler_createElementBlock as O,
  runtimeCore_esmBundler_openBlock as b,
  runtimeCore_esmBundler_createBlock as y,
  runtimeCore_esmBundler_createCommentVNode as U,
  runtimeCore_esmBundler_Fragment as J,
  runtimeCore_esmBundler_renderList as Q,
  runtimeCore_esmBundler_resolveDynamicComponent as I,
  runtimeCore_esmBundler_mergeProps as x,
  runtimeCore_esmBundler_toHandlers as Y,
  runtimeCore_esmBundler_withCtx as E,
  runtimeCore_esmBundler_createVNode as F,
  statusType as Z,
  runtimeCore_esmBundler_createTextVNode as tt,
  shared_esmBundler_toDisplayString as et,
  shared_esmBundler_normalizeClass as ot,
  runtimeCore_esmBundler_onBeforeMount as st,
  router_useRoute as nt,
  bettingRouteName_BettingRouteName as rt,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useSocialLinksV2 as ut,
  useConsultant as R,
  __vitePreload as V,
  getAccessCallback as it,
  _export_sfc as lt,
  useHostAppAnalytics as pt,
} from "./entry-85993dc44c.js";
const at = () => {
    $_$();
    const u = z(),
      s = "X",
      c = w(-1020),
      { socialLinks: n } = ut(c, 5);
    return {
      supportSocialOptions: n.map(({ name: o, value: e }) => {
        $_$();
        const r = W(o);
        return {
          component: "a",
          attrs: { href: e, target: "_blank" },
          text: u("support_multi_button_app", { app: r }),
          description: u("support_multi_button_app_description", { app: r }),
          iconAttrs: { path: G, ico: o === s ? D.TWITTER : o.toLowerCase() },
          linkIcon: g.EXTERNAL_LINK,
          linkIconSize: M.s,
        };
      }),
    };
  },
  ct = () => {
    $_$();
    const {
        showConsultant: u,
        isAvailableConsultant: s,
        hasUnreadMessages: c,
      } = R(),
      n = z(),
      i = N(),
      [o, e] = H(!1),
      r = j(!1),
      m = a(
        () =>
          $_$() &&
          X(
            t(r)
              ? () =>
                  V(
                    () => import("./ffafaa2040.js"),
                    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
                    import.meta.url
                  )
              : () =>
                  V(
                    () => import("./9eb2d82d24.js"),
                    __vite__mapDeps([8, 4, 2, 3, 5, 6, 9]),
                    import.meta.url
                  )
          )
      ),
      d = () => {
        (e.value = !1), i.emit("disableSupportBanner", !1);
      },
      _ = (f) => {
        $_$();
        if (f) {
          t(e) && i.emit("disableSupportBanner", !0);
          return;
        }
        t(e) && o();
      };
    L(() => {
      i.on("showSupportBtn", _);
    }),
      P(() => {
        i.off("showSupportBtn", _);
      });
    const [B, l = ""] = $(63, 1849),
      C = K(),
      k = it(l),
      S = a(() => C.isUserAuth),
      h = a(() => $_$() && k && t(S) && B),
      { supportSocialOptions: T } = at(),
      p = a(
        () =>
          $_$() && [
            ...[
              {
                component: "button",
                text: n("support_multi_button_callback"),
                events: {
                  click: () => {
                    (r.value = !0), o();
                  },
                },
                iconAttrs: { ico: g.PHONE, path: A },
                isVisible: t(h),
              },
              {
                component: "button",
                text: n("support_multi_button_chat"),
                events: { click: u },
                iconAttrs: { ico: g.ONLINE_CONSULTANT, path: A },
                isVisible: s,
                isStatusMarkerVisible: t(c),
              },
              {
                component: "button",
                text: n("support_multi_button_email"),
                events: {
                  click: () => {
                    (r.value = !1), o();
                  },
                },
                iconAttrs: { ico: g.MAILING, path: A },
              },
            ].filter(({ isVisible: f }) => f !== !1),
            ...T,
          ]
      );
    return {
      toggleSupportForm: o,
      closeSupportForm: d,
      isSupportFormVisible: e,
      supportOptions: p,
      supportFormComponent: m,
    };
  },
  mt = { class: "support-multi-button-widget" },
  _t = q({
    __name: "SupportMultiButtonWidget",
    props: { isCompactButton: { type: Boolean, default: !1 } },
    emits: ["close"],
    setup(u, { emit: s }) {
      $_$();
      const c = u,
        n = w(1728),
        i = a(() => ({
          "support-multi-button-widget-form--compact": c.isCompactButton,
          [`support-multi-button-widget-form--theme-${n}`]: !!n,
        })),
        o = s,
        e = N(),
        {
          toggleSupportForm: r,
          closeSupportForm: m,
          isSupportFormVisible: d,
          supportOptions: _,
          supportFormComponent: B,
        } = ct(),
        l = () => {
          m(), o("close");
        };
      return (
        L(() => {
          e.on("toggleStickyBarTab", l);
        }),
        P(() => {
          e.off("toggleStickyBarTab", l);
        }),
        (C, k) => {
          $_$();
          const S = v("UiIco"),
            h = v("UiStatusMarker"),
            T = v("UiCaption");
          return (
            b(),
            O("div", mt, [
              (b(!0),
              O(
                J,
                null,
                Q(
                  t(_),
                  (p, f) =>
                    $_$() &&
                    (b(),
                    y(
                      I(p.component),
                      x({ ref_for: !0 }, p.attrs, { key: f }, Y(p.events), {
                        class: "support-multi-button-widget__link",
                      }),
                      {
                        default: E(
                          () =>
                            $_$() && [
                              F(
                                S,
                                x({ ref_for: !0 }, p.iconAttrs, {
                                  size: t(M).s,
                                  class: "support-multi-button-widget__ico",
                                }),
                                null,
                                16,
                                ["size"]
                              ),
                              p.isStatusMarkerVisible
                                ? (b(),
                                  y(
                                    h,
                                    {
                                      key: 0,
                                      status: t(Z).SUCCESS,
                                      class:
                                        "support-multi-button-widget__marker",
                                    },
                                    null,
                                    8,
                                    ["status"]
                                  ))
                                : U("", !0),
                              F(
                                T,
                                {
                                  size: t(M).xs,
                                  class: "support-multi-button-widget__text",
                                },
                                {
                                  default: E(
                                    () => $_$() && [tt(et(p.text), 1)]
                                  ),
                                  _: 2,
                                },
                                1032,
                                ["size"]
                              ),
                            ]
                        ),
                        _: 2,
                      },
                      1040
                    ))
                ),
                128
              )),
              t(d)
                ? (b(),
                  y(
                    I(t(B)),
                    {
                      key: 0,
                      onBack: t(r),
                      onClose: l,
                      class: ot(["support-multi-button-widget-form", t(i)]),
                    },
                    null,
                    40,
                    ["onBack", "class"]
                  ))
                : U("", !0),
            ])
          );
        }
      );
    },
  }),
  dt = lt(_t, [["__scopeId", "data-v-2902094f"]]),
  St = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ft = () => {
    $_$();
    var u;
    const s = N(),
      { hideConsultant: c, hasUnreadMessages: n } = R(),
      i = pt(),
      [o, e] = H(!1),
      r = () => {
        (e.value = !1), s.emit("disableSupportBanner", !1);
      },
      m = (S) => {
        $_$();
        if (S) {
          t(e) && s.emit("disableSupportBanner");
          return;
        }
        c(), o();
      };
    L(() => {
      s.on("showSupportBtn", m);
    }),
      st(() => {
        s.off("showSupportBtn", m);
      });
    const d = () => {
        $_$();
        s.emit("disableSupportBanner"),
          o(),
          t(e) && i.modules.header.sendAnalyticsSupportButton("scroll_button");
      },
      _ = (u = w(1403)) != null ? u : [],
      B = nt(),
      l = a(() => $_$() && t(B).name === rt.HOME),
      C = a(() => ($_$() && _.includes("stickyActionBar") ? !t(l) : !0));
    return {
      supportMultiButtonClasses: a(
        () =>
          $_$() && {
            "support-multi-button--is-active": t(e),
            "support-multi-button--sticky": t(l) && C,
          }
      ),
      isSupportOptionsVisible: e,
      hasUnreadMessages: n,
      toggleSupportMultiBtn: d,
      isShowStickyActionBar: C,
      closeSupportOptions: r,
    };
  };
export {
  dt as SupportMultiButtonWidget,
  St as SupportMultiButtonWidget$1,
  ft as useSupportMultiButton,
};
