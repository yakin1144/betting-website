import $_$ from "./$_$.js";
$_$();
import {
  liveAsiaGetLeaguesZipApi as N,
  lineAsiaGetLeaguesZipApi as C,
  liveAsiaGetSportsZipApi as A,
  lineAsiaGetSportsZipApi as _,
  liveGetChampZipApi as h,
  lineGetChampZipApi as L,
  lineBetsOnYourGetChampZipApi as f,
  liveBetsOnYourGetChampZipApi as B,
  liveGetChampsZipApi as I,
  lineGetChampsZipApi as g,
  lineBetsOnYourGetChampsZipApi as V,
  liveBetsOnYourGetChampsZipApi as R,
  liveGetSportsShortZipApi as c,
  lineGetSportsShortZipApi as a,
  lineBetsOnYourGetSportsShortZipApi as O,
  liveBetsOnYourGetSportsShortZipApi as M,
  FEEDS_CONFIG as i,
  RequestManager as G,
} from "./entry-50afb6f36c.js";
import {
  BettingPageType as T,
  bettingType_BettingType as o,
  index_useHttpModule as Y,
  index_useClientHeaders as H,
  index_useCookies as Z,
  index_useDateTimeService as U,
  index_useT as $,
  index_useLogger as x,
  index_getConfigs as q,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { BETTING_STORE_TYPE_MAP as t } from "./7fd3152d11.js";
import { DASHBOARD_TYPE_MAP as n } from "./58a21526ee.js";
import {
  SportMenuParser as b,
  parseChamp as F,
  parseChamps as w,
  parseSports as d,
} from "./ff2996a70d.js";
const m = (r, e) =>
  c(i)(r, {
    ...e,
    params: { ...(e == null ? void 0 : e.params), filterMs: 8 },
  });
m.kind = void 0;
const D = {
    "sports-live": {
      [t.HOME_LIVE]: c(i),
      [t.HOME_LINE]: a(i),
      [t.BETSONYOUR_LIVE]: M(i),
      [t.BETSONYOUR_LINE]: O(i),
      [t.MARBLE_LIVE]: m,
      [t.TEAM_LINE]: a(i),
      [o.LINE]: a(i),
      [o.LIVE]: c(i),
    },
    "sports-line": {
      [t.HOME_LIVE]: c(i),
      [t.HOME_LINE]: a(i),
      [t.BETSONYOUR_LIVE]: M(i),
      [t.BETSONYOUR_LINE]: O(i),
      [t.MARBLE_LIVE]: m,
      [t.TEAM_LINE]: a(i),
      [o.LINE]: a(i),
      [o.LIVE]: c(i),
    },
    champs: {
      [t.HOME_LIVE]: I(i),
      [t.HOME_LINE]: g(i),
      [t.BETSONYOUR_LIVE]: R(i),
      [t.BETSONYOUR_LINE]: V(i),
      [t.MARBLE_LIVE]: I(i),
      [t.TEAM_LINE]: g(i),
      [o.LINE]: g(i),
      [o.LIVE]: I(i),
    },
    champ: {
      [t.HOME_LIVE]: h,
      [t.HOME_LINE]: L,
      [t.BETSONYOUR_LIVE]: B(i),
      [t.BETSONYOUR_LINE]: f(i),
      [t.MARBLE_LIVE]: h,
      [t.TEAM_LINE]: L,
      [o.LINE]: L,
      [o.LIVE]: h,
    },
    asiaSports: {
      [n.ASIAN_HOME_LINE]: _(i),
      [n.ASIAN_HOME_LIVE]: A(i),
      [n.ASIAN_TEAM_LINE]: _(i),
      [n.ASIAN_BETSONYOUR_LINE]: _(i),
      [n.ASIAN_BETSONYOUR_LIVE]: A(i),
      [n.ASIAN_MARBLE_LIVE]: A(i),
    },
    asiaChamps: {
      [n.ASIAN_HOME_LINE]: C,
      [n.ASIAN_HOME_LIVE]: N,
      [n.ASIAN_MARBLE_LIVE]: N,
    },
  },
  y = [T.MARBLE, T.BETSONYOUR, o.LIVE, o.LINE],
  P = ["asiaSports"],
  j = (r, e) => {
    const s = D[r];
    if (P.includes(r)) return s[e];
    const [p, E] = e.split("/");
    return y.includes(p) ? s[e] : s[E];
  },
  k = (r) => b.parseAsiaLineSportsResponse(r);
var z = Object.defineProperty,
  J = (r, e, s) =>
    e in r
      ? z(r, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (r[e] = s),
  l = (r, e, s) => J(r, typeof e != "symbol" ? e + "" : e, s);
class K {
  constructor(e) {
    l(this, "dateTimeService"),
      l(this, "translationService"),
      l(this, "logger"),
      l(this, "siteConfig"),
      l(this, "requestManager"),
      (this.dateTimeService = e.$dateTimeService),
      (this.translationService = e.$T),
      (this.logger = e.$logger),
      (this.siteConfig = e.$siteConfig),
      (this.requestManager = new G(e));
  }
  async load(e, s, p, E) {
    const S = { method: j(e, s), parser: (u) => this.parseResponse(e, u) };
    return this.requestManager.load({
      type: [e, s].join(":"),
      api: S,
      params: p,
      abortController: E,
    });
  }
  cancelAllRequest(e) {
    this.requestManager.cancelAllRequest(e);
  }
  async parseResponse(e, s) {
    switch (e) {
      case "sports-live":
        return d({
          unparsedSports: s.Value,
          dateTimeService: this.dateTimeService,
          translationService: this.translationService,
          logger: this.logger,
          siteConfig: this.siteConfig,
        });
      case "sports-line":
        return d({
          unparsedSports: s.Value,
          dateTimeService: this.dateTimeService,
          translationService: this.translationService,
          logger: this.logger,
          siteConfig: this.siteConfig,
        });
      case "champs":
        return w({
          champs: s.Value,
          menuSectionFeed: s.params.menuSection,
          siteConfig: this.siteConfig,
        });
      case "champ":
        return F({
          unparsedChamp: s.Value,
          menuSectionFeed: s.params.menuSection,
          dateTimeService: this.dateTimeService,
          translationService: this.translationService,
          logger: this.logger,
          siteConfig: this.siteConfig,
        });
      case "asiaSports":
        return k(s.Value.Sports);
      default:
        return s.Value;
    }
  }
}
const se = () => {
  $_$();
  const r = Y(),
    e = H(),
    s = Z(),
    p = U(),
    E = $(),
    S = x(),
    [{ id: u }, v = {}] = q(-1004, 515);
  return {
    sportsMenuApi: new K({
      $httpModule: r,
      $clientHeaders: e,
      $cookies: s,
      $dateTimeService: p,
      $T: E,
      $logger: S,
      $siteConfig: { lng: u, navigationTopChamp: v },
    }),
  };
};
export { se as useSportsMenuApi };
