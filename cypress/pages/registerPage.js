export class registerPage {
    weblocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'

    }

    getRandomInt(min, max) {
        if (min > max) {
            throw new Error('The min value must be less than or equal to the max value');
        }
        min = Math.ceil(min);  // Round up the min value
        max = Math.floor(max); // Round down the max value
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    openURL() {
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName) {
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterlastName(LName) {
        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmail(email) {
        cy.get(this.weblocators.email).type(this.getRandomInt(1, 100) + email)
    }

    enterTelephone(phoneNo) {
        cy.get(this.weblocators.telephone).type(phoneNo)
    }

    enterPassword(password) {
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    selectCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickOnContinue() {
        cy.get(this.weblocators.continue).click()
    }


}