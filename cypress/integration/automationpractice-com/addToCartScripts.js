/// <reference types="cypress" />

import ProductToCart_Homepage_PO from "../../support/pageObjects/automationpractice.com/ProductToCart_Homepage_PO";

describe("Automated script to add / edit / delete a product to cart", () => {

////*Page Object Module use this file define in support/pageObjects/automationpractice.com/ProductToCart_Homepage_PO*/
    const productToCart_Homepage_PO = new ProductToCart_Homepage_PO();

/////***Data driven Approach file define in Fixtures folder */
        before(function(){        
                cy.fixture("addToCart").then(function(data){
                globalThis.data = data;

                });
        })
//******* Create an automated script to add / edit / delete a product to cart and the assertion must validate the product is in the cart.
        it(" add / edit / delete a product to cart",() => {        

                productToCart_Homepage_PO.accessHomepage(); 
                cy.wait(2000);
                cy.document().should("have.property", "charset").and("eq", "UTF-8");
                cy.title().should("include", "My Store");
                productToCart_Homepage_PO.selectItem();
                cy.wait(5000);
                productToCart_Homepage_PO.addTocart();
                cy.wait(6000);
                productToCart_Homepage_PO.proceedToCheckOut();
                cy.wait(6000);
                cy.get('#cart_title > span').should('have.text', 'Your shopping cart contains:\n\t\t\t1 Product\n\t\t');
                productToCart_Homepage_PO.continueShoppingButton();
                cy.wait(3000);
                cy.get('#quantity_wanted').clear();
                cy.get('#quantity_wanted').type(data.Quantity);
                productToCart_Homepage_PO.addTocart();
                cy.wait(3000);
                productToCart_Homepage_PO.proceedToCheckOut();
                cy.wait(3000);
                productToCart_Homepage_PO.deletedPeroduct();
                cy.get('.alert').should('have.text', 'Your shopping cart is empty.');


        });
})