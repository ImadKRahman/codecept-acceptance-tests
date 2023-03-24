Feature("Clear Trips");
Scenario("Clear Trips Test", async ({ I, clearTripHomePage }) => {
  I.amOnPage("https://www.cleartrip.com/");
  await tryTo(() => I.click(clearTripHomePage.loginBannerCloseButton));
  I.click(clearTripHomePage.hotelListOption);
  I.waitUrlEquals("https://www.cleartrip.com/hotels");
  let title = await I.grabTitle();
  console.log(title);
  console.log("Search for Hotels");
});
