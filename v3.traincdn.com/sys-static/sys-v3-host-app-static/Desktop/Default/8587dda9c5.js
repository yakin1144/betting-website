import $_$ from "./$_$.js";
$_$();
import {
  apiMethodFactory as C,
  browser_genLngParam as me,
  officeRouteName_OfficeRouteName as z,
  normalizeUrl as I,
  translit_translit as O,
  index_useT as pe,
  useBettingChangeRouteMethods_useBettingChangeRouteMethods as ge,
  index_useDateTimeService as _e,
  useGlobalStore as te,
  runtimeCore_esmBundler_computed as v,
  useRouterMethodsWithLang as Se,
  getGamesRoute_getGamesRoute as Me,
  index_getConfig as ne,
  ThirdPartyRouteName_ThirdPartyRouteName as R,
  promoBonuses_BonusSections as Te,
  bettingType_BettingType as F,
  bettingRouteName_BettingRouteName as ee,
  index_useLogger as re,
  isArray_isArray as se,
  execAsync as P,
  createSharedComposable_createSharedComposable_2 as he,
  useUserConfigStore as ve,
  index_useHttpModule as fe,
  reactivity_esmBundler_ref as Q,
  reactivity_esmBundler_unref as M,
  runtimeCore_esmBundler_useTemplateRef as be,
  runtimeCore_esmBundler_onMounted as ye,
  whenever as Ne,
  runtimeCore_esmBundler_onBeforeUnmount as Oe,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  supportedMessageTypes as oe,
  genUserMessageId as ae,
  timeDesc as xe,
  tz as Ue,
  genIdParamString as ce,
  SlotsRouteSection as H,
  AbortsMap as Ee,
} from "./entry-85993dc44c.js";
const q = "jsonDataString",
  T = "actionData",
  Ie = {
    256: q,
    4: T,
    2048: q,
    512: q,
    1024: q,
    1: T,
    2: T,
    8: T,
    16: T,
    32: T,
    64: T,
    128: T,
    4096: T,
    8192: T,
  },
  Ce = C({
    method: "GET",
    url: "/web-api/messagesvc/getmessages",
    expectedParams: { supportedMessageTypes: oe },
  });
