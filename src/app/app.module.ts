import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SendComplaintComponent } from './send-complaint/send-complaint.component';
import { EngineerComponent } from './engineer/engineer.component';
import { MyComplaintComponent } from './my-complaint/my-complaint.component';
import { AsignToEngineerComponent } from './asign-to-engineer/asign-to-engineer.component';
import { ManagerComponent } from './manager/manager.component';
import { AllUserComponent } from './all-user/all-user.component';
import { AisgnAllComplaintComponent } from './aisgn-all-complaint/aisgn-all-complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    SendComplaintComponent,
    EngineerComponent,
    MyComplaintComponent,
    AsignToEngineerComponent,
    ManagerComponent,
    AllUserComponent,
    AisgnAllComplaintComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
