/// <reference types='codeceptjs' />
type steps_file = typeof import("./steps_file.js");
type spiceJetHomePage = typeof import("./pages/spice-jet/home.js");
type fourModulesHomePage = typeof import("./pages/four-modules/home.js");
type aboutIELTSPage = typeof import("./pages/four-modules/aboutIELTS.js");
type clearTripHomePage = typeof import("./pages/clear-trips/home.js");
type advSearchPage = typeof import("./pages/board-game-geek/advSearchPage.js");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    spiceJetHomePage: spiceJetHomePage;
    fourModulesHomePage: fourModulesHomePage;
    aboutIELTSPage: aboutIELTSPage;
    clearTripHomePage: clearTripHomePage;
    advSearchPage: advSearchPage;
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
