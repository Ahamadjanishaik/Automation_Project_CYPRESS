import Login from "../../PageObjects/login";
describe('Assignment', () => {
    it('test1', () => {
        cy.visit('https://tutorialsninja.com/demo/') // Visit website
        const lgn = new Login(); // Creating an object of login class
        lgn.setEmail("jamesbond007@gmail.com") // enter email
        lgn.setPassword("1234") // enter password
        lgn.clicklogin();  // click on login button
        
        // Searching for a HP laptop
        cy.get('input[name="search"]').type('HP{enter}')  // Seaarch & type HP and enter
        cy.xpath('//*[.="Add to Cart"]').click({force: true}) // Click on Add to cart under the product
        cy.xpath('//button[@id="button-cart"]').click()// Add product to cart
        cy.xpath('//*[.="Shopping Cart"]').click({force:true}) // click on shopping cart
        cy.xpath('//a[@class="btn btn-primary"]').click() // click on checkout
        cy.wait(3000)
        // Fill the address

        cy.get('input[name="firstname"]').type('James',{force:true})  // enter first name
        cy.get('input[name="lastname"]').type('bond',{force:true})    // enter last name
        cy.get('input[name="address_1"]').type('11-2/65 Thunder street',{force:true})  // enter address
        cy.get('input[name="city"]').type('Hyderabad',{force:true}) // enter city name
        cy.get('input[name="postcode"]').type('500085',{force:true}) // enter post code
        cy.get('select[name="country_id"]').select('India',{force:true})  // select country 
        cy.get('select[name="zone_id"]').select('Telangana',{force:true})  // select state
        cy.xpath('//input[@id="button-payment-address"]').click() // click on continue
        cy.xpath('//*[@id="button-shipping-address"]').click() // click on continue
        cy.xpath('//*[@id="button-shipping-method"]').click({force: true}) // click on continue
        cy.get('input[name="agree"]').check() // check the terms & conditions box
        cy.xpath('//input[@id="button-payment-method"]').click()  // click on continue
        cy.xpath('//*[@id="button-confirm"]').click() // click on confirm order
        // Order placed confirmed
        cy.get('a[title="My Account"]').click() // Click on My Account on homepage
        cy.xpath('(//li/a[text()="My Account"])[1]').click({force:true}) // Select My account from dropdown
        cy.contains('Edit your account information').click() // click on edit information
        cy.get('#input-firstname').clear().type('Jani') // edit first name
        cy.get('#input-lastname').clear().type('Shaik') // edit last name
        cy.get('#input-email').clear().type('Shaikjani301@gmail.com') // edit email
        cy.get('#input-telephone').clear().type('8886989444') //  edit mobile number 
        cy.get('input[value="Continue"]').click() // click on continue
        cy.get('a[title="My Account"]').click() // Click on My Account on homepage
        cy.contains('Logout').click() // account logout successfully

        cy.xpath('(//a[@data-toggle="dropdown"])[1]').click()  // login
        cy.xpath('(//a[@class="list-group-item"])[1]').click()  // click on login 
        cy.get('#input-email').type('Shaikjani301@gmail.com') // type email
        cy.get('#input-password').type('cypress')  // type password
        cy.get('input[value="Login"]').click();  // click login button
        



    });
});