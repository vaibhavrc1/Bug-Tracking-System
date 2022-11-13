import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { User } from '../payload/User';

@Injectable({
  providedIn: 'root'
})
export class EmployeeauthenticationService {
	User:Employee;
	public currentUser: Employee;
	private baseUrl = 'http://localhost:8088/api';

  constructor(private httpClient: HttpClient) { 
   
  }
  elogin(employeeUser:User) :Observable<any>{
	return this.httpClient.post(`${this.baseUrl}/employees/employee-login`, employeeUser);	
	}

	elogout() {
		// remove user from local storage and set current user to null
		localStorage.removeItem('currentUser');
		this.currentUser = null;
		// window.location.reload();
	}
}
