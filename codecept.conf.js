const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: false,
      browser: "chromium",
    },
  },
  include: {
    I: "./steps_file.js",
    spiceJetHomePage: "./pages/spice-jet/home.js",
    fourModulesHomePage: "./pages/four-modules/home.js",
    aboutIELTSPage: "./pages/four-modules/aboutIELTS.js",
    clearTripHomePage: "./pages/clear-trips/home.js",
    advSearchPage: "./pages/board-game-geek/advSearchPage.js",
    commonPage: "./pages/common.js",
  },
  name: "c2",
};
