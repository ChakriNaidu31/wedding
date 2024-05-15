import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgOtpInputModule } from  'ng-otp-input';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { VerifyOtpComponent } from './pages/verify-otp/verify-otp.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { EventListingComponent } from './pages/event-listing/event-listing.component';
import { NavComponent } from './pages/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VerifyOtpComponent,
    UserRegistrationComponent,
    EventListingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
