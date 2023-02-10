import {expect} from '@jest/globals';
import {sleep} from './BasePage'


export default class ResultPage {
    constructor(page) {
        this.page = page;
        this.title = "a#logo";
        this.input = "input[aria-label='Найти']";
        this.searchButton = "button[aria-label='Поиск'] svg";
    }

    async isLoad() {
        await this.page.waitForSelector(this.title, { visible: true });
        await expect(this.page.$(this.title));
    }

    //first way
    async verifySearchResult(text){
        await this.page.waitForXPath("//h3[contains(text(),'"+text+"')]", { visible: true });
        await sleep(1000);
        //console.log((await this.page.$x("//h3[contains(text(),'"+text+"')]")).length);
        await this.page.screenshot({ path: 'example.png', fullPage: true });
        await expect((await this.page.$x("//h3[contains(text(),'"+text+"')]")).length).toBeGreaterThan(1);
    }

    //second way
    async getAlResult(text){
        await this.page.waitForXPath("//h3[contains(text(),'"+text+"')]", { visible: true });
        const textMap =  await this.page.$$eval("h3", option => option.map(item => item.textContent));
        console.log(textMap)
        expect(textMap.length).toBeGreaterThan(2);
    }

    async searchByGoogle(text){
        await this.page.waitForSelector(this.input, { visible: true });
        await this.page.type(this.input, text, { delay: 100 });
        await this.page.click(this.searchButton);
        return this;
    }
}