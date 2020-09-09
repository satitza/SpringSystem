import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "./admin.routing";
import {LogHistoryComponent} from './log-history/log-history.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [LogHistoryComponent, UserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {

}
