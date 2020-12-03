import { Component, Input } from "@angular/core";
import { User } from 'src/app/common/models/user.model';
import { SessionService } from 'src/app/core/provideders/services/session.service';
import { UserService } from 'src/app/core/provideders/services/user.service';
import { USER_IMAGE } from '../../../../common/constants'
import { UserRoles } from '../../../../common/models/userRole.enum'
@Component({
    selector: 'home-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

    @Input()
    user: User

    @Input()
    currentUser: User

    userImage= USER_IMAGE
    roles= UserRoles

    constructor(private userService:UserService){

    }

    onSubmit(){
        this.updateUser(this.user)
    }

    updateUser(user:User){
        this.userService.updateUser(user).subscribe(user => {
            // TODO: Should be a better way to advice
            alert(`The user ${user.name} was saved succesfully`)
        })
    }
}