import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user.model';
import { SessionService } from 'src/app/core/provideders/services/session.service';
import { MAIN_IMAGE, HOME_URL } from '../../common/constants'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public mainImage = MAIN_IMAGE
    public homeUrl = HOME_URL
    loggedUser:User

    constructor(private sessionService: SessionService) { }

    ngOnInit(): void {
        console.log('Initiated')
        this.loggedUser= this.sessionService.session
    }
}