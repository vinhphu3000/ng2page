/*
 * The first thing you notice are the list of polyfills necessary for Angular 2.
 * core-js: a highly modular suite of each ES2015 polyfills
 * es6-shim: a shim to ensure most ES2015 features work in any browser
 * es6-promise: a polyfill for native Promise
 * es7-reflect-metadata: a polyfill for typescript to emit typed data in a constructor of a class (more on this later)
 * zone.js/lib/browser/zone-microtask: a way for JavaScript developers to keep track of our browser’s VirtualMachine
 * zone.js/lib/browser/zone-microtask: enable longer stack trace from asynchronous calls. One of the many features for using zone.js
 */

import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { Title } from '@angular/platform-browser';

import {LoginPage} from "../pages/login/login-page";
import {Utility} from "../common/utility";
import {Layout} from "./layout/layout";
import {} from '../pages/login/services/login-service';
import {LoggedInRouterOutlet} from "../common/angular2-jwt";

@Component({
    selector: 'main-app',
    templateUrl: './dist/app/components/app.html',
    directives: [ROUTER_DIRECTIVES, LoggedInRouterOutlet],
    styleUrls: [],
    providers: []
})

@RouteConfig([//main routing
    {path: '/...', name: 'Home', component: Layout, useAsDefault: true},
    {path: '/login', name: 'Login', component: LoginPage, useAsDefault: false}
])

export class MainAppComponent implements AfterViewInit, OnInit, OnDestroy  {

  
    constructor(private _Utility:Utility, private _titleService: Title ) {
    }

    public setTitle( newTitle: string) {
        this._titleService.setTitle( newTitle );
    }

    ngAfterViewInit() {
        console.log('app AfterViewInit');
    }

    ngOnInit(){
        console.log('app OnInit');
    }

    ngOnDestroy(){
    }


}

