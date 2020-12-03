import { NgModule } from '@angular/core';

//import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserListComponent } from './components/user-list/user-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { UserCardComponent } from './components/user-card/user-card.component'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
      HomeComponent,UserListComponent, UserCardComponent],
  imports: [HomeRoutingModule,FormsModule,CommonModule,
    ReactiveFormsModule,ClarityModule]
})
export class HomeModule {}