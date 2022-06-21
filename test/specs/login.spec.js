const LoginPage = require('../pageobjects/login.page')


describe('Test Login page of SwagLabs', () => {
  beforeAll('Open browser', () => {
    browser.url('https://www.saucedemo.com/')
  })
  describe('Show images in display', () => {
    it('verify should image as Robot', async () => {
    await expect(LoginPage.robotImage).toBeDisplayed()
  })
describe('Show images in display', () => {
    it('verify should banner of Page', async () => {
      await expect(LoginPage.loginLogo).toBeDisplayed()
    })
  })
})
  describe('Test input Password', () => {
      it('should an error message with empty password', async () => {
      await LoginPage.login('standard_user', '');
      await expect(LoginPage.errorInLogin).toHaveText('Epic sadface: Password is required')
    })
      it('should an error message with type wrong password', async () => {
      await LoginPage.login('standard_user', '123radium');
      await expect(LoginPage.errorInLogin).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
  })
})