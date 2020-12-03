import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../core/provideders/services/user.service'
import { SessionService } from '../../core/provideders/services/session.service'
import { HOME_URL,MAIN_IMAGE } from '../../common/constants'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errorAuth: boolean
    mainImage = MAIN_IMAGE

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private sessionService: SessionService
    ) {

    }

    ngOnInit() {
       this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.errorAuth= false
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get form() { return this.loginForm.controls; }

    onSubmit() {

        if(this.form.username.value && this.form.password.value){
            this.errorAuth = true
            this.userService.validateCredentials(this.form.username.value,this.form.password.value)
            .subscribe(user => {
                this.errorAuth = false
                this.sessionService.session = user
                this.router.navigate([HOME_URL], { relativeTo: this.route });
            },error => this.errorAuth = true,
            () => {
                if(this.errorAuth){
                    this.sessionService.session = undefined
                }
            })
            
        }
    }
}