
import { beforeEach } from "mocha";
import { LoginPage } from "../pages/cryptopom";
import{Register} from "../pages/cryptopom2";

describe('',() =>{
    let userinfo;
    beforeEach('',() =>{
        cy.fixture('login.json').then((data) => (userinfo=data));
    })
    beforeEach('',()=>{
        cy.clearCookies() // clear all cookies

    })

    it.only('login',() =>{
        cy.visit('https://dev.cryptosmartlife.com')
        const loginpage = new LoginPage();
        loginpage.Userlogin(userinfo.login);

        
    })
    it('signin',() =>{
        cy.visit('https://dev.cryptosmartlife.com')
        const loginpage = new LoginPage();
        loginpage.datauser(userinfo.signin);

        
    })
    it('register',() =>{
        cy.visit('https://dev.cryptosmartlife.com/login');
        const loginpage = new Register();
        loginpage.Cryptho(userinfo.register);
    })

    it('resign',() =>{
        cy.visit('https://www.subaruofontario.com/incentives');
       const loginpage = new Register();
        loginpage.Subaru(userinfo.resign);
    })

    it('releaf',() =>{
        cy.visit('https://www.subaruofontario.com/incentives');
       const loginpage = new Register();
        loginpage.subbu(userinfo.releaf);
    })
    it('releaf',() =>{
        cy.visit('https://www.subaruofontario.com/incentives');
       const loginpage = new Register();
        loginpage.china(userinfo.releaf);
    })
    it('releaf',() =>{
        cy.visit('https://www.facebook.com/campaign/');
       const loginpage = new Register();
        loginpage.facebook(userinfo.releaf);
    })
    

       

})