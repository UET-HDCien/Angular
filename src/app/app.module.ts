import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AaaComponent } from './aaa/aaa.component';

const appRoutes: Routes = [
  { path: 'abcd', component: ProfileComponent }];

@NgModule({
	declarations: [
    AppComponent,
    ProfileComponent,
    AaaComponent,
  ],
  
  imports: [
  	BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],

  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
