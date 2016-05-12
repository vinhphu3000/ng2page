/**
 * Created by nguyenlet on 4/13/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Utility} from "../../../common/utility";

@Component({
    selector: 'button-page',
    directives: [],
    templateUrl: './dist/app/pages/element-example/button/button.html',
    providers: []
})


export class ButtonPage implements AfterViewInit, OnInit {

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
        console.log('ButtonPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('ButtonPage - Init');
    }

    //noinspection TypeScriptUnresolvedVariable
    private _init() {
    }


}

