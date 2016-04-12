/**
 * Created by nguyenlet on 4/11/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit} from "angular2/core";
import {Utility} from "../../common/utility";

@Component({
    selector: 'table-page',
    directives: [],
    templateUrl: './dist/app/pages/table/table.html',
    providers: []
})


export class TablePage implements AfterViewInit, OnInit {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {
        $["Pages"].init();
        this._init();
        //noinspection TypeScriptUnresolvedFunction
        layout();

        $(window).trigger('ngAfterViewInit');
        console.log('TablePage - AfterViewInit');

    }

    ngOnInit() {
        console.log('FormExamplePage - Init');
    }


    private _getBaseURL():string {
        var url = document.URL;
        return url.substr(0, url.lastIndexOf('/'));
    }

    private _init() {
        this.initBasicTable();
        this.initStripedTable();
        this.initDetailedViewTable();
        this.initCondensedTable();
    }

    // Initialize a basic dataTable with row selection option
    private initBasicTable() {

        var table = $('#basicTable');

        var settings = {
            "sDom": "<'table-responsive't><'row'<p i>>",
            "destroy": true,
            "paging": true,

            "scrollCollapse": true,
            "iDisplayLength": 5,

            "oLanguage": {
                "sLengthMenu": "_MENU_ ",
                "sInfo": "Showing <b>_START_ to _END_</b> of _TOTAL_ entries"
            },


        };

        //noinspection TypeScriptUnresolvedFunction
        table.dataTable(settings);

        $('#basicTable input[type=checkbox]').click(function () {
            if ($(this).is(':checked')) {
                $(this).closest('tr').addClass('selected');
            } else {
                $(this).closest('tr').removeClass('selected');
            }

        });

    }

    // Initialize a dataTable having bootstrap's stripes style
    private initStripedTable() {

        var table = $('#stripedTable');

        var settings = {
            "sDom": "t",
            "destroy": true,
            "paging": true,
            "scrollCollapse": true

        };
        //noinspection TypeScriptUnresolvedFunction
        table.dataTable(settings);

    }

    // Initialize a dataTable with collapsible rows to show more details
    private initDetailedViewTable() {

        var _format = function (d) {
            // `d` is the original data object for the row
            return '<table class="table table-inline">' +
                '<tr>' +
                '<td>Learn from real test data <span class="label label-important">ALERT!</span></td>' +
                '<td>USD 1000</td>' +
                '</tr>' +
                '<tr>' +
                '<td>PSDs included</td>' +
                '<td>USD 3000</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Extra info</td>' +
                '<td>USD 2400</td>' +
                '</tr>' +
                '</table>';
        }


        var table = $('#detailedTable');

        //noinspection TypeScriptUnresolvedFunction
        table.DataTable({
            "sDom": "t",
            "scrollCollapse": true,
            "paging": false,
            "bSort": false
        });

        // Add event listener for opening and closing details
        $('#detailedTable tbody').on('click', 'tr', function () {
            //var row = $(this).parent()
            if ($(this).hasClass('shown') && $(this).next().hasClass('row-details')) {
                $(this).removeClass('shown');
                $(this).next().remove();
                return;
            }
            var tr = $(this).closest('tr');
            //noinspection TypeScriptUnresolvedFunction
            var row = table.DataTable().row(tr);

            $(this).parents('tbody').find('.shown').removeClass('shown');
            $(this).parents('tbody').find('.row-details').remove();

            row.child(_format(row.data())).show();
            tr.addClass('shown');
            tr.next().addClass('row-details');
        });

    }

    // Initialize a condensed table which will truncate the content
    // if they exceed the cell width
    private initCondensedTable() {
        var table = $('#condensedTable');

        var settings = {
            "sDom": "t",
            "destroy": true,
            "paging": false,
            "scrollCollapse": true
        };

        //noinspection TypeScriptUnresolvedFunction
        table.dataTable(settings);
    }
}
