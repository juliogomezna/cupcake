import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "../../../../common/models/user.model";
import { environment } from '../../../../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class UserApiService {

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.serverUrl}/users`);
    }

    findUserByCredentials(username:string,password: string): Observable<User[]> {
        let params = new HttpParams();
        params = params.set('username',username)
        params = params.set("password",password)
        return this.http.get<User[]>(`${environment.serverUrl}/users`,{params: params});
    }

}