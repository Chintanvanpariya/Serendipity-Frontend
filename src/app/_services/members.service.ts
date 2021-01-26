import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private http:HttpClient
  ) { }

  baseUrl = environment.apiUrl;
 
  getMembers(){
    return this.http.get<Member[]>(this.baseUrl+'users') ;
  }

  getMember(username:string){
    return this.http.get<Member>(this.baseUrl+'users/' + username) ;
  }
}
