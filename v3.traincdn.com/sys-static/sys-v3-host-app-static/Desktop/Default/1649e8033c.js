import $_$ from "./$_$.js";
$_$();
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./c203b01c8b.js",
      "./f59398d84b.js",
      "./entry-85993dc44c.js",
      "./c955f88782.css",
      "./d9f6a4243d.js",
      "./ff19bdc8cb.css",
    ])
) => $_$() && i.map((i) => $_$() && d[i]);
import {
  runtimeCore_esmBundler_inject as Vt,
  runtimeCore_esmBundler_provide as Re,
  index_getConfig as ne,
  paymentsIconType_PaymentsIconByType as Mt,
  runtimeCore_esmBundler_defineComponent as $,
  reactivity_esmBundler_shallowRef as $t,
  useNuxtApp as At,
  runtimeCore_esmBundler_onBeforeMount as Nt,
  isDevelopment as Lt,
  execAsync as K,
  runtimeCore_esmBundler_h as Ft,
  theme_constants_themeType as H,
  size_constants_sizeType as I,
  runtimeCore_esmBundler_createBlock as f,
  runtimeCore_esmBundler_openBlock as m,
  reactivity_esmBundler_unref as o,
  runtimeCore_esmBundler_computed as _,
  runtimeCore_esmBundler_resolveComponent as u,
  runtimeCore_esmBundler_createElementBlock as V,
  shared_esmBundler_normalizeClass as W,
  runtimeCore_esmBundler_Fragment as ce,
  runtimeCore_esmBundler_renderList as Ce,
  runtimeCore_esmBundler_createElementVNode as z,
  runtimeCore_esmBundler_createVNode as d,
  iconName as Z,
  WeightType as le,
  runtimeCore_esmBundler_withCtx as s,
  runtimeCore_esmBundler_createTextVNode as y,
  shared_esmBundler_toDisplayString as w,
  ColorType as te,
  defineEmit_defineEmit as Se,
  index_useT as q,
  runtimeCore_esmBundler_resolveDirective as pe,
  stopElements as Ue,
  alignType as Te,
  runtimeCore_esmBundler_createCommentVNode as M,
  runtimeCore_esmBundler_withDirectives as se,
  getDurationInMillis_getDurationInMillis as Pt,
  nuxtLink_default as Ee,
  vueCountdown_esm_default as Rt,
  useGlobalStore as de,
  useAccountStore as We,
  useRouterMethodsWithLang as Gt,
  officeRouteName_OfficeRouteName as Wt,
  runtimeCore_esmBundler_createSlots as ye,
  runtimeCore_esmBundler_resolveDynamicComponent as Ht,
  runtimeCore_esmBundler_mergeProps as qt,
  runtimeCore_esmBundler_renderSlot as ke,
  shared_esmBundler_normalizeStyle as jt,
  createModal_createModal as Qt,
  UiPreloader_default as Xt,
  index_useVModal as Kt,
  index_getConfigs as ue,
  defaultThemeType as He,
  runtimeCore_esmBundler_onUnmounted as qe,
  MarketsNameTypes as be,
  useCoreBus as Yt,
  index_useLogger as je,
  useTimeSettings_useTimeSettings as Qe,
  reactivity_esmBundler_shallowReactive as Zt,
  runtimeCore_esmBundler_watch as _e,
  isDef as Jt,
  createSharedComposable_createSharedComposable_2 as Xe,
  index_useAppStorage as Ke,
  useLogger_useLogger as Ye,
  reactivity_esmBundler_ref as fe,
  index_useSharedStore as Ze,
  AppStorageKey as X,
  runtimeCore_esmBundler_onMounted as Oe,
  MEDIA_EXTENSIONS as Ie,
  UiSelection_constants_SelectionType as Je,
  sortBySearchString as xt,
  index_useHttpModule as eo,
  LeavingPage_LeavingPage as ze,
  runtimeCore_esmBundler_onBeforeUnmount as to,
  setInterval as oo,
  ICON_NAME_PATH as so,
  index_useDateTimeService as no,
  clientOnly_default as xe,
  runtimeCore_esmBundler_nextTick as io,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { withAsyncContext as Be } from "../../../shared-assets/Desktop/__shared_049c1c2603.js";
import {
  loadUserMessagesItem as ao,
  loadUserMessagesDropdownConfig as et,
  useHostAppAnalytics as me,
  useUserMessageEvents as lo,
  _export_sfc as L,
  useStartIntervalUpdate as ro,
  useCompactHeader as co,
  loadBonusesConfig as po,
  __vitePreload as uo,
  getAccessCallback as mo,
} from "./entry-85993dc44c.js";
import { useUserMessages as go } from "./8587dda9c5.js";
import {
  AccountSelectDropdown as _o,
  AccountSelectToggle as So,
} from "./1ba58be09f.js";
import {
  applicationSettingsPanelColorScheme as re,
  useApplicationSettingsDropdownsProps as tt,
  applicationSettingsConfig as Ve,
  LanguageSettingsDropdown as fo,
} from "./4461966886.js";
import { fuse_esm_default as ho } from "../../../shared-assets/Desktop/__shared_1c5f097ec1.js";
let wo = 1;
const To = (e) => {
    const t = `___provider-num-${wo++}___`,
      i = () => $_$() && Vt(t);
    return {
      inject: i,
      provide: (...r) => {
        $_$();
        const a = e(...r);
        return Re(t, a), a;
      },
      useSetProvide: () => {
        const r = i();
        return () => $_$() && (Re(t, r), r);
      },
      key: t,
    };
  },
  wn = () => {
    $_$();
    const e = ne(157);
    return { paymentsIcon: Mt[e] };
  },
  yo = $({
    setup(e, { slots: t, attrs: i }) {
      $_$();
      var l;
      const n = $t(null);
      {
        const r =
          (l = At().$multiBuildPreloadComponents) == null
            ? void 0
            : l.UserMessagesItem;
        r
          ? (n.value = r)
          : Nt(async () => {
              $_$();
              let a, c;
              if (t.loadingComponent) {
                const p = t.loadingComponent();
                p.length === 1 && (n.value = p[0]),
                  Lt &&
                    p.length > 1 &&
                    console.warn(
                      "[UserMessagesItem] slot loadingComponent не имеет root ноды"
                    );
              }
              n.value = (([a, c] = K(() => ao())), (a = await a), c(), a);
            });
      }
      return () =>
        $_$() &&
        Ft(
          n.value,
          { ...i, "data-mbc-__V3_HOST_APP__": "UserMessagesItem" },
          t
        );
    },
  }),
  bo = $({
    __name: "UserMessagesItem",
    props: {
      message: {},
      messageTextSize: { default: I.xs },
      messageTextTheme: { default: H.gray100 },
    },
    setup(e) {
      return (t, i) =>
        $_$() &&
        (m(),
        f(
          o(yo),
          {
            message: t.message,
            messageTextSize: t.messageTextSize,
            messageTextTheme: t.messageTextTheme,
          },
          null,
          8,
          ["message", "messageTextSize", "messageTextTheme"]
        ));
    },
  }),
  vo = { key: 1, class: "user-messages__empty user-messages-empty" },
  Co = { class: "user-messages-empty__ico user-messages-empty-ico" },
  Uo = { class: "user-messages-empty-ico__count" },
  Oo = 0,
  Io = $({
    __name: "UserMessages",
    props: {
      messages: { default: () => [] },
      isShowCustomEmptyMessagesBlock: { type: Boolean, default: !1 },
      isMessagesItemsIndented: { type: Boolean, default: !0 },
      messageTextSize: { default: I.xs },
      messageTextTheme: { default: H.gray100 },
    },
    emits: [
      "selectUserMessage",
      "toggleUserMessage",
      "deleteUserMessage",
      "readUserMessage",
    ],
    async setup(e) {
      $_$();
      let t, i, l, n;
      const {
          config: { uiMessageBlockTheme: r },
        } = (([l, n] = Be(() => et())),
        (l = (([t, i] = K(() => l)), (t = await t), i(), t)),
        n(),
        l)(),
        a = e,
        c = me(),
        {
          emitDeleteUserMessage: p,
          emitReadUserMessage: g,
          emitSelectUserMessage: T,
          emitToggleUserMessage: U,
        } = lo(),
        h = (C) => {
          p(C), c.modules.header.clickOnRemoveMsg();
        },
        O = (C) => {
          g(C), c.modules.header.clickOnReadMsg(C);
        },
        v = (C) => {
          U(C), c.modules.header.clickOnToggleStateMsg();
        },
        k = (C) => {
          c.modules.header.trackClickOnLinkButtonMsg(C);
        },
        E = _(() => ({ "user-messages--indented": a.isMessagesItemsIndented }));
      return (C, N) => {
        $_$();
        const D = u("UiIco"),
          F = u("UiCaption"),
          P = u("UiMessageBlockV2");
        return C.messages.length
          ? (m(),
            V(
              "ul",
              { key: 0, class: W([o(E), "user-messages"]) },
              [
                (m(!0),
                V(
                  ce,
                  null,
                  Ce(
                    C.messages,
                    (B) =>
                      $_$() &&
                      (m(),
                      f(
                        bo,
                        {
                          key: B.id,
                          onDeleteUserMessage: h,
                          onReadUserMessage: O,
                          onToggleUserMessage: v,
                          onSelectUserMessage: o(T),
                          onClickLinkUserMessage: k,
                          message: B,
                          messageTextSize: C.messageTextSize,
                          messageTextTheme: C.messageTextTheme,
                          class: "user-messages__item",
                        },
                        null,
                        8,
                        [
                          "onSelectUserMessage",
                          "message",
                          "messageTextSize",
                          "messageTextTheme",
                        ]
                      ))
                  ),
                  128
                )),
              ],
              2
            ))
          : C.isShowCustomEmptyMessagesBlock
          ? (m(),
            V("div", vo, [
              z("div", Co, [
                d(
                  D,
                  {
                    ico: o(Z).ENVELOPE_OPEN,
                    class: "user-messages-empty-ico__ico",
                  },
                  null,
                  8,
                  ["ico"]
                ),
                z("div", Uo, [
                  d(
                    F,
                    { size: o(I).xl, weight: o(le).BOLD },
                    { default: s(() => $_$() && [y(w(Oo))]), _: 1 },
                    8,
                    ["size", "weight"]
                  ),
                ]),
              ]),
              d(
                F,
                {
                  color: o(te).clrStrong,
                  weight: o(le).BOLD,
                  size: o(I).l,
                  class: "user-messages-empty__title",
                },
                {
                  default: s(
                    () => $_$() && [y(w(C.$T("main_no_messages")), 1)]
                  ),
                  _: 1,
                },
                8,
                ["color", "weight", "size"]
              ),
              d(
                F,
                {
                  color: o(te).clrDecent,
                  size: o(I).xs,
                  class: "user-messages-empty__text",
                },
                {
                  default: s(
                    () => $_$() && [y(w(C.$T("header_no_messages")), 1)]
                  ),
                  _: 1,
                },
                8,
                ["color", "size"]
              ),
            ]))
          : (m(),
            f(
              P,
              { key: 2, size: o(I).s, theme: o(r) },
              {
                default: s(
                  () => $_$() && [y(w(C.$T("header_no_messages")), 1)]
                ),
                _: 1,
              },
              8,
              ["size", "theme"]
            ));
      };
    },
  }),
  Do = L(Io, [["__scopeId", "data-v-e1db685d"]]),
  zo = $({
    __name: "UserMessagesDropdownHeader",
    props: {
      isButtonSelect: { type: Boolean },
      titleSize: {},
      isTitleUppercase: { type: Boolean },
      hasPadding: { type: Boolean },
      hasBorderBottom: { type: Boolean },
      theme: {},
    },
    setup(e) {
      $_$();
      const t = e,
        i = Se("selectAllUserMessages"),
        l = Se("readAllUserMessages"),
        n = _(() => ({
          "user-messages-dropdown-header--indented": t.hasPadding,
          "user-messages-dropdown-header--border-bottom": t.hasBorderBottom,
          [`user-messages-dropdown-header--theme-${t.theme}`]: !!t.theme,
        }));
      return (r, a) => {
        $_$();
        const c = u("UiCaption"),
          p = u("UiInlineButton");
        return (
          m(),
          V(
            "div",
            { class: W(["user-messages-dropdown-header", o(n)]) },
            [
              d(
                c,
                {
                  size: r.titleSize,
                  weight: o(le).BOLD,
                  uppercase: r.isTitleUppercase,
                },
                {
                  default: s(
                    () => $_$() && [y(w(r.$T("header_my_messages")), 1)]
                  ),
                  _: 1,
                },
                8,
                ["size", "weight", "uppercase"]
              ),
              r.isButtonSelect
                ? (m(),
                  f(
                    p,
                    {
                      key: 0,
                      onClick: o(i),
                      "aria-label": r.$T("header_select_all"),
                    },
                    {
                      default: s(
                        () =>
                          $_$() && [
                            d(
                              c,
                              { size: o(I).xs },
                              {
                                default: s(
                                  () =>
                                    $_$() && [
                                      y(w(r.$T("header_select_all")), 1),
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
                    ["onClick", "aria-label"]
                  ))
                : (m(),
                  f(
                    p,
                    { key: 1, onClick: o(l), size: o(I).s },
                    {
                      default: s(
                        () =>
                          $_$() && [
                            d(
                              c,
                              { color: o(te).clrStrong },
                              {
                                default: s(
                                  () =>
                                    $_$() && [y(w(r.$T("main_read_all")), 1)]
                                ),
                                _: 1,
                              },
                              8,
                              ["color"]
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["onClick", "size"]
                  )),
            ],
            2
          )
        );
      };
    },
  }),
  ko = L(zo, [["__scopeId", "data-v-212dcdc5"]]),
  Eo = { class: "user-messages-dropdown-toggle__container" },
  Bo = $({
    __name: "UserMessagesDropdown",
    props: {
      showNewMessagesCount: { type: Boolean, default: !0 },
      triggerButtonSize: { default: I.m },
    },
    async setup(e) {
      $_$();
      let t, i, l, n;
      const r = e,
        c = (([l, n] = Be(() => et())),
        (l = (([t, i] = K(() => l)), (t = await t), i(), t)),
        n(),
        l)(),
        {
          config: {
            isToggleDecent: p,
            isContentIndented: g,
            isScrollIndented: T,
            isShowActionsInRow: U,
            isCustomMessages: h,
            dropdownContentTheme: O,
            dropdownHeaderTheme: v,
            isDropdownHeaderButtonSelect: k,
            dropdownHeaderTitleSize: E,
            isDropdownHeaderTitleUppercase: C,
            hasDropdownHeaderPadding: N,
            hasDropdownHeaderBorderBottom: D,
            isShowCustomEmptyMessagesBlock: F,
            isMessagesItemsIndented: P,
            messageTextSize: B,
            messageTextTheme: A,
            uiDropdownTheme: J,
            uiButtonTheme: ie,
            uiBadgeTheme: R,
            uiScrollbarTheme: x,
            uiButtonDeleteMessageTheme: Y,
          },
        } = c,
        b = q(),
        j = me(),
        {
          userMessages: ge,
          userMessagesCountNew: S,
          isLoadedUserMessages: oe,
          shouldShowUserMessagesCountNew: Q,
          getUserMessages: nt,
          cancelAllRequest: it,
          deleteUserMessages: Me,
          readUserMessages: $e,
          readAllUserMessages: at,
          selectAllMessages: lt,
          toggleUserMessage: rt,
          selectUserMessage: ct,
          hasMessagesSelected: pt,
          hasUnreadMessagesSelected: dt,
          selectedMessagesIds: Ae,
          userMessagesDropdown: ut,
        } = go(),
        mt = () => $_$() && $e(o(Ae)),
        gt = (G) => $e([G.id]),
        _t = () => $_$() && (j.modules.header.clickOnRemoveMsg(), Me(o(Ae))),
        Ne = _(() => $_$() && !!o(ge).length),
        St = _(() => $_$() && !h && o(Ne)),
        ft = _(() => ($_$() && r.showNewMessagesCount ? o(S) : 0)),
        ht = (G) =>
          $_$() && h ? (G ? Z.ENVELOPE_OPEN : Z.ENVELOPE) : Z.MESSAGE;
      ro({ interval: 6e4, onUpdateData: nt, onCancelIntervalRequest: it });
      const wt = (G) => {
          j.modules.header.clickOnUserMessageIcon(), G();
        },
        Tt = (G) => ({
          "user-messages-dropdown-toggle--is-toggled": G,
          "user-messages-dropdown-toggle--decent": p,
        }),
        yt = {
          "user-messages-dropdown__content--indented": g,
          [`user-messages-dropdown__content--theme-${O}`]: !!O,
        },
        bt = { "user-messages-dropdown__scroll--indented": T },
        vt = { "user-messages-dropdown-actions--row": U },
        Ct = _(() => ({
          [`user-messages-dropdown--size-${r.triggerButtonSize}`]:
            !!r.triggerButtonSize,
        })),
        Ut = {
          content: b("main_delete"),
          popperOptions: {
            modifiers: { preventOverflow: { boundariesElement: "window" } },
          },
        };
      return (G, Le) => {
        $_$();
        const Ot = u("UiBadge"),
          Fe = u("UiIco"),
          It = u("UiAngle"),
          Dt = u("UiSkeleton"),
          De = u("UiButton"),
          zt = u("UiScrollbar"),
          kt = u("UiCaption"),
          Et = u("UiDropdown"),
          Pe = pe("tooltip");
        return (
          m(),
          f(
            Et,
            {
              ref_key: "userMessagesDropdown",
              ref: ut,
              align: o(Te).END,
              stopElementsStore: o(Ue),
              theme: o(J),
              rounded: !1,
              class: W(["user-messages-dropdown", o(Ct)]),
            },
            {
              customTrigger: s(
                ({ isOpen: ae, toggle: Bt }) =>
                  $_$() && [
                    se(
                      (m(),
                      f(
                        De,
                        {
                          ref: "dropdownBtn",
                          onClick: (dn) => wt(Bt),
                          "aria-label": G.$T("header_my_messages"),
                          toggled: ae,
                          theme: o(ie),
                          narrow: "",
                          size: G.triggerButtonSize,
                          "aria-expanded": ae,
                          disabled: !o(oe),
                          class: W([
                            Tt(ae),
                            "user-messages-dropdown__toggle user-messages-dropdown-toggle",
                          ]),
                        },
                        {
                          default: s(
                            () =>
                              $_$() && [
                                o(oe)
                                  ? (m(),
                                    V(
                                      ce,
                                      { key: 0 },
                                      [
                                        z("div", Eo, [
                                          o(Q)
                                            ? (m(),
                                              f(
                                                Ot,
                                                {
                                                  key: 0,
                                                  value: o(ft),
                                                  class:
                                                    "user-messages-dropdown-toggle__badge",
                                                  theme: o(R),
                                                },
                                                null,
                                                8,
                                                ["value", "theme"]
                                              ))
                                            : M("", !0),
                                          d(
                                            Fe,
                                            {
                                              ico: ht(ae),
                                              class:
                                                "user-messages-dropdown-toggle__ico",
                                            },
                                            null,
                                            8,
                                            ["ico"]
                                          ),
                                        ]),
                                        d(It, {
                                          class:
                                            "user-messages-dropdown-toggle__angle",
                                        }),
                                      ],
                                      64
                                    ))
                                  : (m(),
                                    f(
                                      Dt,
                                      {
                                        key: 1,
                                        theme: o(H).primary,
                                        class:
                                          "user-messages-dropdown-toggle__loader user-messages-dropdown-toggle-loader",
                                      },
                                      null,
                                      8,
                                      ["theme"]
                                    )),
                              ]
                          ),
                          _: 2,
                        },
                        1032,
                        [
                          "onClick",
                          "aria-label",
                          "toggled",
                          "theme",
                          "size",
                          "aria-expanded",
                          "disabled",
                          "class",
                        ]
                      )),
                      [
                        [
                          Pe,
                          {
                            content: G.$T("header_my_messages"),
                            container: !1,
                            classes: ["u-nowrap"],
                          },
                        ],
                      ]
                    ),
                  ]
              ),
              default: s(
                () =>
                  $_$() && [
                    z(
                      "div",
                      { class: W([yt, "user-messages-dropdown__content"]) },
                      [
                        o(Ne)
                          ? (m(),
                            f(
                              ko,
                              {
                                key: 0,
                                onReadAllUserMessages: o(at),
                                onSelectAllUserMessages: o(lt),
                                isButtonSelect: o(k),
                                titleSize: o(E),
                                isTitleUppercase: o(C),
                                hasPadding: o(N),
                                hasBorderBottom: o(D),
                                theme: o(v),
                              },
                              null,
                              8,
                              [
                                "onReadAllUserMessages",
                                "onSelectAllUserMessages",
                                "isButtonSelect",
                                "titleSize",
                                "isTitleUppercase",
                                "hasPadding",
                                "hasBorderBottom",
                                "theme",
                              ]
                            ))
                          : M("", !0),
                        d(
                          zt,
                          {
                            theme: o(x),
                            isOnlyVertical: "",
                            class: W([bt, "user-messages-dropdown__scroll"]),
                          },
                          {
                            default: s(
                              () =>
                                $_$() && [
                                  d(
                                    Do,
                                    {
                                      onDeleteUserMessage:
                                        Le[0] ||
                                        (Le[0] = (ae) => $_$() && o(Me)([ae])),
                                      onReadUserMessage: gt,
                                      onToggleUserMessage: o(rt),
                                      onSelectUserMessage: o(ct),
                                      messages: o(ge),
                                      isShowCustomEmptyMessagesBlock: o(F),
                                      isMessagesItemsIndented: o(P),
                                      messageTextSize: o(B),
                                      messageTextTheme: o(A),
                                    },
                                    null,
                                    8,
                                    [
                                      "onToggleUserMessage",
                                      "onSelectUserMessage",
                                      "messages",
                                      "isShowCustomEmptyMessagesBlock",
                                      "isMessagesItemsIndented",
                                      "messageTextSize",
                                      "messageTextTheme",
                                    ]
                                  ),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["theme"]
                        ),
                      ]
                    ),
                    o(St)
                      ? (m(),
                        V(
                          "div",
                          {
                            key: 0,
                            class: W([vt, "user-messages-dropdown-actions"]),
                          },
                          [
                            se(
                              (m(),
                              f(
                                De,
                                {
                                  onClick: _t,
                                  disabled: !o(pt),
                                  narrow: "",
                                  theme: o(Y),
                                  decent: "",
                                  "aria-label": G.$T("main_delete"),
                                },
                                {
                                  default: s(
                                    () =>
                                      $_$() && [
                                        d(Fe, { ico: o(Z).REMOVE }, null, 8, [
                                          "ico",
                                        ]),
                                      ]
                                  ),
                                  _: 1,
                                },
                                8,
                                ["disabled", "theme", "aria-label"]
                              )),
                              [[Pe, Ut]]
                            ),
                            d(
                              De,
                              {
                                onClick: mt,
                                disabled: !o(dt),
                                theme: o(H).primary,
                                block: "",
                              },
                              {
                                default: s(
                                  () =>
                                    $_$() && [
                                      d(
                                        kt,
                                        { size: o(I).m },
                                        {
                                          default: s(
                                            () =>
                                              $_$() && [
                                                y(
                                                  w(
                                                    G.$T("header_mark_as_read")
                                                  ),
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
                              ["disabled", "theme"]
                            ),
                          ]
                        ))
                      : M("", !0),
                  ]
              ),
              _: 1,
            },
            8,
            ["align", "stopElementsStore", "theme", "class"]
          )
        );
      };
    },
  }),
  Tn = L(Bo, [["__scopeId", "data-v-634251cf"]]),
  Vo = { class: "bonuses-option__row" },
  Mo = { key: 0, class: "bonuses-option__wrapper" },
  $o = { class: "bonuses-option__row" },
  Ao = { class: "bonuses-option__wrapper" },
  No = { class: "bonuses-option-date" },
  Lo = $({
    __name: "BonusesOption",
    props: {
      item: {},
      promoLink: {},
      bonusesOptionPromoLinkWeight: {},
      bonusesOptionValueWeight: {},
      bonusesOptionIsShowSum: { type: Boolean },
      bonusesOptionTextSize: {},
      bonusesOptionTheme: {},
    },
    setup(e) {
      $_$();
      const t = e,
        i = _(() => `bonuses-option--theme-${t.bonusesOptionTheme}`),
        l = _(() => $_$() && Pt(t.item.expirationDate));
      return (n, r) => {
        $_$();
        const a = u("UiCaption"),
          c = Ee;
        return (
          m(),
          V(
            "div",
            { class: W([o(i), "bonuses-option"]) },
            [
              z("div", Vo, [
                d(
                  c,
                  { to: n.promoLink, class: "bonuses-option__name" },
                  {
                    default: s(
                      () =>
                        $_$() && [
                          d(
                            a,
                            {
                              weight: n.bonusesOptionPromoLinkWeight,
                              size: o(I).xs,
                            },
                            {
                              default: s(() => $_$() && [y(w(n.item.name), 1)]),
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
                n.bonusesOptionIsShowSum
                  ? (m(),
                    V("div", Mo, [
                      d(
                        a,
                        {
                          size: n.bonusesOptionTextSize,
                          color: o(te).clrDecent,
                          weight: n.bonusesOptionValueWeight,
                        },
                        {
                          default: s(() => $_$() && [y(w(n.item.money), 1)]),
                          _: 1,
                        },
                        8,
                        ["size", "color", "weight"]
                      ),
                      d(
                        a,
                        {
                          size: n.bonusesOptionTextSize,
                          color: o(te).clrDecent,
                          class: "bonuses-option__total",
                        },
                        {
                          default: s(
                            () =>
                              $_$() && [
                                y(
                                  " / " +
                                    w(n.item.start) +
                                    " " +
                                    w(n.item.currencyIso),
                                  1
                                ),
                              ]
                          ),
                          _: 1,
                        },
                        8,
                        ["size", "color"]
                      ),
                    ]))
                  : M("", !0),
              ]),
              z("div", $o, [
                z("div", Ao, [
                  d(
                    a,
                    {
                      size: n.bonusesOptionTextSize,
                      weight: n.bonusesOptionValueWeight,
                    },
                    {
                      default: s(
                        () => $_$() && [y(w(n.$T("header_bonus_played")), 1)]
                      ),
                      _: 1,
                    },
                    8,
                    ["size", "weight"]
                  ),
                  d(
                    a,
                    { size: n.bonusesOptionTextSize, weight: o(le).BOLD },
                    { default: s(() => $_$() && [y(w(n.item.cur), 1)]), _: 1 },
                    8,
                    ["size", "weight"]
                  ),
                  d(
                    a,
                    {
                      size: n.bonusesOptionTextSize,
                      class: "bonuses-option__total",
                    },
                    {
                      default: s(
                        () =>
                          $_$() && [
                            y(
                              " / " +
                                w(n.item.end) +
                                " " +
                                w(n.item.currencyIso),
                              1
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["size"]
                  ),
                ]),
                d(
                  o(Rt),
                  { time: o(l) },
                  {
                    default: s(
                      (p) =>
                        $_$() && [
                          z("div", No, [
                            d(
                              a,
                              { size: n.bonusesOptionTextSize },
                              {
                                default: s(() => $_$() && [y(w(p.days), 1)]),
                                _: 2,
                              },
                              1032,
                              ["size"]
                            ),
                            d(
                              a,
                              {
                                size: n.bonusesOptionTextSize,
                                class: "bonuses-option-date__label",
                              },
                              {
                                default: s(
                                  () =>
                                    $_$() && [y(w(n.$T("main_days_short")), 1)]
                                ),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ),
                            d(
                              a,
                              { size: n.bonusesOptionTextSize },
                              {
                                default: s(() => $_$() && [y(w(p.hours), 1)]),
                                _: 2,
                              },
                              1032,
                              ["size"]
                            ),
                            d(
                              a,
                              {
                                size: n.bonusesOptionTextSize,
                                class: "bonuses-option-date__label",
                              },
                              {
                                default: s(
                                  () =>
                                    $_$() && [y(w(n.$T("main_hour_short")), 1)]
                                ),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ),
                            d(
                              a,
                              { size: n.bonusesOptionTextSize },
                              {
                                default: s(() => $_$() && [y(w(p.minutes), 1)]),
                                _: 2,
                              },
                              1032,
                              ["size"]
                            ),
                            d(
                              a,
                              {
                                size: n.bonusesOptionTextSize,
                                class: "bonuses-option-date__label",
                              },
                              {
                                default: s(
                                  () =>
                                    $_$() && [
                                      y(w(n.$T("main_minutes_short")), 1),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ),
                            d(
                              a,
                              { size: n.bonusesOptionTextSize },
                              {
                                default: s(() => $_$() && [y(w(p.seconds), 1)]),
                                _: 2,
                              },
                              1032,
                              ["size"]
                            ),
                            d(
                              a,
                              {
                                size: n.bonusesOptionTextSize,
                                class: "bonuses-option-date__label",
                              },
                              {
                                default: s(
                                  () =>
                                    $_$() && [
                                      y(w(n.$T("main_seconds_short")), 1),
                                    ]
                                ),
                                _: 1,
                              },
                              8,
                              ["size"]
                            ),
                          ]),
                        ]
                    ),
                    _: 1,
                  },
                  8,
                  ["time"]
                ),
              ]),
            ],
            2
          )
        );
      };
    },
  }),
  Fo = L(Lo, [["__scopeId", "data-v-96bdbb80"]]),
  Po = { class: "bonuses-dropdown__bottom" },
  Ro = 1,
  Go = 0,
  Wo = $({
    __name: "BonusesDropdown",
    props: {
      isShowBonusLink: { type: Boolean, default: !1 },
      isShowBottom: { type: Boolean, default: !1 },
      bonusesOptionPromoLinkWeight: { default: le.LIGHT },
      bonusesOptionValueWeight: { default: le.LIGHT },
      bonusesOptionIsShowSum: { type: Boolean, default: !1 },
      bonusesOptionTextSize: { default: I.xs },
      bonusesOptionTheme: { default: H.gray100 },
    },
    setup(e) {
      $_$();
      const t = e,
        i = de(),
        l = We(),
        n = _(() => i.getLanguage),
        { useLangLocation: r } = Gt(n),
        a = _(() => l.mainAccount),
        c = ne(568),
        p = {
          firstDeposit: r({ name: "bonus", params: { id: "1st" } }),
          officeDeposits: r({ name: Wt.BONUSES_DEPOSIT }),
          promo: r({ name: "promo" }),
          bonuses: r({ name: "bonus" }),
        },
        g = c
          ? { component: "NuxtLink", props: { to: o(p.promo) } }
          : { component: "span" },
        T = (v) =>
          $_$() && v.promoId === Ro
            ? o(p.firstDeposit)
            : t.isShowBonusLink
            ? o(p.bonuses)
            : v.casino === Go
            ? o(p.promo)
            : o(p.officeDeposits),
        U = _(() =>
          l.getBonuses.map((v) => {
            const k = T(v);
            return { ...v, ...(c ? { link: k } : {}) };
          })
        ),
        { isCompactSizeL: h } = co(),
        O = _(() => ($_$() && o(h) ? Te.END : Te.START));
      return (v, k) => {
        $_$();
        const E = u("UiSelectOptions"),
          C = u("UiCaption"),
          N = u("UiButton"),
          D = Ee,
          F = u("UiSelectContent");
        return (
          m(),
          f(
            _o,
            { loading: !o(a), align: o(O), class: "bonuses-dropdown" },
            {
              trigger: s(
                ({ isOpen: P, toggle: B }) =>
                  $_$() && [
                    ke(
                      v.$slots,
                      "trigger",
                      { onToggle: B, accountData: o(a), isOpen: P },
                      void 0,
                      !0
                    ),
                  ]
              ),
              default: s(
                ({ close: P }) =>
                  $_$() && [
                    o(U).length
                      ? (m(),
                        f(
                          F,
                          { key: 0 },
                          ye(
                            {
                              default: s(
                                () =>
                                  $_$() && [
                                    d(
                                      E,
                                      {
                                        options: o(U),
                                        class: "bonuses-dropdown__options",
                                      },
                                      {
                                        item: s(
                                          ({ option: B }) =>
                                            $_$() && [
                                              d(
                                                Fo,
                                                {
                                                  item: B,
                                                  promoLink: B.link,
                                                  bonusesOptionPromoLinkWeight:
                                                    v.bonusesOptionPromoLinkWeight,
                                                  bonusesOptionValueWeight:
                                                    v.bonusesOptionValueWeight,
                                                  bonusesOptionIsShowSum:
                                                    v.bonusesOptionIsShowSum,
                                                  bonusesOptionTextSize:
                                                    v.bonusesOptionTextSize,
                                                  bonusesOptionTheme:
                                                    v.bonusesOptionTheme,
                                                },
                                                null,
                                                8,
                                                [
                                                  "item",
                                                  "promoLink",
                                                  "bonusesOptionPromoLinkWeight",
                                                  "bonusesOptionValueWeight",
                                                  "bonusesOptionIsShowSum",
                                                  "bonusesOptionTextSize",
                                                  "bonusesOptionTheme",
                                                ]
                                              ),
                                            ]
                                        ),
                                        _: 1,
                                      },
                                      8,
                                      ["options"]
                                    ),
                                  ]
                              ),
                              _: 2,
                            },
                            [
                              v.isShowBottom
                                ? {
                                    name: "bottom",
                                    fn: s(
                                      () =>
                                        $_$() && [
                                          z("div", Po, [
                                            d(
                                              D,
                                              { to: p.promo, custom: "" },
                                              {
                                                default: s(
                                                  ({ href: B, navigate: A }) =>
                                                    $_$() && [
                                                      d(
                                                        N,
                                                        {
                                                          onClick: (J) => {
                                                            P(), A(J);
                                                          },
                                                          tag: "a",
                                                          theme:
                                                            o(H)
                                                              .accentSecondary,
                                                          href: B,
                                                          uppercase: !1,
                                                          block: "",
                                                          class:
                                                            "bonuses-dropdown__button",
                                                        },
                                                        {
                                                          default: s(
                                                            () =>
                                                              $_$() && [
                                                                d(
                                                                  C,
                                                                  {
                                                                    size: o(I)
                                                                      .m,
                                                                  },
                                                                  {
                                                                    default: s(
                                                                      () =>
                                                                        $_$() && [
                                                                          y(
                                                                            w(
                                                                              v.$T(
                                                                                "main_promocode_shop"
                                                                              )
                                                                            ),
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
                                                          _: 2,
                                                        },
                                                        1032,
                                                        [
                                                          "onClick",
                                                          "theme",
                                                          "href",
                                                        ]
                                                      ),
                                                    ]
                                                ),
                                                _: 2,
                                              },
                                              1032,
                                              ["to"]
                                            ),
                                          ]),
                                        ]
                                    ),
                                    key: "0",
                                  }
                                : void 0,
                            ]
                          ),
                          1024
                        ))
                      : (m(),
                        f(
                          C,
                          {
                            key: 1,
                            size: o(I).xs,
                            class: "bonuses-dropdown__message",
                          },
                          {
                            default: s(
                              () =>
                                $_$() && [
                                  (m(),
                                  f(
                                    Ht(o(g).component),
                                    qt(o(g).props, {
                                      class: [
                                        { "bonuses-dropdown__link": o(c) },
                                        "bonuses-dropdown__link",
                                      ],
                                    }),
                                    {
                                      default: s(
                                        () =>
                                          $_$() && [
                                            y(
                                              w(
                                                v.$T(
                                                  "header_bonus_use_bonus_points_for_new_bets"
                                                )
                                              ),
                                              1
                                            ),
                                          ]
                                      ),
                                      _: 1,
                                    },
                                    16,
                                    ["class"]
                                  )),
                                ]
                            ),
                            _: 1,
                          },
                          8,
                          ["size"]
                        )),
                  ]
              ),
              _: 3,
            },
            8,
            ["loading", "align"]
          )
        );
      };
    },
  }),
  Ho = L(Wo, [["__scopeId", "data-v-007fa420"]]),
  qo = $({
    __name: "Bonuses",
    props: { theme: {} },
    async setup(e) {
      $_$();
      let t, i, l, n;
      const {
          config: {
            bonusesDropdownIsShowBonusLink: r,
            bonusesDropdownIsShowBottom: a,
            bonusesIsShowAccountSelectToggleInColumn: c,
            bonusesOptionPromoLinkWeight: p,
            bonusesOptionValueWeight: g,
            bonusesOptionIsShowSum: T,
            bonusesOptionTextSize: U,
            bonusesOptionTheme: h,
            bonusesIsShowTpBonusesBalance: O,
            bonusesSize: v,
            bonusesTextSize: k,
          },
          style: E,
        } = (([l, n] = Be(() => po())),
        (l = (([t, i] = K(() => l)), (t = await t), i(), t)),
        n(),
        l)(),
        C = `bonuses--size-${v}`,
        N = ne(810),
        D = q(),
        F = We(),
        P = _(() => F.mainAccount),
        B = _(() => F.getBonuses.reduce((R, x) => R + x.money, 0)),
        A = _(() => {
          $_$();
          var R;
          return O ? B : (R = o(P)) == null ? void 0 : R.points;
        }),
        J = _(() => F.activeCurrencyIso),
        ie = _(() =>
          $_$() && O ? `${D("header_bonus_account_short")} (${o(J)})` : D(N)
        );
      return (R, x) => {
        $_$();
        const Y = pe("tooltip");
        return (
          m(),
          V("div", { class: W(["bonuses", C]) }, [
            d(
              Ho,
              {
                isShowBonusLink: o(r),
                isShowBottom: o(a),
                bonusesOptionPromoLinkWeight: o(p),
                bonusesOptionValueWeight: o(g),
                bonusesOptionIsShowSum: o(T),
                bonusesOptionTextSize: o(U),
                bonusesOptionTheme: o(h),
                style: jt(o(E)),
              },
              {
                trigger: s(
                  ({ isOpen: b, onToggle: j }) =>
                    $_$() && [
                      se(
                        (m(),
                        f(
                          So,
                          {
                            onClick: (ge) => j(),
                            isToggled: b,
                            "aria-expanded": b,
                            "aria-label": R.$T("header_bonus_account"),
                            column: o(c),
                            theme: R.theme,
                            size: o(v),
                            textSize: o(k),
                            class: "bonuses__trigger",
                          },
                          {
                            name: s(() => $_$() && [y(w(o(ie)), 1)]),
                            value: s(() => $_$() && [y(w(o(A)), 1)]),
                            _: 2,
                          },
                          1032,
                          [
                            "onClick",
                            "isToggled",
                            "aria-expanded",
                            "aria-label",
                            "column",
                            "theme",
                            "size",
                            "textSize",
                          ]
                        )),
                        [
                          [
                            Y,
                            !b && {
                              content: R.$T("header_bonus_account"),
                              classes: ["u-nowrap"],
                            },
                          ],
                        ]
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              [
                "isShowBonusLink",
                "isShowBottom",
                "bonusesOptionPromoLinkWeight",
                "bonusesOptionValueWeight",
                "bonusesOptionIsShowSum",
                "bonusesOptionTextSize",
                "bonusesOptionTheme",
                "style",
              ]
            ),
          ])
        );
      };
    },
  }),
  yn = L(qo, [["__scopeId", "data-v-35635e16"]]),
  jo = () =>
    $_$() &&
    Qt({
      name: "USER_QUESTION_MODAL",
      component: () =>
        uo(
          () => import("./c203b01c8b.js"),
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
          import.meta.url
        ),
      componentLoader: Xt,
    }),
  bn = () => {
    $_$();
    const e = me(),
      t = Kt();
    return {
      openQuestion: () => {
        e.modules.header.trackMainCallback(), t.show(jo());
      },
    };
  },
  vn = () => {
    $_$();
    const [e, t, i = ""] = ue(63, 64, 1849),
      l = de(),
      n = mo(i),
      r = _(() => l.isUserAuth),
      a = _(() => $_$() && n && o(r) && e);
    return {
      isShowCallback: _(() => $_$() && o(a) && !t),
      userCanUseCallback: a,
    };
  },
  Qo = (e) => {
    var t;
    return (t = e == null ? void 0 : e.map(Number)) != null ? t : [];
  },
  ee = {
    2: {
      positive: { value: 1.5, label: "+150" },
      negative: { value: 2, label: "-200" },
    },
    1: { value: 2.5, label: "5/2" },
    0: { value: 2.5, label: "2.5" },
  },
  ve = (e) => {
    var t, i;
    return Number(
      (i = (t = String(e).split(".")[1]) == null ? void 0 : t.length) != null
        ? i
        : 0
    );
  },
  Ge = (e, t) => {
    const i = Math.max(ve(e), ve(t));
    return Number((e + t).toFixed(i));
  },
  we = (e, t) => {
    const i = ve(e) + ve(t);
    return Number((e * t).toFixed(i));
  },
  Xo = () => {
    $_$();
    const e = q(),
      [t, i] = ue(-1008, 2214),
      { minSumBet: l, code: n } = t,
      r = e("settings_coef_description_american_2", {
        currency: n,
        coef: ee[2].positive.label,
        min_sum: l,
        win_sum: we(l, ee[2].positive.value),
      }),
      a = e("settings_coef_description_american_3", {
        currency: n,
        coef: ee[2].negative.label,
        min_sum: we(l, ee[2].negative.value),
        win_sum: l,
      }),
      c = we(l, ee[1].value),
      p = e("settings_coef_description_uk", {
        currency: n,
        coef: ee[1].label,
        min_sum: l,
        payout_sum: Ge(c, l),
        win_sum: c,
      }),
      g = we(l, ee[0].value),
      T = e("settings_coef_description_decimal", {
        currency: n,
        coef: ee[0].label,
        min_sum: l,
        payout_sum: g,
        win_sum: Ge(g, -l),
      });
    return {
      coefficientsInfoMap: {
        2: {
          content: `
                        ${e("settings_coef_description_american_1")}
                        <ul>
                            <li>${r}</li>
                            <li>${a}</li>
                        </ul>
                    `,
          ariaLabel: `${e("settings_coef_description_american_1")} ${r} ${a}`,
        },
        1: { content: p, ariaLabel: p },
        0: { content: T, ariaLabel: T },
      },
      showCoefInfo: i,
    };
  },
  Ko = () => {
    $_$();
    const e = de(),
      t = q(),
      i = Qo(ne(61)),
      l = _(() => e.isAsianView),
      { coefficientsInfoMap: n, showCoefInfo: r } = Xo(),
      a = t(
        r ? "settings_format_coef_american_v2" : "settings_format_coef_american"
      );
    return _(
      () =>
        $_$() &&
        [
          {
            caption: a,
            description: "+120",
            visible: i.includes(2),
            value: 2,
            info: n[2],
          },
          {
            caption: t("settings_format_coef_english"),
            description: "+6/5",
            visible: i.includes(1),
            value: 1,
            info: n[1],
          },
          {
            caption: t("settings_format_coef_decimal"),
            description: "2.2",
            visible: i.includes(0),
            value: 0,
            info: n[0],
          },
          {
            caption: t("settings_format_coef_hongkong"),
            description: "1.2*",
            visible: i.includes(4),
            value: o(l) ? 14 : 4,
          },
          {
            caption: t("settings_format_coef_indonesian"),
            description: "1.2*",
            visible: i.includes(5),
            value: o(l) ? 15 : 5,
          },
          {
            caption: t("settings_format_coef_malaysian"),
            description: "-0.834",
            visible: i.includes(6),
            value: o(l) ? 16 : 6,
          },
        ].filter(({ visible: c }) => c)
    );
  },
  Yo = { class: "dropdown-form-section" },
  Zo = { class: "dropdown-form-section__header" },
  Jo = { class: "dropdown-form-section__content" },
  xo = $({
    __name: "DropdownFormSection",
    props: {
      titleColor: { default: te.clr },
      titleUppercase: { type: Boolean, default: !0 },
    },
    setup(e) {
      return (t, i) => {
        $_$();
        const l = u("UiCaption");
        return (
          m(),
          V("fieldset", Yo, [
            z("legend", Zo, [
              d(
                l,
                {
                  size: o(I).xs,
                  uppercase: t.titleUppercase,
                  color: t.titleColor,
                },
                {
                  default: s(
                    () => $_$() && [ke(t.$slots, "title", {}, void 0, !0)]
                  ),
                  _: 3,
                },
                8,
                ["size", "uppercase", "color"]
              ),
            ]),
            z("div", Jo, [ke(t.$slots, "default", {}, void 0, !0)]),
          ])
        );
      };
    },
  }),
  he = L(xo, [["__scopeId", "data-v-136134d5"]]),
  es = $({
    name: "ViewSettingsCoefficientsFormat_F",
    components: { DropdownFormSection: he },
    props: {
      modelValue: { type: Number, required: !0 },
      inputSelectTheme: { type: String, default: He },
      optionsTheme: { type: String, default: H.gray100 },
      multiSelectTheme: { type: String, default: H.gray },
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      $_$();
      const i = de(),
        l = _(() => i.isRtl),
        n = Ko(),
        [r] = ue(2214),
        a = (h) => h === e.modelValue,
        c = _(() => $_$() && o(n).find((h) => h.value === e.modelValue)),
        p = ({ value: h }) => {
          t("update:modelValue", h);
        },
        g = { searchable: !1 },
        T = _(() => ({
          [`view-settings-coefficients-format-option--theme-${e.inputSelectTheme}`]:
            !!e.inputSelectTheme,
        })),
        U = _(
          () =>
            $_$() && {
              container: ".view-settings-coefficients-format",
              classes: ["view-settings-coefficients-format__tooltip"],
              placement: `bottom-${o(l) ? "start" : "end"}`,
              boundariesElement: "window",
            }
        );
      return {
        options: n,
        sizeType: I,
        currentValue: c,
        isSelected: a,
        onInputSelect: p,
        configSelect: g,
        viewSettingsCoefficientsFormatOptionClasses: T,
        iconName: Z,
        infoTooltipOptions: U,
        showCoefInfo: r,
      };
    },
  }),
  ts = { class: "view-settings-coefficients-format-option__caption" },
  os = { class: "view-settings-coefficients-format-option__description" },
  ss = { class: "view-settings-coefficients-format-option__caption" },
  ns = { class: "view-settings-coefficients-format-option__description" },
  is = ["aria-label"];
function as(e, t, i, l, n, r) {
  $_$();
  const a = u("UiSelectValue"),
    c = u("UiIcoV2"),
    p = u("UiOption"),
    g = u("UiInputSelect"),
    T = u("DropdownFormSection"),
    U = pe("tooltip");
  return (
    m(),
    f(
      T,
      { class: "view-settings-coefficients-format" },
      {
        title: s(() => $_$() && [y(w(e.$T("settings_format_coef")), 1)]),
        default: s(
          () =>
            $_$() && [
              d(
                g,
                {
                  "onUpdate:modelValue": e.onInputSelect,
                  modelValue: e.currentValue,
                  options: e.options,
                  config: e.configSelect,
                  theme: e.inputSelectTheme,
                  uiSelectOptionTheme: e.optionsTheme,
                  uiMultiSelectTheme: e.multiSelectTheme,
                  class: W([
                    e.viewSettingsCoefficientsFormatOptionClasses,
                    "view-settings-coefficients-format-option",
                  ]),
                },
                {
                  customSingleLabel: s(
                    ({ option: h }) =>
                      $_$() && [
                        d(
                          a,
                          null,
                          {
                            default: s(
                              () =>
                                $_$() && [
                                  z("span", ts, w(h.caption), 1),
                                  z(
                                    "span",
                                    os,
                                    " (" + w(h.description) + ") ",
                                    1
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1024
                        ),
                      ]
                  ),
                  customOption: s(
                    ({ option: h }) =>
                      $_$() && [
                        d(
                          p,
                          {
                            theme: e.optionsTheme,
                            isSelected: e.isSelected(h.value),
                          },
                          {
                            default: s(
                              () =>
                                $_$() && [
                                  z("span", ss, w(h.caption), 1),
                                  z(
                                    "span",
                                    ns,
                                    " (" + w(h.description) + ") ",
                                    1
                                  ),
                                  e.showCoefInfo && h.info
                                    ? se(
                                        (m(),
                                        V(
                                          "button",
                                          {
                                            key: 0,
                                            "aria-label": h.info.ariaLabel,
                                            type: "button",
                                            class:
                                              "view-settings-coefficients-format-option__info",
                                          },
                                          [
                                            d(
                                              c,
                                              {
                                                ico: e.iconName
                                                  .CIRCLE_INFO_SOLID,
                                                size: e.sizeType.xs,
                                              },
                                              null,
                                              8,
                                              ["ico", "size"]
                                            ),
                                          ],
                                          8,
                                          is
                                        )),
                                        [
                                          [
                                            U,
                                            {
                                              ...h.info,
                                              ...e.infoTooltipOptions,
                                            },
                                          ],
                                        ]
                                      )
                                    : M("", !0),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          ["theme", "isSelected"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                [
                  "onUpdate:modelValue",
                  "modelValue",
                  "options",
                  "config",
                  "theme",
                  "uiSelectOptionTheme",
                  "uiMultiSelectTheme",
                  "class",
                ]
              ),
            ]
        ),
        _: 1,
      }
    )
  );
}
const ls = L(es, [
    ["render", as],
    ["__scopeId", "data-v-955cd9f8"],
  ]),
  rs = () => {
    $_$();
    var e;
    const t = q(),
      i = de(),
      l = (e = ne(153)) != null ? e : [],
      n = l.includes("isAccumulatorOfTheDayEnabled"),
      r = l.includes("isLiveAccumulatorOfTheDayEnabled"),
      a = _(() => i.isAccumulatorOfTheDayEnabled && n),
      c = _(() => i.isLiveAccumulatorOfTheDayEnabled && r);
    return {
      expressDaySettings: [
        {
          value: "isLiveAccumulatorOfTheDayEnabled",
          caption: t("settings_other_live_accumulator_of_the_day"),
        },
        {
          value: "isAccumulatorOfTheDayEnabled",
          caption: t("settings_other_accumulator_of_the_day"),
        },
      ],
      isAccumulatorOfTheDayEnabled: a,
      isLiveAccumulatorOfTheDayEnabled: c,
    };
  },
  cs = (e) => {
    $_$();
    var t;
    const i = q(),
      l = (t = ne(153)) != null ? t : [],
      n = Se("updateSettings"),
      r = Se("discardUnsavedSettings"),
      a = ({ settingsProp: g, checked: T }) => {
        const U = { [g]: !T };
        n(U);
      },
      { expressDaySettings: c } = rs(),
      p = _(() =>
        [
          ...c.map(({ value: g, caption: T }) => ({
            settingsProp: g,
            caption: T,
            title: "",
          })),
          {
            settingsProp: "isDisplayStatsInNewWindowEnabled",
            caption: i("settings_other_display_stats_in_new_window"),
            title: "",
          },
          {
            settingsProp: "isMoveVideoOnScrollEnabled",
            caption: i("settings_other_move_video_on_scroll"),
            title: i("settings_other_move_video_on_scroll_title"),
          },
          {
            settingsProp: "isShowGameIdEnabled",
            caption: i("settings_other_show_game_id"),
            title: "",
          },
          {
            settingsProp: "zoneState",
            caption: i("settings_other_zone_off"),
            title: "",
          },
          {
            settingsProp: "isVisuallyImpairedModeEnabled",
            caption: i(
              "settings_other_market_version_for_the_visually_impaired"
            ),
            title: "",
          },
        ]
          .map((g) => ({ ...g, checked: e.settings[g.settingsProp] }))
          .filter(({ settingsProp: g }) => l.includes(g))
      );
    return (
      qe(r), { viewOtherSettingsOptions: p, viewOtherSettingsOnInputChange: a }
    );
  },
  ps = $({
    name: "ViewSettingsOther",
    components: { DropdownFormSection: he },
    props: {
      settings: { type: Object, required: !0 },
      titleColor: { type: String, default: te.clr },
      titleUppercase: { type: Boolean, default: !0 },
      uiSelectionTheme: { type: String, default: re.UiSelection },
    },
    setup(e) {
      $_$();
      const { viewOtherSettingsOptions: t, viewOtherSettingsOnInputChange: i } =
        cs(e);
      return {
        viewOtherSettingsOptions: t,
        viewOtherSettingsOnInputChange: i,
        sizeType: I,
        applicationSettingsPanelColorScheme: re,
      };
    },
  }),
  ds = { class: "view-settings-other__selections" };
function us(e, t, i, l, n, r) {
  $_$();
  const a = u("UiCaption"),
    c = u("UiSelection"),
    p = u("DropdownFormSection");
  return (
    m(),
    f(
      p,
      {
        class: "view-settings-other",
        titleColor: e.titleColor,
        titleUppercase: e.titleUppercase,
      },
      {
        title: s(() => $_$() && [y(w(e.$T("settings_other")), 1)]),
        default: s(
          () =>
            $_$() && [
              z("div", ds, [
                (m(!0),
                V(
                  ce,
                  null,
                  Ce(
                    e.viewOtherSettingsOptions,
                    (g) =>
                      $_$() &&
                      (m(),
                      f(
                        c,
                        {
                          key: g.settingsProp,
                          "onUpdate:modelValue": (T) =>
                            e.viewOtherSettingsOnInputChange(g),
                          type: "checkbox",
                          modelValue: g.checked,
                          theme: e.uiSelectionTheme,
                        },
                        {
                          default: s(
                            () =>
                              $_$() && [
                                d(
                                  a,
                                  { size: e.sizeType.xs, title: g.title },
                                  {
                                    default: s(
                                      () => $_$() && [y(w(g.caption), 1)]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  ["size", "title"]
                                ),
                              ]
                          ),
                          _: 2,
                        },
                        1032,
                        ["onUpdate:modelValue", "modelValue", "theme"]
                      ))
                  ),
                  128
                )),
              ]),
            ]
        ),
        _: 1,
      },
      8,
      ["titleColor", "titleUppercase"]
    )
  );
}
const ms = L(ps, [
    ["render", us],
    ["__scopeId", "data-v-0cd1f249"],
  ]),
  gs = [
    "isLiveAccumulatorOfTheDayEnabled",
    "isAccumulatorOfTheDayEnabled",
    "isDisplayStatsInNewWindowEnabled",
    "isMoveVideoOnScrollEnabled",
    "isShowGameIdEnabled",
    "zoneState",
    "isVisuallyImpairedModeEnabled",
  ],
  _s = { 0: { 14: 4, 15: 5, 16: 6 }, 1: { 4: 14, 5: 15, 6: 16 } },
  Ss = Object.assign({}, ...Object.values(_s));
be.full, be.short;
const ot = () => {
    $_$();
    const e = Yt(),
      t = de(),
      i = me(),
      l = je(),
      { is12h: n } = Qe(),
      r = _({
        get: () => t.getAppViewType,
        set: (S) => t.installAppViewType(S),
      }),
      a = _({
        get: () => t.getCoefficientIndicationType,
        set: (S) => t.installAppCoefficientChangeIndicationType(S),
      }),
      c = _({
        get: () => t.getCoefViewId,
        set: (S) => {
          t.installAppCoefView(S);
        },
      }),
      p = _({
        get: () => t.getMarketDisplaySettings,
        set: (S) => t.installMarketDisplaySettings(S),
      }),
      g = _({ get: () => t.getAppTheme, set: (S) => t.installAppTheme(S) }),
      T = _({
        get: () => t.getAppFontSize,
        set: (S) => t.installAppFontSize(S),
      }),
      U = _({
        get: () => t.isAppCompactViewEnabled,
        set: (S) => t.installAppCompactViewState(S),
      }),
      h = _({
        get: () => t.isLiveAccumulatorOfTheDayEnabled,
        set: (S) => t.installLiveAccumulatorOfTheDayState(S),
      }),
      O = _({
        get: () => t.isAccumulatorOfTheDayEnabled,
        set: (S) => t.installAccumulatorOfTheDayState(S),
      }),
      v = _({
        get: () => t.isBetGeneratorEnabled,
        set: (S) => t.installBetGeneratorState(S),
      }),
      k = _({
        get: () => t.isShowSportsOnlyEnabled,
        set: (S) => t.installShowSportsOnlyState(S),
      }),
      E = _({
        get: () => t.isShowGameIdEnabled,
        set: (S) => t.installShowGameIdState(S),
      }),
      C = _({
        get: () => t.isBestMatchesOnTopEnabled,
        set: (S) => t.installBestMatchesOnTopState(S),
      }),
      N = _({
        get: () => t.isDetailedScoreEnabled,
        set: (S) => t.installDetailedScoreState(S),
      }),
      D = _({
        get: () => t.isDisplayStatsInNewWindowEnabled,
        set: (S) => t.installDisplayStatsInNewWindowState(S),
      }),
      F = _({
        get: () => t.isTeamLogosInCouponEnabled,
        set: (S) => t.installTeamLogosInCouponState(S),
      }),
      P = _({
        get: () => t.isAppLightVersionEnabled,
        set: (S) => t.installAppLightVersionState(S),
      }),
      B = _({
        get: () => t.isMoveVideoOnScrollEnabled,
        set: (S) => t.installMoveVideoOnScrollState(S),
      }),
      A = _({
        get: () => t.visuallyImpairedMode,
        set: (S) => t.installVisuallyImpairedModeState(S),
      }),
      J = _({
        get: () => t.marketsNameType,
        set: (S) => t.installMarketsNameType(S),
      }),
      ie = _({ get: () => !!t.zoneState, set: (S) => t.installZoneState(S) }),
      R = _({
        get: () => !!t.getIsGroupByCountry,
        set: (S) => t.installIsGroupByCountry(S),
      }),
      x = () =>
        $_$() && {
          viewType: o(r),
          indicationType: o(a),
          coefficientViewId: o(c),
          marketDisplaySettings: o(p),
          theme: o(g),
          fontSize: o(T),
          isAppCompactViewEnabled: o(U),
          isLiveAccumulatorOfTheDayEnabled: o(h),
          isAccumulatorOfTheDayEnabled: o(O),
          isBetGeneratorEnabled: o(v),
          isShowSportsOnlyEnabled: o(k),
          isShowGameIdEnabled: o(E),
          isBestMatchesOnTopEnabled: o(C),
          isDetailedScoreEnabled: o(N),
          isDisplayStatsInNewWindowEnabled: o(D),
          isTeamLogosInCouponEnabled: o(F),
          isAppLightVersionEnabled: o(P),
          isMoveVideoOnScrollEnabled: o(B),
          isVisuallyImpairedModeEnabled: o(A),
          marketsNameType: o(J),
          zoneState: o(ie),
          timeFormat: o(n) ? "12" : "24",
          isGroupByCountry: o(R),
        },
      Y = x(),
      b = Zt(x()),
      j = (S = {}) => {
        $_$();
        Object.assign(o(b), S);
      },
      ge = (S) => {
        $_$();
        try {
          if (
            ((r.value = b.viewType),
            (a.value = b.indicationType),
            (c.value = b.coefficientViewId),
            (p.value = b.marketDisplaySettings),
            (g.value = b.theme),
            (T.value = b.fontSize),
            (U.value = b.isAppCompactViewEnabled),
            (h.value = b.isLiveAccumulatorOfTheDayEnabled),
            (O.value = b.isAccumulatorOfTheDayEnabled),
            (v.value = b.isBetGeneratorEnabled),
            (k.value = b.isShowSportsOnlyEnabled),
            (E.value = b.isShowGameIdEnabled),
            (C.value = b.isBestMatchesOnTopEnabled),
            (N.value = b.isDetailedScoreEnabled),
            (D.value = b.isDisplayStatsInNewWindowEnabled),
            (F.value = b.isTeamLogosInCouponEnabled),
            (P.value = b.isAppLightVersionEnabled),
            (B.value = b.isMoveVideoOnScrollEnabled),
            (A.value = b.isVisuallyImpairedModeEnabled),
            (J.value = b.marketsNameType),
            (ie.value = b.zoneState),
            (n.value = b.timeFormat === "12"),
            (R.value = b.isGroupByCountry),
            Y.viewType !== b.viewType)
          ) {
            const Q = Ss[t.getCoefViewId];
            Jt(Q) && (c.value = Q);
          }
          const oe = [];
          e.emit("viewSettingsUpdated"),
            Y.coefficientViewId !== b.coefficientViewId &&
              (i.modules.header.saveCoefView(b.coefficientViewId),
              i.modules.office.trackAccSettingsCoeffSet(b.coefficientViewId)),
            Y.marketsNameType !== b.marketsNameType &&
              (i.modules.header.saveMarketNamesFormat(b.marketsNameType),
              i.modules.office.trackAccSettingsMarkersNameSet(
                b.marketsNameType
              )),
            gs.forEach((Q) => {
              b[Q] && oe.push(Q),
                Y[Q] !== b[Q] &&
                  i.modules.header.saveOtherSettingFormat(Q, b[Q]);
            }),
            i.modules.office.trackAccSettingsRateSet(oe),
            Object.assign(Y, b);
        } catch (oe) {
          l.error("Error while saving settings", oe);
        } finally {
          S();
        }
      };
    return (
      _e(h, (S) => {
        j({ isLiveAccumulatorOfTheDayEnabled: S });
      }),
      _e(O, (S) => {
        j({ isAccumulatorOfTheDayEnabled: S });
      }),
      _e(c, (S) => {
        j({ coefficientViewId: S });
      }),
      _e(r, (S) => {
        j({ viewType: S });
      }),
      _e(R, (S) => {
        j({ isGroupByCountry: S });
      }),
      {
        settings: b,
        updateSettings: j,
        saveSettings: ge,
        setSettingsFromStore: x,
      }
    );
  },
  { inject: Cn, provide: Un } = To(ot),
  fs = (e) => {
    var t;
    return (t = e == null ? void 0 : e.map(Number)) != null ? t : [0];
  },
  hs = () => {
    $_$();
    const e = q(),
      t = fs(ne(325)),
      i = [
        { caption: e("european"), value: 0, visible: !0 },
        { caption: e("asian"), value: 1, visible: t.includes(1) },
      ].filter(({ visible: n }) => n),
      l = _(() => $_$() && o(i).length > 1);
    return { siteViewOptions: i, isViewOptionsVisible: l };
  },
  st = Xe(() => {
    $_$();
    const [e, t] = ue(608, 606),
      i = Ke(),
      l = Ye(),
      n = e && t,
      r = fe(n);
    return (
      Ze().bind("decorationToggle", r, !0),
      {
        isShowDecorationToggle: n,
        isTurnedOn: r,
        toggleDecors: async () => {
          $_$();
          let p, g;
          try {
            (r.value = !r.value),
              ([p, g] = K(
                () => $_$() && i.setItem(X.DECORATIONS_STATE, r.value)
              )),
              await p,
              g();
          } catch (T) {
            l.error(`Cannot set ${X.DECORATIONS_STATE} to the appStorage`, T);
          }
        },
        getDecorsState: async () => {
          $_$();
          var p;
          let g, T;
          if (n)
            try {
              r.value =
                (p =
                  (([g, T] = K(() => $_$() && i.getItem(X.DECORATIONS_STATE))),
                  (g = await g),
                  T(),
                  g)) != null
                  ? p
                  : !0;
            } catch (U) {
              l.error(
                `Cannot get ${X.DECORATIONS_STATE} from the appStorage`,
                U
              );
            }
        },
      }
    );
  }),
  ws = $({
    name: "ViewSettingsDecorToggle",
    setup() {
      $_$();
      const e = q(),
        { isTurnedOn: t, toggleDecors: i, getDecorsState: l } = st(),
        n = _(() =>
          $_$() && o(t)
            ? e("main-new-year-quest-inactive-garland")
            : e("main-new-year-quest-active-garland")
        );
      return (
        Oe(l),
        {
          SelectionType: Je,
          isTurnedOn: t,
          decorToggleText: n,
          sizeType: I,
          toggleDecors: i,
          MEDIA_EXTENSIONS: Ie,
        }
      );
    },
  }),
  Ts = { class: "view-settings-decor-toggle" },
  ys = ["src"];
function bs(e, t, i, l, n, r) {
  $_$();
  const a = u("UiCaption"),
    c = u("UiSelection");
  return (
    m(),
    V("div", Ts, [
      d(
        c,
        {
          onChange: e.toggleDecors,
          modelValue: e.isTurnedOn,
          type: e.SelectionType.TUMBLER,
          size: e.sizeType.s,
          hasInnerOffset: !1,
          name: "menu-decor-toggle",
          class: "view-settings-decor-toggle__tumbler",
        },
        {
          default: s(
            () =>
              $_$() && [
                d(
                  a,
                  { size: e.sizeType.xs },
                  {
                    default: s(() => $_$() && [y(w(e.decorToggleText), 1)]),
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
        ["onChange", "modelValue", "type", "size"]
      ),
      z(
        "img",
        {
          src: e.$mediaUrl(
            "partners_event_holiday_decor_thumbler_settings",
            e.MEDIA_EXTENSIONS.SVG
          ),
          alt: "",
          class: "view-settings-decor-toggle__img",
        },
        null,
        8,
        ys
      ),
    ])
  );
}
const vs = L(ws, [
    ["render", bs],
    ["__scopeId", "data-v-9c5e62c6"],
  ]),
  Cs = Xe(() => {
    $_$();
    const e = Ke(),
      t = Ye(),
      i = Ze(),
      l = fe(!1);
    return {
      isTurnedOn: l,
      toggleConfettiState: async (a) => {
        $_$();
        let c, p;
        try {
          ([c, p] = K(() => $_$() && e.setItem(X.CONFETTI_STATE, a))),
            await c,
            p(),
            i.set(X.CONFETTI_STATE, a),
            (l.value = a);
        } catch (g) {
          t.error(`Cannot set ${X.CONFETTI_STATE} to the appStorage`, g);
        }
      },
      setConfettiState: async () => {
        $_$();
        var a, c;
        let p, g;
        try {
          (l.value =
            (a =
              (([p, g] = K(() => $_$() && e.getItem(X.CONFETTI_STATE))),
              (p = await p),
              g(),
              p)) != null
              ? a
              : !0),
            i.set(
              X.CONFETTI_STATE,
              (c =
                (([p, g] = K(() => $_$() && e.getItem(X.CONFETTI_STATE))),
                (p = await p),
                g(),
                p)) != null
                ? c
                : !0
            );
        } catch (T) {
          t.error(`Cannot get ${X.CONFETTI_STATE} from the appStorage`, T);
        }
      },
    };
  }),
  Us = $({
    name: "ViewSettingsConfettiToggle",
    setup() {
      $_$();
      const e = q(),
        { isTurnedOn: t, toggleConfettiState: i, setConfettiState: l } = Cs(),
        n = _(() =>
          $_$() && o(t)
            ? e("main_inactive_confetti")
            : e("main_active_confetti")
        );
      return (
        Oe(l),
        {
          SelectionType: Je,
          isTurnedOn: t,
          confettiToggleText: n,
          sizeType: I,
          toggleConfettiState: i,
          MEDIA_EXTENSIONS: Ie,
        }
      );
    },
  }),
  Os = { class: "view-settings-confetti-toggle" },
  Is = ["srcset"],
  Ds = ["src"];
function zs(e, t, i, l, n, r) {
  $_$();
  const a = u("UiCaption"),
    c = u("UiSelection");
  return (
    m(),
    V("div", Os, [
      d(
        c,
        {
          onChange:
            t[0] || (t[0] = (p) => e.toggleConfettiState(!e.isTurnedOn)),
          modelValue: e.isTurnedOn,
          type: e.SelectionType.TUMBLER,
          size: e.sizeType.s,
          hasInnerOffset: !1,
          name: "menu-confetti-toggle",
          class: "view-settings-confetti-toggle__tumbler",
        },
        {
          default: s(
            () =>
              $_$() && [
                d(
                  a,
                  { size: e.sizeType.xs },
                  {
                    default: s(() => $_$() && [y(w(e.confettiToggleText), 1)]),
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
        ["modelValue", "type", "size"]
      ),
      z("picture", null, [
        z(
          "source",
          {
            srcset: e.$mediaUrl(
              "partners_event_holiday_confetti_thumbler_settings",
              e.MEDIA_EXTENSIONS.WEBP
            ),
            type: "image/webp",
          },
          null,
          8,
          Is
        ),
        z(
          "img",
          {
            src: e.$mediaUrl(
              "partners_event_holiday_confetti_thumbler_settings"
            ),
            alt: "",
            class: "view-settings-confetti-toggle__img",
          },
          null,
          8,
          Ds
        ),
      ]),
    ])
  );
}
const ks = L(Us, [
    ["render", zs],
    ["__scopeId", "data-v-198c1fa5"],
  ]),
  Es = () => {
    $_$();
    const e = q();
    return _(() => [
      { caption: e("settings_time_format_24h"), value: "24" },
      { caption: e("settings_time_format_12h"), value: "12" },
    ]);
  },
  Bs = $({
    name: "ViewSettingsTimeFormat",
    components: { DropdownFormSection: he },
    props: { modelValue: { type: String, required: !0 } },
    emits: ["update:modelValue"],
    setup() {
      $_$();
      const e = Es(),
        t = Se("update:modelValue");
      return {
        sizeType: I,
        options: e,
        onInput: ({ value: l }) => {
          t(l);
        },
      };
    },
  }),
  Vs = { class: "view-settings-time-format__selections" };
function Ms(e, t, i, l, n, r) {
  $_$();
  const a = u("UiCaption"),
    c = u("UiSelection"),
    p = u("DropdownFormSection");
  return (
    m(),
    f(
      p,
      { class: "view-settings-time-format" },
      {
        title: s(() => $_$() && [y(w(e.$T("settings_time_format")), 1)]),
        default: s(
          () =>
            $_$() && [
              z("div", Vs, [
                (m(!0),
                V(
                  ce,
                  null,
                  Ce(
                    e.options,
                    (g) =>
                      $_$() &&
                      (m(),
                      f(
                        c,
                        {
                          key: g.value,
                          onChange: (T) => e.onInput(g),
                          value: g.value,
                          selectedValue: e.modelValue,
                          type: "radio",
                          name: "settings_time_format",
                          class: "view-settings-time-format__option",
                        },
                        {
                          default: s(
                            () =>
                              $_$() && [
                                d(
                                  a,
                                  { size: e.sizeType.xs },
                                  {
                                    default: s(
                                      () => $_$() && [y(w(g.caption), 1)]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  ["size"]
                                ),
                              ]
                          ),
                          _: 2,
                        },
                        1032,
                        ["onChange", "value", "selectedValue"]
                      ))
                  ),
                  128
                )),
              ]),
            ]
        ),
        _: 1,
      }
    )
  );
}
const $s = L(Bs, [
    ["render", Ms],
    ["__scopeId", "data-v-250b9f1e"],
  ]),
  As = (e) => {
    $_$();
    const t = fe(""),
      i = _(
        () =>
          $_$() &&
          o(e).map((r) => {
            const { value: a } = r,
              c = a > 0 ? `+${a}` : a.toString();
            return { ...r, zone: c };
          })
      ),
      l = _(
        () =>
          $_$() &&
          new ho(o(i), {
            ignoreLocation: !0,
            shouldSort: !1,
            threshold: 0.3,
            keys: ["caption", "zone"],
          })
      ),
      n = _(() =>
        $_$() && o(t)
          ? xt(
              o(l)
                .search(o(t))
                .map(({ item: r }) => r),
              o(t),
              "caption"
            )
          : o(e)
      );
    return {
      searchQuery: t,
      timezoneOptionsFiltered: n,
      normalizedTimezoneOptions: i,
    };
  },
  Ns = { timeSettingsDropdownLoaderStub: H.gray100 },
  Ls = $({
    name: "TimeSettingsDropdownLoaderStub",
    props: {
      theme: { type: String, default: Ns.timeSettingsDropdownLoaderStub },
    },
  });
function Fs(e, t, i, l, n, r) {
  $_$();
  const a = u("UiSkeleton");
  return (
    m(),
    f(
      a,
      {
        repeat: 5,
        class: "time-settings-dropdown-loader-stub",
        theme: e.theme,
      },
      {
        default: s(
          () =>
            ($_$() && t[0]) ||
            (t[0] = [
              z(
                "div",
                { class: "time-settings-dropdown-loader-stub__item" },
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
}
const Ps = L(Ls, [
    ["render", Fs],
    ["__scopeId", "data-v-d5c863e4"],
  ]),
  Rs = () => {
    $_$();
    const e = je(),
      t = eo();
    return {
      saveTimezoneOffset: async (l) => {
        $_$();
        let n, r;
        try {
          ([n, r] = K(() =>
            t("/web-api/user/timezone", {
              method: "post",
              params: { action: "save", val: l },
            }).execute()
          )),
            await n,
            r();
        } catch (a) {
          e.error("saveTimezoneOffset", a);
        }
      },
    };
  },
  Gs = ({ interval: e = 1e3 } = {}) => {
    $_$();
    const t = fe(Date.now()),
      i = _(() => $_$() && new Date(o(t))),
      l = new ze(),
      n = () => {
        t.value = Date.now();
      };
    let r;
    const a = () => clearInterval(r),
      c = () => {
        $_$();
        a(), (r = oo(n, e));
      };
    return (
      Oe(() => {
        $_$();
        c(), l.on(ze.LEAVING, a), l.on(ze.COME_BACK, c);
      }),
      to(() => {
        a();
      }),
      { date: i }
    );
  },
  Ws = { class: "user-control-external-btn__container" },
  Hs = $({
    __name: "UserControlExternalBtn",
    props: {
      link: {},
      icon: {},
      text: {},
      isAccentClr: { type: Boolean, default: !1 },
      icoPath: { default: so },
      hasVisibleText: { type: Boolean, default: !1 },
      newWindow: { type: Boolean, default: !0 },
      theme: { default: He },
      isAccentBg: { type: Boolean, default: !1 },
    },
    setup(e) {
      $_$();
      const t = e,
        i = _(() => ({ "user-control-external-btn--accent": t.isAccentClr })),
        l = _(() => (t.newWindow ? "_blank" : "_self")),
        n = q(),
        r = _(() => n(t.text) || t.text),
        a = _(() => ($_$() && t.isAccentBg ? H.accent : t.theme));
      return (c, p) => {
        $_$();
        const g = u("UiIco"),
          T = u("UiCaption"),
          U = u("UiButton"),
          h = Ee,
          O = pe("tooltip");
        return (
          m(),
          f(
            h,
            { to: c.link, custom: "" },
            {
              default: s(
                ({ href: v }) =>
                  $_$() && [
                    se(
                      (m(),
                      f(
                        U,
                        {
                          tag: "a",
                          target: o(l),
                          href: v,
                          "aria-label": o(r),
                          theme: o(a),
                          narrow: "",
                          uppercase: !1,
                          class: W(["user-control-external-btn", o(i)]),
                        },
                        ye({ _: 2 }, [
                          c.hasVisibleText
                            ? {
                                name: "container",
                                fn: s(
                                  () =>
                                    $_$() && [
                                      z("span", Ws, [
                                        d(
                                          g,
                                          {
                                            ico: c.icon,
                                            path: c.icoPath,
                                            class:
                                              "user-control-external-btn__icon",
                                          },
                                          null,
                                          8,
                                          ["ico", "path"]
                                        ),
                                        d(
                                          T,
                                          { size: o(I).xs },
                                          {
                                            default: s(
                                              () => $_$() && [y(w(o(r)), 1)]
                                            ),
                                            _: 1,
                                          },
                                          8,
                                          ["size"]
                                        ),
                                      ]),
                                    ]
                                ),
                                key: "0",
                              }
                            : {
                                name: "default",
                                fn: s(
                                  () =>
                                    $_$() && [
                                      d(
                                        g,
                                        {
                                          ico: c.icon,
                                          path: c.icoPath,
                                          class:
                                            "user-control-external-btn__icon",
                                        },
                                        null,
                                        8,
                                        ["ico", "path"]
                                      ),
                                    ]
                                ),
                                key: "1",
                              },
                        ]),
                        1032,
                        ["target", "href", "aria-label", "theme", "class"]
                      )),
                      [[O, o(r)]]
                    ),
                  ]
              ),
              _: 1,
            },
            8,
            ["to"]
          )
        );
      };
    },
  }),
  On = L(Hs, [["__scopeId", "data-v-468605d7"]]),
  qs = $({
    name: "TimeSettingsDropdown",
    components: { TimeSettingsDropdownLoaderStub: Ps },
    props: { optionMode: { type: Boolean, required: !1 } },
    setup(e) {
      $_$();
      const { directionDropdown: t, alignDropdown: i } = tt(e.optionMode),
        { date: l } = Gs(),
        n = no(),
        r = _(() => $_$() && n.formatTimeByDate(o(l))),
        a = me(),
        { loadTimezones: c, timezone: p, timezoneOptions: g } = Qe(),
        { searchQuery: T, timezoneOptionsFiltered: U } = As(g),
        { saveTimezoneOffset: h } = Rs();
      return {
        sizeType: I,
        alignDropdown: i,
        date: l,
        dateTimeService: n,
        directionDropdown: t,
        loadTimezones: c,
        searchQuery: T,
        setTimezone: async (v, k) => {
          $_$();
          let E, C;
          a.modules.header.setTimeZone(v.caption),
            (p.value = v.value),
            k(),
            ([E, C] = K(() => h(v.value))),
            await E,
            C();
        },
        timeFormatted: r,
        timezone: p,
        timezoneOptions: g,
        timezoneOptionsFiltered: U,
        iconName: Z,
        stopElements: Ue,
        applicationSettingsPanelColorScheme: re,
        applicationSettingsConfig: Ve,
      };
    },
  });
function js(e, t, i, l, n, r) {
  $_$();
  const a = u("UiIco"),
    c = u("UiOption"),
    p = u("UiCaption"),
    g = u("UiSearchButton"),
    T = u("UiSearch"),
    U = u("UiSelectItem"),
    h = u("UiSelectOptions"),
    O = u("UiEmptyMessage"),
    v = u("UiSelectContent"),
    k = u("TimeSettingsDropdownLoaderStub"),
    E = u("UiDropdownContent"),
    C = u("UiDropdown");
  return (
    m(),
    f(
      C,
      {
        onOpen: e.loadTimezones,
        align: e.alignDropdown,
        direction: e.directionDropdown,
        stopElementsStore: e.stopElements,
        triangle: e.applicationSettingsConfig.dropdownTriangle,
        triggerTooltip: e.$T("settings_time_zone_title"),
        theme: e.applicationSettingsPanelColorScheme.UiDropdown,
        inline: e.applicationSettingsConfig.dropdownInline,
        class: "time-settings-dropdown",
      },
      ye(
        {
          customContent: s(
            ({ close: N }) =>
              $_$() && [
                d(
                  E,
                  {
                    theme: e.applicationSettingsPanelColorScheme.UiDropdown,
                    class: "time-settings-dropdown__content",
                  },
                  {
                    default: s(
                      () =>
                        $_$() && [
                          e.timezoneOptions.length
                            ? (m(),
                              f(
                                v,
                                {
                                  key: 0,
                                  theme:
                                    e.applicationSettingsPanelColorScheme
                                      .UiSelectContent,
                                  scrollbarTheme:
                                    e.applicationSettingsPanelColorScheme
                                      .UiScrollbar,
                                },
                                {
                                  top: s(
                                    () =>
                                      $_$() && [
                                        d(
                                          T,
                                          {
                                            modelValue: e.searchQuery,
                                            "onUpdate:modelValue":
                                              t[0] ||
                                              (t[0] = (D) =>
                                                (e.searchQuery = D)),
                                            placeholder:
                                              e.$T("link_menu_search"),
                                            theme:
                                              e
                                                .applicationSettingsPanelColorScheme
                                                .UiSearch,
                                            isSearchButtonDisabled: "",
                                            class:
                                              "time-settings-dropdown-search",
                                          },
                                          ye({ _: 2 }, [
                                            e.applicationSettingsConfig
                                              .customSearchButtons
                                              ? {
                                                  name: "buttons",
                                                  fn: s(
                                                    () =>
                                                      $_$() && [
                                                        d(g, {
                                                          isDisabled: !0,
                                                          class:
                                                            "time-settings-dropdown-search__button",
                                                        }),
                                                      ]
                                                  ),
                                                  key: "0",
                                                }
                                              : void 0,
                                          ]),
                                          1032,
                                          ["modelValue", "placeholder", "theme"]
                                        ),
                                      ]
                                  ),
                                  default: s(
                                    () =>
                                      $_$() && [
                                        e.timezoneOptionsFiltered.length
                                          ? (m(),
                                            f(
                                              h,
                                              {
                                                key: 0,
                                                theme:
                                                  e
                                                    .applicationSettingsPanelColorScheme
                                                    .UiSelectOptions,
                                              },
                                              {
                                                default: s(
                                                  () =>
                                                    $_$() && [
                                                      (m(!0),
                                                      V(
                                                        ce,
                                                        null,
                                                        Ce(
                                                          e.timezoneOptionsFiltered,
                                                          (D) =>
                                                            $_$() &&
                                                            (m(),
                                                            f(
                                                              U,
                                                              {
                                                                key: D.caption,
                                                                onClick: (F) =>
                                                                  e.setTimezone(
                                                                    D,
                                                                    N
                                                                  ),
                                                              },
                                                              {
                                                                default: s(
                                                                  () =>
                                                                    $_$() && [
                                                                      d(
                                                                        c,
                                                                        {
                                                                          isSelected:
                                                                            D.value ===
                                                                            e.timezone,
                                                                          theme:
                                                                            e
                                                                              .applicationSettingsPanelColorScheme
                                                                              .UiOption,
                                                                          captionSize:
                                                                            e
                                                                              .applicationSettingsConfig
                                                                              .captionSize,
                                                                        },
                                                                        {
                                                                          caption:
                                                                            s(
                                                                              () =>
                                                                                $_$() && [
                                                                                  y(
                                                                                    w(
                                                                                      D.caption
                                                                                    ),
                                                                                    1
                                                                                  ),
                                                                                ]
                                                                            ),
                                                                          additional:
                                                                            s(
                                                                              () =>
                                                                                $_$() && [
                                                                                  d(
                                                                                    p,
                                                                                    {
                                                                                      size: e
                                                                                        .applicationSettingsConfig
                                                                                        .captionSize,
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        s(
                                                                                          () =>
                                                                                            $_$() && [
                                                                                              y(
                                                                                                w(
                                                                                                  D.description
                                                                                                ),
                                                                                                1
                                                                                              ),
                                                                                            ]
                                                                                        ),
                                                                                      _: 2,
                                                                                    },
                                                                                    1032,
                                                                                    [
                                                                                      "size",
                                                                                    ]
                                                                                  ),
                                                                                ]
                                                                            ),
                                                                          _: 2,
                                                                        },
                                                                        1032,
                                                                        [
                                                                          "isSelected",
                                                                          "theme",
                                                                          "captionSize",
                                                                        ]
                                                                      ),
                                                                    ]
                                                                ),
                                                                _: 2,
                                                              },
                                                              1032,
                                                              ["onClick"]
                                                            ))
                                                        ),
                                                        128
                                                      )),
                                                    ]
                                                ),
                                                _: 2,
                                              },
                                              1032,
                                              ["theme"]
                                            ))
                                          : (m(),
                                            f(
                                              O,
                                              {
                                                key: 1,
                                                theme:
                                                  e
                                                    .applicationSettingsPanelColorScheme
                                                    .UiEmptyMessage,
                                              },
                                              {
                                                default: s(
                                                  () =>
                                                    $_$() && [
                                                      y(
                                                        w(
                                                          e.$T(
                                                            "main_search_not_found"
                                                          )
                                                        ),
                                                        1
                                                      ),
                                                    ]
                                                ),
                                                _: 1,
                                              },
                                              8,
                                              ["theme"]
                                            )),
                                      ]
                                  ),
                                  _: 2,
                                },
                                1032,
                                ["theme", "scrollbarTheme"]
                              ))
                            : (m(), f(k, { key: 1 })),
                        ]
                    ),
                    _: 2,
                  },
                  1032,
                  ["theme"]
                ),
              ]
          ),
          _: 2,
        },
        [
          e.optionMode
            ? {
                name: "customTrigger",
                fn: s(
                  ({ isOpen: N, toggle: D }) =>
                    $_$() && [
                      d(
                        c,
                        {
                          onClick: D,
                          isSelected: N,
                          theme: e.applicationSettingsPanelColorScheme.UiOption,
                          captionSize: e.applicationSettingsConfig.captionSize,
                          class: "time-settings-dropdown__option",
                        },
                        {
                          ico: s(
                            () =>
                              $_$() && [
                                d(a, { ico: e.iconName.CLOCK }, null, 8, [
                                  "ico",
                                ]),
                              ]
                          ),
                          caption: s(
                            () =>
                              $_$() && [
                                y(w(e.$T("settings_time_zone_title")), 1),
                              ]
                          ),
                          _: 2,
                        },
                        1032,
                        ["onClick", "isSelected", "theme", "captionSize"]
                      ),
                    ]
                ),
                key: "0",
              }
            : {
                name: "trigger",
                fn: s(
                  () =>
                    $_$() && [
                      d(
                        p,
                        { size: e.sizeType.xs },
                        {
                          default: s(() => $_$() && [y(w(e.timeFormatted), 1)]),
                          _: 1,
                        },
                        8,
                        ["size"]
                      ),
                    ]
                ),
                key: "1",
              },
        ]
      ),
      1032,
      [
        "onOpen",
        "align",
        "direction",
        "stopElementsStore",
        "triangle",
        "triggerTooltip",
        "theme",
        "inline",
      ]
    )
  );
}
const Qs = L(qs, [
    ["render", js],
    ["__scopeId", "data-v-24519150"],
  ]),
  Xs = $({
    name: "ViewSettingsMarketsNameType",
    components: { DropdownFormSection: he },
    props: {
      modelValue: { type: Number, required: !0 },
      titleColor: { type: String, default: te.clr },
      titleUppercase: { type: Boolean, default: !0 },
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      $_$();
      const i = q();
      return {
        marketNameTypeOptions: _(
          () =>
            $_$() && [
              { caption: i("settings_markets_name_full"), value: be.full },
              { caption: i("settings_markets_name_short"), value: be.short },
            ]
        ),
        onInputChange: (r) => {
          t("update:modelValue", r);
        },
        themeType: H,
        applicationSettingsPanelColorScheme: re,
        applicationSettingsConfig: Ve,
      };
    },
  });
function Ks(e, t, i, l, n, r) {
  $_$();
  const a = u("UiCaption"),
    c = u("UiTabs"),
    p = u("DropdownFormSection");
  return (
    m(),
    f(
      p,
      {
        class: "view-settings-markets-name-type",
        titleColor: e.titleColor,
        titleUppercase: e.titleUppercase,
      },
      {
        title: s(() => $_$() && [y(w(e.$T("settings_markets_name")), 1)]),
        default: s(
          () =>
            $_$() && [
              d(
                c,
                {
                  "onUpdate:modelValue": e.onInputChange,
                  modelValue: e.modelValue,
                  options: e.marketNameTypeOptions,
                  size: e.applicationSettingsConfig.tabSize,
                  equal: e.applicationSettingsConfig.tabEqual,
                  theme: e.applicationSettingsPanelColorScheme.UiTabs,
                  name: "view-settings-markets-name-type_tabs",
                },
                {
                  default: s(
                    ({ item: g }) =>
                      $_$() && [
                        d(
                          a,
                          { size: e.applicationSettingsConfig.tabCaptionSize },
                          {
                            default: s(() => $_$() && [y(w(g.caption), 1)]),
                            _: 2,
                          },
                          1032,
                          ["size"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                [
                  "onUpdate:modelValue",
                  "modelValue",
                  "options",
                  "size",
                  "equal",
                  "theme",
                ]
              ),
            ]
        ),
        _: 1,
      },
      8,
      ["titleColor", "titleUppercase"]
    )
  );
}
const Ys = L(Xs, [["render", Ks]]),
  Zs = $({
    name: "ViewSettingsSiteView",
    components: { DropdownFormSection: he },
    props: {
      modelValue: { type: Number, required: !0 },
      options: { type: Array, required: !0 },
    },
    emits: ["update:modelValue"],
    setup(e, { emit: t }) {
      $_$();
      return {
        onInputChange: (l) => {
          t("update:modelValue", l);
        },
        sizeType: I,
        themeType: H,
      };
    },
  });
function Js(e, t, i, l, n, r) {
  $_$();
  const a = u("UiCaption"),
    c = u("UiTabs"),
    p = u("DropdownFormSection");
  return (
    m(),
    f(
      p,
      { class: "view-settings-site-view" },
      {
        title: s(() => $_$() && [y(w(e.$T("settings_view_site")), 1)]),
        default: s(
          () =>
            $_$() && [
              d(
                c,
                {
                  "onUpdate:modelValue": e.onInputChange,
                  modelValue: e.modelValue,
                  theme: e.themeType.gray,
                  options: e.options,
                  name: "view-settings-site-view_tabs",
                },
                {
                  default: s(
                    ({ item: g }) =>
                      $_$() && [
                        d(
                          a,
                          { size: e.sizeType.m },
                          {
                            default: s(() => $_$() && [y(w(g.caption), 1)]),
                            _: 2,
                          },
                          1032,
                          ["size"]
                        ),
                      ]
                  ),
                  _: 1,
                },
                8,
                ["onUpdate:modelValue", "modelValue", "theme", "options"]
              ),
            ]
        ),
        _: 1,
      }
    )
  );
}
const xs = L(Zs, [["render", Js]]),
  en = $({
    name: "ViewSettingsDropdown_F",
    components: {
      ViewSettingsConfettiToggle: ks,
      ViewSettingsSiteView: xs,
      ViewSettingsMarketsNameType: Ys,
      ViewSettingsCoefficientsFormat: ls,
      ViewSettingsOther: ms,
      ViewSettingsTimeFormat: $s,
      ViewSettingsDecorToggle: vs,
    },
    props: { optionMode: { type: Boolean, required: !1 } },
    setup(e) {
      $_$();
      var t;
      const {
          settings: i,
          updateSettings: l,
          saveSettings: n,
          setSettingsFromStore: r,
        } = ot(),
        [a, c, p, g, T, U, h] = ue(349, 608, 605, 602, 506, 62, 850),
        { isShowDecorationToggle: O } = st(),
        { directionDropdown: v, alignDropdown: k } = tt(e.optionMode),
        { siteViewOptions: E, isViewOptionsVisible: C } = hs(),
        N = () => {
          $_$();
          Object.assign(o(i), r());
        },
        D = (t = c && (p || h)) != null ? t : !1;
      return {
        isShowDecorationToggle: O,
        isEventSettingsTurnedOn: p,
        isShowFireIconInSetting: h,
        isConfettiVisible: g,
        siteViewOptions: E,
        isViewOptionsVisible: C,
        settings: i,
        updateSettings: l,
        saveSettings: n,
        directionDropdown: v,
        alignDropdown: k,
        sizeType: I,
        iconName: Z,
        isShowSelectCoefView: a,
        stopElements: Ue,
        discardUnsavedSettings: N,
        isVisibleMarketsNameTypeSetting: U,
        isEnabledTimeFormatSetting: T,
        isSettingsDecor: D,
        applicationSettingsPanelColorScheme: re,
        MEDIA_EXTENSIONS: Ie,
      };
    },
  }),
  tn = { key: 0, class: "view-settings-dropdown-toggle-event" },
  on = ["src"];
function sn(e, t, i, l, n, r) {
  $_$();
  const a = u("UiIco"),
    c = u("UiOption"),
    p = xe,
    g = u("UiDropdownTrigger"),
    T = u("ViewSettingsSiteView"),
    U = u("UiDropdownFormCol"),
    h = u("UiDropdownFormRow"),
    O = u("ViewSettingsCoefficientsFormat"),
    v = u("ViewSettingsTimeFormat"),
    k = u("ViewSettingsMarketsNameType"),
    E = u("ViewSettingsOther"),
    C = u("ViewSettingsDecorToggle"),
    N = u("ViewSettingsConfettiToggle"),
    D = u("UiDropdownForm"),
    F = u("UiDropdown"),
    P = pe("tooltip");
  return (
    m(),
    f(
      F,
      {
        align: e.alignDropdown,
        direction: e.directionDropdown,
        stopElementsStore: e.stopElements,
        theme: e.applicationSettingsPanelColorScheme.UiDropdown,
        rounded: !1,
        class: "view-settings-dropdown",
      },
      {
        customTrigger: s(
          ({ isOpen: B, toggle: A }) =>
            $_$() && [
              e.optionMode
                ? (m(),
                  f(
                    c,
                    {
                      key: 0,
                      onClick: A,
                      isSelected: B,
                      class: "view-settings-dropdown__option",
                    },
                    {
                      ico: s(
                        () =>
                          $_$() && [
                            d(a, { ico: e.iconName.SETTINGS }, null, 8, [
                              "ico",
                            ]),
                          ]
                      ),
                      caption: s(
                        () => $_$() && [y(w(e.$T("settings_site_title")), 1)]
                      ),
                      _: 2,
                    },
                    1032,
                    ["onClick", "isSelected"]
                  ))
                : se(
                    (m(),
                    f(
                      g,
                      {
                        key: 1,
                        ref: "dropdownBtn",
                        onClick: A,
                        "aria-label": e.$T("settings_site_title"),
                        toggled: B,
                        "aria-expanded": B,
                        class: "view-settings-dropdown-toggle",
                      },
                      {
                        default: s(
                          () =>
                            $_$() && [
                              d(p, null, {
                                default: s(
                                  () =>
                                    $_$() && [
                                      e.isSettingsDecor
                                        ? (m(),
                                          V("span", tn, [
                                            e.isShowFireIconInSetting
                                              ? (m(),
                                                f(
                                                  a,
                                                  {
                                                    key: 0,
                                                    ico: e.iconName
                                                      .FIRE_GRADIENT,
                                                    size: e.sizeType.xl,
                                                    class:
                                                      "view-settings-dropdown-toggle-event__decor",
                                                  },
                                                  null,
                                                  8,
                                                  ["ico", "size"]
                                                ))
                                              : M("", !0),
                                            d(
                                              a,
                                              {
                                                ico: e.iconName.SETTINGS,
                                                size: e.sizeType.m,
                                                class:
                                                  "view-settings-dropdown-toggle-event__ico",
                                              },
                                              null,
                                              8,
                                              ["ico", "size"]
                                            ),
                                            e.isEventSettingsTurnedOn
                                              ? (m(),
                                                V(
                                                  "img",
                                                  {
                                                    key: 1,
                                                    src: e.$mediaUrl(
                                                      "partners_event_holiday_settings_decor",
                                                      e.MEDIA_EXTENSIONS.SVG
                                                    ),
                                                    alt: "",
                                                    class:
                                                      "view-settings-dropdown-toggle-event__img",
                                                  },
                                                  null,
                                                  8,
                                                  on
                                                ))
                                              : M("", !0),
                                          ]))
                                        : (m(),
                                          f(
                                            a,
                                            {
                                              key: 1,
                                              ico: e.iconName.SETTINGS,
                                              size: e.sizeType.m,
                                              class:
                                                "view-settings-dropdown-toggle__ico",
                                            },
                                            null,
                                            8,
                                            ["ico", "size"]
                                          )),
                                    ]
                                ),
                                _: 1,
                              }),
                            ]
                        ),
                        _: 2,
                      },
                      1032,
                      ["onClick", "aria-label", "toggled", "aria-expanded"]
                    )),
                    [
                      [
                        P,
                        {
                          content: e.$T("settings_site_title"),
                          classes: ["u-nowrap"],
                        },
                      ],
                    ]
                  ),
            ]
        ),
        default: s(
          ({ toggle: B }) =>
            $_$() && [
              d(
                D,
                {
                  onSubmit: (A) => e.saveSettings(B),
                  showResetButton: !1,
                  submitButtonDefaultText: e.$T("main_save"),
                  resetButtonDefaultText: e.$T("main_clear"),
                },
                {
                  default: s(
                    () =>
                      $_$() && [
                        e.isViewOptionsVisible
                          ? (m(),
                            f(
                              h,
                              { key: 0, class: "view-settings-dropdown__row" },
                              {
                                default: s(
                                  () =>
                                    $_$() && [
                                      d(
                                        U,
                                        {
                                          class:
                                            "view-settings-dropdown__section",
                                        },
                                        {
                                          default: s(
                                            () =>
                                              $_$() && [
                                                d(
                                                  T,
                                                  {
                                                    modelValue:
                                                      e.settings.viewType,
                                                    "onUpdate:modelValue":
                                                      t[0] ||
                                                      (t[0] = (A) =>
                                                        (e.settings.viewType =
                                                          A)),
                                                    options: e.siteViewOptions,
                                                  },
                                                  null,
                                                  8,
                                                  ["modelValue", "options"]
                                                ),
                                              ]
                                          ),
                                          _: 1,
                                        }
                                      ),
                                    ]
                                ),
                                _: 1,
                              }
                            ))
                          : M("", !0),
                        e.isShowSelectCoefView
                          ? (m(),
                            f(
                              h,
                              {
                                key: 1,
                                cols: "",
                                class: "view-settings-dropdown__row",
                              },
                              {
                                default: s(
                                  () =>
                                    $_$() && [
                                      d(
                                        U,
                                        {
                                          class:
                                            "view-settings-dropdown__section",
                                        },
                                        {
                                          default: s(
                                            () =>
                                              $_$() && [
                                                d(
                                                  O,
                                                  {
                                                    modelValue:
                                                      e.settings
                                                        .coefficientViewId,
                                                    "onUpdate:modelValue":
                                                      t[1] ||
                                                      (t[1] = (A) =>
                                                        (e.settings.coefficientViewId =
                                                          A)),
                                                  },
                                                  null,
                                                  8,
                                                  ["modelValue"]
                                                ),
                                              ]
                                          ),
                                          _: 1,
                                        }
                                      ),
                                    ]
                                ),
                                _: 1,
                              }
                            ))
                          : M("", !0),
                        e.isEnabledTimeFormatSetting
                          ? (m(),
                            f(
                              h,
                              { key: 2 },
                              {
                                default: s(
                                  () =>
                                    $_$() && [
                                      d(
                                        v,
                                        {
                                          modelValue: e.settings.timeFormat,
                                          "onUpdate:modelValue":
                                            t[2] ||
                                            (t[2] = (A) =>
                                              (e.settings.timeFormat = A)),
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]
                                ),
                                _: 1,
                              }
                            ))
                          : M("", !0),
                        e.isVisibleMarketsNameTypeSetting
                          ? (m(),
                            f(
                              h,
                              { key: 3, class: "view-settings-dropdown__row" },
                              {
                                default: s(
                                  () =>
                                    $_$() && [
                                      d(
                                        U,
                                        {
                                          class:
                                            "view-settings-dropdown__section",
                                        },
                                        {
                                          default: s(
                                            () =>
                                              $_$() && [
                                                d(
                                                  k,
                                                  {
                                                    modelValue:
                                                      e.settings
                                                        .marketsNameType,
                                                    "onUpdate:modelValue":
                                                      t[3] ||
                                                      (t[3] = (A) =>
                                                        (e.settings.marketsNameType =
                                                          A)),
                                                  },
                                                  null,
                                                  8,
                                                  ["modelValue"]
                                                ),
                                              ]
                                          ),
                                          _: 1,
                                        }
                                      ),
                                    ]
                                ),
                                _: 1,
                              }
                            ))
                          : M("", !0),
                        d(
                          h,
                          { class: "view-settings-dropdown__row" },
                          {
                            default: s(
                              () =>
                                $_$() && [
                                  d(
                                    E,
                                    {
                                      onUpdateSettings: e.updateSettings,
                                      onDiscardUnsavedSettings:
                                        e.discardUnsavedSettings,
                                      settings: e.settings,
                                    },
                                    null,
                                    8,
                                    [
                                      "onUpdateSettings",
                                      "onDiscardUnsavedSettings",
                                      "settings",
                                    ]
                                  ),
                                ]
                            ),
                            _: 1,
                          }
                        ),
                        e.isShowDecorationToggle
                          ? (m(),
                            f(C, {
                              key: 4,
                              class: "view-settings-dropdown__decor",
                            }))
                          : M("", !0),
                        e.isConfettiVisible
                          ? (m(),
                            f(N, {
                              key: 5,
                              class: "view-settings-dropdown__decor",
                            }))
                          : M("", !0),
                      ]
                  ),
                  _: 2,
                },
                1032,
                [
                  "onSubmit",
                  "submitButtonDefaultText",
                  "resetButtonDefaultText",
                ]
              ),
            ]
        ),
        _: 1,
      },
      8,
      ["align", "direction", "stopElementsStore", "theme"]
    )
  );
}
const nn = L(en, [
    ["render", sn],
    ["__scopeId", "data-v-52d42e6f"],
  ]),
  an = () => ({ screenSize: 1366 }),
  ln = $({
    name: "ApplicationSettingsPanel",
    components: {
      LanguageSettingsDropdown: fo,
      TimeSettingsDropdown: Qs,
      ViewSettingsDropdown: nn,
    },
    props: { size: { type: String, default: I.m } },
    setup(e) {
      $_$();
      const t = me(),
        i = fe(!1),
        [l, n = [], r, a, c, p] = ue(156, 547, 608, 605, 331, 850),
        { screenSize: g } = an(),
        T = n.includes("0"),
        U = r && (a || p),
        h = () => {
          i.value = window.innerWidth <= g;
        },
        O = _(() => $_$() && Ve.hasCompact && !o(i)),
        v = _(() => ({
          [`application-settings-panel--size-${e.size}`]: !!e.size,
        }));
      return (
        Oe(() => {
          $_$();
          window.addEventListener("resize", h),
            io(() => {
              h();
            });
        }),
        qe(() => {
          window.removeEventListener("resize", h);
        }),
        {
          isEventSettingsTurnedOn: a,
          isShowFireIconInSetting: p,
          onAnalytics: () => {
            t.modules.office.trackClickAccMenuSettings();
          },
          onLanguageAnalytics: () => {
            t.modules.header.trackNavLanguageHeader();
          },
          clickOnTimeSettingsDropdown: () => {
            t.modules.header.trackNavTimezoneHeader();
          },
          isShowBettingSettings: c,
          themeType: H,
          sizeType: I,
          alignType: Te,
          iconName: Z,
          isCompact: i,
          isSettingsDecor: U,
          stopElements: Ue,
          showLanguageSelect: T,
          applicationSettingsPanelColorScheme: re,
          isShowTimeSettings: l,
          showPanelItems: O,
          MEDIA_EXTENSIONS: Ie,
          applicationSettingsPanelClasses: v,
        }
      );
    },
  }),
  rn = { key: 0, class: "application-settings-panel-dropdown-toggle-event" },
  cn = ["src"];
function pn(e, t, i, l, n, r) {
  $_$();
  const a = u("ViewSettingsDropdown"),
    c = u("TimeSettingsDropdown"),
    p = xe,
    g = u("LanguageSettingsDropdown"),
    T = u("UiIco"),
    U = u("UiDropdownTrigger"),
    h = u("UiSelectItem"),
    O = u("UiSelectOptions"),
    v = u("UiSelectContent"),
    k = u("UiDropdown"),
    E = pe("tooltip");
  return (
    m(),
    V(
      "span",
      {
        class: W([
          "application-settings-panel",
          e.applicationSettingsPanelClasses,
        ]),
      },
      [
        e.showPanelItems
          ? (m(),
            V(
              ce,
              { key: 0 },
              [
                e.isShowBettingSettings
                  ? (m(),
                    f(
                      a,
                      {
                        key: 0,
                        onClick: e.onAnalytics,
                        class: "application-settings-panel__item",
                      },
                      null,
                      8,
                      ["onClick"]
                    ))
                  : M("", !0),
                e.isShowTimeSettings
                  ? (m(),
                    f(
                      p,
                      { key: 1 },
                      {
                        default: s(
                          () =>
                            $_$() && [
                              d(
                                c,
                                {
                                  onClick: e.clickOnTimeSettingsDropdown,
                                  class: "application-settings-panel__item",
                                },
                                null,
                                8,
                                ["onClick"]
                              ),
                            ]
                        ),
                        _: 1,
                      }
                    ))
                  : M("", !0),
                e.showLanguageSelect
                  ? (m(),
                    f(
                      g,
                      {
                        key: 2,
                        onClick: e.onLanguageAnalytics,
                        class: "application-settings-panel__item",
                      },
                      null,
                      8,
                      ["onClick"]
                    ))
                  : M("", !0),
              ],
              64
            ))
          : (m(),
            f(
              k,
              {
                key: 1,
                align: e.alignType.END,
                stopElementsStore: e.stopElements,
                theme: e.applicationSettingsPanelColorScheme.UiDropdown,
                class: "application-settings-panel-dropdown",
              },
              {
                customTrigger: s(
                  ({ isOpen: C, toggle: N }) =>
                    $_$() && [
                      se(
                        (m(),
                        f(
                          U,
                          {
                            ref: "dropdownBtn",
                            onClick: N,
                            "aria-label": e.$T("settings_site_title"),
                            toggled: C,
                            "aria-expanded": C,
                            theme:
                              e.applicationSettingsPanelColorScheme
                                .UiDropdownTrigger,
                            class: W([
                              {
                                "application-settings-panel-dropdown-toggle--is-opened":
                                  C,
                              },
                              "application-settings-panel-dropdown__toggle application-settings-panel-dropdown-toggle",
                            ]),
                          },
                          {
                            default: s(
                              () =>
                                $_$() && [
                                  d(p, null, {
                                    default: s(
                                      () =>
                                        $_$() && [
                                          e.isSettingsDecor
                                            ? (m(),
                                              V("span", rn, [
                                                e.isShowFireIconInSetting
                                                  ? (m(),
                                                    f(
                                                      T,
                                                      {
                                                        key: 0,
                                                        ico: e.iconName
                                                          .FIRE_GRADIENT,
                                                        size: e.sizeType.xl,
                                                        class:
                                                          "application-settings-panel-dropdown-toggle-event__decor",
                                                      },
                                                      null,
                                                      8,
                                                      ["ico", "size"]
                                                    ))
                                                  : M("", !0),
                                                d(
                                                  T,
                                                  {
                                                    ico: e.iconName.SETTINGS,
                                                    class:
                                                      "application-settings-panel-dropdown-toggle__ico application-settings-panel-dropdown-toggle-event__ico",
                                                  },
                                                  null,
                                                  8,
                                                  ["ico"]
                                                ),
                                                e.isEventSettingsTurnedOn
                                                  ? (m(),
                                                    V(
                                                      "img",
                                                      {
                                                        key: 1,
                                                        src: e.$mediaUrl(
                                                          "partners_event_holiday_settings_decor",
                                                          e.MEDIA_EXTENSIONS.SVG
                                                        ),
                                                        alt: "",
                                                        class:
                                                          "application-settings-panel-dropdown-toggle-event__img",
                                                      },
                                                      null,
                                                      8,
                                                      cn
                                                    ))
                                                  : M("", !0),
                                              ]))
                                            : (m(),
                                              f(
                                                T,
                                                {
                                                  key: 1,
                                                  ico: e.iconName.SETTINGS,
                                                  class:
                                                    "application-settings-panel-dropdown-toggle__ico",
                                                },
                                                null,
                                                8,
                                                ["ico"]
                                              )),
                                        ]
                                    ),
                                    _: 1,
                                  }),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          [
                            "onClick",
                            "aria-label",
                            "toggled",
                            "aria-expanded",
                            "theme",
                            "class",
                          ]
                        )),
                        [
                          [
                            E,
                            {
                              content: e.$T("settings_site_title"),
                              classes: ["u-nowrap"],
                            },
                          ],
                        ]
                      ),
                    ]
                ),
                default: s(
                  () =>
                    $_$() && [
                      d(
                        v,
                        {
                          scrollable: !1,
                          class: "application-settings-panel-dropdown__content",
                        },
                        {
                          default: s(
                            () =>
                              $_$() && [
                                d(
                                  O,
                                  {
                                    theme:
                                      e.applicationSettingsPanelColorScheme
                                        .UiSelectOptions,
                                    class:
                                      "application-settings-panel-dropdown__options",
                                  },
                                  {
                                    default: s(
                                      () =>
                                        $_$() && [
                                          e.isShowBettingSettings
                                            ? (m(),
                                              f(
                                                h,
                                                { key: 0 },
                                                {
                                                  default: s(
                                                    () =>
                                                      $_$() && [
                                                        d(
                                                          a,
                                                          {
                                                            onClick:
                                                              e.onAnalytics,
                                                            optionMode: "",
                                                            class:
                                                              "application-settings-panel-dropdown__option",
                                                          },
                                                          null,
                                                          8,
                                                          ["onClick"]
                                                        ),
                                                      ]
                                                  ),
                                                  _: 1,
                                                }
                                              ))
                                            : M("", !0),
                                          e.isShowTimeSettings
                                            ? (m(),
                                              f(
                                                h,
                                                { key: 1 },
                                                {
                                                  default: s(
                                                    () =>
                                                      $_$() && [
                                                        d(c, {
                                                          optionMode: "",
                                                          class:
                                                            "application-settings-panel-dropdown__option",
                                                        }),
                                                      ]
                                                  ),
                                                  _: 1,
                                                }
                                              ))
                                            : M("", !0),
                                          d(h, null, {
                                            default: s(
                                              () =>
                                                $_$() && [
                                                  e.showLanguageSelect
                                                    ? (m(),
                                                      f(g, {
                                                        key: 0,
                                                        optionMode: "",
                                                        class:
                                                          "application-settings-panel-dropdown__option",
                                                      }))
                                                    : M("", !0),
                                                ]
                                            ),
                                            _: 1,
                                          }),
                                        ]
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ["theme"]
                                ),
                              ]
                          ),
                          _: 1,
                        }
                      ),
                    ]
                ),
                _: 1,
              },
              8,
              ["align", "stopElementsStore", "theme"]
            )),
      ],
      2
    )
  );
}
const In = L(ln, [
  ["render", pn],
  ["__scopeId", "data-v-f7428f24"],
]);
export {
  In as ApplicationSettingsPanel,
  yn as Bonuses,
  he as DropdownFormSection,
  Ps as TimeSettingsDropdownLoaderStub,
  On as UserControlExternalBtn,
  Tn as UserMessagesDropdown,
  ls as ViewSettingsCoefficientsFormat,
  ks as ViewSettingsConfettiToggle,
  vs as ViewSettingsDecorToggle,
  ms as ViewSettingsOther,
  $s as ViewSettingsTimeFormat,
  Gs as useDateNow,
  st as useDecorations,
  wn as usePaymentsIcon,
  As as useSearchTimezoneOptions,
  hs as useSiteViewOptions,
  vn as useSupportCallback,
  Rs as useTimezoneSettings,
  bn as useUserControlQuestion,
  Cn as useViewSettingsStoreInjector,
  Un as useViewSettingsStoreProvider,
};
