import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LogHistoryComponent} from "./log-history/log-history.component";

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'history'
      },
      {
        path: 'history',
        data: {
          title: 'History'
        },
        component: LogHistoryComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
