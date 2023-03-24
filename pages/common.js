const { I } = inject();

module.exports = {
  // insert your locators and methods here
  async scrollToElement(selector) {
    I.usePlaywrightTo("scroll to element", async ({ page }) => {
      await page.locator(selector).scrollIntoViewIfNeeded();
    });
  },
};
