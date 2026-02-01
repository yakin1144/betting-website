import $_$ from "./$_$.js";
$_$();
import {
  officeRouteName_OfficeRouteName as fe,
  ThirdPartyRouteName_ThirdPartyRouteName as _e,
  runtimeCore_esmBundler_defineComponent as we,
  runtimeCore_esmBundler_resolveComponent as L,
  runtimeCore_esmBundler_createElementBlock as he,
  runtimeCore_esmBundler_openBlock as ge,
  runtimeCore_esmBundler_createElementVNode as q,
  runtimeCore_esmBundler_createVNode as f,
  reactivity_esmBundler_unref as p,
  iconName as ve,
  WeightType as be,
  size_constants_sizeType as U,
  runtimeCore_esmBundler_withCtx as g,
  runtimeCore_esmBundler_createTextVNode as E,
  shared_esmBundler_toDisplayString as T,
  theme_constants_themeType as G,
  reactivity_esmBundler_ref as ee,
  runtimeCore_esmBundler_watch as te,
  runtimeCore_esmBundler_computed as Y,
  vueNotification_NotificationType as Ce,
  vueNotification_NotificationGroup as J,
  statusType as ye,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { _export_sfc as Se } from "./entry-85993dc44c.js";
const Ie = [
    "games",
    "bonusGames",
    "games.games_project_index",
    "games.games_project_landing",
    "games.games_project_view",
  ],
  Ne = [
    "registration",
    "oldRegistrationPage",
    "login",
    "languages",
    "coefView",
    "timezone",
    "forgotpassword",
    "coupon",
    "openedBets",
    "accountverify",
    "activatefast",
    "passwordreset",
    "registrationIdentification",
    "stopnewsletter",
    "powerbet",
  ],
  Ue = Object.values(fe),
  Ee = Object.values(_e),
  Te = new Set(["totoCoupons", ...Ne, ...Ue, ...Ee, ...Ie]),
  X = "NOTIFICATION_WEB_PUSH_AGREE",
  ke = { class: "web-push-agree-modal" },
  Be = { class: "web-push-agree-modal__title" },
  Ae = { class: "web-push-agree-modal__buttons" },
  De = we({
    __name: "WebPushAgreeModal",
    props: {
      onCancel: { type: Function, default: () => {} },
      onConfirm: { type: Function, default: () => {} },
    },
    setup(t) {
      return (o, e) => {
        $_$();
        const n = L("UiIco"),
          i = L("UiCaption"),
          r = L("UiButton");
        return (
          ge(),
          he("div", ke, [
            q("div", Be, [
              f(n, { ico: p(ve).ALERTS }, null, 8, ["ico"]),
              f(
                i,
                { size: p(U).xl, weight: p(be).BOLD },
                {
                  default: g(
                    () => $_$() && [E(T(o.$T("v3_webpush_popup_title")), 1)]
                  ),
                  _: 1,
                },
                8,
                ["size", "weight"]
              ),
            ]),
            f(
              i,
              { class: "web-push-agree-modal__text", size: p(U).m },
              {
                default: g(
                  () => $_$() && [E(T(o.$T("v3_webpush_popup_descr")), 1)]
                ),
                _: 1,
              },
              8,
              ["size"]
            ),
            q("div", Ae, [
              f(
                r,
                { onClick: o.onCancel, theme: p(G).gray, block: "" },
                {
                  default: g(
                    () =>
                      $_$() && [
                        f(
                          i,
                          { size: p(U).m },
                          {
                            default: g(
                              () => $_$() && [E(T(o.$T("v3_webpush_deny")), 1)]
                            ),
                            _: 1,
                          },
                          8,
                          ["size"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["onClick", "theme"]
              ),
              f(
                r,
                { onClick: o.onConfirm, theme: p(G).accent, block: "" },
                {
                  default: g(
                    () =>
                      $_$() && [
                        f(
                          i,
                          { size: p(U).m },
                          {
                            default: g(
                              () =>
                                $_$() && [E(T(o.$T("v3_webpush_allow_btn")), 1)]
                            ),
                            _: 1,
                          },
                          8,
                          ["size"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["onClick", "theme"]
              ),
            ]),
          ])
        );
      };
    },
  }),
  Pe = Se(De, [["__scopeId", "data-v-aee0e3ad"]]);
var oe = (t, o, e) =>
    new Promise((n, i) => {
      var r = (a) => {
          try {
            s(e.next(a));
          } catch (u) {
            i(u);
          }
        },
        c = (a) => {
          try {
            s(e.throw(a));
          } catch (u) {
            i(u);
          }
        },
        s = (a) => (a.done ? n(a.value) : Promise.resolve(a.value).then(r, c));
      s((e = e.apply(t, o)).next());
    }),
  ne = typeof window != "undefined" && typeof document != "undefined",
  ie = (t, o, e = {}) => {
    if (!ne) return;
    let n = `${encodeURIComponent(t)}=${encodeURIComponent(o)}`;
    e.expires && (n += `; expires=${e.expires}`), (document.cookie = n);
  },
  Re = (t) => {
    var o;
    if (!ne) return;
    let e =
      (o = document.cookie.match(
        new RegExp("(?:^|; )" + encodeURIComponent(t) + "=([^;]*)")
      )) == null
        ? void 0
        : o[1];
    return typeof e == "string" ? decodeURIComponent(e) : void 0;
  },
  $e = (t) => {
    ie(t, "", { expires: new Date(0).toUTCString() });
  },
  D = () => ({
    get: (t) => Re(t),
    set: (t, o, e = {}) => {
      ie(t, o, e);
    },
    remove: (t) => {
      $e(t);
    },
  }),
  K = "abcdefghijklmnopqrstuvwxyz234567",
  Le = (t) => {
    let o = new TextEncoder().encode(t),
      e = "",
      n = 0,
      i = 0;
    for (let r = 0; r < o.length; r++)
      for (i = (i << 8) | o[r], n += 8; n >= 5; )
        (e += K[(i >>> (n - 5)) & 31]), (n -= 5);
    return n > 0 && (e += K[(i << (5 - n)) & 31]), e;
  },
  m = "web_push_status",
  We = "user_token",
  _ = { SUBSCRIBED: "subscribed", CANCELED: "canceled", FAILED: "failed" },
  Fe = 1e3,
  re = 60 * Fe,
  xe = 60 * re,
  ze = 24 * xe,
  O = { MINUTE: re, DAY: ze },
  y = {
    NoActiveFcmToken: "has_no_active_fcm_token",
    UpdatedFcmToken: "updated_fcm_token",
    SubscriptionFailed: "subscription_failed",
    SubscriptionWindowClosedBeforeSuccess:
      "subscription_window_closed_before_success",
    WindowIsLoaded: "window_is_loaded",
  },
  Oe = "v2.push-free.com",
  je = "force_web_push_domain",
  Ve = (t) => {
    var o;
    try {
      let { refId: e, userId: n, domainUrl: i, brandName: r, query: c } = t;
      if (!e || !n) throw new Error("missing some params to construct URL");
      let s = `https://${((o = D().get(je)) != null ? o : "") || i || Oe}/push`,
        a = `${e}|${n}`,
        u = Le(a),
        d = new URL(s),
        l = d.hostname.split(".");
      return (
        (l[0] = r ? `${r}-${u}-${l[0]}` : `${u}-${l[0]}`),
        (d.hostname = l.join(".")),
        c &&
          Object.entries(c).forEach(([I, N]) => {
            d.searchParams.append(I, String(N));
          }),
        d.toString()
      );
    } catch (e) {
      return console.error("Invalid URL:", e), `https://${t.domainUrl}/push`;
    }
  },
  He = (t) => {
    let { domainUrl: o, brandName: e, refId: n, userId: i, query: r = {} } = t;
    return Ve({ domainUrl: o, brandName: e, refId: n, userId: i, query: r });
  },
  B = !1,
  A = null,
  W,
  F,
  x,
  v = typeof window != "undefined" ? D() : null,
  Q = (t, o = O.DAY) => {
    if (!v) return;
    let e = new Date();
    e.setTime(e.getTime() + o), v.set(m, t, { expires: e.toUTCString() });
  },
  Me = (t = null, o, e, n) => {
    typeof window == "undefined" ||
      B ||
      ((W = e),
      (F = o),
      (x = n),
      (A = t),
      window.addEventListener("message", se, !1),
      (B = !0));
  },
  k = () => {
    typeof window == "undefined" ||
      !B ||
      (window.removeEventListener("message", se), (B = !1), (A = null));
  };
function se(t) {
  if (!(!t.data || !t.data.type))
    switch (t.data.type) {
      case y.WindowIsLoaded:
        if (F && W && x) {
          let o = new URL(x).origin,
            e = JSON.parse(JSON.stringify(W));
          F.postMessage(e, o);
        }
        break;
      case y.NoActiveFcmToken:
        v == null || v.remove(m), k();
        break;
      case y.UpdatedFcmToken:
        v == null || v.set(m, _.SUBSCRIBED), A == null || A(), k();
        break;
      case y.SubscriptionFailed:
        Q(_.FAILED), k();
        break;
      case y.SubscriptionWindowClosedBeforeSuccess:
        Q(_.CANCELED);
        break;
    }
}
var z = D(),
  qe = (t, o, e, n) => {
    var i, r, c, s, a, u;
    let d = (i = window.screenLeft) != null ? i : window.screenX,
      l = (r = window.screenTop) != null ? r : window.screenY,
      I =
        (s =
          (c = window.innerWidth) != null
            ? c
            : document.documentElement.clientWidth) != null
          ? s
          : screen.width,
      N =
        (u =
          (a = window.innerHeight) != null
            ? a
            : document.documentElement.clientHeight) != null
          ? u
          : screen.height,
      b = (I - e) / 2 + d,
      P = (N - n) / 2 + l,
      R = `menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=${e},height=${n},top=${P},left=${b}`,
      w = window.open(t, o, R);
    return w != null && w.focus && w.focus(), w;
  },
  Ge = (t) => {
    var o, e;
    let {
        domainUrl: n,
        userId: i,
        refId: r,
        brandName: c,
        onSuccessCallback: s,
      } = t,
      a =
        (e = (o = z.get("access_token")) != null ? o : z.get("user_token")) !=
        null
          ? e
          : "",
      u = { uid: i, ut: a, rid: r },
      d = He({ domainUrl: n, brandName: c, refId: r, userId: i }),
      l = qe(d, "Push confirmation", 450, 450);
    l && Me(s, l, u, d);
  },
  Ye = () => {
    let t = new Date(Date.now() + O.DAY);
    z.set(m, _.CANCELED, { expires: t.toUTCString() });
  },
  S = D(),
  Je = () => S.get(We) || "",
  Z = () => S.get(m) || "",
  ae = () => {
    S.remove(m);
  },
  Xe = (t = !1) => {
    t ? S.set(m, _.SUBSCRIBED) : ae();
  },
  ue = () => !!S.get(m),
  Ke = () =>
    oe(void 0, null, function* () {
      var t;
      try {
        let o = yield fetch("/push-gateway/v1/subscription/device-status", {
          method: "GET",
          headers: {
            "X-Auth": `Bearer ${Je()}`,
            "Content-Type": "application/json",
          },
        });
        if (!o.ok) throw new Error(`HTTP error! Status: ${o.status}`);
        let e = yield o.json();
        return Z() === _.CANCELED
          ? !0
          : (Xe(e.subscribed), (t = e.subscribed) != null ? t : !1);
      } catch (o) {
        return (
          console.error("Failed to check device subscription status:", o),
          Z() === _.SUBSCRIBED
        );
      }
    }),
  Qe = () => {
    if (typeof navigator == "undefined") return !1;
    let t = navigator.userAgent.toLowerCase();
    return /^((?!chrome|android).)*safari/.test(t);
  },
  Ze = () => {
    if (typeof navigator == "undefined") return !1;
    let t = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(t);
  },
  et = () => !(Qe() || Ze()),
  tt = () => {
    if (typeof window == "undefined") return !1;
    try {
      return window.self === window.top;
    } catch (t) {
      return !1;
    }
  },
  ot = () =>
    typeof navigator == "undefined" || typeof Notification == "undefined"
      ? !1
      : "serviceWorker" in navigator,
  nt = () => typeof window != "undefined" && tt() && et() && ot(),
  it = O.MINUTE * 30,
  rt = (t) => {
    $_$();
    let o = ee(!1);
    try {
      if (typeof window == "undefined") return { isShowPopup: o };
      let e,
        n = () =>
          oe(void 0, null, function* () {
            try {
              let s = yield Ke();
              o.value = !s;
            } catch (s) {
              console.error("Error while updating subscription status:", s);
            }
          }),
        i = () => {
          e && (clearInterval(e), (e = void 0));
        },
        r = () => {
          e || (n(), (e = setInterval(n, it)));
        },
        c = () => {
          e || r();
        };
      te(
        t,
        (s) => {
          let a = ue(),
            u = nt();
          s && u && c(), s || (i(), k(), a && ae());
        },
        { immediate: !0 }
      );
    } catch (e) {
      console.error("useSubscriptionStatusWatcher error", e);
    }
    return { isShowPopup: o };
  };
const ut = (t) => {
  $_$();
  const {
      T: o,
      route: e,
      globalStore: n,
      notify: i,
      refId: r,
      isAnyModalOpen: c,
      notificationStore: s,
      domainUrl: a,
      brandName: u,
    } = t,
    {
      notificationShow: d,
      notificationHide: l,
      openNotifications: I,
      notificationIsOpen: N,
    } = s,
    b = ee(!1),
    P = Y(() => n.isUserAuth),
    R = Y(() => n.getUserId),
    w = () => {
      $_$();
      const h = {
        title: o("v3_webpush_notifications_enabled"),
        text: o("v3_webpush_important_news"),
        duration: 2e3,
        type: ye.SUCCESS,
      };
      i({ ...h, group: J.DEFAULT, data: { buttonCloseTitle: o("close") } });
    },
    $ = () => {
      (b.value = !1), i.close(X);
    },
    ce = () => {
      $_$();
      i({
        id: X,
        group: J.DEFAULT,
        type: Ce.INFO,
        data: {
          props: {
            onCancel: () => {
              Ye(), $();
            },
            onConfirm: () => {
              $_$();
              Ge({
                domainUrl: a,
                userId: p(R),
                refId: r,
                brandName: u,
                onSuccessCallback: w,
              }),
                $();
            },
          },
          component: Pe,
        },
      });
    },
    de = () => {
      (b.value = !0), ce();
    },
    j = (h) => {
      var C;
      return Te.has(String((C = h == null ? void 0 : h.name) != null ? C : ""));
    },
    { isShowPopup: le } = rt(P);
  te([le, e, c], ([h, C, V]) => {
    $_$();
    const H = p(b),
      M = ue(),
      pe = H && (j(C) || V || M),
      me = !H && h && !M && !j(C) && !V;
    pe ? $() : me && de();
  });
};
export { ut as useInitWebPush };
