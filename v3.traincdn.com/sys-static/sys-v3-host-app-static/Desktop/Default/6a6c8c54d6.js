import $_$ from "./$_$.js";
$_$();
import {
  index_getConfigs as B,
  runtimeCore_esmBundler_defineComponent as h,
  index_getConfig as x,
  runtimeCore_esmBundler_resolveComponent as s,
  runtimeCore_esmBundler_createElementBlock as Y,
  runtimeCore_esmBundler_openBlock as c,
  runtimeCore_esmBundler_createVNode as a,
  runtimeCore_esmBundler_createBlock as N,
  runtimeCore_esmBundler_createCommentVNode as k,
  reactivity_esmBundler_unref as e,
  ColorType as p,
  size_constants_sizeType as d,
  runtimeCore_esmBundler_withCtx as t,
  runtimeCore_esmBundler_createElementVNode as C,
  shared_esmBundler_toDisplayString as m,
  runtimeCore_esmBundler_createTextVNode as F,
  router_useRoute as z,
  runtimeCore_esmBundler_computed as v,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as T,
  buildLinkFromRoute as D,
} from "./entry-85993dc44c.js";
const V = () => {
    $_$();
    const [n = "", o = "", u = ""] = B(131, 501, 906);
    return {
      foundationYear: u,
      footerCompanyCopyrightKey: n,
      legalNameCompany: o,
      currentYear: new Date().getFullYear(),
    };
  },
  b = { class: "footer-copyright" },
  E = h({
    __name: "FooterCopyright_F",
    setup(n) {
      $_$();
      var o;
      const {
          foundationYear: u,
          footerCompanyCopyrightKey: y,
          legalNameCompany: f,
          currentYear: g,
        } = V(),
        i = (o = x(474)) != null ? o : "";
      return (K, R) => {
        $_$();
        const l = s("T"),
          _ = s("UiCaption");
        return (
          c(),
          Y("div", b, [
            a(
              _,
              { size: e(d).xs, color: e(p).clrDecent },
              {
                default: t(
                  () =>
                    $_$() && [
                      a(
                        l,
                        {
                          tmp: e(y),
                          foundationYear: e(u),
                          legalNameCompany: e(f),
                          currentYear: e(g),
                        },
                        {
                          foundationYear: t((r) => $_$() && [F(m(r), 1)]),
                          name: t(
                            (r) =>
                              $_$() && [C("span", null, "«" + m(r) + "»", 1)]
                          ),
                          legalNameCompany: t(
                            (r) => $_$() && [C("span", null, m(r), 1)]
                          ),
                          _: 1,
                        },
                        8,
                        [
                          "tmp",
                          "foundationYear",
                          "legalNameCompany",
                          "currentYear",
                        ]
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["size", "color"]
            ),
            e(i)
              ? (c(),
                N(
                  _,
                  { key: 0, size: e(d).xs, color: e(p).clrDecent },
                  {
                    default: t(
                      () => $_$() && [a(l, { tmp: e(i) }, null, 8, ["tmp"])]
                    ),
                    _: 1,
                  },
                  8,
                  ["size", "color"]
                ))
              : k("", !0),
          ])
        );
      };
    },
  }),
  U = T(E, [["__scopeId", "data-v-11b44fb7"]]),
  I = (n) => {
    $_$();
    const o = z();
    return { link: v(() => D(o, n)) };
  };
export { U as FooterCopyright, I as useBuildLinkFromCurrentRoute };
