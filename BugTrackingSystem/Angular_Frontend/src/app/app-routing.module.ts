import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AloginComponent } from './admin/alogin/alogin.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { AssignBugToEmployeeComponent } from './bug/assign-bug-to-employee/assign-bug-to-employee.component';
import { AssignBugToProjectComponent } from './bug/assign-bug-to-project/assign-bug-to-project.component';
import { BugDetailsComponent } from './bug/bug-details/bug-details.component';
import { BugListComponent } from './bug/bug-list/bug-list.component';
import { BugUpdateSearchComponent } from './bug/bug-update-search/bug-update-search.component';
import { BugComponent } from './bug/bug.component';
import { CreateBugComponent } from './bug/create-bug/create-bug.component';
import { DeleteBugComponent } from './bug/delete-bug/delete-bug.component';
import { SearchBugComponent } from './bug/search-bug/search-bug.component';
import { UpdateBugComponent } from './bug/update-bug/update-bug.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EloginComponent } from './employee/elogin/elogin.component';
import { EmpHomeComponent } from './employee/emp-home/emp-home.component';
import { EmpbugListComponent } from './employee/empbug-list/empbug-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddEmpComponent } from './project/add-emp/add-emp.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { DeleteEmpComponent } from './project/delete-emp/delete-emp.component';
import { DeleteProjectComponent } from './project/delete-project/delete-project.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { SearchProjectComponent } from './project/search-project/search-project.component';
import { UpdateFormComponent } from './project/update-form/update-form.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: '', redirectTo: 'adminhome', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'bug', component: BugComponent },
  { path: 'create-bug', component: CreateBugComponent},
  { path: 'remove-bug', component: DeleteBugComponent},
  { path: 'update-bug/:id', component: UpdateBugComponent},
  { path: 'search-bug', component: SearchBugComponent},
  { path: 'update-search-bug', component: BugUpdateSearchComponent},
  { path: 'bug-list', component: BugListComponent},
  { path: 'assign-bug-project', component: AssignBugToProjectComponent},
  { path: 'assign-bug-employee', component: AssignBugToEmployeeComponent},  
  { path: 'bug/:id', component: BugDetailsComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'searchEmployee', component: SearchEmployeeComponent },
  { path: 'updateEmployee', component: UpdateEmployeeComponent },
  { path: 'deleteEmployee', component: DeleteEmployeeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: 'employeeHome', component: EmpHomeComponent},
  { path: 'create', component: CreateProjectComponent},
  { path: 'getAll', component: ProjectListComponent},
  { path: 'update/:id', component: UpdateProjectComponent},
  { path: 'delete', component: DeleteProjectComponent},
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'addEmp', component: AddEmpComponent },
  { path: 'deleteEmp', component:DeleteEmpComponent },
  { path: 'get', component: SearchProjectComponent },
  { path: 'search', component: UpdateFormComponent },
  { path: 'project/AddEmp/:pid/:eid', component: AddEmpComponent },
  { path: 'project/DeleteEmp/:pid/:eid', component: DeleteEmpComponent },
  { path: 'adminhome',component:AdminHomeComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'home/role', component: RoleComponent},
  { path: 'home/role/alogin', component: AloginComponent},
  { path: 'home/role/elogin', component: EloginComponent},
  { path: 'role/alogin/signUp', component: SignUpComponent},
  { path: 'role/alogin/createAdmin', component: CreateAdminComponent},
  { path: 'bugs/:id', component: EmpbugListComponent},

  { path: '**', component: ErrorComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
