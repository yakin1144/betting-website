import $_$ from "./$_$.js";
$_$();
var fe = Object.defineProperty;
var _e = (e, s, r) =>
  s in e
    ? fe(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[s] = r);
var Y = (e, s, r) => _e(e, typeof s != "symbol" ? s + "" : s, r);
import {
  useUserConfigStore as X,
  useGlobalStore as re,
  bettingTimerName_BettingTimerName as oe,
  runtimeCore_esmBundler_watch as ye,
  reactivity_esmBundler_unref as m,
  useState as ge,
  runtimeCore_esmBundler_onMounted as ae,
  reactivity_esmBundler_ref as $,
  index_getConfigs as ie,
  runtimeCore_esmBundler_computed as q,
  bettingType_BettingType as P,
  execAsync as x,
  runtimeCore_esmBundler_onUnmounted as ve,
  MarketsNameType as Se,
  BettingPageType as Ie,
  index_useHttpModule as Te,
  index_useClientHeaders as Ee,
  index_useCookies as Ne,
  index_useLogger as Be,
  index_useDateTimeService as we,
  index_useT as Ce,
  useNotifications_useNotifications as ke,
  reactivity_esmBundler_toRef as be,
  reactivity_esmBundler_shallowRef as Re,
  HttpClient as Z,
  disableReactivity_disableReactivity as Oe,
  assert as xe,
  isDef as ee,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useBettingTimerInterval as le } from "./bb0d3b59f5.js";
