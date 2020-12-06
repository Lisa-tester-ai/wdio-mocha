import Page from './page';

class NopcommercePage extends Page  {
  /**
  * define elements
  */
  get searchInput()   { return $('#small-searchterms'); }
  get searchButton()  { return $('.search-box-button'); }
  get resultsList()   { return $('.search-results'); }
  get firstResultPrice() { return $$('.actual-price')[0]; }
  get firstResultAddtoCart() {return $$('[value="Add to cart"]')[0];}
  get addedtoCartSuccessMessage() {return $('.bar-notification p');}

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://demo.nopcommerce.com/')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  enterText (item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
    browser.pause(1000);
  }

  search () {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }
}

export default new NopcommercePage();
