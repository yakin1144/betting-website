import $_$ from "./$_$.js";
$_$();
import {
  runtimeCore_esmBundler_defineComponent as S,
  runtimeCore_esmBundler_resolveComponent as h,
  runtimeCore_esmBundler_createElementBlock as M,
  runtimeCore_esmBundler_openBlock as v,
  runtimeCore_esmBundler_createVNode as c,
  reactivity_esmBundler_unref as r,
  size_constants_sizeType as l,
  runtimeCore_esmBundler_withCtx as m,
  runtimeCore_esmBundler_createTextVNode as B,
  shared_esmBundler_toDisplayString as g,
  theme_constants_themeType as T,
  reactivity_esmBundler_ref as p,
  index_getConfigs as U,
  useGlobalStore as E,
  runtimeCore_esmBundler_computed as d,
  runtimeCore_esmBundler_watch as w,
  runtimeCore_esmBundler_onMounted as D,
  execAsync as N,
  appendScript as $,
  runtimeCore_esmBundler_onUnmounted as k,
  runtimeCore_esmBundler_createBlock as b,
  runtimeCore_esmBundler_createCommentVNode as L,
} from "../../../shared-assets/Desktop/__shared_base-app_0c5f9cda0c.js";
import {
  _export_sfc as z,
  MEDIA_IFRAME_NEW_PLAYER_PARAMS as V,
  MEDIA_PLAYER_EMBED_PATH_NEW as q,
} from "./entry-50afb6f36c.js";
const x = { class: "media-video-auth" },
  R = S({
    __name: "MediaVideoAuth",
    setup(e) {
      const t = () => {
        var o;
        (o = window.coreBus) == null || o.emit("triggerShowLoginDropdown");
      };
      return (o, s) => {
        $_$();
        const n = h("UiCaption"),
          u = h("UiButton");
        return (
          v(),
          M("div", x, [
            c(
              n,
              { size: r(l).xs },
              {
                default: m(() => $_$() && [B(g(o.$T("auth_log_for_view")), 1)]),
                _: 1,
              },
              8,
              ["size"]
            ),
            c(
              u,
              {
                onClick: t,
                size: r(l).s,
                theme: r(T).accent,
                title: o.$T("auth_in"),
              },
              {
                default: m(
                  () =>
                    $_$() && [
                      c(
                        n,
                        { size: r(l).xs },
                        {
                          default: m(() => $_$() && [B(g(o.$T("auth_in")), 1)]),
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
              ["size", "theme", "title"]
            ),
          ])
        );
      };
    },
  }),
  H = z(R, [["__scopeId", "data-v-c4d653b9"]]),
  W = S({
    name: "MediaVideoPlayer",
    components: { MediaVideoAuth: H },
    props: {
      lng: { type: String, required: !0 },
      sportId: { type: [String, Number], required: !0 },
      gameId: { type: Number, required: !0 },
      videoId: { type: [String, Number], required: !0 },
      matchName: { type: String, default: "Live" },
      autoplay: { type: Boolean, default: !0 },
      userVideoToken: { type: String, default: void 0 },
      videoSourceType: { type: String, default: "LIVE" },
    },
    setup(e) {
      $_$();
      const t = p(),
        o = p(),
        [s, n] = U(-1e3, 317),
        u = E(),
        _ = d(() => u.isUserAuth),
        a = p(!1),
        I = d(() => e.videoId.toString()),
        y = d(() => ({
          El: o.value,
          SourceType: e.videoSourceType,
          Source: I.value,
          Language: e.lng,
          Auth: e.userVideoToken,
          App: n,
          AppVer: "1025",
          Ref: s,
          PrefixPath: "/zone-static",
          Sport: +e.sportId,
          UseCinemaAPI: !0,
          GameID: e.gameId,
          MatchName: e.matchName,
          Autoplay: e.autoplay,
        })),
        f = () => {
          t.value = window.VideoCore_WS.VideoPlayerCore.Create(y.value);
        };
      w(y, () => {
        t.value && (t.value.Dispose(), f());
      });
      const P = d(() => $_$() && !r(_) && r(a));
      return (
        D(async () => {
          $_$();
          var i;
          let A, C;
          (i = document.querySelector(`script[src^="${V.PATH}"]`)) == null ||
            i.remove(),
            ([A, C] = N(() => $_$() && $(V.PATH + q + Math.random()))),
            await A,
            C(),
            f();
        }),
        k(() => {
          var i;
          return (i = t.value) == null ? void 0 : i.Dispose();
        }),
        {
          isMediaVideoAuth: P,
          container: o,
          setVpcUnauthorized: () => {
            (a.value = !0), t.value && t.value.Dispose();
          },
        }
      );
    },
  });
function G(e, t, o, s, n, u) {
  $_$();
  const _ = h("MediaVideoAuth");
  return (
    v(),
    M(
      "div",
      {
        ref: "container",
        "on:vpcUnauthorized":
          t[0] ||
          (t[0] = (...a) => e.setVpcUnauthorized && e.setVpcUnauthorized(...a)),
      },
      [e.isMediaVideoAuth ? (v(), b(_, { key: 0 })) : L("", !0)],
      544
    )
  );
}
const J = z(W, [["render", G]]);
export { J as MediaVideoPlayer };
