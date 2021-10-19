const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('Desafio numero 3: Usando Aserttions.', () => {

    let browser, page
    var product = 5

    before(async()=>{
        browser = await puppeteer.launch({ headless: false })
        page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
    })

    after(async()=>{
        await browser.close()
    })

    it('Revisar los elementos de la tienda.', async () => {
                
        const price = await page.$$eval('#homefeatured >li > div > div[class="right-block"] > div > span[itemprop="price"]',(options) => options.map((option) => option.textContent))
        await page.click('[data-id-product="'+product+'"]')
        await page.waitForSelector('span[title="Close window"]', {visible : true})
        await page.click('span[title="Close window"]')
        await page.click('a[title="View my shopping cart"]')
        await page.waitForSelector('td[data-title="Unit price"] > span > span',{visible : true})
        const priceCar = await page.$eval('td[data-title="Unit price"] > span > span',(option) => option.textContent) 
        await expect(price[product-1]).to.include(priceCar)
                
    })
})
  
