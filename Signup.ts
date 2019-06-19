import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators} from '@angular/forms';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  userName = new FormControl('', [Validators.required]);
  companyName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]); 
  user = { username :'',companyname:'', email:'', password:'', cpassword: ''}
//   myForm: FormGroup;
//   matcher = new MyErrorStateMatcher();
MatchPasswords(){
  return this.password.value === this.confirmPassword.value;
}

  getErrorEmail() {
    return this.email.hasError('required') ? 'You must enter the email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorUser() {
    return this.userName.hasError('required') ? 'You must enter the username' : '';
  }
  getErrorCompany() {
    return this.companyName.hasError('required') ? 'You must enter the company name' : '';
   
  }
  getErrorPassword() {
    return this.password.hasError('required') ? 'You must enter the password':
    this.password.hasError('minlength') ? 'Must contain at least 6 characters': '';
  }
  // getErrorConfirmPassword() {
  //   return this.confirmPassword.hasError('required') ? 'You must enter the password' :
  //   this.confirmPassword.hasError('minlength') ? 'Must contain at least 6 characters': ''; '';
  // }

  constructor(private router: Router, private http:HttpClient) { 
  
}

  ngOnInit() {
  }

  OnSignup() { 
    // this.http.post(environment.API_END_POINT + 'register', {
    //   params: new HttpParams().append('user', this.userService.user).append('domain', this.userService.user.email.split('@')[1])
    // }, { headers: new HttpHeaders().append('x-ap-auth', 'thisisatesttoken') }).subscribe((res: any) => {
    //   console.log(res)
      
    // });

  }

}
