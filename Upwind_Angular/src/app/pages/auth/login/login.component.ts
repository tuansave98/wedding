import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[
    RouterLink
  ]
})
export class LoginComponent {
  year = new Date().getFullYear();
}
