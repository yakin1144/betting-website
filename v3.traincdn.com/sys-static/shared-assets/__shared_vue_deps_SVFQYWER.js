//@v3group/fatman-client@2.1.19,@v3group/http-module@3.0.11,@v3group/cookie-universal@1.0.8,cookie@0.6.0
import {
  a as V,
  b as H,
  e as ve,
  f as $e,
  g as J,
} from "./__shared_chunk_LNU73JEK.js";
var Ge = Object.defineProperty,
  Je = Object.defineProperties,
  ze = Object.getOwnPropertyDescriptors,
  ge = Object.getOwnPropertySymbols,
  qe = Object.prototype.hasOwnProperty,
  Xe = Object.prototype.propertyIsEnumerable,
  me = (e, t, r) =>
    t in e
      ? Ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  fe = (e, t) => {
    for (var r in t || (t = {})) qe.call(t, r) && me(e, r, t[r]);
    if (ge) for (var r of ge(t)) Xe.call(t, r) && me(e, r, t[r]);
    return e;
  },
  Ae = (e, t) => Je(e, ze(t)),
  B = (e, t, r) =>
    new Promise((n, l) => {
      var i = (o) => {
          try {
            a(r.next(o));
          } catch (S) {
            l(S);
          }
        },
        s = (o) => {
          try {
            a(r.throw(o));
          } catch (S) {
            l(S);
          }
        },
        a = (o) => (o.done ? n(o.value) : Promise.resolve(o.value).then(i, s));
      a((r = r.apply(e, t)).next());
    }),
  K;
