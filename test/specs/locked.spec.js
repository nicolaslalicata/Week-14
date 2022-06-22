const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Test Login page of SwagLabs', () => {
  beforeAll('Open browser', () => {
    browser.url('https://www.saucedemo.com/')
  })
      it('Login Succes for locked user', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
      })

      describe('Show me message', () => {
        it('show message in a error input', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorInLogin).toHaveText('Epic sadface: Sorry, this user has been locked out.')
      })
  })
  describe('Show images in display even if the user is blocked', () => {
    it('verify should image as Robot', async () => {
    await expect(LoginPage.robotImage).toBeDisplayed()
  })
    it('verify should banner of Page', async () => {
      await expect(LoginPage.loginLogo).toBeDisplayed()
    })
  })
})
