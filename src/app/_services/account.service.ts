import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  private currentUserSource= new ReplaySubject<User>(1);
  currentUser$ =this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model:any):Observable<any>{
    return this.http.post<any>(this.baseUrl + 'account/login' , model).pipe(
      map((response:User)=> {
        const user =response;
        if(user){
          this.setCurrentUser(user);
        }
        return response;
      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  setCurrentUser(user:User){
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  
  register(model:any){
    return this.http.post(this.baseUrl+'account/register', model).pipe(
      map((user:User) => {
        if(user){
          this.setCurrentUser(user);
        }
      })
    );
    
  }
}
