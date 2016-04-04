/**
 * Created by nguyenlet on 3/28/2016.
 * Harveynash
 */


import {provide, Component, AfterViewInit, OnInit, OnDestroy} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';
import {Utility} from "../../common/utility";
import {Http} from 'angular2/http'

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

    public loginModel = new LoginModel("", "", "");
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
    }

    ngOnInit() {
        console.log('LoginPage - Init');
    }

    ngOnDestroy() {
        console.log('LoginPage - Destroy');
    }


    login() {
        console.log(this.loginModel);
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
                    this._router.parent.navigate(['Dashboard']);
                }
            },
            error => {
                console.log(error);
                return error;
            }
        );

    }



}



