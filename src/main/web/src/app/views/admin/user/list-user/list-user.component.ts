import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../service/admin.service";
import {User} from "../../../../../generated-model/model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe(res => {
      if (res) {
        this.users = res;
      }
    });
  }

}
