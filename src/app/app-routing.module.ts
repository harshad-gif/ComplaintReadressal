import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AisgnAllComplaintComponent } from './aisgn-all-complaint/aisgn-all-complaint.component';
import { AllUserComponent } from './all-user/all-user.component';
import { AsignToEngineerComponent } from './asign-to-engineer/asign-to-engineer.component';
import { AuthGuard } from './auth/auth.guard';
import { EngineerComponent } from './engineer/engineer.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MyComplaintComponent } from './my-complaint/my-complaint.component';
import { SendComplaintComponent } from './send-complaint/send-complaint.component';
import { ComplaintResolverService } from './services/complaint-resolver.service';

import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'comp',component:MyComplaintComponent},
  {path:'alluser',component:AllUserComponent},
  {path:'allAsignComplaint',component:AisgnAllComplaintComponent},
  {path:'engineer',component:EngineerComponent,resolve:{complaint:ComplaintResolverService}},
  {path:'asign',component:AsignToEngineerComponent,resolve:{complaint:ComplaintResolverService}},
  {path:"send",component:SendComplaintComponent},
  {path:"manager",component:ManagerComponent},
  {path:'user',component:UserComponent,
  
  canActivate:[AuthGuard],data:{roles:['User']},

},

  {path:'admin',component:AdminComponent
  ,canActivate:[AuthGuard],data:{roles:["Admin"]}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
