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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { GoogleMapsModule } from '@angular/google-maps';
import { UserListingComponent } from './pages/user-listing/user-listing.component';
import { CreateNewEventComponent } from './pages/create-new-event/create-new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VerifyOtpComponent,
    UserRegistrationComponent,
    EventListingComponent,
    NavComponent,
    UserListingComponent,
    CreateNewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
