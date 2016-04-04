/**
 * Created by nguyenlet on 3/31/2016.
 * Harveynash
 */


/**
 * Our LoginService consists of 3 main methods. The first is the login to authenticate with an email address and a password.
 * We will use it in the login component and based on it’s result redirect to the home page and store the received token from the server.
 * The isLoggedIn method will be important when we restrict access to the profile page, showing the current authentication state.
 *
 * The LoginService needs the @Injectable decorator to access the Http service and with it send the login credentials (user, password) to the server (/login).
 * By default the content type is plain/text and we need to set it with the help of Headers to application/json.
 * Listening to the response of a HTTP call is a bit different from Angular 1. We get an RxJS observable object instead of a promise.
 * Just as with promises we can listen to it’s result, the subscribe method will take the place of the promise’s then method.
 *
 * We won’t simply pass the raw response to the components, we will transform it to a boolean value and while doing it, check it’s result.
 * The backend service generates a unique token for us, what we can use for authentication of our requests.
 * If the backend process is successful, we store the authentication token in LocalStorage and save the state in the service to the loggedIn property.
 */

import {Injectable} from 'angular2/core';

import {Observable}     from 'rxjs/Observable';
import {LoginModel} from '../models/login-model';
import {Http,  Response, Headers} from 'angular2/http'

import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from '../../../common/angular2-jwt';
declare var Auth0Lock;


@Injectable()
export class LoginService {
    jwtHelper:JwtHelper = new JwtHelper();
    private loginServiceUrl:string = "http://192.168.168.40/HvNWebApi";
    private loggedIn = false;
    private _loginModel: LoginModel;

    thing:any;

    constructor( public http:Http, public authHttp:AuthHttp) {
        this.loggedIn = localStorage.getItem('auth_token');
    }


    logout() {
        localStorage.removeItem('access_token');
        this.loggedIn = false;
    }

    /*loggedIn() {
        return tokenNotExpired();
    }*/

    isLoggedIn() {
        return this.loggedIn;
    }

    login(loginModel: LoginModel) {
        this._loginModel =  loginModel;
        let credentials =`grant_type=password&username=${this._loginModel.username}&password=${this._loginModel.password}`;

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let result =  this.authHttp.post(this.loginServiceUrl + '/token', credentials, { headers: headers} );



        return result;

    }

    getThing() {
        this.http.get('http://localhost:3001/ping')
            .subscribe(
                data => console.log(data.json()),
                err => console.log(err),
                () => console.log('Complete')
            );
    }


    getSecretThing() {
        this.authHttp.get('http://localhost:3001/secured/ping')
            .subscribe(
                data => console.log(data.json()),
                err => console.log(err),
                () => console.log('Complete')
            );
    }

    tokenSubscription() {
        this.authHttp.tokenStream.subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Complete')
        );
    }

    useJwtHelper() {
        var token = localStorage.getItem('access_token');

        console.log(
            this.jwtHelper.decodeToken(token),
            this.jwtHelper.getTokenExpirationDate(token),
            this.jwtHelper.isTokenExpired(token)
        );
    }


    private handleError(error:Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}


