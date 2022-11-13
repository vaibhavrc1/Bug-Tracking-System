import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugComponent } from './bug/bug.component';
import { CreateBugComponent } from './bug/create-bug/create-bug.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { ErrorComponent } from './error/error.component';
import { BugListComponent } from './bug/bug-list/bug-list.component';
import { UpdateBugComponent } from './bug/update-bug/update-bug.component';
import { BugServiceService } from './services/bug-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBugComponent } from './bug/delete-bug/delete-bug.component';
import { BugDetailsComponent } from './bug/bug-details/bug-details.component';
import { BugListByStatusComponent } from './bug/bug-list-by-status/bug-list-by-status.component';
import { SearchBugComponent } from './bug/search-bug/search-bug.component';
import { AssignBugToProjectComponent } from './bug/assign-bug-to-project/assign-bug-to-project.component';
import { AssignBugToEmployeeComponent } from './bug/assign-bug-to-employee/assign-bug-to-employee.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BugStatsComponent } from './bug/bug-stats/bug-stats.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmpServiceService } from './services/emp-service.service';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { DeleteProjectComponent } from './project/delete-project/delete-project.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { AddEmpComponent } from './project/add-emp/add-emp.component';
import { DeleteEmpComponent } from './project/delete-emp/delete-emp.component';
import { SearchProjectComponent } from './project/search-project/search-project.component';
import { UpdateFormComponent } from './project/update-form/update-form.component';
import { ProjectServiceService } from './services/project-service.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AloginComponent } from './admin/alogin/alogin.component';
import { AlogoutComponent } from './admin/alogout/alogout.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { ElogoutComponent } from './employee/elogout/elogout.component';
import { EloginComponent } from './employee/elogin/elogin.component';
import { RoleComponent } from './role/role.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminauthenticationService } from './services/adminauthentication.service';
import { EmployeeauthenticationService } from './services/employeeauthentication.service';
import { AdminServiceService } from './services/admin-service.service';
import { EmpHomeComponent } from './employee/emp-home/emp-home.component';
import { EmpbugListComponent } from './employee/empbug-list/empbug-list.component';
import { BugUpdateSearchComponent } from './bug/bug-update-search/bug-update-search.component';



@NgModule({
  declarations: [
    AppComponent,
    BugComponent,
    CreateBugComponent,
    EmployeeComponent,
    ProjectComponent,
    ErrorComponent,
    BugListComponent,
    UpdateBugComponent,
    DeleteBugComponent,
    BugDetailsComponent,
    BugListByStatusComponent,
    SearchBugComponent,
    AssignBugToProjectComponent,
    AssignBugToEmployeeComponent,
    NavbarComponent,
    FooterComponent,
    BugStatsComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CreateProjectComponent,
    ProjectListComponent,
    UpdateProjectComponent,
    DeleteProjectComponent,
    ProjectDetailsComponent,
    AddEmpComponent,
    DeleteEmpComponent,
    SearchProjectComponent,
    UpdateFormComponent,
    AdminHomeComponent,
    AloginComponent,
    AlogoutComponent,
    SignUpComponent,
    EloginComponent,
    ElogoutComponent,
    RoleComponent,
    HomepageComponent,
    CreateAdminComponent,
    EmpHomeComponent,
    EmpbugListComponent,
    BugUpdateSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ],
  providers: [BugServiceService,EmpServiceService,ProjectServiceService,AdminauthenticationService,EmployeeauthenticationService,AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
