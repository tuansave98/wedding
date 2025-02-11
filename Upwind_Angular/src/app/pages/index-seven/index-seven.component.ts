import { Component } from '@angular/core';


import { NavbarComponent } from "../../components/navbar/navbar.component";
import {NgxTypedJsModule} from 'ngx-typed-js';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AboutComponent } from "../../components/about/about.component";
import { ServicesComponent } from "../../components/services/services.component";
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { ReviewComponent } from "../../components/review/review.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { TeamComponent } from "../../components/team/team.component";
import { BlogComponent } from "../../components/blog/blog.component";
import { ContactusComponent } from "../../components/contactus/contactus.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-index-seven',
  templateUrl: './index-seven.component.html',
  styleUrls: ['./index-seven.component.scss'],
  imports: [
    NavbarComponent,
    NgxTypedJsModule,
    CommonModule,
    RouterLink,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ReviewComponent,
    PricingComponent,
    TeamComponent,
    BlogComponent,
    ContactusComponent,
    FooterComponent,
]
})
export class IndexSevenComponent {
  imageSource = ''

  imageUrls = [ 
    '/assets/images/bg/1.jpg',
    '/assets/images/bg/2.jpg',
    '/assets/images/bg/3.jpg',
]; 

ngOnInit(): void {
  this.changeBackground();
  setInterval(() => {
    this.changeBackground();
  }, 3000); 
}

private changeBackground(): void {
  const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
  this.imageSource = this.imageUrls[randomIndex];
}

 
}
