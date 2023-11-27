import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    ngOnInit() {
      const theme = localStorage.getItem("selectedTheme")? localStorage.getItem("selectedTheme") : "light-theme";
      document.body.className = "";
      document.body.classList.add(theme!);
    }

  switchTheme() {
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");
      document.querySelector(".theme-mode.light-theme")?.classList.toggle("visible");
      document.querySelector(".theme-mode.dark-theme")?.classList.toggle("visible");
      localStorage.setItem("selectedTheme", document.body.className);
    }
}
