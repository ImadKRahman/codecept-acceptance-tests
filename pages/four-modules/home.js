const { I } = inject();
module.exports = {
  // insert your locators and methods here
  aboutIELTSNavMenu: "a.main-menu[href='/ielts']",
  async hoverOverMenu(menuSelector) {
    I.usePlaywrightTo("hover on menu", async ({ page }) => {
      await page.locator(menuSelector).hover();
    });
  },
};
