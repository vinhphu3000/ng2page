/**
 * Created by nguyenlet on 4/5/2016.
 */



export class UserModel {
    constructor(public id:string,
                public username:string,
                public passwordHash?:string,
                public securityStamp?: string) {
    }
}
