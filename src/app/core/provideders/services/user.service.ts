import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from 'src/app/common/models/user.model';
import { UserApiService } from './api/user.api.service'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private userApiService:UserApiService){ }

    validateCredentials(username:string, password: string): Observable<User>{
        return this.userApiService.findUserByCredentials(username,password).pipe(
            filter(users => users && users.length > 0),
            map(users => users[0])
        )
    }

    getAllUsers():Observable<User[]>{
        return this.userApiService.getAllUsers().pipe(
            filter(users => users && users.length > 0)
        )
    }

    updateUser(user:User): Observable<User> {
        return  this.userApiService.updateUser(user);
    }

}