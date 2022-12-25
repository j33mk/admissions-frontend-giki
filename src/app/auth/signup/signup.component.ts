import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private _router: Router) {
    this.signupForm = this.prepareForm();
  }

  ngOnInit(): void {
  }

  prepareForm() {
    return new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'middleName': new FormControl(''),
      'lastName': new FormControl('', Validators.required),
      'cnic': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.email),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required),
      'imageFile': new FormControl('', Validators.required),
      'imageSrc': new FormControl('', Validators.required),
    })
  }

  signup(): void {
    let user = this.signupForm.value;
    // Perform some validations
    delete user['confirmPassword'];
    delete user['imageFile']
    console.log(user);
    // this._userService.registerUser(user).subscribe((response) => {
    //   if(response?.id){
    //     this._router.navigate(['/']);
    //   }
    //
    // });
  }

  onImageSelected(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.signupForm.patchValue({
          imageSrc: reader.result
        });
      };
    }
  }
}
