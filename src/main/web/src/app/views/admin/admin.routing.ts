import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LogHistoryComponent} from "./log-history/log-history.component";

export const routes: Routes = [
  {
    path: 'log-history',
    component: LogHistoryComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
