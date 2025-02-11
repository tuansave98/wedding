import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';
import { BlogComponent } from "../../components/blog/blog.component";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  imports: [
    NavbarComponent,
    CommonModule,
    FooterComponent,
    RouterLink,
    BlogComponent
]
})
export class BlogDetailComponent {
  social= [
    'uil uil-dribbble align-middle',
    'uil uil-behance align-middle',
    'uil uil-linkedin align-middle',
    'uil uil-facebook-f align-middle',
    'uil uil-instagram align-middle',
    'uil uil-twitter align-middle',
  ]
}
