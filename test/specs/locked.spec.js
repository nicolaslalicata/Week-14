const LoginPage = require('../pageobjects/login.page')


describe('Test Login page of SwagLabs', () => {
  beforeAll('Open browser', () => {
    browser.url('https://www.saucedemo.com/')
  })
      it('Login Succes for locked user', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
      })
  })