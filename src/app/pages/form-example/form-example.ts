/**
 * Created by nguyenlet on 4/4/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit, OnDestroy } from 'angular2/core';

import {Utility} from "../../common/utility";

@Component({
    selector: 'dashboard-page',
    directives: [],
    templateUrl: './dist/app/pages/form-example/form-example.html',
    providers: []
})


export class FormExamplePage implements AfterViewInit, OnInit, OnDestroy {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {

        console.log('FormExamplePage - AfterViewInit');
        //window["dashboard"]();
    }

    ngOnInit() {

        console.log('FormExamplePage - Init');
    }

    ngOnDestroy() {
        console.log('FormExamplePage - Destroy');
    }


}