(function (e) {
  (e[(e.Created = 0)] = "Created"), (e[(e.Removed = 1)] = "Removed");
})(K || (K = {}));
var $;
(function (e) {
  (e[(e.Post = 0)] = "Post"),
    (e[(e.Error = 1)] = "Error"),
    (e[(e.Click = 2)] = "Click");
})($ || ($ = {}));
var Ee;
(function (e) {
  e[(e.Post = 0)] = "Post";
})(Ee || (Ee = {}));
var re;
(function (e) {
  (e[(e.Success = 0)] = "Success"), (e[(e.Error = 1)] = "Error");
})(re || (re = {}));
var Y;
(function (e) {
  (e[(e.INIT = 1)] = "INIT"),
    (e[(e.ROUTE_CHANGE = 2)] = "ROUTE_CHANGE"),
    (e[(e.REGISTRATION = 1e3)] = "REGISTRATION"),
    (e[(e.LOGIN = 3)] = "LOGIN"),
    (e[(e.PERFORMANCE = 4)] = "PERFORMANCE"),
    (e[(e.TIME_CHECK = 5)] = "TIME_CHECK"),
    (e[(e.CALL_SMS_RESEND = 1004)] = "CALL_SMS_RESEND"),
    (e[(e.SMS_SEND = 1247)] = "SMS_SEND"),
    (e[(e.CONFIRM_CODE_SMS = 1252)] = "CONFIRM_CODE_SMS"),
    (e[(e.FAIL_SEND_SMS = 1253)] = "FAIL_SEND_SMS"),
    (e[(e.REGISTRATION_DONE = 1255)] = "REGISTRATION_DONE"),
    (e[(e.SUCCESSFULL_BET = 1e4)] = "SUCCESSFULL_BET"),
    (e[(e.RETURN_FROM_PAYMENTS = 10001)] = "RETURN_FROM_PAYMENTS"),
    (e[(e.GO_TO_PAYMENTS = 10002)] = "GO_TO_PAYMENTS"),
    (e[(e.COUPON_CLICK_ICO_REMOVE_ONE_BET = 1020)] =
      "COUPON_CLICK_ICO_REMOVE_ONE_BET"),
    (e[(e.COUPON_CLICK_REG = 1044)] = "COUPON_CLICK_REG"),
    (e[(e.COUPON_CLICK_ON_AUTH = 1050)] = "COUPON_CLICK_ON_AUTH"),
    (e[(e.HOST_HASH_MISMATCH = 10215)] = "HOST_HASH_MISMATCH"),
    (e[(e.CAPTCHA_SUCCESS = 10190)] = "CAPTCHA_SUCCESS"),
    (e[(e.CAPTCHA_FAILED = 10191)] = "CAPTCHA_FAILED"),
    (e[(e.OPEN_DEPOSIT_FRAME = 9e3)] = "OPEN_DEPOSIT_FRAME"),
    (e[(e.MAKE_ACCOUNT = 9001)] = "MAKE_ACCOUNT"),
    (e[(e.SWITCH_INPUT_ACCOUNT = 9002)] = "SWITCH_INPUT_ACCOUNT"),
    (e[(e.CHANGE_METHOD_BY_CLICK_BUTTON = 9003)] =
      "CHANGE_METHOD_BY_CLICK_BUTTON"),
    (e[(e.APPROVE_INPUT_AMOUNT = 9004)] = "APPROVE_INPUT_AMOUNT"),
    (e[(e.APPROVE_PAYMENT = 9005)] = "APPROVE_PAYMENT"),
    (e[(e.APPROVE_SEND_PLAYER_DATA = 9006)] = "APPROVE_SEND_PLAYER_DATA"),
    (e[(e.CLICK_BUTTON_CHANGE_DETAILS = 9007)] = "CLICK_BUTTON_CHANGE_DETAILS"),
    (e[(e.AUTO_CANCEL_PREORDER_BY_TIMER = 9008)] =
      "AUTO_CANCEL_PREORDER_BY_TIMER"),
    (e[(e.CANCEL_REQUEST_BY_PLAYER = 9009)] = "CANCEL_REQUEST_BY_PLAYER"),
    (e[(e.RECEIPT_FUNDS_TO_ACCOUNT = 9010)] = "RECEIPT_FUNDS_TO_ACCOUNT"),
    (e[(e.FAIL_INPUT_ACCOUNT = 9011)] = "FAIL_INPUT_ACCOUNT"),
    (e[(e.SHOW_CRYPTO_DETAIL = 9012)] = "SHOW_CRYPTO_DETAIL"),
    (e[(e.FIRST_DEPOSIT = 1531)] = "FIRST_DEPOSIT"),
    (e[(e.RE_DEPOSIT = 1532)] = "RE_DEPOSIT"),
    (e[(e.USER_NEW = 10273)] = "USER_NEW"),
    (e[(e.MAIN_SPORT_EVENTS_ALL = 10431)] = "MAIN_SPORT_EVENTS_ALL"),
    (e[(e.MAIN_SPORT_EVENTS_SCROLL = 10432)] = "MAIN_SPORT_EVENTS_SCROLL"),
    (e[(e.BET_EVENT_INFO = 10466)] = "BET_EVENT_INFO"),
    (e[(e.SESS_START = 11054)] = "SESS_START"),
    (e[(e.SESS_END = 11055)] = "SESS_END"),
    (e[(e.VISION_SNAPSHOT = 11058)] = "VISION_SNAPSHOT"),
    (e[(e.VISION_POST = 11059)] = "VISION_POST"),
    (e[(e.VISION_ERROR = 11060)] = "VISION_ERROR"),
    (e[(e.PROMO_CHANGE_ROUTE = 11064)] = "PROMO_CHANGE_ROUTE"),
    (e[(e.PROMO_HOME_PAGE_OPEN = 11065)] = "PROMO_HOME_PAGE_OPEN"),
    (e[(e.PROMO_BONUS_LIST_OPEN = 11066)] = "PROMO_BONUS_LIST_OPEN"),
    (e[(e.PROMO_EXTERNAL_LINK_OPEN = 11067)] = "PROMO_EXTERNAL_LINK_OPEN"),
    (e[(e.PROMO_TAKE_PART_IN_PROMOTION = 11068)] =
      "PROMO_TAKE_PART_IN_PROMOTION"),
    (e[(e.VISION_CLICK = 11192)] = "VISION_CLICK"),
    (e[(e.INIT_SUPPORT_ERROR = 11213)] = "INIT_SUPPORT_ERROR"),
    (e[(e.WITHDRAW_CALL = 4049)] = "WITHDRAW_CALL");
})(Y || (Y = {}));
function Ne() {
  return ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (e) =>
    (
      e ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))
    ).toString(16)
  );
}
function Qe(e) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    e
  );
}
var Re = (e) =>
    new Promise((t) => {
      setTimeout(t, e);
    }),
  Ze = (e) => {
    e < 1 && (e = 1);
    let t = 0,
      r = (n, l) =>
        B(void 0, null, function* () {
          return t >= e
            ? (yield Re(1e3 / e), r(n, l))
            : (t++, Re(1e3).then(() => t--), fetch(n, l));
        });
    return r;
  },
  we = () => Date.now() + 10 * 60 * 1e3,
  ye = "__fatman_ab_tests",
  be = () => {
    var e, t;
    let r =
      (e = globalThis == null ? void 0 : globalThis.localStorage) == null
        ? void 0
        : e.getItem(ye);
    try {
      return (t = JSON.parse(r)) != null ? t : {};
    } catch (n) {
      return {};
    }
  },
  et = (e) => {
    var t;
    let r = be();
    return (t = r == null ? void 0 : r[e]) != null ? t : [];
  },
  tt = (e, t) => {
    var r;
    let n = be();
    (n[e] = t),
      (r = globalThis == null ? void 0 : globalThis.localStorage) == null ||
        r.setItem(ye, JSON.stringify(n));
  },
  rt = ({
    uuid: e,
    abTestInitData: t,
    headers: r,
    apiPath: n,
    whence: l,
    userId: i,
    useAbTest: s,
  }) => {
    let a = [],
      o = [],
      S = we(),
      p,
      u = (O) => {
        tt(e, O), (a = O), (o = O.map((b) => b.sid));
      },
      d = () =>
        B(void 0, null, function* () {
          if (!s) return Promise.resolve();
          let O = { w: l, u: i, state: et(e) };
          try {
            let b = yield fetch(`${n}/ab.json`, {
              method: "POST",
              headers: r,
              body: JSON.stringify(O),
            });
            if (b.ok) {
              let D = yield b.json();
              u(D), (S = we());
            }
          } catch (b) {}
        });
    t && (u(t), (p = Promise.resolve()));
    let v = {
      updateAbTestData() {
        return B(this, null, function* () {
          return S < Date.now() && (p = void 0), p || (p = d()), p;
        });
      },
      setUserId(O) {
        i = O;
      },
      getAbTestData() {
        return B(this, null, function* () {
          return yield v.updateAbTestData(), a;
        });
      },
      getSids() {
        return o;
      },
      isAbTestActive(O) {
        return B(this, null, function* () {
          return yield v.updateAbTestData(), o.includes(O);
        });
      },
      setUseAbTest(O) {
        (s = O), O ? (p = d()) : ((a = []), (o = []));
      },
    };
    return v;
  },
  nt = () => {
    let e = Date.now(),
      t = 0,
      r = [],
      n = window.location.href,
      l = null,
      i = null,
      s = !1,
      a = 1e3,
      o = ["mousedown", "keydown", "touchstart"],
      S = [...o, "mousemove"],
      p = [],
      u = (c) =>
        c instanceof MouseEvent
          ? { x: c.clientX, y: c.clientY }
          : c instanceof TouchEvent && c.touches.length > 0
          ? { x: c.touches[0].clientX, y: c.touches[0].clientY }
          : null,
      d = (c) => {
        if (!c.isTrusted || !o.includes(c.type)) return !1;
        let _ = u(c);
        return _ && _.x === 0 && _.y === 0 ? !1 : Date.now() - t >= 10;
      },
      v = (c) => {
        let _ = Date.now();
        (e = _), d(c) && (t = _);
      },
      O = (c) => {
        let _ = Date.now();
        return { timestamp: _, source: c, hasUserInteraction: _ - t < a };
      },
      b = () => {
        let c = Date.now();
        return (r = r.filter((_) => c - _.timestamp < 5e3)), r.length < 5;
      },
      D = () => {
        if (r.length < 3) return !0;
        let c = r.slice(-3),
          _ = c
            .map((m, C) => (C === 0 ? 0 : m.timestamp - c[C - 1].timestamp))
            .filter((m) => m > 0);
        if (_.length === 2) {
          let m = Math.min(..._),
            C = Math.max(..._);
          return C / m > 3 || C - m > 100;
        }
        return !0;
      },
      L = (c) => [c.hasUserInteraction, b(), D()].every(Boolean),
      N = (c) => {
        let _ = window.location.href;
        if (!_ || _ === n) return;
        let m = c || O("mutation");
        L(m) && (r.push(m), (n = _), l && l(_));
      },
      g = (c) => {
        let { type: _ } = c;
        if (_ === "navigatesuccess" || _ === "popstate") {
          let m = O(_);
          N(m);
        }
      },
      M = () => {
        if ("navigation" in window) {
          let c = (_) => g(_);
          window.navigation.addEventListener("navigatesuccess", c),
            p.push({
              element: window.navigation,
              type: "navigatesuccess",
              listener: c,
            });
        } else {
          let c = (_) => g(_);
          window.addEventListener("popstate", c),
            p.push({ element: window, type: "popstate", listener: c }),
            (i = new MutationObserver(() => {
              N();
            })),
            i.observe(document.body, {
              childList: !0,
              subtree: !0,
              attributes: !1,
              characterData: !1,
            });
        }
      };
    return {
      start(c) {
        s ||
          ((l = c),
          (s = !0),
          (n = window.location.href),
          S.forEach((_) => {
            document.addEventListener(_, v, { capture: !0, passive: !0 }),
              p.push({ element: document, type: _, listener: v });
          }),
          M());
      },
      stop() {
        s &&
          (p.forEach(({ element: c, type: _, listener: m }) => {
            c.removeEventListener(_, m);
          }),
          (p.length = 0),
          i && (i.disconnect(), (i = null)),
          (r.length = 0),
          (l = null),
          (s = !1),
          (t = 0),
          (n = window.location.href));
      },
      getLastInteraction() {
        return e;
      },
      detectBotSign() {
        let c = [
          {
            name: "Bot",
            check: () =>
              /robot|AhrefsSiteAudit|Google-Read-Aloud|PetalBot|GoogleBot|ApacheBench|AdsBot-Google|facebookexternalhit|Baiduspider|SiteCheckerBotCrawler|AhrefsBot|YandexMetrika|YandexRenderResourcesBot/.test(
                navigator.userAgent
              ),
          },
          {
            name: "Puppeteer",
            check: () =>
              "puppeteer" in window ||
              "__puppeteer_evaluation_script__" in window,
          },
          {
            name: "Selenium",
            check: () => "callSelenium" in window || "_selenium" in window,
          },
          {
            name: "PhantomJS",
            check: () => "callPhantom" in window || "_phantom" in window,
          },
          { name: "Cypress", check: () => "Cypress" in window },
          {
            name: "WebDriver",
            check: () => (navigator == null ? void 0 : navigator.webdriver),
          },
          {
            name: "Headless Browser",
            check: () =>
              /headless|phantom|puppeteer|selenium|webdriver|playwright|cypress/i.test(
                navigator.userAgent
              ),
          },
          {
            name: "Likely Headless",
            check: () => {
              var _, m;
              return (
                !(
                  (_ = navigator == null ? void 0 : navigator.plugins) !=
                    null && _.length
                ) &&
                !(
                  (m = navigator == null ? void 0 : navigator.languages) !=
                    null && m.length
                )
              );
            },
          },
          {
            name: "Suspicious Viewport",
            check: () =>
              document.visibilityState === "visible" &&
              (window.outerWidth === 0 || window.outerHeight === 0),
          },
        ];
        for (let { name: _, check: m } of c) if (m()) return _;
        return "";
      },
    };
  },
  W = (e, ...t) => {
    e && console.log("[VISION]", ...t);
  },
  ot = "__fatman_vision_debug",
  st = () => {
    var e;
    return !!(
      (e = globalThis == null ? void 0 : globalThis.sessionStorage) != null &&
      e.getItem(ot)
    );
  },
  it = ({
    headers: e,
    apiPath: t,
    userId: r,
    sessionManager: n,
    inlineStylesheet: l,
  }) => {
    var i, s;
    let a = {},
      o = (E, w) => {
        var f;
        (f = a[E]) == null || f.forEach((h) => h(w));
      },
      S = (E) => o($.Click, { x: E.clientX, y: E.clientY }),
      p,
      u = () => {},
      d = null,
      v,
      O,
      b = !1,
      D = !1,
      L,
      N = !1,
      g =
        (i = window == null ? void 0 : window.location) == null
          ? void 0
          : i.href,
      M = "",
      c = 0,
      _ = new URL(
        `${t}/vision.json`,
        (s = window == null ? void 0 : window.location) == null
          ? void 0
          : s.origin
      ).toString(),
      m = "CompressionStream" in window,
      C = st(),
      I = [],
      P = nt(),
      k = n.getSessionTimeoutMs(),
      A = {
        on(E, w) {
          var f;
          (f = a[E]) != null || (a[E] = []), a[E].push(w);
        },
        initWorker() {
          try {
            if (d) return;
            let E =
                'var p;(function(e){e[e.Created=0]="Created",e[e.Removed=1]="Removed"})(p||(p={}));var u;(function(e){e[e.Post=0]="Post",e[e.Error=1]="Error",e[e.Click=2]="Click"})(u||(u={}));var m;(function(e){e[e.Post=0]="Post"})(m||(m={}));var d;(function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"})(d||(d={}));const f=2*1024;async function h(e){const t=new Blob([e]).stream(),n=new CompressionStream("gzip"),s=t.pipeThrough(n).getReader(),o=[];for(;;){const{done:a,value:r}=await s.read();if(a)break;r&&o.push(r)}return new Blob(o)}function l(e){const{endpoint:t,postData:n,contentType:c,currentLocation:s,headers:o,sessId:a,userId:r}=e,i={...o,"X-Sess-Id":a,"Content-Type":c,"X-Referer":s};return r&&(i["X-User-Id"]=String(r)),fetch(t,{method:"POST",headers:i,body:n})}async function g(e){try{const{data:t,...n}=e,c=t.findIndex(r=>r[1]===2);let s=JSON.stringify(t),o="fatman/json",a=s.length;if(s.length>f&&!e.skipCompression&&(s=await h(s),o="fatman/gzip",a=s.size),s){const r=await l({...n,postData:s,contentType:o});self.postMessage({type:d.Success,payload:{sessId:e.sessId,currentLocation:e.currentLocation,contentType:o,status:r.status,withSnapshot:c===-1?0:1,dataSize:a}})}}catch(t){const n=t instanceof Error?t.message:"worker error";self.postMessage({type:d.Error,payload:{sessId:e.sessId,error:n}})}}self.onmessage=({data:e})=>{g(e.payload)};',
              w = new Blob([E], { type: "application/javascript" }),
              f = URL.createObjectURL(w);
            (d = new Worker(f, { name: "vision-worker" })),
              W(C, "worker created"),
              (d.onmessage = (h) => {
                let { type: T, payload: R } = h.data;
                T === re.Success && (n.updateSession(), o($.Post, R)),
                  T === re.Error &&
                    (W(C, "worker handle message error"), o($.Error, R));
              }),
              (d.onerror = (h) => {
                W(C, "worker error:", h);
              });
          } catch (E) {
            d = null;
          }
        },
        getSessionMetadata() {
          return B(this, null, function* () {
            try {
              let E = yield fetch(`${t}/metadata.json`, { headers: e });
              return E.ok ? yield E.json() : null;
            } catch (E) {
              return null;
            }
          });
        },
        flushBuffer() {
          var E;
          if (!I.length) return;
          let w = n.getSession();
          if (!(w != null && w.isRecording)) return (I.length = 0), A.stop(!0);
          N ||
            ((N = !0),
            (g =
              (E = window == null ? void 0 : window.location) == null
                ? void 0
                : E.href)),
            d == null ||
              d.postMessage({
                type: Ee.Post,
                payload: {
                  endpoint: _,
                  currentLocation: g,
                  headers: e,
                  userId: r,
                  data: I,
                  sessId: w.id,
                  skipCompression: !m || C,
                },
              }),
            W(C, "sent", I.length, "events"),
            (I.length = 0);
        },
        handleRouteChange(E) {
          var w;
          A.flushBuffer(),
            (g = E),
            (w = p == null ? void 0 : p.record) == null || w.takeFullSnapshot(),
            W(C, "navigation to:", E);
        },
        startRecord() {
          return B(this, null, function* () {
            if (!D) {
              D = !0;
              try {
                if (
                  (u == null || u(),
                  (p = yield import("./__shared_chunk_BAVF2XZL.js")),
                  A.initWorker(),
                  !p || !d)
                ) {
                  W(C, p ? "worker is not defined" : "rrweb is not defined");
                  return;
                }
                (u = p.record({
                  emit(E) {
                    let w = E[1] === 4;
                    M && w && (E[2].b = M),
                      I.push(E),
                      (L = Date.now()),
                      (E[1] === 2 || I.length === 250) && A.flushBuffer();
                  },
                  deltaTime: c,
                  inlineStylesheet: l,
                  recordCanvas: !1,
                  inlineImages: !1,
                  recordCrossOriginIframes: !1,
                  collectFonts: !1,
                  maskAllInputs: !0,
                  blockSelector: "video",
                  sampling: {
                    mousemove: 100,
                    mousemoveCallback: 100,
                    scroll: 100,
                    media: 100,
                    input: "last",
                  },
                  slimDOMOptions: {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                  },
                })),
                  P.start(A.handleRouteChange),
                  A.setFlushInterval();
              } catch (E) {
                A.stop(!1), W(C, "start record error:", E);
              }
            }
          });
        },
        checkSessionAndRecord() {
          return B(this, null, function* () {
            var E;
            if (D) {
              let f = P.getLastInteraction();
              return Date.now() >= f + k
                ? (n.removeSession(), A.stop(!0))
                : void 0;
            }
            let w = n.ensureSession();
            if (w.created === w.updated) {
              let f = yield A.getSessionMetadata();
              if (!(f != null && f.ts)) return;
              (c = Math.round(f.ts / 1e3) - Date.now()),
                (w = n.updateSession({
                  isRecording: (E = f == null ? void 0 : f.v) != null ? E : !1,
                })),
                f != null &&
                  f.c &&
                  !b &&
                  (window.addEventListener("click", S), (b = !0));
            }
            if (w != null && w.isRecording) return A.startRecord();
          });
        },
        setFlushInterval() {
          clearInterval(v),
            (v = setInterval(() => {
              I.length && Date.now() - L > 5e3 && A.flushBuffer();
            }, 1e3));
        },
        setIdleInterval() {
          clearInterval(O), (O = setInterval(A.checkSessionAndRecord, 5e3));
        },
        start() {
          return B(this, null, function* () {
            (M = P.detectBotSign()),
              yield A.checkSessionAndRecord(),
              A.setIdleInterval();
          });
        },
        stop(E) {
          u == null || u(),
            A.flushBuffer(),
            clearInterval(v),
            (v = void 0),
            clearInterval(O),
            (O = void 0),
            (D = !1),
            (c = 0),
            (N = !1),
            (g = window.location.href),
            P.stop(),
            d && (d.terminate(), (d = null)),
            E && A.setIdleInterval(),
            W(C, "vision client stopped");
        },
        destroy() {
          A.stop(!1), window.removeEventListener("click", S);
        },
        setUserId(E) {
          r = E;
        },
      };
    return A;
  },
  _e = "__fatman_session",
  at = () => {
    var e;
    let t =
      (e = globalThis == null ? void 0 : globalThis.sessionStorage) == null
        ? void 0
        : e.getItem(_e);
    if (!t) return null;
    try {
      return JSON.parse(t);
    } catch (r) {
      return null;
    }
  },
  lt = (e) => {
    let t = e * 1e3,
      r = { [K.Created]: [], [K.Removed]: [] },
      n = at(),
      l = (s, a) => {
        var o;
        (o = r[s]) == null || o.forEach((S) => S(a));
      },
      i = {
        on(s, a) {
          var o;
          (o = r[s]) != null || (r[s] = []), r[s].push(a);
        },
        getSession() {
          return n;
        },
        setSession(s) {
          var a;
          (n = s),
            (a = globalThis == null ? void 0 : globalThis.sessionStorage) ==
              null || a.setItem(_e, JSON.stringify(s));
        },
        removeSession() {
          var s;
          l(K.Removed, n),
            (n = null),
            (s = globalThis == null ? void 0 : globalThis.sessionStorage) ==
              null || s.removeItem(_e);
        },
        isSessionValid() {
          let s = i.getSession();
          return s
            ? Date.now() >= s.updated + t
              ? (i.removeSession(), !1)
              : !0
            : !1;
        },
        ensureSession() {
          if (!i.isSessionValid()) {
            let s = Date.now(),
              a = { id: Ne(), created: s, updated: s, isRecording: !1 };
            return i.setSession(a), l(K.Created, a), a;
          }
          return i.getSession();
        },
        updateSession(s = {}) {
          let a = i.getSession();
          if (!a) return null;
          let o = Ae(fe(fe({}, a), s), { updated: Date.now() });
          return i.setSession(o), o;
        },
        init() {
          i.ensureSession(), setInterval(i.ensureSession, 6e4);
        },
        getSessionTimeoutMs() {
          return t;
        },
      };
    return i;
  },
  ct = () =>
    !window.performance || !performance.now
      ? Date.now()
      : "timeOrigin" in performance
      ? performance.timeOrigin + performance.now()
      : performance.timing.navigationStart + performance.now(),
  de = () => Math.floor(ct() * 1e3),
  Ie = "fatman_uuid",
  Ce = `__${Ie}`,
  ut = () => {
    var e, t;
    let r =
      (e = globalThis == null ? void 0 : globalThis.localStorage) == null
        ? void 0
        : e.getItem(Ce);
    if (r) return { uuid: r, isNewUser: !1 };
    let n = Ne();
    return (
      (t = globalThis == null ? void 0 : globalThis.localStorage) == null ||
        t.setItem(Ce, n),
      { uuid: n, isNewUser: !0 }
    );
  },
  dt = (e) => {
    let t = new Date();
    t.setTime(t.getTime() + 365 * 24 * 60 * 60 * 1e3),
      (document.cookie = `${Ie}=${e}; expires=${t.toUTCString()}; path=/`);
  },
  De = [];
