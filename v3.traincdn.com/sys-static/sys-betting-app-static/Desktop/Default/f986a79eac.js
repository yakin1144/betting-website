import $_$ from "./$_$.js";
$_$();
import {
  useMediaStore as A,
  _export_sfc as S,
  MediaType as F,
  defineProvider as he,
  BETTING_LAYOUT_APP_CONFIG_COMMON as ce,
  useRtlInfo as ue,
  MediaTarget as $,
  MEDIA_TYPES as pe,
  MEDIA_TARGETS as fe,
} from "./entry-50afb6f36c.js";
import { MediaVideoPlayer as ge } from "./1b1940fd00.js";
import {
  runtimeCore_esmBundler_defineComponent as v,
  useGlobalStore as K,
  runtimeCore_esmBundler_computed as p,
  iconName as L,
  runtimeCore_esmBundler_resolveComponent as f,
  runtimeCore_esmBundler_createElementBlock as u,
  runtimeCore_esmBundler_openBlock as l,
  runtimeCore_esmBundler_createCommentVNode as k,
  runtimeCore_esmBundler_createVNode as c,
  runtimeCore_esmBundler_createElementVNode as R,
  createSharedComposable_createSharedComposable_2 as _e,
  execAsync as G,
  appendScript as ee,
  reactivity_esmBundler_ref as J,
  runtimeCore_esmBundler_useTemplateRef as se,
  equalWatch as be,
  reactivity_esmBundler_unref as r,
  runtimeCore_esmBundler_onMounted as oe,
  runtimeCore_esmBundler_onBeforeUnmount as ae,
  runtimeCore_esmBundler_createBlock as w,
  runtimeCore_esmBundler_resolveDynamicComponent as Q,
  runtimeCore_esmBundler_mergeProps as ye,
  runtimeCore_esmBundler_Fragment as N,
  runtimeCore_esmBundler_renderList as P,
  theme_constants_themeType as H,
  index_useT as Se,
  index_getConfig as te,
  iconLogos as Z,
  shared_esmBundler_normalizeClass as D,
  size_constants_sizeType as y,
  runtimeCore_esmBundler_withCtx as g,
  runtimeCore_esmBundler_createTextVNode as X,
  shared_esmBundler_toDisplayString as q,
  nuxtLink_default as ve,
  runtimeCore_esmBundler_renderSlot as U,
  ICON_LOGOS_PATH as ze,
  shared_esmBundler_normalizeStyle as Ee,
  runtimeCore_esmBundler_withDirectives as re,
  runtimeDom_esmBundler_vShow as $e,
  reactivity_esmBundler_toRefs as de,
  isDef as we,
  runtimeCore_esmBundler_resolveDirective as Me,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import { useMediaTokenUpdater as Ie } from "./f9ccf7bc98.js";
const Ce = v({
    name: "MediaVideo",
    components: { MediaVideoPlayer: ge },
    props: {
      sportId: { type: [String, Number], required: !0 },
      gameId: { type: Number, required: !0 },
      videoId: { type: [String, Number], required: !0 },
      showControls: { type: Boolean, default: !1 },
      matchName: { type: String, default: "Live" },
    },
    emits: ["close"],
    setup() {
      $_$();
      const e = K(),
        t = A(),
        n = p(() => e.getLanguage),
        i = p(() => t.userVideoToken);
      return { lng: n, userVideoToken: i, iconName: L };
    },
  }),
  Be = { class: "media-video" },
  Re = { key: 0, class: "media-video__controls" },
  ke = ["title"];
function De(e, t, n, i, s, m) {
  $_$();
  const o = f("UiIco"),
    a = f("MediaVideoPlayer");
  return (
    l(),
    u("div", Be, [
      e.showControls
        ? (l(),
          u("div", Re, [
            R(
              "button",
              {
                onClick: t[0] || (t[0] = (d) => e.$emit("close")),
                title: e.$T("main_close"),
                class: "media-video-control",
              },
              [
                c(
                  o,
                  { ico: e.iconName.TIMES, class: "media-video-control__ico" },
                  null,
                  8,
                  ["ico"]
                ),
              ],
              8,
              ke
            ),
          ]))
        : k("", !0),
      c(
        a,
        {
          lng: e.lng,
          gameId: e.gameId,
          sportId: e.sportId,
          videoId: e.videoId,
          matchName: e.matchName,
          userVideoToken: e.userVideoToken,
          class: "media-video__sizer media-video-sizer",
        },
        null,
        8,
        ["lng", "gameId", "sportId", "videoId", "matchName", "userVideoToken"]
      ),
    ])
  );
}
const ie = S(Ce, [
    ["render", De],
    ["__scopeId", "data-v-c5039c0e"],
  ]),
  le = _e(() => {
    let e;
    return {
      loadMediaZone: () =>
        e ||
        ((e = (async () => {
          $_$();
          let n, i;
          ([n, i] = G(
            () => $_$() && ee("/zone-static/getZone/web_nz/scripts/libs_js.js")
          )),
            await n,
            i(),
            ([n, i] = G(
              () =>
                $_$() && ee("/zone-static/getZone/web_nz/engine/mainengine.js")
            )),
            await n,
            i();
        })()),
        e),
    };
  }),
  Ne = ["id"],
  Pe = v({
    __name: "MediaZoneIframePlayer",
    props: { lng: {}, sportId: {}, zoneId: {} },
    setup(e) {
      $_$();
      const t = e,
        { loadMediaZone: n } = le(),
        i = J(!!window.MediaZonePlayer),
        s = se("element"),
        m = p(() => `zone-${t.sportId}-${t.zoneId}`),
        o = async () => {
          $_$();
          let d, h;
          r(i) ||
            (([d, h] = G(() => n())),
            await d,
            h(),
            (window.MediaZonePlayer = window.zoneMatch_NZ),
            (i.value = !0));
        },
        a = (d) => {
          var h;
          d &&
            ((h = window.MediaZonePlayer) == null ||
              h.inicialize(
                d,
                t.zoneId,
                t.sportId,
                t.lng,
                "/zone-static/getZone/web_nz/"
              ));
        };
      return (
        be(
          () => $_$() && [r(s), r(i), t.zoneId, t.sportId, t.lng],
          () => $_$() && a(r(s))
        ),
        oe(o),
        ae(() => {
          var d;
          return (d = window.MediaZonePlayer) == null
            ? void 0
            : d.ZonePlayStop(t.sportId);
        }),
        (d, h) =>
          $_$() &&
          (l(),
          u(
            "div",
            {
              id: r(m),
              ref_key: "element",
              ref: s,
              class: "media-zone-iframe-player",
            },
            null,
            8,
            Ne
          ))
      );
    },
  }),
  We = v({
    name: "MediaZone",
    components: { MediaZoneIframePlayer: Pe },
    props: {
      sportId: { required: !0, type: [String, Number] },
      zoneId: { required: !0, type: [String, Number] },
    },
    setup() {
      $_$();
      const e = K();
      return { currentLang: p(() => e.getLanguage) };
    },
  }),
  Le = { class: "media-zone" };
function He(e, t, n, i, s, m) {
  $_$();
  const o = f("MediaZoneIframePlayer");
  return (
    l(),
    u("div", Le, [
      c(
        o,
        {
          lng: e.currentLang,
          sportId: e.sportId,
          zoneId: e.zoneId,
          class: "media-zone__sizer media-zone-sizer",
        },
        null,
        8,
        ["lng", "sportId", "zoneId"]
      ),
    ])
  );
}
const ne = S(We, [
    ["render", He],
    ["__scopeId", "data-v-d38a370a"],
  ]),
  Ae = v({
    name: "MediaContent",
    components: { MediaVideo: ie, MediaZone: ne },
    props: { mediaEntity: { type: Object, required: !0 } },
    setup(e) {
      $_$();
      return {
        component: p(() => {
          switch (e.mediaEntity.type) {
            case F.VIDEO:
              return {
                is: ie,
                class: "media-content-video",
                props: {
                  gameId: e.mediaEntity.gameId,
                  sportId: e.mediaEntity.sportId,
                  videoId: e.mediaEntity.videoId,
                },
              };
            case F.ZONE:
              return {
                is: ne,
                class: "media-content-zone",
                props: {
                  gameId: e.mediaEntity.gameId,
                  sportId: e.mediaEntity.sportId,
                  zoneId: e.mediaEntity.zoneId,
                },
              };
            default:
              return !1;
          }
        }),
      };
    },
  });
function Te(e, t, n, i, s, m) {
  $_$();
  return e.component
    ? (l(),
      w(
        Q(e.component.is),
        ye({ key: 0, class: e.component.class }, e.component.props),
        null,
        16,
        ["class"]
      ))
    : k("", !0);
}
const V = S(Ae, [
    ["render", Te],
    ["__scopeId", "data-v-001627cf"],
  ]),
  Oe = v({
    name: "MediaBoard",
    components: { MediaContent: V },
    props: { mediaEntities: { type: Array, required: !0 } },
  }),
  Ue = { class: "media-board" };
function Ve(e, t, n, i, s, m) {
  $_$();
  const o = f("MediaContent");
  return (
    l(),
    u("div", Ue, [
      (l(!0),
      u(
        N,
        null,
        P(
          e.mediaEntities,
          (a) =>
            $_$() &&
            (l(), w(o, { key: a.id, mediaEntity: a }, null, 8, ["mediaEntity"]))
        ),
        128
      )),
    ])
  );
}
const Ye = S(Oe, [
    ["render", Ve],
    ["__scopeId", "data-v-c3a0aae0"],
  ]),
  Ze = v({
    name: "MediaFullscreen",
    components: { MediaContent: V },
    props: { mediaEntities: { type: Array, required: !0 } },
  }),
  Xe = { class: "media-fullscreen" };
function qe(e, t, n, i, s, m) {
  $_$();
  const o = f("MediaContent");
  return (
    l(),
    u("div", Xe, [
      (l(!0),
      u(
        N,
        null,
        P(
          e.mediaEntities,
          (a) =>
            $_$() &&
            (l(), w(o, { key: a.id, mediaEntity: a }, null, 8, ["mediaEntity"]))
        ),
        128
      )),
    ])
  );
}
const xe = S(Ze, [["render", qe]]),
  { provide: $t, inject: je } = he((e) => e, ce),
  Fe = { class: "media-container__row" },
  Ge = { class: "media-container__controls" },
  Ke = { key: 0, class: "media-container__row" },
  Je = { class: "media-container__apps media-container-apps" },
  Qe = v({
    __name: "MediaContainer_F",
    props: {
      mediaEntity: { required: !0, type: Object },
      pointerEventsBlocked: { type: Boolean, default: !1 },
      theme: { type: String, default: H.primary },
    },
    emits: ["close", "return", "drag"],
    setup(e, { emit: t }) {
      $_$();
      const n = e,
        i = t,
        { mediaContainerTheme: s } = je(),
        m = p(() => (s != null ? s : n.theme)),
        o = Se(),
        a = se("root"),
        d = te(2007),
        h = te(312),
        z = p(() =>
          n.mediaEntity.type === F.ZONE ? o("media_zone") : o("media_broadcast")
        ),
        T = () => {
          $_$();
          const b = r(a).getBoundingClientRect();
          i("drag", { ...n.mediaEntity, boundingClientRect: b });
        },
        _ = [
          {
            title: "Android app",
            ico: Z.ANDROID,
            link: "https://1xsone.com/sportzone/SportZone_1.2.3.apk",
          },
          {
            title: "IOS app",
            ico: Z.APPLE,
            link: "https://1xsone.com/sportzone/SportZone_1.6.1.dmg",
          },
          {
            title: "Windows app",
            ico: Z.WINDOWS,
            link: "https://1xsone.com/sportzone/SportZone_1.5.1.exe",
          },
        ];
      return (b, I) => {
        $_$();
        const C = f("UiCaption"),
          Y = ve,
          W = f("UiIco"),
          O = f("UiButton");
        return (
          l(),
          u(
            "section",
            {
              ref_key: "root",
              ref: a,
              class: D(["media-container", `media-container--theme-${r(m)}`]),
            },
            [
              R("header", Fe, [
                c(
                  C,
                  {
                    size: r(y).m,
                    class: "media-container__title media-container__label",
                  },
                  { default: g(() => $_$() && [X(q(r(z)), 1)]), _: 1 },
                  8,
                  ["size"]
                ),
                c(
                  Y,
                  {
                    to: e.mediaEntity.gameLink,
                    class: "media-container__link media-container-link",
                  },
                  {
                    default: g(
                      () =>
                        $_$() && [
                          c(
                            C,
                            { size: r(y).m, class: "media-container__label" },
                            {
                              default: g(
                                () =>
                                  $_$() && [X(q(b.$T("media_go_to_match")), 1)]
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
                  ["to"]
                ),
                R("div", Ge, [
                  c(
                    O,
                    {
                      onClick: T,
                      size: r(y).s,
                      title: b.$T("media_drag_window"),
                      class: "js-media-drag media-container__control",
                    },
                    {
                      container: g(
                        () =>
                          $_$() && [
                            c(
                              W,
                              { ico: r(L).ARROWS_ALT, size: r(y).xs },
                              null,
                              8,
                              ["ico", "size"]
                            ),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["size", "title"]
                  ),
                  r(d)
                    ? (l(),
                      w(
                        O,
                        {
                          key: 0,
                          onClick:
                            I[0] ||
                            (I[0] = (B) => b.$emit("return", e.mediaEntity)),
                          size: r(y).s,
                          title: b.$T("media_return_window"),
                          class: "media-container__control",
                        },
                        {
                          container: g(
                            () =>
                              $_$() && [
                                c(
                                  W,
                                  { ico: r(L).REPLY, size: r(y).xs },
                                  null,
                                  8,
                                  ["ico", "size"]
                                ),
                              ]
                          ),
                          _: 1,
                        },
                        8,
                        ["size", "title"]
                      ))
                    : k("", !0),
                  c(
                    O,
                    {
                      onClick:
                        I[1] || (I[1] = (B) => b.$emit("close", e.mediaEntity)),
                      size: r(y).s,
                      title: b.$T("media_close_window"),
                      class: "media-container__control",
                    },
                    {
                      container: g(
                        () =>
                          $_$() && [
                            c(W, { ico: r(L).TIMES, size: r(y).xs }, null, 8, [
                              "ico",
                              "size",
                            ]),
                          ]
                      ),
                      _: 1,
                    },
                    8,
                    ["size", "title"]
                  ),
                ]),
              ]),
              R(
                "div",
                {
                  class: D([
                    "media-container__body",
                    {
                      "media-container__body--blocked": e.pointerEventsBlocked,
                    },
                  ]),
                },
                [U(b.$slots, "default", {}, void 0, !0)],
                2
              ),
              r(h)
                ? (l(),
                  u("div", Ke, [
                    c(
                      W,
                      {
                        ico: r(L).DIAGONAL_LINES,
                        size: r(y).xxxs,
                        class: "media-container__resize",
                      },
                      null,
                      8,
                      ["ico", "size"]
                    ),
                    c(
                      C,
                      {
                        size: r(y).m,
                        class: "media-container__source media-container__label",
                      },
                      {
                        default: g(
                          () => $_$() && [X(q(e.mediaEntity.title), 1)]
                        ),
                        _: 1,
                      },
                      8,
                      ["size"]
                    ),
                    R("ul", Je, [
                      (l(),
                      u(
                        N,
                        null,
                        P(
                          _,
                          (B) =>
                            $_$() &&
                            R(
                              "li",
                              {
                                key: B.link,
                                class: "media-container-apps__item",
                              },
                              [
                                c(
                                  O,
                                  {
                                    tag: "a",
                                    href: B.link,
                                    title: B.title,
                                    size: r(y).s,
                                    class: "media-container-apps__link",
                                    target: "_blank",
                                  },
                                  {
                                    container: g(
                                      () =>
                                        $_$() && [
                                          c(
                                            W,
                                            {
                                              ico: B.ico,
                                              path: r(ze),
                                              size: r(y).xs,
                                            },
                                            null,
                                            8,
                                            ["ico", "path", "size"]
                                          ),
                                        ]
                                    ),
                                    _: 2,
                                  },
                                  1032,
                                  ["href", "title", "size"]
                                ),
                              ]
                            )
                        ),
                        64
                      )),
                    ]),
                  ]))
                : k("", !0),
            ],
            2
          )
        );
      };
    },
  }),
  me = S(Qe, [["__scopeId", "data-v-d71824bf"]]),
  M = {
    "resizable-r": { bit: 1, cursor: "e-resize" },
    "resizable-rb": { bit: 3, cursor: "se-resize" },
    "resizable-b": { bit: 2, cursor: "s-resize" },
    "resizable-lb": { bit: 6, cursor: "sw-resize" },
    "resizable-l": { bit: 4, cursor: "w-resize" },
    "resizable-lt": { bit: 12, cursor: "nw-resize" },
    "resizable-t": { bit: 8, cursor: "n-resize" },
    "resizable-rt": { bit: 9, cursor: "ne-resize" },
    "drag-el": { bit: 15, cursor: "pointer" },
  },
  E = { l: 1, t: 2, w: 4, h: 8 },
  et = {
    name: "VResizable",
    props: {
      width: { default: void 0, type: [Number, String] },
      minWidth: { default: 0, type: Number },
      maxWidth: { default: void 0, type: Number },
      height: { default: void 0, type: [Number, String] },
      minHeight: { default: 0, type: Number },
      maxHeight: { default: void 0, type: Number },
      left: { default: 0, type: [Number, String] },
      top: { default: 0, type: [Number, String] },
      active: {
        default: () => ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
        validator: (e) =>
          ["r", "rb", "b", "lb", "l", "lt", "t", "rt"].filter(
            (t) => e.indexOf(t) !== -1
          ).length === e.length,
        type: Array,
      },
      fitParent: { default: !1, type: Boolean },
      dragSelector: { default: void 0, type: String },
      maximize: { default: !1, type: Boolean },
      disableAttributes: {
        default: () => [],
        validator: (e) =>
          ["l", "t", "w", "h"].filter((t) => e.indexOf(t) !== -1).length ===
          e.length,
        type: Array,
      },
    },
    emits: [
      "mount",
      "destroy",
      "resize:start",
      "resize:move",
      "resize:end",
      "drag:start",
      "drag:move",
      "drag:end",
      "maximize",
    ],
    data() {
      $_$();
      return {
        w: this.width,
        h: this.height,
        minW: this.minWidth,
        minH: this.minHeight,
        maxW: this.maxWidth,
        maxH: this.maxHeight,
        l: this.left,
        t: this.top,
        mouseX: 0,
        mouseY: 0,
        offsetX: 0,
        offsetY: 0,
        parent: { width: 0, height: 0 },
        resizeState: 0,
        dragElements: [],
        dragState: !1,
        calcMap: 15,
      };
    },
    computed: {
      style() {
        $_$();
        return {
          ...(this.calcMap & E.w && {
            width: typeof this.w == "number" ? this.w + "px" : this.w,
          }),
          ...(this.calcMap & E.h && {
            height: typeof this.h == "number" ? this.h + "px" : this.h,
          }),
          ...(this.calcMap & E.l && {
            left: typeof this.l == "number" ? this.l + "px" : this.l,
          }),
          ...(this.calcMap & E.t && {
            top: typeof this.t == "number" ? this.t + "px" : this.t,
          }),
        };
      },
    },
    watch: {
      maxWidth(e) {
        this.maxW = e;
      },
      maxHeight(e) {
        this.maxH = e;
      },
      minWidth(e) {
        this.minW = e;
      },
      minHeight(e) {
        this.minH = e;
      },
      width(e) {
        $_$();
        typeof e == "number" && (this.w = e);
      },
      height(e) {
        typeof e == "number" && (this.h = e);
      },
      left(e) {
        $_$();
        typeof e == "number" && (this.l = e);
      },
      top(e) {
        typeof e == "number" && (this.t = e);
      },
      dragSelector(e) {
        this.setupDragElements(e);
      },
      maximize(e) {
        this.setMaximize(e), this.emitEvent("maximize", { state: e });
      },
    },
    mounted() {
      $_$();
      this.width
        ? this.width !== "auto" &&
          typeof this.width != "number" &&
          (this.w = this.$el.clientWidth)
        : (this.w = this.$el.parentElement.clientWidth),
        this.height
          ? this.height !== "auto" &&
            typeof this.height != "number" &&
            (this.h = this.$el.clientHeight)
          : (this.h = this.$el.parentElement.clientHeight),
        typeof this.left != "number" &&
          (this.l = this.$el.offsetLeft - this.$el.parentElement.offsetLeft),
        typeof this.top != "number" &&
          (this.t = this.$el.offsetTop - this.$el.parentElement.offsetTop),
        this.minW && this.w < this.minW && (this.w = this.minW),
        this.minH && this.h < this.minH && (this.h = this.minH),
        this.maxW && this.w > this.maxW && (this.w = this.maxW),
        this.maxH && this.h > this.maxH && (this.h = this.maxH),
        this.setMaximize(this.maximize),
        this.setupDragElements(this.dragSelector),
        this.disableAttributes.forEach((e) => {
          switch (e) {
            case "l":
              this.calcMap &= -2;
              break;
            case "t":
              this.calcMap &= -3;
              break;
            case "w":
              this.calcMap &= -5;
              break;
            case "h":
              this.calcMap &= -9;
          }
        }),
        document.documentElement.addEventListener(
          "mousemove",
          this.handleMove,
          !0
        ),
        document.documentElement.addEventListener(
          "mousedown",
          this.handleDown,
          !0
        ),
        document.documentElement.addEventListener("mouseup", this.handleUp, !0),
        document.documentElement.addEventListener(
          "touchmove",
          this.handleMove,
          !0
        ),
        document.documentElement.addEventListener(
          "touchstart",
          this.handleDown,
          !0
        ),
        document.documentElement.addEventListener(
          "touchend",
          this.handleUp,
          !0
        ),
        this.emitEvent("mount");
    },
    beforeUnmount() {
      document.documentElement.removeEventListener(
        "mousemove",
        this.handleMove,
        !0
      ),
        document.documentElement.removeEventListener(
          "mousedown",
          this.handleDown,
          !0
        ),
        document.documentElement.removeEventListener(
          "mouseup",
          this.handleUp,
          !0
        ),
        document.documentElement.removeEventListener(
          "touchmove",
          this.handleMove,
          !0
        ),
        document.documentElement.removeEventListener(
          "touchstart",
          this.handleDown,
          !0
        ),
        document.documentElement.removeEventListener(
          "touchend",
          this.handleUp,
          !0
        ),
        this.emitEvent("destroy");
    },
    methods: {
      setMaximize(e) {
        $_$();
        const t = this.$el.parentElement;
        e
          ? ((this.prevState = { w: this.w, h: this.h, l: this.l, t: this.t }),
            (this.t = this.l = 0),
            (this.w = t.clientWidth),
            (this.h = t.clientHeight))
          : this.restoreSize();
      },
      restoreSize() {
        $_$();
        this.prevState &&
          ((this.l = this.prevState.l),
          (this.t = this.prevState.t),
          (this.h = this.prevState.h),
          (this.w = this.prevState.w));
      },
      setupDragElements(e) {
        this.$el.querySelectorAll(".drag-el").forEach((i) => {
          i.classList.remove("drag-el");
        });
        const n = this.$el.querySelectorAll(e);
        n.forEach((i) => {
          i.classList.add("drag-el");
        }),
          (this.dragElements = Array.prototype.slice.call(n));
      },
      emitEvent(e, t) {
        $_$();
        this.$emit(e, {
          eventName: e,
          left: this.l,
          top: this.t,
          width: this.w,
          height: this.h,
          cmp: this,
          ...t,
        });
      },
      handleMove(e) {
        $_$();
        if (this.resizeState !== 0) {
          this.dragState ||
            (isNaN(this.w) && (this.w = this.$el.clientWidth),
            isNaN(this.h) && (this.h = this.$el.clientHeight));
          let t, n;
          if (
            (e.touches && e.touches.length >= 0
              ? ((t = e.touches[0].clientY), (n = e.touches[0].clientX))
              : ((t = e.clientY), (n = e.clientX)),
            this.maximize && this.prevState)
          ) {
            const o = this.parent.width,
              a = this.parent.height;
            this.restoreSize(),
              (this.prevState = void 0),
              (this.t = t > a / 2 ? a - this.h : 0),
              (this.l = n > o / 2 ? o - this.w : 0),
              this.emitEvent("maximize", { state: !1 });
          }
          let i = n - this.mouseX + this.offsetX,
            s = t - this.mouseY + this.offsetY;
          if (this.$el.getBoundingClientRect) {
            const o = this.$el.getBoundingClientRect(),
              a = o.width / this.$el.offsetWidth || 1,
              d = o.height / this.$el.offsetHeight || 1;
            (i /= a), (s /= d);
          }
          (this.offsetX = this.offsetY = 0),
            this.resizeState & M["resizable-r"].bit &&
              (!this.dragState && this.w + i < this.minW
                ? (this.offsetX = i - (i = this.minW - this.w))
                : !this.dragState &&
                  this.maxW &&
                  this.w + i > this.maxW &&
                  (!this.fitParent || this.w + this.l < this.parent.width)
                ? (this.offsetX = i - (i = this.maxW - this.w))
                : this.fitParent &&
                  this.l + this.w + i > this.parent.width &&
                  (this.offsetX =
                    i - (i = this.parent.width - this.l - this.w)),
              this.calcMap & E.w && (this.w += this.dragState ? 0 : i)),
            this.resizeState & M["resizable-b"].bit &&
              (!this.dragState && this.h + s < this.minH
                ? (this.offsetY = s - (s = this.minH - this.h))
                : !this.dragState &&
                  this.maxH &&
                  this.h + s > this.maxH &&
                  (!this.fitParent || this.h + this.t < this.parent.height)
                ? (this.offsetY = s - (s = this.maxH - this.h))
                : this.fitParent &&
                  this.t + this.h + s > this.parent.height &&
                  (this.offsetY =
                    s - (s = this.parent.height - this.t - this.h)),
              this.calcMap & E.h && (this.h += this.dragState ? 0 : s)),
            this.resizeState & M["resizable-l"].bit &&
              (!this.dragState && this.w - i < this.minW
                ? (this.offsetX = i - (i = this.w - this.minW))
                : !this.dragState &&
                  this.maxW &&
                  this.w - i > this.maxW &&
                  this.l >= 0
                ? (this.offsetX = i - (i = this.w - this.maxW))
                : this.fitParent &&
                  this.l + i < 0 &&
                  (this.offsetX = i - (i = -this.l)),
              this.calcMap & E.l && (this.l += i),
              this.calcMap & E.w && (this.w -= this.dragState ? 0 : i)),
            this.resizeState & M["resizable-t"].bit &&
              (!this.dragState && this.h - s < this.minH
                ? (this.offsetY = s - (s = this.h - this.minH))
                : !this.dragState &&
                  this.maxH &&
                  this.h - s > this.maxH &&
                  this.t >= 0
                ? (this.offsetY = s - (s = this.h - this.maxH))
                : this.fitParent &&
                  this.t + s < 0 &&
                  (this.offsetY = s - (s = -this.t)),
              this.calcMap & E.t && (this.t += s),
              this.calcMap & E.h && (this.h -= this.dragState ? 0 : s)),
            (this.mouseX = n),
            (this.mouseY = t);
          const m = this.dragState ? "drag:move" : "resize:move";
          this.emitEvent(m);
        }
      },
      handleDown(e) {
        if (
          !(
            e.target.closest &&
            e.target.closest(".resizable-component") !== this.$refs.parent
          )
        ) {
          for (let t in M)
            if (
              this.$el.contains(e.target) &&
              ((e.target.closest && e.target.closest(`.${t}`)) ||
                e.target.classList.contains(t))
            ) {
              t === "drag-el" && (this.dragState = !0),
                (document.body.style.cursor = M[t].cursor),
                e.touches && e.touches.length >= 1
                  ? ((this.mouseX = e.touches[0].clientX),
                    (this.mouseY = e.touches[0].clientY))
                  : (e.preventDefault && e.preventDefault(),
                    (this.mouseX = e.clientX),
                    (this.mouseY = e.clientY)),
                (this.offsetX = this.offsetY = 0),
                (this.resizeState = M[t].bit),
                (this.parent.height = this.$el.parentElement.clientHeight),
                (this.parent.width = this.$el.parentElement.clientWidth);
              const n = this.dragState ? "drag:start" : "resize:start";
              this.emitEvent(n);
              break;
            }
        }
      },
      handleUp() {
        if (this.resizeState !== 0) {
          (this.resizeState = 0), (document.body.style.cursor = "");
          const e = this.dragState ? "drag:end" : "resize:end";
          this.emitEvent(e), (this.dragState = !1);
        }
      },
    },
  };
function tt(e, t, n, i, s, m) {
  $_$();
  return (
    l(),
    u(
      "div",
      { ref: "parent", class: "resizable-component", style: Ee(m.style) },
      [
        U(e.$slots, "default", {}, void 0, !0),
        (l(!0),
        u(
          N,
          null,
          P(
            n.active,
            (o) =>
              $_$() &&
              re(
                (l(),
                u("div", { key: o, class: D("resizable-" + o) }, null, 2)),
                [[$e, !n.maximize]]
              )
          ),
          128
        )),
      ],
      4
    )
  );
}
const it = S(et, [
    ["render", tt],
    ["__scopeId", "data-v-17560544"],
  ]),
  nt = v({
    name: "MediaDraggableResizable",
    components: { VueResizable: it },
    props: {
      width: { type: Number, required: !0 },
      height: { type: Number, required: !0 },
      minWidth: { type: Number, default: 0 },
      minHeight: { type: Number, default: 0 },
      top: { type: Number, default: 0 },
      left: { type: Number, default: 0 },
      dragSelector: { type: String, default: ".js-drag" },
      fitParent: { type: Boolean, default: !1 },
      isUserSelected: { type: Boolean, default: !1 },
    },
    emits: ["dragStart", "dragEnd", "resizeStart", "resizeEnd"],
  });
function st(e, t, n, i, s, m) {
  $_$();
  const o = f("VueResizable");
  return (
    l(),
    w(
      o,
      {
        "onDrag:start": t[0] || (t[0] = (a) => e.$emit("dragStart")),
        "onDrag:end": t[1] || (t[1] = (a) => e.$emit("dragEnd")),
        "onResize:start": t[2] || (t[2] = (a) => e.$emit("resizeStart")),
        "onResize:end": t[3] || (t[3] = (a) => e.$emit("resizeEnd")),
        width: e.width,
        height: e.height,
        minWidth: e.minWidth,
        minHeight: e.minHeight,
        top: e.top,
        left: e.left,
        dragSelector: e.dragSelector,
        fitParent: e.fitParent,
        class: D([
          { "media-draggable-resizable--is-selected": e.isUserSelected },
          "media-draggable-resizable",
        ]),
      },
      {
        default: g(() => $_$() && [U(e.$slots, "default", {}, void 0, !0)]),
        _: 3,
      },
      8,
      [
        "width",
        "height",
        "minWidth",
        "minHeight",
        "top",
        "left",
        "dragSelector",
        "fitParent",
        "class",
      ]
    )
  );
}
const ot = S(nt, [
    ["render", st],
    ["__scopeId", "data-v-d73f72ac"],
  ]),
  x = { w: 250, h: 190 },
  j = { x: 10, y: 10 },
  at = v({
    name: "MediaDraggable",
    components: { MediaDraggableResizable: ot },
    props: { mediaEntity: { type: Object, required: !0 } },
    emits: ["interactionStarted", "interactionStopped"],
    setup(e, { emit: t }) {
      $_$();
      const { mediaEntity: n } = de(e),
        i = A(),
        { isRtl: s } = ue(),
        m = p(() => $_$() && r(n).isUserSelected);
      return {
        draggableResizableProps: p(() => {
          $_$();
          var d, h, z, T;
          const _ = r(n).boundingClientRect;
          let b = (d = _ == null ? void 0 : _.x) != null ? d : j.x;
          const I = (h = _ == null ? void 0 : _.y) != null ? h : j.y,
            C = Math.max(
              (z = _ == null ? void 0 : _.width) != null ? z : 0,
              x.w
            ),
            Y = Math.max(
              (T = _ == null ? void 0 : _.height) != null ? T : 0,
              x.h
            );
          return (
            !we(_ == null ? void 0 : _.x) &&
              r(s) &&
              (b = document.body.clientWidth - C - j.x),
            { x: b, y: I, w: C, h: Y }
          );
        }),
        isUserSelected: m,
        minSizes: x,
        dragStart: () => {
          $_$();
          t("interactionStarted"),
            i.mediaUnActiveAllMedia(),
            i.setIsUserSelected(r(n).id, !0);
        },
      };
    },
  });
function rt(e, t, n, i, s, m) {
  $_$();
  const o = f("MediaDraggableResizable");
  return (
    l(),
    w(
      o,
      {
        onDragStart: e.dragStart,
        onDragEnd: t[0] || (t[0] = (a) => e.$emit("interactionStopped")),
        onResizeStart: t[1] || (t[1] = (a) => e.$emit("interactionStarted")),
        onResizeEnd: t[2] || (t[2] = (a) => e.$emit("interactionStopped")),
        width: e.draggableResizableProps.w,
        height: e.draggableResizableProps.h,
        minWidth: e.minSizes.w,
        minHeight: e.minSizes.h,
        top: e.draggableResizableProps.y,
        left: e.draggableResizableProps.x,
        fitParent: "",
        dragSelector: ".js-media-drag",
        isUserSelected: e.isUserSelected,
        class: "media-draggable",
      },
      { default: g(() => $_$() && [U(e.$slots, "default")]), _: 3 },
      8,
      [
        "onDragStart",
        "width",
        "height",
        "minWidth",
        "minHeight",
        "top",
        "left",
        "isUserSelected",
      ]
    )
  );
}
const dt = S(at, [["render", rt]]),
  lt = v({
    name: "MediaOverview",
    components: { MediaContainer: me, MediaDraggable: dt, MediaContent: V },
    props: {
      mediaEntities: { type: Array, required: !0 },
      theme: { type: String, default: H.primary },
    },
    setup(e) {
      $_$();
      const t = A(),
        n = J(!1),
        i = () => {
          n.value = !0;
        },
        s = () => {
          n.value = !1;
        },
        m = (d) => {
          t.mediaSelectMedia({ ...d, target: $.SIDE });
        },
        o = (d) => {
          t.mediaUnselectMedia(d);
        },
        a = p(() => ({ [`media-overview--theme-${e.theme}`]: !!e.theme }));
      return {
        onReturnMedia: m,
        onCloseMedia: o,
        pointerEventsBlocked: n,
        blockPointerEvents: i,
        unblockPointerEvents: s,
        mediaOverviewClasses: a,
      };
    },
  }),
  mt = { class: "media-overview", dir: "ltr" };
function ht(e, t, n, i, s, m) {
  $_$();
  const o = f("MediaContent"),
    a = f("MediaContainer"),
    d = f("MediaDraggable");
  return (
    l(),
    u("div", mt, [
      (l(!0),
      u(
        N,
        null,
        P(
          e.mediaEntities,
          (h) =>
            $_$() &&
            (l(),
            w(
              d,
              {
                key: h.id,
                onInteractionStarted: e.blockPointerEvents,
                onInteractionStopped: e.unblockPointerEvents,
                mediaEntity: h,
                class: "media-overview__window",
                dir: "auto",
              },
              {
                default: g(
                  () =>
                    $_$() && [
                      c(
                        a,
                        {
                          onReturn: e.onReturnMedia,
                          onClose: e.onCloseMedia,
                          mediaEntity: h,
                          pointerEventsBlocked: e.pointerEventsBlocked,
                          class: D([
                            "media-overview__container",
                            e.mediaOverviewClasses,
                          ]),
                          theme: e.theme,
                        },
                        {
                          default: g(
                            () =>
                              $_$() && [
                                c(
                                  o,
                                  {
                                    mediaEntity: h,
                                    class: "media-overview__content",
                                  },
                                  null,
                                  8,
                                  ["mediaEntity"]
                                ),
                              ]
                          ),
                          _: 2,
                        },
                        1032,
                        [
                          "onReturn",
                          "onClose",
                          "mediaEntity",
                          "pointerEventsBlocked",
                          "class",
                          "theme",
                        ]
                      ),
                    ]
                ),
                _: 2,
              },
              1032,
              ["onInteractionStarted", "onInteractionStopped", "mediaEntity"]
            ))
        ),
        128
      )),
    ])
  );
}
const ct = S(lt, [
    ["render", ht],
    ["__scopeId", "data-v-5361feea"],
  ]),
  ut = v({
    name: "MediaSide",
    components: { MediaContainer: me, MediaContent: V },
    props: {
      mediaEntities: { type: Array, required: !0 },
      theme: { type: String, default: H.primary },
      isRightSectionCompact: { type: Boolean, default: !1 },
    },
    setup(e) {
      $_$();
      const { isRightSectionCompact: t } = de(e),
        n = A(),
        i = K(),
        s = p(() => ($_$() && i.isRightSectionHidden) || r(t)),
        m = p(() => i.isRightSectionHover),
        o = p(() => $_$() && r(s) && !r(m));
      return {
        onDragMedia: (z) => {
          n.mediaSelectMedia({ ...z, target: $.OVERVIEW });
        },
        onReturnMedia: (z) => {
          n.mediaSelectMedia({ ...z, target: $.SIDE });
        },
        onCloseMedia: (z) => {
          n.mediaUnselectMedia(z);
        },
        isRightSectionHidden: s,
        isMediaSideFixed: o,
        themeType: H,
      };
    },
  });
function pt(e, t, n, i, s, m) {
  $_$();
  const o = f("MediaContent"),
    a = f("MediaContainer"),
    d = Me("optimized-scroll");
  return e.mediaEntities.length
    ? re(
        (l(),
        w(
          Q(e.isRightSectionHidden ? "UiScrollbar" : "div"),
          {
            key: 0,
            class: D([
              "media-side",
              { "media-side--fixed": e.isMediaSideFixed },
            ]),
            theme: e.themeType.gray,
          },
          {
            default: g(
              () =>
                $_$() && [
                  (l(!0),
                  u(
                    N,
                    null,
                    P(
                      e.mediaEntities,
                      (h) =>
                        $_$() &&
                        (l(),
                        w(
                          a,
                          {
                            key: h.id,
                            onDrag: e.onDragMedia,
                            onReturn: e.onReturnMedia,
                            onClose: e.onCloseMedia,
                            mediaEntity: h,
                            class: "media-side__item",
                            theme: e.theme,
                          },
                          {
                            default: g(
                              () =>
                                $_$() && [
                                  c(
                                    o,
                                    {
                                      mediaEntity: h,
                                      class: "media-side__content",
                                    },
                                    null,
                                    8,
                                    ["mediaEntity"]
                                  ),
                                ]
                            ),
                            _: 2,
                          },
                          1032,
                          [
                            "onDrag",
                            "onReturn",
                            "onClose",
                            "mediaEntity",
                            "theme",
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
          ["theme", "class"]
        )),
        [[d]]
      )
    : k("", !0);
}
const ft = S(ut, [
    ["render", pt],
    ["__scopeId", "data-v-922b963c"],
  ]),
  gt = { [$.BOARD]: Ye, [$.FULLSCREEN]: xe, [$.OVERVIEW]: ct, [$.SIDE]: ft },
  _t = v({
    name: "MediaApp",
    props: {
      target: { required: !0, type: String, validator: (e) => fe.includes(e) },
      renderSideAsOverview: { type: Boolean, default: !1 },
      gameId: { default: void 0, type: Number },
      theme: { type: String, default: H.primary },
      type: { default: void 0, type: String, validator: (e) => pe.includes(e) },
      isDestroyEntities: { default: !1, type: Boolean },
      isRightSectionCompact: { type: Boolean, default: !1 },
    },
    setup(e) {
      $_$();
      const t = A();
      le(), t.repopulateMedia();
      const n = J(!1),
        i = p(() => {
          const o =
            e.renderSideAsOverview && e.target === $.SIDE
              ? $.OVERVIEW
              : e.target;
          return gt[o];
        }),
        s = p(() => {
          const { target: o, gameId: a, type: d } = e;
          let h = t.getMediaEntities({ gameId: a, target: o, type: d });
          return (
            e.renderSideAsOverview &&
              (h = [
                ...h,
                ...t.getMediaEntities({ gameId: a, target: $.SIDE, type: d }),
              ]),
            h
          );
        });
      ae(() => {
        $_$();
        e.isDestroyEntities && r(s).map((o) => t.mediaUnselectMedia(o));
      });
      const { updateTokenOnMounted: m } = Ie();
      return (
        oe(() => {
          m(), (n.value = !0);
        }),
        { component: i, mediaEntitiesFiltered: s, mounted: n }
      );
    },
  });
function bt(e, t, n, i, s, m) {
  $_$();
  return e.mounted
    ? (l(),
      w(
        Q(e.component),
        {
          key: 0,
          mediaEntities: e.mediaEntitiesFiltered,
          theme: e.theme,
          isRightSectionCompact: e.isRightSectionCompact,
        },
        null,
        8,
        ["mediaEntities", "theme", "isRightSectionCompact"]
      ))
    : k("", !0);
}
const yt = S(_t, [["render", bt]]),
  wt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: yt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { yt as MediaApp, wt as MediaApp$1, $t as createBettingLayoutAppConfig };
