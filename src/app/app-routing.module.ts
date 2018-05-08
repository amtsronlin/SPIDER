import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkitemComponent} from './workitem/workitem.component';
import { CreateComponent } from './workitem/create/create.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScopeComponent } from './scope/scope.component';
import { RelationComponent } from './relation/relation.component';

const routes: Routes = [
  {
    path: '',                       // {1}
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],       // {2}
    children: [
      {
        path: '',
        component: DashboardComponent   // {3}
      },
      {
        path: 'scope',
        component: ScopeComponent   // {3}
      },
      { path: 'relation', component: RelationComponent }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent, // {4}
    children: [
      {
        path: 'login',
        component: LoginComponent   // {5}
      }
    ]
  }
];
// const routes: Routes = [
//   // { path: '', redirectTo: 'workitem', pathMatch: 'full'},
//   // { path: 'workitem', component: WorkitemComponent},
//   // { path: 'create', component: CreateComponent },
//   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//   // { path: 'login', component: LoginComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
