import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitcherComponent } from "./components/switcher/switcher.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
