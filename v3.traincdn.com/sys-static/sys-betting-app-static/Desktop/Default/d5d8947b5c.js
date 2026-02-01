import $_$ from "./$_$.js";
$_$();
import { TopEventsInfoTicker as ve } from "./1b56a6724e.js";
import {
  reactivity_esmBundler_unref as e,
  runtimeCore_esmBundler_defineComponent as K,
  reactivity_esmBundler_toRefs as _e,
  index_useT as fe,
  bettingType_BettingType as Z,
  runtimeCore_esmBundler_computed as g,
  ImagesSizeType as ge,
  iconName as Q,
  size_constants_sizeType as W,
  runtimeCore_esmBundler_resolveComponent as N,
  runtimeCore_esmBundler_resolveDirective as he,
  runtimeCore_esmBundler_createBlock as J,
  runtimeCore_esmBundler_openBlock as C,
  nuxtLink_default as ee,
  shared_esmBundler_normalizeClass as Y,
  runtimeCore_esmBundler_withCtx as $,
  runtimeCore_esmBundler_createElementVNode as f,
  runtimeCore_esmBundler_withDirectives as Ee,
  runtimeCore_esmBundler_createCommentVNode as le,
  runtimeCore_esmBundler_createVNode as E,
  runtimeCore_esmBundler_createTextVNode as V,
  shared_esmBundler_toDisplayString as D,
  runtimeCore_esmBundler_createElementBlock as U,
  runtimeDom_esmBundler_withModifiers as ye,
  useGlobalStore as te,
  equalWatch as Te,
  runtimeCore_esmBundler_onMounted as pe,
  execAsync as R,
  runtimeCore_esmBundler_nextTick as F,
  runtimeCore_esmBundler_watch as M,
  watchOnce_watchOnce as Ie,
  reactivity_esmBundler_ref as B,
  reactivity_esmBundler_toValue as x,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as we,
  BettingPageType as se,
  alignType as be,
  shared_esmBundler_normalizeStyle as de,
  runtimeCore_esmBundler_Fragment as j,
  runtimeCore_esmBundler_renderList as X,
  theme_constants_themeType as Ce,
  MEDIA_EXTENSIONS as H,
  WeightType as Be,
  reactivity_esmBundler_shallowRef as ke,
  runtimeCore_esmBundler_onBeforeUnmount as $e,
  runtimeCore_esmBundler_mergeProps as Le,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  Swiper as Se,
  Navigation as Oe,
  SwiperSlide as Ue,
} from "./8fb686e8dc.js";
import {
  useGameRouteLink as ze,
  useTooltipOptions as Ge,
  useTopEventsAnalytics as ce,
  TopEventsAddFavorActions as ie,
  _export_sfc as oe,
  TopEventsBarCallOptions as Ne,
} from "./entry-50afb6f36c.js";
import { useToggleFavoriteGame as Pe } from "./6e5c097416.js";
import { UiTeamIcons as Re } from "./5f6b076bc4.js";
import { useStartIntervalUpdate as De } from "./10dcfb9c91.js";
import { useTopEventsDashboardLoad as We } from "./d886be212e.js";
import {
  getTopEventsInfoBackground as Fe,
  useTopEventsPageLink as me,
  useTopEventsConfig as ue,
  useCheckTopEventsDates as Ve,
} from "./e7037efd24.js";
const Me = (t, n) => {
    $_$();
    var p, a, d;
    const s = e(t);
    if ((p = s.matches) != null && p.length && s.additionalInfo)
      return s.additionalInfo;
    if (e(n) && s.currentPeriodLabel) return s.currentPeriodLabel;
    const { stage: r } = (a = s.matchInfo) != null ? a : {};
    return r ? ((d = r.split(".")[1]) != null ? d : r) : "";
  },
  Ae = K({
    name: "TopEventsInfoGame",
    components: { UiTeamIcons: Re },
    props: {
      game: { type: Object, required: !0 },
      isLive: { type: Boolean, default: !1 },
      topEventPage: { type: String, required: !0 },
      showController: { type: Boolean, default: !1 },
      topEventId: { type: Number, default: 0 },
    },
    setup(t) {
      $_$();
      const { game: n, isLive: p, topEventPage: a } = _e(t),
        d = fe(),
        { trackTopEventsBarBetGameOpen: s, trackTopEventsAddFavor: r } = ce(),
        { gameRouteLink: m } = ze({ game: n, isLive: p, topEventPage: a }),
        { tooltipTheme: v } = Ge(),
        { isFavorite: u, toggleFavorite: c } = Pe({
          gameId: e(n).id,
          bettingType: e(p) ? Z.LIVE : Z.LINE,
        }),
        _ = () => {
          $_$();
          r({
            sportId: e(n).sportId,
            topEventId: t.topEventId,
            action: e(u) ? ie.REMOVE : ie.ADD,
          }),
            c();
        },
        T = g(() =>
          $_$() && e(u)
            ? d("betting_remove_favorite")
            : d("betting_add_favorite")
        ),
        I = g(() =>
          $_$() && e(p) && !e(n).isNotStarted
            ? e(n).timeFormatted
            : e(n).startTimeFormatted
        ),
        w = g(() => {
          const k = Me(n, p);
          return k && ` / ${k}`;
        });
      return {
        sizeType: W,
        iconName: Q,
        gameRouteLink: m,
        topEventsInfoGameFavoriteTooltip: T,
        displayedTime: I,
        displayedStage: w,
        onToggleFavorite: _,
        ImagesSizeType: ge,
        isFavorite: u,
        onGameClick: () => {
          $_$();
          s({ sportId: e(n).sportId, topEventId: t.topEventId });
        },
        tooltipTheme: v,
      };
    },
  }),
  qe = { class: "top-events-info-game__wrapper" },
  xe = { class: "top-events-info-game__teams" },
  He = { class: "top-events-info-game__team top-events-info-game-team" },
  je = { class: "top-events-info-game__team top-events-info-game-team" },
  Xe = ["aria-label"],
  Ze = { class: "top-events-info-game__info" };
