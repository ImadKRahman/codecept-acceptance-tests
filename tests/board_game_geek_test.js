const common = require("../pages/common");

Feature("Board Game Geek");

Scenario("Board Game Geek Test", async ({ I, advSearchPage, commonPage }) => {
  let gameTitle = "Harry Potter and the Sorcerer's Stone Trivia Game";
  I.amOnPage("https://www.boardgamegeek.com/advsearch/boardgame.com/");
  I.fillField(advSearchPage.titleTextField, gameTitle);
  I.fillField(advSearchPage.yearPublishMinTextField, "1999");
  I.fillField(advSearchPage.yearPublishMaxTextField, "2000");
  await commonPage.scrollToElement(advSearchPage.minPlayingTimeTextField);
  advSearchPage.selectMinPlayingTime("15 minutes");
  advSearchPage.selectMaxPlayingTime("1.5 hours");
  I.click(advSearchPage.submitButton);
  I.see(gameTitle);
  let f = await I.grabAttributeFrom(
    `//a[contains(text(), "${gameTitle}")]`,
    "href"
  );
  console.log(f);
});
