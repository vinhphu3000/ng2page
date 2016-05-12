/**
 * Created by nguyenlet on 4/12/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Utility} from "../../common/utility";

@Component({
    selector: 'portlet-page',
    directives: [],
    templateUrl: './dist/app/pages/portlet/portlet.html',
    providers: []
})


export class PortletPage implements AfterViewInit, OnInit {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {
        $["Pages"].init();
        this._init();
        //noinspection TypeScriptUnresolvedFunction
        //layout();

        $(window).trigger('ngAfterViewInit');
        console.log('PortletPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('PortletPage - Init');
    }

    //noinspection TypeScriptUnresolvedVariable
    private _init() {
        //noinspection TypeScriptUnresolvedFunction
        $('#portlet-basic').portlet({
            onRefresh: function () {
                // Timeout to simulate AJAX response delay
                //noinspection TypeScriptUnresolvedFunction
                $('#portlet-basic').portlet({
                    refresh: false
                });
                /*setTimeout(function () {
                    // Hides progress indicator
                    //noinspection TypeScriptUnresolvedFunction
                    $('#portlet-basic').portlet({
                        refresh: false
                    });
                }, 2000);*/
            }
        });

        //noinspection TypeScriptUnresolvedFunction
        $('#portlet-advance').portlet({
            onRefresh: function () {
                //noinspection TypeScriptUnresolvedFunction
                $('#portlet-advance').portlet({
                    error: "Something went terribly wrong. Just keep calm and carry on!"
                });
                /*setTimeout(function () {
                    // Throw any error you encounter while refreshing
                    //noinspection TypeScriptUnresolvedFunction
                    $('#portlet-advance').portlet({
                        error: "Something went terribly wrong. Just keep calm and carry on!"
                    });
                }, 2000);*/
            }
        });


        //noinspection TypeScriptUnresolvedFunction
        $('#portlet-linear').portlet({
            progress: 'bar',
            onRefresh: function () {
                //noinspection TypeScriptUnresolvedFunction
                $('#portlet-linear').portlet({
                    refresh: false
                });
                /*setTimeout(function () {
                    // Hides progress indicator
                    //noinspection TypeScriptUnresolvedFunction
                    $('#portlet-linear').portlet({
                        refresh: false
                    });
                }, 2000);*/
            }
        });

        //noinspection TypeScriptUnresolvedFunction
        $('#portlet-circular').portlet({
            progress: 'circle',
            onRefresh: function () {
                //noinspection TypeScriptUnresolvedFunction
                $('#portlet-circular').portlet({
                    refresh: false
                });
             /*   setTimeout(function () {
                    // Hides progress indicator
                    //noinspection TypeScriptUnresolvedFunction
                    $('#portlet-circular').portlet({
                        refresh: false
                    });
                }, 2000);*/
            }
        });

        //noinspection TypeScriptUnresolvedFunction
        $('#portlet-circular-minimal').portlet({
            progress: 'circle-lg',
            overlayOpacity: 0.6,
            onRefresh: function () {
                //noinspection TypeScriptUnresolvedFunction
                $('#portlet-circular-minimal').portlet({
                    refresh: false
                });
                /*setTimeout(function () {
                    // Hides progress indicator
                    //noinspection TypeScriptUnresolvedFunction
                    $('#portlet-circular-minimal').portlet({
                        refresh: false
                    });
                }, 2000);*/
            }
        });


        //noinspection TypeScriptUnresolvedFunction
        $('#portlet-error').portlet({
            onRefresh: function () {
                //noinspection TypeScriptUnresolvedFunction
                $('#portlet-error').portlet({
                    error: "Something went terribly wrong"
                });
                /*setTimeout(function () {
                    //noinspection TypeScriptUnresolvedFunction
                    $('#portlet-error').portlet({
                        error: "Something went terribly wrong"
                    });
                }, 2000);*/
            }
        });


        //noinspection TypeScriptUnresolvedFunction
        $('#portlet-linear-color').portlet({
            progress: 'bar',
            progressColor: 'success',
            onRefresh: function () {
                //noinspection TypeScriptUnresolvedFunction
                $('#portlet-linear-color').portlet({
                    refresh: false
                });
                /*setTimeout(function () {
                    // Hides progress indicator
                    //noinspection TypeScriptUnresolvedFunction
                    $('#portlet-linear-color').portlet({
                        refresh: false
                    });
                }, 2000);*/
            }
        });

        //noinspection TypeScriptUnresolvedFunction
        $('#portlet-circular-color').portlet({
            progress: 'circle',
            progressColor: 'success',
            onRefresh: function () {
                //noinspection TypeScriptUnresolvedFunction
                $('#portlet-circular-color').portlet({
                    refresh: false
                });
                /*setTimeout(function () {
                    // Hides progress indicator
                    //noinspection TypeScriptUnresolvedFunction
                    $('#portlet-circular-color').portlet({
                        refresh: false
                    });
                }, 2000);*/
            }
        });

        // Draggable portlets are rendered using jQuery Sortable plugin
        //noinspection TypeScriptUnresolvedFunction,TypeScriptUnresolvedVariable
        /*if (!jQuery().onRefresh) {
            return;
        }*/

        //noinspection TypeScriptUnresolvedFunction
        $(".sortable .row .col-md-6").sortable({
            connectWith: ".sortable .row .col-md-6",
            handle: ".panel-heading",
            cancel: ".portlet-close",
            placeholder: "sortable-box-placeholder round-all",

            forcePlaceholderSize: true,
            tolerance: 'pointer',
            forceHelperSize: true,
            revert: true,
            helper: 'original',
            opacity: 0.8,
            iframeFix: false
        });

    }


}

