import {Injectable, resolveForwardRef} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanActivateChild, ActivatedRoute} from '@angular/router';
import { LOGIN_URL } from '../../../common/constants'
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    protected readonly router: Router,private route: ActivatedRoute,
    private sessionService: SessionService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean{
    console.log('Checking User logged');
    if(!this.sessionService.session) {
        this.router.navigate([LOGIN_URL], { relativeTo: this.route })
    }
    return this.sessionService.session != null
  }
}
