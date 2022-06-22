class HomePage {
    get btnHambur () {return $('#react-burger-menu-btn')}
    get logoApp () {return $('.header_label')}
    get secondareBanner () {return $('.header_secondary_container')} 
    get firstImg () {return $('#item_4_img_link')}
    get secondtImg () {return $('#item_0_img_link')}
    get thirdImg () {return $('#item_5_img_link')}
    get fourImg () {return $('#item_1_img_link')}
    get fiveImg () {return $('#item_2_img_link')}
    get sixImg () {return $('#item_3_img_link')}
    get addBagBtn () {return $('#add-to-cart-sauce-labs-backpack')}
    get removeBagBtn () {return $('#remove-sauce-labs-backpack')}
    get titleBtnJkt () {return $('#item_5_title_link')}
    get homePageFooter () {return $('#page_wrapper > footer')}
    get twitterBtn () {return $('#page_wrapper > footer > ul > li.social_twitter')}
    get fbBtn () {return $('#page_wrapper > footer > ul > li.social_facebook')}
    get linkedinBtn () {return $('#page_wrapper > footer > ul > li.social_linkedin')}
    get shoppingCart () {return $('#shopping_cart_container')}
    get checkoutBtn () {return $('#checkout')}
    get continueBuy () {return $('#continue')}
    get inputFirstName () {return $('#first-name')}
    get inputLastName () {return $('#last-name')}
    get inputZip () {return $('#postal-code')}
    get finishPayment () {return $('#finish')}
    get userExitBtn () {return $('#logout_sidebar_link')}
    get cancelBtn () {return $('#cancel')}
    get badTitle () {return $('#item_3_title_link')}
    


    // Setters
    async setFirstName (FirstName) {
        await this.inputFirstName.setValue(FirstName);
    }
    async setLastName (lastName) {
        await this.inputLastName.setValue(lastName);
    }
    async setZip (zipDate) {
        await this.inputZip.setValue(zipDate);
    }

    // Methods

    async cancelToBuy () {
        await this.cancelBtn.click();
    }

    async addToCarItemBag(){
        await this.addBagBtn.click();
    };

    async removeBagToCart () {
        await  this.removeBagBtn.click();
    };

    async enterCart () {
        await this.shoppingCart.click();
    }

    async finishBuy () {
        await  this.checkoutBtn.click();
    }

    async continueToPay () {
        await  this.continueBuy.click(); 
    }

    async finishPay () {
        await  this.finishPayment.click(); 
    }



    async buy (FirstName, lastName, zipDate) {
        await this.setFirstName(FirstName);
        await this.setLastName(lastName);
        await this.setZip(zipDate);
        await this.continueBuy.click();
    }

    async userLogout(){
        await this.btnHambur.click();
        browser.pause(10000);
        await  this.userExitBtn.click()
    };
}
module.exports = new HomePage();