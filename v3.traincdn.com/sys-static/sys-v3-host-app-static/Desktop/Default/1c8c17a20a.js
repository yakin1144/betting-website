import $_$ from "./$_$.js";
$_$();
import {
  isDef as k,
  createSharedComposable_createSharedComposable_2 as u,
  useGlobalStore as v,
  router_useRoute as T,
  index_useHttpModule as x,
  index_useLogger as H,
  index_getConfigs as z,
  runtimeCore_esmBundler_computed as f,
  reactivity_esmBundler_unref as h,
  MODAL_ID as D,
  execAsync as o,
  normalizeSlashes as F,
  router_useRouter as W,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { buildLinkFromRoute as b } from "./entry-85993dc44c.js";
import { parse as e } from "../../../shared-assets/__shared_accept_language_parser_LEQ4UAP5.js";
const Z = (t, c) =>
  t.map((r) => {
    const s = c[r.id] || `lang_${r.id}`;
    return Object.freeze({
      code: r.id,
      picture: s,
      title: r.title,
      countryCode: r.code,
    });
  });
var O = ((t) => (
  (t.AA = "aa"),
  (t.AE = "ae"),
  (t.AF = "af"),
  (t.AL = "al"),
  (t.AM = "am"),
  (t.AR = "ar"),
  (t.AU = "au"),
  (t.AZ = "az"),
  (t.BE = "be"),
  (t.BG = "bg"),
  (t.BN = "bn"),
  (t.BR = "br"),
  (t.BS = "bs"),
  (t.BY = "by"),
  (t.CA = "ca"),
  (t.CN = "cn"),
  (t.CS = "cs"),
  (t.CY = "cy"),
  (t.DA = "da"),
  (t.DE = "de"),
  (t.DV = "dv"),
  (t.EL = "el"),
  (t.EN = "en"),
  (t.EO = "eo"),
  (t.ES = "es"),
  (t.ET = "et"),
  (t.EU = "eu"),
  (t.FA = "fa"),
  (t.FI = "fi"),
  (t.FO = "fo"),
  (t.FR = "fr"),
  (t.GL = "gl"),
  (t.GU = "gu"),
  (t.HE = "he"),
  (t.HI = "hi"),
  (t.HK = "hk"),
  (t.HR = "hr"),
  (t.HT = "ht"),
  (t.HU = "hu"),
  (t.HY = "hy"),
  (t.ID = "id"),
  (t.IN = "in"),
  (t.IQ = "iq"),
  (t.IS = "is"),
  (t.IT = "it"),
  (t.JA = "ja"),
  (t.KA = "ka"),
  (t.KM = "km"),
  (t.KO = "ko"),
  (t.KU = "ku"),
  (t.KY = "ky"),
  (t.KZ = "kz"),
  (t.LN = "ln"),
  (t.LO = "lo"),
  (t.LT = "lt"),
  (t.LV = "lv"),
  (t.MI = "mi"),
  (t.MK = "mk"),
  (t.MN = "mn"),
  (t.MS = "ms"),
  (t.MT = "mt"),
  (t.MX = "mx"),
  (t.MY = "my"),
  (t.NB = "nb"),
  (t.NE = "ne"),
  (t.NL = "nl"),
  (t.NN = "nn"),
  (t.NS = "ns"),
  (t.NZ = "nz"),
  (t.PA = "pa"),
  (t.PE = "pe"),
  (t.PL = "pl"),
  (t.PS = "ps"),
  (t.PT = "pt"),
  (t.QU = "qu"),
  (t.RO = "ro"),
  (t.RU = "ru"),
  (t.SA = "sa"),
  (t.SD = "sd"),
  (t.SE = "se"),
  (t.SI = "si"),
  (t.SK = "sk"),
  (t.SL = "sl"),
  (t.SO = "so"),
  (t.SP = "sp"),
  (t.SR = "sr"),
  (t.SV = "sv"),
  (t.SW = "sw"),
  (t.TA = "ta"),
  (t.TE = "te"),
  (t.TH = "th"),
  (t.TJ = "tj"),
  (t.TL = "tl"),
  (t.TN = "tn"),
  (t.TR = "tr"),
  (t.TT = "tt"),
  (t.TW = "tw"),
  (t.UA = "ua"),
  (t.UK = "uk"),
  (t.UR = "ur"),
  (t.US = "us"),
  (t.UZ = "uz"),
  (t.VI = "vi"),
  (t.XH = "xh"),
  (t.ZU = "zu"),
  (t.UNKNOWN = "--"),
  t
))(O || {});
const G = (t, c, r) => {
    const s = (i) => i.id === O.UNKNOWN,
      l = (i) => (r ? !1 : c.includes(i.id));
    return t.filter((i) => !s(i) && !l(i));
  },
  Q = (t, c) => {
    const r = {};
    return (
      c.forEach((s, l) => {
        r[s] = l;
      }),
      t.slice().sort((s, l) => {
        $_$();
        const i = r[s.id],
          m = r[l.id];
        return !k(i) && !k(m) ? 0 : k(i) ? (k(m) ? i - m : -1) : 1;
      })
    );
  },
  Y = (t, c) =>
    t.reduce((r, s) => (s.id === c ? r.unshift(s) : r.push(s), r), []),
  j = () => {
    $_$();
    var t;
    const c = e((t = navigator.languages.join(";")) != null ? t : "");
    return [...new Set(c.map(({ code: r }) => r).filter(Boolean))];
  },
  q = u(() => {
    $_$();
    const t = v(),
      c = T(),
      r = x(),
      s = H(),
      [l = [], i = {}, m = [], A, U = []] = z(463, 590, 625, 462, -1009),
      _ = j()[0],
      N = Q(U, m),
      w = A ? Y(N, _) : N,
      y = f(() => t.isUserAuth),
      E = f(() => {
        $_$();
        const n = G(w, l, h(y));
        return Z(n, i);
      }),
      I = f(() => t.getLanguage),
      M = f(() => $_$() && h(E).find(({ code: n }) => $_$() && n === h(I))),
      B = f(() => $_$() && h(M).countryCode),
      P = async () => {
        $_$();
        let n, p;
        try {
          ([n, p] = o(() =>
            r("/web-api/api/internal/v1/language/set_user_language", {
              method: "put",
            }).execute()
          )),
            await n,
            p();
        } catch (S) {
          s.error("trackSetUserLanguage error", S);
        }
      };
    return {
      languages: E,
      currentLanguageCode: I,
      currentLanguageCountryCode: B,
      currentLanguage: M,
      setLanguage: async (n) => {
        $_$();
        let p, S;
        const { [D]: J, ...K } = h(c).query,
          R = b(c, K, !0).replace(/[a-z]{2}/, n.code);
        ([p, S] = o(() => t.installLng({ lng: n.code }))),
          await p,
          S(),
          h(y) && (([p, S] = o(() => P())), await p, S()),
          (window.location.href = F(R));
      },
    };
  }),
  C = () => {
    $_$();
    const t = W(),
      c = T();
    return {
      addQueryParam: async (s) => {
        $_$();
        let l, i;
        ([l, i] = o(() => t.push(b(c, s)))), await l, i();
      },
    };
  },
  g = { DESKTOP: 18, MOBILE: 38 },
  V = () => {
    const { currentLanguageCode: t } = q();
    return { getLinkWithoutLang: (r) => $_$() && r.replace(`/${h(t)}`, "") };
  },
  tt = () => {
    const { getLinkWithoutLang: t } = V(),
      c = (s) => s.substring(s.lastIndexOf("/") + 1);
    return {
      trackMenuItemClick: ({
        trackMenuItemClick: s,
        itemId: l,
        parentItemId: i,
        itemLink: m = "",
        itemIdsWithLink: A,
        itemIdsWithId: U,
      }) => {
        let _ = "";
        A.includes(l) ? (_ = t(m)) : U.includes(l) && (_ = c(m)),
          s(_ ? `${l}_${_}` : l, i);
      },
    };
  };
export {
  g as MENU_IMG_SIZE,
  C as useAddRouteQueryParam,
  q as useLanguagesStore,
  tt as useTrackMenuItemClick,
};
