import { CommonModule } from '@angular/common';
import { Component, OnInit , HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports :[
    CommonModule,
    RouterLink
  ]
})
export class NavbarComponent implements OnInit {
  target: any;
  active: any = '#home';
  currentRoute: any;

  constructor(public router: Router, renderer: Renderer2) {
    if (router.url !== '/index-four' && router.url !== '/index-five' && router.url !== '/index-nine')
      this.currentRoute = true;
  }
  windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar != null) {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    }
  }

  ScrollIntoView(elem: string) {
    this.active = elem;
    let ele = document.querySelector(elem) as any;
    ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

 

  // name = 'Angular ' + VERSION.major;
  //   sections: NodeListOf<HTMLElement>;
  //   navLi: NodeListOf<HTMLElement>;
  
  sections:any;
  navLi:any;

    ngOnInit() {
      this.sections = document.querySelectorAll('section');
      this.navLi = document.querySelectorAll('nav .container .navigation ul li');
    }
  
    current: any = '';
    scrolled: boolean = false;

    @HostListener('window:scroll', ['$event'])
    onscroll() {
      this.sections.forEach((section:any) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          this.current = section.getAttribute('id');
          this.scrolled = window.scrollY > 50;
        }
      });
  
      this.navLi.forEach((li:any) => {
        if (li.classList.contains(this.current)) {
          li.classList.add('active');
        } else{
          li.classList.remove('active');
        }
      });
    }

  toggleMenu() {
    let ele = document.getElementById('menu-collapse') as any;
    ele.classList.toggle('hidden');
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId); // Find the section by ID
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
