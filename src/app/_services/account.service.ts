import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:5000/api/';
  private currentUserSource= new ReplaySubject<User>(1);
  currentUser$ =this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

  login(model:any):Observable<any>{
    return this.http.post<any>(this.baseUrl + 'account/login' , model).pipe(
      map((response:User)=> {
        const user =response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  register(model:any){
    return this.http.post(this.baseUrl+'account/register', model).pipe(
      map((user:User) => {
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
    
  }
}
