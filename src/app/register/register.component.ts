import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister=new EventEmitter();
  registerForm:FormGroup;
  maxDate: Date ;
  validationErrors:string[]=[];

  constructor(
    private fb:FormBuilder,
    private accountService:AccountService,
    private toast:ToastrService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.initializeform();
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  initializeform(){
    this.registerForm= this.fb.group({
      gender: ['male'],
      username: ['',Validators.required],
      knownAs: ['',Validators.required],
      dateOfBirth: ['',Validators.required],
      city: ['',Validators.required],
      country: ['',Validators.required],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12) ]],
      confirmPassword:['',[Validators.required,this.matchValues('password')] ],
    })
  }

  matchValues(matchTo:string):ValidatorFn {
    return (control:AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value 
      ? null : {isMatching : true}
    }
  } 

  register(){
    
    this.accountService.register(this.registerForm.value).subscribe(
      response => {
        this.router.navigateByUrl('/members');
      }
    ,error => {
     console.log(error);
      this.validationErrors = error;
    });
  }

  cancel(){
    console.log("cancelled");
    this.cancelRegister.emit(false);
  }
}
