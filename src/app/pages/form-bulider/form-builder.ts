/**
 * Created by nguyenlet on 4/21/2016.
 * Harveynash
 */



import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Utility} from "../../common/utility";

@Component({
    selector: 'form-builder-page',
    directives: [],
    templateUrl: './dist/app/pages/map/form-builder/form-builder.html',
    providers: []
})


export class FormBuilderPage implements AfterViewInit, OnInit {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {
        //noinspection TypeScriptUnresolvedVariable
        $.Pages.init();
        //noinspection TypeScriptUnresolvedVariable
        //google.maps.event.addDomListener(window, 'ngAfterViewInit', this._init);
        this._init();
        //noinspection TypeScriptUnresolvedFunction

        $(window).trigger('ngAfterViewInit');
        console.log('GoogleMapPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('GoogleMapPage - Init');
    }

    //noinspection TypeScriptUnresolvedVariable
    private _init() {



    }


}
