/**
 * Created by nguyenlet on 12/25/2015.
 * 
 */
import { Component } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

@Component({
    selector: 'hvn-corejs',
    directives: [RouterLink, RouterOutlet],
    //consider use templateUrl points to html template file
    templateUrl:   './dist/app/components/script/corejs.html'
})


@RouteConfig([
    /*{ path: '/',        redirectTo: '/' }
     { path: '/search',  as: 'search',  component: Search },
     { path: '/today',   as: 'today',   component: TrackToday },
     { path: '/history', as: 'history', component: TrackHistory }*/
])

export class HVNCoreJSComponent {}