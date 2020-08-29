import {Component} from '@angular/core';
import {AuthenService} from "../../shared/service/authen.service";
import {LoginRequest} from "../../../generated-model/model";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  loginRequest = {} as LoginRequest;

  constructor(private authenService: AuthenService) {
  }

  async login() {
    await this.authenService.authentication(this.loginRequest);
  }
}
