import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {


    switchTheme() {
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");
      document.querySelector(".theme-mode.light-theme")?.classList.toggle("visible");
      document.querySelector(".theme-mode.dark-theme")?.classList.toggle("visible");
    }
}
