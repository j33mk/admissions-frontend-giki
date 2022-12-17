import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.prepareForm();
  }

  prepareForm(){
    return this.loginForm = this.fb.group(
      {
        'email': ['', Validators.required],
        'password': ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    const _loader = document.getElementById('loader');

    (async () => {

      await this.delay(2000);

      if (_loader !== null) {
        _loader.style.display = 'none';
      }

    })();
  }

  login(){
    console.log(this.loginForm.value);
    let user = this.loginForm.value;
    // this._userService.authenticateUser(user).subscribe((response) => {
    //   console.log(response);
    //   localStorage.setItem('token', (response as any).token)
    // });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

}
