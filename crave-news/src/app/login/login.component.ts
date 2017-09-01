import {Component, OnInit} from '@angular/core';
import {AuthService} from './../auth0/auth.service';


@Component({
    selector:"app-login",
    templateUrl:"./login.component.html",
    styleUrls:['./login.component.scss']
})
export class LoginComponent implements OnInit{

constructor(private authService:AuthService){}
ngOnInit():void{}

public callLogin()
{
    this.authService.login();
}

}