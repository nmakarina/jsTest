import {test, describe, it, afterEach, beforeEach} from '@jest/globals';
import BasePage from "../pages/BasePage";

let mainPage;
let resultPage;
const url = 'http://google.com';


describe('google tests', () =>
{
    beforeEach(async ()=>{
        mainPage = await BasePage.startTest(url,false);
        });

    it('search by Google', async () => {
        await mainPage.isLoad();
        resultPage = await mainPage.searchByGoogle("Puppeteer");
        await resultPage.isLoad();
        await resultPage.verifySearchResult("Puppeteer");
        await resultPage.getAlResult("Puppeteer");
    })

    afterEach(async ()=>{
        await BasePage.close();
    })
})