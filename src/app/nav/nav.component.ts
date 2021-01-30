import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model : any ={
    "username":"lisa",
    "password":"Pa$$w0rd"
  };

  constructor(
    public accountService : AccountService,
    private router: Router,  
    private toast : ToastrService
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe(reponse=>{
      console.log(reponse);
      this.router.navigateByUrl("/members");
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }

}
