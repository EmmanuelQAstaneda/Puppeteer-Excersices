const puppeteer = require('puppeteer')

describe('Desafio numero 2 usando puppeteer.', () => {

    it('Click al boton \"Women\" utilizando el texto del boton.', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        await page.waitForSelector('head')
        const button = await page.$x('//*[contains(text(),\'Women\')]')
        button[0].click()
        await page.waitForXPath('//*[contains(text(),\'This category includes all the basics of your wardrobe and much more:\')]')

        await browser.close()
    })

    it('Click al boton \"Women\" utilizando el xpath del boton.', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        await page.waitForSelector('head')
        const button = await page.$x('//a [@title=\'Women\']')
        button[0].click()
        await page.waitForXPath('//*[contains(text(),\'This category includes all the basics of your wardrobe and much more:\')]')

        await browser.close()
    })

    it('Click al boton \"Women\" utilizando el css selector del boton.', async () => {
        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        await page.waitForSelector('head')
        await page.click('a[title=\"Women\"]',)
        await page.waitForXPath('//*[contains(text(),\'This category includes all the basics of your wardrobe and much more:\')]')

        await browser.close()
    })
})