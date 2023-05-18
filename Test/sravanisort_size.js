// Includes
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;
/*
   As a customer,
    I want to be able to sort the item by size for a specific product, 
    so that I can easily find the item that fits.
*/
 describe('Sort by size', () => {
// Test case:
  context('I sort the item according to size', () => {
    it('I should able to see the item as per the sorted size', async () => {
    // Launch the web browser
    const driver = await new Builder().forBrowser('firefox').build();
    try{
      //Navigate to the application
      await driver.get('https://magento.softwaretestingboard.com/');
      // Get the search input
      await driver.wait(until.elementLocated(By.css('#search')), 1000);
      await driver.findElement(By.id('search')).sendKeys('shirt', Key.RETURN);

      //Select which product you want to buy
      await driver.wait(until.elementLocated(By.css('a[href$="/radiant-tee.html"]')),10000);
      await driver.findElement(By.css('a[href$="/radiant-tee.html"]')).click();
      await driver.sleep(5000);

      //Selecting the size smaller 'xS'
      await driver.wait(until.elementLocated(By.id('option-label-size-143-item-166')),10000);
      await driver.findElement(By.id('option-label-size-143-item-166')).click();
      let sizeXS = await driver.findElement(By.xpath("(//div[@id='option-label-size-143-item-166'])[1]")).getText();
      console.log(sizeXS);
      await driver.sleep(5000);
      
      //Selecting the size small 'S'
      await driver.wait(until.elementLocated(By.id('option-label-size-143-item-167')),10000);
      let gettingSize1 = await driver.findElement(By.id('option-label-size-143-item-167')).click();
      let sizeS = await driver.findElement(By.xpath("(//div[@id='option-label-size-143-item-167'])[1]")).getText();
      console.log(sizeS);
      await driver.sleep(5000);

      //Selecting the size Medium 'M'
      await driver.wait(until.elementLocated(By.id('option-label-size-143-item-168')),10000);
      await driver.findElement(By.id('option-label-size-143-item-168')).click();
      let sizeM = await driver.findElement(By.xpath("(//div[@id='option-label-size-143-item-168'])[1]")).getText();
      console.log(sizeM);
      await driver.sleep(5000);

      //Selecting the size Large 'L'
      await driver.wait(until.elementLocated(By.id('option-label-size-143-item-169')),10000);
      await driver.findElement(By.id('option-label-size-143-item-169')).click();
      let sizeL = await driver.findElement(By.xpath("(//div[@id='option-label-size-143-item-169'])[1]")).getText();
      console.log(sizeL);
      await driver.sleep(5000);

      //Selecting the size Larger 'XL'
      await driver.wait(until.elementLocated(By.id('option-label-size-143-item-170')),10000);
      await driver.findElement(By.id('option-label-size-143-item-170')).click();
      let sizeXL = await driver.findElement(By.xpath("(//div[@id='option-label-size-143-item-170'])[1]")).getText();
      console.log(sizeXL);
      await driver.sleep(1000);
      //Asserts
      assert.equal(sizeXS , 'XS');//Builtin Node
      expect(sizeXS ).to.equal('XS');// Chai expect
      sizeXS .should.equal('XS');// Chai should

      assert.equal(sizeS , 'S');//Builtin Node
      expect(sizeS ).to.equal('S');// Chai expect
      sizeS .should.equal('S');// Chai should

      assert.equal(sizeM , 'M');//Builtin Node
      expect(sizeM).to.equal('M');// Chai expect
      sizeM .should.equal('M');// Chai should

      assert.equal(sizeL , 'L');//Builtin Node
      expect(sizeL ).to.equal('L');// Chai expect
      sizeL.should.equal('L');// Chai should

      assert.equal(sizeXL , 'XL');//Builtin Node
      expect(sizeXL ).to.equal('XL');// Chai expect
      sizeXL.should.equal('XL');// Chai should

      await driver.sleep(5000);
              
      }

      catch(error)
      {
        console.log(error);
      }
      finally{
                               
        //await driver.quit();
      }
  });
});
});