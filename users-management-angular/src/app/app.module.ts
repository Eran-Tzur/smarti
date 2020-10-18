import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserFormComponent } from './components/users-management/user-form/user-form.component';
import { UsersListComponent } from './components/users-management/users-list/users-list.component';
import { UserDetailsComponent } from './components/users-management/user-details/user-details.component';
import { UserItemComponent } from './components/users-management/users-list/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserFormComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
