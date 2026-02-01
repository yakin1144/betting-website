import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as p,
  runtimeCore_esmBundler_resolveComponent as c,
  runtimeCore_esmBundler_createElementBlock as a,
  runtimeCore_esmBundler_openBlock as o,
  runtimeCore_esmBundler_createBlock as d,
  reactivity_esmBundler_unref as C,
  size_constants_sizeType as B,
  runtimeCore_esmBundler_Fragment as y,
  runtimeCore_esmBundler_createVNode as i,
  runtimeCore_esmBundler_withCtx as _,
  runtimeCore_esmBundler_createTextVNode as u,
  shared_esmBundler_toDisplayString as l,
  index_getConfig as f,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as k, useSocialLinksV2 as I } from "./entry-85993dc44c.js";
const W = { class: "balance-currency" },
  h = p({
    __name: "BalanceCurrency",
    props: {
      name: {},
      iso: {},
      currencyId: {},
      isIcon: { type: Boolean, default: !1 },
      noWrap: { type: Boolean, default: !1 },
    },
    setup(s) {
      return (e, n) => {
        $_$();
        const r = c("UiIcoCurrency"),
          t = c("UiCaption");
        return (
          o(),
          a("span", W, [
            e.isIcon
              ? (o(),
                d(r, { key: 0, size: C(B).m, ico: e.currencyId }, null, 8, [
                  "size",
                  "ico",
                ]))
              : (o(),
                a(
                  y,
                  { key: 1 },
                  [
                    i(
                      t,
                      { noWrap: e.noWrap },
                      { default: _(() => $_$() && [u(l(e.name), 1)]), _: 1 },
                      8,
                      ["noWrap"]
                    ),
                    i(
                      t,
                      { noWrap: e.noWrap, class: "balance-currency__iso" },
                      {
                        default: _(
                          () => $_$() && [u(" (" + l(e.iso) + ") ", 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["noWrap"]
                    ),
                  ],
                  64
                )),
          ])
        );
      };
    },
  }),
  g = k(h, [["__scopeId", "data-v-9954b9c6"]]),
  m = 4,
  U = (s) => {
    $_$();
    const e = f(-1020),
      { socialLinks: n, hasSocialLinks: r } = I(e, s);
    return n.length > m && n.splice(m), { socialLinks: n, hasSocialLinks: r };
  };
export { g as BalanceCurrency, U as useSocialLinks };