import { useStartIntervalUpdate as ce } from "./10dcfb9c91.js";
import {
  isRemoteComponent as Ge,
  useRemoteComponentPayload as Me,
  EXPRESS_DAY_BONUS_MARKET_TYPE_ID as De,
  BettingGameParser as Pe,
  marketTypesByGroupId as Le,
  src as Ae,
  parseExpressDayBonusMarket as Fe,
  EXPRESS_DAY_RESPONSE_EXPRESS_ID_FIELD as ue,
  EXPRESS_DAY_RESPONSE_ID_FIELD as $e,
  EXPRESS_DAY_RESPONSE_GAME_TYPE_ID_FIELD as Ue,
  EXPRESS_DAY_RESPONSE_GROUP_ID_FIELD as qe,
  EXPRESS_DAY_RESPONSE_COEFFICIENT_BY_VIEW_FIELD as He,
  EXPRESS_DAY_RESPONSE_COEFFICIENT_FIELD as ze,
  RequestManager as Ve,
  lineMainGetExpressDayApi as Ke,
  liveMainGetExpressDayApi as Ye,
  useBetModelsManager as Xe,
  useCouponStore as je,
  AnalyticsBetSourceName as We,
  GameModel as Je,
  getSportNameForUrl as Qe,
  getChampNameForUrl as Ze,
  getGameNameForUrl as et,
} from "./entry-50afb6f36c.js";
import { useTopGamesRequest as tt } from "./1af6a171a2.js";
const Gt = (e) => {
  $_$();
  const s = X(),
    r = re(),
    {
      bettingType: t,
      pageType: n,
      topGamesRefresh: a,
      topGamesCancelRequest: o,
      topGamesRequestLimit: u,
      topGamesRequestSports: i,
      topGamesRequestSportGamesLimit: c,
      topGamesRequestChamps: p,
    } = e,
    d = le({ name: oe.TOP_GAMES, bettingType: t }),
    { forceUpdateData: l } = ce({
      interval: d,
      onUpdateData: a,
      onCancelIntervalRequest: o,
    });
  return (
    ye(
      [
        () => $_$() && m(t),
        () => $_$() && m(n),
        () => $_$() && m(u),
        () => $_$() && m(i),
        () => $_$() && m(c),
        () => $_$() && m(p),
        () => r.marketsNameType,
        () => r.getCoefViewId,
        () => r.getTimeZone,
        () => r.getIs12h,
        () => r.getUserId,
        () => s.isInstalled,
        () => s.isCoeffCutLine,
        () => s.isCoeffCutLive,
      ],
      l
    ),
    { topGamesPollingForceUpdate: l }
  );
};
function st(e, s = () => {}) {
  $_$();
  const r = ge(e, s);
  return (
    Ge(),
    ae(() => {
      const { getPayload: t } = Me(),
        n = t();
      n && e in n && (r.value = n[e]);
    }),
    r
  );
}
const te = Object.freeze({
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0,
});
function nt(e, s) {
  s ? (s = { ...te, ...s }) : (s = te);
  const r = pe(s);
  return r.dispatch(e), r.toString();
}
const rt = Object.freeze(["prototype", "__proto__", "constructor"]);
function pe(e) {
  let s = "",
    r = new Map();
  const t = (n) => {
    s += n;
  };
  return {
    toString() {
      return s;
    },
    getContext() {
      return r;
    },
    dispatch(n) {
      return (
        e.replacer && (n = e.replacer(n)),
        this[n === null ? "null" : typeof n](n)
      );
    },
    object(n) {
      if (n && typeof n.toJSON == "function") return this.object(n.toJSON());
      const a = Object.prototype.toString.call(n);
      let o = "";
      const u = a.length;
      u < 10 ? (o = "unknown:[" + a + "]") : (o = a.slice(8, u - 1)),
        (o = o.toLowerCase());
      let i = null;
      if ((i = r.get(n)) === void 0) r.set(n, r.size);
      else return this.dispatch("[CIRCULAR:" + i + "]");
      if (typeof Buffer != "undefined" && Buffer.isBuffer && Buffer.isBuffer(n))
        return t("buffer:"), t(n.toString("utf8"));
      if (o !== "object" && o !== "function" && o !== "asyncfunction")
        this[o] ? this[o](n) : e.ignoreUnknown || this.unkown(n, o);
      else {
        let c = Object.keys(n);
        e.unorderedObjects && (c = c.sort());
        let p = [];
        e.respectType !== !1 && !se(n) && (p = rt),
          e.excludeKeys &&
            ((c = c.filter((l) => !e.excludeKeys(l))),
            (p = p.filter((l) => !e.excludeKeys(l)))),
          t("object:" + (c.length + p.length) + ":");
        const d = (l) => {
          this.dispatch(l),
            t(":"),
            e.excludeValues || this.dispatch(n[l]),
            t(",");
        };
        for (const l of c) d(l);
        for (const l of p) d(l);
      }
    },
    array(n, a) {
      if (
        ((a = a === void 0 ? e.unorderedArrays !== !1 : a),
        t("array:" + n.length + ":"),
        !a || n.length <= 1)
      ) {
        for (const i of n) this.dispatch(i);
        return;
      }
      const o = new Map(),
        u = n.map((i) => {
          const c = pe(e);
          c.dispatch(i);
          for (const [p, d] of c.getContext()) o.set(p, d);
          return c.toString();
        });
      return (r = o), u.sort(), this.array(u, !1);
    },
    date(n) {
      return t("date:" + n.toJSON());
    },
    symbol(n) {
      return t("symbol:" + n.toString());
    },
    unkown(n, a) {
      if ((t(a), !!n && (t(":"), n && typeof n.entries == "function")))
        return this.array(Array.from(n.entries()), !0);
    },
    error(n) {
      return t("error:" + n.toString());
    },
    boolean(n) {
      return t("bool:" + n);
    },
    string(n) {
      t("string:" + n.length + ":"), t(n);
    },
    function(n) {
      t("fn:"),
        se(n) ? this.dispatch("[native]") : this.dispatch(n.toString()),
        e.respectFunctionNames !== !1 &&
          this.dispatch("function-name:" + String(n.name)),
        e.respectFunctionProperties && this.object(n);
    },
    number(n) {
      return t("number:" + n);
    },
    xml(n) {
      return t("xml:" + n.toString());
    },
    null() {
      return t("Null");
    },
    undefined() {
      return t("Undefined");
    },
    regexp(n) {
      return t("regex:" + n.toString());
    },
    uint8array(n) {
      return t("uint8array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    uint8clampedarray(n) {
      return (
        t("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(n))
      );
    },
    int8array(n) {
      return t("int8array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    uint16array(n) {
      return t("uint16array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    int16array(n) {
      return t("int16array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    uint32array(n) {
      return t("uint32array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    int32array(n) {
      return t("int32array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    float32array(n) {
      return t("float32array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    float64array(n) {
      return t("float64array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    arraybuffer(n) {
      return t("arraybuffer:"), this.dispatch(new Uint8Array(n));
    },
    url(n) {
      return t("url:" + n.toString());
    },
    map(n) {
      t("map:");
      const a = [...n];
      return this.array(a, e.unorderedSets !== !1);
    },
    set(n) {
      t("set:");
      const a = [...n];
      return this.array(a, e.unorderedSets !== !1);
    },
    file(n) {
      return t("file:"), this.dispatch([n.name, n.size, n.type, n.lastModfied]);
    },
    blob() {
      if (e.ignoreUnknown) return t("[blob]");
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`);
    },
    domwindow() {
      return t("domwindow");
    },
    bigint(n) {
      return t("bigint:" + n.toString());
    },
    process() {
      return t("process");
    },
    timer() {
      return t("timer");
    },
    pipe() {
      return t("pipe");
    },
    tcp() {
      return t("tcp");
    },
    udp() {
      return t("udp");
    },
    tty() {
      return t("tty");
    },
    statwatcher() {
      return t("statwatcher");
    },
    securecontext() {
      return t("securecontext");
    },
    connection() {
      return t("connection");
    },
    zlib() {
      return t("zlib");
    },
    context() {
      return t("context");
    },
    nodescript() {
      return t("nodescript");
    },
    httpparser() {
      return t("httpparser");
    },
    dataview() {
      return t("dataview");
    },
    signal() {
      return t("signal");
    },
    fsevent() {
      return t("fsevent");
    },
    tlswrap() {
      return t("tlswrap");
    },
  };
}
const de = "[native code] }",
  ot = de.length;
function se(e) {
  return typeof e != "function"
    ? !1
    : Function.prototype.toString.call(e).slice(-ot) === de;
}
var at = Object.defineProperty,
  it = (e, s, r) =>
    s in e
      ? at(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[s] = r),
  U = (e, s, r) => (it(e, typeof s != "symbol" ? s + "" : s, r), r);
class L {
  constructor(s, r) {
    U(this, "words"),
      U(this, "sigBytes"),
      (s = this.words = s || []),
      (this.sigBytes = r === void 0 ? s.length * 4 : r);
  }
  toString(s) {
    return (s || lt).stringify(this);
  }
  concat(s) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let r = 0; r < s.sigBytes; r++) {
        const t = (s.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
        this.words[(this.sigBytes + r) >>> 2] |=
          t << (24 - ((this.sigBytes + r) % 4) * 8);
      }
    else
      for (let r = 0; r < s.sigBytes; r += 4)
        this.words[(this.sigBytes + r) >>> 2] = s.words[r >>> 2];
    return (this.sigBytes += s.sigBytes), this;
  }
  clamp() {
    (this.words[this.sigBytes >>> 2] &=
      4294967295 << (32 - (this.sigBytes % 4) * 8)),
      (this.words.length = Math.ceil(this.sigBytes / 4));
  }
  clone() {
    return new L([...this.words]);
  }
}
const lt = {
    stringify(e) {
      const s = [];
      for (let r = 0; r < e.sigBytes; r++) {
        const t = (e.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
        s.push((t >>> 4).toString(16), (t & 15).toString(16));
      }
      return s.join("");
    },
  },
  ct = {
    stringify(e) {
      const s =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        r = [];
      for (let t = 0; t < e.sigBytes; t += 3) {
        const n = (e.words[t >>> 2] >>> (24 - (t % 4) * 8)) & 255,
          a = (e.words[(t + 1) >>> 2] >>> (24 - ((t + 1) % 4) * 8)) & 255,
          o = (e.words[(t + 2) >>> 2] >>> (24 - ((t + 2) % 4) * 8)) & 255,
          u = (n << 16) | (a << 8) | o;
        for (let i = 0; i < 4 && t * 8 + i * 6 < e.sigBytes * 8; i++)
          r.push(s.charAt((u >>> (6 * (3 - i))) & 63));
      }
      return r.join("");
    },
  },
  ut = {
    parse(e) {
      const s = e.length,
        r = [];
      for (let t = 0; t < s; t++)
        r[t >>> 2] |= (e.charCodeAt(t) & 255) << (24 - (t % 4) * 8);
      return new L(r, s);
    },
  },
  pt = {
    parse(e) {
      return ut.parse(unescape(encodeURIComponent(e)));
    },
  };
class dt {
  constructor() {
    U(this, "_data", new L()),
      U(this, "_nDataBytes", 0),
      U(this, "_minBufferSize", 0),
      U(this, "blockSize", 512 / 32);
  }
  reset() {
    (this._data = new L()), (this._nDataBytes = 0);
  }
  _append(s) {
    typeof s == "string" && (s = pt.parse(s)),
      this._data.concat(s),
      (this._nDataBytes += s.sigBytes);
  }
  _doProcessBlock(s, r) {}
  _process(s) {
    let r,
      t = this._data.sigBytes / (this.blockSize * 4);
    s ? (t = Math.ceil(t)) : (t = Math.max((t | 0) - this._minBufferSize, 0));
    const n = t * this.blockSize,
      a = Math.min(n * 4, this._data.sigBytes);
    if (n) {
      for (let o = 0; o < n; o += this.blockSize)
        this._doProcessBlock(this._data.words, o);
      (r = this._data.words.splice(0, n)), (this._data.sigBytes -= a);
    }
    return new L(r, a);
  }
}
class mt extends dt {
  update(s) {
    return this._append(s), this._process(), this;
  }
  finalize(s) {
    s && this._append(s);
  }
}
var ht = Object.defineProperty,
  ft = (e, s, r) =>
    s in e
      ? ht(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[s] = r),
  _t = (e, s, r) => (ft(e, s + "", r), r);
const ne = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372,
    528734635, 1541459225,
  ],
  yt = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998,
  ],
  F = [];
class gt extends mt {
  constructor() {
    super(...arguments), _t(this, "_hash", new L([...ne]));
  }
  reset() {
    super.reset(), (this._hash = new L([...ne]));
  }
  _doProcessBlock(s, r) {
    const t = this._hash.words;
    let n = t[0],
      a = t[1],
      o = t[2],
      u = t[3],
      i = t[4],
      c = t[5],
      p = t[6],
      d = t[7];
    for (let l = 0; l < 64; l++) {
      if (l < 16) F[l] = s[r + l] | 0;
      else {
        const f = F[l - 15],
          C = ((f << 25) | (f >>> 7)) ^ ((f << 14) | (f >>> 18)) ^ (f >>> 3),
          g = F[l - 2],
          b = ((g << 15) | (g >>> 17)) ^ ((g << 13) | (g >>> 19)) ^ (g >>> 10);
        F[l] = C + F[l - 7] + b + F[l - 16];
      }
      const N = (i & c) ^ (~i & p),
        v = (n & a) ^ (n & o) ^ (a & o),
        k =
          ((n << 30) | (n >>> 2)) ^
          ((n << 19) | (n >>> 13)) ^
          ((n << 10) | (n >>> 22)),
        _ =
          ((i << 26) | (i >>> 6)) ^
          ((i << 21) | (i >>> 11)) ^
          ((i << 7) | (i >>> 25)),
        S = d + _ + N + yt[l] + F[l],
        I = k + v;
      (d = p),
        (p = c),
        (c = i),
        (i = (u + S) | 0),
        (u = o),
        (o = a),
        (a = n),
        (n = (S + I) | 0);
    }
    (t[0] = (t[0] + n) | 0),
      (t[1] = (t[1] + a) | 0),
      (t[2] = (t[2] + o) | 0),
      (t[3] = (t[3] + u) | 0),
      (t[4] = (t[4] + i) | 0),
      (t[5] = (t[5] + c) | 0),
      (t[6] = (t[6] + p) | 0),
      (t[7] = (t[7] + d) | 0);
  }
  finalize(s) {
    super.finalize(s);
    const r = this._nDataBytes * 8,
      t = this._data.sigBytes * 8;
    return (
      (this._data.words[t >>> 5] |= 128 << (24 - (t % 32))),
      (this._data.words[(((t + 64) >>> 9) << 4) + 14] = Math.floor(
        r / 4294967296
      )),
      (this._data.words[(((t + 64) >>> 9) << 4) + 15] = r),
      (this._data.sigBytes = this._data.words.length * 4),
      this._process(),
      this._hash
    );
  }
}
function vt(e) {
  return new gt().finalize(e).toString(ct);
}
function St(e, s = {}) {
  const r = typeof e == "string" ? e : nt(e, s);
  return vt(r).slice(0, 10);
}
const Mt = ({ bettingType: e, pageType: s, methodName: r = "load", ...t }) => {
    $_$();
    const n = X(),
      a = $(t.limit),
      o = $(t.champs),
      u = $(t.sportIds),
      i = $(t.sportLimit),
      [{ id: c }, p] = ie(-1012, 523),
      d = p == null ? void 0 : p.includes(c),
      l = $(!0),
      N = q(() => {
        $_$();
        const h = [];
        return (
          m(e) === P.LIVE
            ? h.push(...n.liveSportsBlackList)
            : h.push(...n.lineSportsBlackList),
          d || h.push(66),
          h
        );
      }),
      { getTopGames: v, cancelRequest: k } = tt({
        bettingType: e,
        antiSports: N,
        limit: a,
        sports: u,
        countBySport: i,
        champs: o,
        methodName: r,
      }),
      _ = St({
        bettingType: m(e),
        limit: m(a),
        sports: m(u),
        sportLimit: m(i),
        champs: m(o),
        methodName: m(r),
      }),
      S = st(_, () => []),
      I = $("pending"),
      f = q(
        () =>
          ($_$() && m(S).map((h) => $_$() && { ...h, bettingType: m(e) })) || []
      ),
      C = q(() => $_$() && !m(f).length && m(I) === "pending"),
      g = async () => {
        $_$();
        let h, G;
        try {
          I.value = "pending";
          const D = (([h, G] = x(() => v())), (h = await h), G(), h);
          (S.value = D != null ? D : []), (I.value = "success");
        } catch (D) {
          I.value = "error";
        }
      },
      b = (h) => {
        a.value = h;
      },
      R = (h = []) => {
        u.value = [...h];
      },
      M = (h) => {
        i.value = h;
      },
      O = (h) => {
        o.value = h;
      };
    return (
      ae(async () => {
        $_$();
        let h, G;
        ([h, G] = x(() => g())), await h, G(), (l.value = !1);
      }),
      ve(() => {
        S.value = [];
      }),
      {
        bettingType: e,
        pageType: s,
        topGamesList: f,
        areTopGamesLoading: C,
        isFirstLoad: l,
        topGamesRequestLimit: a,
        topGamesRequestSports: u,
        topGamesRequestSportGamesLimit: i,
        topGamesRequestChamps: o,
        setTopGamesRequestLimit: b,
        setTopGamesRequestSports: R,
        setTopGamesRequestSportGamesLimit: M,
        setTopGamesRequestChamps: O,
        topGamesRefresh: g,
        topGamesCancelRequest: k,
      }
    );
  },
  It = (e, s, r) => {
    $_$();
    var t, n, a, o, u, i, c, p;
    const d = (
        (n = (t = s.opponent1) == null ? void 0 : t.opps) != null ? n : []
      ).at(0),
      l = (
        (o = (a = s.opponent2) == null ? void 0 : a.opps) != null ? o : []
      ).at(0),
      N = [
        {
          C: s.event.cf,
          CV: s.event.cfView,
          T: s.event.type,
          G: s.event.groupId,
          P: s.event.parameter,
          [ue]: e.expressId,
          PL: {
            I: (u = s.event.player) == null ? void 0 : u.id,
            N: (i = s.event.player) == null ? void 0 : i.name,
          },
        },
      ],
      v = r === P.LIVE ? 1 : 3;
    return {
      ID: s.id,
      ST: s.startTs,
      CF: s.event.cf,
      CID: s.constId,
      T: s.event.type,
      PS: s.periodName,
      CV: s.event.cfView,
      EG: s.event.groupId,
      EI: e.expressId,
      GS: s.event.shortGroupId,
      L: s.liga.name,
      LE: s.liga.nameEng,
      LI: s.liga.id,
      N: s.num,
      O1: s.opponent1.fullName,
      O1E: s.opponent1.fullNameEng,
      O1I: d == null ? void 0 : d.id,
      O1IMG: [d == null ? void 0 : d.image],
      O2: (c = s.opponent2) == null ? void 0 : c.fullName,
      O2E: (p = s.opponent2) == null ? void 0 : p.fullNameEng,
      O2I: l == null ? void 0 : l.id,
      O2IMG: [l == null ? void 0 : l.image],
      SN: s.sport.name,
      SE: s.sport.nameEng,
      I: s.id,
      CI: s.constId,
      S: s.startTs,
      SI: s.sport.id,
      TN: s.periodName,
      KI: v,
      O1C: 0,
      O2C: 0,
      E: N,
    };
  },
  Tt = (e, s) => ({
    [ze]: s.event.cf,
    [He]: s.event.cfView,
    [qe]: s.event.groupId,
    [Ue]: s.event.type,
    [ue]: e.expressId,
    [$e]: s.id,
  }),
  Et = (e) => {
    const {
      marketsNameType: s,
      bettingType: r,
      $betModelsManager: t,
      $T: n,
      $dateTimeService: a,
      $logger: o,
      $siteConfig: u,
      $T: i,
    } = e;
    return async (c) => {
      $_$();
      var p;
      let d, l;
      const N = c.events.findIndex((S) => S.event.type === De),
        v = (p = c.events[N]) != null ? p : {};
      N > -1 && c.events.splice(N, 1);
      const k =
          (([d, l] = x(() =>
            Promise.all(
              c.events.map(async (S) => {
                $_$();
                var I;
                let f, C;
                const g = Pe.parseGame({
                  unparsedGameData: It(c, S, r),
                  dateTimeService: a,
                  translationService: n,
                  logger: o,
                  lng: u.lng,
                  navigationTopChamp: u.navigationTopChamp,
                });
                if (!((I = g.markets) != null && I.length))
                  return { ...g, markets: [] };
                const [b] = g.markets,
                  { groupId: R, typeId: M, ...O } = b,
                  h = R in Le,
                  G =
                    (([f, C] = x(() =>
                      t.getGroupTemplateById({
                        groupId: R,
                        isDefaultGroup: h,
                        marketsNameType: s,
                      })
                    )),
                    (f = await f),
                    C(),
                    f),
                  { nameTemplate: D, templateTypeId: H } = G.markets[M],
                  z = s === Se.short ? G.name : O.groupName,
                  V = Ae.generateMarketName({
                    marketParam: O.param,
                    playerName: O.playerName,
                    marketType: M,
                    sportId: O.sportId,
                    marketTemplateType: H,
                    marketNameTemplate: D,
                    marketGroupId: R,
                    language: u.lng,
                    firstOpponentName: O.firstOpponentName,
                    secondOpponentName: O.secondOpponentName,
                  });
                return { ...g, markets: [{ ...b, name: V, groupName: z }] };
              })
            )
          )),
          (d = await d),
          l(),
          d),
        _ = Fe({ T: i }, Tt(c, v));
      return {
        id: c.expressId,
        games: k,
        bonusMarket: _,
        overallOdds: c.cfView,
      };
    };
  },
  Nt = async (e, s) => {
    $_$();
    let r, t;
    const n = Et(s);
    return {
      expresses:
        (([r, t] = x(() => Promise.all(e.map(n)))), (r = await r), t(), r),
    };
  },
  Bt = (e) => {
    $_$();
    const s = new Ve({
        $httpModule: e.$httpModule,
        $clientHeaders: e.$clientHeaders,
        $cookies: e.$cookies,
        $logger: e.$logger,
      }),
      r = (o) => (u) =>
        $_$() &&
        Nt(u, {
          $T: e.$T,
          $siteConfig: e.$siteConfig,
          $betModelsManager: e.$betModelsManager,
          $dateTimeService: e.$dateTimeService,
          $logger: e.$logger,
          marketsNameType: m(e.marketsNameType),
          bettingType: o,
        }),
      t = {
        [P.LIVE]: { method: Ye, parser: r(P.LIVE) },
        [P.LINE]: { method: Ke, parser: r(P.LINE) },
      };
    return {
      loadExpresses: (o, u) => s.load({ type: o, api: t[o], params: u }),
      cancelAllRequests: (o) => s.cancelAllRequest(o),
    };
  };
var wt = ((e) => (
  (e[(e.initial = 0)] = "initial"),
  (e[(e.loading = 1)] = "loading"),
  (e[(e.loaded = 2)] = "loaded"),
  e
))(wt || {});
const Dt = (e, s = Ie.HOME) => {
  $_$();
  const r = Te(),
    t = Ee(),
    n = Ne(),
    a = Xe(),
    o = Be(),
    u = we(),
    i = Ce(),
    [c, p, { id: d }, { id: l }, N = {}] = ie(-1e3, -1001, -1012, -1004, 515),
    v = re(),
    k = X(),
    _ = je(),
    { notificationQuestion: S } = ke(),
    I = Bt({
      $httpModule: r,
      $clientHeaders: t,
      $cookies: n,
      $betModelsManager: a,
      $logger: o,
      $siteConfig: { lng: l, navigationTopChamp: N },
      $dateTimeService: u,
      marketsNameType: be(() => v.marketsNameType),
      $T: i,
    }),
    f = Re([]),
    C = $(0),
    g = q(() => {
      $_$();
      const y = k.isCoeffCutLine && m(e) === P.LINE,
        T = k.isCoeffCutLive && m(e) === P.LIVE;
      return y || T;
    }),
    b = () => {
      f.value = [];
    },
    R = async () => {
      $_$();
      let y, T;
      try {
        const E = v.coefViewId === 0 ? 3 : v.coefViewId,
          {
            data: w,
            status: B,
            message: A,
          } = (([y, T] = x(
            () =>
              $_$() &&
              I.loadExpresses(m(e), {
                coefViewId: E,
                lng: v.language,
                userId: m(g) ? v.userId : void 0,
                country: d,
                ref: c,
                groupId: p,
              })
          )),
          (y = await y),
          T(),
          y);
        switch (B) {
          case Z.STATUS_SUCCESS: {
            f.value = w.expresses;
            break;
          }
          case Z.STATUS_ERROR:
            throw new Error(A);
        }
      } catch (E) {
        o.error("fetchExpresses:", E), b();
      } finally {
        C.value = 2;
      }
    },
    M = async ({ express: y, games: T }) => {
      $_$();
      if (!y.bonusMarket) return;
      const E = _.couponBetIds,
        w = m(T).map((K) => {
          var J, Q;
          return (Q = (J = K.markets) == null ? void 0 : J[0]) == null
            ? void 0
            : Q.id;
        }),
        B = E.includes(y.bonusMarket.id),
        A = w.every((K) => E.includes(K));
      if ((!B && A && !_.manuallyDeletedBonusBet) || (B && !A))
        return _.couponAddBet({
          market: y.bonusMarket,
          shouldSkipOneClickBet: !0,
          pageType: m(s),
        });
    },
    O = async (y) => {
      $_$();
      let T, E;
      const { games: w } = y;
      if (!w.length) return;
      const B = _.couponBlockIds.length + 1;
      return (
        ([T, E] = x(() =>
          Promise.all(
            w.map((A, j) => {
              $_$();
              const [W] = A.markets;
              return _.couponAddBet({
                game: A,
                market: W,
                shouldSkipOneClickBet: !0,
                manualBlockId: B + j,
                pageType: m(s),
              });
            })
          )
        )),
        await T,
        E(),
        _.couponSetManuallyDeletedBonusBet(!1),
        M(y)
      );
    },
    h = async (y) => {
      $_$();
      let T, E;
      const { game: w, market: B } = y;
      if (B.coefByView !== void 0)
        return (
          ([T, E] = x(
            () =>
              $_$() &&
              _.couponAddBet({
                game: w,
                market: B,
                shouldSkipOneClickBet: !1,
                pageType: m(s),
                source: We.ExpressDayAddEvent,
              })
          )),
          await T,
          E(),
          _.couponSetManuallyDeletedBonusBet(!1),
          M(y)
        );
    },
    G = async (y) => {
      $_$();
      let T, E;
      if (!_.settings.isActiveOneClick) return O(y);
      ([T, E] = x(() =>
        S(i("coupon_express_day_one_click_disabled_warning"), {
          title: i("coupon_one_click_disabled_warning"),
          confirmButtonText: i("main_add"),
          cancelButtonText: i("main_undo"),
          showCancelButton: !0,
          onSubmit: async () => {
            $_$();
            let w, B;
            ([w, B] = x(() => _.couponSettingsSetIsActiveOneClick(!1))),
              await w,
              B(),
              ([w, B] = x(() => O(y))),
              await w,
              B();
          },
        })
      )),
        await T,
        E();
    },
    D = async () => {
      $_$();
      I.cancelAllRequests(m(e));
    },
    H = le({ name: oe.EXPRESS_OF_THE_DAY, bettingType: e }),
    {
      forceUpdateData: z,
      timerStart: V,
      timerPause: he,
    } = ce({ interval: H, onUpdateData: R, onCancelIntervalRequest: D });
  return {
    expresses: f,
    loadingStatus: C,
    fetchExpresses: z,
    addBonusMarketToCoupon: M,
    cancelRequests: D,
    sendGamesToCoupon: G,
    toggleMarketInCoupon: h,
    startPolling: V,
    stopPolling: he,
  };
};
class me extends Je {
  constructor(r, t = {}) {
    super(t);
    Y(this, "isHighlighted", !1);
    Y(this, "$dateTimeService");
    xe(r.$dateTimeService, "$dateTimeService обязательное поле"),
      (this.$dateTimeService = r.$dateTimeService),
      (this.isHighlighted = t.isHighlighted);
  }
  static immutable(r, ...t) {
    $_$();
    return Oe(new me(r, ...t));
  }
  get formattedDate() {
    if (this.startUnixDate)
      return this.$dateTimeService.getShortDateAndTimeFormatted(
        this.startUnixDate
      );
  }
  get formattedScores() {
    if (!(!ee(this.homeTeamFullScore) || !ee(this.awayTeamFullScore)))
      return `${this.homeTeamFullScore} : ${this.awayTeamFullScore}`;
  }
  get renderKey() {
    return [this.homeTeam.name, this.awayTeam.name, this.formattedDate].join(
      ":"
    );
  }
  get matchLabel() {
    return this.formattedDate ? this.formattedDate : this.formattedScores;
  }
}
function Pt(e) {
  var s, r, t, n, a, o, u, i, c, p, d, l, N, v, k, _, S, I, f, C, g;
  const b = Number.isNaN(Number(e.id)) ? -1 : Number(e.id),
    R = Number.isNaN(Number((s = e.champ) == null ? void 0 : s.id))
      ? void 0
      : Number((r = e.champ) == null ? void 0 : r.id);
  return {
    id: b,
    permanentId: e.permanentId,
    firstOpponentId: Number((t = e.homeTeam.id) != null ? t : "") || void 0,
    firstOpponentName: e.homeTeam.name,
    firstOpponentNameEng: e.homeTeam.nameEng,
    firstOpponentCountryId: e.homeTeam.countryId,
    firstOpponentLogoFileNames: e.homeTeam.logoFileNames,
    secondOpponentId: Number((n = e.awayTeam.id) != null ? n : "") || void 0,
    secondOpponentName: e.awayTeam.name,
    secondOpponentNameEng: e.awayTeam.nameEng,
    secondOpponentCountryId: e.awayTeam.countryId,
    secondOpponentLogoFileNames: e.awayTeam.logoFileNames,
    gameNameForUrl: et({
      id: b,
      permanentId: e.permanentId,
      firstOpponentName: e.homeTeam.name,
      firstOpponentNameEng: e.homeTeam.nameEng,
      secondOpponentName: e.awayTeam.name,
      secondOpponentNameEng: e.awayTeam.nameEng,
      champName: (a = e.champ) == null ? void 0 : a.name,
      champNameEng: (o = e.champ) == null ? void 0 : o.nameEng,
    }),
    champId: R,
    champLogotype: (u = e.champ) == null ? void 0 : u.logotype,
    champName: (i = e.champ) == null ? void 0 : i.name,
    champNameEng: (c = e.champ) == null ? void 0 : c.nameEng,
    champNameForUrl: R
      ? Ze({
          champId: R,
          champName: (p = e.champ) == null ? void 0 : p.name,
          champNameEng: (d = e.champ) == null ? void 0 : d.nameEng,
        })
      : void 0,
    sportId:
      Number(
        (v =
          (N = (l = e.sport) == null ? void 0 : l.id) != null
            ? N
            : e.sportId) != null
          ? v
          : ""
      ) || void 0,
    sportName: (k = e.sport) == null ? void 0 : k.name,
    sportNameEng: (_ = e.sport) == null ? void 0 : _.nameEng,
    sportNameForUrl:
      (S = e.sport) != null && S.name
        ? Qe({
            sportName: (I = e.sport) == null ? void 0 : I.name,
            sportNameEng: (f = e.sport) == null ? void 0 : f.nameEng,
          })
        : void 0,
    isCyberSport:
      (g = (C = e.sport) == null ? void 0 : C.isCyber) != null ? g : !1,
    videoId: e.videoId,
    zoneId: e.zoneId,
  };
}
export {
  wt as ExpressDayLoadingStatus,
  me as MatchViewModel,
  Pt as convertGameToCompositeGame,
  Dt as useExpressDay,
  Mt as useTopGames,
  Gt as useTopGamesPolling,
};
