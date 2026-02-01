import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_computed as D,
  isDef as z,
  reactivity_esmBundler_unref as e,
  dateTimeFormatTypes as b,
  DEFAULT_TIME_DATE_FORMAT_TYPE as H,
  runtimeCore_esmBundler_defineComponent as w,
  index_getConfigs as Z,
  index_useDateTimeService as L,
  useGlobalStore as O,
  runtimeCore_esmBundler_resolveComponent as y,
  runtimeCore_esmBundler_createElementBlock as M,
  runtimeCore_esmBundler_openBlock as m,
  runtimeCore_esmBundler_createVNode as g,
  runtimeCore_esmBundler_createElementVNode as V,
  iconName as P,
  runtimeCore_esmBundler_createBlock as j,
  runtimeCore_esmBundler_createCommentVNode as W,
  size_constants_sizeType as F,
  WeightType as G,
  runtimeCore_esmBundler_withCtx as _,
  runtimeCore_esmBundler_createTextVNode as A,
  shared_esmBundler_toDisplayString as a,
  runtimeCore_esmBundler_Fragment as R,
  runtimeCore_esmBundler_renderList as Y,
  ColorType as $,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useSupportPhones as q,
  useHostAppAnalytics as J,
  _export_sfc as K,
} from "./entry-85993dc44c.js";
const Q = 3,
  X = 0,
  ee = ({ timeZone: N, supportTime: n, dateTimeService: d }) => {
    $_$();
    const { startedSupportTime: l, endedSupportTime: p } = n != null ? n : {},
      s = (t) => (t ? t.split(":") : new Array(3).fill(null)),
      [T, f] = s(l),
      [h, S] = s(p),
      i = (t, k) => {
        $_$();
        const u = Number(t),
          r = Number(k);
        if (!z(u)) return "";
        const c = e(N),
          o = Math.abs(c),
          I = (o - Math.floor(o)) * 60,
          E = (z(r) ? r : X) + I,
          v = E >= 60,
          U = v ? E - 60 : E,
          x = u - (Q - Math.floor(c)) + (v ? 1 : 0);
        return d.formatTimeWithoutUserTimezone(
          new Date().setHours(x, U, 0, 0),
          b[H].timeShortFormat
        );
      },
      C = D(() => i(T, f)),
      B = D(() => i(h, S));
    return { formattedTimeStart: C, formattedTimeEnd: B };
  },
  te = { class: "footer-support" },
  oe = { class: "footer-support__content" },
  re = ["href"],
  ne = w({
    __name: "FooterSupport_F",
    setup(N) {
      $_$();
      const [n, d = "", l = ""] = Z(146, 148, 149),
        p = { startedSupportTime: d, endedSupportTime: l },
        s = L(),
        T = O(),
        f = D(() => T.getTimeZone),
        { supportPhones: h } = q(),
        { formattedTimeStart: S, formattedTimeEnd: i } = ee({
          timeZone: f,
          supportTime: p,
          dateTimeService: s,
        }),
        C = J(),
        B = () => C.modules.footer.clickOnPhoneNumber();
      return (t, k) => {
        $_$();
        const u = y("UiIco"),
          r = y("UiCaption"),
          c = y("T");
        return (
          m(),
          M("div", te, [
            g(u, { ico: e(P).HEADSET, class: "footer-support__ico" }, null, 8, [
              "ico",
            ]),
            V("div", oe, [
              g(
                r,
                { tag: "h4", uppercase: "", weight: e(G).BOLD, size: e(F).m },
                {
                  default: _(
                    () =>
                      $_$() && [
                        A(a(t.$T("footer_dictionary_support_service")), 1),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["weight", "size"]
              ),
              (m(!0),
              M(
                R,
                null,
                Y(
                  e(h),
                  (o) =>
                    $_$() &&
                    (m(),
                    M(
                      "a",
                      {
                        key: o.phone,
                        onClick: B,
                        href: o.link,
                        class: "footer-support__link",
                        dir: "auto",
                      },
                      a(o.phone),
                      9,
                      re
                    ))
                ),
                128
              )),
              e(n)
                ? (m(),
                  j(
                    r,
                    { key: 0, color: e($).clrDecent, size: e(F).xs },
                    {
                      default: _(
                        () =>
                          $_$() && [
                            g(
                              c,
                              { tmp: "footer_support_schedule" },
                              {
                                startSchedule: _(
                                  () => $_$() && [A(a(e(S)), 1)]
                                ),
                                endSchedule: _(() => $_$() && [A(a(e(i)), 1)]),
                                _: 1,
                              }
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["color", "size"]
                  ))
                : W("", !0),
            ]),
          ])
        );
      };
    },
  }),
  ue = K(ne, [["__scopeId", "data-v-ab62ed3c"]]);
export { ue as FooterSupport };