for (let e = 1; e <= 3; e++) De.push(`i${e}`, `f${e}`, `s${e}`);
var Jt = ({
  apiPath: e,
  lang: t,
  whence: r,
  userId: n,
  mProject: l,
  uuid: i,
  sendInterval: s = 3e3,
  abTestInitData: a,
  maxEventsToSend: o = 10,
  maxRPS: S = 5,
  useAbTest: p = !0,
  sessionTimeoutSeconds: u = 60 * 30,
  useVision: d = !1,
}) => {
  var v, O, b;
  let D = 0,
    L = !1,
    N = !1,
    g;
  if (!i || !Qe(i)) {
    let h = ut();
    (i = h.uuid), (N = h.isNewUser);
  }
  dt(i);
  let M =
      document != null && document.referrer
        ? { r: document == null ? void 0 : document.referrer }
        : {},
    c = [],
    _ = Ze(S),
    m = { "Content-Type": "application/json", "X-Lang": t, "X-Uuid": i };
  l && (m["M-Project-Id"] = String(l));
  let C = rt({
      uuid: i,
      abTestInitData: a,
      headers: m,
      apiPath: e,
      whence: r,
      userId: n,
      useAbTest: p,
    }),
    I = (h = !1) =>
      B(void 0, null, function* () {
        if (!c.length) return;
        let T = Ae(fe({}, M), {
          w: r,
          sw: (globalThis == null ? void 0 : globalThis.innerWidth) || 0,
          sh: (globalThis == null ? void 0 : globalThis.innerHeight) || 0,
          u: n,
        });
        h
          ? Object.assign(T, c.shift(), { ts: void 0 })
          : ((T.ev = [...c]),
            (c.length = 0),
            T.ev.forEach((R) => {
              R.ts += D;
            }));
        try {
          yield C.updateAbTestData(), (T.sids = C.getSids());
          let R = yield _(`${e}/event.json`, {
            method: "POST",
            headers: m,
            body: JSON.stringify(T),
            keepalive: !0,
          });
          R.ok && ((D = (yield R.json()).ts - de()), (L = !0));
        } catch (R) {}
      }),
    P,
    k = () => {
      P || (P = setInterval(() => I(), s));
    },
    A = () => {
      clearInterval(P), (P = void 0);
    };
  k();
  let E = () => I(),
    w = () => {
      I(), document.hidden ? A() : k();
    };
  window.addEventListener("beforeunload", E),
    window.addEventListener("visibilitychange", w);
  let f = {
    setLang(h) {
      m["X-Lang"] = h;
    },
    setUserId(h) {
      (n = h), C.setUserId(h), g == null || g.setUserId(h);
    },
    getAbTestData() {
      return B(this, null, function* () {
        return C.getAbTestData();
      });
    },
    isAbTestActive(h) {
      return B(this, null, function* () {
        return C.isAbTestActive(h);
      });
    },
    setUseAbTest(h) {
      C.setUseAbTest(h);
    },
    forcePush(h, T = {}, R = de()) {
      Object.entries(T).forEach(([U, x]) => {
        if (!De.includes(U)) {
          delete T[U];
          return;
        }
        U[0] === "i" && ((x = Math.floor(x)), (T[U] = x)),
          (x === 0 || x === "") && delete T[U];
      }),
        c.push({ ts: R, e: h, m: Object.keys(T).length ? T : void 0 }),
        L ? c.length >= o && I() : I(!0);
    },
    push(h, T = {}, R = de()) {
      document.hidden || f.forcePush(h, T, R);
    },
    send(h, T = {}, R = !1) {
      I(), R ? f.forcePush(h, T) : f.push(h, T), I(!0);
    },
    stop() {
      A(),
        (c.length = 0),
        (f.push = () => {}),
        window.removeEventListener("beforeunload", E),
        window.removeEventListener("visibilitychange", w),
        g == null || g.destroy();
    },
  };
  if (
    (N && f.send(Y.USER_NEW),
    (O = (v = window == null ? void 0 : window.fa) == null ? void 0 : v.q) !=
      null &&
      O.length &&
      ((b = window == null ? void 0 : window.fa) == null ||
        b.q.forEach(([h, T]) => f.push(h[0], h[1], T)),
      (window.fa.q = [])),
    !window.__FSM && d)
  ) {
    window.__FSM = !0;
    let h = lt(u);
    h.on(K.Created, (T) => {
      f.send(Y.SESS_START, { s1: T.id }, !0);
    }),
      h.on(K.Removed, (T) => {
        f.send(Y.SESS_END, { s1: T.id }, !0);
      }),
      h.init(),
      (g = it({
        headers: m,
        apiPath: e,
        userId: n,
        sessionManager: h,
        inlineStylesheet: !1,
      })),
      g == null ||
        g.on(
          $.Post,
          ({
            sessId: T,
            currentLocation: R,
            contentType: U,
            status: x,
            withSnapshot: X,
            dataSize: ee,
          }) => {
            f.send(
              Y.VISION_POST,
              { s1: T, s2: R, s3: U, i1: x, i2: X, f1: ee },
              !0
            );
          }
        ),
      g == null ||
        g.on($.Error, ({ sessId: T, error: R }) => {
          f.send(Y.VISION_ERROR, { s1: T, s2: R }, !0);
        }),
      g == null ||
        g.on($.Click, ({ x: T, y: R }) => {
          f.push(Y.VISION_CLICK, { i1: T, i2: R });
        }),
      g == null || g.start();
  }
  return f;
};
var z = ((e) => (
    (e[(e.CODE_OK = 200)] = "CODE_OK"),
    (e[(e.CODE_CREATED = 201)] = "CODE_CREATED"),
    (e[(e.CODE_BAD_REQUEST = 400)] = "CODE_BAD_REQUEST"),
    (e[(e.CODE_UNAUTHORIZED = 401)] = "CODE_UNAUTHORIZED"),
    (e[(e.CODE_FORBIDDEN = 403)] = "CODE_FORBIDDEN"),
    (e[(e.CODE_NOT_FOUND = 404)] = "CODE_NOT_FOUND"),
    (e[(e.CODE_METHOD_NOT_ALLOWED = 405)] = "CODE_METHOD_NOT_ALLOWED"),
    (e[(e.CODE_UNSUPPORTED_MEDIA_TYPE = 415)] = "CODE_UNSUPPORTED_MEDIA_TYPE"),
    (e[(e.CODE_TOO_MANY_REQUESTS = 429)] = "CODE_TOO_MANY_REQUESTS"),
    (e[(e.CODE_UNAVAILABLE_FOR_LEGAL_REASONS = 451)] =
      "CODE_UNAVAILABLE_FOR_LEGAL_REASONS"),
    (e[(e.CODE_CLIENT_CLOSED_REQUEST = 499)] = "CODE_CLIENT_CLOSED_REQUEST"),
    (e[(e.CODE_INTERNAL_SERVER_ERROR = 500)] = "CODE_INTERNAL_SERVER_ERROR"),
    (e[(e.CODE_NOT_IMPLEMENTED = 501)] = "CODE_NOT_IMPLEMENTED"),
    (e[(e.CODE_BAD_GATEWAY = 502)] = "CODE_BAD_GATEWAY"),
    (e[(e.CODE_TIMEOUT_EXCEED = 1488)] = "CODE_TIMEOUT_EXCEED"),
    (e[(e.CODE_TIMEOUT_EXCEED_WHILE_DOWNLOAD = 1489)] =
      "CODE_TIMEOUT_EXCEED_WHILE_DOWNLOAD"),
    (e[(e.ERR_TOO_MANY_REDIRECTS = -310)] = "ERR_TOO_MANY_REDIRECTS"),
    e
  ))(z || {}),
  ft = Object.defineProperty,
  Et = (e, t, r) =>
    t in e
      ? ft(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  j = (e, t, r) => (Et(e, typeof t != "symbol" ? t + "" : t, r), r),
  Pe = "HTTPError",
  Fe = class je extends Error {
    constructor(t) {
      var r, n, l;
      let { response: i = null, request: s, data: a = {} } = t,
        o = i == null ? void 0 : i.status;
      super(),
        j(this, "response"),
        j(this, "request"),
        j(this, "statusCode"),
        j(this, "title"),
        j(this, "isInterceptorError"),
        j(this, "data"),
        (this.name = o && (r = je.CLIENT_ERRORS_BY_STATUS[o]) != null ? r : Pe),
        (this.response = i),
        (this.request = s),
        (this.statusCode = o),
        (this.message = (n = a == null ? void 0 : a.message) != null ? n : ""),
        (this.title = (l = a == null ? void 0 : a.title) != null ? l : ""),
        (this.data = a);
    }
  };
j(Fe, "CLIENT_ERRORS_BY_STATUS", {
  [z.CODE_BAD_REQUEST]: "BadRequest",
  [z.CODE_UNAUTHORIZED]: "Unauthorized",
  [z.CODE_FORBIDDEN]: "Forbidden",
  [z.CODE_NOT_FOUND]: "NotFound",
});
var _t = Fe,
  he = class extends Error {
    constructor(t, r) {
      super(`Истекло время запроса. url: ${t.url}`),
        j(this, "request"),
        j(this, "statusCode"),
        (this.name = "TimeoutError"),
        (this.request = t),
        (this.statusCode = r != null ? r : z.CODE_TIMEOUT_EXCEED);
    }
  },
  Oe = class extends Error {
    constructor(t) {
      super(`Запрос был отменен. url: ${t.url}`),
        j(this, "request"),
        (this.name = "CancelRequest"),
        (this.request = t);
    }
  },
  ht = (e) => e !== null && typeof e == "object",
  Ot = (e) => !ht(e) || Object.keys(e).length === 0,
  pt = !1,
  ne = (e) => {
    if (e === null || typeof e != "object" || Array.isArray(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
  },
  { toString: Tt } = Object.prototype,
  St = ((e) => (t) => {
    let r = Tt.call(t);
    return r in e || (e[r] = r.slice(8, -1).toLowerCase()), e[r];
  })(Object.create(null)),
  xe = (e) => ((e = e.toLowerCase()), (t) => St(t) === e);
function Ue(e, t) {
  e === null ||
    typeof e == "undefined" ||
    (typeof e != "object" && (e = [e]),
    Array.isArray(e)
      ? e.forEach(t)
      : Object.keys(e).forEach((r) => t(e[r], r)));
}
function vt(e) {
  return e !== null && typeof e == "object";
}
var gt = xe("URLSearchParams"),
  mt = xe("Date"),
  Le = (e) =>
    encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]"),
  Rt = (e, t, r) => {
    if (!t) return e;
    let n;
    if (r) n = r(t);
    else if (gt(t)) n = t.toString();
    else {
      let l = [],
        i = new URLSearchParams(e.split("?")[1]);
      Ue(t, (s, a) => {
        s === null ||
          typeof s == "undefined" ||
          (Array.isArray(s) ? (a += "[]") : (s = [s]),
          Ue(s, (o) => {
            mt(o) ? (o = o.toISOString()) : vt(o) && (o = JSON.stringify(o)),
              i.get(a) !== String(o) && l.push(`${Le(a)}=${Le(o)}`);
          }));
      }),
        (n = l.join("&"));
    }
    if (n) {
      let l = e.indexOf("#");
      l !== -1 && (e = e.slice(0, l)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + n);
    }
    return e;
  },
  wt = () => {
    let e = Date.now();
    return () => Date.now() - e;
  },
  Me = (e) => /^(http|https):\/\//.test(e),
  Ct = (...e) => {
    let [t = "", r = "", n] = e;
    if (Me(n)) return n;
    let l =
      [t, r]
        .map((i) => (i == null ? void 0 : i.replace(/^\/|\/$/g, "")))
        .filter(Boolean)
        .join("/") + n;
    return l.startsWith("/") || Me(l) ? l : `/${l}`;
  },
  Ve = (e) =>
    Object.entries(e).reduce(
      (t, [r, n]) => (n !== void 0 && (t[r] = n), t),
      {}
    ),
  At = (e, t) => Rt(e, t),
  ae = (...e) => {
    let t = {};
    for (let r of e)
      if (r != null) {
        if (Array.isArray(r)) {
          Array.isArray(t) || (t = []), t.push(...r);
          continue;
        }
        if (ne(r)) {
          ne(t) || (t = {});
          for (let [n, l] of Object.entries(r)) {
            let i = t[n];
            if (ne(i) && ne(l)) {
              t[n] = ae(i, l);
              continue;
            }
            if (Array.isArray(i) && Array.isArray(l)) {
              t[n] = i.concat(l);
              continue;
            }
            t[n] = l;
          }
        } else t = r;
      }
    return t;
  },
  oe = (e) => (t) => (e.push(t), t),
  se = (e) => (t) => {
    let r = e.indexOf(t);
    t && e.splice(r, 1);
  },
  Nt = (e, ...t) => {
    let r = new URLSearchParams(e.replace(/.+\?/, ""));
    return t.reduce((n, l) => H(V({}, n), { [l]: r.get(l) }), {});
  },
  yt = (e) => {
    var t, r, n;
    return H(V({ keepalive: !1 }, e), {
      baseUrl: (t = e.baseUrl) != null ? t : "",
      prefixUrl: (r = e.prefixUrl) != null ? r : "",
      hooks: ae(
        {
          beforeRequest: [],
          afterResponse: [],
          beforeError: [],
          finishResponse: [],
        },
        e.hooks
      ),
      headers: (n = e.headers) != null ? n : {},
    });
  },
  bt = (e) => ({
    beforeRequest: { use: oe(e.beforeRequest), remove: se(e.beforeRequest) },
    afterResponse: { use: oe(e.afterResponse), remove: se(e.afterResponse) },
    beforeError: { use: oe(e.beforeError), remove: se(e.beforeError) },
    finishResponse: { use: oe(e.finishResponse), remove: se(e.finishResponse) },
  }),
  It = (e = 0) =>
    new Promise((t) => {
      setTimeout(t, e);
    }),
  He = (e) =>
    Object.keys(e).reduce((t, r) => ((t[r.toLowerCase()] = e[r]), t), {}),
  ke = /(\/sys-[^/]+\/).*/,
  Dt = /(\/media_asset\/).*/,
  Pt = (e) =>
    ke.test(e)
      ? e.replace(ke, "$1")
      : Dt.test(e)
      ? e.replace(/.*/, "/media_assets/")
      : e,
  Te = ((e) => ((e.ArrayBuffer = "arraybuffer"), (e.JSON = "json"), e))(
    Te || {}
  ),
  ie = ((e) => (
    (e[(e.TIMEOUT = 0)] = "TIMEOUT"), (e[(e.CANCEL = 1)] = "CANCEL"), e
  ))(ie || {});
function Ut(e) {
  return !e.startsWith("http") && !e.startsWith("/") && (e = `/${e}`), e;
}
function Lt(e, t) {
  var r, n, l;
  return H(
    V({ url: Ct(e.baseUrl, e.prefixUrl, t), responseType: Te.JSON }, e),
    {
      params: e.params ? Ve(e.params) : {},
      credentials: (r = e.credentials) != null ? r : "same-origin",
      redirect: (n = e.redirect) != null ? n : "manual",
      trace: e.trace === !0,
      headers: V(
        {
          "content-type": "application/json",
          accept: "application/json, text/plain, */*",
        },
        He((l = e.headers) != null ? l : {})
      ),
    }
  );
}
function Mt(e, t) {
  var r;
  return (r = t == null ? void 0 : t.key) != null
    ? r
    : `${JSON.stringify(e.params)}${e.url}`;
}
function pe(e) {
  if (e === null || typeof e != "object") return e;
  if (Array.isArray(e)) return e.map(pe);
  let t = {};
  for (let [r, n] of Object.entries(e))
    typeof n != "function" && (t[r] = pe(n));
  return t;
}
function kt(e, t) {
  var r;
  (r = e.response) != null &&
    r.headers &&
    (t
      ? (e.headers = e.response.headers)
      : (e.headers = Object.fromEntries(e.response.headers.entries())));
}
function Bt(e, t, r, n, l) {
  var i;
  let { trace: s } = Nt(l.url, "trace");
  ((i = r.trace) != null ? i : s) &&
    (t == null ||
      t.info(
        "HTTP Module trace",
        H(V({ type: "Trace Log" }, e), {
          config: r,
          time: n == null ? void 0 : n(),
        })
      ));
}
function Ft(e, t, r, n, l) {
  var i, s, a, o, S, p;
  t &&
    r &&
    r(
      `HTTP Module error: url - ${Pt(
        (i = n == null ? void 0 : n.pathname) != null ? i : l
      )}; error: ${
        (s = e == null ? void 0 : e.error) == null ? void 0 : s.name
      };`,
      H(V({}, (a = e.error) != null ? a : {}), {
        request: {
          url: (o = e == null ? void 0 : e.request) == null ? void 0 : o.url,
        },
      }),
      `HTTP_ERROR_${
        (p = (S = e == null ? void 0 : e.error) == null ? void 0 : S.name) !=
        null
          ? p
          : "UNKNOWN"
      }`
    );
}
function We(e, t = 0) {
  return J(this, null, function* () {
    var r, n, l, i, s;
    let {
        fetch: a,
        request: o,
        cacheService: S,
        cacheKey: p,
        withCache: u,
        execParams: d,
        hooks: v,
        logger: O,
        config: b,
        abortCallbacks: D,
        options: L,
        httpModule: N,
        url: g,
        cache: M,
      } = e,
      { jsonParse: c = !0, retryReqCount: _ = 0 } = d != null ? d : {},
      {
        beforeRequest: m,
        afterResponse: C,
        beforeError: I,
        finishResponse: P,
      } = v,
      k = new AbortController(),
      A,
      E = () => {
        k.abort(), (A = ie.CANCEL);
      };
    D.add(E), L.globalAbortCallbacks.add(E);
    let w = (y) => {
        (A = ie.TIMEOUT), k == null || k.abort(), y == null || y();
      },
      f = {
        request: o,
        response: null,
        data: null,
        error: void 0,
        execParams: d,
        hookPayload: {},
        currentHttpModule: N,
      },
      h = !1,
      T = () => {
        h || (P.forEach((y) => y(f)), (h = !0));
      },
      R = null,
      U =
        ((l =
          (n = (r = o.headers) == null ? void 0 : r["content-type"]) == null
            ? void 0
            : n.toLowerCase()) == null
          ? void 0
          : l.includes("form-data")) ||
        (o == null ? void 0 : o.body) instanceof FormData;
    !U &&
      typeof (o == null ? void 0 : o.body) != "string" &&
      (o.body = JSON.stringify(o.body)),
      U && ((i = o.headers) == null || delete i["content-type"]);
    for (let y of m) yield y(f, E);
    if (g.startsWith("http"))
      try {
        (R = new URL(g)),
          !e.request.corsUnsafeHeaders &&
            R.origin !== location.origin &&
            (o.headers = {});
      } catch (y) {}
    let x = b.trace ? wt() : null,
      X,
      { timeout: ee } = o,
      ue = () => {
        X && clearTimeout(X);
      },
      Ye =
        (s = O == null ? void 0 : O.httpError) != null
          ? s
          : O == null
          ? void 0
          : O.error,
      Ke = a(o.url, H(V({}, o), { signal: k.signal, timeout: void 0 }))
        .then((y) =>
          J(this, null, function* () {
            var F;
            if ((ue(), (f.response = y), c && y.status !== 204))
              try {
                f.data = yield ((F = o.responseType) == null
                  ? void 0
                  : F.toLowerCase()) === Te.ArrayBuffer
                  ? y.arrayBuffer()
                  : y.json();
              } catch (te) {}
            else f.data = y;
            T(), y.ok || (f.error = new _t(f));
            for (let te of C) {
              let G = yield te(f);
              G && (f = G);
            }
            return f;
          })
        )
        .then((y) => {
          var F;
          if (
            (!y.error &&
              u &&
              y.data &&
              (S == null ||
                S.set(
                  p,
                  pe(y.data),
                  (F = M == null ? void 0 : M.expire) != null ? F : void 0
                )),
            Bt(f, O, b, x, o),
            kt(y, !1),
            y.error)
          )
            throw y.error;
          return y;
        })
        .finally(() => {
          D.delete(E), L.globalAbortCallbacks.delete(E);
        });
    return Promise.race([
      Ke,
      ...(ee
        ? [
            new Promise((y, F) => {
              X = setTimeout(() => {
                w(F);
              }, ee);
            }),
          ]
        : []),
    ])
      .catch((y) =>
        J(this, null, function* () {
          var F;
          if (t < (_ != null ? _ : 0)) return We(e, t + 1);
          (F = k == null ? void 0 : k.signal) != null && F.aborted
            ? (f.error = A === ie.TIMEOUT ? new he(o) : new Oe(o))
            : (f.error = y),
            Ft(f, pt, Ye, R, g),
            ue(),
            T();
          for (let te of I)
            try {
              let G = yield te(f.error);
              G !== void 0 && (f.error = G);
            } catch (G) {
              f.error = G;
            }
          return f;
        })
      )
      .finally(ue);
  });
}
function jt(e, t, r) {
  t = Ut(t);
  let n = Lt(r, t),
    L = n,
    {
      hooks: l,
      logger: i,
      useCacheByDefault: s,
      cacheService: a,
      cache: o,
      fetch: S,
      trace: p,
    } = L,
    u = ve(L, [
      "hooks",
      "logger",
      "useCacheByDefault",
      "cacheService",
      "cache",
      "fetch",
      "trace",
    ]),
    d = { cache: o, trace: p },
    v = new Set(),
    O = () => {
      v.forEach((N) => N());
    };
  r.signal && r.signal.addEventListener("abort", O);
  let b = (N) =>
    J(this, null, function* () {
      var g, M;
      let {
        returnContext: c = !1,
        serverMultiRequestCount: _ = 1,
        requestLogReady: m,
        params: C,
      } = N != null ? N : {};
      C && (u.params = Ve(C)),
        Ot(u.params) || (u.url = At(n.url, (g = u.params) != null ? g : {})),
        N != null &&
          N.headers &&
          (u.headers = Object.assign(
            (M = u.headers) != null ? M : {},
            He(N.headers)
          ));
      let I = !c && (o != null ? o : s) && a,
        P = "";
      if (I) {
        P = Mt(u, o);
        let h = yield a.get(P);
        if (h)
          return {
            request: u,
            fromCache: !0,
            data: h,
            execParams: N,
            hookPayload: {},
            currentHttpModule: e,
          };
      }
      let k = {
          fetch: S,
          request: u,
          cacheService: a,
          cacheKey: P,
          withCache: I,
          execParams: N,
          hooks: l,
          logger: i,
          config: d,
          abortCallbacks: v,
          options: r,
          httpModule: e,
          url: t,
          cache: o,
        },
        A = 1,
        E = [],
        w = [];
      for (let h = 0; h < A; h++) {
        let T = Date.now(),
          R = { index: h + 1, status: "pending", duration: 0, error: void 0 };
        w.push(R),
          h > 0 && (yield It()),
          E.push(
            We(k).then(
              (U) => (
                U.error
                  ? ((R.status = "error"),
                    (R.error = U.error),
                    (R.duration = Date.now() - T))
                  : ((R.status = "ok"), (R.duration = Date.now() - T)),
                U
              )
            )
          );
      }
      return (
        m && Promise.allSettled(E).then(() => m(w)),
        Promise.race(E).finally(() => {
          r.signal && r.signal.removeEventListener("abort", O);
        })
      );
    });
  return {
    abort: O,
    executeSafe: b,
    execute: (N) =>
      J(this, null, function* () {
        let g = yield b(N);
        if (g.error) throw g.error;
        return N != null && N.returnContext ? g : g.data;
      }),
  };
}
var Be = (e) => {
  var t, r;
  let n = new Set(),
    l = new Map(),
    i = H(V({}, yt(e)), {
      fetch: (t = e == null ? void 0 : e.fetch) != null ? t : fetch,
      logger: (r = e == null ? void 0 : e.logger) != null ? r : console,
      globalAbortCallbacks: n,
      pendingRequests: l,
    }),
    s = (o, S, p) => jt(o, S, ae(i, p)),
    a = (o, S) => s(a, o, S);
  return (
    (a.abortAllRequests = () => {
      n.forEach((o) => o()), n.clear();
    }),
    (a.create = (o) => Be(o)),
    (a.extend = (o) => Be(ae(i, o))),
    (a.replaceOptions = (o) => {
      Object.assign(i, o);
    }),
    (a.hooks = bt(i.hooks)),
    (a.getOptions = () => i),
    a
  );
};
var Se = {};
$e(Se, { default: () => Gt, parse: () => q, serialize: () => Z });
var ce = {},
  Q = {
    get exports() {
      return ce;
    },
    set exports(e) {
      ce = e;
    },
  };
ce.parse = Vt;
ce.serialize = Ht;
var xt = Object.prototype.toString,
  le = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Vt(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, n = t || {}, l = n.decode || Wt, i = 0; i < e.length; ) {
    var s = e.indexOf("=", i);
    if (s === -1) break;
    var a = e.indexOf(";", i);
    if (a === -1) a = e.length;
    else if (a < s) {
      i = e.lastIndexOf(";", s - 1) + 1;
      continue;
    }
    var o = e.slice(i, s).trim();
    if (r[o] === void 0) {
      var S = e.slice(s + 1, a).trim();
      S.charCodeAt(0) === 34 && (S = S.slice(1, -1)), (r[o] = $t(S, l));
    }
    i = a + 1;
  }
  return r;
}
function Ht(e, t, r) {
  var n = r || {},
    l = n.encode || Yt;
  if (typeof l != "function") throw new TypeError("option encode is invalid");
  if (!le.test(e)) throw new TypeError("argument name is invalid");
  var i = l(t);
  if (i && !le.test(i)) throw new TypeError("argument val is invalid");
  var s = e + "=" + i;
  if (n.maxAge != null) {
    var a = n.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (n.domain) {
    if (!le.test(n.domain)) throw new TypeError("option domain is invalid");
    s += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!le.test(n.path)) throw new TypeError("option path is invalid");
    s += "; Path=" + n.path;
  }
  if (n.expires) {
    var o = n.expires;
    if (!Kt(o) || isNaN(o.valueOf()))
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + o.toUTCString();
  }
  if (
    (n.httpOnly && (s += "; HttpOnly"),
    n.secure && (s += "; Secure"),
    n.partitioned && (s += "; Partitioned"),
    n.priority)
  ) {
    var S =
      typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority;
    switch (S) {
      case "low":
        s += "; Priority=Low";
        break;
      case "medium":
        s += "; Priority=Medium";
        break;
      case "high":
        s += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (n.sameSite) {
    var p =
      typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (p) {
      case !0:
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return s;
}
function Wt(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function Yt(e) {
  return encodeURIComponent(e);
}
function Kt(e) {
  return xt.call(e) === "[object Date]" || e instanceof Date;
}
function $t(e, t) {
  try {
    return t(e);
  } catch (r) {
    return e;
  }
}
var q, Z;
Object.isExtensible(Q.exports) &&
  Object.keys(Q.exports).length === 2 &&
  ((q = Q.exports.parse), (Z = Q.exports.serialize));
var Gt = Q.exports;
var Qt = (e, t, r = !0) => {
  let n = typeof document == "object" && typeof document.cookie == "string",
    l = typeof e == "object" && typeof t == "object",
    i = (!n && !l) || (n && l),
    s = (u) => {
      if (l) {
        let d = e.headers.cookie || "";
        return (
          u &&
            ((d = t.getHeaders()),
            (d = d["set-cookie"]
              ? d["set-cookie"].map((v) => v.split(";")[0]).join(";")
              : "")),
          d
        );
      }
      if (n) return document.cookie || "";
    },
    a = () => {
      let u = t.getHeader("Set-Cookie");
      return (u = typeof u == "string" ? [u] : u), u || [];
    },
    o = (u) => t.setHeader("Set-Cookie", u),
    S = (u, d) => {
      if (!d) return u;
      try {
        return JSON.parse(u);
      } catch (v) {
        return u;
      }
    },
    p = {
      parseJSON: r,
      set(u = "", d = "", v = { path: "/" }) {
        if (i) return;
        let O = typeof d == "object" ? JSON.stringify(d) : d;
        if (l) {
          let b = a();
          b.push(Z(u, O, v)), o(b);
        } else document.cookie = Z(u, O, v);
      },
      setAll(u = []) {
        i ||
          (Array.isArray(u) &&
            u.forEach((d) => {
              let { name: v = "", value: O = "", opts: b = { path: "/" } } = d;
              p.set(v, O, b);
            }));
      },
      get(u = "", d = { fromRes: !1, parseJSON: p.parseJSON }) {
        if (i) return "";
        let O = q(s(d.fromRes))[u];
        return S(O, d.parseJSON);
      },
      getAll(u = { fromRes: !1, parseJSON: p.parseJSON }) {
        if (i) return {};
        let d = q(s(u.fromRes));
        return (
          Object.keys(d).forEach((v) => {
            d[v] = S(d[v], u.parseJSON);
          }),
          d
        );
      },
      remove(u = "", d = { path: "/" }) {
        i || ((d.expires = new Date(0)), p.set(u, "", d));
      },
      removeAll(u = { path: "/" }) {
        if (i) return;
        let d = q(s());
        Object.keys(d).forEach((v) => {
          p.remove(v, u);
        });
      },
      nodeCookie: Se,
    };
  return p;
};
export {
  Oe as CancelRequest,
  Y as FatmanEvent,
  _t as HTTPError,
  K as SessionEvent,
  he as TimeoutError,
  Ee as VisionClientMessageType,
  $ as VisionEvent,
  re as VisionWorkerMessageType,
  Qt as cookieUniversal,
  Jt as createFatmanClient,
  Be as createInstance,
  de as getMicrosecondsTs,
  q as parse,
  Z as serialize,
};
