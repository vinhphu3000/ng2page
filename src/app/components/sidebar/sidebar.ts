/**
 * Created by nguyenlet on 12/25/2015.
 * 
 */
import { Component, AfterViewInit, OnInit, OnDestroy, OnChanges } from 'angular2/core';
import {Router, RouterLink } from 'angular2/router';
import {Utility} from '../../common/utility';
import {Logo} from '../../components/elements/organic/logo/logo'
import {WhiteLogo} from '../../components/elements/organic/white-logo/white-logo'


@Component({
    selector: 'sidebar',
    directives: [RouterLink, Logo, WhiteLogo],
    templateUrl:   './dist/app/components/sidebar/sidebar.html'
})



export class Sidebar implements AfterViewInit, OnInit, OnDestroy, OnChanges {

    constructor(public utility:Utility, private _router: Router){

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

    goto(routeName){
        console.log(routeName)
        console.log(this._router);

        //window.location.href = window.location.origin + '/#/' + routeName;
        return false;
    }
}