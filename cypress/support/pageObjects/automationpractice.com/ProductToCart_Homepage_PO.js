class ProductToCart_Homepage_PO  {

    accessHomepage(){
        cy.visit("http://automationpractice.com/index.php");
    }

    selectItem(){
        cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link > img').click();
    }

    addTocart(){
        cy.get('.exclusive > span').click();
    }

    proceedToCheckOut(){
        cy.get('.button-medium > span').click();
    }

    continueShoppingButton(){
        cy.get('.button-exclusive').click();
    }

    deletedPeroduct(){
        cy.get('.icon-trash').click();
    }

       

}

export default ProductToCart_Homepage_PO;