import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavModule } from './components/side-nav/side-nav.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'sidenav',
    component: SideNavComponent,
    children: [
      {
        path: 'nav',
        loadChildren: () =>
          import('./components/side-nav/container/container.module').then(
            (m) => m.ContainerModule
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
