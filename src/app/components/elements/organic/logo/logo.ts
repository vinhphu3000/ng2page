/**
 * Created by nguyenlet on 3/30/2016.
 * 
 */

/**
 * Created by nguyenlet on 12/25/2015.
 * 
 */
import { Component, AfterViewInit, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { RouteConfig, RouterLink, RouterOutlet } from '@angular/router-deprecated';
import {Utility} from '../../../../common/utility';

@Component({
    selector: 'logo',
    directives: [RouterLink, RouterOutlet],
    //consider use templateUrl points to html template file
    templateUrl:   './dist/app/components/elements/organic/logo/logo.html'
})

@RouteConfig([
    /*{ path: '/',        redirectTo: '/' }
     { path: '/search',  as: 'search',  component: Search },
     { path: '/today',   as: 'today',   component: TrackToday },
     { path: '/history', as: 'history', component: TrackHistory }*/
])

export class Logo implements AfterViewInit, OnInit, OnDestroy, OnChanges {

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