import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
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
  selector: 'app-index-eight',
  templateUrl: './index-eight.component.html',
  styleUrls: ['./index-eight.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ReviewComponent,
    PricingComponent,
    TeamComponent,
    BlogComponent,
    ContactusComponent,
    FooterComponent
]
})
export class IndexEightComponent {

}
