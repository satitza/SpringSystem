import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Authority, LoginHistory, Role, User} from "../../../../generated-model/model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/user');
  }

  getAllAuthorities(): Observable<Authority[]> {
    return this.http.get<Authority[]>('api/authority');
  }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('api/role');
  }

  getAllLoginHistory(): Observable<LoginHistory[]> {
    return this.http.get<LoginHistory[]>('api/log');
  }

  createUserAccount(user: User): Observable<User> {
    return this.http.post<User>('api/user', user);
  }
}
