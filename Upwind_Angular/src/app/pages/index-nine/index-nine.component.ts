import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
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
  selector: 'app-index-nine',
  templateUrl: './index-nine.component.html',
  styleUrl: './index-nine.component.scss',
  imports: [
    NavbarComponent,
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
    FooterComponent
]
})
export class IndexNineComponent {

  open = false
  
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
      this.route.fragment.subscribe((fragment: string | null) => {
        if (fragment) this.jumpToSection(fragment);
      });
    }
    jumpToSection(section: string | null) {
      if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
}
