/**
 * Created by nguyenlet on 4/13/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Utility} from "../../../common/utility";

@Component({
    selector: 'notification-page',
    directives: [],
    templateUrl: './dist/app/pages/element-example/notification/notification.html',
    providers: []
})

export class NotificationPage implements AfterViewInit, OnInit {

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
        console.log('NotificationPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('NotificationPage - Init');
    }

    //noinspection TypeScriptUnresolvedVariable
    private _init() {
        var that = this;
        $('.btn-notification-style').click(function (e) {
            console.log('a');
            $('.btn-notification-style').removeClass('active');
            $(this).addClass('active');
        });

        $('.show-notification').click(function (e) {
            e.preventDefault();
            var button = $(this);
            var style = $('.btn-notification-style.active').text(); // Type of notification
            var message = $('.notification-message').val(); // Message to display inside the notification
            var type = $('select.notification-type').val(); // Info, Success, Error etc
            var position = $('.tab-pane.active .position.active').attr('data-placement'); // Placement of the notification

            if (style == 'Notification Bar') {
                // Show an bar notification attached to top and bottom of the screen
                //noinspection TypeScriptUnresolvedFunction
                $('body').pgNotification({
                    style: 'bar',
                    message: message,
                    position: position,
                    timeout: 5000,
                    type: type
                }).show();
            } else if (style == 'Bouncy Flip') {
                // Show a flipping notification animated
                // using CSS3 transforms and animations
                //noinspection TypeScriptUnresolvedFunction
                $('body').pgNotification({
                    style: 'flip',
                    message: message,
                    position: position,
                    timeout: 5000,
                    type: type
                }).show();
            } else if (style == 'Circle Notification') {
                // Slide-in a circle notification from sides
                // You have to provide the HTML for thumbnail
                //noinspection TypeScriptUnresolvedFunction
                $('body').pgNotification({
                    style: 'circle',
                    title: 'John Doe',
                    message: message,
                    position: position,
                    timeout: 5000,
                    type: type,
                    thumbnail: '<img width="40" height="40" style="display: inline-block;" src="' + that.utility.ASSET_FOLDER + '/img/profiles/avatar2x.jpg" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar2x.jpg" alt="">'
                }).show();
            } else if (style == 'Simple Alert') {
                // Simple notification having bootstrap's .alert class
                //noinspection TypeScriptUnresolvedFunction
                $('body').pgNotification({
                    style: 'simple',
                    message: message,
                    position: position,
                    timeout: 5000,
                    type: type
                }).show();
            } else {
                return;
            }

            e.preventDefault();
        });

        $('.position').click(function () {
            $(this).closest('.notification-positions').find('.position').removeClass('active');
            $(this).addClass('active');
        });

        $('.btn-notification-style').click(function () {
            var target = $(this).attr('data-type');
            //noinspection TypeScriptUnresolvedFunction
            $('a[rel=' + target + ']').tab('show');
        });

        // remove previously added notifications from the screen
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
            $('.pgn').remove();
        });
    }


}


