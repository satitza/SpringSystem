import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "./admin.routing";
import {LogHistoryComponent} from './log-history/log-history.component';


@NgModule({
  declarations: [LogHistoryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {

}
