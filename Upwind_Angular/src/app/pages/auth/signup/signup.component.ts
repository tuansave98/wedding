import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports:[
    CommonModule,
    RouterLink
  ]
})
export class SignupComponent {
  year = new Date().getFullYear();

}
