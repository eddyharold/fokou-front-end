import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponent implements OnInit {
  hide = true;

  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  registerForm = this.fb.group({
    name: ["", Validators.required],
    firstname: ["", Validators.required],
    phoneNumber: ["", Validators.required],
    personality: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  getPassErrorMessage() {
    if (this.loginForm.controls['pass'].hasError("required")) {
      return "you have to enter your password ..."
    }
    return "you have to enter your password";
  }

  getMailErrorMessage() {
    if (this.loginForm.controls['email'].hasError('required')) {
      return "you have to enter your email ...";
    }
    return "you have to enter your email ...";
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (data: any) => {
        alert(`Bienvenue ${data?.name} ${data?.firstname}`);
        window.localStorage.setItem('mini-projet-user', JSON.stringify(data));
        this.route.navigate(['dashboard']);
      }
    )
  }

  register() {
    this.userService.register(this.registerForm.value).subscribe(
      (data: any) => {
        alert(`${data?.name} ${data?.firstname} votre compte a été créer`);
        this.registerForm.reset();
      }
    )
  }
}

