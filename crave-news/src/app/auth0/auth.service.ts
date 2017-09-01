import {Injectable} from '@angular/core';
import {Router} from    '@angular/router';
import 'rxjs/add/operator/filter';
import Auth0 from 'auth0-js';

declare var Auth0:any;

@Injectable()
export class AuthService{

constructor(public router:Router){}

auth0 = Auth0.webAuth({
    clientID: '0kLAq0I8laK9DPuBgVZXd0BB4QhkdXDL',
    domain: 'amitvchaudhary.auth0.com',
    responseType: 'token id_token',
    audience: 'https://amitvchaudhary.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',      
    scope: 'openid'
});


public login():void{
    this.auth0.authorize();
}

}