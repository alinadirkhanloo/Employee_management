import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/side-nav/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavModule } from './components/side-nav/side-nav.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'test',component:DashboardComponent},
  {
    path: 'sidenav',
    component: SideNavComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SideNavModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
