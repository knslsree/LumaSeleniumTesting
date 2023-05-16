// Includes
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;

/*
  As a customer, 
  I want to be able to sort the product according to category
  so that I can get sorted product 
*/
              describe('Sort by Category', () => {
                // Test case:
                    context('I searched for the category', () => {
                        it('I should see the sorted order of a category', async () => {
                            // Launch the web browser
                            const driver = await new Builder().forBrowser('firefox').build();
                            try{
                                //Navigate to our application
                                await driver.get('https://magento.softwaretestingboard.com/');
                                 //Find the first category  'whats New'
                                 await driver.wait(until.elementLocated(By.css('.ui-menu-item')), 20000);
                                 await driver.findElement(By.css('.ui-menu-item > a:nth-child(1)')).click();
                                await driver.navigate().back();
                                 await driver.sleep(2000);

                                 //Find the second category Women 
                                 await driver.wait(until.elementLocated(By.css('.parent.ui-menu-item')), 20000);
                                 await driver.findElement(By.css('.parent.ui-menu-item > a:nth-child(1)')).click();

                                 //Find the subcategory tops in women
                                 await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Tops')]")), 20000);
                                 await driver.findElement(By.xpath("//a[contains(text(),'Tops')]")).click();
                                 await driver.wait(until.elementLocated(By.css('.base')), 10000);
                                 let womenTops = await driver.findElement(By.css('.base')).getText();
                                 console.log(womenTops);
                                 await driver.navigate().back();

                                 //Find the subcategory bottoms in women
                                 await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Bottoms')]")), 20000);
                                 await driver.findElement(By.xpath("//a[contains(text(),'Bottoms')]")).click();
                                 await driver.wait(until.elementLocated(By.css('.base')), 10000);
                                 let womenBottoms = await driver.findElement(By.css('.base')).getText();
                                 console.log(womenBottoms);
                                 await driver.sleep(2000);
                                await driver.navigate().back();
                                
                                //Find the third category Women  
                                await driver.wait(until.elementLocated(By.css('a[href$="/men.html"]')),10000);
                                 await driver.findElement(By.css('a[href$="/men.html"]')).click();

                                 //Find the subcategory tops in men
                                 await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Tops')]")), 20000);
                                 await driver.findElement(By.xpath("//a[contains(text(),'Tops')]")).click();
                                 await driver.wait(until.elementLocated(By.css('.base')), 10000);
                                 let menTops = await driver.findElement(By.css('.base')).getText();
                                 console.log(menTops);
                                 await driver.sleep(2000);
                                 await driver.navigate().back();
                                 
                                //Find the subcategory bottoms in men
                                 await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Bottoms')]")), 20000);
                                 await driver.findElement(By.xpath("//a[contains(text(),'Bottoms')]")).click();
                                 await driver.wait(until.elementLocated(By.css('.base')), 10000);
                                 let menBottoms = await driver.findElement(By.css('.base')).getText();
                                 console.log(menBottoms);
                                 await driver.sleep(2000);

                                 //Asserts
                                assert.equal(womenTops, 'Tops');//Builtin Node
                                expect(womenTops).to.equal('Tops');// Chai expect
                                womenTops.should.equal('Tops');// Chai should

                                assert.equal(womenBottoms, 'Bottoms');//Builtin Node
                                expect(womenBottoms).to.equal('Bottoms');// Chai expect
                                womenBottoms.should.equal('Bottoms');// Chai should
                

                                assert.equal(menTops, 'Tops');//Builtin Node
                                expect(menTops).to.equal('Tops');// Chai expect
                                menTops.should.equal('Tops');// Chai should
                

                                assert.equal(menBottoms, 'Bottoms');//Builtin Node
                                expect(menBottoms).to.equal('Bottoms');// Chai expect
                                menBottoms.should.equal('Bottoms');// Chai should
                
                
                                 //await driver.quit();

                                 }catch(error)
                                 {
                                console.log(error);
                                }
                                finally{
                               
                                 await driver.quit();
                                 }
                        });
                    });
                });
