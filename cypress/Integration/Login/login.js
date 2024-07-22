import Login from "../../PageObjects/login";
describe('Login ', () => {
    // General Approach
    it('test1', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('.caret').click()
        cy.xpath('//a[.="Login"][1]').click()
        cy.get('#input-email').type('jamesbond007@gmail.com')
        cy.get('#input-password').type('1234')
        cy.get('input[value="Login"]').click();
    });
    //using Page Object Model 
    it.only('test2', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('.caret').click()
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"])[1]').click()

        // Creating an object of Login class (page object model)
        const lgn = new Login();
        lgn.setEmail("jamesbond007@gmail.com")
        lgn.setPassword("1234")
        lgn.clicklogin();

    });
});