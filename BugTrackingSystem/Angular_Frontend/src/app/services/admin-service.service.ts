import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../payload/User';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl = 'http://localhost:8088/api';
  constructor(private http: HttpClient) { }
  createAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/admin/create-admin`, admin);
  }
  
  }

