import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {

  baseUrl = 'http://localhost:5000/api/';
  validationError:string[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  get404error(){
    this.http.get(this.baseUrl+'buggy/not-found').subscribe(reponse=>{
      console.log(reponse);
    },error=>{
      console.log(error);
      
    })
  }

  get400error(){
    this.http.get(this.baseUrl+'buggy/bad-request').subscribe(reponse=>{
      console.log(reponse);
    },error=>{
      console.log(error);
      
    })
  }

  get500error(){
    this.http.get(this.baseUrl+'buggy/server-error').subscribe(reponse=>{
      console.log(reponse);
    },error=>{
      console.log(error);
      
    })
  }

  get401error(){
    this.http.get(this.baseUrl+'buggy/auth').subscribe(reponse=>{
      console.log(reponse);
    },error=>{
      console.log(error);
      
    })
  }

  get400validationError(){
    this.http.post(this.baseUrl+'account/register',{}).subscribe(reponse=>{
      console.log(reponse);
    },error=>{
      console.log(error);
      this.validationError=error;
    })
  }
}
