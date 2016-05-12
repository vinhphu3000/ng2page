/**
 * Created by nguyenlet on 4/5/2016.
 */

import {Component, AfterViewInit, OnInit } from '@angular/core';

import {Utility} from "../../common/utility";

@Component({
    selector: 'edit-user-page',
    directives: [],
    templateUrl: './dist/app/pages/users/user.html',
    providers: []
})


export class UserPage implements AfterViewInit, OnInit {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {

        console.log('UserListPage - AfterViewInit');
        $('#form-register')["validate"]();
    }

    ngOnInit() {

        console.log('UserListPage - Init');
    }



}





