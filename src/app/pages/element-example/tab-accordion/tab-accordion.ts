/**
 * Created by nguyenlet on 4/14/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Utility} from "../../../common/utility";

@Component({
    selector: 'tab-accordion-page',
    directives: [],
    templateUrl: './dist/app/pages/element-example/tab-accordion/tab-accordion.html',
    providers: []
})


export class TabAccordionPage implements AfterViewInit, OnInit {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {
        //noinspection TypeScriptUnresolvedVariable
        $.Pages.init();
        this._init();
        //noinspection TypeScriptUnresolvedFunction
        //layout();

        $(window).trigger('ngAfterViewInit');
        console.log('TabAccordionPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('TabAccordionPage - Init');
    }

    //noinspection TypeScriptUnresolvedVariable
    private _init() {
    }


}


