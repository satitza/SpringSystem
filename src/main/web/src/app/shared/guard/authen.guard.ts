import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../service/authen.service";

@Injectable({providedIn: 'root'})
export class AuthenGuard implements CanActivate {

  constructor(private authenService: AuthenService,
              private http: HttpClient,
              private router: Router) {
  }

  canActivate(): boolean {
    if (!this.authenService.getAuthenticationStatus()) {
      this.router.navigate(['login']).then(() => {
        window.location.reload();
      });
      return false;
    }
    return true;
  }
}
