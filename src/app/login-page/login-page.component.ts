import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {SecurityService} from "../security.service";
import {LoginData} from "../loginData";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  email = new FormControl('')
  password = new FormControl('')
  token: string | undefined
  loginData: LoginData = {email: "", password: ""}

  constructor(
    private securityService: SecurityService,
  ) { }

  ngOnInit(): void {
  }

  public doLogin(): void{
    this.loginData.email = this.email.value;
    this.loginData.password = this.password.value;
    this.securityService.postLogin(this.loginData)
      .subscribe(token => this.token = token);
  }

  public logToken(): void{
    console.log(this.token);
  }

}
