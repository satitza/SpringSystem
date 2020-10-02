import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {Authority, Role, User} from "../../../../../generated-model/model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  roles: Role[];
  authorities: Authority[];

  user = {
    enabled: true,
    roles: [{}],
    authorities: [{}]
  } as User;

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getMaster();
  }

  getMaster() {
    this.getAllRoles();
    this.getAllAuthorities();
  }

  getAllRoles() {
    this.adminService.getAllRoles().subscribe(res => {
      if (res) {
        this.roles = res;
      }
    });
  }

  getAllAuthorities() {
    this.adminService.getAllAuthorities().subscribe(res => {
      if (res) {
        this.authorities = res;
      }
    });
  }

  createUserAccount() {
    this.adminService.createUserAccount(this.user).subscribe(res => {
      console.log(res);
    });
  }

}
