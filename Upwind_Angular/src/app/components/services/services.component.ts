import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports:[
    CommonModule
  ]
})
export class ServicesComponent {
  services = [
    {
      logo: 'adjust-circle',
      title: 'Grow Your Business',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      logo: 'circuit',
      title: 'Drive More Sales',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit',
      shadow:true
    },
    {
      logo: 'fire',
      title: 'Handled By Expert',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      logo: 'flower',
      title: 'Discussion For Idea',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit',
      shadow:true
    },
    {
      logo: 'shopping-basket',
      title: 'Increase Conversion',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
      logo: 'flip-h',
      title: 'Sales Growth Idea',
      desc: 'The phrasal sequence of the is now so that many campaign and benefit',
      shadow:true
    }
  ]
}
