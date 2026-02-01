import $_$ from "./$_$.js";
$_$();
import { withAsyncContext as E } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  runtimeCore_esmBundler_defineComponent as F,
  execAsync as v,
  reactivity_esmBundler_ref as x,
  runtimeCore_esmBundler_computed as G,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_onMounted as w,
  runtimeCore_esmBundler_createElementBlock as a,
  runtimeCore_esmBundler_openBlock as r,
  shared_esmBundler_normalizeStyle as S,
  runtimeCore_esmBundler_Fragment as f,
  runtimeCore_esmBundler_renderList as C,
  runtimeCore_esmBundler_createBlock as L,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useEventsLogo as D, HeaderEventLogo as B } from "./176e145739.js";
import {
  useResizableList as R,
  useTemplateResizeObserver as I,
} from "./a59bb589bb.js";
import {
  loadHeaderDesktopDoubleRowConfig as M,
  _export_sfc as O,
} from "./entry-85993dc44c.js";
import "./bcd6fb1c88.js";
import "./1649e8033c.js";
import "./8587dda9c5.js";
import "./1ba58be09f.js";
import "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
import "./7c99329783.js";
import "./4461966886.js";
import "./1c8c17a20a.js";
import "../../../shared-assets/__shared_accept_language_parser_LEQ4UAP5.js";
import "./ceb415ff7e.js";
import "./11ddbeb33d.js";
const T = F({
    __name: "HeaderEvents",
    async setup(U) {
      $_$();
      let o, d, n, m;
      const h = (([n, m] = E(() => M())),
        (n = (([o, d] = v(() => n)), (o = await o), d(), o)),
        m(),
        n)(),
        {
          config: {
            eventLogoHasDivider: _,
            eventLogoHasAdditionalGutter: u,
            eventLogoSingleFlag: c,
            eventLogoSize: p,
          },
        } = h,
        { eventList: g, flagList: y, loadLogotypes: b } = D(),
        i = x(),
        { visibleItems: k, debounceUpdateCount: z } = R({
          target: i,
          items: g,
        }),
        H = G(() => $_$() && `--event-animation-count: ${e(g).length};`);
      return (
        w(async () => {
          $_$();
          let s, l;
          ([s, l] = v(() => b())), await s, l(), I(i, z);
        }),
        (s, l) =>
          $_$() &&
          (r(),
          a(
            "div",
            {
              ref_key: "eventLogoList",
              ref: i,
              style: S(e(H)),
              class: "header-events",
            },
            [
              (r(!0),
              a(
                f,
                null,
                C(
                  e(y),
                  (t) =>
                    $_$() &&
                    (r(),
                    L(
                      B,
                      {
                        key: t.title,
                        logo: t,
                        divider: e(_),
                        hasAdditionalGutter: e(u),
                        singleFlag: e(c),
                        size: e(p),
                        class: "header-events__item",
                      },
                      null,
                      8,
                      [
                        "logo",
                        "divider",
                        "hasAdditionalGutter",
                        "singleFlag",
                        "size",
                      ]
                    ))
                ),
                128
              )),
              (r(!0),
              a(
                f,
                null,
                C(
                  e(k),
                  (t, A) =>
                    $_$() &&
                    (r(),
                    L(
                      B,
                      {
                        key: t.title,
                        logo: t,
                        divider: e(_),
                        hasAdditionalGutter: e(u),
                        singleFlag: e(c),
                        size: e(p),
                        counter: A + 1,
                        class: "header-events__item",
                      },
                      null,
                      8,
                      [
                        "logo",
                        "divider",
                        "hasAdditionalGutter",
                        "singleFlag",
                        "size",
                        "counter",
                      ]
                    ))
                ),
                128
              )),
            ],
            4
          ))
      );
    },
  }),
  ne = O(T, [["__scopeId", "data-v-be5397b9"]]);
export { ne as default };
