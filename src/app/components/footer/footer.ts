/**
 * Created by nguyenlet on 12/22/2015.
 */

import { Component, AfterViewInit, OnInit, OnDestroy, OnChanges  } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

@Component({
    selector: 'main-footer',
    directives: [RouterLink, RouterOutlet],
    //consider use templateUrl points to html template file
    templateUrl:   './dist/app/components/footer/footer.html'
})


@RouteConfig([
    /*{ path: '/',        redirectTo: '/' }
     { path: '/search',  as: 'search',  component: Search },
     { path: '/today',   as: 'today',   component: TrackToday },
     { path: '/history', as: 'history', component: TrackHistory }*/
])

export class Footer implements AfterViewInit, OnInit, OnDestroy, OnChanges {

    ngAfterViewInit() {
        console.log('Footer AfterViewInit');
    }

    ngOnInit(){
        console.log('Footer OnInit');
    }

    ngOnChanges() {
        console.log('Footer ngOnChanges');
    }

    ngOnDestroy(){
    }
}


