/**
 * Created by nguyenlet on 3/30/2016.
 * Harveynash
 */

import { Component, AfterViewInit, OnInit, OnDestroy, OnChanges } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import {Utility} from '../../../../common/utility';

@Component({
    selector: 'white-logo',
    directives: [RouterLink, RouterOutlet],
    templateUrl:   './dist/app/components/elements/organic/white-logo/white-logo.html'
})

@RouteConfig([
    /*{ path: '/',        redirectTo: '/' }
     { path: '/search',  as: 'search',  component: Search },
     { path: '/today',   as: 'today',   component: TrackToday },
     { path: '/history', as: 'history', component: TrackHistory }*/
])

export class WhiteLogo implements AfterViewInit, OnInit, OnDestroy, OnChanges {

    constructor(public utility:Utility){

    }

    ngAfterViewInit() {
        console.log('Logo AfterViewInit');
    }

    ngOnInit(){
        console.log('Logo OnInit');
    }

    ngOnChanges() {

    }

    ngOnDestroy(){
    }
}