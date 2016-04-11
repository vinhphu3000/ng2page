/**
 * Created by nguyenlet on 4/11/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit} from "angular2/core";
import {Utility} from "../../common/utility";

@Component({
    selector: 'wizard-page',
    directives: [],
    templateUrl: './dist/app/pages/wizard/wizard.html',
    providers: []
})


export class WizardPage implements AfterViewInit, OnInit {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {
        $["Pages"].init();
        this._init();
        //noinspection TypeScriptUnresolvedFunction
        layout();
        /*if(window["layout"] !== undefined) {
            window["layout"]();
        }*/
        $(window).trigger('ngAfterViewInit');
        console.log('WizardPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('FormExamplePage - Init');
    }



    private _getBaseURL():string {
        var url = document.URL;
        return url.substr(0, url.lastIndexOf('/'));
    }

    private _init(){
        //noinspection TypeScriptUnresolvedFunction
        $('#rootwizard').bootstrapWizard({
            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;

                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $('#rootwizard').find('.pager .next').hide();
                    $('#rootwizard').find('.pager .finish').show().removeClass('disabled hidden');
                } else {
                    $('#rootwizard').find('.pager .next').show();
                    $('#rootwizard').find('.pager .finish').hide();
                }

                var li = navigation.find('li.active');

                var btnNext = $('#rootwizard').find('.pager .next').find('button');
                var btnPrev = $('#rootwizard').find('.pager .previous').find('button');

                // remove fontAwesome icon classes
                function removeIcons(btn) {
                    btn.removeClass(function(index, css) {
                        return (css.match(/(^|\s)fa-\S+/g) || []).join(' ');
                    });
                }

                if ($current > 1 && $current < $total) {

                    var nextIcon = li.next().find('.fa');
                    var nextIconClass = nextIcon.attr('class').match(/fa-[\w-]*/).join();

                    removeIcons(btnNext);
                    btnNext.addClass(nextIconClass + ' btn-animated from-left fa');

                    var prevIcon = li.prev().find('.fa');
                    var prevIconClass = prevIcon.attr('class').match(/fa-[\w-]*/).join();

                    removeIcons(btnPrev);
                    btnPrev.addClass(prevIconClass + ' btn-animated from-left fa');
                } else if ($current == 1) {
                    // remove classes needed for button animations from previous button
                    btnPrev.removeClass('btn-animated from-left fa');
                    removeIcons(btnPrev);
                } else {
                    // remove classes needed for button animations from next button
                    btnNext.removeClass('btn-animated from-left fa');
                    removeIcons(btnNext);
                }
            },
            onNext: function(tab, navigation, index) {
                console.log("Showing next tab");
            },
            onPrevious: function(tab, navigation, index) {
                console.log("Showing previous tab");
            },
            onInit: function() {
                $('#rootwizard ul').removeClass('nav-pills');
            }

        });

        $('.remove-item').click(function(e) {
            e.preventDefault();
            $(this).parents('tr').remove();
        });
    }
}







