import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: [
    './switcher.component.scss'
  ],
  imports:[
    CommonModule,
    RouterLink
  ]
})
export class SwitcherComponent {
  toggleMode() {
    const switcherRtl = document.getElementById("switchRtl") as any;
    if (switcherRtl.innerText === "LTR") {
      document.documentElement.dir = "ltr"
    }
    else {
      document.documentElement.dir = "rtl"
    }
  }

  changeMode() {
    const htmlTag = document.documentElement;
    if (htmlTag.className.includes("dark")) {
      htmlTag.className = 'light'
    } else {
      htmlTag.className = 'dark'
    }
  }

  scroll:boolean = false

  @HostListener("window:scroll",[])

  ngOnInit(): void {
    if(window.scrollY > 50){
      this.scroll = true
    }else{
      this.scroll = false
    }
  }

  topFunction(e:any){
    e.preventDefault()
    window.scrollTo(0, 0)
  }

}
