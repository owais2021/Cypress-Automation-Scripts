class CreateAccount_Homepage_PO  {

    accessHomepage(){
        cy.visit("https://www.etsy.com/");
    }
    signIn(){
        cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(1) > button').click();
        
    }

    registerButton(){
       cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(1) > div > button').click();
    }

    createYourAccountButton(){
    cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(9) > div > button').click();

    }

    crossButton(){
        cy.get('#join-neu-overlay > div > button').click();

    }

    
   continueWithGoogle(){
   cy.get('#join-neu-form > div.wt-display-flex-xs.wt-flex-direction-column-xs > div.wt-mb-xs-2 > div > button').click();

   }

   googleNextButton(){
    cy.get('#identifierNext').click();
 
    }

    signInButton(){
        cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(10) > div > button').click();
     
        }
    
    
}

export default CreateAccount_Homepage_PO;