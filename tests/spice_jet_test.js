Feature("Spice Jet");

Scenario("Spice Jet Test", async ({ I, spiceJetHomePage }) => {
  I.amOnPage("https://www.spicejet.com/");
  I.click(spiceJetHomePage.roundTripButton);
  spiceJetHomePage.selectFromCityByText("Agra");
  spiceJetHomePage.selectToCityByText("Jaipur");
  await spiceJetHomePage.selectTravelDate("May", 1);
  await spiceJetHomePage.selectTravelDate("May", 15);
  I.click(spiceJetHomePage.passengerMenu);
  await spiceJetHomePage.addPassengers(2, "Adult");
  await spiceJetHomePage.addPassengers(3, "Children");
  await spiceJetHomePage.addPassengers(1, "Infant");
  spiceJetHomePage.selectCurrencyByText("USD");
  await spiceJetHomePage.waitForNaviationOnClick(
    spiceJetHomePage.searchFlightButton
  );
  let url = await I.grabCurrentUrl();
  console.log(url);
});
