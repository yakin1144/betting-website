"use strict";
(self.webpackChunkv3_microfrontend_banners =
  self.webpackChunkv3_microfrontend_banners || []).push([
  [85383299],
  {
    85383299: (e, t, r) => {
      r.r(t), r.d(t, { AppStorage: () => g, AppStorageKeys: () => I });
      var s = r(47535664),
        i = r.n(s);
      const o = 1,
        a = "AppStorage",
        n = "app_storage";
      class _ extends Error {
        constructor(e) {
          super(),
            (this.message = `The AppStorage key '${e}' is not registered, consider adding it to the allowed AppStorage key list`),
            (this.name = "UnregisteredAppStorageKey"),
            (this.stack = new Error(this.message).stack);
        }
      }
      const E = "BrowserStorage",
        S = {
          _driver: E,
          _support: !0,
          storage: i(),
          allowedStorageKeys: new Set(),
          keyExists(e) {
            return this.allowedStorageKeys.has(e);
          },
          _initStorage({
            name: e,
            version: t,
            storeName: r,
            appStorageKeys: s,
          }) {
            (this.allowedStorageKeys = new Set(s)),
              (this.storage = i().createInstance({
                name: e,
                version: t,
                storeName: r,
              }));
          },
          clear(e) {
            return this.storage.clear(e);
          },
          getItem(e, t) {
            if (!this.keyExists(e)) throw new _(e);
            return this.storage.getItem(e, t);
          },
          iterate(e, t) {
            return this.storage.iterate(e, t);
          },
          key(e, t) {
            return this.storage.key(e, t);
          },
          keys(e) {
            return this.storage.keys(e);
          },
          length(e) {
            return this.storage.length(e);
          },
          removeItem(e, t) {
            if (!this.keyExists(e)) throw new _(e);
            return this.storage.removeItem(e, t);
          },
          setItem(e, t, r) {
            if (!this.keyExists(e)) throw new _(e);
            return this.storage.setItem(e, t, r);
          },
        };
      let I = (function (e) {
        return (
          (e.HIDE_RIGHT_MENU = "hideRightMenu"),
          (e.TYPE_GAMES_GRID = "typeGamesGrid"),
          (e.FILTER_TYPES = "filterTypes"),
          (e.FILTER_COEFFICIENT = "filterCoefficient"),
          (e.FILTER_COEFFICIENT_INTERVAL = "filterCoefficientInterval"),
          (e.HISTORY_SEARCH = "historySearch"),
          (e.HIDE_SLIDER = "hideSlider"),
          (e.DEMO = "demo"),
          (e.DICTIONARIES_VERSION = "dictionariesVersion"),
          (e.SOUNDS_ON = "sounds-on"),
          (e.GO_TO_GAME = "goToGame"),
          (e.BONUSES_ACCORDEON = "bonusesAccordeon"),
          (e.IS_TURBO_MODE_ACTIVE = "isTurboModeActive"),
          (e.IS_ENABLED_SPIN_MOVEMENT = "isEnabledSpinMovement"),
          (e.IS_FAST_SPIN_ACTIVE = "isFastSpinActive"),
          (e.TWENTY_ONE_HERO = "twentyOneHero"),
          (e.CIRCUS_POKER_HOLD = "circusPokerHold"),
          (e.MAFIA_RICHES_TUTORIAL = "mafiaRichesTutorial"),
          (e.TREASURE_TOMB_TUTORIAL = "treasureTombTutorial"),
          (e.SUGAR_CASCADE_SPLASH_HIDE = "sugarCascadeSplashHide"),
          (e.AIR_CRASH_PLANE = "airCrashPlaneCustom"),
          (e.ONE_CLICK_SUMS = "nativeGame/oneClickValues"),
          (e.AUTO_GAME_COUNT = "nativeGame/autoGameCount"),
          (e.SPIN_AND_WIN_NATIVE = "spinAndWinNative"),
          e
        );
      })({});
      const g = (function (e) {
        const t = e.filter((t, r) => e.indexOf(t) !== r);
        if (t.length)
          throw new Error(`Duplicated AppStorage keys found: ${t.toString()}`);
        return (
          i().defineDriver(S),
          i().createInstance({
            driver: E,
            name: a,
            version: o,
            storeName: n,
            appStorageKeys: e,
          })
        );
      })(Object.values(I));
    },
  },
]);
