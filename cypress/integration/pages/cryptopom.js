


export class LoginPage{
    Userlogin(userinfo){
        cy.get('[class="mt-3 mb-3 undefined btn btn-primary btn-lg"]').eq(0).should('be.visible').click();
        cy.get('[type="email"]').should('be.visible').type(userinfo.email);
        cy.get('[type="password"]').type(userinfo.password);
        cy.get('[class="auth0-label-submit"]').click()
        cy.get('[class="bitcoin-guy"]').should('be,visible')
        //cy.contains('My Portfolio').should('be.visible');
      //s  cy.get('[type="text"]').should('be.visible').type(userinfo.code);
        //cy.get('[name="submit"]').click();
    }
    datauser(userinfo){
      cy.get('[src="/static/media/cslLogo.dff6c8aa.svg"]').should('be.visible');
      cy.get('[style="color: white; font-size: 2.5rem; text-align: center; margin-top: 150px;"]').should('be.visible').should('have.text','Welcome!');
      cy.get('[style="color: white; font-size: 2.5rem; text-align: center; margin-top: 150px;"]').click().should('be.visible');
      cy.get('[name="Sign In "]').click();
      cy.get('[class="auth0-lock-social-button-icon"]').eq(0).should('be.visible').should('have.text','').click();
      cy.go(-1);
      cy.get('[class="auth0-lock-social-button-text"] ').eq(1).click({force: true});
      cy.go(-1);
//cy.get('[class="auth0-lock-social-button-icon"]').eq(2).should('be.visible').should('have.text','').click();
      //cy.go(-1);
      cy.get('[type="email"]').type(userinfo.email).should('be.visible');
      cy.get('[type="password"]').type(userinfo.password);
      cy.get('[class="auth0-lock-alternative-link"]').should('be.visible');
      cy.get('[class="auth0-label-submit"]').should('be.visible').click();



    }
}