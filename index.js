const puppeteer = require('puppeteer');
require('dotenv/types').config({path:'./.env'});
async function twitter(){
   let urlTwitter = 'https://twitter.com/login';
   let usuario = process.env.USUARIO;
   let senha = process.env.SENHA;
   
   const browser = await puppeteer.launch({headless: false});

   const page = await browser.newPage();
   await page.setViewport({
    width: 1350,
    height: 2200,
    deviceScaleFactor: 1
  });
   await page.goto(urlTwitter);
   await page.waitFor('input[name="session[password]"]')
   await page.type('input[name="session[username_or_email]"]',usuario,{delay: 10})
   await page.type('input[name="session[password]"]',senha,{delay: 10})
   await page.keyboard.press('Enter'); 
   await page.waitFor(15000);
   //await page.screenshot({path:"teste.png", fullPage: true})
   await page.screenshot({path:"teste.png", fullPage: false, clip: { x: 0, y: 0, width: 1350, height: 2200 } });
   
   browser.close()
}

twitter()