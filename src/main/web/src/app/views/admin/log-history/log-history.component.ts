import {Component, OnInit} from '@angular/core';
import {AdminService} from "../service/admin.service";
import {LoginHistory} from "../../../../generated-model/model";

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css']
})
export class LogHistoryComponent implements OnInit {

  loginHistorys: LoginHistory[];
  sumUserLogin: number = 0;

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getAllHistory();
  }

  getAllHistory() {
    this.adminService.getAllLoginHistory().subscribe(res => {
      if (res) {
        this.loginHistorys = res;
      }
    });
  }
}
