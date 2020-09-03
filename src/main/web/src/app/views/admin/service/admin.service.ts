import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginHistory} from "../../../../generated-model/model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getAllLoginHistory(): Observable<LoginHistory[]> {
    return this.http.get<LoginHistory[]>('api/log');
  }
}
