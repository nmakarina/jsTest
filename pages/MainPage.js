import {expect} from '@jest/globals';
import ResultPage from "./ResultPage";


export default class MainPage {
    constructor(page) {
        this.page = page;
        this.title = "img[alt='Google']";
        this.input = "input[aria-label='Найти']";
        this.searchButton = "input[value='Поиск в Google']";
    }

    async isLoad() {
        await reporter.startStep("Verify - page is loaded");
        await expect(this.page.$(this.title));
        await reporter.endStep();
    }

    async searchByGoogle(text){
        await reporter.startStep("Search by Google: " +text);
        await this.page.waitForSelector(this.input, { visible: true });
        await this.page.type(this.input, text, { delay: 100 });
        await this.page.click(this.searchButton);
        await reporter.endStep();
        return new ResultPage(this.page);
    }
}