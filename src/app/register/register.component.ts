import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any={};
  @Output() cancelRegister=new EventEmitter();
  registerForm:FormGroup;

  constructor(
    private accountService:AccountService,
    private toast : ToastrService
  ) { }

  ngOnInit(): void {
    this.initializeform();
  }

  initializeform(){
    this.registerForm= new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.minLength(4),
      Validators.maxLength(12),Validators.required ]),
      confirmPassword:new FormControl('',[Validators.required,this.matchValue('password')]),
    })
  }

  matchValue(matchTo:string):ValidatorFn {
    return (control:AbstractControl)=>{
      return control?.value === control?.parent.controls[matchTo].value 
      ? null : {isMatching : true}
    }
  } 

  register(){
     console.log(this.registerForm.value);
    // console.log(this.model);
    // this.accountService.register(this.model).subscribe(
    //   response => {
    //     console.log(response);
    //     this.cancel();
    //   }
    // ,error => {
    //  console.log(error);
    //  this.toast.error(error.error);
    // });
  }

  cancel(){
    console.log("cancelled");
    this.cancelRegister.emit(false);
  }
}
