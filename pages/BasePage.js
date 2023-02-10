const puppeteer = require('puppeteer');
import MainPage from "./MainPage"

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default class BasePage {

    static async startTest(domain, headlessStatus) {
        this.browser = await puppeteer.launch({ headless: headlessStatus,
            defaultViewport: null,
            args: [
                '--start-maximized'
             //   "--window-size=1920,1040" //для headless
            ] });
        let page = await this.browser.newPage();
        page.setDefaultTimeout(1000 * 60 * 5);
        //await page.setViewport({ width: 1920, height: 1080 })
        await page.goto(domain);
        return new MainPage(page);
    }

    static async close(){
        await this.browser.close()
    }
}