import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { VerifyOtpComponent } from './pages/verify-otp/verify-otp.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { EventListingComponent } from './pages/event-listing/event-listing.component';
import { UserListingComponent } from './pages/user-listing/user-listing.component';
import { CreateNewEventComponent } from './pages/create-new-event/create-new-event.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'verifyotp', component: VerifyOtpComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'my-events-listing', component: EventListingComponent },
  { path: 'user-listing', component: UserListingComponent },
  { path: 'create-new-event', component: CreateNewEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
