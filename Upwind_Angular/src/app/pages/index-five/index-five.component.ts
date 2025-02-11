import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from "../../components/about/about.component";
import { ServicesComponent } from "../../components/services/services.component";
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { ReviewComponent } from "../../components/review/review.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { TeamComponent } from "../../components/team/team.component";
import { BlogComponent } from "../../components/blog/blog.component";
import { ContactusComponent } from "../../components/contactus/contactus.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SwitcherComponent } from "../../components/switcher/switcher.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-five',
  templateUrl: './index-five.component.html',
  styleUrls: ['./index-five.component.scss'],
  imports: [
    CommonModule,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ReviewComponent,
    PricingComponent,
    TeamComponent,
    BlogComponent,
    ContactusComponent,
    FooterComponent,
    SwitcherComponent,
    RouterLink
]
})
export class IndexFiveComponent {

}
