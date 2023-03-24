const { I } = inject();

module.exports = {
  //locators
  titleTextField: "Title",
  yearPublishMinTextField: "#advsearch-yearpublished-min",
  yearPublishMaxTextField: "#advsearch-yearpublished-max",
  minPlayingTimeTextField: "#advsearch-min-playing-time",
  maxPlayingTimeTextField: "#advsearch-max-playing-time",
  submitButton: "input[type='submit']",

  //functions
  selectMinPlayingTime(playTime) {
    I.usePlaywrightTo("To Select min playing times", async ({ page }) => {
      await page.locator(this.minPlayingTimeTextField).selectOption(playTime);
    });
  },

  async selectMaxPlayingTime(playTime) {
    I.usePlaywrightTo("To Select max playing times", async ({ page }) => {
      await page.locator(this.maxPlayingTimeTextField).selectOption(playTime);
    });
  },
};
