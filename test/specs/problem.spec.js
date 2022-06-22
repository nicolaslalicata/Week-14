const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const ProblemPage = require('../pageobjects/problems.page')


describe('Test Login and entry to swaglabs with corrects params', () => {
    beforeAll('Open browser',  () => {
        browser.url('https://www.saucedemo.com/')
    })
    describe('Correct login with good params', () => {
        it('Login Succes', async () => {
            await LoginPage.login('problem_user', 'secret_sauce');
        })
        it('Verify if show me bad image', async () => {
            await expect(ProblemPage.errorPicture).toBeDisplayed()
        })
    })

    describe('Verify clickable buttons ', () => {
                 it('Verify button to Add to Cart', async () => {
                     await expect(HomePage.addBagBtn).toBeClickable()
                 })
                 it('Verify when click over title entry the main page of article', async () => {
                     await expect(HomePage.titleBtnJkt).toBeClickable()
                 })
                 it('Should titles incorrect forms', async () => {
                    await expect(HomePage.badTitle).toHaveText('T-Shirt Red')
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
                it('Verify functionality of button Remove', async () => {
                    await expect(HomePage.removeBagBtn).toBeClickable()
                })
                describe('Check if can a complete buy ', () => {
                    it('add to car Bag', async () => {
                        await  HomePage.addToCarItemBag()
                    });
                    it('Entry to the safe page', async () => {
                        await HomePage.enterCart()
                    });
                    it('Verify buttons of Checkout', async () => {
                        await expect(HomePage.checkoutBtn).toBeClickable()
                    })
                    it('Finish buy', async () => {
                        await HomePage.finishBuy()
                    });
                    it('Go to payment screen when complete with incorrects values  ', async () => {
                        await HomePage.buy('', 'Cox', '');
                    })
                    it('Go to payment screen when complete with corrects values  ', async () => {
                        await HomePage.buy('Carl', 'Cox', '2500');
                    })

                    it('Should message in a error continue buy', async () => {
                        await  HomePage.continueToPay()
                    });

                    it('should an error message with no data in inputs', async () => {
                        await HomePage.buy('', '', '');
                        await expect(LoginPage.errorInLogin).toHaveText('Error: Last Name is required')
                    })

                    it('Back to pre confirm buy', async () => {
                        await  HomePage.cancelToBuy()
                    });
                })

                it('verify should secondary banner of Page', async () => {
                    await expect(HomePage.secondareBanner).toBeDisplayed()
                })

                describe('User logout', () => {
                    it('Exit user', async () => {
                        await  HomePage.userLogout()
                    });
                })              
})
