import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'integration';

  showMobileNav = false;

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }
}
