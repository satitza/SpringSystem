import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "./admin.routing";
import {LogHistoryComponent} from './log-history/log-history.component';
import {UserComponent} from './user/add-user/user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListUserComponent } from './user/list-user/list-user.component';


@NgModule({
  declarations: [LogHistoryComponent, UserComponent, ListUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule {

}
