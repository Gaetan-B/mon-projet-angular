import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from "./services/appareil.services";
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthService} from "./services/auth.service";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import {AuthGuard} from "./services/auth-guard.service";
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import {CommonModule} from "@angular/common";
import {UserServices} from "./services/user.services";
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard] ,component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard] ,component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard] ,component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOFourComponent },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
