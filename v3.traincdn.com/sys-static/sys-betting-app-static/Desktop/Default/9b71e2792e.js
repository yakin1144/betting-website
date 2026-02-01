import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_computed as n,
  reactivity_esmBundler_unref as t,
  createSharedComposable_createSharedComposable_2 as j,
  bettingType_BettingType as I,
  useGlobalStore as J,
  useTimeSettings_useTimeSettings as K,
  index_useT as W,
  index_getConfig as Q,
  UiModal_F_vue_default as X,
  equalComputed_equalComputed as Y,
  iconName as b,
  router_useRoute as tt,
  reactivity_esmBundler_ref as et,
  runtimeCore_esmBundler_watch as it,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  useCommonAnalytics as at,
  useGameStore as ot,
  useStatisticModule as nt,
  createStatisticModal as st,
} from "./entry-50afb6f36c.js";
const ct = [85, 89, 144],
  rt = ({ game: i }) => {
    $_$();
    const _ = n(() => {
        $_$();
        var r;
        return (r = t(i)) == null ? void 0 : r.sportId;
      }),
      c = n(() => {
        $_$();
        var r, d;
        return (d = (r = t(i)) == null ? void 0 : r.cyberGameScores) == null
          ? void 0
          : d.tournamentId;
      }),
      l = n(() => {
        $_$();
        var r, d;
        return (d = (r = t(i)) == null ? void 0 : r.cyberGameScores) == null
          ? void 0
          : d.iterationId;
      });
    return {
      isCyberTournamentGridVisible: n(() => {
        $_$();
        const r = t(_);
        return r ? ct.includes(r) && t(c) && t(l) : !1;
      }),
      sportId: _,
      tournamentId: c,
      iterationId: l,
    };
  },
  z = j(() => {
    const { sendGTagEvent: i, sendGoogleAndFatmanEvent: _ } = at({
        analyticsCategory: "v3_Дашборд",
      }),
      c = (e) =>
        e ? "v3_Live_Событие_Уведомления" : "v3_Линия_Событие_Уведомления",
      l = (e) =>
        e
          ? "v3_Live_Событие_Клик на Статистику"
          : "v3_Линия_Событие_Клик на Статистику",
      S = (e) => ($_$() && e === I.LIVE ? "Live" : "Линия");
    return {
      trackMarketTypeSelect: (e, a) => {
        i(
          e
            ? "v3_Live_Событие_Клик на маркет"
            : "v3_Линия_Событие_Клик на маркет",
          String(a)
        );
      },
      trackAdditionalEventSelect: (e, a) => {
        i(
          e
            ? "v3_Live Клик “Дополнительное событие”"
            : "v3_Линия Клик “Дополнительное событие”",
          String(a)
        );
      },
      trackMarketClickFromGrid: (e, a) => {
        i(
          e
            ? "v3_Live_Событие_Клик на исход"
            : "v3_Линия_Событие_Клик на исход",
          String(a)
        );
      },
      trackSaveMarketsSettingsClick: (e, a) => {
        i(
          e
            ? "v3_Live_Событие_Сохранить количество столбцов"
            : "v3_Линия_Событие_Сохранить количество столбцов",
          { 1: "Один", 2: "Два", 3: "Три" }[a]
        );
      },
      trackSaveNotificationsSettingsClick: (e) => {
        const a = c(e);
        i(a, "Сохранить");
      },
      trackClearNotificationsSettingsClick: (e) => {
        const a = c(e);
        i(a, "Очистить");
      },
      trackEventGroupNotificationChange: (e, a, s) => {
        const u = c(e);
        switch (a.id) {
          case 0:
            i(
              u,
              s
                ? "Вкл Моментальные уведомления"
                : "Выкл Моментальные уведомления"
            );
            break;
          case 2:
            i(u, s ? "Вкл Информация по игре" : "Выкл Информация по игре");
            break;
        }
      },
      trackEventNotificationChange: (e, a, s) => {
        const u = c(e);
        switch (a.parentEventId) {
          case 0:
            a.id === 0 &&
              i(
                u,
                s
                  ? "Вкл Счет_моментальные уведомления"
                  : "Выкл Счет_моментальные уведомления"
              );
            break;
          case 2:
            a.id === 0 &&
              i(
                u,
                s
                  ? "Вкл Счет_информация по игре"
                  : "Выкл Счет_информация по игре"
              ),
              a.id === 1 &&
                i(
                  u,
                  s
                    ? "Вкл Желтые карточки_информация по игре"
                    : "Выкл Желтые карточки_информация по игре"
                ),
              a.id === 2 &&
                i(
                  u,
                  s
                    ? "Вкл Угловые_информация по игре"
                    : "Выкл Угловые_информация по игре"
                );
            break;
        }
      },
      trackMarketsFiltering: (e) => {
        i(
          e ? "v3_Live_Событие_Искать" : "v3_Линия_Событие_Искать",
          "По маркету"
        );
      },
      trackDropdownStandingsToggle: (e, a) => {
        i(
          e
            ? "v3_Live_Событие_Турнирная таблица"
            : "v3_Линия_Событие_Турнирная таблица",
          a ? "Открыть" : "Закрыть"
        );
      },
      trackMarketGroupsCollapsedStateToggle: (e, a) => {
        i(
          e
            ? "v3_Live_Событие_Свернуть/развернуть"
            : "v3_Линия_Событие_Свернуть/развернуть",
          a ? "Развернуть" : "Свернуть"
        );
      },
      trackClickMatchTabFilterItem: (e, a) => {
        if (a !== 0) return;
        i(
          e ? "v3_Live_Событие_Клик на Матчи" : "v3_Линия_Событие_Клик на Матчи"
        );
      },
      trackTimelineClick: (e) => {
        i("v3_Live_Событие_Таймлайн", e ? "Открыть" : "Закрыть");
      },
      trackStartingLineupsLabelClick: (e) => {
        i("v3_Live_Событие_Стартовые составы", e ? "Развернуть" : "Свернуть");
      },
      trackGameStatsTabClick: (e) => {
        i(
          "v3_Live_Событие_Клик на Таблица/Шкала",
          e ? "Клик на Таблица" : "Клик на Шкала"
        );
      },
      trackZoneIconClick: () => {
        i("v3_Live_Событие_Клик на Zone");
      },
      trackFullscreenVideoIconClick: () => {
        i("v3_Live_Событие_Клик на Полноэкранный режим");
      },
      trackVideoIconClick: () => {
        i("v3_Live_Событие_Клик на Трансляцию");
      },
      trackShowOddsMovementChart: ({ isLive: e }) => {
        const a = l(e);
        i(a, "График движения коэффициентов");
      },
      trackShowStatistics: ({ isLive: e }) => {
        const a = l(e);
        i(a, "Статистика");
      },
      trackShowTournamentTable: ({ isLive: e }) => {
        const a = l(e);
        i(a, "Турнирная таблица");
      },
      trackShowRatingButtonClick: ({ isLive: e }) => {
        const a = l(e);
        i(a, "Рейтинг");
      },
      trackSubgameSelect: (e, a) => {
        i(`v3_${S(a)}_Событие_выбор дополнительного события`, String(e));
      },
      trackAddGameToFavorites: ({ sportId: e, isAdded: a }) => {
        const s = a ? "add_favor" : "remove";
        _(
          { google: "bet_add_favor", fatman: 1081 },
          { google: { action: s, sport_id: e }, fatman: { s1: s, i1: e } }
        );
      },
    };
  }),
  dt = ({ game: i, bettingType: _ }) => {
    $_$();
    const c = ot(),
      l = J(),
      {
        trackShowStatistics: S,
        trackShowTournamentTable: r,
        trackShowOddsMovementChart: d,
        trackShowRatingButtonClick: N,
      } = z(),
      m = nt(),
      { timezone: G, is12h: y } = K(),
      L = n(() => l.getLanguage),
      w = n(() => l.isRtl),
      p = W(),
      h = Q(332),
      M = n(() => l.isDisplayStatsInNewWindowEnabled),
      g = n(() => $_$() && t(_) === I.LIVE),
      V = n(() => $_$() && t(_) === I.LINE),
      B = n(() => {
        $_$();
        var o, U;
        return (
          ((U = (o = t(i)) == null ? void 0 : o.marketGroups) == null
            ? void 0
            : U[1]) !== void 0
        );
      }),
      E = n(() => {
        var o;
        return (o = c.marketGroups) != null ? o : [];
      }),
      R = n(() => $_$() && !!t(E).find((o) => o.foreignId === 1)),
      F = n(() => ($_$() && t(B)) || t(R)),
      v = n(
        () =>
          $_$() && {
            shouldOpenInNewTab: t(M),
            lng: t(L),
            isRtl: t(w),
            timeZone: t(G),
            is12h: t(y),
            componentModal: X,
            createStatisticModal: st,
          }
      ),
      f = n(() => {
        $_$();
        var o;
        return !!((o = t(i)) != null && o.statisticStatus);
      }),
      k = n(() => ($_$() && t(i).sportId) || 0),
      {
        isCyberTournamentGridVisible: C,
        tournamentId: A,
        iterationId: P,
      } = rt({ game: i }),
      T = () => {
        $_$();
        S({ isLive: t(g) }),
          m.openStatisticGamePopup({
            ...t(v),
            sportId: t(k),
            statisticGameId: t(i).statisticGameId || "",
            gameId: t(i).id,
            permanentId: t(i).permanentId,
          });
      },
      e = () => {
        $_$();
        var o;
        m.openStatisticStageNetPopup({
          ...t(v),
          sportId: t(k),
          stageId: ((o = t(i)) == null ? void 0 : o.stageId) || "",
        });
      },
      a = () => {
        $_$();
        m.openStatisticCyberPopup({
          ...t(v),
          sportId: t(k),
          tournamentId: t(A),
          seasonId: t(P),
        });
      },
      s = () => {
        $_$();
        var o;
        r({ isLive: t(g) }),
          m.openStatisticStageTablePopup({
            ...t(v),
            sportId: t(k),
            stageId: (o = t(i)) == null ? void 0 : o.stageId,
          });
      },
      u = () => {
        $_$();
        d({ isLive: t(g) }),
          m.openStatisticCoefficientGraphPopup({ ...t(v), gameId: t(i).id });
      },
      O = () => {
        $_$();
        var o;
        m.openStatisticRatingPopup({
          ...t(v),
          sportId: t(k),
          ratingId: (o = t(i)) == null ? void 0 : o.id,
        }),
          N({ isLive: t(g) });
      },
      $ = (o) => {
        $_$();
        m.openStatisticPlayerPopup({ ...t(v), sportId: t(k), playerId: o });
      },
      q = n(() => $_$() && t(f) && h),
      D = n(() => {
        $_$();
        var o;
        return (
          t(f) &&
          (t(V) ? t(F) : (o = t(i)) == null ? void 0 : o.hasMarketsHistory)
        );
      }),
      H = n(() => {
        $_$();
        var o;
        return ((o = t(i)) == null ? void 0 : o.statisticStageType) === 1;
      }),
      Z = n(() => {
        $_$();
        var o;
        return ((o = t(i)) == null ? void 0 : o.statisticStageType) === 2 && h;
      }),
      x = n(() => {
        $_$();
        var o;
        return (o = t(i)) == null ? void 0 : o.hasStatisticRatingTables;
      });
    return {
      statisticButtons: Y(
        () =>
          $_$() &&
          [
            {
              name: "betting_statistic_statistic",
              title: p("betting_statistic_statistic"),
              ico: b.STATS,
              action: T,
              visible: t(q),
            },
            {
              name: "betting_statistic_odds_movement_chart",
              title: p("betting_statistic_odds_movement_chart"),
              ico: b.COEF_GRAPH,
              action: u,
              visible: t(D),
            },
            {
              name: "betting_statistic_tournament_grid",
              title: p("betting_statistic_tournament_grid"),
              ico: b.TOUR_GRID,
              action: t(C) ? a : e,
              visible: t(C) || t(H),
            },
            {
              name: "betting_statistic_tournament_table",
              title: p("betting_statistic_tournament_table"),
              ico: b.TOUR_TABLE,
              action: s,
              visible: t(Z),
            },
            {
              name: "betting_statistic_rating",
              title: p("betting_statistic_rating"),
              ico: b.RATING,
              action: O,
              visible: t(x),
            },
          ].filter(({ visible: o }) => o)
      ),
      showPlayerStatistic: $,
      showStatistic: T,
      showTournamentGrid: e,
      showTournamentTable: s,
      showOddsMovementChart: u,
      showRating: O,
      isStatisticVisible: q,
      isOddsMovementChartVisible: D,
      isTourGridVisible: H,
      isTourTableVisible: Z,
      isRatingVisible: x,
    };
  },
  mt = () => {
    $_$();
    const i = tt(),
      { trackTimelineClick: _ } = z(),
      c = et(!1),
      l = n(() => $_$() && t(i).fullPath);
    function S(r, d = !0) {
      (c.value = r), d && _(r);
    }
    return (
      it(l, () => {
        S(!1, !1);
      }),
      { isTimelineOpen: c, toggleTimelineVisibilityState: S }
    );
  },
  vt = () => ({
    getVipBet: (_) => {
      $_$();
      const c = W();
      switch (_) {
        case 1:
          return {
            theme: "win",
            fullStatus: c("office_history_coupon_request_accepted"),
            shortStatus: c("office_history_filter_bet_status_adopted"),
          };
        case 0:
          return {
            theme: "loss",
            fullStatus: c("office_history_coupon_request_denied"),
            shortStatus: c("office_history_coupon_request_status_denied"),
          };
        case -1:
        default:
          return {
            theme: "pending",
            fullStatus: c("office_history_coupon_request_review"),
            shortStatus: c("office_history_coupon_request_status_review"),
          };
      }
    },
  });
export {
  mt as timeLineVisibilityController,
  vt as useBetsHistoryVipBet,
  dt as useBettingGameStatistic,
  z as useGameAnalytics,
};
