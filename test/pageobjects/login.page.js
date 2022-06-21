class LoginPage {
    //Getters
    get inputerUserName () {return $('#user-name')};
    get inputPassword () {return $('#password')};
    get buttonLogin () {return $('#login-button')};
    get robotImage () {return $('.bot_column')};
    get loginLogo () {return $('.login_logo')}
    get errorInLogin () {return $('.error-message-container.error')}    

    //Setters
    async setUserName (username) {
        await this.inputerUserName.setValue(username);
    }
    async setPassword (password) {
        await this.inputPassword.setValue(password);
    }
    //Methods
    async login (username, password) {
        await this.setUserName(username);
        await this.setPassword(password);
        await this.buttonLogin.click();
    }
}

module.exports = new LoginPage();