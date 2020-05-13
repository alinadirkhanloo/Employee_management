import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav.component';


@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SideNavModule { }
