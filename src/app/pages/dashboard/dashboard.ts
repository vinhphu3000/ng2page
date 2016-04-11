/**
 * Created by nguyenlet on 3/31/2016.
 * 
 */



import {provide, Component, AfterViewInit, OnInit } from 'angular2/core';
import {CanActivate} from 'angular2/router';

import { tokenNotExpired} from "../../common/angular2-jwt";
import {Utility} from "../../common/utility";


@Component({
    selector: 'dashboard-page',
    directives: [],
    //consider use templateUrl points to html template file
    templateUrl: './dist/app/pages/dashboard/dashboard.html',
    providers: []
})
/*@CanActivate(()=>tokenNotExpired(featureName))*/

export class DashboardPage implements AfterViewInit, OnInit {

    public errorMessage:string;
    public ASSETS_PATH:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {
        $["Pages"].init();
     
        if(window["layout"] !== undefined) {
            window["layout"]();
        }
        $(window).trigger('ngAfterViewInit');
        console.log('FormExamplePage - AfterViewInit');
        console.log('DashboardPage - AfterViewInit');
        window["dashboard"]();
    }

    ngOnInit() {

        console.log('DashboardPage - Init');
    }



}




