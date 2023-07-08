export class Register {
    Cryptho(userinfo) {
        cy.get('[placeholder="Enter first name"]').should('be.visible').type(userinfo.First_Name);
        cy.get('[placeholder="Enter last name"]').should('be.visible').type(userinfo.lost_Name);
        cy.get('[placeholder="Enter email address"]').should('be.visible').type(userinfo.email);
        cy.get('[type="password"]').should('be.visible').should('be.visible').type(userinfo.password);
        cy.get('[class="col-md-3 col-sm-3 col-4"]').click();
        cy.get('[type="checkbox"]').eq(0).should('be.visible').check();
        cy.get('[aria-describedby="text-input"]').eq(4).type(userinfo.phone_number);
        cy.get('[name="group1"]').eq(1).check();
        cy.go(-1);
        cy.wait(2000);

    }
    Subaru(userinfo) {
        //cy.get(':nth-child(1) > :nth-child(1) > .row > :nth-child(1) > .incentive-block > :nth-child(1) > .my-3._theme_font_bold').should('be.visible')
        cy.get('body').then(($msr) => {
            if ($msr.find('[class="my-3 _theme_font_bold font-weight-bold"]').eq(0).lenth > 0) {
                this.shouldHaveText('Lease a new 2022 Forester for $285/Month').shuld('be.visibe')
            }
            else if ($msr.find('[class="my-3 _theme_font_bold font-weight-bold"]').eq(0).lenth > 0) {
                this.shouldHaveText('Lease a new 2022 Forester for $285/Month').shuld('not.be.visibe')
            }
            else ('element notb found')

        })
        cy.get('[type="checkbox"]').eq(0).click({ force: true });





    }
    subbu(userinfo) {
        cy.get('[type="checkbox"]').check({ force: true }) // Check checkbox element
        // cy.get('[type="radio"]').first().check() 
        cy.get('[class="d-flex align-items-center justify-content-between"]').first().check()
            .as('checkboxes')
            .check()

        cy.get('@checkboxes')
            .each(checkbox => {
                expect(checkbox[0].checked).to.equal(true)
            })


    }
    china(userinfo) {


        for (var i = 1; i <= 13; i++) {

            cy.get('.col-lg-3 > :nth-child(1) > :nth-child(2) > .d-flex' + i + "]").click()
        }



    }
    facebook(userinfo) {

    }




}