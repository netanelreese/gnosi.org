import { Component } from '@angular/core';
import { SidebarService } from '../services/sidebar.service'; // Adjust the path if needed

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
