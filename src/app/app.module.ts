import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {AboutComponent} from './about/about.component';
import {UserComponent} from './user/user.component';
import {UsersComponent} from './user/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
