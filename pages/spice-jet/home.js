const { I } = inject();
module.exports = {
    // insert your locators and methods here
    roundTripButton: "div[data-testid='round-trip-radio-button'] svg",
    originCityTextField: "div[data-testid='to-testID-origin']",
    destinationCityTextField: "div[data-testid='to-testID-destination']",
    calendarForwardButton: "div[data-testid='undefined-calendar-picker'] div:nth-child(1) svg[data-testid='svg-img'] circle",
    passengerMenu: "div[data-testid='home-page-travellers']",
    currencyMenu: "//div[text()='Currency']/..",
    searchFlightButton: "div[data-testid='home-page-flight-cta']",
    //functions
    async addPassengers(numberOfPassengers, typeOfPassenger) {
        let passenger = `div[data-testid='${typeOfPassenger}-testID-plus-one-cta']`;
        numberOfPassengers =
            typeOfPassenger === "Adult" ? numberOfPassengers - 1 : numberOfPassengers;
        for (let i = 0; i < numberOfPassengers; i++) {
            I.click(passenger);
        }
    },
    selectFromCityByText(text) {
        I.click(this.originCityTextField);
        I.click(`//div[text()='${text}']`);
    },
    selectToCityByText(text) {
        I.click(this.destinationCityTextField);
        I.click(`//div[text()='${text}']`);
    },
    async moveCalendarForward(month) {
        let calendarMonthDisplayed = `${month} 2023`;
        let x = 6;
        let isMonthDisplayed = false;
        while (!isMonthDisplayed && x != 0) {
            isMonthDisplayed = await tryTo(() => I.see(calendarMonthDisplayed));
            if (!isMonthDisplayed) {
                I.click(this.calendarForwardButton);
            }
            x--;
        }
    },
    async selectTravelDate(month, day) {
        await this.moveCalendarForward(month);
        I.click(`div[data-testid='undefined-month-${month}-2023'] div[data-testid='undefined-calendar-day-${day}']`);
    },
    selectCurrencyByText(currency) {
        I.click(this.currencyMenu);
        let currencyOption = `//div[text()='${currency}']/..`;
        I.click(currencyOption);
    },
    async waitForNaviationOnClick(selector) {
        I.usePlaywrightTo("wait for navigation", async ({ page }) => {
            const navigationPromise = page.waitForNavigation();
            await page.locator(selector).click();
            await navigationPromise;
        });
    },
};
