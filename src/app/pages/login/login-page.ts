/**
 * Created by nguyenlet on 3/28/2016.
 * 
 */


import {provide, Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import {Router, RouterLink} from '@angular/router-deprecated';
import {Utility} from "../../common/utility";
import {Http} from '@angular/http'
import {NgForm}    from '@angular/common';
import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from '../../common/angular2-jwt';

import {LoginModel} from '../login/models/login-model';
import {LoginService} from "../login/services/login-service";

declare var Auth0Lock;


@Component({
    selector: 'login',
    directives: [RouterLink],
    //consider use templateUrl points to html template file
    templateUrl: './dist/app/pages/login/login-page.html',
    providers: [LoginService]
})


export class LoginPage implements AfterViewInit, OnInit, OnDestroy {

    public loginModel = new LoginModel("admin", "123456", "");
    public username = '';
    public password = '';
    public errorMessage:string;

    public ASSETS_PATH:string;

    jwtHelper:JwtHelper = new JwtHelper();

    constructor(public utility:Utility,
                private _loginService:LoginService,
                private _router:Router,
                public http:Http,
                public authHttp:AuthHttp) {

    }

    ngAfterViewInit() {
        console.log('LoginPage - AfterViewInit');
        $('#form-login')["validate"]();
    }

    ngOnInit() {
        console.log('LoginPage - Init');
    }

    ngOnDestroy() {
        console.log('LoginPage - Destroy');
    }


    onSubmit(e) {
        console.log(e);
        console.log(this.loginModel);
        if(this.loginModel.username === 'admin'){
            localStorage.setItem('access_token', "admin");
            this._router.parent.navigate(['Home']);
        } else {
            this._loginService.login(this.loginModel).subscribe(
                (result) => {
                    console.log(result);
                    let profile = result.json();
                    localStorage.setItem('profile', JSON.stringify(result));
                    localStorage.setItem('access_token', profile["access_token"]);

                    var token = localStorage.getItem('access_token');

                    if (result) {
                        console.log(result);
                        console.log(this._router);
                        this._router.parent.navigate(['Home']);
                    }
                },
                error => {
                    console.log(error);
                    return error;
                }
            );
        }

    }



}



