/**
 * Created by nguyenlet on 4/14/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Utility} from "../../../common/utility";

@Component({
    selector: 'modal-page',
    directives: [],
    templateUrl: './dist/app/pages/element-example/modal/modal.html',
    providers: []
})

export class ModalPage implements AfterViewInit, OnInit {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {

        //noinspection TypeScriptUnresolvedVariable
        $.Pages.init();

        this._init();

        $(window).trigger('ngAfterViewInit');
        console.log('ModalPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('ModalPage - Init');
    }

    //noinspection TypeScriptUnresolvedVariable
    private _init() {

    }


}
