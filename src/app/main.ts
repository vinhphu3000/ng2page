/**
 * Created by nguyenlet on 12/17/2015.
 */
// Angular 2

/// <reference path="../../typings/browser/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/browser/ambient/es6-shim/index.d.ts" />


import {enableProdMode, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

// Add these symbols to override the `LocationStrategy`
import {AuthHttp, AuthConfig} from './common/angular2-jwt';

import {UrlResolver} from 'angular2/compiler';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

// Angular's router injectable services/bindings
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

//Nashtech Utility
import {Utility} from './common/utility';
/*import {Layout} from './common/layout';*/

import {LoginService} from './pages/login/services/login-service';
import {NashtechAppComponent} from './components/app.component';

enableProdMode();

bootstrap(NashtechAppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(UrlResolver, {useClass: UrlResolver}),
    provide(AuthHttp, {
        useFactory: (http) => {
            return new AuthHttp(new AuthConfig(), http);
        },
        deps: [Http],
    }),
    
    Utility
    /*Layout,
     Demo*/]).catch(err =>console.error(err));


