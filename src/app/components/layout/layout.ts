///<reference path="../../../../typings/browser/ambient/jquery/index.d.ts"/>
/**
 * Created by nguyenlet on 3/29/2016.
 * 
 */


import {Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Sidebar} from "../sidebar/sidebar";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Overlay} from "../overlay/overlay";
import {QuickView} from "../QuickView/QuickView";
import {UserPage} from "../../pages/users/user";
import {UsersPage} from "../../pages/users/list/users";
import {Utility} from "../../common/utility";
import {DashboardPage} from "../../pages/dashboard/dashboard";
import {FormExamplePage} from "../../pages/form-example/form-example";
import {WizardPage} from "../../pages/wizard/wizard";
import {TablePage} from "../../pages/table/table";
import {ChartPage} from "../../pages/charts/chart";
import {PortletPage} from "../../pages/portlet/portlet";
import {ButtonPage} from "../../pages/element-example/button/button";
import {NotificationPage} from "../../pages/element-example/notification/notifications";
import {ModalPage} from "../../pages/element-example/modal/modal";
import {TabAccordionPage} from "../../pages/element-example/tab-accordion/tab-accordion";
import {TreeViewPage} from "../../pages/element-example/tree-view/tree-view";
import {SliderPage} from "../../pages/element-example/slider/slider";
import {GoogleMapPage} from "../../pages/map/google-map/google-map";
import {CalendarPage} from "../../pages/calendar/calendar";
import {FormBuilderPage} from "../../pages/form-bulider/form-builder";

//HVN components

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
    {path: '/portlet', name: 'Portlet', component: PortletPage},
    {path: '/button', name: 'Button', component: ButtonPage},
    {path: '/notification', name: 'Notification', component: NotificationPage},
    {path: '/modal', name: 'Modal', component: ModalPage},
    {path: '/tab-accordion', name: 'TabAccordion', component: TabAccordionPage},
    {path: '/tree-view', name: 'TreeView', component: TreeViewPage},
    {path: '/slider', name: 'Slider', component: SliderPage},
    {path: '/google-map', name: 'GoogleMap', component: GoogleMapPage},
    {path: 'calendar', name: 'Calendar', component: CalendarPage},
    {path: 'form-builder', name: 'FormBuilder', component: FormBuilderPage},

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
        this._init();
    }

    ngOnInit(){

        console.log('Layout OnInit');
    }

    ngOnDestroy(){

    }

    private _init(){
        // Initializes search overlay plugin.
        // Replace onSearchSubmit() and onKeyEnter() with
        // your logic to perform a search and display results
        //noinspection TypeScriptUnresolvedFunction
        $(".list-view-wrapper").scrollbar();

        //noinspection TypeScriptUnresolvedFunction
        $('[data-pages="search"]').search({
            // Bind elements that are included inside search overlay
            searchField: '#overlay-search',
            closeButton: '.overlay-close',
            suggestions: '#overlay-suggestions',
            brand: '.brand',
            // Callback that will be run when you hit ENTER button on search box
            onSearchSubmit: function (searchString) {
                console.log("Search for: " + searchString);
            },
            // Callback that will be run whenever you enter a key into search box.
            // Perform any live search here.
            onKeyEnter: function (searchString) {
                console.log("Live search for: " + searchString);
                var searchField = $('#overlay-search');
                var searchResults = $('.search-results');

                /*
                 Do AJAX call here to get search results
                 and update DOM and use the following block
                 'searchResults.find('.result-name').each(function() {...}'
                 inside the AJAX callback to update the DOM
                 */

                // Timeout is used for DEMO purpose only to simulate an AJAX call
                clearTimeout($.data(this, 'timer'));
                searchResults.fadeOut("fast"); // hide previously returned results until server returns new results
                var wait = setTimeout(function () {

                    searchResults.find('.result-name').each(function () {
                        if (searchField.val().length != 0) {
                            $(this).html(searchField.val());
                            searchResults.fadeIn("fast"); // reveal updated results
                        }
                    });
                }, 500);
                $(this).data('timer', wait);

            }
        })

        $('.panel-collapse label').off('click').on('click', function (e) {
            e.stopPropagation();
        })
    }
}


