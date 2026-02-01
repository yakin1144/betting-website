import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_resolveComponent as a,
  runtimeCore_esmBundler_createElementBlock as c,
  runtimeCore_esmBundler_openBlock as t,
  runtimeCore_esmBundler_createBlock as n,
  runtimeCore_esmBundler_defineComponent as l,
  runtimeCore_esmBundler_getCurrentInstance as d,
  runtimeCore_esmBundler_computed as f,
  reactivity_esmBundler_unref as o,
  runtimeCore_esmBundler_createCommentVNode as v,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _sfc_main as B } from "./d5d8947b5c.js";
import {
  _export_sfc as C,
  defineMultiImplementedComponent as k,
  Platforms as E,
} from "./entry-50afb6f36c.js";
import { useBettingPageData as g } from "./4a993370c6.js";
import { useTopEventsConfig as I } from "./e7037efd24.js";
import "./1b56a6724e.js";
import "./8fb686e8dc.js";
import "./edc84b4da7.js";
import "./6e5c097416.js";
import "./1af6a171a2.js";
import "./5f6b076bc4.js";
import "./10dcfb9c91.js";
import "./11286bfc75.js";
import "./9de70556bb.js";
import "../../../shared-assets/__shared_fast_deep_equal_RNYYWXHZ.js";
import "./7fd3152d11.js";
import "./d886be212e.js";
import "./58a21526ee.js";
import "../../../shared-assets/__shared_vue_deps_SVFQYWER.js";
const T = { class: "top-events-promo" };
function y(e, r, m, i, p, s) {
  $_$();
  const _ = a("TopEventsInfoEvents"),
    u = a("TopEventsInfoTicker");
  return (
    t(),
    c("div", T, [
      e.hasSelector
        ? (t(), n(_, { key: 0 }))
        : (t(),
          n(
            u,
            {
              key: 1,
              eventLink: e.topEventsPageLink,
              eventName: e.topEvent.title,
              eventId: e.topEvent.id,
            },
            null,
            8,
            ["eventLink", "eventName", "eventId"]
          )),
    ])
  );
}
const P = C(B, [["render", y]]),
  F = l({
    __name: "BettingMainPromoDesktop",
    props: {
      title: { type: String, default: "" },
      link: { type: String, default: "" },
    },
    setup(e) {
      $_$();
      const r = e,
        m = {
          defineEntityImplementation: () =>
            $_$() && { props: e, emit: d().emit },
        };
      k("BettingMainPromoDesktop", { props: r }, !0, [E.Desktop]),
        m.defineEntityImplementation();
      const { isHomePage: i } = g(),
        { topEventsConfig: p } = I(),
        s = f(() => $_$() && !!o(p).length && o(i));
      return (_, u) => ($_$() && o(s) ? (t(), n(P, { key: 0 })) : v("", !0));
    },
  });
export { F as default };
