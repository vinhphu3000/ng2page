/**
 * Created by nguyenlet on 3/29/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

//HVN components
import {Sidebar} from  "../sidebar/sidebar";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Overlay} from  "../overlay/overlay";
import {QuickView} from "../QuickView/QuickView";

import {HVNCoreJSComponent} from "../script/corejs";
import {DashboardPage} from "../../pages/dashboard/dashboard";



/*

/*import {LoggedInRouterOutlet} from "../common/logged-in-router-outlet";*/
/*import {LoginPage} from "../pages/login/login-page";*/

import {Utility} from "../../common/utility";


@Component({
    selector: 'nashtech-app',
    templateUrl: './dist/app/components/layout/layout.html',
    directives: [ROUTER_DIRECTIVES, Header, Footer, Sidebar, Overlay, QuickView],
    styleUrls: [],
    providers: []
})
/**
 Core script to handle the entire theme and core functions
 **/

@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: DashboardPage, useAsDefault: true}

])

export class Layout implements AfterViewInit, OnInit, OnDestroy{

    public title = 'Dashboard';
    public bodyClass = "dashboard";

    constructor(public utility:Utility) {
    }

    ngAfterViewInit() {
        console.log('Layout AfterViewInit');

        //TODO: use this likely jquery.on('ready')
        $["Pages"].init();
        if(window["layout"] !== undefined) {
            window["layout"]();
        }
        $(window).trigger('ngAfterViewInit');
    }

    ngOnInit(){
        console.log('Layout OnInit');
    }

    ngOnDestroy(){
    }
}