function Je(t, n, p, a, d, s) {
  $_$();
  const r = N("UiTeamIcons"),
    m = N("UiCaption"),
    v = N("UiIco"),
    u = ee,
    c = he("tooltip");
  return (
    C(),
    J(
      u,
      {
        onClick: t.onGameClick,
        to: t.gameRouteLink,
        class: Y([
          "top-events-info-game",
          { "top-events-info-game--is-live": t.isLive },
        ]),
      },
      {
        default: $(() => {
          $_$();
          var _, T, I, w, S, k;
          return [
            f("div", qe, [
              f("ul", xe, [
                f("li", He, [
                  E(
                    r,
                    {
                      images:
                        (_ = t.game.firstOpponentLogoFileNames) != null
                          ? _
                          : [],
                      opponentsCount:
                        (I =
                          (T = t.game.firstOpponentIds) == null
                            ? void 0
                            : T.length) != null
                          ? I
                          : 0,
                      countryIco: t.game.firstOpponentCountryId,
                      boxSize: t.ImagesSizeType.S12,
                      class: "top-events-info-game-team__ico",
                    },
                    null,
                    8,
                    ["images", "opponentsCount", "countryIco", "boxSize"]
                  ),
                  E(
                    m,
                    {
                      size: t.sizeType.xs,
                      noWrap: "",
                      class: "top-events-info-game-team__caption",
                    },
                    {
                      default: $(
                        () => $_$() && [V(D(t.game.firstOpponentName), 1)]
                      ),
                      _: 1,
                    },
                    8,
                    ["size"]
                  ),
                ]),
                f("li", je, [
                  E(
                    r,
                    {
                      images:
                        (w = t.game.secondOpponentLogoFileNames) != null
                          ? w
                          : [],
                      opponentsCount:
                        (k =
                          (S = t.game.secondOpponentIds) == null
                            ? void 0
                            : S.length) != null
                          ? k
                          : 0,
                      countryIco: t.game.secondOpponentCountryId,
                      boxSize: t.ImagesSizeType.S12,
                      class: "top-events-info-game-team__ico",
                    },
                    null,
                    8,
                    ["images", "opponentsCount", "countryIco", "boxSize"]
                  ),
                  E(
                    m,
                    {
                      size: t.sizeType.xs,
                      noWrap: "",
                      class: "top-events-info-game-team__caption",
                    },
                    {
                      default: $(
                        () => $_$() && [V(D(t.game.secondOpponentName), 1)]
                      ),
                      _: 1,
                    },
                    8,
                    ["size"]
                  ),
                ]),
              ]),
              t.showController
                ? Ee(
                    (C(),
                    U(
                      "button",
                      {
                        key: 0,
                        onClick:
                          n[0] ||
                          (n[0] = ye(
                            (...G) =>
                              t.onToggleFavorite && t.onToggleFavorite(...G),
                            ["stop", "prevent"]
                          )),
                        "aria-label": t.topEventsInfoGameFavoriteTooltip,
                        type: "button",
                        class: Y([
                          {
                            "top-events-info-game-favorite--is-added":
                              t.isFavorite,
                          },
                          "top-events-info-game__favorite top-events-info-game-favorite",
                        ]),
                      },
                      [
                        E(
                          v,
                          {
                            ico: t.iconName.FAVORITE,
                            size: t.sizeType.xs,
                            class: "top-events-info-game-favorite__ico",
                          },
                          null,
                          8,
                          ["ico", "size"]
                        ),
                      ],
                      10,
                      Xe
                    )),
                    [
                      [
                        c,
                        {
                          content: t.topEventsInfoGameFavoriteTooltip,
                          classes: t.tooltipTheme,
                        },
                      ],
                    ]
                  )
                : le("", !0),
            ]),
            f("span", Ze, D(t.displayedTime) + D(t.displayedStage), 1),
          ];
        }),
        _: 1,
      },
      8,
      ["onClick", "to", "class"]
    )
  );
}
const Ke = oe(Ae, [
    ["render", Je],
    ["__scopeId", "data-v-49666e1b"],
  ]),
  re = ({
    isActive: t,
    interval: n,
    onUpdateData: p,
    onCancelIntervalRequest: a,
  }) => {
    $_$();
    const d = te(),
      s = g(() => $_$() && e(t)),
      {
        loading: r,
        forceUpdateData: m,
        timerPause: v,
        timerStart: u,
      } = De({
        interval: n,
        onUpdateData: p,
        onCancelIntervalRequest: a,
        startTimerAfterComeBack: s,
      });
    return (
      Te(
        () => [
          d.coefViewId,
          d.marketsNameType,
          d.getTimeZone,
          d.getIs12h,
          d.userId,
        ],
        () => {
          $_$();
          e(t) && m();
        }
      ),
      pe(async () => {
        $_$();
        let c, _;
        ([c, _] = R(() => $_$() && F())), await c, _(), v();
      }),
      M(t, (c) => {
        c ? u() : v();
      }),
      Ie(t, () => {
        m();
      }),
      { loading: r, forceUpdateData: m }
    );
  },
  Qe = ({ isActive: t, topEventId: n, topEventChampIds: p }) => {
    $_$();
    const a = B(!0),
      d = B({
        longMarketGroupsByGameId: {},
        champs: [],
        marketGroupsBySportId: {},
        marketsByGameId: {},
        games: [],
        hasError: !1,
      }),
      s = B({
        longMarketGroupsByGameId: {},
        champs: [],
        marketGroupsBySportId: {},
        marketsByGameId: {},
        games: [],
        hasError: !1,
      }),
      r = g(() => $_$() && e(d).games),
      m = g(() => $_$() && e(s).games),
      v = g(
        () =>
          $_$() &&
          e(r).filter(
            (l) =>
              $_$() &&
              !e(m).find(
                (o) =>
                  o.firstOpponentCountryId === l.firstOpponentCountryId &&
                  o.secondOpponentCountryId === l.secondOpponentCountryId &&
                  o.firstOpponentName === l.firstOpponentName &&
                  o.secondOpponentName === l.secondOpponentName
              )
          )
      ),
      u = g(() => $_$() && e(m).concat(e(v))),
      c = g(() => $_$() && e(m).reduce((l, b) => ((l[b.id] = b), l), {})),
      { topEventsDashboardLoad: _, cancelAllRequest: T } = We(),
      I = async () => {
        $_$();
        let l, b;
        const o =
          (([l, b] = R(
            () =>
              $_$() &&
              _({
                bettingType: Z.LINE,
                topEventId: x(n),
                topEventChampIds: x(p),
              })
          )),
          (l = await l),
          b(),
          l);
        o && (d.value = o);
      },
      w = async () => {
        $_$();
        let l, b;
        const o =
          (([l, b] = R(
            () =>
              $_$() &&
              _({
                bettingType: Z.LIVE,
                topEventId: x(n),
                topEventChampIds: x(p),
              })
          )),
          (l = await l),
          b(),
          l);
        o && (s.value = o);
      },
      { loading: S } = re({
        isActive: t,
        interval: 1e3 * 15,
        onUpdateData: I,
        onCancelIntervalRequest: T,
      }),
      { loading: k } = re({
        isActive: t,
        interval: 1e3 * 5,
        onUpdateData: w,
        onCancelIntervalRequest: T,
      }),
      G = M([S, k], (l) => {
        l[0] || l[1] || ((a.value = !1), G());
      });
    return {
      isLoading: a,
      line: d,
      live: s,
      lineGames: v,
      liveGames: m,
      allGames: u,
      liveGamesMap: c,
      lineLoading: S,
      liveLoading: k,
    };
  },
  Ye = { class: "top-events-info-events-dropdown-trigger__bg" },
  et = ["srcset"],
  tt = ["srcset", "src"],
  ot = { class: "top-events-info-events-dropdown-trigger__flag" },
  nt = ["srcset"],
  st = ["srcset", "src"],
  it = {
    class:
      "top-events-info-events-dropdown__game top-events-info-events-dropdown__game--more",
  },
  rt = K({
    __name: "TopEventsInfoEventsDropdown",
    props: { event: {} },
    setup(t) {
      $_$();
      const n = t,
        p = te(),
        a = B(),
        d = B(),
        s = B(!1),
        r = B("0px"),
        m = g(() => p.isRtl),
        v = g(() => ($_$() && e(m) ? "right" : "left")),
        { allGames: u, liveGamesMap: c } = Qe({
          topEventId: () => n.event.id,
          topEventChampIds: () => n.event.champIds,
          isActive: s,
        }),
        { changeBettingRoute: _, getBettingRouteUrl: T } = we(),
        I = Fe(n.event.sport),
        w = g(() => `top_events_info_events_flag_${n.event.id}`),
        S = g(
          () =>
            $_$() &&
            T({
              lng: p.getLanguage,
              pageType: se.TOP_EVENTS,
              pageSubType: n.event.routePageType,
            })
        ),
        k = () => {
          $_$();
          _({
            lng: p.getLanguage,
            pageType: se.TOP_EVENTS,
            pageSubType: n.event.routePageType,
          });
        },
        G = (o) => {
          s.value = o;
        },
        l = () => {
          $_$();
          var o, L;
          const P =
            (L = (o = e(d)) == null ? void 0 : o[0]) == null
              ? void 0
              : L.offsetHeight;
          if (!P) return;
          const i = P + 1,
            { top: y } = e(a).getBoundingClientRect(),
            { height: O } = document.body.getBoundingClientRect(),
            z = Math.min(Math.floor((O - y) / i) - 1, e(u).length);
          r.value = z * i - 1 + "px";
        },
        b = async () => {
          $_$();
          let o, L;
          ([o, L] = R(() => $_$() && F())), await o, L(), l();
        };
      return (
        M(s, (o) => {
          o && b();
        }),
        M(u, () => {
          $_$();
          e(s) && b();
        }),
        (o, L) => {
          $_$();
          const P = N("UiCaption"),
            i = ee,
            y = N("UiScrollbar"),
            O = N("UiButton"),
            z = N("UiDropdown");
          return (
            C(),
            J(
              z,
              {
                onOpen: L[0] || (L[0] = (h) => G(!0)),
                onClose: L[1] || (L[1] = (h) => G(!1)),
                align: e(be).START,
                direction: e(v),
                overlay: "",
                hoverable: "",
                rounded: "",
                class: "top-events-info-events-dropdown",
              },
              {
                customTrigger: $(
                  () =>
                    $_$() && [
                      E(
                        i,
                        {
                          class:
                            "top-events-info-events-dropdown__trigger top-events-info-events-dropdown-trigger",
                          to: e(S),
                        },
                        {
                          default: $(
                            () =>
                              $_$() && [
                                f("picture", Ye, [
                                  f(
                                    "source",
                                    {
                                      srcset: `${o.$mediaUrl(
                                        `${e(I)}`,
                                        e(H).WEBP
                                      )} 1x, ${o.$mediaUrl(
                                        `${e(I)}_2x`,
                                        e(H).WEBP
                                      )} 2x`,
                                      type: "image/webp",
                                    },
                                    null,
                                    8,
                                    et
                                  ),
                                  f(
                                    "img",
                                    {
                                      srcset: `${o.$mediaUrl(
                                        `${e(I)}`
                                      )} 1x, ${o.$mediaUrl(`${e(I)}_2x`)} 2x`,
                                      src: o.$mediaUrl(`${e(I)}`),
                                      width: "186",
                                      height: "56",
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    tt
                                  ),
                                ]),
                                f("picture", ot, [
                                  f(
                                    "source",
                                    {
                                      srcset: `${o.$mediaUrl(
                                        e(w),
                                        e(H).WEBP
                                      )} 1x, ${o.$mediaUrl(
                                        `${e(w)}_2x`,
                                        e(H).WEBP
                                      )} 2x`,
                                      type: "image/webp",
                                    },
                                    null,
                                    8,
                                    nt
                                  ),
                                  f(
                                    "img",
                                    {
                                      srcset: `${o.$mediaUrl(
                                        e(w)
                                      )} 1x, ${o.$mediaUrl(`${e(w)}_2x`)} 2x`,
                                      src: o.$mediaUrl(e(w)),
                                      width: "100",
                                      height: "56",
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    st
                                  ),
                                ]),
                                E(
                                  P,
                                  {
                                    noWrap: "",
                                    weight: e(Be).BOLD,
                                    size: e(W).m,
                                    class:
                                      "top-events-info-events-dropdown-trigger__caption",
                                  },
                                  {
                                    default: $(
                                      () => $_$() && [V(D(o.event.title), 1)]
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ["weight", "size"]
                                ),
                              ]
                          ),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ),
                    ]
                ),
                default: $(
                  () =>
                    $_$() && [
                      f(
                        "div",
                        {
                          ref_key: "ulElement",
                          ref: a,
                          class: "top-events-info-events-dropdown__games",
                        },
                        [
                          E(
                            y,
                            {
                              style: de({ height: e(r) }),
                              class:
                                "top-events-info-events-dropdown__scrollbar",
                            },
                            {
                              default: $(
                                () =>
                                  $_$() && [
                                    (C(!0),
                                    U(
                                      j,
                                      null,
                                      X(
                                        e(u),
                                        (h) =>
                                          $_$() &&
                                          (C(),
                                          U(
                                            "div",
                                            {
                                              ref_for: !0,
                                              ref_key: "liElements",
                                              ref: d,
                                              key: h.id,
                                              class:
                                                "top-events-info-events-dropdown__game",
                                            },
                                            [
                                              E(
                                                Ke,
                                                {
                                                  game: h,
                                                  isLive: !!e(c)[h.id],
                                                  topEventPage:
                                                    o.event.routePageType,
                                                  topEventId: o.event.id,
                                                  showController: "",
                                                },
                                                null,
                                                8,
                                                [
                                                  "game",
                                                  "isLive",
                                                  "topEventPage",
                                                  "topEventId",
                                                ]
                                              ),
                                            ]
                                          ))
                                      ),
                                      128
                                    )),
                                  ]
                              ),
                              _: 1,
                            },
                            8,
                            ["style"]
                          ),
                          f("div", it, [
                            E(
                              O,
                              {
                                onClick: k,
                                uppercase: !1,
                                size: e(W).s,
                                theme: e(Ce).gray,
                                href: e(S),
                                block: "",
                              },
                              {
                                default: $(
                                  () =>
                                    $_$() && [
                                      E(
                                        P,
                                        { size: e(W).xs },
                                        {
                                          default: $(
                                            () =>
                                              $_$() && [
                                                V(
                                                  D(o.$T("betting_all_events")),
                                                  1
                                                ),
                                              ]
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
                              ["size", "theme", "href"]
                            ),
                          ]),
                        ],
                        512
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["align", "direction"]
            )
          );
        }
      );
    },
  }),
  ae = oe(rt, [["__scopeId", "data-v-93d19da1"]]),
  at = { class: "top-events-info-events" },
  lt = { class: "top-events-info-events__container" },
  pt = {
    key: 0,
    class: "top-events-info-events__control top-events-info-events-control",
  },
  dt = ["aria-label"],
  ct = ["aria-label"],
  mt = K({
    __name: "TopEventsInfoEvents",
    setup(t) {
      $_$();
      const n = te(),
        p = me(),
        { topEventsConfig: a } = ue(),
        { trackTopEventsBarCall: d } = ce(),
        s = ke(),
        r = B(),
        m = B([]),
        v = B(),
        u = B(0),
        c = B(!1),
        _ = B(!0),
        T = B(!1),
        I = g(() => n.isRtl),
        w = g(() => $_$() && e(a).concat(e(a))),
        S = {
          modules: [Oe],
          spaceBetween: 3,
          a11y: { enabled: !1 },
          loop: !0,
          navigation: {
            nextEl: ".top-events-info-events-control__arrow--next",
            prevEl: ".top-events-info-events-control__arrow--prev",
          },
          breakpoints: {
            1680: { slidesPerView: e(a).length > 3 ? 3.1 : 2.1 },
            1200: { slidesPerView: e(a).length > 2 ? 2.1 : 1.1 },
            1024: { slidesPerView: e(a).length > 1 ? 1.1 : 1 },
          },
        },
        k = (i) => {
          (_.value = !i.isEnd), (T.value = !i.isBeginning);
        },
        G = () => {
          _.value = !1;
        },
        l = () => {
          T.value = !1;
        },
        b = () => {
          $_$();
          const i = e(m)[0],
            y = i.offsetLeft + i.offsetWidth;
          e(r).offsetWidth !== y && (u.value = y);
        },
        o = () => {
          $_$();
          const i = e(m)[0];
          e(r).offsetLeft !== i.offsetLeft &&
            (u.value = e(r).offsetLeft - i.offsetLeft + e(r).offsetWidth);
        },
        L = () => {
          $_$();
          var i;
          e(c)
            ? (c.value =
                ((i = e(v)) == null ? void 0 : i.$el.offsetWidth) < e(u))
            : (e(I) ? b() : o(), (c.value = e(u) > e(r).offsetWidth));
        },
        P = () => {
          $_$();
          d({ option: Ne.LOGO, topEventId: e(a)[0].id });
        };
      return (
        pe(async () => {
          $_$();
          let i, y;
          ([i, y] = R(() => $_$() && F())), await i, y();
          const O = new ResizeObserver(L);
          (s.value = O), O.observe(e(r));
        }),
        $e(() => {
          $_$();
          var i;
          e(c)
            ? e(s).unobserve((i = e(v)) == null ? void 0 : i.$el)
            : e(s).unobserve(e(r));
        }),
        M(
          c,
          async () => {
            $_$();
            var i, y, O, z, h, ne;
            let A, q;
            e(c)
              ? ((i = e(s)) == null || i.unobserve(e(r)),
                ([A, q] = R(() => $_$() && F())),
                await A,
                q(),
                (O = e(s)) == null ||
                  O.observe((y = e(v)) == null ? void 0 : y.$el))
              : ((_.value = !0),
                (T.value = !1),
                (h = e(s)) == null ||
                  h.unobserve((z = e(v)) == null ? void 0 : z.$el),
                ([A, q] = R(() => $_$() && F())),
                await A,
                q(),
                (ne = e(s)) == null || ne.observe(e(r)));
          },
          { immediate: !0 }
        ),
        (i, y) => {
          $_$();
          const O = ee,
            z = N("UiIco");
          return (
            C(),
            U("div", at, [
              (C(),
              U(
                j,
                null,
                X(
                  4,
                  (h) =>
                    $_$() &&
                    f("span", {
                      key: h,
                      class: "top-events-info-events__shadow",
                    })
                ),
                64
              )),
              f("div", lt, [
                E(
                  O,
                  {
                    onClick: P,
                    class: "top-events-info-events__link",
                    to: e(p),
                  },
                  {
                    default: $(
                      () => ($_$() && y[0]) || (y[0] = [V(" TOP-EVENTS ")])
                    ),
                    _: 1,
                  },
                  8,
                  ["to"]
                ),
                e(c)
                  ? (C(),
                    U("div", pt, [
                      f(
                        "button",
                        {
                          class:
                            "top-events-info-events-control__arrow top-events-info-events-control__arrow--prev",
                          "aria-label": i.$T("main_slider_prev"),
                          type: "button",
                        },
                        [
                          E(
                            z,
                            {
                              square: "",
                              size: e(W).xxxs,
                              ico: e(Q).ANGLE_LEFT,
                            },
                            null,
                            8,
                            ["size", "ico"]
                          ),
                        ],
                        8,
                        dt
                      ),
                      f(
                        "button",
                        {
                          class:
                            "top-events-info-events-control__arrow top-events-info-events-control__arrow--next",
                          "aria-label": i.$T("main_slider_next"),
                          type: "button",
                        },
                        [
                          E(
                            z,
                            {
                              square: "",
                              size: e(W).xxxs,
                              ico: e(Q).ANGLE_RIGHT,
                            },
                            null,
                            8,
                            ["size", "ico"]
                          ),
                        ],
                        8,
                        ct
                      ),
                    ]))
                  : le("", !0),
              ]),
              e(c)
                ? (C(),
                  J(
                    e(Se),
                    Le(
                      {
                        key: 0,
                        ref_key: "swiper",
                        ref: v,
                        onSlideChangeTransitionStart: k,
                        onReachEnd: G,
                        onReachBeginning: l,
                      },
                      S,
                      {
                        class: [
                          "top-events-info-events__slider top-events-info-events-slider",
                          {
                            "top-events-info-events-slider--left-shadow": e(T),
                            "top-events-info-events-slider--right-shadow": e(_),
                          },
                        ],
                      }
                    ),
                    {
                      default: $(
                        () =>
                          $_$() && [
                            (C(!0),
                            U(
                              j,
                              null,
                              X(
                                e(w),
                                (h) =>
                                  $_$() &&
                                  (C(),
                                  J(
                                    e(Ue),
                                    {
                                      key: h.id,
                                      class:
                                        "top-events-info-events-slider__slide",
                                    },
                                    {
                                      default: $(
                                        () =>
                                          $_$() && [
                                            E(
                                              ae,
                                              {
                                                event: h,
                                                class:
                                                  "top-events-info-events__dropdown",
                                              },
                                              null,
                                              8,
                                              ["event"]
                                            ),
                                          ]
                                      ),
                                      _: 2,
                                    },
                                    1024
                                  ))
                              ),
                              128
                            )),
                          ]
                      ),
                      _: 1,
                    },
                    16,
                    ["class"]
                  ))
                : (C(),
                  U(
                    "ul",
                    {
                      key: 1,
                      ref_key: "container",
                      ref: r,
                      class: Y([
                        "top-events-info-events__list top-events-info-events-list",
                        `top-events-info-events-list--items-${e(a).length}`,
                      ]),
                      style: de([
                        {
                          "--top-events-info-events-list-items": `${
                            e(a).length
                          }`,
                        },
                      ]),
                    },
                    [
                      (C(!0),
                      U(
                        j,
                        null,
                        X(
                          e(a),
                          (h) =>
                            $_$() &&
                            (C(),
                            U(
                              "li",
                              {
                                key: h.id,
                                ref_for: !0,
                                ref_key: "elements",
                                ref: m,
                                class: "top-events-info-events-list__item",
                              },
                              [
                                E(
                                  ae,
                                  {
                                    event: h,
                                    class: "top-events-info-events__dropdown",
                                  },
                                  null,
                                  8,
                                  ["event"]
                                ),
                              ]
                            ))
                        ),
                        128
                      )),
                    ],
                    6
                  )),
            ])
          );
        }
      );
    },
  }),
  ut = oe(mt, [["__scopeId", "data-v-8edb6740"]]),
  wt = K({
    name: "TopEventsPromo",
    components: { TopEventsInfoTicker: ve, TopEventsInfoEvents: ut },
    setup() {
      $_$();
      const t = me(),
        { topEventsConfig: n } = ue();
      Ve();
      const p = g(() => $_$() && e(n)[0]),
        a = g(() => $_$() && e(n).length > 1);
      return { topEventsPageLink: t, topEvent: p, hasSelector: a };
    },
  });
export { wt as _sfc_main };
