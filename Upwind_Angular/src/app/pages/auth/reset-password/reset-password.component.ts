import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  imports:[
    CommonModule,
    RouterLink
  ]
})
export class ResetPasswordComponent {
  year = new Date().getFullYear();

}
