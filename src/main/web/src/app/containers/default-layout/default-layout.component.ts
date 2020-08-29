import {Component, OnInit} from '@angular/core';
import {navItems} from '../../_nav';
import {AuthenService} from "../../shared/service/authen.service";
import {UserDetails} from "../../../generated-model/model";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {

  public sidebarMinimized = false;
  public navItems = navItems;

  currentUser = {} as UserDetails;

  constructor(private authenService: AuthenService) {
  }

  ngOnInit(): void {
    // get current user
    this.authenService.getCurrentUser().pipe(first()).subscribe(res => {
      this.currentUser = res;
    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  async logout() {
    await this.authenService.logout();
  }
}
