import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_createElementBlock as p,
  runtimeCore_esmBundler_openBlock as a,
  runtimeCore_esmBundler_renderSlot as x,
  runtimeCore_esmBundler_defineComponent as k,
  runtimeCore_esmBundler_createBlock as h,
  nuxtLink_default as D,
  runtimeCore_esmBundler_withCtx as B,
  runtimeCore_esmBundler_createVNode as g,
  runtimeCore_esmBundler_Fragment as C,
  runtimeCore_esmBundler_renderList as L,
  runtimeCore_esmBundler_createElementVNode as f,
  runtimeCore_esmBundler_createTextVNode as $,
  shared_esmBundler_toDisplayString as O,
  runtimeCore_esmBundler_getCurrentInstance as I,
  useNuxtApp as M,
  useGlobalStore as y,
  useRouterMethodsWithLang as T,
  runtimeCore_esmBundler_computed as d,
  reactivity_esmBundler_unref as u,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as b,
  useTopEventsAnalytics as A,
  TopEventsBarCallOptions as j,
  defineMultiImplementedComponent as E,
  Platforms as N,
  usePartnersEventInfo as P,
} from "./entry-50afb6f36c.js";
const R = {},
  U = { class: "top-events-info-gradient" };
function V(t, i) {
  $_$();
  return a(), p("div", U, [x(t.$slots, "default", {}, void 0, !0)]);
}
const W = b(R, [
    ["render", V],
    ["__scopeId", "data-v-58f1230c"],
  ]),
  z = k({
    __name: "TopEventsInfoTicker",
    props: {
      eventName: { default: "" },
      eventLink: { default: "" },
      eventId: { default: 0 },
    },
    setup(t) {
      const i = t,
        { trackTopEventsBarCall: m } = A(),
        n = () => {
          m({ option: j.TIMER, topEventId: i.eventId });
        };
      return (l, s) => {
        $_$();
        const _ = D;
        return (
          a(),
          h(
            _,
            { onClick: n, to: l.eventLink },
            {
              default: B(
                () =>
                  $_$() && [
                    g(
                      W,
                      { class: "top-events-info-ticker" },
                      {
                        default: B(
                          () =>
                            $_$() && [
                              (a(),
                              p(
                                C,
                                null,
                                L(
                                  2,
                                  (o) =>
                                    $_$() &&
                                    f(
                                      "div",
                                      {
                                        key: o,
                                        class: "top-events-info-ticker__text",
                                      },
                                      [
                                        (a(),
                                        p(
                                          C,
                                          null,
                                          L(
                                            40,
                                            (c) =>
                                              $_$() &&
                                              f("div", { key: c }, [
                                                s[0] ||
                                                  (s[0] = f(
                                                    "span",
                                                    {
                                                      class:
                                                        "top-events-info-ticker__separator",
                                                    },
                                                    "•",
                                                    -1
                                                  )),
                                                $(O(l.eventName), 1),
                                              ])
                                          ),
                                          64
                                        )),
                                      ]
                                    )
                                ),
                                64
                              )),
                            ]
                        ),
                        _: 1,
                      }
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["to"]
          )
        );
      };
    },
  }),
  S = b(z, [["__scopeId", "data-v-61a0c339"]]),
  G = k({
    __name: "BettingMainPromoDesktop",
    props: {
      title: { type: String, default: "" },
      link: { type: String, default: "" },
    },
    setup(t) {
      $_$();
      const i = t,
        m = {
          defineEntityImplementation: () =>
            $_$() && { props: t, emit: I().emit },
        };
      E("BettingMainPromoDesktop", { props: i }, !0, [N.Desktop]),
        m.defineEntityImplementation();
      const n = (() => {
          $_$();
          var e, r;
          return (r =
            (e = M().$multiBuildConfig) == null
              ? void 0
              : e.BettingMainPromoDesktop) == null
            ? void 0
            : r.props;
        })(),
        l = y(),
        { getLinkWithLang: s } = T(() => l.language),
        { linkAfterStart: _, textKey: o } = P(),
        c = d(() => {
          $_$();
          var e;
          return (e = u(_)) != null ? e : s(n.link);
        }),
        v = d(() => (o != null ? o : n.title));
      return (e, r) =>
        $_$() &&
        (a(),
        p("div", null, [
          g(S, { eventLink: u(c), eventName: u(v) }, null, 8, [
            "eventLink",
            "eventName",
          ]),
        ]));
    },
  }),
  q = Object.freeze(
    Object.defineProperty({ __proto__: null, default: G }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  K = k({
    __name: "BettingMainPromoMobile",
    props: {
      title: { type: String, default: "" },
      link: { type: String, default: "" },
    },
    setup(t) {
      $_$();
      const i = t,
        m = {
          defineEntityImplementation: () =>
            $_$() && { props: t, emit: I().emit },
        };
      E("BettingMainPromoMobile", { props: i }, !0, [N.Mobile]),
        m.defineEntityImplementation();
      const n = (() => {
          $_$();
          var e, r;
          return (r =
            (e = M().$multiBuildConfig) == null
              ? void 0
              : e.BettingMainPromoMobile) == null
            ? void 0
            : r.props;
        })(),
        l = y(),
        { getLinkWithLang: s } = T(() => l.language),
        { linkAfterStart: _, textKey: o } = P(),
        c = d(() => {
          $_$();
          var e;
          return (e = u(_)) != null ? e : s(n.link);
        }),
        v = d(() => (o != null ? o : n.title));
      return (e, r) =>
        $_$() &&
        (a(),
        p("div", null, [
          g(S, { eventLink: u(c), eventName: u(v) }, null, 8, [
            "eventLink",
            "eventName",
          ]),
        ]));
    },
  }),
  H = Object.freeze(
    Object.defineProperty({ __proto__: null, default: K }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export {
  q as BettingMainPromoDesktop,
  H as BettingMainPromoMobile,
  S as TopEventsInfoTicker,
};
