import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><header class="header"><div class="logo">1xBet Clone</div><nav class="nav"><a href="#sports">Sports</a><a href="#live">Live</a><a href="#casino">Casino</a><a href="#promotions">Promotions</a><button class="login-btn">Login</button><button class="register-btn">Register</button></nav></header><section class="hero"><h1>Bet on Your Favorite Sports &amp; Games</h1><p>Highest odds, live betting, and instant payouts!</p><button class="cta-btn">Start Betting Now</button></section><section class="events"><h2>Featured Events</h2><div class="event-grid"><div class="event-card"><h3>Football Match</h3><p>Team A vs Team B</p><span class="odds">2.45</span></div><div class="event-card"><h3>Basketball Game</h3><p>Team X vs Team Y</p><span class="odds">1.85</span></div><div class="event-card"><h3>Tennis Match</h3><p>Player 1 vs Player 2</p><span class="odds">1.90</span></div></div></section><footer class="footer"><p>© 2024 Betting Website. All rights reserved.</p></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-QtPsn9YL.js.map
