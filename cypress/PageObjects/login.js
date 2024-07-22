class Login{
    setEmail(email){
        cy.get('.caret').click() // click on My account tab on homepage 
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"])[1]').click()
        cy.get('input[placeholder="E-Mail Address"]').type(email)

    }
    setPassword(password){
        cy.get('input[placeholder="Password"]').type(password)
    }
    clicklogin(){
        cy.get('input[value="Login"]').click()
    }
}
export default Login;