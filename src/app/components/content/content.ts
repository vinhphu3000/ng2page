/**
 * Created by nguyenlet on 12/25/2015.
 */

import { Component,  AfterViewInit, OnInit } from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

/*import {HVNMaterialFormPage} from "../../pages/material-form-page/material-form-page";
import {HVNFormPage} from "../../pages/form-pages/form-page";
import {HVNMainPage} from "../../pages/main-page/main-page";
import {HVNAmChartPage} from "../../pages/chart-pages/am-chart-page";
import {HVNUIGeneralPage} from "../../pages/ui-general-page/ui-general-page";
import {HVNDragDropPortletPage} from "../../pages/portlet/dragdrop-portlet-page";
import {HVNKendoWorkFlowPage} from "../../pages/kendo-workflow-page/kendo-workflow-page";*/
// import {HVNLoginPage} from "../../pages/login-pages/login-page";
import {DashboardPage} from "../../pages/dashboard/dashboard";
import {Utility} from "../../common/utility";

@Component({
    selector: 'content',
    directives: [ROUTER_DIRECTIVES, DashboardPage],
    templateUrl: './dist/app/components/content/content.html',
})

@RouteConfig([
   {path:'/dashboard', name: 'DashboardPage', component: DashboardPage, useAsDefault: true}

])

export class Content implements AfterViewInit, OnInit {
    constructor(public utility: Utility) {

    }

    ngAfterViewInit() {
        console.log('Content - ngAfterViewInit');
    }

    ngOnInit(){
        console.log('Content - ngOnInit');
    }
}

