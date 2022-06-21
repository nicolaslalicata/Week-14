const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');



describe('Test Login and entry to swaglabs with corrects params', () => {
    beforeAll('Open browser', async () => {
        browser.url('https://www.saucedemo.com/')
    })
    describe('Correct login with good params', () => {
        it('Login Succes', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        })
        it('Verify btn hambur', async () => {
            await expect(HomePage.btnHambur).toBeClickable()
        })
    })
    describe('Show images of success login', () => {
        it('verify should banner of Page', async () => {
            await expect(HomePage.logoApp).toBeDisplayed()
        })
        it('verify should secondary banner of Page', async () => {
            await expect(HomePage.secondareBanner).toBeDisplayed()
        })
        it('Verify First image', async () => {
            await expect(HomePage.firstImg).toBeDisplayed()
        })
        it('Verify Second image', async () => {
            await expect(HomePage.secondtImg).toBeDisplayed()
        })
        it('Verify Third image', async () => {
            await expect(HomePage.thirdImg).toBeDisplayed()
        })
        it('Verify Fourth image', async () => {
            await expect(HomePage.fourImg).toBeDisplayed()
        })
        it('Verify Fifth image', async () => {
            await expect(HomePage.fiveImg).toBeDisplayed()
        })
        it('Verify Sixth image', async () => {
            await expect(HomePage.sixImg).toBeDisplayed()
        })
        it('Verify Check if footer appears', async () => {
            await expect(HomePage.homePageFooter).toBeDisplayed()
        })

    })
    describe('Verify clickable buttons ', () => {
        it('Verify button to Add to Cart', async () => {
            await expect(HomePage.addBagBtn).toBeClickable()
        })
        it('Verify when click over title entry the main page of article', async () => {
            await expect(HomePage.titleBtnJkt).toBeClickable()
        })
        it('Verify buttons of socials networks -> Facebook', async () => {
            await expect(HomePage.fbBtn).toBeClickable()
        })
        it('Verify buttons of socials networks -> Twitter', async () => {
            await expect(HomePage.twitterBtn).toBeClickable()
        })
        it('Verify buttons of socials networks -> Linkedin', async () => {
            await expect(HomePage.linkedinBtn).toBeClickable()
        })
    })
    describe('Check if can a complete buy ', () => {
        it('add to car Bag', async () => {
            HomePage.addToCarItemBag()
        });
        it('Entry to the safe page', async () => {
            HomePage.enterCart()
        });
        it('Verify buttons of Checkout', async () => {
            await expect(HomePage.checkoutBtn).toBeClickable()
        })
        it('Finish buy', async () => {
            HomePage.finishBuy()
        });
        it('should an error message with no data in inputs', async () => {
            await HomePage.buy('', '', '');
            await expect(LoginPage.errorInLogin).toHaveText('Error: First Name is required')
        })
        it('Go to payment screen when complete with corrects values  ', async () => {
            await HomePage.buy('Nicolas', 'Lalicata', '2700');
        })

        it('Finish Payment', async () => {
            HomePage.finishPay()
        });
    })

    describe('User logout using sidebar ', () => {
        it('Exit user', async () => {
             HomePage.userLogout()
        });
    })

})