import Page from './page';

class LoginPage extends Page {

    /**
    * define elements
    */
    get headerTitle()     {return $('.page-title');}
    get userEmailInput()   { return $('#Email'); }
    get passwordInput()   { return $('#Password'); }
    get loginButton()     { return $('[type="submit"]'); }
    get errorMessage()    { return $('.validation-summary-errors');}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login')       //this will append `login` to the baseUrl to form complete URL
        //browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    waitForloginPageToLoad () {
      if(!this.headerTitle.isDisplayed()){
        this.headerTitle.waitForDisplayed(10000);
      }
    }

    login (email, password) {
      //this.waitForloginPageToLoad();
      this.userEmailInput.setValue(email);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    }
}

export default new LoginPage()
