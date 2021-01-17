import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any={};
  @Output() cancelRegisterrrr=new EventEmitter();

  constructor(
    private accountService:AccountService
  ) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.model);
    this.accountService.register(this.model).subscribe(
      response => {
        console.log(response);
        this.cancel();
      }
    ),error=>{
     console.log(error);
     
    };
  }

  cancel(){
    console.log("cancelled");
    this.cancelRegisterrrr.emit(false);
  }
}
