/**
 * Created by nguyenlet on 3/30/2016.
 * Harveynash
 */

import { Component, AfterViewInit, OnInit, OnDestroy  } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

import {Utility} from "../../common/utility";
import  {Logo} from "../../components/elements/organic/logo/logo";


@Component({
    selector: 'overlay',
    directives: [RouterLink, RouterOutlet, Logo],
    templateUrl: './dist/app/components/overlay/overlay.html'
})


@RouteConfig([
    /*{ path: '/',        redirectTo: '/' }
     { path: '/search',  as: 'search',  component: Search },
     { path: '/today',   as: 'today',   component: TrackToday },
     { path: '/history', as: 'history', component: TrackHistory }*/
])


export class Overlay implements AfterViewInit, OnInit, OnDestroy  {

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {
        console.log('Overlay AfterViewInit');
    }

    ngOnInit(){
        console.log('Overlay OnInit');
    }

    ngOnDestroy() {

    }

}

