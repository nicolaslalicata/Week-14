const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page');


describe('Test Login page of SwagLabs', () => {
    beforeAll('Open browser', () => {
        browser.url('https://www.saucedemo.com/')
    })
    describe('Correct login with good params', () => {
        it('Login Succes', async () => {
            await LoginPage.login('performance_glitch_user', 'secret_sauce');
        })
    })
    describe('Check if can a complete buy ', () => {
        it('add to car Bag', async () => {
            await HomePage.addToCarItemBag()
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
        it('should an error message with no data in inputs', async () => {
            await HomePage.buy('', '', '');
            await expect(LoginPage.errorInLogin).toHaveText('Error: First Name is required')
        })
        it('Go to payment screen when complete with corrects values  ', async () => {
            await HomePage.buy('Nicolas', 'Lalicata', '2700');
        })

        it('Finish Payment', async () => {
            await HomePage.finishPay()
        });

        it('Back to see All products', async () => {
            await HomePage.backToShop()
        });
    })
    describe('User logout using sidebar ', () => {
        it('Exit user', async () => {
            await HomePage.userLogout()
        });
    })
})