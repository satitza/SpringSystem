import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {NavigationStart, Router} from "@angular/router";
import {Observable} from "rxjs/index";
import {tap} from "rxjs/internal/operators";

@Injectable()
export class Http401Interceptor implements HttpInterceptor {
  private currentUrl: string;
  private active = true;

  constructor(private router: Router) {

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.currentUrl = e.url
      }
    })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
    }, err => {
      this.hadleError(err);
    }));
  }

  private hadleError(err: HttpErrorResponse) {
    if (err.status == 401 && this.active && this.router.url !== '/login') {
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    }
  }
}
