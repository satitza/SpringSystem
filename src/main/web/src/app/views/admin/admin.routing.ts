import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LogHistoryComponent} from "./log-history/log-history.component";
import {UserComponent} from "./user/user.component";

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'user'
      },
      {
        path: 'user',
        data: {
          title: 'User'
        },
        component: UserComponent
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
