/**
 * Created by nguyenlet on 12/17/2015.
 */
// Angular 2

/// <reference path="../../typings/browser/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/browser/ambient/es6-promise/index.d.ts" />


import {enableProdMode, provide} from "@angular/core";

// While Angular supplies a Title service for setting the HTML document title
// it doesn't include this service as part of the default Browser platform providers.
// As such, if we want to inject it into the components within our application,
// we have to explicitly provide the Angular service in our top component.
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';
import {AuthHttp, AuthConfig} from "./common/angular2-jwt";
import {UrlResolver} from "@angular/compiler";
import {Http, HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";

/*import {PathLocationStrategy} from "@angular/platform/browser/location/path_location_strategy";
import {LocationStrategy} from "@angular/src/platform/browser/location/location_strategy";*/
import {Utility} from "./common/utility";
import {MainAppComponent} from "./components/app.component";

enableProdMode();

bootstrap(MainAppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(UrlResolver, {useClass: UrlResolver}),
    provide(AuthHttp, {
        useFactory: (http) => {
            return new AuthHttp(new AuthConfig(), http);
        },
        deps: [Http],
    }),
    Utility,
    Title,
    ]).then(
    () => window.console.info('Angular finished bootstrapping your application!'),
    (error) => {
        console.warn('Angular was not able to bootstrap your application.');
        console.error(error);
    }
);



