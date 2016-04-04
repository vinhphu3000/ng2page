/**
 * Created by nguyenlet on 12/25/2015.
 * Harveynash
 */
import { Component, AfterViewInit, OnInit, OnDestroy, OnChanges } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import {Utility} from '../../common/utility';
import {Logo} from '../../components/elements/organic/logo/logo'
import {WhiteLogo} from '../../components/elements/organic/white-logo/white-logo'


@Component({
    selector: 'sidebar',
    directives: [RouterLink, RouterOutlet, Logo, WhiteLogo],
    templateUrl:   './dist/app/components/sidebar/sidebar.html'
})

@RouteConfig([
    /*{ path: '/',        redirectTo: '/' }
     { path: '/search',  as: 'search',  component: Search },
     { path: '/today',   as: 'today',   component: TrackToday },
     { path: '/history', as: 'history', component: TrackHistory }*/
])

export class Sidebar implements AfterViewInit, OnInit, OnDestroy, OnChanges {

    constructor(public utility:Utility){

    }

    ngAfterViewInit() {
        console.log('Sidebar AfterViewInit');
    }

    ngOnInit(){
        console.log('Sidebar OnInit');
    }

    ngOnChanges() {

    }

    ngOnDestroy(){
    }
}