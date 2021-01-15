import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  login(model:any):Observable<any>{
    return this.http.post<any>(this.baseUrl + 'account/login' , model);
  }
}
