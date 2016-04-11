/**
 * Created by nguyenlet on 4/5/2016.
 */

import {Component, AfterViewInit, OnInit} from "angular2/core";
import {Router, RouterLink } from 'angular2/router';
import {Utility} from "../../../common/utility";
import {UserModel} from "../models/user-model";

@Component({
    selector: 'users-page',
    directives: [RouterLink],
    templateUrl: './dist/app/pages/users/list/users.html',
    providers: [],
    styleUrls: [
        './dist/assets/plugins/jquery-datatable/media/css/dataTables.bootstrap.css',
        './dist/assets/plugins/jquery-datatable/extensions/FixedColumns/css/dataTables.fixedColumns.css',
        './dist/assets/plugins/datatables-responsive/css/datatables.responsive.css'
    ]
})


export class UsersPage implements AfterViewInit, OnInit {

    public errorMessage:string;
    public users:Array<UserModel> = [];

    constructor(public utility:Utility) {
        this.users = [
            new UserModel("9e604f61-e314-4cb3-b89a-6f8e408be640",
                "test@test.com",
                null,
                null
            ),
            new UserModel(
                "dd23305a-02ba-4314-a41a-cc036d0b09af",
                "abc",
                null,
                null
            )
        ];
    }

    ngAfterViewInit() {

        console.log('UsersPage - AfterViewInit');
    }

    ngOnInit() {

        console.log('UsersPage - Init');
    }


}





