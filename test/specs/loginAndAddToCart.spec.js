import assert       from 'assert';
import nopcommercePage from '../pageobjects/nopcommerce.page';
import loginPage    from '../pageobjects/nopcommerce-login.page';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Performing a valid login and add to cart on NopCommerce Page', function() {
  
  before(function() {
    nopcommercePage.open();
    assert.strictEqual(browser.getTitle(), 'nopCommerce demo store');
    });

  it('Performing a invalid login', function () {
    loginPage.open();     // navigating to login page
    loginPage.login('abc@gmail.com', 'test123');    // entering valid user email, password and and submiting the page
    assert.strictEqual(loginPage.errorMessage.getText(),'Login was unsuccessful. Please correct the errors and try again.')
    });

  it('Searching a sample product and adding to cart', function () {
    nopcommercePage.enterText('Asus N551JK-XO076H Laptop');
    nopcommercePage.search();
    assert.strictEqual(nopcommercePage.isSearched(), true);
    assert.strictEqual(nopcommercePage.firstResultPrice.getText(), '$1,500.00');

    nopcommercePage.firstResultAddtoCart.click(); // adding to cart
    assert.strictEqual(nopcommercePage.addedtoCartSuccessMessage.getText(), 'The product has been added to your shopping cart');
    });
  
});