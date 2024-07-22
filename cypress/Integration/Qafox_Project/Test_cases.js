/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
import Login from "../../PageObjects/login";
describe('', () => {
    it('TC_MA_002', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage        
        
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.url().should('include','/edit'); // assert whether edit page is displayed or not

    });
    it('TC_MA_003', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="First Name"]').clear().type('Ashok').should('have.value','Ashok') //Changing first name to Ashok
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('have.text','Success: Your account has been successfully updated.')
        
    });
    it('TC_MA_004', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Last Name"]').clear().type('Kumar').should('have.value','Kumar') //Changing last name to Kumar
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('have.text','Success: Your account has been successfully updated.')
        
    });
    it('TC_MA_006', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Telephone"]').clear().type('8886989444').should('have.value','8886989444') //Changing Mobile number
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('have.text','Success: Your account has been successfully updated.')
        
    });
    it('TC_MA_008', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.contains('Back').click()
        
        
    });
    it('TC_MA_009', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="First Name"]').clear().type('12345')
        cy.get('input[value="Continue"]').click()
        cy.log('Test case failed')
        
        
    });
    it('TC_MA_010', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="First Name"]').clear().type('#@&')
        cy.get('input[value="Continue"]').click()
        cy.log('Test case failed')
        
        
    });
    it('TC_MA_011', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="First Name"]').clear().type('As h ok')
        cy.get('input[value="Continue"]').click()
        cy.log('Test case failed')
        
        
    });
    it('TC_MA_012', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Last Name"]').clear().type('12345')
        cy.get('input[value="Continue"]').click()
        cy.log('Test case failed')
        
        
    });
    it('TC_MA_013', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Last Name"]').clear().type('#@&')
        cy.get('input[value="Continue"]').click()
        cy.log('Test case failed')
        
        
    });
    it('TC_MA_014', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Last Name"]').clear().type('As h ok')
        cy.get('input[value="Continue"]').click()
        cy.log('Test case failed')
        
        
    });
    it('TC_MA_015', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Telephone"]').clear().type('888698944412').should('have.value','888698944412') //Changing Mobile number
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('have.text','Success: Your account has been successfully updated.')
        cy.log('Test case failed')
    });
    it('TC_MA_016', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Telephone"]').clear().type('8886989').should('have.value','8886989') //Changing Mobile number
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('have.text','Success: Your account has been successfully updated.')
        cy.log('Test case failed')
    });
    it('TC_MA_017', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Telephone"]').clear().type('888ABCD#@')
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('have.text','Success: Your account has been successfully updated.')
        cy.log('Test case failed')
    });
    it('TC_MA_018', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Telephone"]').clear().type('8 88 69 8 44 2')
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]').should('have.text','Success: Your account has been successfully updated.')
        cy.log('Test case failed')
    });
    it('TC_MA_019', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="First Name"]').clear()
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="text-danger"]').should('have.text','First Name must be between 1 and 32 characters!')
        
    });
    it('TC_MA_020', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Last Name"]').clear()
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="text-danger"]').should('have.text','Last Name must be between 1 and 32 characters!')
        
    });
    it('TC_MA_021', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="E-Mail"]').clear()
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="text-danger"]').should('have.text','E-Mail Address does not appear to be valid!')
        
    });
    it('TC_MA_022', () => {
        cy.visit('https://tutorialsninja.com/demo/') // visit Qafox webpage
        
        // Creating an object of Login class (page object model)
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        cy.contains('Edit your account information').click() // click on edit your information field
        cy.get('input[placeholder="Telephone"]').clear()
        cy.get('input[value="Continue"]').click()
        cy.xpath('//div[@class="text-danger"]').should('have.text','Telephone must be between 3 and 32 characters!')
        
    });
   
   
   
    
});