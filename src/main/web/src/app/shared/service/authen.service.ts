import {Inject, Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoginRequest, UserDetails} from "../../../generated-model/model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  isLoggedIn = false;

  isLoggedInSubject = new ReplaySubject<boolean>(1);

  private user = new ReplaySubject<any>(1);

  constructor(private http: HttpClient,
              @Inject('localStorage') private  localStorage: Storage,
              private router: Router) {
    // get current every reset if authenticated
    if (this.getAuthenticationStatus()) {
      this.getCurrentUserFormServer();
    }
  }

  async authentication(loginRequest: LoginRequest) {

    let formData = new FormData();
    formData.append('username', loginRequest.username);
    formData.append('password', loginRequest.password);

    this.http.post('authentication', formData).subscribe(res => {
      if (res) {
        this.isLoggedInSubject.next(true);
        this.isLoggedIn = true;
        this.setLogin(this.isLoggedIn);
        if (this.getAuthenticationStatus()) {
          this.getCurrentUserFormServer();
          this.router.navigate(['/dashboard']);
        }
      }
    }, error => {
      if (error instanceof HttpErrorResponse && error.status == 401) {
        console.log('login fail.');
        this.isLoggedInSubject.next(false);
      }
    })
  }

  private getCurrentUserFormServer() {
    this.http.get<UserDetails>('api/user/current').subscribe(res => {
      if (res) {
        this.user.next(res);
      }
    });
  }

  getCurrentUser(): Observable<any> {
    return this.user;
  }

  private setLogin(loggedIn: boolean) {
    this.localStorage.setItem('logedIn', '' + loggedIn);
  }

  getAuthenticationStatus(): boolean {
    return Boolean(this.localStorage.getItem('logedIn'));
  }

  async logout() {
    this.http.get('logout').subscribe(res => {
      this.clearAuthen();
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    });
  }

  public clearAuthen(): void {
    this.isLoggedInSubject.next(false);
    this.isLoggedIn = false;
    this.clearStorage();
  }

  private clearStorage() {
    this.localStorage.clear();
  }

}
