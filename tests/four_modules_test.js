Feature("Four Modules");

Scenario(
  "Four Modules Test",
  async ({ I, fourModulesHomePage, aboutIELTSPage, commonPage }) => {
    I.amOnPage("https://www.fourmodules.com/");
    await fourModulesHomePage.hoverOverMenu(
      fourModulesHomePage.aboutIELTSNavMenu
    );
    I.see("About");
    I.see("Pricing & Package");
    I.click("About");
    I.waitUrlEquals("https://www.fourmodules.com/ielts");
    // fourModulesHomePage.scrollToElement(aboutIELTSPage.anyQuestionsButton)
    await commonPage.scrollToElement(aboutIELTSPage.anyQuestionsButton);
    I.see("ANY QUESTIONS?", aboutIELTSPage.anyQuestionsButton);
    I.click(aboutIELTSPage.anyQuestionsButton);
    I.see("How can we help?", aboutIELTSPage.helpModal);
    I.click(aboutIELTSPage.helpModalCloseButton);
    I.click("Take Free Demo");
    I.waitUrlEquals("https://www.fourmodules.com/signup");
    I.seeInCurrentUrl("/signup");
  }
);
