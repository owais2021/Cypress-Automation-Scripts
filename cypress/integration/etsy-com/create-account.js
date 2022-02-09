/// <reference types="cypress" />

import CreateAccount_Homepage_PO from "../../support/pageObjects/etsy-com/CreateAccount_Homepage_PO";

describe("Create an account into the site", () => {

////*Page Object Module use this file define in support/pageObjects/etsy-com/CreateAccount_Homepage_PO*/
    const createAccount_Homepage_PO = new CreateAccount_Homepage_PO();

/////***Data driven Approach file define in Fixtures folder */
    before(function(){        
        cy.fixture("registerAccount").then(function(data){
        globalThis.data = data;

        });
                
        cy.fixture("usersDetails").then(function(users){
            globalThis.users = users;
    })
})
    it("Should be able to Register Account",() => {        
//*******Create an account into the site.
        createAccount_Homepage_PO.accessHomepage();
        createAccount_Homepage_PO.signIn();
        createAccount_Homepage_PO.registerButton();
        
//********Create an automate script to test the required fields
        cy.wait(2000);
        cy.get('#join_neu_email_field').type(data.email);
        cy.wait(2000);        
        cy.get('#join_neu_first_name_field').type(data.first_name);
        cy.get('#join_neu_password_field').type(data.password);
        createAccount_Homepage_PO.createYourAccountButton();
        createAccount_Homepage_PO.crossButton();
        cy.wait(5000); 

//********Create an account into the site using Gmail option.
        // cy.wait(2000);   
        // createAccount_Homepage_PO.signIn();
        // cy.wait(2000);   
        // createAccount_Homepage_PO.continueWithGoogle();
        // cy.wait(5000); 

});

//********login into the site with different users using a Data Driven Framework 
//(At least 3) the assertions must validate the successful login.
    it("login into the site with different users",() =>{

           createAccount_Homepage_PO.accessHomepage();
           cy.wait(2000);
           createAccount_Homepage_PO.signIn();
           cy.wait(2000);
           cy.get('#join_neu_email_field').type(users.email);
           cy.wait(2000);
           cy.get('#join_neu_password_field').type(users.password);
           cy.wait(2000);
           createAccount_Homepage_PO.signInButton();
           cy.wait(5000);


        });

//********Create an automated script to test a failed attempt to login.
     it("Create an automated script to test a failed attempt to login.",() => {

        createAccount_Homepage_PO.accessHomepage();
        createAccount_Homepage_PO.signIn();
        cy.wait(2000);
        cy.get('#join_neu_email_field').type(data.email);
        createAccount_Homepage_PO.signInButton();

     });



})