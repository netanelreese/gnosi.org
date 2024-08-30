import { Component, HostListener } from '@angular/core';
import { SidebarService } from '../services/sidebar.service'; // Adjust the path if needed

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private sidebarService: SidebarService) {}

  isVisible = true;
  lastScrollPosition = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > this.lastScrollPosition) {
      // Scrolling down
      this.isVisible = false;
    } else {
      // Scrolling up
      this.isVisible = true;
    }

    this.lastScrollPosition = currentScrollPosition;
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
