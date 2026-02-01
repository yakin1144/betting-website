import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as s,
  runtimeCore_esmBundler_createElementBlock as t,
  runtimeCore_esmBundler_openBlock as a,
  shared_esmBundler_normalizeClass as d,
  runtimeCore_esmBundler_renderSlot as o,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as n } from "./entry-50afb6f36c.js";
const l = s({
    __name: "LeftSideNavItem",
    props: { isSeparated: { type: Boolean }, isRounded: { type: Boolean } },
    setup(i) {
      return (e, r) =>
        $_$() &&
        (a(),
        t(
          "li",
          {
            class: d([
              "left-side-nav-item",
              [
                {
                  "left-side-nav-item--is-separated": e.isSeparated,
                  "left-side-nav-item--is-rounded": e.isRounded,
                },
              ],
            ]),
          },
          [o(e.$slots, "default", {}, void 0, !0)],
          2
        ));
    },
  }),
  f = n(l, [["__scopeId", "data-v-329b1c1e"]]),
  p = s({
    __name: "LeftSideNavItems",
    props: {
      theme: {},
      hasFullPadding: { type: Boolean },
      isSeparated: { type: Boolean },
      isNested: { type: Boolean },
      hasTopBorder: { type: Boolean },
    },
    setup(i) {
      return (e, r) =>
        $_$() &&
        (a(),
        t(
          "ul",
          {
            class: d([
              "left-side-nav-items",
              [
                {
                  [`left-side-nav-items--theme-${e.theme}`]: e.theme,
                  "left-side-nav-items--has-full-padding": e.hasFullPadding,
                  "left-side-nav-items--is-separated": e.isSeparated,
                  "left-side-nav-items--is-nested": e.isNested,
                  "left-side-nav-items--has-top-border": e.hasTopBorder,
                },
              ],
            ]),
          },
          [o(e.$slots, "default", {}, void 0, !0)],
          2
        ));
    },
  }),
  v = n(p, [["__scopeId", "data-v-08d8b600"]]),
  m = s({
    __name: "LeftSideNav",
    props: { isRounded: { type: Boolean } },
    setup(i) {
      return (e, r) =>
        $_$() &&
        (a(),
        t(
          "nav",
          {
            class: d([
              { "left-side-nav--is-rounded": e.isRounded },
              "left-side-nav",
            ]),
          },
          [o(e.$slots, "default", {}, void 0, !0)],
          2
        ));
    },
  }),
  c = n(m, [["__scopeId", "data-v-a56bc42f"]]);
export { c as LeftSideNav, f as LeftSideNavItem, v as LeftSideNavItems };