C({
  method: "GET",
  url: "/service-api/webmessage/v2/Web/GetMessages",
  isUseXAuth: !0,
  expectedParams: { supportedMessageTypes: oe, tz: Ue, timeDesc: xe, ...me() },
});
const Ae = C({
  url: "/web-api/messagesvc/readmsg",
  method: "POST",
  expectedParams: { ...ae() },
});
C({
  url: "/service-api/webmessage/v1/Web/ReadMessage",
  method: "POST",
  isUseXAuth: !0,
  expectedParams: { ...ce() },
});
const Re = C({
  url: "/web-api/messagesvc/delmsg",
  method: "POST",
  expectedParams: { ...ae() },
});
C({
  url: "/service-api/webmessage/v1/Web/DelMessage",
  method: "POST",
  isUseXAuth: !0,
  expectedParams: { ...ce() },
});
const Pe = z.BONUSES_DEPOSIT,
  ie = (n, c, l) => {
    const [g, f] = n.split(":").map(Number),
      [a, b, h] = c.split(".").map(Number),
      d = b - 1,
      x = new Date(h, d, a, g, f);
    return l.toSystemTimeZone(x);
  },
  Le = (n, c) => {
    const [l, g] = n.split(" ");
    return ie(l, g, c);
  },
  le = (n, c) => {
    const [l, g] = n.split(" ");
    return ie(g, l, c);
  },
  Be = (n, c) => ({
    id: n.num,
    sportId: n.s_id,
    sportName: n.sport,
    champName: n.champ,
    firstOpponentName: n.opp1,
    secondOpponentName: n.opp2,
    startAt: le(n.start, c),
    url: n.url,
  }),
  De = ({ champId: n, champName: c, champNameEng: l } = {}) =>
    $_$() && n === void 0
      ? ""
      : l
      ? I(`${n}-${O(l)}`)
      : c
      ? I(`${n}-${O(c)}`)
      : String(n),
  $e = ({
    id: n,
    permanentId: c = n ? Number(n) : void 0,
    firstOpponentName: l,
    firstOpponentNameEng: g = l,
    secondOpponentName: f,
    secondOpponentNameEng: a = f,
    champName: b,
    champNameEng: h = b,
  } = {}) =>
    $_$() && c === void 0
      ? ""
      : g && a
      ? I(`${c}-${O(g)}-${O(a)}`)
      : g
      ? I(`${c}-${O(g)}`)
      : h
      ? I(`${c}-${O(h)}`)
      : String(c),
  ke = ({ sportName: n, sportNameEng: c = n }) =>
    $_$() && c ? I(O(c)) : void 0,
  Je = "-1",
  We = () => {
    $_$();
    const n = pe(),
      { getBettingRouteUrl: c } = ge(),
      l = _e(),
      g = te(),
      f = v(() => g.getLanguage),
      { getLinkWithLang: a } = Se(f),
      { getRouteNameByGameId: b } = Me(ne(-2003)),
      h = {
        line: a({ name: ee.MAIN_SECTION, params: { section: F.LINE } }),
        live: a({ name: ee.MAIN_SECTION, params: { section: F.LIVE } }),
        bonus: a({ name: "bonuses", params: { section: Te.RULES } }),
        casino: a({ name: R.SLOTS, params: { section: H.SLOTS } }),
        games: a({ name: "games.games_project_index" }),
      },
      d = {
        categories: a({ name: R.SLOTS, params: { section: H.SLOTS } }),
        promo: a({ name: "bonuses-rules" }),
        tvbet: a({ name: R.TV_GAMES }),
        vipcashback: a({
          name: "bonuses-rules",
          params: { id: "vip_cashback" },
        }),
        promoprizes: a({ name: z.SETTINGS_BONUSES }),
        promocodes: a({ name: z.SETTINGS_PROMO_CODE_CHECK }),
      },
      x = (e, t = F.LINE) =>
        $_$() && {
          content: e.map((r) => {
            $_$();
            const y = { champId: r.IC, champName: r.Ch, champNameEng: r.Ln };
            return {
              id: r.id,
              sportId: r.IS,
              sportName: r.S,
              champName: r.Ch,
              firstOpponentName: r.O1,
              secondOpponentName: r.O2,
              startAt: le(r.D, l),
              url: c({
                section: t,
                champ: De({ ...y }),
                sport: ke({ sportName: r.S, sportNameEng: r.Sn }),
                game: $e({
                  id: r.I,
                  permanentId: r.CI,
                  firstOpponentName: r.O1,
                  firstOpponentNameEng: r.Op1,
                  secondOpponentName: r.O2,
                  secondOpponentNameEng: r.Op2,
                  ...y,
                }),
              }),
            };
          }),
        },
      L = (e) => {
        $_$();
        const t = JSON.parse(e != null ? e : "");
        if (!se(t)) throw new Error("Expected an array in message`s extension");
        return x(t);
      },
      U = (e) => {
        $_$();
        const t = JSON.parse(e != null ? e : "");
        if (!se(t)) throw new Error("Expected an array in message`s extension");
        return x(JSON.parse(e != null ? e : ""), F.LIVE);
      },
      G = (e) => {
        var t;
        const [_] = JSON.parse(e != null ? e : "");
        return { content: (t = _ == null ? void 0 : _.Tx) != null ? t : "" };
      },
      X = (e) => {
        var t;
        return {
          content: (t = e == null ? void 0 : e.promocode) != null ? t : "",
          url: a({
            name: Pe,
            query: { promocode: e == null ? void 0 : e.promocode },
          }),
        };
      },
      Y = async (e) => {
        $_$();
        let t, _;
        if (e != null && e.gameId) {
          const r = (([t, _] = P(() => b(e.gameId))), (t = await t), _(), t);
          return { url: `${a({ name: "games.games_project_index" })}/${r}` };
        }
      },
      V = (e) => {
        var t;
        return { url: (t = h[e.mainSection]) != null ? t : "" };
      },
      A = (e) => {
        var t;
        return {
          externalUrl:
            (t = e == null ? void 0 : e.externalURL) != null ? t : "",
        };
      },
      K = (e) => {
        var t;
        return {
          url: a({
            name: "bonus",
            params: {
              id: String(
                (t = e == null ? void 0 : e.casinoTournamentId) != null ? t : ""
              ),
            },
          }),
        };
      },
      B = (e) =>
        $_$() && {
          url: a({
            name: R.SLOTS,
            params: { section: H.SLOTS },
            query: {
              subcategory: String(e == null ? void 0 : e.casinoSubcategoryId),
            },
          }),
        },
      D = (e) =>
        $_$() && {
          url: a({
            name: R.SLOTS,
            params: { section: H.SLOTS },
            query: {
              subcategory: Je,
              products: `[${e == null ? void 0 : e.casinoProviderId}]`,
            },
          }),
        },
      Z = (e) => {
        var t;
        return { url: (t = d[e.casinoSection]) != null ? t : "" };
      },
      $ = () => $_$() && { url: a({ name: z.RECHARGE }) },
      k = { 256: L, 512: U, 1024: G },
      j = { 1: A, 2: V, 8: Y, 16: B, 32: K, 64: D, 128: Z, 4096: X, 8192: $ },
      J = (e, t) => {
        if (!e.extension || !e.extension.typeId) return;
        const _ = t[e.extension.typeId];
        if (!_) return;
        const r = e.extension[Ie[e.extension.typeId]];
        if (r) return _(r);
      };
    return {
      parseMessage: (e) => {
        $_$();
        var t, _, r, y, s, o, i, S, m;
        let u = {};
        try {
          u = (t = J(e, k)) != null ? t : {};
        } catch (p) {
          if (p instanceof SyntaxError) {
            const ue = re(),
              de = [
                "useParseMessage: message's extension contains invalid JSON. Rendering as a basic message",
                { error: p, raw: e },
              ];
            ue.warn(...de);
          }
        }
        const W = (_ = J(e, j)) != null ? _ : {};
        return {
          id: e.id,
          title: e.title,
          content: Array.isArray(e.content)
            ? e.content.map((p) => Be(p, l))
            : e.content,
          createdAt: Le(e.time, l),
          typeId:
            (y = (r = e.extension) == null ? void 0 : r.typeId) != null
              ? y
              : e.type,
          isRead: e.read,
          text: e.text,
          promocode:
            (i =
              (o = (s = e.extension) == null ? void 0 : s.actionData) == null
                ? void 0
                : o.promocode) != null
              ? i
              : "",
          buttonText:
            (m = (S = e.extension) == null ? void 0 : S.buttonText) != null
              ? m
              : n("header_messages_button_text"),
          ...u,
          ...W,
        };
      },
    };
  },
  N = new Ee(),
  E = "UserMessagesAbortMap",
  Fe = 0,
  ze = he(() => {
    $_$();
    var n;
    const c = te(),
      l = re(),
      g = ve(),
      f = (n = ne(456)) != null ? n : Fe,
      a = fe(),
      { parseMessage: b } = We(),
      h = Q([]),
      d = Q([]),
      x = v(
        () =>
          $_$() &&
          M(d)
            .filter(({ isSelected: s }) => s)
            .map(({ id: s }) => s)
      ),
      L = Q(!1),
      U = v(() => g.userMsgCount),
      G = v(() => c.isUserAuth),
      X = v(() => $_$() && !!M(U)),
      Y = v(() =>
        h.value.filter((s) => {
          var o;
          return ((o = s.extension) == null ? void 0 : o.typeId) === 131072;
        })
      ),
      V = (s) => {
        d.value = s.map((o) => ({ ...b(o), isToggled: !1, isSelected: !1 }));
      },
      A = (s) => {
        g.setMessagesCount(s);
      },
      K = (s) => {
        h.value = s;
      },
      B = async () => {
        $_$();
        let s, o;
        const { execute: i, abort: S } = Ce(a, {
          params: { supportedTypes: f },
        });
        N.set(E, S);
        try {
          const { messages: m, countNew: u } =
            (([s, o] = P(() => i())), (s = await s), o(), s);
          K(m), V(m), A(u), (L.value = !0);
        } catch (m) {
          l.error("GetUserMessage Error: ", m);
        } finally {
          N.delete(E, S);
        }
      },
      D = (s) => {
        $_$();
        const o = M(d).find((i) => i.id === s.messageId);
        o && (o.isSelected = s.newState);
      },
      Z = async (s) => {
        $_$();
        let o, i;
        const S = M(d).filter((p) => s.includes(p.id)),
          m = S.filter(({ isRead: p }) => !p);
        m.forEach((p) => {
          p.isRead = !0;
        }),
          (d.value = M(d).filter(({ id: p }) => !s.includes(p)));
        const { execute: u, abort: W } = Re(a, {
          params: { idMessage: S.map(({ id: p }) => p).join(",") },
        });
        A(M(U) - m.length), N.set(E, W);
        try {
          ([o, i] = P(() => u())), await o, i();
        } catch (p) {
          l.error("DeleteUserMessages Error: ", p);
        } finally {
          N.delete(E, W);
        }
      },
      $ = async (s) => {
        $_$();
        let o, i;
        const { execute: S, abort: m } = Ae(a, {
          params: { idMessage: s.join(",") },
        });
        N.set(E, m);
        try {
          ([o, i] = P(() => S())), await o, i();
        } catch (u) {
          l.error("ReadMessages Error: ", u);
        } finally {
          N.delete(E, m);
        }
      },
      k = async (s) => {
        $_$();
        let o, i;
        const S = M(d).filter((u) => s.includes(u.id)),
          m = S.filter(({ isRead: u }) => !u);
        m.forEach((u) => {
          u.isRead = !0;
        }),
          S.forEach((u) => {
            u.isSelected = !1;
          }),
          ([o, i] = P(() => $(S.map(({ id: u }) => u)))),
          await o,
          i(),
          A(M(U) - m.length);
      },
      j = async () => {
        $_$();
        const o = M(d)
          .filter(({ isRead: i }) => !i)
          .map(({ id: i }) => i);
        return k(o);
      },
      J = (s) => {
        $_$();
        const o = M(d).find((i) => i.id === s.messageId);
        o && (o.isToggled = s.newState);
      },
      w = v(() => $_$() && M(d).some(({ isSelected: s }) => s)),
      e = v(
        () => $_$() && M(d).some(({ isSelected: s, isRead: o }) => s && !o)
      ),
      t = () => {
        $_$();
        M(d)
          .filter(({ isSelected: s }) => !s)
          .forEach(({ id: s }) => D({ messageId: s, newState: !0 }));
      },
      _ = () => N.abortAll(),
      r = be("userMessagesDropdown"),
      y = () => {
        $_$();
        var s;
        (s = M(r)) == null || s.close();
      };
    return (
      ye(() => {
        $_$();
        Ne(
          G,
          () => {
            B();
          },
          { immediate: !0 }
        );
      }),
      Oe(() => {
        _();
      }),
      {
        selectedMessagesIds: x,
        userMessages: d,
        userMessagesCountNew: U,
        isLoadedUserMessages: L,
        shouldShowUserMessagesCountNew: X,
        hasMessagesSelected: w,
        hasUnreadMessagesSelected: e,
        limitEventMessages: Y,
        getUserMessages: B,
        cancelAllRequest: _,
        deleteUserMessages: Z,
        readMessages: $,
        readUserMessages: k,
        readAllUserMessages: j,
        toggleUserMessage: J,
        selectUserMessage: D,
        selectAllMessages: t,
        userMessagesDropdown: r,
        closeUserMessagesDropdown: y,
      }
    );
  });
export { ze as useUserMessages };
