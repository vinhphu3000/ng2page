/**
 * Created by nguyenlet on 4/15/2016.
 * Harveynash
 */


import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Utility} from "../../../common/utility";

@Component({
    selector: 'google-map-page',
    directives: [],
    templateUrl: './dist/app/pages/map/google-map/google-map.html',
    providers: []
})


export class GoogleMapPage implements AfterViewInit, OnInit {

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

        // When the window has finished loading create our google map below

        //noinspection TypeScriptUnresolvedVariable


        let map;
        let zoomLevel = 11;


        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        //noinspection TypeScriptUnresolvedVariable
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: zoomLevel,
            disableDefaultUI: true,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // Map styling
            styles: [{
                featureType: 'water',
                elementType: 'all',
                stylers: [{
                    hue: '#e9ebed'
                }, {
                    saturation: -78
                }, {
                    lightness: 67
                }, {
                    visibility: 'simplified'
                }]
            }, {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [{
                    hue: '#ffffff'
                }, {
                    saturation: -100
                }, {
                    lightness: 100
                }, {
                    visibility: 'simplified'
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    hue: '#bbc0c4'
                }, {
                    saturation: -93
                }, {
                    lightness: 31
                }, {
                    visibility: 'simplified'
                }]
            }, {
                featureType: 'poi',
                elementType: 'all',
                stylers: [{
                    hue: '#ffffff'
                }, {
                    saturation: -100
                }, {
                    lightness: 100
                }, {
                    visibility: 'off'
                }]
            }, {
                featureType: 'road.local',
                elementType: 'geometry',
                stylers: [{
                    hue: '#e9ebed'
                }, {
                    saturation: -90
                }, {
                    lightness: -8
                }, {
                    visibility: 'simplified'
                }]
            }, {
                featureType: 'transit',
                elementType: 'all',
                stylers: [{
                    hue: '#e9ebed'
                }, {
                    saturation: 10
                }, {
                    lightness: 69
                }, {
                    visibility: 'on'
                }]
            }, {
                featureType: 'administrative.locality',
                elementType: 'all',
                stylers: [{
                    hue: '#2c2e33'
                }, {
                    saturation: 7
                }, {
                    lightness: 19
                }, {
                    visibility: 'on'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels',
                stylers: [{
                    hue: '#bbc0c4'
                }, {
                    saturation: -93
                }, {
                    lightness: 31
                }, {
                    visibility: 'on'
                }]
            }, {
                featureType: 'road.arterial',
                elementType: 'labels',
                stylers: [{
                    hue: '#bbc0c4'
                }, {
                    saturation: -93
                }, {
                    lightness: -2
                }, {
                    visibility: 'simplified'
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('google-map');

        // Create the Google Map using out element and options defined above
        //noinspection TypeScriptUnresolvedVariable
        map = new google.maps.Map(mapElement, mapOptions);


        $('#google-map').on('click', '#map-zoom-in', function () {
            map.setZoom(++zoomLevel);
        });
        $('#google-map').on('click', '#map-zoom-out', function () {
            map.setZoom(--zoomLevel);
        });

    }


}
