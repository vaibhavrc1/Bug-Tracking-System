import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { User } from '../payload/User';

@Injectable({
  providedIn: 'root'
})
export class AdminauthenticationService {
  User:Admin;
  public currentUser: Admin;
  private baseUrl = 'http://localhost:8088/api';
  constructor(private httpClient: HttpClient) { 
      
  }
  alogin(adminUser:User) :Observable<any>{
	//JSON.stringify(this.adminLogin.value))	;
			
	//localStorage.setItem('currentUser', JSON.stringify(User))	
	  return this.httpClient.post(`${this.baseUrl}/admin/admin-login`, adminUser);	
	}

	alogout() {
		// remove user from local storage and set current user to null
		localStorage.removeItem('currentUser');
		//this.currentUser = null;
		 window.location.reload();
	}
}
