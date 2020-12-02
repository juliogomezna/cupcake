import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from "../../../common/models/user.model";
import { UserApiService } from './api/user.api.service'

@Injectable({
    providedIn: 'root'
})
export class SessionService {
// TODO: Due to cupcake requirements I can not save nothing on localstorage or sessionstorage
// Then a singletonService is used to keep the state of the current user Logged
    private _session: User = undefined

    constructor(){ }

    
    public set session(user:User){
        this._session = user
    }

    public get session(){
        return this._session
    }

}