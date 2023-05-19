const{Builder,By,Key,until} = require('selenium-webdriver');
const assert = require('assert');
const should = require('chai').should();
describe ('select the product in dropdown menu in women category',async ()=>{
  
     
    context('I search for a product', ()=> {
    
    it('I should get the product by navigating the dropdown menu in the desired category ', async ()=>{
        const driver = await new Builder().forBrowser('firefox').build();
    try{
    await driver.get('https://magento.softwaretestingboard.com');
 
    //Click on Women Link
    await driver.wait(until.elementLocated(By.css('#ui-id-4')),1000);
    const Women = await driver.findElement(By.css('#ui-id-4'));
    await Women.click();
    //Click on tees Link
    await driver.wait(until.elementLocated(By.linkText('Tees')),1000);
    const Tees = await driver.findElement(By.linkText('Tees'));
    await Tees.click();
    //Click on 4th  Product in Tees
    await driver.wait(until.elementLocated(By.partialLinkText('Diva Gym T')),1000);
    const Product = await driver.findElement(By.partialLinkText('Diva Gym T'));
    await Product.click();
    //Add the size
    await driver.wait(until.elementLocated(By.css('#option-label-size-143-item-166')),1000);
    const size= await driver.findElement(By.css('#option-label-size-143-item-166'));
    await size.click();
    //Add the color
    await driver.wait(until.elementLocated(By.css('#option-label-color-93-item-53')),1000);
    const color= await driver.findElement(By.css('#option-label-color-93-item-53'));
    await color.click();
    //Add to Cart
    await driver.wait(until.elementLocated(By.css('#product-addtocart-button')),1000);
    const Cart = await driver.findElement(By.css('#product-addtocart-button'));
    await Cart.click();

    //Find the fourth product
   await driver.wait(until.elementLocated(By.css('.base')),4000);
   const productTitle = await driver.findElement(By.css('.base'));
   //Extract text
   let productTitleText = await productTitle.getText();
   productTitleText.should.equal('Diva Gym Tee');
   await driver.quit();
}catch (error) {
    console.log(error);
}finally{
   
}
    });
  });
});