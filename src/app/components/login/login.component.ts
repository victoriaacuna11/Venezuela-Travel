import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public lgUser="romel";
  public lgPassword="123";

  public username:any;
  public password:any;

  public property=false;

  constructor(private router:Router,
               
    ) { }

  ngOnInit() {
  }

  
   onLogin(){


      





     if(this.lgUser==this.username && this.lgPassword==this.password){

       console.log(this.username+this.password);

       this.router.navigate(['/admin/dashboard']);

     }else{
      
       this.property=true;
      
    }

    
    

 }

}
