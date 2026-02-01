import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as p,
  index_getConfigs as T,
  useGlobalStore as v,
  useFormatCurrency_useFormatCurrency as $,
  runtimeCore_esmBundler_computed as l,
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_resolveComponent as C,
  runtimeCore_esmBundler_createElementBlock as d,
  runtimeCore_esmBundler_openBlock as a,
  runtimeCore_esmBundler_createElementVNode as f,
  runtimeCore_esmBundler_createVNode as w,
  size_constants_sizeType as x,
  runtimeCore_esmBundler_withCtx as g,
  runtimeCore_esmBundler_createTextVNode as B,
  shared_esmBundler_toDisplayString as I,
  ColorType as U,
  index_useT as z,
  runtimeCore_esmBundler_Fragment as h,
  runtimeCore_esmBundler_renderList as k,
  runtimeCore_esmBundler_createBlock as m,
  theme_constants_themeType as M,
  index_getConfig as V,
  index_useLogger as b,
  index_useHttpModule as A,
  index_useCookies as D,
  index_useClientHeaders as q,
  execAsync as F,
  useAsyncData as N,
  runtimeCore_esmBundler_createCommentVNode as R,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as y,
  RequestManager as H,
  getLastWinners as E,
} from "./entry-50afb6f36c.js";
import { useStartIntervalUpdate as j } from "./10dcfb9c91.js";
const G = { class: "winners-line-card" },
  J = { class: "winners-line-card__info" },
  K = p({
    __name: "WinnersLineCard",
    props: { winner: {}, winText: {} },
    setup(o) {
      $_$();
      const [s, t] = T(-1008, 633),
        n = v(),
        { formatAmountWithCurrency: _ } = $({
          geoCurrency: s,
          amountTemplate: t,
        }),
        c = l(() =>
          _({
            amount: o.winner.winSum,
            currencyIso: n.currencyIso,
            needAmountFormat: !0,
          })
        ),
        r = l(() => `ID: ${o.winner.userIdMasked}`),
        i = l(() => $_$() && [o.winText, e(c)].filter(Boolean).join(": "));
      return (u, L) => {
        $_$();
        const W = C("UiCaption"),
          S = C("UiIcoSport");
        return (
          a(),
          d("div", G, [
            f("p", J, [
              w(
                W,
                { noWrap: "", size: e(x).m, class: "winners-line-card__id" },
                { default: g(() => $_$() && [B(I(e(r)), 1)]), _: 1 },
                8,
                ["size"]
              ),
              w(
                W,
                { noWrap: "", color: e(U).clrDecent, size: e(x).xs },
                { default: g(() => $_$() && [B(I(e(i)), 1)]), _: 1 },
                8,
                ["color", "size"]
              ),
            ]),
            w(
              S,
              { ico: u.winner.sportIds, class: "winners-line-card__ico" },
              null,
              8,
              ["ico"]
            ),
          ])
        );
      };
    },
  }),
  O = y(K, [["__scopeId", "data-v-a810f100"]]),
  P = { class: "winners-line" },
  Q = p({
    __name: "WinnersLine",
    props: { winners: {} },
    setup(o) {
      $_$();
      const s = z(),
        t = l(() => s("prize"));
      return (n, _) =>
        $_$() &&
        (a(),
        d("div", P, [
          (a(),
          d(
            h,
            null,
            k(
              2,
              (c) =>
                $_$() &&
                f("div", { key: c, class: "winners-line__track" }, [
                  (a(!0),
                  d(
                    h,
                    null,
                    k(
                      n.winners,
                      (r) =>
                        $_$() &&
                        (a(),
                        m(
                          O,
                          {
                            key: r.userIdMasked,
                            class: "winners-line__card",
                            winner: r,
                            winText: e(t),
                          },
                          null,
                          8,
                          ["winner", "winText"]
                        ))
                    ),
                    128
                  )),
                ])
            ),
            64
          )),
        ]));
    },
  }),
  X = y(Q, [["__scopeId", "data-v-4c9c1a39"]]),
  Y = p({
    __name: "WinnersLineLoader",
    setup(o) {
      return (s, t) => {
        $_$();
        const n = C("UiSkeleton");
        return (
          a(),
          m(
            n,
            { theme: e(M).primary, class: "winners-line-loader" },
            {
              default: g(
                () =>
                  ($_$() && t[0]) ||
                  (t[0] = [
                    f(
                      "div",
                      { class: "winners-line-loader__content" },
                      null,
                      -1
                    ),
                  ])
              ),
              _: 1,
            },
            8,
            ["theme"]
          )
        );
      };
    },
  }),
  Z = y(Y, [["__scopeId", "data-v-84b88334"]]),
  ee = () => {
    $_$();
    const o = V(-1e3),
      s = v(),
      t = b(),
      n = new H({
        $clientHeaders: q(),
        $cookies: D(),
        $httpModule: A(),
        $logger: t,
      });
    return {
      cancelLoadWinners: () => n.cancelAllRequest("getLastWinners"),
      loadWinners: async () => {
        $_$();
        let r, i;
        const { data: u } =
          (([r, i] = F(() =>
            n.loadRaw({
              type: "getLastWinners",
              api: { method: E(), parser: (L) => L },
              params: {
                curIso: s.currencyIso,
                refId: o,
                limit: 20,
                cfView: s.getCoefViewId,
              },
            })
          )),
          (r = await r),
          i(),
          r);
        return u;
      },
    };
  },
  se = p({
    __name: "WinnersLineContainer",
    setup(o) {
      $_$();
      const { cancelLoadWinners: s, loadWinners: t } = ee(),
        {
          data: n,
          status: _,
          refresh: c,
        } = N(
          "winnersLineWinners",
          async () => {
            var i;
            return (i = await t()) != null ? i : [];
          },
          { default: () => [] }
        ),
        r = l(() => $_$() && !e(n).length && e(_) === "pending");
      return (
        j({ interval: 1e3 * 30, onUpdateData: c, onCancelIntervalRequest: s }),
        (i, u) =>
          $_$() && e(r)
            ? (a(), m(Z, { key: 0 }))
            : e(n).length > 0
            ? (a(), m(X, { key: 1, winners: e(n) }, null, 8, ["winners"]))
            : R("", !0)
      );
    },
  });
export { se as _sfc_main };
