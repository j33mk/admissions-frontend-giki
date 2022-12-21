import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingLayoutComponent} from './commons/layouts/landing-layout/landing-layout.component';
import {DashboardLayoutComponent} from './commons/layouts/dashboard-layout/dashboard-layout.component';
import {AppLayoutHeaderComponent} from './commons/layouts/app-layout-header/app-layout-header.component';
import {AppLayoutFooterComponent} from './commons/layouts/app-layout-footer/app-layout-footer.component';
import {
  DashboardLayoutHeaderComponent
} from './commons/layouts/dashboard-layout-header/dashboard-layout-header.component';
import {
  DashboardLayoutFooterComponent
} from './commons/layouts/dashboard-layout-footer/dashboard-layout-footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    DashboardLayoutComponent,
    AppLayoutHeaderComponent,
    AppLayoutFooterComponent,
    DashboardLayoutHeaderComponent,
    DashboardLayoutFooterComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
