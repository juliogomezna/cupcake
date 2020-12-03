import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { SessionService } from 'src/app/core/provideders/services/session.service';
import { UserService } from 'src/app/core/provideders/services/user.service';
import { UserRoles } from '../../../../common/models/userRole.enum'

@Component({
    selector: 'home-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    users$:Observable<User[]>
    public currentUser: User
    public rolesEnum = UserRoles
    constructor(private userService:UserService, private sessionService:SessionService) { }

    ngOnInit(): void {
        this.currentUser = this.sessionService.session
        if(this.currentUser){
            this.currentUser.role ==  UserRoles.USER ? this.setUpCurrentUser(this.currentUser) : this.getAllUsers()
        }
        
    }

    getAllUsers(){
        this.users$ = this.userService.getAllUsers()
    }

    setUpCurrentUser(user:User){
        this.users$ = of(new Array(user))
    }
}