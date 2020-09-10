import {Component, OnInit} from '@angular/core';
import {AdminService} from "../service/admin.service";
import {LoginHistory} from "../../../../generated-model/model";
import {LoginNotifyWebSocket} from "../../../shared/websocket/LoginNotifyWebSocket";

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css']
})
export class LogHistoryComponent implements OnInit {

  loginHistorys: LoginHistory[];
  sumUserLogin: number = 0;

  sumLoginWebSocket: LoginNotifyWebSocket;

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.initialWebSocket();
    this.getAllHistory();
  }

  getAllHistory() {
    this.adminService.getAllLoginHistory().subscribe(res => {
      if (res) {
        this.loginHistorys = res;
      }
    });
  }

  initialWebSocket() {
    this.initialUserLoginWebSocket();
  }

  initialUserLoginWebSocket() {
    this.sumLoginWebSocket = new LoginNotifyWebSocket();
    this.sumLoginWebSocket._connect();
    this.sumLoginWebSocket.response.subscribe(e => {
      this.sumUserLogin = e;
    });
  }
}
