/**
 * Created by nguyenlet on 3/29/2016.
 * 
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
import {FormExamplePage} from "../../pages/form-example/form-example";
import {WizardPage} from "../../pages/wizard/wizard";
import {TablePage} from "../../pages/table/table";
import {ChartPage} from "../../pages/charts/chart";

import {UserPage} from "../../pages/users/user";
import {UsersPage} from "../../pages/users/list/users";
import {Utility} from "../../common/utility";



@Component({
    selector: 'main-app',
    templateUrl: './dist/app/components/layout/layout.html',
    directives: [ROUTER_DIRECTIVES, Header, Footer, Sidebar, Overlay, QuickView],
    styleUrls: [],
    providers: []
})
/**
 Core script to handle the entire theme and core functions
 **/

@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: DashboardPage, useAsDefault: true},
    {path: '/form-example', name: 'FormExample', component: FormExamplePage},
    {path: '/wizard', name: 'Wizard', component: WizardPage},
    {path: '/table', name: 'Table', component: TablePage},
    {path: '/chart', name: 'Chart', component: ChartPage},

    {path:'/users',      name: 'Users',   component: UsersPage},
    {path:'/user/:id',      name: 'User',   component: UserPage}
])

export class Layout implements AfterViewInit, OnInit, OnDestroy{

    public title = 'Dashboard';
    public bodyClass = "dashboard";

    constructor(public utility:Utility) {
    }

    ngAfterViewInit() {
        console.log('Layout AfterViewInit');

        //TODO: use this likely jquery.on('ready')

    }

    ngOnInit(){
        console.log('Layout OnInit');
    }

    ngOnDestroy(){

    }
}


