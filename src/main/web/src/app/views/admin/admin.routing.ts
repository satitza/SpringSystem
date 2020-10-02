import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LogHistoryComponent} from "./log-history/log-history.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {UserComponent} from "./user/add-user/user.component";

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'list-user'
      },
      {
        path: 'list-user',
        data: {
          title: 'List User'
        },
        component: ListUserComponent
      },
      {
        path: 'add-user',
        data: {
          title: 'Add User'
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
