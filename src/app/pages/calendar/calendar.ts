/**
 * Created by nguyenlet on 4/19/2016.
 * Harveynash
 */


import {Component, AfterViewInit, OnInit} from "@angular/core";
import { Title } from '@angular/platform-browser';
import {Utility} from "../../common/utility";

@Component({
    selector: 'calendar-page',
    directives: [],
    templateUrl: './dist/app/pages/calendar/calendar.html',
    providers: []
})


export class CalendarPage implements AfterViewInit, OnInit {

    public errorMessage:string;
    public title: 'Calendar';

    constructor(public utility:Utility, private _titleService: Title ) {

    }


    ngAfterViewInit() {
        //noinspection TypeScriptUnresolvedVariable
        $.Pages.init();
        this._init();

        $(window).trigger('ngAfterViewInit');
        console.log('CalendarPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('CalendarPage - Init');
    }

    //noinspection TypeScriptUnresolvedVariable
    private _init() {
        //set new title
        this._titleService.setTitle(this.title);

        var AJAX = null;
        var selectedEvent;
        //noinspection TypeScriptUnresolvedFunction
        $('#myCalendar').pagescalendar({
            now: "2015-11-23", //Setting a date - remove this;
            onViewRenderComplete: function (range) {
                //Remeber to formate your date
                var start = range.start.format();
                var end = range.end.format();
                if ($("body").hasClass('pending')) {
                    return;
                }
                //noinspection TypeScriptValidateTypes
                $.ajax({
                    type: "GET",
                    url: "/json/calendar.json",
                    data: "",
                    success: function (data) {
                        //noinspection TypeScriptUnresolvedFunction
                        $("#myCalendar").pagescalendar("setState", "loaded");
                        $("body").removeClass('pending');
                        //noinspection TypeScriptUnresolvedFunction
                        $("#myCalendar").pagescalendar("removeAllEvents");
                        //noinspection TypeScriptUnresolvedFunction
                        $("#myCalendar").pagescalendar("addEvents", data);
                    },
                    error: function (ajaxContext) {
                        //noinspection TypeScriptUnresolvedFunction
                        $("#myCalendar").pagescalendar("error", ajaxContext.status + ": Something horribly went wrong :(");
                        $("body").removeClass('pending');
                    }
                });
            },
            onEventClick: function (event) {
                //Open Pages Custom Quick View
                if (!$('#calendar-event').hasClass('open'))
                    $('#calendar-event').addClass('open');


                selectedEvent = event;
                setEventDetailsToForm(selectedEvent);
            },
            onEventDragComplete: function (event) {
                selectedEvent = event;
                setEventDetailsToForm(selectedEvent);

            },
            onEventResizeComplete: function (event) {
                selectedEvent = event;
                setEventDetailsToForm(selectedEvent);
            },
            onTimeSlotDblClick: function (timeSlot) {
                //Adding a new Event on Slot Double Click
                $('#calendar-event').removeClass('open');
                //noinspection TypeScriptUnresolvedFunction
                var newEvent = {
                    title: 'my new event',
                    class: 'bg-success-lighter',
                    start: timeSlot.date,
                    end: moment(timeSlot.date).add(1, 'hour').format(),
                    allDay: false,
                    other: {
                        //You can have your custom list of attributes here
                        note: 'test'
                    }
                };
                selectedEvent = newEvent;
                //noinspection TypeScriptUnresolvedFunction
                $('#myCalendar').pagescalendar('addEvent', newEvent);
                setEventDetailsToForm(selectedEvent);
            },
            onDateChange: function (range) {
                //noinspection TypeScriptUnresolvedFunction
                $("#myCalendar").pagescalendar("setState", "loaded");
                //Remeber to formate your date
                var start = range.start.format();
                var end = range.end.format();
                //console.log(start);
                //console.log(end);
                if ($("body").hasClass('pending')) {
                    return;
                }

                $("body").addClass('pending');
                //noinspection TypeScriptUnresolvedFunction
                $("#myCalendar").pagescalendar("setState", "loading");
                //noinspection TypeScriptValidateTypes
                $.ajax({
                    type: "GET",
                    url: "http://revox.io/json/events.json",
                    data: "",
                    success: function (data) {
                        //noinspection TypeScriptUnresolvedFunction
                        $("#myCalendar").pagescalendar("setState", "loaded");
                        $("body").removeClass('pending');
                        //noinspection TypeScriptUnresolvedFunction
                        $("#myCalendar").pagescalendar("removeAllEvents");
                        //noinspection TypeScriptUnresolvedFunction
                        $("#myCalendar").pagescalendar("addEvents", data);
                    },
                    error: function (ajaxContext) {
                        //noinspection TypeScriptUnresolvedFunction
                        $("#myCalendar").pagescalendar("error", ajaxContext.status + ": Something horribly went wrong :(");
                        $("body").removeClass('pending');
                    }
                });
            }
        });

        // Some Other Public Methods That can be Use are below \
        //console.log($('body').pagescalendar('getEvents'))
        //get the value of a property
        //console.log($('body').pagescalendar('getDate','MMMM'));

        function setEventDetailsToForm(event) {
            $('#eventIndex').val();
            $('#txtEventName').val();
            $('#txtEventCode').val();
            $('#txtEventLocation').val();
            //Show Event date
            //noinspection TypeScriptUnresolvedFunction
            $('#event-date').html(moment(event.start).format('MMM, D dddd'));

            //noinspection TypeScriptUnresolvedFunction
            $('#lblfromTime').html(moment(event.start).format('h:mm A'));
            //noinspection TypeScriptUnresolvedFunction
            $('#lbltoTime').html(moment(event.end).format('H:mm A'));

            //Load Event Data To Text Field
            $('#eventIndex').val(event.index);
            $('#txtEventName').val(event.title);
            $('#txtEventCode').val(event.other.code);
            $('#txtEventLocation').val(event.other.location);
        }

        $('#eventSave').on('click', function () {
            selectedEvent.title = $('#txtEventName').val();

            //You can add Any thing inside "other" object and it will get save inside the plugin.
            //Refer it back using the same name other.your_custom_attribute

            selectedEvent.other.code = $('#txtEventCode').val();
            selectedEvent.other.location = $('#txtEventLocation').val();

            //noinspection TypeScriptUnresolvedFunction
            $('#myCalendar').pagescalendar('updateEvent', selectedEvent);

            $('#calendar-event').removeClass('open');
        });

        $('#eventDelete').on('click', function () {
            //noinspection TypeScriptUnresolvedFunction
            $('#myCalendar').pagescalendar('removeEvent', $('#eventIndex').val());
            $('#calendar-event').removeClass('open');
        });

    }
}
